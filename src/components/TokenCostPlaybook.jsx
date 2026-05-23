import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Zap, ArrowRight } from 'lucide-react';
import { bestPractices, improvementTips, tokenRules, promptExamples } from '../data/promptTemplates';
import './TokenCostPlaybook.css';

const TAG_LABELS = { context: 'Context', output: 'Output', workflow: 'Workflow', strategy: 'Strategy' };

export default function TokenCostPlaybook() {
  const [activeSection, setActiveSection] = useState('budget');

  useEffect(() => {
    const sections = document.querySelectorAll('.pb-section');
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id, e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const NavItem = ({ id, label }) => (
    <a
      className={`pb-nav-item${activeSection === id ? ' active' : ''}`}
      href={`#${id}`}
      onClick={e => scrollTo(id, e)}
    >
      {label}
    </a>
  );

  return (
    <div className="pb-view">
      {/* SIDE NAV */}
      <nav className="pb-sidenav">
        <div className="pb-nav-logo">
          Token Cost Playbook
          <span>Developer Edition · 2026</span>
        </div>

        <div className="pb-nav-section">Budget</div>
        <NavItem id="budget" label="Your allocation" />
        <NavItem id="how-tokens-add-up" label="How tokens add up" />

        <div className="pb-nav-section">Context & Cost</div>
        <NavItem id="conversation-history" label="Conversation history" />
        <NavItem id="code-tokens" label="Code token reality" />
        <NavItem id="compact" label="/compact explained" />

        <div className="pb-nav-section">Prompt Engineering</div>
        <NavItem id="prompt-best-practices" label="Best practices" />
        <NavItem id="dos-and-donts" label="Dos and don'ts" />

        <div className="pb-nav-section">Skills & KB</div>
        <NavItem id="kb-strategy" label="KB strategy" />
        <NavItem id="skills-for-code" label="Using skills for code" />

        <div className="pb-nav-section">Quick Reference</div>
        <NavItem id="daily-habits" label="Daily habits" />
        <NavItem id="cheatsheet" label="Cheat sheet" />

        <div className="pb-nav-section">Prompt Craft</div>
        <NavItem id="best-practices" label="Best practices" />
        <NavItem id="common-fixes" label="Common fixes" />
        <NavItem id="how-ai-works" label="How AI works" />

        <div className="pb-nav-section">Examples</div>
        <NavItem id="prompt-examples" label="Good vs bad prompts" />
        <NavItem id="key-takeaways" label="Key takeaways" />
      </nav>

      {/* MAIN CONTENT */}
      <main className="pb-main">

        {/* HERO */}
        <div className="pb-hero">
          <div className="pb-hero-eyebrow">Internal developer playbook · Confidential</div>
          <div className="pb-hero-title">Token cost<br /><em>done right</em></div>
          <div className="pb-hero-sub">
            How tokens accumulate, how conversation history silently inflates your bill, and exactly what to do about it — using the dev-impl-skill, your KB, and disciplined prompting to stay well inside budget.
          </div>
          <div className="pb-budget-strip">
            <div className="pb-budget-cell">
              <div className="pb-bc-label">Per day</div>
              <div className="pb-bc-val">$10 USD</div>
              <div className="pb-bc-sub">S$12.60 / day</div>
            </div>
            <div className="pb-budget-cell">
              <div className="pb-bc-label">Per month</div>
              <div className="pb-bc-val">$300 USD</div>
              <div className="pb-bc-sub">S$378 / 30 days</div>
            </div>
            <div className="pb-budget-cell">
              <div className="pb-bc-label">Per year</div>
              <div className="pb-bc-val">$4,536 SGD</div>
              <div className="pb-bc-sub">360 working days</div>
            </div>
            <div className="pb-budget-cell">
              <div className="pb-bc-label">Rate</div>
              <div className="pb-bc-val">1.26</div>
              <div className="pb-bc-sub">SGD / USD</div>
            </div>
          </div>
        </div>

        {/* 01 — BUDGET */}
        <section className="pb-section" id="budget">
          <div className="pb-section-num">01 / Budget</div>
          <div className="pb-section-title">What you are <em>actually</em> allocated</div>
          <p className="pb-lead">Your $10 USD/day budget translates directly into token allowances across the three models. The table below shows exactly how many calls you can make before hitting the ceiling — and the answer is far more generous than most developers assume.</p>

          <table className="pb-table">
            <thead>
              <tr>
                <th>Model</th><th>Input price</th><th>Output price</th>
                <th>Calls/day (typical)</th><th>Daily spend</th><th>Budget used</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Haiku 4.5</strong></td>
                <td className="pb-mono-cell">$1/MTok</td><td className="pb-mono-cell">$5/MTok</td>
                <td>~3,300 calls</td><td className="pb-mono-cell">~$0.18</td><td className="pb-mono-cell">1.8%</td>
              </tr>
              <tr>
                <td><strong>Sonnet 4.6</strong></td>
                <td className="pb-mono-cell">$3/MTok</td><td className="pb-mono-cell">$15/MTok</td>
                <td>~1,100 calls</td><td className="pb-mono-cell">~$0.54</td><td className="pb-mono-cell">5.4%</td>
              </tr>
              <tr>
                <td><strong>Opus 4.6</strong></td>
                <td className="pb-mono-cell">$5/MTok</td><td className="pb-mono-cell">$25/MTok</td>
                <td>~690 calls</td><td className="pb-mono-cell">~$0.90</td><td className="pb-mono-cell">9.0%</td>
              </tr>
            </tbody>
          </table>
          <p className="pb-p" style={{ fontSize: '0.72rem', color: 'var(--pb-ink3)', fontFamily: 'DM Mono, monospace' }}>
            Assumes clean sessions — ~1,500 tok input, ~500 tok output per call, 40 calls/day. See section 03 for long-session reality.
          </p>

          <div className="pb-callout tip">
            <span className="pb-callout-icon">💡</span>
            <p className="pb-p">The budget is <strong>not the constraint for clean, disciplined usage.</strong> A developer using Haiku all day for generation tasks and Sonnet for implementation will spend roughly S$0.23–S$1.36 depending on session hygiene. The budget only becomes tight when Opus is used in long, uncompacted sessions.</p>
          </div>
        </section>

        {/* 02 — HOW TOKENS ADD UP */}
        <section className="pb-section" id="how-tokens-add-up">
          <div className="pb-section-num">02 / Token accumulation</div>
          <div className="pb-section-title">How tokens <em>add up</em></div>
          <p className="pb-lead">A token is roughly 4 characters or ¾ of an English word. But the number you see reported as "input tokens" is never just your message — it is everything the model received in that call.</p>

          <div className="pb-h3">What goes into input tokens every call</div>
          <pre className="pb-code">{`Every API call sends ALL of this:\n\n`}<span className="pb-g">System prompt / skill instructions    ~200–500 tok
KB sections retrieved                 ~160–1,200 tok
Your current message                  ~100–600 tok</span>{`\n`}<span className="pb-r">Entire conversation history           ~0 to 67,000+ tok ← THE PROBLEM</span>{`
────────────────────────────────────────────────────
Total reported as "input_tokens"      Sum of everything above`}</pre>

          <div className="pb-h3">How history grows through a working day</div>
          <pre className="pb-code">{`9:00am  — Turn  1:   ~800 tok   (fresh start, clean)
10:00am — Turn  8:   ~6,000 tok  (history building)
11:30am — Turn 18:  ~18,000 tok  (steady accumulation)
1:00pm  — Turn 28:  ~35,000 tok  (expensive territory)
3:00pm  — Turn 38:  ~52,000 tok  (most calls cost this much)
5:30pm  — Turn 48:  `}<span className="pb-r">~67,000 tok  (what happened in your session today)</span>{`

`}<span className="pb-g">Cost of Turn 48 on Haiku:</span>{`
  Input:  67,000 ÷ 1,000,000 × $1.00 = $0.067
  Output:     70 ÷ 1,000,000 × $5.00 = $0.000
  `}<span className="pb-r">Total:  $0.067 for one message</span>{`

`}<span className="pb-g">What it SHOULD have cost (clean session):</span>{`
  Input:     800 ÷ 1,000,000 × $1.00 = $0.0008
  Output:    400 ÷ 1,000,000 × $5.00 = $0.002
  Total:  $0.0028 — 24× cheaper`}</pre>

          <div className="pb-callout danger">
            <span className="pb-callout-icon">⚠️</span>
            <p className="pb-p"><strong>The single most expensive mistake developers make:</strong> keeping one Claude Code session open all day without running <code>/compact</code>. The conversation history compounds silently with every turn. By afternoon a simple "explain this function" call can cost 60× more than it should — not because of the question, but because of the 47 previous turns being re-sent with it.</p>
          </div>
        </section>

        {/* 03 — CONVERSATION HISTORY */}
        <section className="pb-section" id="conversation-history">
          <div className="pb-section-num">03 / Conversation history</div>
          <div className="pb-section-title">The <em>silent</em> cost driver</div>
          <p className="pb-lead">Conversation history is not a feature of the model — it is a workaround for the model having no persistent memory. The platform replays your entire conversation on every call so the model can "remember" what was said. You pay for every replay.</p>

          <div className="pb-h3">Two scenarios, same 40 calls, very different bills</div>
          <div className="pb-card-grid">
            <div className="pb-card accent-teal">
              <div className="pb-card-title">✓ Clean sessions</div>
              <p className="pb-p">New session per task. History resets to zero. Average input per call: ~1,500 tok. 40 calls/day on Haiku: <strong>~$0.18/day</strong></p>
            </div>
            <div className="pb-card accent-red">
              <div className="pb-card-title">✗ One long session</div>
              <p className="pb-p">History grows all day. Average input per call: ~25,000 tok. Same 40 calls on Haiku: <strong>~$1.08/day</strong> — 6× more expensive.</p>
            </div>
          </div>

          <div className="pb-h3">On Sonnet and Opus the gap is even larger</div>
          <pre className="pb-code">{`Clean sessions vs one long session (40 calls/day):\n\nHaiku:   $0.18  vs  $1.08   —  6× difference\nSonnet:  $0.54  vs  $3.24   — `}<span className="pb-r"> 6× difference</span>{`\nOpus:    $0.90  vs  $5.40   — `}<span className="pb-r"> 6× difference, approaches daily budget</span></pre>

          <div className="pb-callout warn">
            <span className="pb-callout-icon">💡</span>
            <p className="pb-p"><strong>Rule of thumb:</strong> If you are in a session that has run more than 20 turns, your input token count is probably 10–20× higher than your actual message. Check with <code>/tokens</code> in Claude Code to see current context size before a call you expect to be expensive.</p>
          </div>
        </section>

        {/* 04 — CODE TOKEN REALITY */}
        <section className="pb-section" id="code-tokens">
          <div className="pb-section-num">04 / Code token reality</div>
          <div className="pb-section-title">Code costs more than <em>you think</em></div>
          <p className="pb-lead">Code tokenises less efficiently than English prose. The tokeniser was trained on natural language — technical identifiers, camelCase names, package paths, and SQL column names fragment into more tokens per character than plain sentences.</p>

          <div className="pb-h3">Why code is expensive</div>
          <pre className="pb-code"><span className="pb-g">English prose:</span>{`
  "The order service creates a new order record in the database"
  → ~13 tokens   (1 token per ~4.6 chars — efficient)\n\n`}<span className="pb-r">Java camelCase method name:</span>{`
  processFXEODFixingRequest
  → ~7 tokens   (1 token per ~3.6 chars — fragmented)\n\n`}<span className="pb-r">Spring package path:</span>{`
  com.dbs.itt.smile.smilemsdistribution.service.impl
  → ~14 tokens  (1 token per ~3.4 chars — every dot splits)\n\n`}<span className="pb-r">SQL column name:</span>{`
  EQ_EOD_MKT_PRICE
  → ~6 tokens   (underscore splits at every boundary)\n\n`}<span className="pb-r">Full class name paste (300 lines):</span>{`
  SynapseServiceImpl.java full file
  → ~2,400–3,600 tokens depending on content`}</pre>

          <div className="pb-h3">The file paste problem — quantified</div>
          <table className="pb-table">
            <thead>
              <tr><th>What you paste</th><th>Approx tokens</th><th>What you needed</th><th>Wasted tokens</th></tr>
            </thead>
            <tbody>
              <tr><td>Full 300-line Java file</td><td className="pb-mono-cell">~2,800 tok</td><td>One 20-line method</td><td className="pb-mono-cell" style={{ color: 'var(--pb-red)' }}>~2,600 tok</td></tr>
              <tr><td>Full 200-line service</td><td className="pb-mono-cell">~1,900 tok</td><td>Method signature only</td><td className="pb-mono-cell" style={{ color: 'var(--pb-red)' }}>~1,850 tok</td></tr>
              <tr><td>Full stack trace</td><td className="pb-mono-cell">~800 tok</td><td>Error message + line</td><td className="pb-mono-cell" style={{ color: 'var(--pb-red)' }}>~750 tok</td></tr>
              <tr><td>Full git diff</td><td className="pb-mono-cell">~3,200 tok</td><td>Filtered diff</td><td className="pb-mono-cell" style={{ color: 'var(--pb-red)' }}>~2,600 tok</td></tr>
              <tr><td>10-column DB schema</td><td className="pb-mono-cell">~120 tok</td><td>2 relevant columns</td><td className="pb-mono-cell" style={{ color: 'var(--pb-red)' }}>~96 tok</td></tr>
            </tbody>
          </table>

          <div className="pb-h3">How to cut code input tokens</div>
          <ul className="pb-rule-list">
            <li><span className="pb-rule-icon pb-ok">✓</span><span>Paste only the method or function — not the whole file. If you need context, add the method signature of the caller only.</span></li>
            <li><span className="pb-rule-icon pb-ok">✓</span><span>For errors: paste the error message and line number only. Not the full stack trace. The model does not need 40 frames to find the cause.</span></li>
            <li><span className="pb-rule-icon pb-ok">✓</span><span>For schemas: paste only the columns relevant to the task. "Here are the 3 fields involved" beats pasting the full 20-column table definition.</span></li>
            <li><span className="pb-rule-icon pb-ok">✓</span><span>For git diffs: pre-filter with <code>git diff -- '*.java' ':!*.lock'</code> before pasting. Removes generated files and whitespace noise.</span></li>
            <li><span className="pb-rule-icon pb-no">✗</span><span>Never paste the full file "for context." Reference it by KB file + section heading instead if it is in your KB.</span></li>
            <li><span className="pb-rule-icon pb-no">✗</span><span>Never paste the entire stack trace for a simple NullPointerException — the error line and the offending method are sufficient.</span></li>
          </ul>
        </section>

        {/* 05 — COMPACT */}
        <section className="pb-section" id="compact">
          <div className="pb-section-num">05 / /compact</div>
          <div className="pb-section-title">Your most powerful <em>cost tool</em></div>
          <p className="pb-lead"><code>/compact</code> is a Claude Code command that summarises your entire conversation history into a compressed version, then replaces the full history with that summary. The model retains the gist of what was discussed but the token count resets to near-zero.</p>

          <div className="pb-h3">What happens when you run /compact</div>
          <div className="pb-compact-visual">
            <div className="pb-cv-before">
              <div className="pb-cv-label">Before /compact</div>
              <div className="pb-cv-bar" style={{ width: '100%', background: 'var(--pb-red)', opacity: 0.7, height: 12 }}></div>
              <div className="pb-cv-bar" style={{ width: '100%', background: 'var(--pb-red)', opacity: 0.5, height: 10 }}></div>
              <div className="pb-cv-bar" style={{ width: '100%', background: 'var(--pb-red)', opacity: 0.4, height: 9 }}></div>
              <div className="pb-cv-bar" style={{ width: '95%', background: 'var(--pb-red)', opacity: 0.3, height: 8 }}></div>
              <div className="pb-cv-bar" style={{ width: '90%', background: 'var(--pb-red)', opacity: 0.25, height: 7 }}></div>
              <div className="pb-cv-total">History: <strong>~67,000 tok</strong><br />Each call re-sends all of this</div>
            </div>
            <div className="pb-cv-arrow">→</div>
            <div className="pb-cv-after">
              <div className="pb-cv-label">After /compact</div>
              <div className="pb-cv-bar" style={{ width: '20%', background: 'var(--pb-teal-m)', height: 12 }}></div>
              <div className="pb-cv-total">Summary: <strong>~3,000 tok</strong><br />Context preserved, cost reset</div>
            </div>
          </div>

          <div className="pb-h3">The maths of compacting</div>
          <pre className="pb-code"><span className="pb-d">-- YOUR SITUATION TODAY --</span>{`
Session history: ~67,000 tok

Cost to run /compact (one-time):
  Input:  67,000 tok × $1.00/MTok (Haiku) = $0.067
  Output:  3,000 tok × $5.00/MTok (Haiku) = $0.015
  One-time compaction cost:                  $0.082

Cost per call BEFORE /compact:  $0.067
Cost per call AFTER  /compact:  $0.0035

`}<span className="pb-g">Breakeven: 2 calls after compacting and you are already ahead
20 more calls after compacting:</span>{`
  Without: 20 × $0.067  = $1.34
  With:    20 × $0.0035 = $0.07
  Saving:                 $1.27 on Haiku alone`}</pre>

          <div className="pb-h3">When to run /compact</div>
          <ul className="pb-rule-list">
            <li><span className="pb-rule-icon pb-ok">✓</span><span>After a long planning or design discussion before switching to implementation</span></li>
            <li><span className="pb-rule-icon pb-ok">✓</span><span>Around every 20–25 turns as a proactive habit — do not wait until the session is bloated</span></li>
            <li><span className="pb-rule-icon pb-ok">✓</span><span>When you are about to start a new sub-task within the same session</span></li>
            <li><span className="pb-rule-icon pb-ok">✓</span><span>Before a call you expect to generate a long output — compact first to reduce the input side</span></li>
            <li><span className="pb-rule-icon pb-no">✗</span><span>Mid-debug when you need the model to reference the exact error message from 3 turns ago</span></li>
            <li><span className="pb-rule-icon pb-no">✗</span><span>When the precise wording of a previous output matters to the next call</span></li>
            <li><span className="pb-rule-icon pb-no">✗</span><span>At the very start of a session — nothing meaningful to compact yet</span></li>
          </ul>

          <div className="pb-callout tip">
            <span className="pb-callout-icon">💡</span>
            <p className="pb-p"><strong>Even better than /compact: new sessions per task.</strong> Starting a fresh session costs nothing and resets history to zero immediately. Use /compact for tasks that naturally run long. Use new sessions for distinct task switches — finish implementing feature A, close the session, open a new one for feature B.</p>
          </div>
        </section>

        {/* 06 — PROMPT BEST PRACTICES */}
        <section className="pb-section" id="prompt-best-practices">
          <div className="pb-section-num">06 / Prompt engineering</div>
          <div className="pb-section-title">Best practices that <em>cut cost</em></div>
          <p className="pb-lead">Good prompting is not just about getting better answers — it directly reduces input and output token counts. The techniques below consistently produce more accurate results at lower cost.</p>

          <div className="pb-h3">Output format pinning — the highest ROI technique</div>
          <p className="pb-p">Specifying the exact output format is the single most effective cost-reduction technique. Without a format constraint, models narrate, hedge, and wrap code in prose. With one, the output is dense and direct.</p>
          <pre className="pb-code"><span className="pb-r">❌ Open output — expensive:</span>{`
"Explain what is wrong and how to fix it with examples"
→ 400–800 tok output (prose explanation + example + summary)\n\n`}<span className="pb-g">✓ Pinned output — cheap:</span>{`
"Output: (1) root cause one sentence (2) fix code only (3) why two sentences"
→ 80–150 tok output`}</pre>

          <div className="pb-h3">Length constraints</div>
          <pre className="pb-code"><span className="pb-g">✓ Always add explicit caps:</span>{`
"Max 3 bullets"
"One sentence"
"Code only, no explanation"
"Max 150 words"
"Output JSON only — no prose"\n\n`}<span className="pb-d">These work reliably. The model respects them.
Without them the model defaults to verbose.</span></pre>

          <div className="pb-h3">Positive framing beats negative lists</div>
          <pre className="pb-code"><span className="pb-r">❌ Verbose negative framing (uses tokens to describe what NOT to do):</span>{`
"Do not include prose, do not add markdown headers,
do not summarise at the end, do not repeat the question"\n\n`}<span className="pb-g">✓ Positive framing (half the tokens, same result):</span>{`
"Output JSON array only"`}</pre>

          <div className="pb-h3">Role in system prompt — not in every message</div>
          <pre className="pb-code"><span className="pb-r">❌ Re-stating role in every message (+80–200 tokens each time):</span>{`
"You are a senior Java developer with expertise in Spring Boot.
Please review the following code..."\n\n`}<span className="pb-g">✓ Role stated once in SKILL.md system prompt:</span>{`
SKILL.md: "You are a senior Java developer. Be terse. Prefer code over prose."
Message:  "Review this method for transaction handling"`}</pre>

          <div className="pb-h3">Chain of thought — only when you need it</div>
          <pre className="pb-code">{`Chain-of-thought ("think step by step") costs 100–400 extra output tokens.
Invoke it ONLY for:
  - Multi-step reasoning problems
  - Mathematical calculations
  - Complex logic tracing\n\n`}<span className="pb-g">For most developer tasks, skip it:</span>{`
"Which regex matches email?" → just ask, no CoT needed
"Derive the regex step by step" → CoT only if you need to audit the reasoning`}</pre>
        </section>

        {/* 07 — DOS AND DON'TS */}
        <section className="pb-section" id="dos-and-donts">
          <div className="pb-section-num">07 / Rules</div>
          <div className="pb-section-title">Dos and <em>don'ts</em></div>

          <div className="pb-h4">Always do</div>
          <ul className="pb-rule-list">
            <li><span className="pb-rule-icon pb-ok">✓</span><span><strong>Start a new session per distinct task.</strong> Implementation of feature A and debugging of feature B are different tasks — different sessions.</span></li>
            <li><span className="pb-rule-icon pb-ok">✓</span><span><strong>Run /compact proactively at turn 20–25.</strong> Do not wait until the session is bloated. Compact before it becomes expensive.</span></li>
            <li><span className="pb-rule-icon pb-ok">✓</span><span><strong>Paste only the method, not the file.</strong> Extract the specific function, its signature, and its direct dependencies. Nothing else.</span></li>
            <li><span className="pb-rule-icon pb-ok">✓</span><span><strong>Reference KB by file AND section heading.</strong> <code>kb/style/kafka-conventions.md → '## Kafka conventions'</code> — not the file alone.</span></li>
            <li><span className="pb-rule-icon pb-ok">✓</span><span><strong>Append an output constraint to every prompt.</strong> "Code only", "JSON only", "max 3 bullets", "one sentence" — always.</span></li>
            <li><span className="pb-rule-icon pb-ok">✓</span><span><strong>Use Haiku for generation tasks, Sonnet for reasoning.</strong> Boilerplate, unit tests, formatting → Haiku. Implementation, debugging, explanation → Sonnet.</span></li>
            <li><span className="pb-rule-icon pb-ok">✓</span><span><strong>Try Sonnet before escalating to Opus.</strong> If Sonnet's answer is wrong, escalate to Opus with Sonnet's failed output as context — not a fresh explanation.</span></li>
          </ul>

          <div className="pb-h4">Never do</div>
          <ul className="pb-rule-list">
            <li><span className="pb-rule-icon pb-no">✗</span><span><strong>Never paste a full file for context.</strong> Reference the KB. If the code is not in the KB, paste the function only — not the surrounding 280 lines.</span></li>
            <li><span className="pb-rule-icon pb-no">✗</span><span><strong>Never paste a raw git diff.</strong> Pre-filter to source files only. Remove lock files, generated files, and whitespace-only changes before sending.</span></li>
            <li><span className="pb-rule-icon pb-no">✗</span><span><strong>Never paste a full stack trace.</strong> Paste the error message, the exception type, and the line number. The model does not need 40 stack frames.</span></li>
            <li><span className="pb-rule-icon pb-no">✗</span><span><strong>Never ask "review everything."</strong> Scope reviews to one dimension: style OR logic OR security. Separate calls, separate KB sections.</span></li>
            <li><span className="pb-rule-icon pb-no">✗</span><span><strong>Never re-describe the output format in every message.</strong> Put it in your SKILL.md once and reference it. Repetition wastes tokens every single call.</span></li>
            <li><span className="pb-rule-icon pb-no">✗</span><span><strong>Never use Opus as a first attempt.</strong> It is 5× more expensive than Haiku and 1.7× more than Sonnet. Start on the cheaper model and escalate only on failure.</span></li>
            <li><span className="pb-rule-icon pb-no">✗</span><span><strong>Never inject a directory listing for the model to "discover" files.</strong> That is the retrieval layer's job. Only inject retrieved content — not file paths.</span></li>
          </ul>
        </section>

        {/* 08 — KB STRATEGY */}
        <section className="pb-section" id="kb-strategy">
          <div className="pb-section-num">08 / Knowledge base</div>
          <div className="pb-section-title">KB strategy for <em>developers</em></div>
          <p className="pb-lead">Your knowledge base is the most powerful tool for keeping input tokens low. When information lives in the KB and is retrieved by section, the model reads 20–50 lines. When you paste the same information in the prompt, you pay full price every call.</p>

          <div className="pb-h3">What belongs in the KB</div>
          <div className="pb-card-grid">
            <div className="pb-card accent-teal">
              <div className="pb-card-title">Put in KB</div>
              <p className="pb-p">API contracts, data models, sequence flows, error handling rules, team coding standards, test patterns, JIRA story templates, ADRs</p>
            </div>
            <div className="pb-card accent-red">
              <div className="pb-card-title">Never put in KB</div>
              <p className="pb-p">Actual source code files (reference them, don't embed), credentials, per-task notes, outputs the model generates</p>
            </div>
          </div>

          <div className="pb-h3">The file and section referencing rule</div>
          <pre className="pb-code"><span className="pb-r">❌ File path only — model scans the whole file:</span>{`
"Refer to kb/style/springboot-layer-conventions.md"
→ model reads all 34 lines whether relevant or not\n\n`}<span className="pb-g">✓ File path AND section heading — model focuses:</span>{`
"Refer to '## Spring Boot 3.5 application layer conventions'
 in kb/style/springboot-layer-conventions.md"
→ model reads only that section`}</pre>

          <div className="pb-h3">Keep KB files under 100 lines</div>
          <p className="pb-p">Most retrieval systems return whole files when they match a query. A 400-line file means 400 lines injected even when 30 are relevant. A 60-line file means 60 lines injected — always. The style guide we built follows this: 15 separate files averaging 35 lines each, rather than one 575-line monolith.</p>

          <div className="pb-h3">Add an INDEX.md per domain</div>
          <pre className="pb-code">{`# Orders domain — navigation index

| Topic            | File                              | Section                      |
|------------------|-----------------------------------|------------------------------|
| API contracts    | tech-design/orders/api.md         | ## POST /orders API contract |
| Data model       | tech-design/orders/data-model.md  | ## Order data model          |
| Error handling   | tech-design/orders/errors.md      | ## Error states              |
| Kafka topic      | tech-design/orders/kafka.md       | ## Order creation event      |

`}<span className="pb-g">Retrieve this INDEX first. Then retrieve only the section you need.</span>{`
`}<span className="pb-d">Cost: ~80 tokens for the index · then ~160 tokens for one section
vs: ~2,400 tokens for the full design doc</span></pre>
        </section>

        {/* 09 — SKILLS FOR CODE */}
        <section className="pb-section" id="skills-for-code">
          <div className="pb-section-num">09 / Using skills</div>
          <div className="pb-section-title">The <em>dev-impl-skill</em> against your code</div>
          <p className="pb-lead">The dev-impl-skill installed at <code>.claude/skills/dev-impl-skill/</code> enforces the KB referencing discipline, model selection, and output constraints automatically — so you do not have to remember them on every call.</p>

          <div className="pb-h3">How the skill helps with code token cost</div>
          <ul className="pb-rule-list">
            <li><span className="pb-rule-icon pb-ok">✓</span><span><strong>Pre-selects the model for you.</strong> Boilerplate → Haiku. Implementation → Sonnet. Debug → Sonnet first, Opus on escalation. No manual switching needed.</span></li>
            <li><span className="pb-rule-icon pb-ok">✓</span><span><strong>Enforces KB section referencing.</strong> The prompt templates in the skill are built around <code>refer to '## Section' in file.md</code> — not file dumps.</span></li>
            <li><span className="pb-rule-icon pb-ok">✓</span><span><strong>Appends output constraints automatically.</strong> "Output the function only. No explanation, no prose." is in every implementation template.</span></li>
            <li><span className="pb-rule-icon pb-ok">✓</span><span><strong>The style folder is embedded.</strong> <code>style/java-naming-conventions.md</code> is 33 lines. Retrieved by section. Never 575 lines of a monolithic guide.</span></li>
            <li><span className="pb-rule-icon pb-ok">✓</span><span><strong>Escalation template includes Sonnet output.</strong> When you escalate to Opus, you paste Sonnet's failed answer — giving Opus richer context without re-explaining the problem.</span></li>
          </ul>

          <div className="pb-h3">Real example — your FX EOD fixing prompt</div>
          <pre className="pb-code"><span className="pb-d">-- WHAT YOU SENT (good prompt, ~500 tok) --</span>{`
"Enhance FX EOD Fixing Logic in processFXEODFixingRequest..."\n\n`}<span className="pb-r">-- WHAT THE SESSION ADDED INVISIBLY (~66,862 tok history) --</span>{`
Everything from this entire conversation since morning\n\n`}<span className="pb-g">-- WHAT IT SHOULD HAVE BEEN WITH THE SKILL --</span>{`
New session + skill invoked:
  System: dev-impl-skill loaded           ~400 tok
  KB:     refer to '## FX EOD data model' ~150 tok
  KB:     refer to '## Inversion logic'   ~120 tok
  Your implementation request:            ~500 tok
  ──────────────────────────────────────────────────
  Total input:                          ~1,170 tok
  Cost on Sonnet: $0.0035  vs  $0.20 in long session
  Saving: 57× cheaper for the same task`}</pre>

          <div className="pb-h3">Invoking the skill in Claude Code</div>
          <pre className="pb-code"><span className="pb-g">Option 1 — Automatic (preferred)</span>{`
Just describe the task naturally. Claude reads the description
from SKILL.md and loads it automatically:

  "implement the processFXEODFixingRequest method"
  → skill auto-invokes because description matches\n\n`}<span className="pb-g">Option 2 — Manual slash command</span>{`
  /dev-impl-skill\n\n`}<span className="pb-g">Option 3 — Check available skills</span>{`
  /    (shows all installed skills with autocomplete)`}</pre>

          <div className="pb-h3">Skill location options</div>
          <table className="pb-table">
            <thead>
              <tr><th>Location</th><th>Scope</th><th>Best for</th></tr>
            </thead>
            <tbody>
              <tr><td className="pb-mono-cell">~/.claude/skills/</td><td>All your projects</td><td>Personal workflows you use everywhere</td></tr>
              <tr><td className="pb-mono-cell">.claude/skills/ (in repo)</td><td>This project only</td><td>Team-shared, project-specific skills</td></tr>
            </tbody>
          </table>
        </section>

        {/* 10 — DAILY HABITS */}
        <section className="pb-section" id="daily-habits">
          <div className="pb-section-num">10 / Daily habits</div>
          <div className="pb-section-title">A <em>structured</em> working day</div>
          <p className="pb-lead">The biggest cost savings come from session discipline — not from individual prompt optimisation. Here is a pattern that keeps you well inside the $10/day budget regardless of how heavily you use the models.</p>

          <pre className="pb-code"><span className="pb-g">9:00am  — SESSION 1: Morning planning</span>{`
  Model:   Haiku
  Task:    Read JIRA stories, generate boilerplate, plan sprint
  Compact: Not needed — session is short
  End:     Close when planning is done. New session for coding.\n\n`}<span className="pb-g">10:00am — SESSION 2: Feature A implementation</span>{`
  Model:   Sonnet (implementation), Haiku (unit tests)
  Task:    Implement, write tests, refactor
  Compact: Run at turn ~20 if session runs long
  End:     Close when feature A is complete and committed.\n\n`}<span className="pb-g">1:00pm  — SESSION 3: Feature B or debugging</span>{`
  Model:   Sonnet (debug first), Opus only if Sonnet fails
  Task:    New feature or fix from morning's PR feedback
  Compact: Run before switching from debug to implementation
  End:     Close at natural task boundary.\n\n`}<span className="pb-g">3:30pm  — SESSION 4: Code review</span>{`
  Model:   Haiku (style), Sonnet (logic/security)
  Task:    Review PRs using code-review pipeline
  Compact: Usually not needed — review sessions are short
  End:     Close after reviews submitted.\n\n`}<span className="pb-g">5:00pm  — SESSION 5: Wrap-up (optional)</span>{`
  Model:   Haiku
  Task:    Retro notes, JIRA updates, closing tickets
  End:     End of day.\n\n`}<span className="pb-d">─────────────────────────────────────────────────────</span>{`
`}<span className="pb-g">Estimated daily spend:  ~S$1.20–S$2.50  (12–25% of daily budget)</span>{`
`}<span className="pb-d">Budget remaining:       ~S$10.10–S$11.40 unused</span></pre>
        </section>

        {/* 11 — CHEAT SHEET */}
        <section className="pb-section" id="cheatsheet">
          <div className="pb-section-num">11 / Quick reference</div>
          <div className="pb-section-title">The <em>cheat sheet</em></div>

          <div className="pb-h3">Model selector</div>
          <table className="pb-table">
            <thead>
              <tr><th>Task</th><th>Model</th><th>Why</th></tr>
            </thead>
            <tbody>
              <tr><td>Boilerplate, unit tests, formatting, publishing</td><td className="pb-mono-cell">Haiku</td><td>Templated — no reasoning needed</td></tr>
              <tr><td>Implementation, integration tests, explanation, refactoring</td><td className="pb-mono-cell">Sonnet</td><td>Reasoning against spec</td></tr>
              <tr><td>Debug first attempt</td><td className="pb-mono-cell">Sonnet</td><td>Try cheap first</td></tr>
              <tr><td>Debug escalation (Sonnet failed)</td><td className="pb-mono-cell">Opus</td><td>Add Sonnet output as context</td></tr>
              <tr><td>Architecture decision</td><td className="pb-mono-cell">Opus</td><td>Multi-dimensional trade-off</td></tr>
            </tbody>
          </table>

          <div className="pb-h3">Token cost per call (clean session)</div>
          <table className="pb-table">
            <thead>
              <tr><th>Task</th><th>Model</th><th>Input tok</th><th>Output tok</th><th>SGD/call</th></tr>
            </thead>
            <tbody>
              <tr><td>Boilerplate gen</td><td className="pb-mono-cell">Haiku</td><td className="pb-mono-cell">~600</td><td className="pb-mono-cell">~300</td><td className="pb-mono-cell">~S$0.003</td></tr>
              <tr><td>Unit test gen</td><td className="pb-mono-cell">Haiku</td><td className="pb-mono-cell">~800</td><td className="pb-mono-cell">~250</td><td className="pb-mono-cell">~S$0.003</td></tr>
              <tr><td>Implementation</td><td className="pb-mono-cell">Sonnet</td><td className="pb-mono-cell">~1,200</td><td className="pb-mono-cell">~500</td><td className="pb-mono-cell">~S$0.014</td></tr>
              <tr><td>Debug (Sonnet)</td><td className="pb-mono-cell">Sonnet</td><td className="pb-mono-cell">~900</td><td className="pb-mono-cell">~200</td><td className="pb-mono-cell">~S$0.009</td></tr>
              <tr><td>Debug (Opus escalation)</td><td className="pb-mono-cell">Opus</td><td className="pb-mono-cell">~1,400</td><td className="pb-mono-cell">~300</td><td className="pb-mono-cell">~S$0.019</td></tr>
              <tr><td>Code review Stage 1</td><td className="pb-mono-cell">Haiku</td><td className="pb-mono-cell">~1,640</td><td className="pb-mono-cell">~120</td><td className="pb-mono-cell">~S$0.004</td></tr>
              <tr><td>Code review Stage 2</td><td className="pb-mono-cell">Sonnet</td><td className="pb-mono-cell">~1,080</td><td className="pb-mono-cell">~200</td><td className="pb-mono-cell">~S$0.006</td></tr>
            </tbody>
          </table>

          <div className="pb-h3">When history bloats — cost per call reality</div>
          <div className="pb-progress-row"><div className="pb-progress-label">Fresh (turn 1) ~800 tok</div><div className="pb-progress-track"><div className="pb-progress-fill" style={{ width: '1%', background: 'var(--pb-teal-m)' }}></div></div><div className="pb-progress-val">$0.001</div></div>
          <div className="pb-progress-row"><div className="pb-progress-label">Turn 10 ~8,000 tok</div><div className="pb-progress-track"><div className="pb-progress-fill" style={{ width: '12%', background: 'var(--pb-teal-m)' }}></div></div><div className="pb-progress-val">$0.008</div></div>
          <div className="pb-progress-row"><div className="pb-progress-label">Turn 20 ~20,000 tok</div><div className="pb-progress-track"><div className="pb-progress-fill" style={{ width: '30%', background: 'var(--pb-amber)' }}></div></div><div className="pb-progress-val">$0.020</div></div>
          <div className="pb-progress-row"><div className="pb-progress-label">Turn 30 ~38,000 tok</div><div className="pb-progress-track"><div className="pb-progress-fill" style={{ width: '57%', background: 'var(--pb-amber)' }}></div></div><div className="pb-progress-val">$0.038</div></div>
          <div className="pb-progress-row"><div className="pb-progress-label">Turn 45 ~67,000 tok</div><div className="pb-progress-track"><div className="pb-progress-fill" style={{ width: '100%', background: 'var(--pb-red)' }}></div></div><div className="pb-progress-val">$0.067</div></div>
          <p className="pb-p" style={{ fontSize: '0.7rem', color: 'var(--pb-ink3)', fontFamily: 'DM Mono, monospace', marginTop: 4 }}>Per call on Haiku. Sonnet is 3× these values. Opus is 5×.</p>

          <div className="pb-h3">/compact in 10 seconds</div>
          <pre className="pb-code">{`Run it:      /compact
When:        Every ~20 turns, or before switching sub-tasks
One-time cost: ~$0.08 (Haiku) to compact a 67k-tok session
Saves:       ~$0.06 per call × every remaining call in session
Skip it if:  You are mid-debug and need exact prior messages`}</pre>

          <div className="pb-h3">The five rules that pay for themselves immediately</div>
          <ul className="pb-rule-list">
            <li><span className="pb-rule-icon pb-ok">1</span><span>New session per task — history never accumulates beyond the task</span></li>
            <li><span className="pb-rule-icon pb-ok">2</span><span>/compact at turn 20 — costs $0.08, saves $1+ on every long session</span></li>
            <li><span className="pb-rule-icon pb-ok">3</span><span>Paste the method, not the file — saves 2,600 tok on every code call</span></li>
            <li><span className="pb-rule-icon pb-ok">4</span><span>Append output format to every prompt — halves output token count</span></li>
            <li><span className="pb-rule-icon pb-ok">5</span><span>Reference KB by section heading — model reads 20 lines not 575</span></li>
          </ul>
        </section>

        {/* 12 — BEST PRACTICES */}
        <section className="pb-section" id="best-practices">
          <div className="pb-section-num">12 / Prompt craft</div>
          <div className="pb-section-title">Best practices for <em>prompting</em></div>
          <p className="pb-lead">What makes prompts effective — based on how AI agents actually process information. These apply across all AI tools, not just Claude.</p>

          <div className="team-rules-section">
            <div className="team-rules-header">
              <Zap size={20} />
              <h2>{tokenRules.length} Rules to Minimise Token Costs</h2>
            </div>
            <p className="team-rules-subtext">These rules apply across all AI tools. If you only enforce five, make it these:</p>
            <div className="quick-wins">
              {tokenRules.filter(r => r.topPick).map(r => (
                <div key={r.id} className="quick-win-rule">
                  <span className="quick-win-number">{r.number}</span>
                  <div>
                    <strong>{r.title}</strong>
                    <p>{r.principle}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rules-grid">
              {tokenRules.map(r => (
                <div key={r.id} className={`rule-card ${r.topPick ? 'rule-card--highlight' : ''}`}>
                  <div className="rule-card-top">
                    <span className="rule-card-number">{r.number}</span>
                    <span className={`rule-card-tag rule-card-tag--${r.tag}`}>{TAG_LABELS[r.tag]}</span>
                  </div>
                  <h3>{r.title}</h3>
                  <p className="rule-card-principle">{r.principle}</p>
                  {r.example && <p className="rule-card-example">{r.example}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="practices-grid" style={{ marginTop: '2rem' }}>
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
        </section>

        {/* 13 — COMMON FIXES */}
        <section className="pb-section" id="common-fixes">
          <div className="pb-section-num">13 / Common fixes</div>
          <div className="pb-section-title">Issues & <em>how to fix them</em></div>
          <p className="pb-lead">The most frequent prompting mistakes and the exact fix for each one.</p>
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
        </section>

        {/* 14 — HOW AI WORKS */}
        <section className="pb-section" id="how-ai-works">
          <div className="pb-section-num">14 / How AI works</div>
          <div className="pb-section-title">How AI agents <em>process prompts</em></div>
          <p className="pb-lead">Understanding what happens inside the model when it reads your prompt — so you can write with the pipeline in mind.</p>
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
          <div className="key-insight" style={{ marginTop: '1.5rem' }}>
            <p>
              <strong>Key Insight:</strong> The more specific and structured your prompt,
              the better AI can match its response to your exact needs. Think of prompting
              like giving instructions to a colleague — be clear, provide context, and
              specify what you need.
            </p>
          </div>
        </section>

        {/* 15 — EXAMPLES */}
        <section className="pb-section" id="prompt-examples">
          <div className="pb-section-num">15 / Examples</div>
          <div className="pb-section-title">Good vs bad <em>prompts</em></div>
          <p className="pb-lead">See how small changes make a big difference. Each example shows the exact wording, what's wrong, and why the improved version works.</p>
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
                      <ul>{example.bad.issues.map((issue, i) => <li key={i}>{issue}</li>)}</ul>
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
                      <ul>{example.good.whyGood.map((reason, i) => <li key={i}>{reason}</li>)}</ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 16 — KEY TAKEAWAYS */}
        <section className="pb-section" id="key-takeaways">
          <div className="pb-section-num">16 / Takeaways</div>
          <div className="pb-section-title">What to <em>remember</em></div>
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
        </section>

        <div className="pb-footer">
          Token Cost Playbook · Developer Edition · Generated May 2026 ·
          Budget: $10 USD/day · S$12.60/day · S$378/month · S$4,536/year ·
          Models: Haiku $1/$5 · Sonnet $3/$15 · Opus $5/$25 per MTok ·
          All costs are estimates — actual costs vary with session length and content
        </div>

      </main>
    </div>
  );
}
