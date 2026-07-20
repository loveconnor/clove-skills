---
name: optimize-seo-aeo
description: Research, implement, audit, and measure search engine optimization and answer-engine optimization for public websites. Use for content strategy, query and intent mapping, answer-ready pages, technical crawl/index/render issues, metadata, internal linking, canonicals, sitemaps, structured data, entity clarity, AI crawler controls, Core Web Vitals, search migrations, local/ecommerce/publisher/B2B/docs visibility, or measuring search and generative-answer citations and outcomes.
---

# Optimize SEO and AEO

## Operating principle

Optimize for the user's task and qualified discovery. Establish eligibility first, then provide original value, clear answers, traceable evidence, technical consistency, and measurable outcomes. Treat AEO as an extension of sound search foundations, not a separate bag of tricks.

## Load the detailed research

Read `references/research.md` for any implementation, audit, strategy, crawler-policy change, structured-data decision, vertical-specific work, or measurement plan. Re-verify current vendor rules and standards because search and answer systems change.

Useful searches:

```sh
rg -n '^## (2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20)\.' references/research.md
rg -n '^## 21\.|^## 22\.|^## 23\.|^## 24\.' references/research.md
rg -n 'robots|noindex|canonical|sitemap|structured data|crawler|citation|prompt panel|Core Web Vitals' references/research.md
```

## Workflow

### 1. Connect discovery to an outcome

Define the audience, need, journey, proof requirement, desired action, business or public-service outcome, and success/failure measures.

### 2. Research real language and intent

Use queries, support logs, interviews, sales conversations, site search, forums, competitor gaps, and current result pages. Classify intent and map each important intent family to one appropriate page. Avoid keyword cannibalization and volume-only decisions.

### 3. Verify eligibility

Audit discovery, crawl, rendering, indexing, retrieval, snippet controls, and action paths. Resolve status codes, robots rules, noindex, canonicals, sitemaps, mobile parity, JavaScript rendering, WAF/CDN blocking, security, and availability before chasing rankings or citations.

### 4. Create information worth retrieving

Provide first-hand experience, proprietary data, useful tools, expert judgment, transparent comparisons, primary evidence, or meaningfully synthesized analysis. Satisfy the task completely but not maximally. Assign authorship and update ownership.

### 5. Make answers clear and safe to quote

Lead with the appropriate answer. Use descriptive headings. Keep answer, scope, units, date/version/jurisdiction, evidence, interpretation, uncertainty, and exceptions close together. Make steps executable with prerequisites, expected results, failure branches, verification, and escalation.

### 6. Implement on-page and architecture foundations

Use accurate unique titles and main headings, useful meta descriptions, stable readable URLs, semantic content, descriptive internal links, accessible media, and a navigable information architecture. Keep important pages crawlably linked and avoid orphaning.

### 7. Align machine-readable truth

Use the most specific relevant structured-data type for visible content. Validate deployed output. Keep HTML, schema, feeds, profiles, product facts, price, availability, organization, author, location, and checkout aligned.

### 8. Establish trust and entity clarity

Show real authors, reviewers, methods, update history, policies, contact routes, disclosures, and correction mechanisms as appropriate. Keep names, identifiers, relationships, and `sameAs` profiles consistent. Earn editorial references; do not manufacture proof.

### 9. Decide AI access deliberately

Separate search indexing, model training, and user-triggered retrieval policies. Verify current vendor documentation and bot identity before changing robots or WAF/CDN rules. Do not infer citation from crawler hits.

### 10. Measure and experiment

Track traditional search, answer-engine visibility, factual accuracy, referrals, conversions, and downstream value separately. Use a repeatable prompt panel across engine, time, locale, and context. Document changes, comparison periods, confounders, and second-order effects.

## Technical requirements

- Serve status codes that reflect reality; eliminate soft 404s.
- Keep canonicals consistent across HTML, redirects, internal links, sitemaps, alternates, and feeds.
- Include only canonical, indexable success URLs in sitemaps.
- Make essential content and metadata available in reliably rendered HTML.
- Maintain mobile content, metadata, structured-data, image, and link parity.
- Use stable URLs and crawlable descriptive navigation.
- Keep robots and noindex intent distinct; a blocked crawler may not see a noindex directive.
- Preserve international language/region signals accurately.
- Validate rich-result eligibility without promising appearance.
- Measure Core Web Vitals with field data where possible and diagnose with lab tools.

Current 75th-percentile performance targets to verify when used:

- LCP: `≤ 2.5 s`.
- INP: `≤ 200 ms`.
- CLS: `≤ 0.1`.

## Content and answer rules

- Write for humans first without hiding the answer.
- Make claims locally self-contained enough to quote safely.
- Distinguish fact, interpretation, estimate, opinion, and sponsored material.
- Use tables for explicit comparisons with disclosed criteria.
- State methods and limitations for research or data.
- Provide genuine provenance for reviews and testimonials.
- Use descriptive headings for real sections; do not manufacture FAQs.
- Keep content fresh when facts, prices, people, versions, rules, or availability change.
- Do not pad length, chase keyword density, split natural prose into robotic fragments, or publish low-value pages at scale.

## Do not treat these as foundations

- `llms.txt` as a replacement for sitemaps, robots, feeds, or quality.
- A universal “AEO schema.”
- Structured data as a ranking or citation guarantee.
- Arbitrary content chunk sizes.
- One manual AI query as a stable rank report.
- Crawler traffic as proof of citation or recommendation.
- Ranking, citation, or clicks as value without qualified outcomes.
- Automation as inherently good or bad; judge originality, usefulness, accuracy, and intent.

Report uncertainty. Search and generative-answer behavior is probabilistic, platform-specific, and time-sensitive.
