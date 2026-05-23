import { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

const SECTIONS = [
  {
    key: 'context',
    label: 'C — Context',
    subtitle: 'Who are you? What\'s the situation?',
    hint: 'Brief background — your role, project, and relevant tech. 2-3 sentences max. This anchors the AI without burning tokens.',
    placeholder: 'e.g. I\'m a backend dev on a Node.js + PostgreSQL fintech API. We use JWT auth and process ~5k transactions/day.',
    required: true,
    rows: 3,
  },
  {
    key: 'request',
    label: 'R — Request / Goal',
    subtitle: 'What specific outcome do you need?',
    hint: 'One clear ask. What does "done" look like? The more specific, the better the output.',
    placeholder: 'e.g. Write a rate-limiting middleware that blocks IPs after 5 failed login attempts within 10 minutes.',
    required: true,
    rows: 2,
  },
  {
    key: 'actions',
    label: 'A — Actions / Steps',
    subtitle: 'How should the AI approach this?',
    hint: 'Optional. List steps only if order or process matters. Skip if you just want the result.',
    placeholder: 'e.g. 1. Check Redis for attempt count\n2. Increment counter on failure\n3. Return 429 with retry-after header\n4. Auto-reset after window expires',
    required: false,
    rows: 4,
  },
  {
    key: 'frameworks',
    label: 'F — Frameworks / Constraints / Rules',
    subtitle: 'What rules must the AI follow?',
    hint: 'Tech stack, coding conventions, libraries to use or avoid, security requirements.',
    placeholder: 'e.g. Use ioredis, follow our error format {code, message}, no third-party rate-limit libraries, TypeScript required',
    required: false,
    rows: 3,
  },
  {
    key: 'template',
    label: 'T — Template / Output Format',
    subtitle: 'How should the response be structured?',
    hint: 'e.g. Code only. Code + brief explanation. Bullet list. Table. Numbered steps.',
    placeholder: 'e.g. Provide the middleware with JSDoc comments. Then 3-4 bullet points on trade-offs or caveats.',
    required: false,
    rows: 2,
  },
];

const OUTPUT_CONSTRAINTS = [
  { label: 'Code only', value: 'Return code only. No explanations.' },
  { label: 'Max 150 words', value: 'Limit response to 150 words.' },
  { label: 'JSON only', value: 'Return valid JSON only, no markdown.' },
  { label: '5 bullets', value: 'Respond in exactly 5 bullet points.' },
  { label: 'Diff only', value: 'Show only the changed lines (diff format).' },
  { label: 'No tests/docs', value: 'Skip tests and documentation.' },
];

const ROLE_PRESETS = [
  { label: 'Senior Dev', value: 'Act as a senior software engineer.' },
  { label: 'Code Reviewer', value: 'Act as an expert code reviewer focused on correctness, security, and maintainability.' },
  { label: 'Tech Writer', value: 'Act as a technical writer who produces clear, concise documentation.' },
  { label: 'QA Engineer', value: 'Act as a QA engineer with deep expertise in test strategy and edge case analysis.' },
  { label: 'Product Manager', value: 'Act as a senior product manager focused on user value and delivery.' },
  { label: 'DevOps Engineer', value: 'Act as a DevOps/platform engineer focused on reliability and automation.' },
  { label: 'Data Analyst', value: 'Act as a data analyst who surfaces actionable insights from data.' },
];

function CraftBuilder({ onGenerate }) {
  const [role, setRole] = useState('');
  const [useCustomRole, setUseCustomRole] = useState(false);
  const [customRole, setCustomRole] = useState('');
  const [fields, setFields] = useState({ context: '', request: '', actions: '', frameworks: '', template: '' });
  const [openSections, setOpenSections] = useState({ context: true, request: true, actions: false, frameworks: false, template: false });

  const toggleSection = (key) => setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  const handleFieldChange = (key, value) => setFields(prev => ({ ...prev, [key]: value }));
  const appendConstraint = (value) => {
    setFields(prev => ({
      ...prev,
      template: prev.template.trim() ? `${prev.template.trim()}\n${value}` : value,
    }));
    setOpenSections(prev => ({ ...prev, template: true }));
  };

  const effectiveRole = useCustomRole ? customRole : role;

  const buildPrompt = () => {
    const parts = [];
    if (effectiveRole.trim()) parts.push(effectiveRole.trim());
    if (fields.context.trim()) parts.push(`**Context:**\n${fields.context.trim()}`);
    if (fields.request.trim()) parts.push(`**Goal:**\n${fields.request.trim()}`);
    if (fields.actions.trim()) parts.push(`**Steps:**\n${fields.actions.trim()}`);
    if (fields.frameworks.trim()) parts.push(`**Rules & Constraints:**\n${fields.frameworks.trim()}`);
    if (fields.template.trim()) parts.push(`**Output Format:**\n${fields.template.trim()}`);
    return parts.join('\n\n');
  };

  const canGenerate = fields.context.trim() && fields.request.trim();
  const filledCount = Object.values(fields).filter(v => v.trim()).length + (effectiveRole.trim() ? 1 : 0);
  const estimatedTokens = Math.ceil(buildPrompt().length / 4);

  return (
    <div className="craft-builder">
      <div className="craft-header-bar">
        <div className="craft-framework-badge">CRAFT Framework</div>
        <div className="craft-stats">
          <span>{filledCount} / 6 filled</span>
          <span className="craft-stat-sep">·</span>
          <span>~{estimatedTokens} tokens</span>
        </div>
      </div>

      <div className="craft-role-section">
        <div className="craft-role-label">
          <strong>AI Role</strong>
          <span className="optional-tag">optional</span>
        </div>
        <div className="role-pills">
          {ROLE_PRESETS.map(preset => (
            <button
              key={preset.label}
              className={`role-pill ${!useCustomRole && role === preset.value ? 'active' : ''}`}
              onClick={() => { setRole(preset.value); setUseCustomRole(false); }}
            >
              {preset.label}
            </button>
          ))}
          <button
            className={`role-pill ${useCustomRole ? 'active' : ''}`}
            onClick={() => setUseCustomRole(true)}
          >
            Custom
          </button>
        </div>
        {useCustomRole && (
          <input
            className="custom-role-input"
            placeholder="e.g. Act as a security-focused architect with expertise in OAuth 2.0..."
            value={customRole}
            onChange={e => setCustomRole(e.target.value)}
          />
        )}
      </div>

      <div className="craft-sections">
        {SECTIONS.map(section => {
          const isFilled = fields[section.key].trim().length > 0;
          return (
            <div
              key={section.key}
              className={`craft-section ${isFilled ? 'filled' : ''} ${section.required ? 'is-required' : ''}`}
            >
              <button className="craft-section-toggle" onClick={() => toggleSection(section.key)}>
                <div className="craft-section-title">
                  <span className="craft-section-name">{section.label}</span>
                  <span className="craft-section-sub">{section.subtitle}</span>
                </div>
                <div className="craft-section-meta">
                  {section.required && !isFilled && <span className="required-dot" title="Required" />}
                  {isFilled && <span className="filled-check">✓</span>}
                  {openSections[section.key] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </div>
              </button>
              {openSections[section.key] && (
                <div className="craft-section-body">
                  <p className="craft-hint">{section.hint}</p>
                  {section.key === 'template' && (
                    <div className="output-constraint-chips">
                      <span className="constraint-chips-label">Quick add:</span>
                      {OUTPUT_CONSTRAINTS.map(c => (
                        <button
                          key={c.label}
                          className="output-constraint-chip"
                          onClick={() => appendConstraint(c.value)}
                          type="button"
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                  )}
                  <textarea
                    value={fields[section.key]}
                    onChange={e => handleFieldChange(section.key, e.target.value)}
                    placeholder={section.placeholder}
                    rows={section.rows}
                    className="craft-textarea"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="craft-actions">
        {!canGenerate && (
          <p className="craft-warning">Fill in Context and Goal to generate your prompt.</p>
        )}
        <button
          className="generate-button"
          onClick={() => onGenerate(buildPrompt())}
          disabled={!canGenerate}
        >
          <Sparkles size={18} />
          Build Prompt
        </button>
      </div>
    </div>
  );
}

export default CraftBuilder;
