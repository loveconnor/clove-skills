---
name: marketing
description: Research, define, execute, and measure evidence-based marketing strategy. Use for market diagnosis, segmentation, ideal customer profiles, positioning, competitive alternatives, messaging and proof, offers and pricing, go-to-market plans, launches, campaigns, channels, lifecycle marketing, brand strategy and measurement, marketing economics, attribution, incrementality, and substantiation of public claims.
---

# Marketing

## Operating principle

Build marketing from observed buying situations, customer evidence, operational truth, and explicit choices. Keep hypotheses separate from substantiated public claims, and measure delivery, attribution, incrementality, and business value separately.

## Load the detailed research

Read `references/research.md` for new positioning, ICP, messaging, GTM, campaign, lifecycle, brand, measurement, or claim-substantiation work.

Useful searches:

```sh
rg -n '^## (2|3|4)\.|evidence|market diagnosis|segment|ideal customer|ICP' references/research.md
rg -n '^## (5|6|7)\.|position|message|proof|offer|pricing|conversion' references/research.md
rg -n '^## (8|9|10)\.|go-to-market|campaign|channel|lifecycle' references/research.md
rg -n '^## (11|12|13|14)\.|brand|economic|experiment|incrementality|attribution|claim' references/research.md
rg -n '^## (15|16)\.|governance|specification|definition of done' references/research.md
```

## Workflow

### 1. Diagnose the market

Define the product and business constraint, category and alternatives, buying situations, demand signals, market change, competition, customer language, decision process, and evidence gaps. Separate observed evidence from hypotheses and internal preference.

### 2. Segment and define the ICP

Segment by meaningful differences in need, context, buying process, value, adoption requirements, and service cost. Define eligibility, fit, disqualifiers, reachable identifiers, buying committee, trigger, expected value, risks, and evidence. An ICP is a testable fit model, not a fictional persona.

When evidence is weak, define candidate segments and a learning plan instead of forcing a selection. Recruit across relevant roles, candidate segments, adoption states, and strong alternatives; record inclusion, exclusion, contradictory cases, and a stopping rule for the discovery round.

### 3. Choose positioning

State the target situation, competitive alternative, differentiated capability, customer value, category frame, proof, and deliberate exclusions. Test whether the position is relevant, distinct, credible, ownable, usable by sales and product, and supportable by delivery.

### 4. Build the message and proof architecture

Map audience stage and question to message, claim, evidence, qualification, CTA, and owner. Use customer language without copying unsupported beliefs. Keep product fact, customer evidence, comparison, forecast, and aspiration distinct.

### 5. Design GTM and campaigns

Choose objectives, segments, offer, channel role, journey, sales or partner motion, budget, capacity, dependencies, timing, and stop conditions. Write a campaign brief with one intended behavior, target population, creative proposition, distribution plan, measurement design, guardrails, and operational owner.

### 6. Design lifecycle communication

Tie onboarding, activation, adoption, retention, expansion, win-back, and service communication to a legitimate user need and product state. Respect consent, frequency, preference, suppression, accessibility, deliverability, cancellation, and support. Do not disguise promotion as a required service message.

### 7. Measure the right claim

Separate reach and delivery, response and attribution, conversion, incremental lift, unit economics, retention, and brand outcomes. Predefine metric, denominator, comparison, window, guardrails, and decision. Use experiments, geo tests, holdouts, or modeling only within their assumptions.

### 8. Govern evidence

Maintain a claim-evidence ledger with exact wording, audience, channel, source, date, scope, qualification, reviewer, and expiry. Obtain legal or regulatory review for comparative, testimonial, endorsement, environmental, health, financial, performance, or other regulated claims.

## Marketing rules

- Do not fabricate customers, quotes, outcomes, market size, rankings, awards, certifications, or confidence.
- Do not define an ICP only by firmographics when buying need and fit are unknown.
- Do not claim category leadership from internal preference or unaudited share estimates.
- Place material qualifications where the audience will notice and understand them.
- Treat testimonials and reviews as specific evidence with selection, incentive, typicality, and permission constraints.
- Do not equate platform attribution with incrementality.
- Include unsubscribe, suppression, accessibility, privacy, abuse, and brand-risk guardrails.
- Re-verify advertising law, platform rules, privacy requirements, and vendor measurement behavior.

## Handoff

Provide the diagnosis, defensible segment and ICP selection when evidence supports one, positioning, message and proof architecture, GTM or campaign brief, lifecycle rules, measurement plan, claim ledger, evidence gaps, risks, owners, and refresh triggers. When selection is not defensible, provide labeled candidate hypotheses, the evidence needed to choose, and a bounded learning plan. State explicitly which elements remain hypotheses.

Load adjacent skills only when the scope crosses them: `research` for multi-source evidence strategy, `clear-writing` for public language, `seo` for public discovery, `analytics` for instrumentation or causal measurement, and `security-privacy` for personal data, consent, or abuse risk.
