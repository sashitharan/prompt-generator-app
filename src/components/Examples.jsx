import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { promptExamples } from '../data/promptTemplates';

function Examples() {
  return (
    <div className="examples">
      <div className="examples-header">
        <h2>Real Examples: Good vs Bad Prompts</h2>
        <p>See how small changes make a big difference in the quality of responses</p>
      </div>

      <div className="examples-list">
        {promptExamples.map((example, index) => (
          <div key={index} className="example-card">
            <div className="example-category">
              <h3>{example.category}</h3>
            </div>

            <div className="example-comparison-full">
              <div className="example-side bad-side">
                <div className="side-header">
                  <XCircle className="side-icon" size={24} />
                  <h4>Bad Prompt</h4>
                </div>
                <div className="example-prompt">
                  <pre>{example.bad.prompt}</pre>
                </div>
                <div className="issues-list">
                  <strong>Problems:</strong>
                  <ul>
                    {example.bad.issues.map((issue, i) => (
                      <li key={i}>{issue}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="arrow-separator">
                <ArrowRight size={32} />
              </div>

              <div className="example-side good-side">
                <div className="side-header">
                  <CheckCircle className="side-icon" size={24} />
                  <h4>Good Prompt</h4>
                </div>
                <div className="example-prompt">
                  <pre>{example.good.prompt}</pre>
                </div>
                <div className="why-good">
                  <strong>Why this works:</strong>
                  <ul>
                    {example.good.whyGood.map((reason, i) => (
                      <li key={i}>{reason}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="key-takeaways">
        <h2>Key Takeaways</h2>
        <div className="takeaways-grid">
          <div className="takeaway-card">
            <CheckCircle size={24} />
            <h3>Specificity Wins</h3>
            <p>Specific details lead to specific, useful answers</p>
          </div>
          <div className="takeaway-card">
            <CheckCircle size={24} />
            <h3>Context Matters</h3>
            <p>Background information helps AI understand your situation</p>
          </div>
          <div className="takeaway-card">
            <CheckCircle size={24} />
            <h3>Structure Helps</h3>
            <p>Organized prompts get organized, comprehensive responses</p>
          </div>
          <div className="takeaway-card">
            <CheckCircle size={24} />
            <h3>Examples Guide</h3>
            <p>Showing what you want helps AI deliver exactly that</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Examples;

