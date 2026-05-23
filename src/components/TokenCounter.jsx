import { useState, useEffect } from 'react';
import { Hash, Key, Loader, AlertCircle, CheckCircle2, Zap, Eye, EyeOff, X, TrendingUp } from 'lucide-react';

const MODELS = [
  { id: 'claude-haiku-4-5-20251001', label: 'Haiku 4.5' },
  { id: 'claude-sonnet-4-6', label: 'Sonnet 4.6' },
  { id: 'claude-opus-4-7', label: 'Opus 4.7' },
];

const ALL_COSTS = [
  { name: 'Claude Haiku 4.5', costPer1m: 0.80 },
  { name: 'Claude Sonnet 4.6', costPer1m: 3.00 },
  { name: 'Claude Opus 4.7', costPer1m: 15.00 },
  { name: 'GPT-4o', costPer1m: 2.50 },
  { name: 'GPT-4o mini', costPer1m: 0.15 },
];

function formatCost(tokens, costPer1m) {
  const cost = (tokens / 1_000_000) * costPer1m;
  if (cost < 0.00001) return `$${cost.toFixed(7)}`;
  if (cost < 0.001) return `$${cost.toFixed(5)}`;
  return `$${cost.toFixed(4)}`;
}

function CostGrid({ tokens }) {
  return (
    <div className="tc-cost-grid">
      {ALL_COSTS.map(m => (
        <div key={m.name} className="tc-cost-row">
          <span className="tc-cost-model">{m.name}</span>
          <span className="tc-cost-value">{formatCost(tokens, m.costPer1m)}</span>
        </div>
      ))}
    </div>
  );
}

function TokenCounter({ generatedPrompt }) {
  const [apiKey, setApiKey] = useState('');
  const [model, setModel] = useState('claude-sonnet-4-6');
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [keyVisible, setKeyVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('anthropic_api_key');
    if (stored) setApiKey(stored);
  }, []);

  const saveKey = (key) => {
    setApiKey(key);
    if (key) localStorage.setItem('anthropic_api_key', key);
    else localStorage.removeItem('anthropic_api_key');
  };

  const countTokens = async () => {
    if (!apiKey.trim() || !prompt.trim()) return;
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages/count_tokens', {
        method: 'POST',
        headers: {
          'x-api-key': apiKey.trim(),
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model,
          messages: [{ role: 'user', content: prompt }],
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error?.message || `API error ${res.status}`);
      }

      const data = await res.json();
      setResult(data.input_tokens);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const estimate = Math.ceil(prompt.length / 4);
  const hasPrompt = prompt.trim().length > 0;

  const accuracy = result !== null && result > 0
    ? Math.round(Math.abs(estimate - result) / result * 100)
    : null;
  const direction = result !== null && estimate >= result ? 'over' : 'under';

  return (
    <div className="token-counter">
      <div className="tc-header">
        <Hash size={28} className="tc-icon" />
        <div>
          <h2>Token Counter</h2>
          <p>Live estimate as you type — or add your Anthropic API key to get the exact count from the real tokeniser.</p>
        </div>
      </div>

      <div className="tc-body">
        {/* Prompt input — first, so results appear immediately */}
        <div className="tc-prompt-section">
          <div className="tc-prompt-label-row">
            <label className="tc-label">Prompt</label>
            {generatedPrompt && (
              <button
                className="tc-use-generated"
                onClick={() => { setPrompt(generatedPrompt); setResult(null); setError(''); }}
              >
                Use Generated Prompt ↑
              </button>
            )}
          </div>
          <textarea
            value={prompt}
            onChange={e => { setPrompt(e.target.value); setResult(null); setError(''); }}
            placeholder="Paste any prompt here — you'll see an estimate instantly."
            className="tc-textarea"
            rows={8}
            spellCheck={false}
          />
          <div className="tc-char-row">
            <span>{prompt.length.toLocaleString()} chars</span>
          </div>
        </div>

        {/* Estimate panel — always visible when there's text */}
        {hasPrompt && (
          <div className="tc-estimate-panel">
            <div className="tc-estimate-main">
              <TrendingUp size={20} className="tc-estimate-icon" />
              <div>
                <div className="tc-estimate-count">
                  ~{estimate.toLocaleString()} tokens
                  <span className="tc-estimate-badge">Estimate</span>
                </div>
                <div className="tc-estimate-note">Based on chars ÷ 4 heuristic — typically within 10–20% of the real count</div>
              </div>
            </div>
            <div className="tc-cost-breakdown">
              <div className="tc-cost-title">
                <Zap size={13} />
                Estimated input cost per call
              </div>
              <CostGrid tokens={estimate} />
            </div>
          </div>
        )}

        {/* Divider leading to exact count section */}
        {hasPrompt && (
          <div className="tc-exact-divider">
            <span>Get the exact count</span>
          </div>
        )}

        {/* API key */}
        <div className="tc-key-section">
          <label className="tc-label">
            <Key size={13} />
            Anthropic API Key <span className="tc-optional">(optional — for exact count)</span>
          </label>
          <div className="tc-key-row">
            <input
              type={keyVisible ? 'text' : 'password'}
              value={apiKey}
              onChange={e => saveKey(e.target.value)}
              placeholder="sk-ant-api03-..."
              className="tc-key-input"
              autoComplete="off"
              spellCheck={false}
            />
            <button
              className="tc-icon-btn"
              onClick={() => setKeyVisible(v => !v)}
              title={keyVisible ? 'Hide key' : 'Show key'}
            >
              {keyVisible ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
            {apiKey && (
              <button
                className="tc-icon-btn tc-icon-btn--clear"
                onClick={() => saveKey('')}
                title="Clear key"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <p className="tc-key-note">
            {apiKey
              ? '✓ Saved in localStorage — sent only to api.anthropic.com.'
              : 'Stored in localStorage only. Never logged, never shared.'}
          </p>
        </div>

        {/* Model selector */}
        <div className="tc-model-section">
          <label className="tc-label">Model Tokeniser</label>
          <div className="tc-model-pills">
            {MODELS.map(m => (
              <button
                key={m.id}
                className={`tc-model-pill ${model === m.id ? 'active' : ''}`}
                onClick={() => setModel(m.id)}
              >
                {m.label}
              </button>
            ))}
          </div>
          <p className="tc-model-note">Claude models share the same tokeniser — count is identical across all three.</p>
        </div>

        {/* Count button */}
        <button
          onClick={countTokens}
          disabled={!apiKey.trim() || !prompt.trim() || loading}
          className="tc-count-btn"
        >
          {loading
            ? <Loader size={18} className="spinning" />
            : <Hash size={18} />}
          {loading ? 'Counting…' : apiKey.trim() ? 'Count Exact Tokens' : 'Add API key above to count exact tokens'}
        </button>

        {error && (
          <div className="tc-error">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        {/* Exact result panel */}
        {result !== null && (
          <div className="tc-result">
            <div className="tc-result-main">
              <CheckCircle2 size={22} className="tc-result-check" />
              <div>
                <div className="tc-result-count">
                  {result.toLocaleString()} tokens
                  <span className="tc-exact-badge">Exact</span>
                </div>
                {accuracy !== null && (
                  <div className="tc-result-accuracy">
                    Estimate was {estimate.toLocaleString()} — {accuracy === 0 ? 'perfect match' : `${accuracy}% ${direction}`}
                  </div>
                )}
              </div>
            </div>
            <div className="tc-cost-breakdown">
              <div className="tc-cost-title">
                <Zap size={13} />
                Exact input cost per call
              </div>
              <CostGrid tokens={result} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TokenCounter;
