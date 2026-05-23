import { useState, useMemo } from 'react';
import { Copy, Check, Scissors, ArrowRight, TrendingDown } from 'lucide-react';

function estimateTokens(text) {
  return Math.ceil(text.length / 4);
}

// Substitution rules: [regex, replacement, reason]
const RULES = [
  // Polite filler openers
  [/\b(please\s+)?(could you|can you|would you|i was wondering if you could|i'd like you to|i want you to)\s+/gi, '', 'removed polite filler'],
  [/\bplease\s+/gi, '', 'removed "please"'],
  [/\bjust\s+/gi, '', 'removed filler "just"'],
  [/\bbasically\s+/gi, '', 'removed filler "basically"'],
  [/\bactually\s+/gi, '', 'removed filler "actually"'],
  [/\bsimply\s+/gi, '', 'removed filler "simply"'],
  [/\bkindly\s+/gi, '', 'removed "kindly"'],
  [/\bif\s+you\s+don'?t\s+mind\b/gi, '', 'removed polite filler'],
  [/\bif\s+possible\b/gi, '', 'removed hedge'],
  [/\bfeel\s+free\s+to\b/gi, '', 'removed filler'],

  // Verbose phrase → concise equivalent
  [/\bin\s+order\s+to\b/gi, 'to', 'shortened phrase'],
  [/\bdue\s+to\s+the\s+fact\s+that\b/gi, 'because', 'shortened phrase'],
  [/\bfor\s+the\s+purpose\s+of\b/gi, 'to', 'shortened phrase'],
  [/\bat\s+this\s+point\s+in\s+time\b/gi, 'now', 'shortened phrase'],
  [/\bthe\s+fact\s+that\b/gi, 'that', 'shortened phrase'],
  [/\bin\s+the\s+event\s+that\b/gi, 'if', 'shortened phrase'],
  [/\bprior\s+to\b/gi, 'before', 'shortened phrase'],
  [/\bsubsequent\s+to\b/gi, 'after', 'shortened phrase'],
  [/\bin\s+addition\s+to\b/gi, 'also', 'shortened phrase'],
  [/\ba\s+large\s+number\s+of\b/gi, 'many', 'shortened phrase'],
  [/\bthe\s+majority\s+of\b/gi, 'most', 'shortened phrase'],
  [/\bmake\s+sure\s+to\b/gi, '', 'removed filler instruction'],
  [/\bnote\s+that\b/gi, '', 'removed filler'],
  [/\bplease\s+note\s+that\b/gi, '', 'removed filler'],
  [/\bit\s+is\s+important\s+to\s+note\s+that\b/gi, '', 'removed filler'],
  [/\bI\s+am\s+writing\s+to\b/gi, '', 'removed filler opener'],

  // Redundant qualifiers
  [/\bvery\s+unique\b/gi, 'unique', 'removed redundant qualifier'],
  [/\bcompletely\s+(unique|finished|done|empty)\b/gi, '$1', 'removed redundant qualifier'],
  [/\babsolutely\s+(necessary|required|essential)\b/gi, '$1', 'removed redundant qualifier'],

  // Whitespace cleanup
  [/\s{2,}/g, ' ', 'collapsed whitespace'],
  [/^\s+|\s+$/gm, '', 'trimmed lines'],
  [/\n{3,}/g, '\n\n', 'collapsed blank lines'],
];

function applyRules(text) {
  const changes = [];
  let result = text;
  for (const [pattern, replacement, reason] of RULES) {
    const before = result;
    result = result.replace(pattern, replacement);
    if (result !== before) changes.push(reason);
  }
  // Final trim
  result = result.trim();
  return { cleaned: result, changes: [...new Set(changes)] };
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };
  return (
    <button onClick={handleCopy} className="copy-button">
      {copied ? <><Check size={16} /><span>Copied!</span></> : <><Copy size={16} /><span>Copy</span></>}
    </button>
  );
}

function PromptCleaner() {
  const [input, setInput] = useState('');

  const { cleaned, changes } = useMemo(() => {
    if (!input.trim()) return { cleaned: '', changes: [] };
    return applyRules(input);
  }, [input]);

  const inputTokens = estimateTokens(input);
  const outputTokens = estimateTokens(cleaned);
  const saved = inputTokens - outputTokens;
  const pct = inputTokens > 0 ? Math.round((saved / inputTokens) * 100) : 0;

  return (
    <div className="prompt-cleaner">
      <div className="cleaner-header">
        <h2>Prompt Cleaner</h2>
        <p>Paste any raw prompt below — filler words, verbose phrases, and redundant qualifiers are stripped automatically.</p>
      </div>

      <div className="cleaner-body">
        <div className="cleaner-panel">
          <div className="cleaner-panel-label">
            <Scissors size={16} />
            <span>Original</span>
            <span className="token-pill token-pill--neutral">~{inputTokens} tokens</span>
          </div>
          <textarea
            className="cleaner-textarea"
            placeholder="Paste your prompt here…"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>

        <div className="cleaner-arrow">
          <ArrowRight size={24} />
        </div>

        <div className="cleaner-panel">
          <div className="cleaner-panel-label">
            <TrendingDown size={16} />
            <span>Cleaned</span>
            <span className={`token-pill ${saved > 0 ? 'token-pill--green' : 'token-pill--neutral'}`}>
              ~{outputTokens} tokens
            </span>
            {saved > 0 && (
              <span className="savings-badge">-{pct}%</span>
            )}
            {cleaned && <CopyButton text={cleaned} />}
          </div>
          <div className="cleaner-output">
            {cleaned || <span className="cleaner-placeholder">Cleaned prompt will appear here…</span>}
          </div>
        </div>
      </div>

      {changes.length > 0 && (
        <div className="cleaner-changes">
          <span className="changes-label">Changes applied:</span>
          {changes.map(c => (
            <span key={c} className="change-tag">{c}</span>
          ))}
        </div>
      )}

      {saved > 0 && (
        <div className="cleaner-savings-bar">
          <TrendingDown size={14} />
          <span>Saved <strong>{saved} tokens</strong> ({pct}% reduction) — roughly <strong>${((saved / 1000) * 0.003).toFixed(5)}</strong> per call on Claude Sonnet.</span>
        </div>
      )}
    </div>
  );
}

export default PromptCleaner;
