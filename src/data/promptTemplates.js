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
{tried_solutions}`,
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
- Scale expectations: {scale}`,
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
- Style preferences: {style_preferences}`,
      description: 'Refactor code while maintaining functionality'
    }
  ],
  analysis: [
    {
      id: 'data-analysis',
      name: 'Data Analysis',
      template: `**Primary Questions:**
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
{output_format}`,
      description: 'Analyze data and extract meaningful insights'
    },
    {
      id: 'problem-solving',
      name: 'Problem Solving',
      template: `**Problem Statement:**
{problem_statement}

**Context:**
{context}

**Constraints:**
{constraints}

**Success Criteria:**
{success_criteria}

**What I've considered so far:**
{considered_approaches}`,
      description: 'Systematic problem-solving with structured approach'
    }
  ],
  creative: [
    {
      id: 'content-writing',
      name: 'Content Writing',
      template: `Content type: {content_type}

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
{additional_requirements}`,
      description: 'Generate high-quality content tailored to your needs'
    },
    {
      id: 'brainstorming',
      name: 'Brainstorming',
      template: `Subject: {subject}

**Goal:**
{goal}

**Context:**
{context}

**Constraints:**
{constraints}

**Preference for ideas:**
{idea_preferences}

Number of ideas: {number}`,
      description: 'Generate creative ideas and solutions'
    }
  ],
  learning: [
    {
      id: 'explain-concept',
      name: 'Explain Concept',
      template: `Concept: {concept}

**My Current Understanding:**
{current_understanding}

**Level of Detail:**
{detail_level}

**Examples Needed:**
{examples_needed}

**Learning Style:**
{learning_style}

**Questions I Have:**
{questions}`,
      description: 'Get clear explanations tailored to your learning level'
    },
    {
      id: 'learning-path',
      name: 'Learning Path',
      template: `Subject: {subject}

**Current Knowledge Level:**
{current_level}

**Learning Goals:**
{goals}

**Time Available:**
{time_available}

**Preferred Learning Methods:**
{learning_methods}

**End Goal:**
{end_goal}`,
      description: 'Design a structured learning journey'
    }
  ],
  professional: [
    {
      id: 'jira-story',
      name: 'Jira Story Creation',
      template: `Jira story — {story_title}
Epic: {epic_context}
Story: As a {user_type}, I want {feature_capability} to {business_value}.
Priority: {priority} | Points: {story_points}

Stack: {tech_stack} | Existing: {current_system_state}
Dependencies: {dependencies} | Integrates: {integration_points}

Requirements:
{detailed_requirements}

Business rules: {business_rules}

Edge cases: {edge_cases}

DoD: {dod_items}`,
      description: 'Create comprehensive Jira stories with acceptance criteria and technical details'
    },
    {
      id: 'test-cases-generation',
      name: 'Test Cases Generation',
      template: `**Feature/Functionality:**
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
{test_data_requirements}`,
      description: 'Generate comprehensive test cases covering all scenarios and edge cases'
    },
    {
      id: 'test-analysis',
      name: 'Test Case Analysis & Review',
      template: `**Feature/Functionality Being Tested:**
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
{areas_of_concern}`,
      description: 'Analyze and improve existing test cases with gap analysis and recommendations'
    },
    {
      id: 'pr-description',
      name: 'Pull Request Description',
      template: `**PR Title:**
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
{reviewer_notes}`,
      description: 'Create comprehensive PR descriptions with all necessary details'
    },
    {
      id: 'technical-documentation',
      name: 'Technical Documentation',
      template: `**Documentation Type:**
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
{prerequisites}`,
      description: 'Generate comprehensive technical documentation with examples and structure'
    },
    {
      id: 'requirements-gathering',
      name: 'Requirements Gathering',
      template: `**Project/Feature:**
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
{questions}`,
      description: 'Structure comprehensive requirements gathering and documentation'
    },
    {
      id: 'bug-report',
      name: 'Bug Report Template',
      template: `**Bug Title:**
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
{attachments}`,
      description: 'Create detailed bug reports with all necessary information for developers'
    },
    {
      id: 'code-review-checklist',
      name: 'Code Review Checklist',
      template: `**PR/Ticket:**
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
{focus_areas}`,
      description: 'Comprehensive code review checklist covering all aspects'
    }
  ],
  'marketing-creative': [
    {
      id: 'social-media-caption',
      name: 'Social Media Caption',
      template: `**Platform:**
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
{performance_notes}`,
      description: 'Create platform-optimized social media captions with brand voice and engagement strategy'
    },
    {
      id: 'image-generation',
      name: 'Image Generation Prompt',
      template: `**IMPORTANT INSTRUCTIONS FOR AI AGENT:**
- Read all the provided information below completely before responding
- DO NOT ask repetitive questions or request additional information unless something is truly unclear
- After reviewing the specifications, you MUST generate the actual image immediately using your image generation capabilities
- Generate the image as realistically and photorealistically as possible based on all the specifications provided
- If you have image generation capabilities, CREATE AND DISPLAY THE IMAGE NOW
- Focus on generating the highest quality, most realistic image possible using all the details provided

I need you to GENERATE AN IMAGE based on these detailed specifications. Please create the image as realistically as possible following all the requirements below.

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
- Image Quality: {quality} (High Detail / Ultra Realistic / Professional Photography Quality / Photorealistic)
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

**FINAL ACTION REQUIRED:**
After reviewing all the above specifications, you MUST:
1. **GENERATE THE IMAGE IMMEDIATELY** - Use your image generation capabilities to create the image based on all specifications provided above
2. Generate the image with maximum realism and photorealism
3. Ensure the image matches ALL the specifications: style, composition, colors, lighting, brand elements, and technical requirements
4. Create the image at the highest quality possible
5. DO NOT ask additional questions - generate the image now using the information provided

**If you have image generation capabilities:**
- CREATE AND DISPLAY THE IMAGE NOW
- Make it as photorealistic and realistic as possible
- Follow every specification exactly as provided
- Generate immediately without asking for more information

**If you need to provide an optimized prompt for another AI image generator:**
Please provide:
1. **Primary Prompt** (concise, optimized for AI image generation)
   - Format: Subject + Style + Composition + Details + Technical specs + "photorealistic, ultra realistic, professional photography quality"
   - Length: Optimized for model requirements (typically 75-150 words)
   - MUST end with emphasis on realism: "ultra realistic, photorealistic, professional photography quality, high detail"
   
2. **Detailed Prompt** (if platform allows longer descriptions)
   - Expanded version with all context
   - MUST emphasize: "Generate this image as realistically as possible"
   
3. **Negative Prompt** (explicitly state what to avoid)
   
4. **Prompt Variations** (3 alternative versions for testing, all emphasizing realism)
   
5. **Style Keywords** (extracted for easy modification)
   
6. **Refinement Suggestions** (how to iterate if first result isn't perfect)

**CRITICAL:** The final prompt MUST explicitly include phrases like:
- "ultra realistic"
- "photorealistic" 
- "professional photography quality"
- "highly detailed"
- "as realistic as possible"
- "maximum realism"

Ensure the prompt:
- Is specific and descriptive
- Uses standard AI art terminology
- Avoids ambiguity
- Includes technical parameters
- References style clearly
- Specifies composition elements
- Is optimized for the target AI model
- EXPLICITLY INSTRUCTS TO GENERATE THE IMAGE
- EMPHASIZES MAXIMUM REALISM AND PHOTOREALISM`,
      description: 'Create detailed AI image generation prompts for DALL-E, Midjourney, Stable Diffusion'
    },
    {
      id: 'ad-copy',
      name: 'Ad Copy Creation',
      template: `**Campaign Details:**
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
{legal_requirements}`,
      description: 'Create conversion-focused ad copy with platform specifications and brand alignment'
    },
    {
      id: 'email-campaign',
      name: 'Email Campaign Copy',
      template: `**Campaign Type:**
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
{previous_email_context}`,
      description: 'Create engaging email campaigns with optimized subject lines and conversion-focused copy'
    },
    {
      id: 'blog-post-seo',
      name: 'SEO Blog Post Content',
      template: `**Blog Post Purpose:**
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
{schema_needed} (Yes / No / Type: {schema_type})`,
      description: 'Create SEO-optimized blog content with proper structure and keyword integration'
    },
    {
      id: 'brand-voice-guide',
      name: 'Brand Voice Guidelines',
      template: `**Brand Name:**
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

**Example Scenarios:**
- Scenario A: {example_scenario_a}
- Scenario B: {example_scenario_b}
- Scenario C: {example_scenario_c}`,
      description: 'Create comprehensive brand voice guidelines for consistent AI-generated content'
    }
  ]
};

// Best practices for prompts
export const bestPractices = {
  craft: {
    title: 'Use the CRAFT Framework',
    description: 'CRAFT is the most token-efficient way to write prompts. Each section earns its place — skip anything that doesn\'t apply.',
    goodExample: `Act as a senior backend engineer.

**Context:** Node.js API, PostgreSQL, JWT auth.

**Goal:** Write a rate-limiting middleware for login failures.

**Rules & Constraints:** Use ioredis. Return 429 with retry-after header.

**Output Format:** Code + 3-4 bullet caveats.`,
    badExample: 'Write me a rate limiter for my app. Include all edge cases and make it production ready and also add tests and documentation please.'
  },
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

[Full dataset available if needed]`,
      whyGood: ['Specific questions listed', 'Data sample provided', 'Clear analysis goals', 'No meta-instructions — context drives the output']
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
      prompt: `Jira story — User Login (Email + Password)
Epic: User Auth & Authorization — secure login, session management
Story: As a registered user, I want email+password login to access my account and personalized features.
Priority: High | Points: 5

Stack: Node.js, Express, PostgreSQL, JWT, Redis, bcrypt | Existing: registration done, users table, bcrypt hashing in place
Dependencies: user registration complete | Integrates: email service (notifications), Redis (sessions)

Requirements:
- Email/password validation → JWT on success + refresh token
- Rate limit: 5 attempts/15min; lockout 30min after 5 fails
- JWT TTL 15min, refresh TTL 7 days
- Password: min 8 chars, upper + lower + number + special char
- GDPR compliant

Business rules: account locked 30min after 5 fails; JWT TTL 15min; refresh 7d; GDPR compliant

Edge cases: repeated wrong password, unknown email, token expiry mid-session, concurrent logins, DB failure during auth

DoD: unit tests >80%, integration tests, security review, docs updated, QA verified, p95 <200ms`,
      whyGood: ['No meta-instructions — just data', 'User story collapsed to one sentence', 'Dense notation (TTL 15min vs "expires in 15 minutes")', 'DoD is one line, non-obvious items only', 'Model infers AC, subtasks, risks from context']
    }
  },
  {
    category: 'Professional - Test Cases',
    bad: {
      prompt: 'Write test cases for login',
      issues: ['Too vague', 'No test scenario details', 'Missing edge cases', 'No test data specified', 'No test structure defined']
    },
    good: {
      prompt: `Feature: User login (email + password)
Stack: Node.js, Express, PostgreSQL, JWT | Modules: AuthController, AuthService, UserRepository
Endpoint: POST /api/auth/login | Tables: users, sessions | Integrates: Redis (rate limiting), email service (lockout notification)

Business rules: lockout 30min after 5 fails; JWT TTL 15min; refresh 7d; bcrypt hashing

Current behavior: endpoint returns 500 on password validation
Expected: 200+token (valid), 401 (invalid), 403 (locked), 429+retry-after (rate limited)

Edge cases: empty fields, unknown email, correct password but locked account, token expiry during request, DB/Redis connection failure, max attempts reached

Test data: valid test@example.com / Test123!@#, invalid@example.com, pre-locked account, concurrent users`,
      whyGood: ['No meta-instructions — data only', 'Dense notation (TTL 15min, lockout 30min)', 'All edge cases listed concisely', 'Expected outputs specified as status codes', 'Model infers positive/negative/boundary/security test cases from context']
    }
  },
  {
    category: 'Marketing - Social Media Caption',
    bad: {
      prompt: 'Write a caption for Instagram about our new product',
      issues: ['No brand voice specified', 'Missing target audience', 'No CTA mentioned', 'No character limit specified', 'No hashtag strategy', 'No engagement goals', 'No platform-specific considerations']
    },
    good: {
        prompt: `**Platform:**
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
Product launch posts with behind-the-scenes content perform 3x better. Captions with questions get 40% more comments.`,
        whyGood: ['No meta-instructions — data only', 'Brand voice described in concrete terms (not just "professional")', 'Hashtag strategy defined with counts', 'Past performance data included', 'Character limits + CTA specified — model handles the rest']
      }
    },
    {
      category: 'Marketing - Image Generation',
      bad: {
        prompt: 'Generate an image of a product',
        issues: ['Too vague - what product?', 'No style specified', 'No composition details', 'Missing brand colors', 'No technical specs', 'No lighting preferences', 'No mood/atmosphere', 'Unclear dimensions']
      },
      good: {
        prompt: `**Image Purpose:**
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
This is first version. May need adjustments to lighting intensity or product positioning based on results.`,
        whyGood: ['Complete style specification', 'Brand colors specified', 'Technical specs detailed', 'Composition clearly defined', 'Reference style provided', 'Negative prompt included', 'Platform optimization noted', 'Iteration strategy outlined']
      }
    }
];

// Organisation token-saving rules
export const tokenRules = [
  {
    id: 'minimize-context',
    number: 1,
    title: 'Minimize Context Size',
    principle: 'Include only relevant snippets — not entire files or logs.',
    example: '"Focus on lines 120–180" instead of pasting the whole file.',
    tag: 'context',
    topPick: true,
  },
  {
    id: 'concise-outputs',
    number: 2,
    title: 'Ask for Concise Outputs',
    principle: 'Models are verbose unless constrained. Specify limits explicitly.',
    example: '"Limit response to 5 bullet points" or "Max 150 words" or "Code only"',
    tag: 'output',
    topPick: true,
  },
  {
    id: 'iterative-narrowing',
    number: 3,
    title: 'Iterate in Small Steps',
    principle: 'Generate approach → validate → generate code → optimize. Not everything at once.',
    example: 'Instead of "Build full system + tests + docs", get the approach first, then code.',
    tag: 'workflow',
    topPick: true,
  },
  {
    id: 'reuse-prompts',
    number: 4,
    title: 'Reuse Proven Prompts',
    principle: 'Maintain a prompt library for repeated tasks — reviews, debugging, API design.',
    example: 'Standard prompts eliminate re-explanation overhead and reduce trial-and-error.',
    tag: 'workflow',
    topPick: false,
  },
  {
    id: 'constrain-task',
    number: 5,
    title: 'Constrain the Task Strictly',
    principle: 'Narrow scope = shorter response + fewer iterations.',
    example: '"Reduce O(n²) to O(n log n), same interface, no new dependencies" — not "Improve this code"',
    tag: 'context',
    topPick: false,
  },
  {
    id: 'control-format',
    number: 6,
    title: 'Control Output Format',
    principle: 'Always specify format to eliminate reformatting and clarification turns.',
    example: '"Return JSON only" or "Follow this exact schema" or "No explanations"',
    tag: 'output',
    topPick: false,
  },
  {
    id: 'stop-early',
    number: 7,
    title: 'Stop at 80–90% Good Enough',
    principle: 'The last 10% of "perfection" consumes disproportionate tokens.',
    example: 'If the result is usable, take it and refine manually rather than re-prompting.',
    tag: 'strategy',
    topPick: false,
  },
  {
    id: 'debug-smart',
    number: 8,
    title: 'Debug Smart',
    principle: 'Provide: error message + relevant function only + inputs causing failure.',
    example: 'Most debugging needs <10% of typical context. Skip the full repo and full logs.',
    tag: 'context',
    topPick: false,
  },
  {
    id: 'haiku-first',
    number: 9,
    title: 'Use Haiku First, Escalate Later',
    principle: 'Test and refine your prompt on Haiku before running on Sonnet or Opus.',
    example: 'Ask Haiku: "Improve this prompt for clarity and efficiency" — often eliminates failed runs.',
    tag: 'strategy',
    topPick: true,
  },
  {
    id: 'avoid-history',
    number: 10,
    title: 'Avoid Redundant Chat History',
    principle: 'Old context silently increases cost every turn. Start fresh when topics shift.',
    example: 'Every message in a long thread adds tokens — stale context inflates cost with no benefit.',
    tag: 'strategy',
    topPick: false,
  },
  {
    id: 'structured-input',
    number: 11,
    title: 'Prefer Structured Input',
    principle: 'Labelled key-value format is shorter and clearer than narrative prose.',
    example: '"Context: payment API | Issue: timeout at 5s | Constraint: cannot change DB"',
    tag: 'context',
    topPick: false,
  },
  {
    id: 'batch-tasks',
    number: 12,
    title: 'Batch Similar Tasks',
    principle: 'Review multiple items in one call rather than separate calls.',
    example: '"Review these 5 functions for bugs: …" instead of 5 separate prompts.',
    tag: 'workflow',
    topPick: false,
  },
  {
    id: 'no-meta-instructions',
    number: 13,
    title: 'Remove Meta-Instructions',
    principle: 'Don\'t tell the model to "generate a well-structured story" — just give it the data.',
    example: 'Skip "Please generate a comprehensive X with all required components." The model already knows.',
    tag: 'context',
    topPick: true,
  },
  {
    id: 'collapse-labeled-bullets',
    number: 14,
    title: 'Collapse Labeled Bullets',
    principle: '"As a user, I want X to Y" beats "- As a: user / - I want: X / - So that: Y" — 1 line vs 3.',
    example: 'Merge labeled sub-bullets into one dense sentence or key-value pair.',
    tag: 'context',
    topPick: false,
  },
  {
    id: 'trust-model-structure',
    number: 15,
    title: 'Trust Model Structure Knowledge',
    principle: 'Don\'t enumerate output sections the model already knows: AC, subtasks, risks, implementation notes.',
    example: 'A Jira story prompt doesn\'t need "Please generate: 1. AC list 2. Implementation notes 3. Subtasks"',
    tag: 'output',
    topPick: false,
  },
  {
    id: 'dense-notation',
    number: 16,
    title: 'Use Dense Notation',
    principle: 'Key-value pairs and abbreviations beat verbose prose for structured data.',
    example: '"JWT TTL 15min, refresh 7d" not "JWT tokens expire in 15 minutes, refresh tokens in 7 days"',
    tag: 'context',
    topPick: false,
  },
  {
    id: 'one-line-dod',
    number: 17,
    title: 'One-Line Definition of Done',
    principle: 'Replace DoD checklists with a single line of non-obvious constraints only.',
    example: '"DoD: unit tests >80%, security review, p95 <200ms" — skip "code reviewed", "tests passing" etc.',
    tag: 'output',
    topPick: false,
  },
];

