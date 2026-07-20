# Bundled Research Reference

This file contains the complete research source for this skill. Use this contents list and targeted searches to load only the sections required by the task.

## Contents

- Search visibility, answer-engine citations, technical foundations, content strategy, trust, measurement, and AI-era discovery
- Executive summary
- 1. SEO, AEO, and GEO: definitions and boundaries
- 2. The modern discovery pipeline
- 3. Start with business and user outcomes
- 4. Audience, query, and answer research
- 5. Content quality: create information worth retrieving
- 6. Making content answer-ready without making it robotic
- 7. Trust, E-E-A-T, authorship, and entity clarity
- 8. On-page SEO fundamentals
- 9. Information architecture and internal linking
- 10. Technical SEO: discovery, crawl, render, and index
- 11. Page experience and Core Web Vitals
- 12. Structured data, feeds, and machine-readable facts
- 13. Off-page discovery, editorial links, and brand reputation
- 14. Platform-specific search and AI crawler controls
- 15. AEO/GEO tactics: evidence tiers
- 16. The `llms.txt` question
- 17. Vertical strategies
- 18. Measurement: SEO and AEO need different scorecards
- 19. Experimentation and causality
- 20. AI-generated content, scaled content, and editorial responsibility
- 21. Page design templates
- 22. SEO/AEO audit checklist
- 23. Prioritized implementation roadmap
- 24. Common myths and corrections
- 25. Research limitations and uncertainty
- Sources and further reading
- Final principle

---

# SEO and AEO: A Detailed Research and Practice Guide

## Search visibility, answer-engine citations, technical foundations, content strategy, trust, measurement, and AI-era discovery

**Research date:** July 2026  
**Scope:** Traditional web search, rich results, featured answers, AI Overviews and AI Mode, Microsoft Copilot, ChatGPT Search, Perplexity, Claude web search, local search, ecommerce, and agentic discovery  
**Purpose:** Explain what sustainable SEO and answer engine optimization mean, how search and answer systems find and use web content, what practices are supported by evidence, what remains experimental, and how to build a measurable strategy around user value

---

## Executive summary

Search engine optimization (SEO) helps search systems **discover, crawl, index, understand, retrieve, and present** a website to people with relevant needs. Answer engine optimization (AEO) extends that work toward experiences that synthesize an answer—featured snippets, voice answers, AI summaries, conversational search, and generative assistants—and may cite, quote, mention, recommend, or act on a source.

The two disciplines are not separate technical universes. In July 2026, both Google and Bing explicitly state that their generative search experiences depend on their established search crawling, indexing, ranking, and quality foundations. Google describes AI features as using retrieval-augmented generation and query fan-out over the Search index. Bing says SEO fundamentals support eligibility for Bing results, Copilot, grounding, and citations. AEO therefore begins with sound SEO.

The most important conclusions are:

1. **Optimize for the user’s task, not a keyword string.** Understand the decision, problem, context, and next action behind a query.
2. **Eligibility comes before ranking or citation.** A page that cannot be discovered, crawled, rendered, indexed, or served with an eligible snippet cannot compete normally in search or many grounded AI experiences.
3. **Original value is the durable advantage.** First-hand experience, proprietary data, useful tools, clear analysis, expert judgment, and well-supported comparisons give systems—and people—a reason to choose the page over a generic summary.
4. **Answerability is a communication quality.** State important answers clearly, define scope, use descriptive headings, make evidence traceable, and distinguish fact from interpretation. Do not break prose into unnatural fragments for machines.
5. **Trust must be demonstrated.** Accurate claims, visible authorship, sources, methodology, update history, policies, contact information, and external corroboration help users evaluate a source. E-E-A-T is a useful quality lens, not a single score or direct “ranking factor” to manipulate.
6. **Structured data describes visible truth.** Valid schema can improve machine understanding and rich-result eligibility, but it does not guarantee a result, ranking, or AI citation. There is no special universal “AEO schema.”
7. **Entity clarity matters.** Keep names, identifiers, product facts, organization details, authors, locations, and relationships consistent across the site, feeds, profiles, and reputable external sources.
8. **Technical quality supports both users and retrieval.** Stable URLs, meaningful status codes, canonicals, sitemaps, internal links, mobile parity, rendered HTML, secure delivery, and good performance remove avoidable uncertainty.
9. **Control search, training, and user-triggered access separately.** Major AI companies expose different bot tokens for search indexing, model training, and user-requested retrieval. A single blanket rule may produce an unintended business result.
10. **Citations are not clicks.** Measure search impressions, clicks, conversions, AI citations, cited pages, referral visits, factual accuracy, and downstream outcomes separately.
11. **AEO measurement is probabilistic.** Answers change with engine, model, location, time, conversation context, and source freshness. Track a repeatable prompt panel and trends rather than treating one manual query as a rank report.
12. **Avoid AI-era folklore.** Google says it does not use `llms.txt`, requires no special AI markup, and does not require arbitrary content “chunking” for its generative Search features. Treat unsupported tactics as experiments, not foundations.
13. **Automation is not the problem; low-value scale is.** Publishing many pages—human- or AI-generated—primarily to manipulate rankings can violate spam policies. Editorial responsibility, accuracy, originality, and usefulness remain necessary.
14. **The real outcome is qualified discovery.** Ranking, citation, or mention has value only when it improves awareness, trust, leads, sales, subscriptions, support success, or another legitimate objective.

---

## 1. SEO, AEO, and GEO: definitions and boundaries

### Search engine optimization (SEO)

Google defines SEO as helping search engines understand content and helping users find a site and decide whether to visit it. In practice, SEO includes:

- audience and query research;
- content and information architecture;
- crawl and index management;
- on-page titles, headings, links, images, and metadata;
- structured data and vertical feeds;
- site performance and mobile experience;
- reputation, references, editorial links, and brand demand;
- measurement, experimentation, and maintenance.

SEO is not merely “ranking ten blue links.” Search results can contain images, videos, maps, product listings, knowledge panels, featured snippets, discussions, news, AI summaries, and other experiences.

### Answer engine optimization (AEO)

AEO is the practice of making reliable information easy for answer systems to retrieve, interpret, attribute, and present in response to a user’s question. It covers:

- concise factual answers and definitions;
- featured snippets and question-answer formats;
- local and product facts;
- grounded generative answers with citations;
- conversational follow-up queries;
- voice and multimodal answers;
- agent-readable actions and interfaces.

AEO should not mean writing robotic question-and-answer text everywhere. It means reducing ambiguity around the answer, evidence, entity, scope, date, and next action.

### Generative engine optimization (GEO)

GEO is commonly used for optimization aimed specifically at generative search systems. A 2024 KDD paper formalized the term and tested text-level methods for increasing source visibility in generated responses. In the market, AEO and GEO now overlap heavily.

This guide uses:

- **SEO** for the complete search-discovery discipline;
- **AEO** for answer-oriented retrieval, synthesis, and citation;
- **GEO** only when discussing generative-engine-specific research or terminology.

Google’s current position is that AEO/GEO for Google Search is still SEO. That does not mean every answer system behaves identically; it means a separate set of magical fundamentals is not required.

### What neither discipline can promise

No implementation can guarantee:

- indexing;
- a particular rank;
- a featured snippet;
- inclusion in an AI answer;
- a citation or favorable mention;
- a click after citation;
- stable presentation over time.

Search and answer systems make query-specific selections from many sources. Honest optimization improves eligibility, clarity, relevance, and evidence—not certainty.

---

## 2. The modern discovery pipeline

It is useful to separate the stages because each has different failure modes and measurements.

```text
Audience need
    ↓
Query or conversational prompt
    ↓
Discovery → Crawl → Render → Index
    ↓
Retrieval and ranking
    ↓
Answer synthesis / result composition
    ↓
Citation, mention, listing, or link
    ↓
Visit, action, conversion, or no click
    ↓
Satisfaction, retention, revenue, or task success
```

### 2.1 Discovery

A crawler learns that a URL exists through:

- crawlable links;
- XML sitemaps;
- previously known URLs;
- redirects;
- feeds and platform submissions;
- external links;
- protocols such as IndexNow for participating engines.

A URL in a sitemap is a discovery signal, not a promise to crawl or index it.

### 2.2 Crawling

The system requests the URL subject to robots rules, crawl demand, site health, rate limits, authentication, WAF behavior, and resource constraints. A bot name in a user-agent header can be spoofed; where platforms publish IP verification methods, use both identity and network verification for sensitive allow rules.

### 2.3 Rendering

The initial HTML may already contain the main content, or a renderer may need to execute JavaScript. Google can render JavaScript, but rendering creates more complexity and delay, and not all bots execute it. Server rendering or static HTML for essential content usually improves resilience for users and crawlers.

### 2.4 Indexing

The system interprets page text, media, links, structured data, language, canonical signals, and duplicate relationships. Crawled does not mean indexed. Indexed does not mean ranked. Ranked does not mean cited.

### 2.5 Retrieval and ranking

The system identifies sources relevant to the request. Traditional ranking may combine query meaning, content relevance, quality, freshness, usability, location, and many other signals. Generative systems can expand one prompt into several retrieval queries.

Google calls this **query fan-out**: a model issues multiple related searches to cover subquestions or perspectives. A page may therefore be selected for a specific supporting subquery even when it is not the obvious result for the user’s original wording.

### 2.6 Synthesis and citation

An answer system may use retrieved passages to construct a response and show a link or citation. Selection and use are distinct:

- the source may be retrieved but not cited;
- it may be cited but contribute little language to the answer;
- it may support one claim among many;
- a cited result may receive no visit;
- a brand may be mentioned without a citation;
- the answer may satisfy the user without any outbound click.

### 2.7 Action

The user may visit, compare, subscribe, contact, purchase, navigate locally, or ask another question. Some agentic systems can interact with forms or complete tasks. The business strategy must connect visibility to these outcomes.

---

## 3. Start with business and user outcomes

SEO programs become wasteful when “more traffic” is the only goal. Define what useful discovery means.

### 3.1 Establish the objective

Examples:

- qualified ecommerce revenue;
- demo requests from target accounts;
- local bookings or calls;
- subscription growth;
- adoption of a public API;
- support deflection without reducing satisfaction;
- awareness and correct understanding of a new category;
- citation of original research;
- recruitment for specific roles;
- public-service task completion.

A page can receive high-volume informational traffic and create no value. A low-volume page answering a complex purchase question may drive strong revenue.

### 3.2 Define the audience and situation

Document:

- who is searching;
- what they already know;
- what triggered the need;
- what decision or task they face;
- constraints such as budget, risk, location, time, or skill;
- what proof they require;
- what would prevent action;
- what they should do next.

This turns an abstract keyword into a product and communication problem.

### 3.3 Map the journey

| Stage | Typical need | Useful content |
|---|---|---|
| Problem recognition | “Why is this happening?” | Diagnosis, definitions, symptoms, benchmarks |
| Exploration | “What approaches exist?” | Guides, category explanations, frameworks |
| Comparison | “Which is right for me?” | Comparison tables, alternatives, decision criteria |
| Validation | “Can I trust this?” | Methodology, case studies, reviews, security, policies |
| Action | “How do I start or buy?” | Product/service pages, pricing, availability, booking |
| Implementation | “How do I use it?” | Documentation, tutorials, examples, troubleshooting |
| Retention | “How do I improve or fix it?” | Support, updates, advanced workflows, community answers |

AI answer systems frequently compress several stages into one conversation. A person may ask a broad question, narrow constraints, compare options, and request an action without starting a new session. Build content and internal links that support the whole reasoning path.

---

## 4. Audience, query, and answer research

### 4.1 Study language from real people

Useful sources include:

- Search Console queries and landing pages;
- internal site search;
- sales calls and objections;
- support tickets and chat transcripts;
- product reviews and returns;
- community discussions;
- interviews and usability studies;
- competitor result pages;
- Google Trends and seasonal data;
- Bing Webmaster grounding queries;
- AI answer citations across a controlled prompt set.

Protect privacy and avoid copying private or user-generated material without appropriate permission.

### 4.2 Classify intent

A simple intent model:

- **Informational:** learn a fact or concept.
- **Procedural:** complete a task or fix a problem.
- **Navigational:** reach a known site, brand, or page.
- **Commercial investigation:** compare solutions before choosing.
- **Transactional:** buy, book, download, subscribe, or apply.
- **Local:** find something relevant to a place or current location.
- **Freshness-sensitive:** get current prices, availability, news, rules, or status.
- **Verification:** confirm a claim, reputation, safety, or authenticity.

One phrase can have mixed intent. Inspect the current result page and talk to users rather than assigning intent from grammar alone.

### 4.3 Move from keywords to topic and task coverage

A useful research model has four levels:

1. **Entity:** the person, product, organization, place, or concept.
2. **Task:** what the person is trying to decide or accomplish.
3. **Attributes:** price, size, compatibility, evidence, location, risk, timing, and other facets.
4. **Questions:** the actual query formulations and follow-ups.

For “choose a home heat pump,” topic coverage might include climate, home size, existing ducts, operating cost, rebates, noise, installation, maintenance, brands, and contractor selection. Do not force everything onto one enormous page. Assign each intent to the most useful page type and connect them.

### 4.4 Build a query–page map

For each important intent, record:

| Field | Purpose |
|---|---|
| Primary task | The outcome the user wants |
| Query family | Representative phrasings, not every variation |
| Audience/context | Skill, industry, location, constraints |
| Best page type | Guide, product, category, calculator, documentation, etc. |
| Existing URL | Current owner of the intent |
| Search result features | Video, local pack, product, snippet, AI answer, forum |
| Required evidence | Data, expertise, firsthand test, citations, examples |
| Conversion/action | Useful next step |
| Gap | Create, consolidate, update, or leave alone |

This prevents several pages from accidentally competing for the same task and reveals gaps where a new page would provide real value.

### 4.5 Research answer-engine behavior carefully

Create a representative prompt panel rather than asking only brand-favorable prompts. Include:

- broad category questions;
- specific long-tail problems;
- comparisons and alternatives;
- “best for” constraints;
- objections and risk questions;
- factual brand questions;
- local and current-information prompts;
- follow-up questions that alter context.

Record which sources are cited, what claims are made, whether the answer is correct, and whether the engine searched. Do not confuse a model’s pretrained recollection with live retrieval.

---

## 5. Content quality: create information worth retrieving

### 5.1 Unique value beats commodity summaries

Google’s 2026 generative-search guidance explicitly recommends valuable, non-commodity content and warns against merely recycling what the web or a generative model can already summarize. Valuable content may include:

- original research or datasets;
- first-hand product testing;
- expert analysis with disclosed qualifications;
- a useful calculator, template, or interactive tool;
- primary documentation;
- detailed implementation examples;
- a clear synthesis of fragmented primary sources;
- a case study with method, limitations, and results;
- current inventory, pricing, policies, or local facts;
- a defensible point of view;
- high-quality images, diagrams, or video created for the subject.

The useful question is: **What would disappear from the web if this page did not exist?** If the answer is “nothing; ten pages say the same thing,” the page needs more original value.

### 5.2 Satisfy the task completely, not maximally

Comprehensive does not mean longest. Include what a reasonable user needs to understand or act, then stop. A focused 700-word troubleshooting page may outperform a 5,000-word “ultimate guide” that delays the fix.

Match depth to:

- consequence of a wrong decision;
- audience expertise;
- task complexity;
- freshness requirements;
- evidence availability;
- likely follow-up questions.

### 5.3 Put primary evidence close to claims

For consequential claims:

- link to the original standard, dataset, paper, regulator, or vendor documentation;
- state the date and applicable jurisdiction/version;
- explain the method behind internal data;
- distinguish measured result from inference;
- quote sparingly and accurately;
- disclose uncertainty and limitations;
- update or retract changed claims.

Evidence makes a page more useful to people and creates traceable material for citation. Do not add decorative references that do not support the sentence.

### 5.4 Show experience rather than asserting expertise

Evidence of experience can include:

- original photographs;
- test setup and raw observations;
- before/after measurements;
- code or configuration used;
- decision logs;
- edge cases discovered;
- tradeoffs and failed approaches;
- author role and relevant background.

“Our experts tested this” is weaker than a reproducible description of what was tested and how.

### 5.5 Maintain factual freshness

Time-sensitive content should show:

- a meaningful publication or last-updated date;
- the version, time period, or policy date covered;
- the source of current values;
- an update owner and review cadence;
- changed sections when useful.

Do not change a date without materially reviewing the content. False freshness damages trust.

### 5.6 Design for human comprehension

Use:

- descriptive headings;
- short, coherent paragraphs;
- lists for true sets or steps;
- tables for repeated comparisons;
- diagrams for relationships or flows;
- examples next to abstract guidance;
- captions and transcripts for media;
- plain language appropriate to the audience;
- sufficient contrast, readable typography, and accessible interaction.

Good AEO is usually good information design.

---

## 6. Making content answer-ready without making it robotic

### 6.1 Lead with the answer appropriate to the question

For a definitional query:

> **Answer engine optimization (AEO)** is the practice of making content easy for search and AI systems to retrieve, understand, and cite when responding directly to a user’s question.

Then add nuance, scope, examples, and limitations. Do not force every article into an inverted-pyramid formula; narratives, research, and complex analysis may need context before conclusions.

### 6.2 Use descriptive, question-resolving headings

Weak:

```text
More information
Other things
Conclusion
```

Stronger:

```text
How canonical URLs affect indexing
When should a product page use noindex?
SEO and AEO measurement differences
```

Headings help users scan and give retrieval systems meaningful passage context. They should reflect the actual section, not stuff every synonym.

### 6.3 Keep answer, scope, and evidence together

A quotable fact should not depend on a definition 2,000 words earlier. Include enough local context:

> For mobile visits at the 75th percentile, target an LCP of 2.5 seconds or less. LCP measures loading performance, not total page completion.

The unit, population, threshold, and meaning travel with the claim.

### 6.4 Use tables for explicit comparisons

Comparison tables are useful when columns share exact fields such as price basis, supported platforms, contract term, or measurement date. Define the method and avoid scoring competitors with undisclosed criteria.

### 6.5 Make steps executable

Good procedural content includes:

- prerequisites;
- required access or tools;
- ordered steps;
- code or screenshots where useful;
- expected result;
- common failure modes;
- verification;
- reversal or cleanup.

An answer engine can summarize steps, but the source earns trust by making them accurate and verifiable.

### 6.6 State boundaries and exceptions

Use phrases such as:

- “This applies to…”
- “This does not control…”
- “As of July 2026…”
- “For Google Search; other engines may differ…”
- “This is an observed correlation, not a published ranking signal…”

Clear boundaries reduce misquotation and help both people and systems use the answer correctly.

### 6.7 Do not manufacture FAQs

An FAQ is useful when users repeatedly ask distinct questions. Do not add dozens of keyword-variant questions that repeat the article. Google does not require FAQ formatting for AI Search, and FAQ rich results have been restricted for years to limited authoritative use cases. Use the structure only when it improves the page.

### 6.8 “Chunking” is not a universal ranking requirement

Retrieval systems work with passages, but that does not mean publishers should split every thought into tiny fragments or separate URLs. Google explicitly says it has no generative-search requirement to chunk content. Organize around human-readable concepts and coherent tasks.

---

## 7. Trust, E-E-A-T, authorship, and entity clarity

### 7.1 Understand E-E-A-T correctly

Experience, expertise, authoritativeness, and trustworthiness are concepts in Google’s quality guidance. Search raters use guidelines to evaluate whether systems are producing good results; raters do not directly rank individual pages, and E-E-A-T is not a single publicly measurable score.

Treat it as a quality audit:

- Is it clear who is responsible?
- Do they have appropriate experience or expertise?
- Are important claims supported?
- Is the site honest about commercial incentives?
- Can users contact the organization?
- Are policies, corrections, and dates visible?
- Is the content safe for its risk level?

Trust is especially important for topics that can affect health, finances, safety, legal status, or major life decisions.

### 7.2 Create useful author and organization information

Depending on context, include:

- full author or editorial team name;
- relevant role, experience, and credentials;
- links to other work or professional identity;
- reviewer or fact-checker for high-risk topics;
- editorial and corrections policies;
- ownership, funding, affiliate, or sponsorship disclosures;
- organization address and contact methods where appropriate;
- privacy, return, shipping, security, and support policies.

Do not invent authors, inflate credentials, or create biography pages only to manipulate perceived authority.

### 7.3 Build an unambiguous entity

Use consistent official naming and facts across:

- the website;
- Organization, Person, Product, and LocalBusiness structured data;
- merchant and business profiles;
- social/professional profiles;
- app stores and software repositories;
- reputable industry directories;
- press and primary-source references.

Use stable identifiers and `sameAs` links only for true identity relationships. Consistency helps systems distinguish similarly named entities, but markup cannot override conflicting real-world evidence.

### 7.4 Reputation is earned externally

Relevant editorial links, independent reviews, citations, standards participation, public research, community contribution, and genuine customer discussion can establish reputation. Purchased links, fake reviews, planted forum mentions, and mass-produced digital PR create risk and weak evidence.

Google’s current AI-search guidance specifically warns against seeking inauthentic mentions.

---

## 8. On-page SEO fundamentals

### 8.1 Title element

A useful title is:

- unique to the page;
- accurate;
- concise enough to scan;
- specific about the topic or task;
- naturally aligned with audience language;
- differentiated when many site pages are similar;
- optionally branded where useful.

```html
<title>Canonical URLs: Methods, Signals, and Common Mistakes | Example</title>
```

Google may generate a different title link from the title element, headings, or other page text. The goal is accurate communication, not a guaranteed string.

Avoid:

- repeated boilerplate before the distinctive phrase;
- keyword lists;
- inaccurate dates;
- the same title on many pages;
- sensational promises the page does not fulfill.

### 8.2 Main heading and heading hierarchy

The visible H1 should identify the page clearly. Subheadings should express section logic. HTML heading levels help communicate structure, but do not contort the page to achieve a mechanically perfect outline at the expense of usability.

### 8.3 Meta description

The meta description can provide a useful page-specific summary, but search engines may select a snippet from visible text when it better matches the query.

```html
<meta
  name="description"
  content="Learn how redirects, rel=canonical, sitemaps, and internal links influence canonical selection—and how to diagnose conflicting signals."
>
```

Write for relevance and decision support, not keyword density. A description is not a direct ranking promise.

### 8.4 URL

Prefer stable, readable, crawlable URLs:

```text
https://example.com/guides/canonical-urls
```

Avoid encoding application state in URL fragments, uncontrolled tracking parameters, meaningless IDs when a stable readable path is possible, and frequent URL changes for cosmetic reasons. URL words are a minor clarity aid, not a reason to rebuild a working site.

### 8.5 Main content

Use the terms people and experts use, including necessary synonyms and definitions. Google says its language systems understand related meaning; exact-match repetition is unnecessary. Cover the task naturally.

### 8.6 Images and media

- Use original, high-quality media when it adds information.
- Place it near relevant text.
- Provide useful `alt` text for informative images.
- Use empty alt text for decorative images.
- Add captions when context or attribution matters.
- Provide transcripts for meaningful audio/video.
- Specify dimensions to reduce layout shift.
- compress and serve responsive formats.
- create dedicated video pages when video is the primary content.

Do not use alt text as an invisible keyword field.

### 8.7 Links

Links should use descriptive anchor text and be crawlable `<a href>` elements. Link when the destination helps the user continue the task or verifies a claim.

Qualify links appropriately:

- `rel="sponsored"` for paid or compensated links;
- `rel="ugc"` for untrusted user-generated links;
- `rel="nofollow"` where other qualification is appropriate.

Do not hide, buy, exchange, or automate links to manipulate ranking.

---

## 9. Information architecture and internal linking

### 9.1 Give every important page a role

An intentional site might contain:

- home and primary category pages;
- product or service detail pages;
- use-case and audience pages;
- learning hubs and guides;
- documentation and support;
- comparison and alternative pages;
- original research and tools;
- author, organization, policy, and contact pages.

Avoid creating a page for every keyword permutation. One strong page can serve a family of closely related queries.

### 9.2 Design around user paths

A good internal link answers “what will this person need next?” Examples:

- definition → implementation guide;
- category → product detail;
- product → compatibility and returns;
- comparison → methodology and purchase;
- error message → troubleshooting step;
- research finding → dataset and methods.

### 9.3 Control depth and orphaning

Important pages should be reachable through ordinary navigation or contextual links. Sitemaps do not repair an incoherent architecture. Find and resolve orphan pages that matter; remove or noindex low-value pages that should not compete.

### 9.4 Consolidate cannibalized intent

If several pages target the same task and none performs well:

1. identify which URL best serves the intent;
2. combine unique useful material;
3. redirect obsolete pages where the replacement is equivalent;
4. update internal links and sitemap entries;
5. preserve genuinely distinct audience or task pages;
6. monitor canonicalization and traffic.

Do not redirect every removed page to the homepage; use a relevant equivalent or return an honest `404`/`410`.

### 9.5 Faceted navigation and filters

Ecommerce and directory filters can create near-infinite combinations. Decide which filtered states deserve stable, indexable URLs based on actual demand and unique value. Control the rest through application design, canonical signals, crawl rules, or noindex as appropriate. Test carefully; blocking crawling can prevent engines from seeing a page-level noindex.

---

## 10. Technical SEO: discovery, crawl, render, and index

### 10.1 HTTP status codes

- `200`: successful content.
- `301`/`308`: permanent redirect when a resource has moved.
- `302`/`307`: temporary redirect.
- `404`: not found.
- `410`: intentionally gone.
- `401`/`403`: authentication or permission restrictions.
- `429`: rate limited; include appropriate retry information.
- `5xx`: server failure.

Do not return `200` with an error page for a missing resource; this creates a soft 404. Use stable redirect chains and avoid loops.

### 10.2 Robots.txt

The Robots Exclusion Protocol is standardized in RFC 9309. It controls crawler access; it is not access security and does not reliably remove a known URL from an index.

```text
User-agent: *
Disallow: /account/
Disallow: /checkout/

Sitemap: https://www.example.com/sitemap.xml
```

Private content requires authentication. Do not expose secrets and expect robots.txt to protect them.

### 10.3 Noindex and snippet controls

Use a robots meta tag or `X-Robots-Tag` response header for page/file-level indexing and presentation rules:

```html
<meta name="robots" content="noindex, follow">
```

```http
X-Robots-Tag: noindex
```

For Google, `nosnippet`, `max-snippet`, and `data-nosnippet` can control how much content is shown. Google says `nosnippet` also prevents content from being used as a direct input to AI Overviews and AI Mode, subject to separately granted uses. A crawler must be allowed to fetch a page to see its meta rule.

### 10.4 Canonicalization

Canonicalization consolidates duplicate or near-duplicate URLs. For Google, redirects and `rel="canonical"` are strong signals; sitemap inclusion is weaker. Signals should agree.

```html
<link rel="canonical" href="https://www.example.com/guides/seo-aeo">
```

Best practices:

- use absolute URLs;
- self-canonicalize indexable primary pages;
- link internally to the canonical form;
- include canonical URLs in sitemaps;
- do not canonicalize unrelated pages;
- do not use robots.txt as a canonical tool;
- verify what the engine selected, not only what was declared.

### 10.5 XML sitemaps

Include canonical, indexable URLs that return success. Use accurate `<lastmod>` values based on meaningful updates. The protocol allows up to 50,000 URLs or 50 MB uncompressed per sitemap; use sitemap index files beyond that.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.example.com/guides/seo-aeo</loc>
    <lastmod>2026-07-19</lastmod>
  </url>
</urlset>
```

Remove redirected, missing, duplicate, noindex, and noncanonical URLs. Monitor processing in Search Console and Bing Webmaster Tools.

### 10.6 IndexNow

IndexNow lets participating search engines know that URLs were added, changed, or deleted. It accelerates notification, not guaranteed indexing. It complements rather than replaces crawlable links and sitemaps. Google does not generally participate in IndexNow.

### 10.7 JavaScript

Essential content, metadata, canonical signals, and links should be available reliably. Google can render JavaScript, but not all answer-engine crawlers have equivalent behavior.

Prefer:

- server-rendered or statically generated primary content;
- meaningful initial HTML;
- real links with `href`;
- meaningful status codes from the server;
- content parity between rendered and source representations;
- tested metadata after hydration;
- progressive enhancement.

Avoid loading essential content only after a click, scroll gesture, or logged-in API call. Test using URL inspection, rendered HTML, crawler logs, and a browser with JavaScript disabled where appropriate.

### 10.8 Mobile-first parity

Google uses the mobile version for indexing and ranking. Ensure mobile has the same essential content, structured data, metadata, alt text, and meaningful internal links. Responsive design is usually easiest to maintain.

### 10.9 Internationalization

For translated or regional versions:

- use distinct, stable URLs;
- provide genuinely localized content;
- use reciprocal `hreflang` annotations;
- include an `x-default` where useful;
- canonicalize within the same language/region family appropriately;
- avoid automatic IP/language redirects that prevent access;
- let users change locale;
- maintain equivalent quality across locales.

Translation at scale without review can create inaccurate, low-value pages.

### 10.10 Security and availability

Use HTTPS, fix malware and hacked content promptly, keep software updated, and protect user data. WAF and bot controls should not accidentally block legitimate crawlers. Monitor DNS, TLS, uptime, response latency, and `5xx` patterns.

---

## 11. Page experience and Core Web Vitals

Google recommends an overall good page experience rather than optimizing one metric in isolation. The current Core Web Vitals are:

| Metric | Meaning | “Good” threshold at the 75th percentile |
|---|---|---|
| LCP | Loading performance of the largest content element | ≤ 2.5 seconds |
| INP | Responsiveness across user interactions | ≤ 200 milliseconds |
| CLS | Visual stability | ≤ 0.1 |

Measure separately for mobile and desktop and prioritize field data. Lab tools help diagnose and prevent regressions but cannot reproduce every user environment; Lighthouse cannot directly measure field INP without real interaction and uses proxies such as Total Blocking Time.

### Practical performance priorities

- optimize server response and caching;
- deliver the main content early;
- size and prioritize the LCP image;
- reduce render-blocking resources;
- break up long main-thread tasks;
- limit third-party scripts;
- reserve image, ad, and embed space;
- lazy-load below-the-fold media, not the primary answer;
- use responsive images and efficient formats;
- monitor real-user segments, not only a homepage lab score.

Performance supports users, crawling efficiency, conversion, and resilience. It is not a substitute for relevance or quality.

### Broader experience checks

- mobile usability;
- accessible navigation and form labels;
- no intrusive interstitial blocking the main task;
- secure browsing;
- readable text and sufficient contrast;
- predictable layout;
- clear advertising and sponsorship;
- fast recovery from errors;
- accessible alternatives for media.

---

## 12. Structured data, feeds, and machine-readable facts

### 12.1 What structured data does

Schema.org provides a shared vocabulary for entities and properties. Google supports JSON-LD, Microdata, and RDFa for Search features and recommends JSON-LD in many contexts.

Structured data can:

- make page meaning more explicit;
- connect properties to an entity;
- enable eligibility for supported rich results;
- help reconcile organization, product, article, event, video, and breadcrumb details.

It does not:

- guarantee a rich result;
- guarantee ranking or citation;
- repair weak or inaccessible content;
- permit claims not visible on the page;
- make a fake review genuine;
- create authority by declaration;
- act as a universal AEO schema.

### 12.2 Mark up visible, accurate, current content

Google’s policies require structured data to represent the main visible page content and prohibit irrelevant or misleading markup. Select the most specific supported type, include required properties, add relevant recommended properties, and keep values synchronized with the page and feeds.

### 12.3 Organization example

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.example.com/#organization",
  "name": "Example Research",
  "url": "https://www.example.com/",
  "logo": "https://www.example.com/assets/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/example-research"
  ]
}
</script>
```

Use only real profiles and facts. Validate syntax, then validate meaning manually.

### 12.4 Common useful types

Depending on the actual page:

- `Organization` / `LocalBusiness`;
- `Person`;
- `Article` / `NewsArticle`;
- `Product` / `ProductGroup` / `Offer`;
- `BreadcrumbList`;
- `VideoObject`;
- `Event`;
- `JobPosting`;
- `SoftwareApplication`;
- `Dataset`;
- `ProfilePage` and `DiscussionForumPosting` for appropriate user content.

Use Google’s search gallery to confirm current rich-result support. Schema.org contains more types than any one search engine consumes.

### 12.5 Feeds can be more important than markup

For ecommerce, local, travel, job, and other verticals, platform feeds or profiles can provide current inventory and transaction facts. Google recommends combining on-page Product structured data with Merchant Center feeds for maximum eligibility and verification. Keep price, availability, identifiers, shipping, returns, and variants consistent.

### 12.6 Validation

- Schema Markup Validator checks general vocabulary/syntax.
- Google Rich Results Test checks supported Google features.
- Search Console enhancement reports show deployed issues.
- URL Inspection verifies the crawled/rendered version.
- Manual review checks truth, visibility, and consistency.

Passing a validator means the markup is parseable, not that it is useful or guaranteed to display.

---

## 13. Off-page discovery, editorial links, and brand reputation

### 13.1 Why external references matter

Links can help crawlers discover pages and can signal that another source found them worth referencing. Brand mentions, reviews, citations, community discussion, and real-world prominence also help people and systems understand reputation and entity context.

### 13.2 Earn references through value

Sustainable methods include:

- publish original data and methodology;
- create tools, datasets, or templates;
- contribute to standards and open-source projects;
- provide expert commentary with evidence;
- publish useful local or industry resources;
- maintain primary documentation worth citing;
- perform genuine digital PR around something newsworthy;
- build partnerships that make sense without ranking benefit.

### 13.3 Avoid manipulative acquisition

Risky tactics include:

- buying followed links;
- private link networks;
- mass guest-post exchanges;
- automated directory or comment spam;
- expired-domain reputation exploitation;
- fake reviews or forum seeding;
- third-party pages published mainly to exploit a host domain’s reputation;
- affiliate pages copied from merchant feeds with no added value.

Google’s spam policies address link spam, scaled content abuse, site reputation abuse, expired-domain abuse, hidden content, and other manipulation.

### 13.4 Digital PR and AEO

Third-party coverage can help establish that an entity exists and is discussed independently. The goal should be accurate public evidence, not manufactured mention counts. Correct facts on a primary source page make it easier for journalists and answer systems to reference the organization accurately.

---

## 14. Platform-specific search and AI crawler controls

Crawler policies change. Verify the current vendor documentation before deploying production rules.

| Ecosystem | Search/answer access | Training or separate use | Important distinction |
|---|---|---|---|
| Google Search | `Googlebot` and Search indexing controls | `Google-Extended` controls certain Gemini training and grounding uses outside core Search | Google says Google-Extended does not affect Search inclusion or ranking; AI Overviews/Mode use the Search foundation |
| OpenAI | `OAI-SearchBot` supports discovery and inclusion in ChatGPT search summaries/snippets | `GPTBot` relates to potential model training | A publisher can allow Search while disallowing GPTBot |
| Anthropic | `Claude-SearchBot` supports search indexing; `Claude-User` supports user-requested retrieval | `ClaudeBot` may collect content for model training | Anthropic documents three separate robots preferences |
| Perplexity | `PerplexityBot` supports search result discovery and linking | Perplexity says this bot is not used for foundation-model training | `Perplexity-User` is a user-triggered fetcher and is documented as generally ignoring robots.txt |
| Bing/Microsoft | Bing crawl/index eligibility supports Bing and Copilot grounding experiences | Follow Microsoft’s current publisher controls | Bing Webmaster Tools reports AI citations and grounding queries |

### Example: allow answer search while limiting some training bots

```text
User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Disallow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: ClaudeBot
Disallow: /

User-agent: PerplexityBot
Allow: /
```

This is only an example of one publisher preference. It is not a recommendation for every organization. Consider:

- commercial value of search visibility;
- copyright and licensing policy;
- data sensitivity;
- training preferences;
- contractual obligations;
- bandwidth and abuse risk;
- whether user-triggered fetches should be allowed;
- legal advice for the relevant jurisdiction.

### WAF and CDN configuration

Allowing a bot in robots.txt does not help if a CDN blocks it. Review:

- bot management rules;
- IP allowlists published by the vendor;
- rate limits;
- JavaScript challenges and CAPTCHAs;
- geo-blocking;
- TLS compatibility;
- server logs and response codes.

Do not trust the user-agent string alone for privileged bypasses.

### Google snippet controls and AI features

Google states that a page must be indexed and eligible for a snippet to appear in its generative Search features. `nosnippet` prevents direct use as input to AI Overviews and AI Mode under the documented Search behavior. `max-snippet` and `data-nosnippet` provide more granular presentation control.

### OpenAI referral tracking

OpenAI’s publisher documentation says ChatGPT referral links include `utm_source=chatgpt.com`. Measure this alongside ordinary referrer data, but expect some visits from apps, privacy tools, copied URLs, or other surfaces to be misattributed.

---

## 15. AEO/GEO tactics: evidence tiers

The market contains more confident claims than stable evidence. Classify tactics by support.

### Tier 1: strong foundation and official support

- crawlable, indexable, technically reliable pages;
- useful, accurate, original content;
- clear audience/task alignment;
- descriptive headings and readable structure;
- first-party evidence and appropriate citations;
- meaningful internal and external links;
- consistent entity and product facts;
- valid structured data for supported purposes;
- current sitemaps, feeds, and profiles;
- accessible, mobile-friendly, performant presentation;
- explicit publisher crawler preferences;
- ongoing measurement in Search Console/Bing Webmaster Tools and analytics.

These practices benefit both search and answer visibility and are supported by official guidance.

### Tier 2: plausible and testable, with emerging evidence

- placing concise claim-and-evidence passages under descriptive headings;
- publishing original statistics with transparent methods;
- making comparison criteria explicit;
- including expert quotations that genuinely support the subject;
- designing pages around likely query fan-out subquestions;
- monitoring citation selection and how a source is represented in answers;
- strengthening topic depth across a connected set of pages;
- publishing machine-readable feeds for fast-changing factual inventories.

The KDD 2024 GEO paper found that some content modifications—including adding relevant citations, quotations, and statistics—improved source visibility in its experimental setup. Treat this as evidence that verifiable, information-rich writing can matter, not as a universal percentage promise. The study used specific systems, metrics, queries, and controlled rewrites; production engines change.

### Tier 3: experimental or platform-specific

- `llms.txt` or Markdown mirrors for services that explicitly consume them;
- exact passage-length formulas;
- universal “AI-friendly” writing styles;
- prompt-by-prompt rank tracking products;
- schema types unsupported by the target engine;
- agent discovery protocols still under development;
- synthetic tests that imitate a closed answer engine.

Test only after fundamentals are sound, document the target system, and require measurable benefit.

### Unsupported or harmful claims

- “SEO is dead.”
- “Schema guarantees an AI citation.”
- “Every answer must be 40–60 words.”
- “An FAQ section is required for AEO.”
- “Add hundreds of long-tail variants.”
- “Mention the brand everywhere so models learn it.”
- “A high traditional rank guarantees AI citation.”
- “Crawler traffic proves citation.”
- “A single prompt screenshot proves visibility.”
- “AI-written content is automatically penalized,” or “AI-written content is automatically safe.”

---

## 16. The `llms.txt` question

`llms.txt` is a publisher proposal for offering LLM-friendly site guidance, often as a Markdown file. It is not part of the Robots Exclusion Protocol, not an access-control mechanism, and not a universal search or AI standard.

As of July 2026:

- Google explicitly says it does not use `llms.txt` for Search or generative Search visibility and that the file neither helps nor hurts Google ranking.
- Some documentation ecosystems publish `llms.txt` indexes for their own tooling or developer convenience.
- Platform support varies and can change.

If a team implements it:

- do not expose private or otherwise inaccessible material;
- do not let it contradict canonical web content;
- generate it from maintained sources where possible;
- treat it as an optional distribution format;
- measure whether a target service actually uses it;
- keep robots.txt, authentication, canonical URLs, and sitemaps as the real controls.

Do not divert substantial effort from content, crawlability, feeds, or measurement to maintain an unproven file.

---

## 17. Vertical strategies

### 17.1 Local businesses

Maintain accurate, complete business information:

- official name without keyword stuffing;
- primary and secondary categories;
- address or service area;
- current hours and holiday exceptions;
- phone and website;
- services, menus, or appointment links;
- original photos;
- genuine reviews and thoughtful responses;
- location-specific pages with useful local information;
- consistent LocalBusiness structured data;
- Google Business Profile and Bing Places.

Google describes local ranking primarily through relevance, distance, and prominence. A business cannot optimize away the searcher’s physical location. Do not create doorway pages for every nearby town without a real presence or distinct service value.

### 17.2 Ecommerce

Provide stable, specific product truth:

- unique product titles and descriptions;
- manufacturer and merchant identifiers such as GTIN/MPN where applicable;
- variant relationships;
- current price, availability, condition, shipping, and returns;
- high-quality original images;
- customer and editorial reviews with clear provenance;
- category pages that help comparison;
- Product/ProductGroup/Offer structured data;
- Merchant Center and other supported feeds;
- crawlable pagination and product links;
- handling for out-of-stock, discontinued, and replacement products.

Keep HTML, structured data, feed, checkout, and policy values aligned. Contradictions reduce trust and can create poor answer experiences.

### 17.3 Publishers and news

- publish original reporting and corrections;
- use clear bylines and dates;
- distinguish reporting, analysis, opinion, and sponsored content;
- link to primary documents;
- provide article and image metadata;
- maintain news sitemaps where appropriate;
- protect archive accessibility and stable URLs;
- monitor how AI answers characterize and cite reporting;
- establish licensing and crawler policies intentionally.

### 17.4 B2B and SaaS

Cover the full decision:

- category education;
- use cases by real workflow, not empty industry templates;
- integrations and technical limitations;
- pricing model or purchasing process;
- security, privacy, compliance, and data handling;
- implementation time and migration;
- product documentation and API references;
- honest comparisons and alternatives;
- case studies with measurable context;
- status, changelog, and support documentation.

Answer systems often synthesize comparisons. Precise public facts reduce inaccurate inference.

### 17.5 Documentation and developer content

- version every instruction;
- expose prerequisites;
- use runnable code examples;
- document errors and edge cases;
- link reference and tutorial content appropriately;
- maintain stable anchors and URLs;
- provide changelogs and deprecation timelines;
- ensure rendered HTML contains code and explanations;
- add copy buttons without hiding accessible code text;
- test examples in CI.

Primary documentation is inherently citation-worthy when it is current and complete.

### 17.6 Images and video

- make the media page useful without requiring the media alone;
- add descriptive titles, captions, transcripts, and surrounding text;
- use high-resolution previews with correct dimensions;
- provide crawlable media URLs and thumbnails;
- use VideoObject where applicable;
- create key moments or chapters when supported;
- show the creator, date, and source rights;
- avoid embedding the only important fact inside an image.

Multimodal answer systems need consistent text and media signals.

---

## 18. Measurement: SEO and AEO need different scorecards

### 18.1 Business outcomes

Primary metrics should connect to the objective:

- qualified leads;
- purchases and revenue;
- subscriptions;
- appointments or calls;
- product activation;
- documentation success;
- support resolution;
- assisted conversions;
- retention or repeat use.

Segment branded and non-branded discovery, new and returning users, geography, device, landing-page type, and intent.

### 18.2 Traditional search metrics

- indexed eligible pages;
- crawl errors and crawl activity;
- impressions;
- clicks;
- click-through rate;
- average position, interpreted cautiously;
- rich-result eligibility and impressions;
- organic landing sessions;
- conversion rate and value;
- Core Web Vitals field data;
- backlinks and referring sources evaluated for quality, not count alone.

Search Console explains that position is an average and that metrics are often assigned to Google’s selected canonical URL. Focus on trends in impressions and clicks more than obsessing over a single manual rank.

### 18.3 Answer-engine metrics

- share of tracked prompts with any citation from the site;
- total citations and unique cited pages;
- citation share for a topic or grounding-query group where available;
- cited passage/claim and its context;
- brand mention rate with and without links;
- factual accuracy of the answer about the entity;
- recommendation inclusion and stated rationale;
- AI referral sessions;
- engagement and conversion from AI referrals;
- search/index bot crawl success;
- lag between source update and answer correction.

Bing explicitly warns that its citation count does not measure ranking, authority, importance, clicks, or a page’s role in an answer. Preserve these distinctions in internal reporting.

### 18.4 A repeatable prompt panel

For each prompt run, record:

- engine and product surface;
- model/mode if visible;
- date and time;
- logged-in or clean environment;
- location/language/device;
- full prompt and conversation context;
- whether live search was used;
- cited URLs and order;
- answer claims about the brand/category;
- presence, accuracy, sentiment, and recommendation;
- outbound link availability.

Run repeated samples. Generative output is nondeterministic and can change with system updates. Report confidence ranges or stable trends, not a false exact “position.” Follow platform terms; do not automate scraping in prohibited ways.

### 18.5 Analytics and attribution

Create a channel grouping for known AI referrers and UTMs. Preserve raw source/medium values. Analyze:

- landing pages;
- conversions and assisted conversions;
- engagement relative to traditional organic search;
- new versus returning visitors;
- query/topic proxies from platform reports;
- dark/direct traffic changes cautiously.

Not all AI exposure creates a referral. Apps can omit referrers, users can copy URLs, and an answer can influence later branded search. Combine platform citation data, referral data, brand-demand trends, and surveys rather than forcing perfect last-click attribution.

### 18.6 Technical monitoring

- daily crawl and index anomalies;
- sitemap status;
- robots and noindex changes;
- canonical conflicts;
- structured data validity;
- WAF blocks by verified crawler;
- template status-code errors;
- mobile/rendered content parity;
- performance regressions;
- broken internal links;
- accidental deletion or redirect chains;
- feed/HTML inconsistency.

---

## 19. Experimentation and causality

Search systems, competitors, demand, and content all change simultaneously. A traffic increase after editing headings does not prove the heading caused it.

### Better experiment design

1. State a falsifiable hypothesis.
2. Select comparable pages or query groups.
3. Change one meaningful variable or a clearly defined bundle.
4. Preserve a comparison group when possible.
5. Record release date, crawl/index state, and external events.
6. Allow enough time for discovery and demand cycles.
7. Measure search exposure, citation, referral, and business outcome.
8. Check whether the effect persists.
9. Document null and negative results.

Examples:

- Does adding original benchmark data improve impressions and citations for a topic cluster?
- Does consolidating overlapping guides improve clicks and canonical stability?
- Does providing a current product feed reduce incorrect price mentions?
- Does a concise executive answer increase qualified conversions without reducing engagement?

### Avoid uncontrolled “prompt rank” conclusions

One answer from one engine is an anecdote. A useful AEO test samples multiple runs, relevant prompt variants, and sufficient time while recording citations and answer accuracy.

### Watch for second-order effects

An answer-ready summary may increase citation but reduce clicks. A rich result may increase CTR or satisfy the query on-platform. Judge the trade against the real objective.

---

## 20. AI-generated content, scaled content, and editorial responsibility

Google’s guidance does not say all AI-assisted content is automatically penalized. It says using automation—including generative AI—to produce many pages without added user value may violate scaled content abuse policies, especially when the purpose is manipulating rankings.

### High-risk patterns

- thousands of thin city, product, or question variants;
- summaries of other pages with no original contribution;
- fabricated authors, experience, citations, or statistics;
- automated translation without subject review;
- invented product comparisons;
- mass pages targeting every long-tail phrase;
- outdated facts regenerated with a fresh date;
- hidden programmatic pages not integrated into the site;
- copied affiliate descriptions;
- content that cannot be maintained at its published scale.

### Responsible AI-assisted workflow

1. Begin with a validated audience need.
2. Gather primary sources and first-party knowledge.
3. Use AI for outlining, classification, editing, or controlled drafting where helpful.
4. Have a responsible subject owner verify every claim, link, date, example, and recommendation.
5. Add original evidence, experience, analysis, or tools.
6. Disclose automation when a reasonable user would care how the content was made.
7. Check copyright, privacy, licensing, and confidential-data handling.
8. Run factual, editorial, accessibility, and technical QA.
9. Assign an update owner and cadence.
10. Publish only what the organization can maintain.

The test is not “Was AI used?” It is “Does this page provide accurate, responsible, original value for its intended audience?”

---

## 21. Page design templates

These are starting structures, not formulas.

### 21.1 Definition/explainer page

```text
Clear title
One-paragraph definition
Why it matters
How it works
Key distinctions
Concrete example
Limitations or exceptions
Related actions/resources
Author, date, and sources
```

### 21.2 Procedure/troubleshooting page

```text
Exact problem and affected context
Fast answer or diagnostic summary
Prerequisites
Ordered steps
Expected result after each critical step
Common errors and branches
How to verify
How to undo/escalate
Version/date and sources
```

### 21.3 Comparison page

```text
Who the comparison is for
Short conclusion by use case
Method and selection criteria
Fact table with dates
Detailed criterion analysis
Tradeoffs and exceptions
Recommendation logic
Commercial disclosure
Sources and update history
```

### 21.4 Research/data page

```text
Finding summary
Dataset and population
Method
Results with units and uncertainty
Charts/tables with accessible text
Interpretation
Limitations
Downloadable data or reproducible method
Author, publication date, revision history
```

### 21.5 Product/service page

```text
Specific product/service identity
Who it is for and problem solved
Capabilities and constraints
Proof, examples, and current facts
Pricing/purchase process
Compatibility/requirements
Security, returns, support, or policies
Clear primary action
Structured data/feed parity
```

---

## 22. SEO/AEO audit checklist

### Strategy and research

- [ ] Search goals connect to business or public-service outcomes.
- [ ] Primary audiences, tasks, constraints, and proof needs are documented.
- [ ] Important intent families map to an appropriate page.
- [ ] Content gaps are based on real user evidence, not volume alone.
- [ ] A representative AI prompt panel exists for priority topics.

### Content quality

- [ ] The page provides original or meaningfully synthesized value.
- [ ] The main task is satisfied without unnecessary delay.
- [ ] Important answers include scope, units, dates, and evidence.
- [ ] Facts and interpretations are distinguishable.
- [ ] Authors, reviewers, methods, and disclosures are appropriate.
- [ ] Content has an owner and update cadence.
- [ ] Media adds information and has accessible alternatives.

### Answer readiness

- [ ] Important questions receive direct, accurate answers.
- [ ] Headings describe real sections and subquestions.
- [ ] Claims retain enough local context to be quoted safely.
- [ ] Comparisons use disclosed, repeatable criteria.
- [ ] Procedures include prerequisites, verification, and failure paths.
- [ ] Exceptions and jurisdiction/version boundaries are clear.

### On-page SEO

- [ ] Title and main heading are unique, accurate, and specific.
- [ ] Meta description is a useful page summary.
- [ ] URL is stable and readable.
- [ ] Internal links use descriptive anchors and support the journey.
- [ ] Images have appropriate alt text, dimensions, and compression.
- [ ] Paid and user-generated links are qualified appropriately.

### Crawl and index

- [ ] Important pages are discoverable through crawlable links.
- [ ] Robots rules express the intended access policy.
- [ ] Noindex is used intentionally and can be crawled when required.
- [ ] Status codes reflect reality; soft 404s are absent.
- [ ] Canonical signals agree across HTML, redirects, links, and sitemaps.
- [ ] Sitemaps include only canonical, indexable success URLs.
- [ ] Essential content and metadata render reliably.
- [ ] Mobile content and metadata have parity.
- [ ] WAF/CDN rules do not block desired verified crawlers.

### Structured data and feeds

- [ ] Markup describes visible content truthfully.
- [ ] The most specific relevant type is used.
- [ ] Required and useful recommended properties are present.
- [ ] Markup validates and survives deployment rendering.
- [ ] HTML, structured data, feeds, checkout, and profiles agree.
- [ ] Unsupported schema is not presented as a ranking guarantee.

### Reputation and entities

- [ ] Organization, author, product, and location facts are consistent.
- [ ] `sameAs` links point only to genuine identity profiles.
- [ ] Primary claims are supported by primary sources.
- [ ] Editorial references are earned rather than manipulated.
- [ ] Reviews and testimonials have genuine provenance.
- [ ] Privacy, contact, return, correction, and disclosure policies are clear.

### Experience and performance

- [ ] Core Web Vitals are evaluated using field data.
- [ ] Mobile interaction and navigation are usable.
- [ ] Main content is not blocked by intrusive interstitials.
- [ ] Text, forms, media, and interactive controls are accessible.
- [ ] Third-party scripts and ads do not overwhelm the task.

### AI and answer-engine controls

- [ ] Search, training, and user-fetch bot preferences are decided separately.
- [ ] Vendor crawler documentation was checked recently.
- [ ] Desired bots can pass the CDN/WAF.
- [ ] Google snippet controls reflect the intended AI Search use.
- [ ] Experimental files such as `llms.txt` do not replace standard controls.

### Measurement

- [ ] Search Console and Bing Webmaster Tools are verified.
- [ ] Conversions and business value are measured.
- [ ] Traditional search and AI referral channels are separated.
- [ ] Citation, mention, accuracy, referral, and conversion are distinct metrics.
- [ ] Prompt-panel methodology records context and repeated samples.
- [ ] Dashboards show trends and caveats, not false certainty.

---

## 23. Prioritized implementation roadmap

### Phase 1: eligibility and measurement

1. Verify Search Console, Bing Webmaster Tools, analytics, and conversion events.
2. Audit robots, noindex, status codes, canonicals, sitemaps, and WAF behavior.
3. Confirm that mobile and rendered HTML expose the essential content.
4. Identify priority pages that are not indexed or have conflicting canonicals.
5. Define AI crawler preferences for search, training, and user fetch.
6. Establish a baseline for search performance, AI citations, and business outcomes.

### Phase 2: intent and content quality

1. Map the highest-value audience tasks to pages.
2. Consolidate overlapping or thin pages.
3. Improve priority pages with direct answers, original evidence, examples, and clear next actions.
4. Add author, methodology, date, policy, and disclosure information where appropriate.
5. Repair internal linking and orphaned priority pages.

### Phase 3: entities, structured data, and feeds

1. Reconcile organization, author, product, and local facts.
2. Implement supported structured data that reflects visible content.
3. Connect Merchant Center, Business Profile, Bing Places, or relevant vertical feeds.
4. Validate production markup and monitor enhancement reports.
5. Publish authoritative first-party pages for facts answer engines currently misstate.

### Phase 4: experience and differentiation

1. Improve Core Web Vitals using field data.
2. Make navigation, typography, media, and forms accessible.
3. Create original research, tools, visuals, or expert resources competitors cannot cheaply duplicate.
4. Earn relevant references through genuine usefulness and public contribution.
5. Remove intrusive or low-value page elements.

### Phase 5: experiments and maintenance

1. Run controlled SEO/AEO experiments on priority clusters.
2. Review citations, grounding queries, and answer accuracy monthly or at an appropriate cadence.
3. Monitor releases, migrations, expired content, and feed consistency.
4. Retire feature pages, flags, campaigns, and old facts when no longer useful.
5. Update crawler controls and platform assumptions as vendor guidance changes.

---

## 24. Common myths and corrections

### “SEO is dead because AI answers the question.”

Generative answers still need discovery, retrieval, source quality, entity information, and current facts. The interface is changing; the need for trustworthy, machine-accessible sources is not.

### “AEO is completely separate from SEO.”

There are answer-specific measurements and communication tactics, but major engines state that established search foundations support their AI experiences.

### “Ranking first guarantees citation.”

Answer engines can retrieve several subqueries and synthesize from different sources. Traditional visibility can help discovery, but citation selection is not a simple copy of one result page.

### “Structured data guarantees inclusion.”

Structured data can improve understanding and eligibility. Google explicitly says valid markup does not guarantee a rich result. No official universal schema guarantees an AI citation.

### “Every article needs an FAQ.”

Only use FAQs for real recurring questions. Artificial FAQ expansion creates repetition and may provide no special search presentation.

### “Longer pages rank better.”

There is no universal ideal length. Use the depth needed to satisfy the task and evidence burden.

### “Keyword density should hit a target.”

Modern search systems understand related language. Repetition harms readability and can become keyword stuffing.

### “Core Web Vitals are all that matters.”

They measure important experience dimensions, but do not replace relevance, content value, trust, or complete usability.

### “Blocking a crawler removes the page from search.”

Robots.txt controls crawling, not guaranteed indexing. A known blocked URL can sometimes appear without content. Use the appropriate noindex or removal mechanism, and protect private data with authentication.

### “Google-Extended controls AI Overviews.”

Google says Google-Extended does not affect inclusion or ranking in Google Search. Search’s own indexing and snippet controls govern Search AI features under current documentation.

### “`llms.txt` is the new sitemap.”

It is not a universal standard or crawl-control protocol. Google says it ignores it for Search. Use only for a documented consumer and keep standard web controls authoritative.

### “Crawler hits prove we were cited.”

A request proves only that a URL was fetched. Retrieval, synthesis, visible citation, referral, and conversion are separate events.

### “AI visibility can be measured as one rank.”

Generative answers vary by prompt, follow-up context, engine, model, location, time, and source state. Use sampled visibility and accuracy metrics.

### “AI content is automatically spam.”

The use of AI alone is not the decisive issue in Google’s published guidance. Low-value scaled production intended to manipulate rankings is the risk. Human responsibility and original usefulness matter.

---

## 25. Research limitations and uncertainty

- Search and AI ranking systems are proprietary and change frequently.
- Official documentation describes requirements and recommendations, not every ranking signal or model behavior.
- AEO terminology is not standardized across companies.
- Generative answers are nondeterministic and personalized by context.
- Citation interfaces and crawler policies can change faster than ordinary SEO infrastructure.
- Vendor tools measure different surfaces with different aggregation rules.
- Referral data undercounts exposure and may misattribute apps or copied links.
- Public GEO/AEO research often evaluates limited systems, query sets, languages, or synthetic environments.
- Correlations between page features and citations do not establish a causal ranking factor.
- English-language findings may not transfer to other languages, countries, or low-resource topics.
- Answer visibility can create brand value without clicks, but can also substitute for site visits; the net effect is business-specific.

Treat the field as applied research: use official foundations, form explicit hypotheses, collect evidence, and revise strategy as systems and user behavior change.

---

## Sources and further reading

### Search fundamentals and content quality

1. [Google Search Essentials](https://developers.google.com/search/docs/essentials) — Technical eligibility, spam policies, and core search best practices.
2. [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) — Official overview of discovery, titles, snippets, links, media, and people-first SEO.
3. [Google: Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) — Content self-assessment, page experience, E-E-A-T context, and authorship questions.
4. [Google Spam Policies for Web Search](https://developers.google.com/search/docs/essentials/spam-policies) — Scaled content, link spam, reputation abuse, thin affiliation, and other prohibited manipulation.
5. [Google guidance on generative AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) — Use of automation, added value, and scaled content abuse.
6. [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a) — Bing search, Copilot, indexing, grounding, content quality, and crawler guidance.

### Generative and answer search

7. [Google: Optimizing your website for generative AI features on Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) — Current guidance on RAG, query fan-out, technical eligibility, non-commodity content, AEO/GEO myths, `llms.txt`, and measurement.
8. [Bing: AI Performance in Webmaster Tools](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c) — Citations, cited pages, grounding queries, intent/topics, aggregation, and metric limitations.
9. [OpenAI Publishers and Developers FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq) — OAI-SearchBot inclusion, noindex behavior, GPTBot distinction, referral tracking, and agent accessibility.
10. [OpenAI: ChatGPT Search](https://help.openai.com/en/articles/9237897-chatgpt-search) — Search sources, citations, and publisher inclusion basics.
11. [Perplexity crawler documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) — PerplexityBot, Perplexity-User, IP verification, and WAF behavior.
12. [Anthropic crawler controls](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) — ClaudeBot, Claude-User, Claude-SearchBot, and robots preferences.
13. Pranjal Aggarwal et al., [“GEO: Generative Engine Optimization,” KDD 2024](https://doi.org/10.1145/3637528.3671900) — Primary research proposing GEO and evaluating source-visibility interventions.

### Crawl, index, standards, and structured data

14. [Google crawling and indexing overview](https://developers.google.com/search/docs/crawling-indexing) — URL discovery, crawling, rendering, indexing, metadata, site changes, and removals.
15. [Google JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) — Crawl, render, index phases and JavaScript implementation risks.
16. [Google canonical URL guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) — Redirect, canonical, sitemap, and internal-link signals.
17. [Google robots meta and snippet controls](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) — Noindex, nosnippet, max-snippet, data-nosnippet, and X-Robots-Tag behavior.
18. [IETF RFC 9309 — Robots Exclusion Protocol](https://www.rfc-editor.org/rfc/rfc9309) — The standardized robots.txt protocol.
19. [Sitemaps protocol](https://www.sitemaps.org/protocol.html) — XML sitemap schema, limits, and sitemap indexes.
20. [IndexNow protocol](https://www.indexnow.org/documentation) — URL-change notification for participating search engines.
21. [Schema.org documentation](https://schema.org/docs/home.html) — Shared structured-data vocabulary and encodings.
22. [Google structured data introduction](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) — Search understanding, rich-result eligibility, formats, and validation.
23. [Google general structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) — Technical and quality policies for truthful, visible, relevant markup.

### Experience, verticals, and measurement

24. [web.dev: Core Web Vitals](https://web.dev/articles/vitals) — Current LCP, INP, and CLS definitions, thresholds, field measurement, and lifecycle.
25. [Google mobile-first indexing best practices](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing) — Mobile content, metadata, rendering, and link parity.
26. [Google ecommerce SEO guidance](https://developers.google.com/search/docs/specialty/ecommerce) — Product data, site structure, URLs, pagination, launches, reviews, and search surfaces.
27. [Google ecommerce structured data](https://developers.google.com/search/docs/specialty/ecommerce/include-structured-data-relevant-to-ecommerce) — Product, organization, local, breadcrumb, review, and video markup.
28. [Google Search Console performance metrics](https://support.google.com/webmasters/answer/7042828) — Definitions and caveats for impressions, clicks, CTR, position, and canonical attribution.
29. [Google Search Console performance use cases](https://support.google.com/webmasters/answer/17010961) — Query/page analysis, branded segmentation, CTR, and trend interpretation.
30. [Bing: Sitemaps in AI-powered search](https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search) — Sitemap and IndexNow roles in Bing and AI discovery.

---

## Final principle

> **The strongest SEO/AEO strategy is to become the clearest, most useful, most verifiable source for a real audience need—and then remove every technical, structural, and trust barrier that prevents search and answer systems from discovering and representing that value accurately.**
