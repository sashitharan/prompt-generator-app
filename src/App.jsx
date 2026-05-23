import { useState } from 'react';
import { Sparkles, Lightbulb, FileText, Copy, Check, Zap, Hash, Scissors } from 'lucide-react';
import PromptBuilder from './components/PromptBuilder';
import BestPractices from './components/BestPractices';
import Examples from './components/Examples';
import TokenCounter from './components/TokenCounter';
import PromptCleaner from './components/PromptCleaner';
import './App.css';

function estimateTokens(text) {
  return Math.ceil(text.length / 4);
}

// Rough cost per 1000 input tokens (USD) for common models
const MODEL_COSTS = [
  { name: 'Claude Sonnet 4.6', costPer1k: 0.003 },
  { name: 'Claude Haiku 4.5', costPer1k: 0.0008 },
  { name: 'GPT-4o', costPer1k: 0.0025 },
  { name: 'GPT-4o mini', costPer1k: 0.00015 },
];

function App() {
  const [activeTab, setActiveTab] = useState('builder');
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const tabs = [
    { id: 'builder', label: 'Prompt Builder', icon: Sparkles },
    { id: 'cleaner', label: 'Prompt Cleaner', icon: Scissors },
    { id: 'practices', label: 'Best Practices', icon: Lightbulb },
    { id: 'examples', label: 'Examples', icon: FileText },
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <Sparkles size={32} />
            <h1>AI Prompt Generator</h1>
          </div>
          <p className="subtitle">
            Build lean, effective prompts — save context costs, get better results
          </p>
        </div>
      </header>

      <main className="main-content">
        <div className="tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              >
                <Icon size={20} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="content-area">
          {activeTab === 'builder' && (
            <PromptBuilder
              onGenerate={setGeneratedPrompt}
              generatedPrompt={generatedPrompt}
            />
          )}
          {activeTab === 'cleaner' && <PromptCleaner />}
          {activeTab === 'practices' && <BestPractices />}
          {activeTab === 'examples' && <Examples />}
          {activeTab === 'counter' && <TokenCounter generatedPrompt={generatedPrompt} />}
        </div>

        {generatedPrompt && (
          <div className="generated-prompt-panel">
            <div className="panel-header">
              <div className="panel-title-row">
                <h3>Generated Prompt</h3>
                <TokenBadge text={generatedPrompt} />
              </div>
              <CopyButton text={generatedPrompt} />
            </div>

            <div className="prompt-output">
              <pre>{generatedPrompt}</pre>
            </div>

            <div className="cost-estimate-bar">
              <Zap size={14} />
              <span>Estimated input cost per call:</span>
              <div className="cost-chips">
                {MODEL_COSTS.map(model => {
                  const tokens = estimateTokens(generatedPrompt);
                  const cost = (tokens / 1000) * model.costPer1k;
                  return (
                    <span key={model.name} className="cost-chip">
                      {model.name}: <strong>${cost < 0.001 ? cost.toFixed(5) : cost.toFixed(4)}</strong>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>Built to help your team write better prompts and reduce AI costs.</p>
        <p className="copyright">© {new Date().getFullYear()} Sashitharan. All rights reserved.</p>
      </footer>
    </div>
  );
}

function TokenBadge({ text }) {
  const tokens = estimateTokens(text);
  const level = tokens < 300 ? 'lean' : tokens < 700 ? 'moderate' : 'verbose';
  const labels = { lean: 'Lean', moderate: 'Moderate', verbose: 'Verbose' };

  return (
    <div className={`token-badge token-badge--${level}`}>
      ~{tokens} tokens · {labels[level]}
    </div>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button onClick={handleCopy} className="copy-button">
      {copied ? (
        <>
          <Check size={16} />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy size={16} />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}

export default App;
