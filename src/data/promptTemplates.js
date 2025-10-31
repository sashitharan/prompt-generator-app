// Prompt templates organized by use case
export const promptTemplates = {
  coding: [
    {
      id: 'code-review',
      name: 'Code Review',
      template: `I need you to review my {language} code and provide feedback on:

1. Code quality and best practices
2. Potential bugs or issues
3. Performance optimizations
4. Security concerns
5. Suggestions for improvement

Here's my code:
\`\`\`{language}
{code}
\`\`\`

{context}`,
      description: 'Get comprehensive code review with actionable feedback'
    },
    {
      id: 'debug-help',
      name: 'Debug Assistance',
      template: `I'm experiencing an issue with my {language} code. Here's what I need help with:

**Problem:**
{problem_description}

**Expected behavior:**
{expected_behavior}

**Actual behavior:**
{actual_behavior}

**Code:**
\`\`\`{language}
{code}
\`\`\`

**Error message (if any):**
{error_message}

**What I've tried:**
{tried_solutions}

Please help me debug this issue step by step.`,
      description: 'Get help debugging specific issues'
    },
    {
      id: 'architecture',
      name: 'Architecture Planning',
      template: `I'm planning to build a {project_type} application with the following requirements:

**Project Goals:**
{goals}

**Key Features:**
{features}

**Constraints:**
- Tech stack preferences: {tech_stack}
- Performance requirements: {performance}
- Scale expectations: {scale}

**Questions:**
1. What architecture pattern would work best?
2. How should I structure the project?
3. What components/modules should I prioritize?
4. Any specific design patterns to consider?

Please provide a detailed architecture recommendation with justifications.`,
      description: 'Plan application architecture with expert guidance'
    },
    {
      id: 'refactor',
      name: 'Code Refactoring',
      template: `I need help refactoring this {language} code to improve:

**What needs improvement:**
{improvement_areas}

**Current code:**
\`\`\`{language}
{code}
\`\`\`

**Requirements:**
- Maintain functionality: {maintain_functionality}
- Performance goals: {performance_goals}
- Style preferences: {style_preferences}

Please provide a refactored version with explanations of the improvements made.`,
      description: 'Refactor code while maintaining functionality'
    }
  ],
  analysis: [
    {
      id: 'data-analysis',
      name: 'Data Analysis',
      template: `I need help analyzing this dataset to answer the following questions:

**Primary Questions:**
{questions}

**Dataset Context:**
{dataset_context}

**Data Sample:**
{data_sample}

**Analysis Goals:**
- Identify key patterns and trends
- Find anomalies or outliers
- Generate insights and recommendations
- {additional_goals}

**Preferred format for results:**
{output_format}

Please provide a comprehensive analysis with clear explanations.`,
      description: 'Analyze data and extract meaningful insights'
    },
    {
      id: 'problem-solving',
      name: 'Problem Solving',
      template: `I'm facing a challenge and need your help to solve it systematically:

**Problem Statement:**
{problem_statement}

**Context:**
{context}

**Constraints:**
{constraints}

**Success Criteria:**
{success_criteria}

**What I've considered so far:**
{considered_approaches}

Please break down the problem, analyze potential solutions, and recommend the best approach with justification.`,
      description: 'Systematic problem-solving with structured approach'
    }
  ],
  creative: [
    {
      id: 'content-writing',
      name: 'Content Writing',
      template: `I need help writing {content_type} with the following requirements:

**Topic/Subject:**
{topic}

**Target Audience:**
{target_audience}

**Tone and Style:**
{tone_style}

**Key Points to Cover:**
{key_points}

**Length:**
{length}

**Additional Requirements:**
{additional_requirements}

Please create {content_type} that meets these requirements.`,
      description: 'Generate high-quality content tailored to your needs'
    },
    {
      id: 'brainstorming',
      name: 'Brainstorming',
      template: `I need creative ideas for {subject}. Here's what I'm looking for:

**Goal:**
{goal}

**Context:**
{context}

**Constraints:**
{constraints}

**Preference for ideas:**
{idea_preferences}

Please provide {number} diverse and creative ideas, ranked by feasibility and impact.`,
      description: 'Generate creative ideas and solutions'
    }
  ],
  learning: [
    {
      id: 'explain-concept',
      name: 'Explain Concept',
      template: `Please explain {concept} to me. Here's what I need:

**My Current Understanding:**
{current_understanding}

**Level of Detail:**
{detail_level}

**Examples Needed:**
{examples_needed}

**Learning Style:**
{learning_style}

**Questions I Have:**
{questions}

Please explain this clearly with examples and answer my specific questions.`,
      description: 'Get clear explanations tailored to your learning level'
    },
    {
      id: 'learning-path',
      name: 'Learning Path',
      template: `I want to learn {subject}. Help me create a structured learning path:

**Current Knowledge Level:**
{current_level}

**Learning Goals:**
{goals}

**Time Available:**
{time_available}

**Preferred Learning Methods:**
{learning_methods}

**End Goal:**
{end_goal}

Please create a step-by-step learning path with resources and milestones.`,
      description: 'Design a structured learning journey'
    }
  ],
  professional: [
    {
      id: 'jira-story',
      name: 'Jira Story Creation',
      template: `I need to create a comprehensive Jira user story. Please generate a well-structured story with all required components.

**Epic/Larger Context:**
{epic_context}

**User Story (As a... I want... So that...):**
- As a: {user_type}
- I want: {feature_capability}
- So that: {business_value}

**Detailed Requirements:**
{detailed_requirements}

**Current System State:**
{current_system_state}

**Technical Context:**
- Tech Stack: {tech_stack}
- Related Components/Services: {related_components}
- Dependencies: {dependencies}
- Integration Points: {integration_points}

**Business Rules & Constraints:**
{business_rules}
{constraints}

**Edge Cases to Consider:**
{edge_cases}

**Acceptance Criteria:**
Please generate detailed acceptance criteria that cover:
1. Happy path scenarios
2. Error handling and edge cases
3. Validation requirements
4. Performance expectations (if applicable)
5. Security considerations (if applicable)
6. UI/UX requirements (if applicable)
7. Backward compatibility (if applicable)

**Definition of Done:**
- [ ] Code implemented and reviewed
- [ ] Unit tests written and passing
- [ ] Integration tests passing
- [ ] Documentation updated
- [ ] QA verified
- [ ] {additional_dod_items}

**Priority:**
{priority}

**Estimated Story Points:**
{story_points}

**Additional Notes:**
{additional_notes}

Please generate:
1. A well-formatted Jira story description
2. Complete acceptance criteria list (minimum 5-7 criteria)
3. Technical implementation notes
4. Test scenarios to consider
5. Any risks or dependencies
6. Suggested subtasks (if applicable)`,
      description: 'Create comprehensive Jira stories with acceptance criteria and technical details'
    },
    {
      id: 'test-cases-generation',
      name: 'Test Cases Generation',
      template: `I need comprehensive test cases for the following feature/functionality. Please generate test cases covering all scenarios.

**Feature/Functionality:**
{feature_description}

**Technical Context:**
- Technology Stack: {tech_stack}
- Component/Module: {component_name}
- Related Systems: {related_systems}
- API Endpoints: {api_endpoints}
- Database Tables: {database_tables}

**User Requirements:**
{user_requirements}

**Acceptance Criteria:**
{acceptance_criteria}

**Business Rules:**
{business_rules}

**Current Behavior (if testing an existing feature):**
{current_behavior}

**Expected Behavior:**
{expected_behavior}

**Input/Output Specifications:**
- Valid Inputs: {valid_inputs}
- Invalid Inputs: {invalid_inputs}
- Expected Outputs: {expected_outputs}
- Error Messages: {error_messages}

**Edge Cases & Boundary Conditions:**
{edge_cases}

**Integration Points:**
{integration_points}

**Performance Requirements:**
{performance_requirements}

**Security Considerations:**
{security_considerations}

**Test Data Requirements:**
{test_data_requirements}

Please generate test cases covering:
1. **Positive Test Cases** (happy path scenarios)
   - Test Case ID, Description, Pre-conditions, Test Steps, Expected Results, Priority
   
2. **Negative Test Cases** (error handling, invalid inputs)
   - Test Case ID, Description, Pre-conditions, Test Steps, Expected Results, Priority
   
3. **Boundary Value Test Cases**
   - Test minimum, maximum, and boundary values
   
4. **Integration Test Cases**
   - Test interactions with other systems/components
   
5. **Performance Test Cases** (if applicable)
   - Load, stress, and performance scenarios
   
6. **Security Test Cases** (if applicable)
   - Authentication, authorization, input validation, data protection
   
7. **Regression Test Cases**
   - Verify existing functionality is not broken
   
8. **Accessibility Test Cases** (if UI)
   - WCAG compliance, screen reader compatibility
   
For each test case, please include:
- Test Case ID (format: TC-XXX)
- Test Case Title
- Description
- Pre-conditions
- Test Steps (numbered)
- Test Data
- Expected Result
- Actual Result (to be filled during execution)
- Priority (High/Medium/Low)
- Test Type (Functional/Integration/Performance/Security)
- Traceability to Requirement/Story ID`,
      description: 'Generate comprehensive test cases covering all scenarios and edge cases'
    },
    {
      id: 'test-analysis',
      name: 'Test Case Analysis & Review',
      template: `I need you to analyze and improve the following test cases. Please review for completeness, identify gaps, and suggest improvements.

**Feature/Functionality Being Tested:**
{feature_description}

**Current Test Cases:**
{existing_test_cases}

**Requirements Document:**
{requirements_document}

**Acceptance Criteria:**
{acceptance_criteria}

**Technical Specification:**
{technical_spec}

**Business Rules:**
{business_rules}

**Known Issues/Defects:**
{known_issues}

**Test Coverage Goals:**
- Functionality Coverage: {functionality_coverage}%
- Code Coverage Target: {code_coverage}%
- Requirements Traceability: {traceability_required}

**Areas of Concern:**
{areas_of_concern}

Please provide:
1. **Gap Analysis**
   - Missing test scenarios
   - Uncovered requirements
   - Missing edge cases
   - Missing negative test cases
   - Missing integration scenarios

2. **Test Case Quality Review**
   - Are test cases clear and unambiguous?
   - Do they have proper pre-conditions?
   - Are expected results specific and measurable?
   - Is test data properly defined?
   - Are test cases traceable to requirements?

3. **Improvement Recommendations**
   - Specific test cases to add
   - Test cases that need revision
   - Prioritization of test cases
   - Test execution order suggestions

4. **Risk Assessment**
   - High-risk areas not covered by tests
   - Critical functionality that needs more testing
   - Areas prone to defects

5. **Test Coverage Analysis**
   - Current coverage estimation
   - Coverage gaps
   - Suggestions to improve coverage

6. **Test Automation Opportunities**
   - Test cases suitable for automation
   - Test cases that should remain manual
   - Automation priority recommendations`,
      description: 'Analyze and improve existing test cases with gap analysis and recommendations'
    },
    {
      id: 'pr-description',
      name: 'Pull Request Description',
      template: `I need a comprehensive pull request description. Please generate a well-structured PR description following best practices.

**PR Title:**
{pr_title}

**Type of Change:**
- [ ] Bug fix
- [ ] New feature
- [ ] Refactoring
- [ ] Performance improvement
- [ ] Documentation update
- [ ] Configuration change
- [ ] {other_type}

**Related Ticket/Issue:**
{related_ticket}

**Description:**
{change_description}

**What Changed:**
- Files Modified: {files_modified}
- New Files: {new_files}
- Deleted Files: {deleted_files}

**Technical Details:**
- Implementation Approach: {implementation_approach}
- Design Decisions: {design_decisions}
- Architecture Changes: {architecture_changes}
- Database Changes: {database_changes}
- API Changes: {api_changes}

**Why This Change:**
{reason_for_change}

**How to Test:**
{testing_instructions}

**Test Coverage:**
- Unit Tests: {unit_tests}
- Integration Tests: {integration_tests}
- Manual Testing Steps: {manual_testing}

**Screenshots/Demo** (if applicable):
{screenshots}

**Breaking Changes:**
{breaking_changes}

**Dependencies:**
- Related PRs: {related_prs}
- Required Deployments: {required_deployments}
- Database Migrations: {database_migrations}

**Checklist:**
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Code commented, particularly hard-to-understand areas
- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] All tests passing locally
- [ ] No new warnings introduced
- [ ] Breaking changes documented
- [ ] Dependent changes documented

**Reviewer Notes:**
{reviewer_notes}

Please generate:
1. A clear PR description with all sections filled
2. Appropriate checkboxes checked
3. Testing instructions
4. Any warnings or considerations for reviewers`,
      description: 'Create comprehensive PR descriptions with all necessary details'
    },
    {
      id: 'technical-documentation',
      name: 'Technical Documentation',
      template: `I need comprehensive technical documentation. Please generate well-structured documentation following best practices.

**Documentation Type:**
{type} (API Documentation / Architecture / Design Doc / User Guide / Developer Guide / Deployment Guide)

**Topic/Subject:**
{topic}

**Target Audience:**
{target_audience}

**System/Component:**
{system_component}

**Technical Context:**
- Technology Stack: {tech_stack}
- Architecture: {architecture}
- Dependencies: {dependencies}
- Environment: {environment}

**Key Information to Document:**
{key_information}

**Code Examples Needed:**
{code_examples_required}

**Visualizations Needed:**
{visualizations_required}

**Sections to Include:**
{required_sections}

**Format Requirements:**
- Documentation Style: {doc_style} (Markdown / Confluence / Sphinx / etc.)
- Length: {length}
- Detail Level: {detail_level}

**Prerequisites Knowledge:**
{prerequisites}

Please generate documentation including:
1. **Overview/Introduction**
   - Purpose and scope
   - Target audience
   - Prerequisites

2. **Architecture/Design** (if applicable)
   - System architecture
   - Design decisions
   - Diagrams/flowcharts
   - Component descriptions

3. **API/Function Reference** (if applicable)
   - Endpoint/Method descriptions
   - Parameters and return types
   - Request/Response examples
   - Error codes and handling

4. **Usage Instructions**
   - Step-by-step guide
   - Code examples
   - Common use cases
   - Best practices

5. **Configuration**
   - Environment variables
   - Configuration files
   - Setup instructions

6. **Troubleshooting**
   - Common issues
   - Error messages and solutions
   - Debugging tips

7. **Examples**
   - Basic examples
   - Advanced examples
   - Real-world scenarios

8. **References**
   - Related documentation
   - External resources
   - Glossary of terms

Ensure the documentation is:
- Clear and easy to follow
- Well-organized with proper headings
- Includes practical examples
- Has proper code formatting
- Covers edge cases
- Is up-to-date and accurate`,
      description: 'Generate comprehensive technical documentation with examples and structure'
    },
    {
      id: 'requirements-gathering',
      name: 'Requirements Gathering',
      template: `I need help gathering and documenting comprehensive requirements for a project/feature. Please help structure the requirements gathering process.

**Project/Feature:**
{project_feature}

**Business Context:**
{business_context}

**Stakeholders:**
{stakeholders}

**Problem Statement:**
{problem_statement}

**Initial Ideas/Requirements:**
{initial_ideas}

**Business Goals:**
{business_goals}

**Success Metrics:**
{success_metrics}

**Technical Context:**
- Existing System: {existing_system}
- Tech Stack Preferences: {tech_stack}
- Integration Requirements: {integration_requirements}
- Performance Requirements: {performance_requirements}

**Constraints:**
{business_constraints}
{technical_constraints}
{time_constraints}
{budget_constraints}

**Questions to Answer:**
{questions}

Please help structure:
1. **Functional Requirements**
   - Core features and capabilities
   - User workflows
   - Business rules
   - Data requirements

2. **Non-Functional Requirements**
   - Performance requirements
   - Security requirements
   - Scalability requirements
   - Availability requirements
   - Usability requirements
   - Compatibility requirements

3. **User Stories**
   - Personas involved
   - User journeys
   - Acceptance criteria

4. **Technical Requirements**
   - Architecture requirements
   - Integration requirements
   - Infrastructure requirements
   - Security requirements

5. **Data Requirements**
   - Data model
   - Data flow
   - Data validation rules
   - Data retention policies

6. **Risk Assessment**
   - Technical risks
   - Business risks
   - Timeline risks

7. **Open Questions**
   - Clarifications needed
   - Decisions required
   - Dependencies to resolve

8. **Requirements Validation Checklist**
   - Are requirements clear and unambiguous?
   - Are requirements testable?
   - Are requirements traceable to business goals?
   - Are dependencies identified?
   - Are assumptions documented?`,
      description: 'Structure comprehensive requirements gathering and documentation'
    },
    {
      id: 'bug-report',
      name: 'Bug Report Template',
      template: `I need to create a comprehensive bug report. Please help structure all necessary information.

**Bug Title:**
{bug_title}

**Priority:**
{Priority} (Critical / High / Medium / Low)

**Severity:**
{Severity} (Blocker / Critical / Major / Minor / Trivial)

**Environment:**
- Browser/App Version: {browser_version}
- OS: {os}
- Device: {device}
- Environment: {environment} (Production / Staging / Development)
- Build Number/Version: {build_version}

**Steps to Reproduce:**
{steps_to_reproduce}

**Expected Behavior:**
{expected_behavior}

**Actual Behavior:**
{actual_behavior}

**Frequency:**
{Frequency} (Always / Often / Sometimes / Rarely / Once)

**Affected Users:**
{affected_users}

**Business Impact:**
{business_impact}

**Screenshots/Videos:**
{screenshots_videos}

**Error Messages/Logs:**
{error_messages}
{logs}

**Code Context** (if applicable):
{code_context}

**Related Components:**
{related_components}

**Reproduction Data:**
{reproduction_data}

**Workaround:**
{workaround}

**Additional Context:**
{additional_context}

**Attachments:**
{attachments}

Please generate:
1. A well-formatted bug report
2. Clear reproduction steps
3. Suggested investigation steps for developers
4. Recommended test cases to prevent regression
5. Priority justification
6. Suggested labels/tags`,
      description: 'Create detailed bug reports with all necessary information for developers'
    },
    {
      id: 'code-review-checklist',
      name: 'Code Review Checklist',
      template: `I need a comprehensive code review. Please review the code against best practices and provide structured feedback.

**PR/Ticket:**
{pr_ticket}

**Code to Review:**
\`\`\`{language}
{code}
\`\`\`

**Context:**
- Purpose: {purpose}
- Related Changes: {related_changes}
- Dependencies: {dependencies}
- Breaking Changes: {breaking_changes}

**Review Focus Areas:**
{focus_areas}

Please review for:
1. **Code Quality**
   - Code readability and clarity
   - Naming conventions
   - Code organization and structure
   - DRY principles (Don't Repeat Yourself)
   - SOLID principles adherence
   - Code comments and documentation

2. **Functionality**
   - Logic correctness
   - Edge case handling
   - Error handling
   - Input validation
   - Business logic implementation

3. **Performance**
   - Algorithm efficiency
   - Database query optimization
   - N+1 query problems
   - Memory usage
   - Resource leaks

4. **Security**
   - Input sanitization
   - SQL injection vulnerabilities
   - XSS vulnerabilities
   - Authentication/Authorization
   - Sensitive data handling
   - Secrets management

5. **Testing**
   - Test coverage adequacy
   - Test quality
   - Missing test cases
   - Test organization

6. **Architecture & Design**
   - Design pattern usage
   - Separation of concerns
   - Coupling and cohesion
   - Scalability considerations

7. **Maintainability**
   - Code complexity
   - Technical debt
   - Future extensibility
   - Documentation quality

8. **Best Practices**
   - Language-specific best practices
   - Framework conventions
   - Project style guide adherence

Please provide:
- Overall assessment
- Specific issues with line numbers
- Suggestions for improvement
- Questions for clarification
- Approve/Request Changes recommendation
- Priority of issues (Critical/High/Medium/Low)`,
      description: 'Comprehensive code review checklist covering all aspects'
    }
  ],
  'marketing-creative': [
    {
      id: 'social-media-caption',
      name: 'Social Media Caption',
      template: `I need help creating a compelling social media caption. Please generate captions that meet all platform and engagement requirements.

**Platform:**
{platform} (Instagram / Facebook / Twitter / LinkedIn / TikTok / Pinterest)

**Campaign/Context:**
{campaign_context}

**Content Type:**
{content_type} (Product Launch / Educational / Behind-the-Scenes / User Generated / Event / Promotion / Inspirational / Announcement)

**Product/Service/Subject:**
{subject}

**Target Audience:**
- Demographics: {demographics}
- Interests: {interests}
- Pain Points: {pain_points}
- Values: {values}

**Brand Voice & Tone:**
{brand_voice}
{tone} (Professional / Casual / Humorous / Inspirational / Educational / Conversational / Bold)

**Brand Guidelines:**
- Do's: {brand_dos}
- Don'ts: {brand_donts}
- Keywords to use: {keywords}
- Keywords to avoid: {keywords_to_avoid}
- Brand personality traits: {brand_personality}

**Key Message:**
{key_message}

**Call-to-Action (CTA):**
{cta_type} (Learn More / Shop Now / Sign Up / Watch / Download / Share / Comment / Visit Link)

**Content/Image Context:**
{image_context}

**Hashtag Strategy:**
- Industry hashtags: {industry_hashtags}
- Brand hashtags: {brand_hashtags}
- Trending hashtags: {trending_hashtags}
- Number of hashtags: {hashtag_count}

**Character Limits:**
- Platform limit: {platform_limit}
- Preferred length: {preferred_length}

**Engagement Goals:**
{engagement_goals} (Comments / Shares / Saves / Click-throughs / Follows)

**Required Elements:**
- Emojis: {emojis} (Yes / No / Specific ones: {specific_emojis})
- Mentions: {mentions}
- Links: {links}
- Story highlights: {story_highlights}

**Competitor Examples** (if applicable):
{competitor_examples}

**Performance Notes from Past Posts:**
{performance_notes}

Please generate:
1. **Primary Caption** (optimized for platform character limit)
2. **Alternative Version** (for A/B testing)
3. **Hashtag Set** (organized by category)
4. **Story Caption** (if applicable)
5. **First Comment** (if splitting hashtags)
6. **Engagement Prompt** (question or call-to-action to encourage comments)
7. **Timing Recommendations** (best times to post based on audience)

Ensure the caption:
- Matches brand voice exactly
- Includes specified CTA
- Stays within character limits
- Uses appropriate tone for platform
- Encourages engagement
- Is clear and compelling
- Follows platform best practices`,
      description: 'Create platform-optimized social media captions with brand voice and engagement strategy'
    },
    {
      id: 'image-generation',
      name: 'Image Generation Prompt',
      template: `I need help creating a detailed, effective prompt for AI image generation (DALL-E, Midjourney, Stable Diffusion). Please generate a comprehensive prompt that will produce the exact image I need.

**Image Purpose:**
{purpose} (Social Media Post / Advertisement / Website Hero / Product Photo / Illustration / Concept Art / Marketing Material)

**Subject/Scene:**
{subject_description}

**Style & Aesthetic:**
- Art Style: {art_style} (Photorealistic / Illustration / Digital Art / Watercolor / Minimalist / Vintage / Modern / Abstract / 3D Render / Cinematic)
- Mood/Atmosphere: {mood} (Bright / Dark / Mysterious / Joyful / Professional / Whimsical / Dramatic / Serene)
- Color Palette: {color_palette} (Specific colors or mood-based: Warm / Cool / Monochrome / Vibrant / Pastel)
- Lighting: {lighting} (Natural / Studio / Dramatic / Soft / Golden Hour / Neon)

**Composition:**
- Shot Type: {shot_type} (Close-up / Wide Shot / Medium Shot / Aerial / Macro)
- Angle: {angle} (Eye Level / Low / High / Bird's Eye / Worm's Eye)
- Rule of Thirds: {rule_of_thirds}
- Focus: {focus} (Sharp / Soft Focus / Bokeh Background / Depth of Field)

**Brand Elements:**
- Brand Colors: {brand_colors}
- Logo Placement: {logo_placement}
- Brand Style: {brand_style_guide}
- Typography Style: {typography_style}

**Technical Specifications:**
- Aspect Ratio: {aspect_ratio} (16:9 / 4:3 / 1:1 / 9:16 / Custom: {custom_ratio})
- Resolution: {resolution} (4K / 8K / High Resolution)
- Image Quality: {quality} (High Detail / Ultra Realistic / Professional Photography Quality)
- Format: {format} (JPG / PNG / Transparent Background)

**Specific Details:**
- Objects/Products: {objects}
- People/Characters: {people_description} (Age / Gender / Ethnicity / Clothing / Pose / Expression)
- Background: {background}
- Text Overlay: {text_overlay} (Text to include: {text_content})
- Props/Elements: {props}

**Atmospheric Elements:**
{atmospheric_elements} (Particles / Smoke / Light Rays / Reflections / Shadows / Motion Blur)

**Reference Style:**
- Similar Images/Vibe: {style_references}
- Artist/Photographer Style: {artist_style}
- Photography Technique: {photography_technique}

**Avoid Elements:**
{avoid_elements} (Watermarks / Text / Specific objects or styles to exclude)

**Platform-Specific Requirements:**
{platform_specific}

**Negative Prompt** (what to avoid):
{negative_prompt}

**Iteration Notes:**
{iteration_notes} (If this is a revision, what needs to change)

Please generate:
1. **Primary Prompt** (concise, optimized for AI image generation)
   - Format: Subject + Style + Composition + Details + Technical specs
   - Length: Optimized for model requirements (typically 75-150 words)
   
2. **Detailed Prompt** (if platform allows longer descriptions)
   - Expanded version with all context
   
3. **Negative Prompt** (explicitly state what to avoid)
   
4. **Prompt Variations** (3 alternative versions for testing)
   
5. **Style Keywords** (extracted for easy modification)
   
6. **Refinement Suggestions** (how to iterate if first result isn't perfect)

Ensure the prompt:
- Is specific and descriptive
- Uses standard AI art terminology
- Avoids ambiguity
- Includes technical parameters
- References style clearly
- Specifies composition elements
- Is optimized for the target AI model`,
      description: 'Create detailed AI image generation prompts for DALL-E, Midjourney, Stable Diffusion'
    },
    {
      id: 'ad-copy',
      name: 'Ad Copy Creation',
      template: `I need help creating compelling ad copy for my advertising campaign. Please generate ad copy that drives conversions and aligns with my brand.

**Campaign Details:**
- Campaign Name: {campaign_name}
- Campaign Goal: {campaign_goal} (Brand Awareness / Lead Generation / Sales / App Installs / Website Traffic / Engagement)
- Campaign Timeline: {timeline}
- Budget: {budget}

**Platform/Channel:**
{platform} (Google Ads / Facebook Ads / Instagram Ads / LinkedIn Ads / YouTube / Display / Native / Email / Search / Display)

**Ad Format:**
{ad_format} (Single Image / Carousel / Video / Story / Text Ad / Responsive Ad)

**Product/Service:**
{product_service}

**Target Audience:**
- Demographics: {demographics}
- Psychographics: {psychographics}
- Behaviors: {behaviors}
- Pain Points: {pain_points}
- Motivations: {motivations}
- Where they are in the funnel: {funnel_stage}

**Unique Value Proposition (UVP):**
{uvp}

**Key Benefits:**
{key_benefits}

**Differentiators:**
{differentiators}

**Brand Voice & Tone:**
{brand_voice}
{tone}

**Brand Guidelines:**
- Mandatory elements: {mandatory_elements}
- Restricted elements: {restricted_elements}
- Legal disclaimers required: {disclaimers}

**Competitor Analysis:**
- Competitor ads to avoid: {competitor_ads}
- Competitive advantages: {competitive_advantages}

**Emotional Triggers:**
{emotional_triggers} (Fear of Missing Out / Desire for Status / Need for Security / Aspiration / Urgency / Social Proof)

**Call-to-Action:**
- Primary CTA: {primary_cta}
- Secondary CTA: {secondary_cta}
- CTA urgency: {cta_urgency}

**Ad Specifications:**
- Character Limits:
  - Headline: {headline_limit}
  - Description: {description_limit}
  - CTA Button: {cta_button_limit}
  - Display URL: {display_url}

**Ad Variations Needed:**
{number_of_variations} (For A/B testing)

**Performance Goals:**
- Key Metrics: {key_metrics}
- Target: {target_metrics}
- Previous Performance: {previous_performance}

**Legal/Compliance:**
{legal_requirements}

Please generate:
1. **Primary Ad Copy**
   - Headline (attention-grabbing, benefit-focused)
   - Subheadline/Description (supporting message, more details)
   - CTA Button Text
   - Display URL/Sitelink Extensions
   - Ad Extensions Ideas

2. **Alternative Variations** (3-5 versions for A/B testing)
   - Different angles (benefit-focused / problem-focused / emotional)
   - Different CTAs
   - Different headline approaches

3. **Mobile-Optimized Version** (if applicable)
   - Shorter versions for mobile screens

4. **Ad Extensions** (if applicable)
   - Sitelinks
   - Callouts
   - Structured Snippets
   - Call Extensions

5. **Keywords/Targeting Insights** (if search ads)
   - Suggested keywords
   - Negative keywords

6. **A/B Testing Recommendations**
   - Which elements to test
   - Hypothesis for each variation

Ensure the ad copy:
- Follows platform character limits exactly
- Includes strong, specific CTA
- Addresses target audience pain points
- Highlights unique value proposition
- Creates urgency or emotional connection
- Is compliant with platform policies
- Matches brand voice perfectly
- Is optimized for the ad format`,
      description: 'Create conversion-focused ad copy with platform specifications and brand alignment'
    },
    {
      id: 'email-campaign',
      name: 'Email Campaign Copy',
      template: `I need help creating effective email marketing copy. Please generate email content that drives opens, clicks, and conversions.

**Campaign Type:**
{campaign_type} (Newsletter / Promotional / Welcome Series / Abandoned Cart / Product Launch / Event Invitation / Educational / Re-engagement)

**Campaign Goal:**
{goal} (Drive Sales / Increase Engagement / Nurture Leads / Event Registration / Content Consumption / Reactivation)

**Email Sequence Position:**
{sequence_position} (First Email / Follow-up / Part of Series: {series_info})

**Target Audience Segment:**
- Segment: {segment_name}
- Demographics: {demographics}
- Past Behavior: {past_behavior}
- Interests: {interests}
- Lifecycle Stage: {lifecycle_stage}

**Product/Service/Content:**
{product_service}

**Brand Voice & Tone:**
{brand_voice}
{tone}

**Subject Line Requirements:**
- Tone: {subject_tone}
- Urgency: {urgency_level}
- Personalization: {personalization}
- Character limit: {subject_limit} (typical: 50-60 characters)
- Preview text: {preview_text_needed}

**Key Message:**
{key_message}

**Value Proposition:**
{value_proposition}

**Main Offer/Benefit:**
{main_offer}

**Call-to-Action:**
- Primary CTA: {primary_cta}
- Secondary CTA: {secondary_cta}
- CTA placement: {cta_placement}

**Email Specifications:**
- Layout Style: {layout_style} (Plain Text / Single Column / Multi-column / Visual Heavy / Minimal)
- Length: {length} (Short / Medium / Long)
- Personalization Level: {personalization_level}
- Images: {images} (Yes / No / Specific: {image_count})

**Segment Context:**
- Past email performance: {past_performance}
- What worked: {what_worked}
- What didn't work: {what_didnt_work}
- Preferences: {known_preferences}

**Urgency/Scarcity:**
{urgency_elements} (Limited Time / Limited Quantity / Early Bird / Exclusivity)

**Social Proof:**
{social_proof} (Testimonials / Reviews / Statistics / Case Studies / User Count)

**Legal Requirements:**
{legal_requirements} (Unsubscribe link / Privacy notice / Disclaimers)

**Previous Email Context:**
{previous_email_context} (If part of sequence, what was in previous emails?)

Please generate:
1. **Subject Line Options** (5 variations)
   - Include open rate optimization tips
   - Specify preview text for each
   - Explain why each might perform well

2. **Email Body Structure**
   - Opening/Hook (attention-grabbing first sentence)
   - Value Statement (why this matters to reader)
   - Main Content (key message, offer details)
   - Social Proof Section (if applicable)
   - CTA Section (clear, compelling call-to-action)
   - Closing/Signature

3. **Full Email Copy**
   - Complete email text
   - Formatting suggestions (bold, italics, spacing)
   - CTA button text and styling suggestions

4. **Plain Text Version** (if HTML email)
   - Simplified text-only version

5. **Mobile Optimization Notes**
   - How it reads on mobile
   - Any adjustments needed

6. **A/B Testing Recommendations**
   - Subject lines to test
   - Content variations to test
   - CTA variations to test

Ensure the email:
- Grabs attention immediately
- Is scannable (short paragraphs, bullets)
- Has clear hierarchy
- Includes strong, specific CTAs
- Creates appropriate urgency
- Is mobile-friendly
- Matches brand voice
- Provides clear value
- Respects subscriber preferences`,
      description: 'Create engaging email campaigns with optimized subject lines and conversion-focused copy'
    },
    {
      id: 'blog-post-seo',
      name: 'SEO Blog Post Content',
      template: `I need help creating SEO-optimized blog content that ranks well and engages readers. Please generate comprehensive blog post content.

**Blog Post Purpose:**
{purpose} (Educate / Inform / Entertain / Convert / Build Authority / Generate Leads)

**Topic/Subject:**
{topic}

**Target Keyword:**
- Primary Keyword: {primary_keyword}
- Search Intent: {search_intent} (Informational / Navigational / Transactional / Commercial Investigation)
- Keyword Difficulty: {keyword_difficulty}
- Related Keywords: {related_keywords}

**Target Audience:**
- Primary Audience: {primary_audience}
- Knowledge Level: {knowledge_level} (Beginner / Intermediate / Advanced)
- Pain Points: {pain_points}
- Search Queries: {search_queries}

**Content Goals:**
- SEO Goal: {seo_goal}
- Engagement Goal: {engagement_goal}
- Conversion Goal: {conversion_goal}
- Internal Links: {internal_links} (Target pages to link to)
- External Links: {external_links} (Authoritative sources to reference)

**Content Structure Preferences:**
{structure_preferences} (How-to / List / Comparison / Case Study / Opinion / Tutorial / Resource)

**Word Count Target:**
{word_count} (Recommendation: {recommended_count})

**Brand Voice & Tone:**
{brand_voice}
{tone}

**Content Guidelines:**
- Do's: {content_dos}
- Don'ts: {content_donts}
- Required Elements: {required_elements}

**Competitor Content:**
{competitor_content} (What competitors have covered, what gaps exist)

**Key Points to Cover:**
{key_points}

**Examples/Case Studies Needed:**
{examples_needed}

**Visual Elements Needed:**
{visual_elements} (Screenshots / Diagrams / Infographics / Charts / Images)

**Call-to-Action:**
{cta} (What action should readers take after reading)

**Meta Requirements:**
- Meta Title (50-60 chars): {meta_title}
- Meta Description (150-160 chars): {meta_description}

**Schema Markup:**
{schema_needed} (Yes / No / Type: {schema_type})

Please generate:
1. **SEO-Optimized Title**
   - Primary title (includes target keyword)
   - Alternative titles (3 variations for A/B testing)
   - Title length and optimization notes

2. **Meta Description**
   - Compelling description (150-160 characters)
   - Includes primary keyword
   - Has clear CTA
   - Alternative versions (3)

3. **Blog Post Outline**
   - H1 (main title)
   - H2 sections (main topics)
   - H3 subsections (supporting points)
   - Key points under each section
   - Suggested word count per section

4. **Introduction Paragraph**
   - Hook (attention-grabbing opening)
   - Keyword integration (natural)
   - What reader will learn
   - Establishes authority/relevance

5. **Main Content Structure**
   - Detailed outline with key points
   - Suggested headings
   - Internal linking opportunities
   - External link suggestions

6. **Conclusion Section**
   - Summarizes key points
   - Reinforces value
   - Includes CTA
   - Encourages engagement (comments/shares)

7. **SEO Checklist**
   - Keyword density recommendations
   - Header tag optimization
   - Image alt text suggestions
   - Internal linking strategy
   - External link opportunities
   - Schema markup suggestions

8. **Engagement Elements**
   - Questions to ask readers
   - Discussion prompts
   - Related content suggestions

Ensure the content:
- Naturally incorporates target keywords
- Provides comprehensive coverage of topic
- Is scannable (headings, bullets, short paragraphs)
- Includes actionable insights
- Has logical flow and structure
- Is optimized for featured snippets
- Includes relevant internal/external links
- Maintains brand voice throughout
- Is the right length for search intent
- Encourages reader engagement`,
      description: 'Create SEO-optimized blog content with proper structure and keyword integration'
    },
    {
      id: 'brand-voice-guide',
      name: 'Brand Voice Guidelines',
      template: `I need help creating comprehensive brand voice guidelines for consistent AI-generated content. Please generate detailed brand voice documentation.

**Brand Name:**
{brand_name}

**Industry:**
{industry}

**Brand Positioning:**
{positioning}

**Target Audience:**
- Primary Audience: {primary_audience}
- Secondary Audience: {secondary_audience}
- Audience Values: {audience_values}
- Communication Preferences: {communication_preferences}

**Brand Personality Traits:**
{personality_traits} (Select 3-5: Professional / Friendly / Quirky / Authoritative / Approachable / Innovative / Reliable / Playful / Sophisticated / Bold / Empathetic)

**Brand Values:**
{brand_values}

**Brand Mission:**
{mission}

**Current Brand Voice Assessment:**
- Strengths: {current_strengths}
- Challenges: {current_challenges}
- Inconsistencies: {inconsistencies}

**Competitor Voice Analysis:**
{competitor_analysis} (How competitors sound, how we should differentiate)

**Tone Variations by Context:**
- Social Media: {social_tone}
- Website: {website_tone}
- Email: {email_tone}
- Customer Service: {service_tone}
- Marketing Materials: {marketing_tone}

**Communication Do's:**
{brand_dos}

**Communication Don'ts:**
{brand_donts}

**Preferred Language Style:**
- Sentence Structure: {sentence_structure} (Short / Varied / Complex)
- Vocabulary Level: {vocabulary} (Simple / Professional / Technical / Accessible)
- Formality: {formality} (Casual / Professional / Formal)
- Pronouns: {pronouns} (We / You / They / I)

**Words to Use:**
{favorite_words}

**Words to Avoid:**
{avoid_words}

**Phrases/Expressions:**
- Signature Phrases: {signature_phrases}
- Phrases to Avoid: {avoid_phrases}

**Emoji Usage:**
{emoji_policy} (None / Minimal / Moderate / Liberal / Specific: {emoji_list})

**Examples:**
- Good Examples: {good_examples}
- Bad Examples: {bad_examples}

Please generate:
1. **Brand Voice Statement**
   - 2-3 sentence summary of brand voice
   - What makes it unique
   - Core personality traits

2. **Detailed Voice Characteristics**
   - Tone description (detailed)
   - Style description
   - Voice spectrum (formal vs casual scale)
   - Personality dimensions

3. **Voice Guidelines by Channel**
   - How voice adapts by platform
   - Channel-specific considerations
   - Adaptation rules

4. **Writing Principles**
   - Core principles for all content
   - Grammar and style preferences
   - Formatting guidelines

5. **Voice Examples**
   - Example A: {example_scenario_a}
   - Example B: {example_scenario_b}
   - Example C: {example_scenario_c}
   - Show how to write in brand voice for each

6. **Quick Reference Guide**
   - One-page checklist
   - "Does this sound like us?" test
   - Red flags to watch for

7. **AI Prompt Template for Brand Voice**
   - Template for prompting AI to write in brand voice
   - Key phrases to include in prompts
   - Voice modifiers for AI

8. **Training Examples**
   - Before and After examples
   - Common mistakes and corrections
   - Voice refinement exercises

Ensure the guidelines:
- Are clear and actionable
- Include concrete examples
- Are easy to reference quickly
- Cover all communication channels
- Can be used to train AI agents
- Help maintain consistency
- Are specific enough to avoid ambiguity`,
      description: 'Create comprehensive brand voice guidelines for consistent AI-generated content'
    }
  ]
};

// Best practices for prompts
export const bestPractices = {
  clarity: {
    title: 'Be Clear and Specific',
    description: 'Vague prompts lead to vague answers. State exactly what you need.',
    goodExample: 'Create a Python function that validates email addresses using regex.',
    badExample: 'Make something for emails.'
  },
  context: {
    title: 'Provide Context',
    description: 'Context helps me understand your situation and provide relevant solutions.',
    goodExample: 'I\'m building a REST API using Node.js and Express. I need help with authentication middleware.',
    badExample: 'How do I do authentication?'
  },
  structure: {
    title: 'Structure Your Request',
    description: 'Organize complex requests with sections, numbered points, or clear formatting.',
    goodExample: `**Problem:** Memory leak in React app
**Code:** [code snippet]
**Expected:** Clean up on unmount
**Actual:** Components persist in memory`,
    badExample: 'My React app has a memory leak help'
  },
  examples: {
    title: 'Include Examples',
    description: 'Examples show me exactly what format or style you want.',
    goodExample: 'Generate 5 product names similar to: "CloudSync", "DataFlow", "SecureVault"',
    badExample: 'Give me product names'
  },
  constraints: {
    title: 'Specify Constraints',
    description: 'Tell me about limitations, preferences, or requirements.',
    goodExample: 'Refactor this code to use TypeScript, but keep it under 100 lines and maintain backward compatibility.',
    badExample: 'Make this TypeScript'
  },
  iteration: {
    title: 'Iterate and Refine',
    description: 'Start broad, then narrow down based on my responses.',
    goodExample: 'First: "Explain React hooks" → Then: "Show me how useEffect handles cleanup"',
    badExample: 'Asking everything at once without refining'
  }
};

// Prompt improvement suggestions based on common mistakes
export const improvementTips = [
  {
    issue: 'Too vague',
    tip: 'Add specific details about what you need',
    example: 'Instead of "Help with coding", try "Help me implement user authentication in my Express.js API"'
  },
  {
    issue: 'Missing context',
    tip: 'Provide background information about your project or situation',
    example: 'Add: "I\'m building a Node.js REST API for a todo app..."'
  },
  {
    issue: 'No format specified',
    tip: 'Specify the desired output format',
    example: 'Add: "Format as a numbered list" or "Provide code with comments"'
  },
  {
    issue: 'Assumes prior knowledge',
    tip: 'Include relevant details even if they seem obvious',
    example: 'Don\'t assume I know your tech stack - specify it'
  },
  {
    issue: 'Multiple questions at once',
    tip: 'Break complex requests into separate, focused questions',
    example: 'Ask "How do I handle errors?" before "How do I optimize performance?"'
  }
];

// Example prompts showing good vs bad
export const promptExamples = [
  {
    category: 'Coding',
    bad: {
      prompt: 'Fix my code',
      issues: ['No code provided', 'No context about the problem', 'Unclear what needs fixing']
    },
    good: {
      prompt: `I'm building a user authentication system in Node.js with Express. My login endpoint isn't working correctly - it returns a 500 error when validating passwords.

Here's my code:
\`\`\`javascript
app.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const isValid = bcrypt.compare(req.body.password, user.password);
  if (isValid) {
    res.json({ token: generateToken(user) });
  }
});
\`\`\`

The error occurs when the password comparison runs. Can you help debug this and provide a secure, production-ready solution?`,
      whyGood: ['Specific problem stated', 'Code provided', 'Context about the system', 'Clear error description', 'Asks for secure solution']
    }
  },
  {
    category: 'Analysis',
    bad: {
      prompt: 'What does this data mean?',
      issues: ['No data provided', 'No specific questions', 'Unclear analysis goals']
    },
    good: {
      prompt: `I have sales data from the last quarter and need to understand:

1. Which products performed best and why?
2. Are there any concerning trends I should address?
3. What recommendations do you have for next quarter?

Here's a sample of the data:
- Product A: $50k revenue, 15% growth
- Product B: $30k revenue, -5% decline
- Product C: $75k revenue, 25% growth

[Full dataset available if needed]

Please analyze this and provide insights with actionable recommendations.`,
      whyGood: ['Specific questions listed', 'Data sample provided', 'Clear analysis goals', 'Asks for actionable insights']
    }
  },
  {
    category: 'Creative',
    bad: {
      prompt: 'Write something about AI',
      issues: ['Too broad', 'No audience specified', 'No tone/style guidance', 'No length specified']
    },
    good: {
      prompt: `I need a blog post about AI for non-technical business owners.

Requirements:
- Title: Engaging and accessible
- Length: 800-1000 words
- Tone: Professional but approachable, avoiding jargon
- Key points to cover:
  1. What AI actually is (simple explanation)
  2. Common business use cases
  3. Getting started (practical steps)
  4. Potential concerns and how to address them

Include a call-to-action at the end encouraging readers to assess their business needs.`,
      whyGood: ['Clear audience', 'Specific length', 'Tone specified', 'Structure outlined', 'Concrete requirements']
    }
  },
  {
    category: 'Professional - Jira Story',
    bad: {
      prompt: 'Create a Jira story for user authentication',
      issues: ['No user story format', 'Missing acceptance criteria', 'No technical context', 'No dependencies mentioned', 'No edge cases']
    },
    good: {
      prompt: `I need to create a comprehensive Jira user story. Please generate a well-structured story with all required components.

**Epic/Larger Context:**
User Authentication and Authorization Epic - Enable secure user login and session management

**User Story (As a... I want... So that...):**
- As a: Registered user
- I want: To log in using email and password
- So that: I can access my account and personalized features

**Detailed Requirements:**
- Email and password validation
- JWT token generation on successful login
- Session management with refresh tokens
- Rate limiting (5 attempts per 15 minutes)
- Password reset functionality (separate story)

**Current System State:**
- User registration is implemented
- Database schema exists for users table
- Password hashing using bcrypt is in place

**Technical Context:**
- Tech Stack: Node.js, Express.js, PostgreSQL, JWT
- Related Components/Services: User service, Auth middleware, Email service
- Dependencies: Depends on user registration being completed
- Integration Points: Email service for notifications, Redis for session storage

**Business Rules & Constraints:**
- Password must be minimum 8 characters with uppercase, lowercase, number, special char
- Account locked after 5 failed attempts for 30 minutes
- JWT tokens expire in 15 minutes, refresh tokens in 7 days
- Must comply with GDPR data protection requirements

**Edge Cases to Consider:**
- User enters incorrect password multiple times
- User tries to login with non-existent email
- Token expiration during active session
- Concurrent login attempts from different devices
- Database connection failure during authentication

**Acceptance Criteria:**
Please generate detailed acceptance criteria that cover:
1. Happy path scenarios
2. Error handling and edge cases
3. Validation requirements
4. Performance expectations (if applicable)
5. Security considerations (if applicable)
6. UI/UX requirements (if applicable)
7. Backward compatibility (if applicable)

**Definition of Done:**
- [ ] Code implemented and reviewed
- [ ] Unit tests written and passing (coverage > 80%)
- [ ] Integration tests passing
- [ ] Security review completed
- [ ] Documentation updated
- [ ] QA verified
- [ ] Performance tested (response time < 200ms)

**Priority:** High
**Estimated Story Points:** 5

Please generate:
1. A well-formatted Jira story description
2. Complete acceptance criteria list (minimum 5-7 criteria)
3. Technical implementation notes
4. Test scenarios to consider
5. Any risks or dependencies
6. Suggested subtasks (if applicable)`,
      whyGood: ['Complete user story format', 'Detailed technical context', 'All dependencies listed', 'Edge cases identified', 'Clear acceptance criteria structure', 'Definition of Done specified']
    }
  },
  {
    category: 'Professional - Test Cases',
    bad: {
      prompt: 'Write test cases for login',
      issues: ['Too vague', 'No test scenario details', 'Missing edge cases', 'No test data specified', 'No test structure defined']
    },
    good: {
      prompt: `I need comprehensive test cases for the following feature/functionality. Please generate test cases covering all scenarios.

**Feature/Functionality:**
User login with email and password authentication

**Technical Context:**
- Technology Stack: Node.js, Express.js, PostgreSQL, JWT
- Component/Module: AuthController, AuthService, UserRepository
- Related Systems: Email service, Redis for rate limiting
- API Endpoints: POST /api/auth/login
- Database Tables: users, sessions

**User Requirements:**
- User can log in with valid email and password
- User receives JWT token upon successful login
- User session is tracked in Redis
- Failed login attempts are rate limited

**Acceptance Criteria:**
1. User with valid credentials can successfully log in
2. JWT token is returned on successful login
3. Invalid credentials return 401 error
4. Account is locked after 5 failed attempts
5. Rate limiting prevents brute force attacks
6. Session is created in Redis on successful login

**Business Rules:**
- Password must match hashed password in database
- Account locked for 30 minutes after 5 failed attempts
- JWT token expires in 15 minutes
- Refresh token expires in 7 days

**Current Behavior:**
Login endpoint exists but returns 500 error on password validation

**Expected Behavior:**
- Valid credentials: Return 200 with JWT token and user data
- Invalid credentials: Return 401 with error message
- Locked account: Return 403 with lockout message
- Rate limit exceeded: Return 429 with retry-after header

**Input/Output Specifications:**
- Valid Inputs: Valid email format, password 8+ chars
- Invalid Inputs: Invalid email, wrong password, empty fields
- Expected Outputs: 200 with token, 401 with error, 403 with lockout
- Error Messages: "Invalid credentials", "Account locked", "Rate limit exceeded"

**Edge Cases & Boundary Conditions:**
- Empty email or password fields
- Email not in database
- Password correct but account is locked
- Token expiration during request
- Database connection failure
- Redis connection failure
- Maximum login attempts reached

**Integration Points:**
- Database: User lookup and password verification
- Redis: Session storage and rate limiting
- Email Service: Notification on account lockout

**Performance Requirements:**
- Response time < 200ms for successful login
- Handle 100 concurrent login requests
- Database queries optimized with indexes

**Security Considerations:**
- Passwords must be hashed (bcrypt)
- JWT tokens must be signed
- Rate limiting to prevent brute force
- Input sanitization and validation
- SQL injection prevention
- XSS prevention in error messages

**Test Data Requirements:**
- Valid user: email: test@example.com, password: Test123!@#
- Invalid user: email: invalid@example.com
- Locked user account
- Multiple test users for concurrent testing

Please generate test cases covering:
1. **Positive Test Cases** (happy path scenarios)
2. **Negative Test Cases** (error handling, invalid inputs)
3. **Boundary Value Test Cases**
4. **Integration Test Cases**
5. **Performance Test Cases**
6. **Security Test Cases**
7. **Regression Test Cases**

For each test case, please include:
- Test Case ID (format: TC-XXX)
- Test Case Title
- Description
- Pre-conditions
- Test Steps (numbered)
- Test Data
- Expected Result
- Priority (High/Medium/Low)
- Test Type (Functional/Integration/Performance/Security)`,
      whyGood: ['Complete technical context', 'All test scenarios covered', 'Detailed test data requirements', 'Edge cases identified', 'Structured test case format', 'Security considerations included', 'Performance requirements specified']
    }
  },
  {
    category: 'Marketing - Social Media Caption',
    bad: {
      prompt: 'Write a caption for Instagram about our new product',
      issues: ['No brand voice specified', 'Missing target audience', 'No CTA mentioned', 'No character limit specified', 'No hashtag strategy', 'No engagement goals', 'No platform-specific considerations']
    },
    good: {
        prompt: `I need help creating a compelling social media caption. Please generate captions that meet all platform and engagement requirements.

**Platform:**
Instagram

**Campaign/Context:**
Summer Collection 2024 Launch - Highlighting sustainable fashion line

**Content Type:**
Product Launch

**Product/Service/Subject:**
New eco-friendly t-shirt collection made from recycled materials

**Target Audience:**
- Demographics: Ages 25-40, environmentally conscious millennials and Gen Z
- Interests: Sustainable fashion, environmental activism, ethical consumerism
- Pain Points: Difficulty finding stylish sustainable clothing
- Values: Environmental responsibility, ethical production, authenticity

**Brand Voice & Tone:**
Our brand voice is authentic, inspiring, and empowering. We speak as a friend who cares about the planet, not preachy or corporate. Tone: Inspirational, Educational, Conversational

**Brand Guidelines:**
- Do's: Use empowering language, highlight impact, show real people, be authentic
- Don't: Avoid guilt-tripping, corporate jargon, unrealistic promises
- Keywords to use: sustainable, eco-friendly, impact, community, change, conscious
- Keywords to avoid: cheap, fast fashion, discount
- Brand personality traits: Authentic, Inspiring, Community-focused, Action-oriented

**Key Message:**
Fashion can be both stylish and sustainable. Our new collection proves you don't have to compromise.

**Call-to-Action (CTA):**
Shop Now - Direct to product page

**Content/Image Context:**
Image shows diverse models wearing the new t-shirts in natural outdoor settings, with a before/after showing the recycling process

**Hashtag Strategy:**
- Industry hashtags: #sustainablefashion #ecofashion #ethicalfashion
- Brand hashtags: #WearTheChange #EcoStyle2024
- Trending hashtags: #ConsciousConsumer #FashionRevolution
- Number of hashtags: 15-20 (mix of branded and discovery)

**Character Limits:**
- Platform limit: 2200 characters
- Preferred length: 150-200 characters for caption, hashtags in first comment

**Engagement Goals:**
Comments, Shares, Saves (for shopping later)

**Required Elements:**
- Emojis: Yes - Use 🌱 ♻️ ✨ (eco-friendly, authentic vibe)
- Mentions: @model1 @model2 (tag models)
- Links: Bio link (link in bio)
- Story highlights: Add to "New Collection" story highlight

**Performance Notes from Past Posts:**
Product launch posts with behind-the-scenes content perform 3x better. Captions with questions get 40% more comments.

Please generate:
1. **Primary Caption** (optimized for platform character limit)
2. **Alternative Version** (for A/B testing)
3. **Hashtag Set** (organized by category)
4. **Story Caption** (if applicable)
5. **First Comment** (if splitting hashtags)
6. **Engagement Prompt** (question or call-to-action to encourage comments)
7. **Timing Recommendations** (best times to post based on audience)

Ensure the caption:
- Matches brand voice exactly
- Includes specified CTA
- Stays within character limits
- Uses appropriate tone for platform
- Encourages engagement
- Is clear and compelling
- Follows platform best practices`,
        whyGood: ['Complete brand voice guidelines', 'Detailed target audience', 'Platform-specific considerations', 'Hashtag strategy defined', 'Engagement goals specified', 'Character limits respected', 'Performance insights included', 'Multiple variations for testing']
      }
    },
    {
      category: 'Marketing - Image Generation',
      bad: {
        prompt: 'Generate an image of a product',
        issues: ['Too vague - what product?', 'No style specified', 'No composition details', 'Missing brand colors', 'No technical specs', 'No lighting preferences', 'No mood/atmosphere', 'Unclear dimensions']
      },
      good: {
        prompt: `I need help creating a detailed, effective prompt for AI image generation (DALL-E, Midjourney, Stable Diffusion). Please generate a comprehensive prompt that will produce the exact image I need.

**Image Purpose:**
Social Media Post - Instagram feed post showcasing new product launch

**Subject/Scene:**
Premium wireless earbuds displayed on a minimalist white surface with soft shadows, positioned diagonally across the frame

**Style & Aesthetic:**
- Art Style: Photorealistic product photography
- Mood/Atmosphere: Clean, modern, premium, professional
- Color Palette: Brand colors: Navy blue (#1E3A8A), white, and subtle gold accents (#F59E0B). Monochrome background with color pop on product
- Lighting: Soft, diffused studio lighting with subtle rim lighting on the product edges to create depth and premium feel

**Composition:**
- Shot Type: Close-up product shot
- Angle: Eye level, slight overhead tilt (45 degrees)
- Rule of Thirds: Product positioned in lower right third
- Focus: Sharp focus on product, soft focus background with subtle bokeh

**Brand Elements:**
- Brand Colors: Navy blue (#1E3A8A), white, gold accents (#F59E0B)
- Logo Placement: Small logo on earbuds case (subtle, not dominant)
- Brand Style: Minimalist, premium, modern, Scandinavian-inspired
- Typography Style: Clean sans-serif (to be added in post-production)

**Technical Specifications:**
- Aspect Ratio: 1:1 (Instagram square format)
- Resolution: 8K, High Resolution
- Image Quality: Professional Photography Quality, Ultra Realistic, High Detail
- Format: PNG with transparent background option for overlay text

**Specific Details:**
- Objects/Products: Wireless earbuds in navy blue case, earbuds removed and displayed next to case, showing both closed and open states
- People/Characters: None - product-only shot
- Background: Clean white gradient background (pure white to soft gray transition)
- Text Overlay: None (will add in post-production)
- Props/Elements: Soft shadows, subtle reflection on white surface, no other distracting elements

**Atmospheric Elements:**
Soft shadows, subtle product reflection on white surface, rim lighting glow

**Reference Style:**
- Similar Images/Vibe: Apple product photography style - clean, minimalist, premium
- Artist/Photographer Style: Commercial product photography with emphasis on simplicity and elegance
- Photography Technique: Flat lay with slight elevation, controlled studio lighting

**Avoid Elements:**
No watermarks, no text in image, no busy backgrounds, no human hands, no props except product, no cluttered elements, no harsh shadows

**Platform-Specific Requirements:**
Optimized for Instagram feed (1:1 square), mobile-first viewing, high contrast for thumbnails

**Negative Prompt** (what to avoid):
Watermarks, text, people, hands, busy backgrounds, cluttered compositions, harsh shadows, low quality, blurry, distorted, wrong colors

**Iteration Notes:**
This is first version. May need adjustments to lighting intensity or product positioning based on results.

Please generate:
1. **Primary Prompt** (concise, optimized for AI image generation)
2. **Detailed Prompt** (if platform allows longer descriptions)
3. **Negative Prompt** (explicitly state what to avoid)
4. **Prompt Variations** (3 alternative versions for testing)
5. **Style Keywords** (extracted for easy modification)
6. **Refinement Suggestions** (how to iterate if first result isn't perfect)

Ensure the prompt:
- Is specific and descriptive
- Uses standard AI art terminology
- Avoids ambiguity
- Includes technical parameters
- References style clearly
- Specifies composition elements
- Is optimized for the target AI model`,
        whyGood: ['Complete style specification', 'Brand colors specified', 'Technical specs detailed', 'Composition clearly defined', 'Reference style provided', 'Negative prompt included', 'Platform optimization noted', 'Iteration strategy outlined']
      }
    }
];

