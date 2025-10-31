import { useState } from 'react';
import { Sparkles, Lightbulb, FileText, Copy, Check } from 'lucide-react';
import PromptBuilder from './components/PromptBuilder';
import BestPractices from './components/BestPractices';
import Examples from './components/Examples';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('builder');
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const tabs = [
    { id: 'builder', label: 'Prompt Builder', icon: Sparkles },
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
            Build better prompts for AI agents - Get the answers you need
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
          {activeTab === 'practices' && <BestPractices />}
          {activeTab === 'examples' && <Examples />}
        </div>

        {generatedPrompt && (
          <div className="generated-prompt-panel">
            <div className="panel-header">
              <h3>Generated Prompt</h3>
              <CopyButton text={generatedPrompt} />
            </div>
            <div className="prompt-output">
              <pre>{generatedPrompt}</pre>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>
          Built to help you communicate better with existing AI agents better. 
        </p>
        <p className="copyright">
          © {new Date().getFullYear()} Sashitharan. All rights reserved.
        </p>
      </footer>
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

