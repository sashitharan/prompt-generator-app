import { useState } from 'react';
import { Sparkles, Zap, Layout, ChevronDown, ChevronUp } from 'lucide-react';
import { promptTemplates } from '../data/promptTemplates';
import CraftBuilder from './CraftBuilder';

const MODES = [
  { id: 'craft', label: 'CRAFT Builder', icon: Zap, desc: 'Lean, purposeful prompts. Fewer tokens, better results.' },
  { id: 'template', label: 'Templates', icon: Layout, desc: 'Category templates for common tasks.' },
  { id: 'enhance', label: 'Quick Enhance', icon: Sparkles, desc: 'Paste your prompt — we\'ll structure it.' },
];

function PromptBuilder({ onGenerate }) {
  const [mode, setMode] = useState('craft');

  return (
    <div className="prompt-builder">
      <div className="builder-mode-tabs">
        {MODES.map(m => {
          const Icon = m.icon;
          return (
            <button
              key={m.id}
              className={`mode-tab ${mode === m.id ? 'active' : ''}`}
              onClick={() => setMode(m.id)}
            >
              <Icon size={16} />
              <div className="mode-tab-text">
                <span className="mode-tab-label">{m.label}</span>
                <span className="mode-tab-desc">{m.desc}</span>
              </div>
            </button>
          );
        })}
      </div>

      {mode === 'craft' && <CraftBuilder onGenerate={onGenerate} />}
      {mode === 'template' && <TemplateMode onGenerate={onGenerate} />}
      {mode === 'enhance' && <EnhanceMode onGenerate={onGenerate} />}
    </div>
  );
}

function TemplateMode({ onGenerate }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({});

  const categories = Object.keys(promptTemplates);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedTemplate(null);
    setFormData({});
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    const fields = extractFields(template.template);
    const initial = {};
    fields.forEach(f => { initial[f] = ''; });
    setFormData(initial);
  };

  const extractFields = (template) => {
    const regex = /\{([^}]+)\}/g;
    const fields = [];
    let match;
    while ((match = regex.exec(template)) !== null) fields.push(match[1]);
    return [...new Set(fields)];
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const cleanPrompt = (prompt) => {
    // Remove lines that are only a bullet/dash label with no value: "- Label: "
    const lines = prompt.split('\n');
    const kept = lines.filter(line => {
      const trimmed = line.trim();
      // Drop list items where value is empty: "- Anything: " with nothing after colon
      if (/^[-•]\s+[^:]+:\s*$/.test(trimmed)) return false;
      return true;
    });

    let result = kept.join('\n');

    // Remove section headers (**Header:**) immediately followed by blank line(s) and then another header or end
    result = result.replace(/\*\*[^*\n]+:\*\*\s*\n(?=\n*(?:\*\*|\n|$))/g, '');

    // Collapse 3+ blank lines → 2
    result = result.replace(/\n{3,}/g, '\n\n').trim();
    return result;
  };

  const generatePrompt = () => {
    if (!selectedTemplate) return;
    let prompt = selectedTemplate.template;

    Object.keys(formData).forEach(key => {
      const regex = new RegExp(`\\{${key}\\}`, 'g');
      prompt = prompt.replace(regex, formData[key] || '');
    });

    onGenerate(cleanPrompt(prompt));
  };

  const filledCount = Object.values(formData).filter(v => v.trim()).length;
  const totalFields = Object.keys(formData).length;

  return (
    <div className="template-mode">
      <div className="category-selector">
        <label>Category</label>
        <select
          value={selectedCategory}
          onChange={e => handleCategorySelect(e.target.value)}
          className="select-input"
        >
          <option value="">Select a category...</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1).replace(/-/g, ' ')}
            </option>
          ))}
        </select>
      </div>

      {selectedCategory && (
        <div className="template-list">
          <label>Template</label>
          <div className="template-grid">
            {promptTemplates[selectedCategory].map(template => (
              <button
                key={template.id}
                onClick={() => handleTemplateSelect(template)}
                className={`template-card ${selectedTemplate?.id === template.id ? 'active' : ''}`}
              >
                <h3>{template.name}</h3>
                <p>{template.description}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedTemplate && (
        <div className="template-form">
          <div className="template-form-header">
            <h3>Fill in the details</h3>
            <span className="field-progress">{filledCount} / {totalFields} filled</span>
          </div>
          <p className="template-lean-tip">
            Only fill what's relevant — empty fields are automatically removed from the prompt.
          </p>
          <div className="form-fields">
            {extractFields(selectedTemplate.template).map(field => (
              <div key={field} className="form-field">
                <label htmlFor={field}>
                  {field.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </label>
                <textarea
                  id={field}
                  value={formData[field] || ''}
                  onChange={e => handleInputChange(field, e.target.value)}
                  placeholder={`Enter ${field.replace(/_/g, ' ')}...`}
                  className="form-textarea"
                  rows={2}
                />
              </div>
            ))}
          </div>
          <button onClick={generatePrompt} className="generate-button">
            <Sparkles size={18} />
            Generate Prompt
          </button>
        </div>
      )}
    </div>
  );
}

function EnhanceMode({ onGenerate }) {
  const [customPrompt, setCustomPrompt] = useState('');
  const [framework, setFramework] = useState('craft');

  const FRAMEWORKS = [
    { id: 'craft', label: 'CRAFT', desc: 'Context → Goal → Steps → Rules → Format' },
    { id: 'costar', label: 'CO-STAR', desc: 'Context → Objective → Style → Tone → Audience → Response' },
    { id: 'risen', label: 'RISEN', desc: 'Role → Instructions → Steps → End Goal → Narrowing' },
  ];

  const enhance = (prompt) => {
    if (framework === 'craft') {
      return `**Context:**
${prompt}

**Goal:**
[What specific outcome do you need?]

**Steps:**
[Optional: list steps if order matters]

**Rules & Constraints:**
[Tech stack, conventions, what to avoid]

**Output Format:**
[How should the response be structured?]`;
    }
    if (framework === 'costar') {
      return `**Context:**
${prompt}

**Objective:**
[What do you want to achieve?]

**Style:**
[Formal / casual / technical / conversational]

**Tone:**
[Helpful / authoritative / concise / detailed]

**Audience:**
[Who will read this? What's their expertise level?]

**Response Format:**
[How should the AI structure the response?]`;
    }
    if (framework === 'risen') {
      return `**Role:**
[What role should the AI take on?]

**Instructions:**
${prompt}

**Steps:**
[Break down the task into clear steps]

**End Goal:**
[What does success look like?]

**Narrowing:**
[Constraints, limitations, scope restrictions]`;
    }
    return prompt;
  };

  return (
    <div className="enhance-mode">
      <div className="enhance-framework-selector">
        <label>Structure Framework</label>
        <div className="framework-pills">
          {FRAMEWORKS.map(f => (
            <button
              key={f.id}
              className={`framework-pill ${framework === f.id ? 'active' : ''}`}
              onClick={() => setFramework(f.id)}
              title={f.desc}
            >
              {f.label}
            </button>
          ))}
        </div>
        <p className="framework-desc">{FRAMEWORKS.find(f => f.id === framework)?.desc}</p>
      </div>

      <textarea
        value={customPrompt}
        onChange={e => setCustomPrompt(e.target.value)}
        placeholder="Paste your rough prompt here — we'll restructure it using your chosen framework."
        className="custom-prompt-input"
        rows={6}
      />

      <div className="prompt-tips">
        <strong>Quick tips:</strong>
        <ul>
          <li>Write your core idea — don't worry about structure yet</li>
          <li>Mention your tech stack if relevant</li>
          <li>Add any constraints or "must not" rules</li>
        </ul>
      </div>

      <button
        onClick={() => onGenerate(enhance(customPrompt))}
        className="generate-button"
        disabled={!customPrompt.trim()}
      >
        <Sparkles size={18} />
        Enhance & Structure
      </button>
    </div>
  );
}

export default PromptBuilder;
