import { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { promptTemplates } from '../data/promptTemplates';

function PromptBuilder({ onGenerate, generatedPrompt }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({});
  const [customPrompt, setCustomPrompt] = useState('');
  const [activeSection, setActiveSection] = useState(null);

  const categories = Object.keys(promptTemplates);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedTemplate(null);
    setFormData({});
    setCustomPrompt('');
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    // Initialize form data with template fields
    const fields = extractFields(template.template);
    const initialData = {};
    fields.forEach(field => {
      initialData[field] = '';
    });
    setFormData(initialData);
    setCustomPrompt('');
  };

  const extractFields = (template) => {
    const regex = /\{([^}]+)\}/g;
    const fields = [];
    let match;
    while ((match = regex.exec(template)) !== null) {
      fields.push(match[1]);
    }
    return [...new Set(fields)]; // Remove duplicates
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generatePromptFromTemplate = () => {
    if (!selectedTemplate) return;

    let prompt = selectedTemplate.template;
    // Replace placeholders with form data
    Object.keys(formData).forEach(key => {
      const regex = new RegExp(`\\{${key}\\}`, 'g');
      prompt = prompt.replace(regex, formData[key] || `[${key}]`);
    });
    
    onGenerate(prompt);
  };

  const generateCustomPrompt = () => {
    if (!customPrompt.trim()) return;
    
    // Enhance the custom prompt with suggestions
    const enhanced = enhancePrompt(customPrompt);
    onGenerate(enhanced);
  };

  const enhancePrompt = (prompt) => {
    let enhanced = prompt;
    
    // Add structure suggestions if missing
    if (!hasStructure(prompt)) {
      enhanced = addStructure(prompt);
    }
    
    // Add context reminders if missing
    if (!hasContext(prompt)) {
      enhanced = addContextReminders(enhanced);
    }
    
    return enhanced;
  };

  const hasStructure = (prompt) => {
    return prompt.includes('**') || 
           prompt.includes('1.') || 
           prompt.includes('-') ||
           prompt.split('\n').length > 3;
  };

  const addStructure = (prompt) => {
    return `**Context:**
${prompt}

**What I need:**
[Specify what you need - solution, explanation, code, etc.]

**Constraints/Requirements:**
[Add any specific requirements, preferences, or constraints]

**Expected Output:**
[Describe the format or style you want for the response]`;
  };

  const hasContext = (prompt) => {
    const contextKeywords = ['building', 'working on', 'using', 'have', 'need', 'want'];
    return contextKeywords.some(keyword => 
      prompt.toLowerCase().includes(keyword)
    );
  };

  const addContextReminders = (prompt) => {
    return prompt + '\n\n**Tip:** Consider adding more context about your project, tech stack, or specific requirements for better results.';
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="prompt-builder">
      <div className="builder-header">
        <Sparkles className="builder-icon" size={24} />
        <h2>Interactive Prompt Builder</h2>
        <p>Build effective prompts step by step</p>
      </div>

      <div className="builder-options">
        <div className="option-section">
          <button
            className="section-toggle"
            onClick={() => toggleSection('template')}
          >
            <span>Use Template</span>
            {activeSection === 'template' ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
          {activeSection === 'template' && (
            <div className="template-selector">
              <div className="category-selector">
                <label>Category:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategorySelect(e.target.value)}
                  className="select-input"
                >
                  <option value="">Select a category...</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {selectedCategory && (
                <div className="template-list">
                  <label>Templates:</label>
                  <div className="template-grid">
                    {promptTemplates[selectedCategory].map(template => (
                      <button
                        key={template.id}
                        onClick={() => handleTemplateSelect(template)}
                        className={`template-card ${
                          selectedTemplate?.id === template.id ? 'active' : ''
                        }`}
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
                  <h3>Fill in the details:</h3>
                  <div className="form-fields">
                    {extractFields(selectedTemplate.template).map(field => (
                      <div key={field} className="form-field">
                        <label htmlFor={field}>
                          {field.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}:
                        </label>
                        <textarea
                          id={field}
                          value={formData[field] || ''}
                          onChange={(e) => handleInputChange(field, e.target.value)}
                          placeholder={`Enter ${field.replace(/_/g, ' ')}...`}
                          className="form-textarea"
                          rows={3}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={generatePromptFromTemplate}
                    className="generate-button"
                  >
                    <Sparkles size={18} />
                    Generate Prompt
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="option-section">
          <button
            className="section-toggle"
            onClick={() => toggleSection('custom')}
          >
            <span>Custom Prompt</span>
            {activeSection === 'custom' ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
          {activeSection === 'custom' && (
            <div className="custom-prompt-section">
              <textarea
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Type your prompt here... I'll help enhance it with better structure and context."
                className="custom-prompt-input"
                rows={8}
              />
              <div className="prompt-tips">
                <strong>Tips:</strong>
                <ul>
                  <li>Be specific about what you need</li>
                  <li>Include context about your project or situation</li>
                  <li>Mention any constraints or requirements</li>
                  <li>Specify the format you want for the response</li>
                </ul>
              </div>
              <button
                onClick={generateCustomPrompt}
                className="generate-button"
                disabled={!customPrompt.trim()}
              >
                <Sparkles size={18} />
                Enhance & Generate Prompt
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PromptBuilder;

