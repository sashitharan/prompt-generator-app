# AI Prompt Generator

An intelligent web application that helps you generate effective prompts for AI agents. Built based on understanding how AI agents process information to provide better results.

## Features

### 🎯 Interactive Prompt Builder
- **Template-Based**: Use pre-built templates for common use cases (coding, analysis, creative, learning, professional, marketing-creative)
- **Professional Templates**: Specialized templates for Jira stories, test cases, PR descriptions, bug reports, and more
- **Marketing & Creative Templates**: Specialized templates for social media captions, image generation, ad copy, email campaigns, SEO content, and brand voice
- **Custom Prompts**: Write your own prompts and get AI-powered enhancements
- **Step-by-Step Guidance**: Build prompts incrementally with helpful suggestions

### 📚 Best Practices Guide
- Learn what makes prompts effective
- See side-by-side comparisons of good vs bad prompts
- Understand common mistakes and how to fix them
- Discover how AI agents process your prompts

### 💡 Real Examples
- Practical examples from different categories
- Clear explanations of why certain approaches work
- Learn from real-world scenarios

## Getting Started

### Installation

```bash
cd prompt-generator-app
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## How It Works

The app is designed based on understanding how AI agents (like me) process prompts:

1. **Parse & Understand**: AI analyzes your prompt structure
2. **Identify Context**: Context helps determine relevant approaches
3. **Apply Constraints**: Specific requirements guide response format
4. **Generate Response**: AI combines everything to provide the answer

### Key Principles for Better Prompts

1. **Be Specific**: Vague prompts lead to vague answers
2. **Provide Context**: Background information helps AI understand your situation
3. **Structure Your Request**: Organize complex requests clearly
4. **Include Examples**: Examples show exactly what format you want
5. **Specify Constraints**: Tell AI about limitations, preferences, requirements
6. **Iterate and Refine**: Start broad, then narrow down based on responses

## Project Structure

```
prompt-generator-app/
├── src/
│   ├── components/
│   │   ├── PromptBuilder.jsx    # Interactive prompt builder
│   │   ├── BestPractices.jsx    # Best practices guide
│   │   └── Examples.jsx         # Good vs bad examples
│   ├── data/
│   │   └── promptTemplates.js   # Templates and examples data
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # Styles
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Usage

### Using Templates

1. Select a category (Coding, Analysis, Creative, Learning, Professional, Marketing & Creative)
2. Choose a template that matches your need
3. Fill in the form fields
4. Generate your prompt
5. Copy and use it with any AI agent

### Professional Templates

The Professional category includes specialized templates for software development workflows:

- **Jira Story Creation**: Comprehensive user story templates with acceptance criteria, technical context, dependencies, and edge cases
- **Test Cases Generation**: Complete test case templates covering positive, negative, boundary, integration, performance, and security scenarios
- **Test Case Analysis & Review**: Templates to analyze existing test cases for completeness and gaps
- **Pull Request Description**: Structured PR templates with all necessary sections and checklists
- **Technical Documentation**: Templates for API docs, architecture docs, and developer guides
- **Requirements Gathering**: Templates to structure requirements gathering and documentation
- **Bug Report Template**: Comprehensive bug reporting templates with all necessary information
- **Code Review Checklist**: Detailed code review templates covering quality, security, performance, and best practices

### Marketing & Creative Templates

The Marketing & Creative category includes specialized templates for creative agencies and marketing teams:

- **Social Media Caption**: Platform-optimized captions with brand voice, hashtag strategy, engagement tactics, and A/B testing variations
- **Image Generation Prompt**: Comprehensive AI image generation prompts (DALL-E, Midjourney, Stable Diffusion) with style, composition, brand colors, and technical specifications
- **Ad Copy Creation**: Conversion-focused ad copy with platform specifications, audience targeting, emotional triggers, and A/B testing recommendations
- **Email Campaign Copy**: Engaging email campaigns with optimized subject lines, segmentation, personalization, and mobile optimization
- **SEO Blog Post Content**: SEO-optimized blog content with keyword integration, structure, internal/external linking, and engagement elements
- **Brand Voice Guidelines**: Comprehensive brand voice documentation for consistent AI-generated content across all channels

Each template addresses common prompt engineering weak points:
- **Missing Brand Voice**: Dedicated brand voice sections ensure consistent tone
- **Vague Target Audience**: Detailed audience demographics, psychographics, and behaviors
- **No Platform Specifications**: Platform-specific character limits, formats, and best practices
- **Unclear Style Preferences**: Detailed style, aesthetic, and composition specifications for images
- **Missing CTAs**: Explicit call-to-action specifications with urgency and placement
- **No Performance Context**: Past performance insights and optimization recommendations
- **Incomplete Guidelines**: Comprehensive do's and don'ts for brand consistency

### Custom Prompts

1. Write your prompt in the custom prompt section
2. Click "Enhance & Generate Prompt"
3. The app will automatically add structure and context reminders
4. Copy the enhanced prompt

### Learning Best Practices

- Navigate to "Best Practices" tab
- Learn about effective prompting techniques
- See examples of common mistakes
- Understand how AI processes prompts

## Technologies

- **React 19**: UI framework
- **Vite**: Build tool and dev server
- **Lucide React**: Icon library
- **Modern CSS**: Responsive design with CSS Grid and Flexbox

## License

This project is open source and available for use and modification.

## Contributing

Feel free to submit issues, fork the repository, and create pull requests for any improvements.

