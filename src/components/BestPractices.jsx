import { CheckCircle, XCircle } from 'lucide-react';
import { bestPractices, improvementTips } from '../data/promptTemplates';

function BestPractices() {
  return (
    <div className="best-practices">
      <div className="practices-header">
        <h2>Best Practices for Prompting AI Agents</h2>
        <p>Learn what makes prompts effective based on how AI agents process information</p>
      </div>

      <div className="practices-grid">
        {Object.entries(bestPractices).map(([key, practice]) => (
          <div key={key} className="practice-card">
            <div className="practice-header">
              <CheckCircle className="practice-icon" size={24} />
              <h3>{practice.title}</h3>
            </div>
            <p className="practice-description">{practice.description}</p>
            <div className="example-comparison">
              <div className="example-bad">
                <div className="example-label">
                  <XCircle size={16} />
                  <span>Bad Example</span>
                </div>
                <div className="example-text">{practice.badExample}</div>
              </div>
              <div className="example-good">
                <div className="example-label">
                  <CheckCircle size={16} />
                  <span>Good Example</span>
                </div>
                <div className="example-text">{practice.goodExample}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="improvement-section">
        <h2>Common Issues & How to Fix Them</h2>
        <div className="improvement-grid">
          {improvementTips.map((tip, index) => (
            <div key={index} className="improvement-card">
              <div className="improvement-issue">
                <XCircle className="issue-icon" size={20} />
                <strong>Issue:</strong> {tip.issue}
              </div>
              <div className="improvement-tip">
                <strong>Fix:</strong> {tip.tip}
              </div>
              <div className="improvement-example">
                <strong>Example:</strong>
                <div className="example-block">{tip.example}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="how-ai-works">
        <h2>How AI Agents Process Prompts</h2>
        <div className="ai-process">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Parse & Understand</h3>
            <p>AI analyzes your prompt to understand what you're asking for</p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Identify Context</h3>
            <p>Context helps determine the most relevant approach and information</p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Apply Constraints</h3>
            <p>Specific requirements guide the response format and content</p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Generate Response</h3>
            <p>AI combines understanding, context, and constraints to provide the answer</p>
          </div>
        </div>
        <div className="key-insight">
          <p>
            <strong>Key Insight:</strong> The more specific and structured your prompt, 
            the better AI can match its response to your exact needs. Think of prompting 
            like giving instructions to a colleague - be clear, provide context, and 
            specify what you need.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BestPractices;

