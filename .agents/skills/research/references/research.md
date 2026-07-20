# Research Method: From Question Framing to Defensible Synthesis

**Research date:** July 20, 2026
**Scope:** Decision-oriented research for product work, content, policy, technical documentation, market and organizational questions, public claims, and evidence reviews
**Purpose:** Provide a rigorous, reusable method for framing questions, finding evidence, selecting sources, preserving provenance, checking facts, communicating uncertainty, and producing a synthesis that another person can inspect and update

---

## Contents

1. [Executive summary](#1-executive-summary)
2. [The research contract](#2-the-research-contract)
3. [Question framing](#3-question-framing)
4. [Search strategy](#4-search-strategy)
5. [Source hierarchy and source fitness](#5-source-hierarchy-and-source-fitness)
6. [Provenance and traceability](#6-provenance-and-traceability)
7. [Fact-checking](#7-fact-checking)
8. [Uncertainty](#8-uncertainty)
9. [Synthesis](#9-synthesis)
10. [End-to-end workflow](#10-end-to-end-workflow)
11. [Reusable templates](#11-reusable-templates)
12. [Failure modes](#12-failure-modes)
13. [Quality checklist](#13-quality-checklist)
14. [Research basis and annotated sources](#14-research-basis-and-annotated-sources)

---

## 1. Executive summary

Good research is not the accumulation of links. It is a controlled chain from a real decision to a bounded question, from that question to an appropriate search, from the search to inspectable evidence, and from the evidence to a conclusion whose strength does not exceed its support.

The governing principles are:

1. **Frame the decision before the search.** State who will use the answer, what decision it informs, the consequences of error, the relevant population or system, the comparison, the outcome, the jurisdiction or context, and the time horizon. A vague question produces a vague evidence base.
2. **Match the question to the evidence.** Different questions require different evidence. A randomized trial may be strong evidence for a treatment effect but irrelevant to a question about current law, implementation experience, system behavior, or a community's stated priorities.
3. **Search as a documented strategy, not a single query.** Use multiple source classes and search modes. Combine controlled vocabulary and natural language where databases support them; use citation chains, known-item searches, registries, official records, and targeted web searches. Record where, when, and how each search was run.
4. **Treat authority as contextual.** Prestige, peer review, a government domain, and a polished interface are signals—not proof. Assess a source's authority for the specific claim, its directness, methods, independence, currency, completeness, and correction status.
5. **Preserve claim-level provenance.** Keep each material claim connected to the exact source, version, locator, extraction, and any transformation used. A bibliography alone is not enough to reproduce the reasoning.
6. **Fact-check atomic claims.** Separate compound statements into facts that can be verified independently. Trace summaries to primary evidence where possible, check context and version status, seek independent corroboration when the claim warrants it, and record contradictory evidence.
7. **Name uncertainty instead of smoothing it away.** Distinguish missing evidence, measurement error, sampling variation, model dependence, causal uncertainty, contextual transfer, temporal instability, semantic ambiguity, and expert disagreement. Use calibrated terms only when the scale is defined.
8. **Synthesize by question and claim, not source by source.** Group comparable evidence, assess quality and directness, explain disagreements, distinguish observation from interpretation, and show how the evidence changes the decision.
9. **Make updates and corrections part of the method.** Record search dates, review triggers, owners, and material changes. A once-correct answer can become wrong when laws, products, prices, leadership, standards, or evidence change.
10. **Keep judgment visible.** Research always contains choices about scope, weighting, and interpretation. Document those choices so another person can challenge or reproduce them.

This guide adapts methods from systematic evidence review, information literacy, professional fact-checking, provenance standards, and uncertainty communication. It is not a claim that every product question needs a full systematic review. Rigor should be proportional to consequence, while the chain of reasoning should remain visible at every level.

---

## 2. The research contract

Before collecting evidence, write a short research contract. This prevents a search from drifting toward whatever is easiest to find.

### 2.1 Decision statement

Start with the decision, not the topic:

> **[Decision owner]** must decide **[action or choice]** for **[affected people or system]** by **[date]**. The decision should optimize **[outcomes]** while respecting **[constraints]**. A wrong answer could cause **[material harms or costs]**.

Examples:

- Weak: “Research notification design.”
- Stronger: “The product team must decide whether account-security notifications should be interruptive or asynchronous for administrators of multi-user workspaces. The decision should reduce missed security actions without creating avoidable alarm or notification fatigue.”
- Weak: “Find accessibility laws.”
- Stronger: “Legal and product owners must identify which digital-accessibility requirements apply to a public service launching in Ontario in October 2026, which text is legally binding, and which additional WCAG 2.2 AA practices the team will adopt as product policy.”

### 2.2 One-sentence research intent

State the output in one sentence:

> This research will establish **[what must be known]** so **[who]** can **[decide or act]**, with **[required confidence or risk threshold]**.

### 2.3 Scope and non-scope

Define:

- included populations, users, organizations, systems, or markets;
- included interventions, features, events, or exposures;
- meaningful comparisons;
- outcomes and harms;
- geography, jurisdiction, language, and cultural context;
- time horizon and freshness requirement;
- eligible source types and study designs;
- excluded questions and why they are excluded;
- constraints such as privacy, confidentiality, cost, access, and time;
- the date after which an answer should be rechecked.

Exclusions can bias a result, so justify them. “Only English-language material because the team reads English” is a resource constraint, not evidence that other languages are irrelevant. “Only the last five years” is not a defensible limit unless the subject changed in a way that makes earlier evidence inapplicable.

### 2.4 Evidence standard

Set the evidence bar before seeing the result:

| Consequence of error | Appropriate minimum |
|---|---|
| Low and reversible | One authoritative, current source may be sufficient for a simple fact; spot-check material details |
| Moderate product or business consequence | Multiple source classes; primary evidence for core claims; contradiction and freshness checks |
| High-stakes legal, medical, financial, safety, security, privacy, or public claim | Domain-qualified reviewer; governing or primary sources; independent corroboration; explicit uncertainty; documented sign-off and update trigger |
| Research intended to be comprehensive or publishable | Protocol; reproducible searches; explicit eligibility and appraisal; dual review where appropriate; reporting standard suited to the method |

The evidence standard should also say what would be sufficient to change the decision. Without that threshold, people tend to keep searching until they find evidence they like or stop when time runs out.

### 2.5 Roles and ownership

Name:

- decision owner;
- research owner;
- searcher or information specialist;
- subject-matter reviewer;
- legal, clinical, security, accessibility, or ethics reviewer when needed;
- person authorized to approve publication;
- maintenance owner and next review date.

Research without ownership becomes an orphaned document whose claims slowly expire.

---

## 3. Question framing

Question framing determines what can count as an answer. Cochrane's review guidance emphasizes that a well-formed question guides eligibility, searching, data collection, synthesis, and presentation. The same dependency applies outside health research: changing the question after seeing favorable evidence risks post-hoc justification.

### 3.1 Move from a topic to a decision question

Use this sequence:

1. **Topic:** broad area of interest.
2. **Problem:** observed gap, harm, failure, or opportunity.
3. **Decision:** action someone can take.
4. **Primary question:** evidence needed to choose or design that action.
5. **Subquestions:** distinct factual, causal, experiential, operational, ethical, and implementation questions.
6. **Claims:** propositions the final answer may need to support.
7. **Evidence requirements:** source and method suited to each claim.

Example:

| Level | Example |
|---|---|
| Topic | Password reset |
| Problem | Some users abandon reset after requesting an email |
| Decision | Decide whether to keep email reset, add passkeys, or introduce another recovery path |
| Primary question | Which recovery design best restores legitimate access for the target users without materially increasing account takeover risk or support burden? |
| Subquestions | Where does abandonment occur? What threats must be controlled? Which users lack access to the registered email? What recovery methods are supported by the platform? What do applicable standards recommend? |
| Claims | “Email delivery delay is the main cause of abandonment”; “Passkeys cover the target device mix”; “Support-assisted recovery creates a higher social-engineering risk” |
| Evidence | Product analytics and session research; platform documentation and compatibility data; security incident evidence and threat analysis |

This decomposition stops one appealing study or anecdote from being stretched across unrelated claims.

### 3.2 Classify the question

The question type controls the evidence type. A single project often contains several.

| Question type | What it asks | Useful evidence |
|---|---|---|
| Descriptive | What exists, how much, how often, for whom, and when? | Direct measurement, representative survey, administrative data, census, current registry |
| Comparative | How do A and B differ on defined outcomes? | Head-to-head studies, consistent benchmark data, controlled comparison, comparative usability test |
| Causal or effectiveness | Did X cause or change Y? | Designs that establish temporal order and address confounding; randomized or strong quasi-experimental evidence where feasible |
| Diagnostic or detection | How accurately does a method identify a state? | Comparison with an appropriate reference standard; sensitivity, specificity, predictive values in the relevant population |
| Prognostic or predictive | What is likely to happen, and for whom? | Validated longitudinal data, out-of-sample performance, calibration, relevant base rates |
| Experiential or interpretive | How do people understand, experience, or navigate this? | Interviews, observation, diary studies, ethnography, qualitative evidence synthesis, direct testimony |
| Implementation | What makes an intervention workable in this context? | Process evaluation, operations data, field studies, implementation research, practitioner and user evidence |
| Legal or policy | What is required, permitted, prohibited, or proposed? | Enacted text, regulations, binding decisions, official guidance, legislative history; qualified legal interpretation where needed |
| Technical behavior | What does the system or standard do in this version and environment? | Normative specifications, maintained official documentation, source code, tests, changelog, reproducible experiment |
| Historical | What happened, in what sequence, and how was it understood? | Contemporaneous records, archives, direct testimony, material evidence, critical historical scholarship |
| Normative or ethical | What should be done, given values, rights, and tradeoffs? | Explicit principles, stakeholder values, distribution of benefits and harms, precedent, ethical analysis; facts alone do not settle it |
| Exploratory or scoping | What concepts, evidence types, gaps, and stakeholders exist? | Broad multi-source mapping, scoping review, expert orientation, citation networks |

Do not ask a descriptive dataset to prove causation, a legal blog to establish binding law, a vendor's compatibility claim to establish real-world reliability, or aggregate analytics to explain an individual's motivation.

### 3.3 Choose a framing tool that fits

Frameworks are prompts, not forms to fill mechanically.

#### PICO for effects and comparisons

- **Population**
- **Intervention**
- **Comparator**
- **Outcome**

PICO is useful for intervention-effect questions and helps define eligibility. It is not universal. Cochrane explicitly notes that PICO may not fit diagnostic, prognostic, qualitative, methods, or complex-system questions.

#### PCC for broad scoping questions

- **Population**
- **Concept**
- **Context**

JBI uses PCC to frame scoping reviews. It is useful when the goal is to map what exists rather than estimate a narrow comparative effect.

#### SPIDER or SPICE for qualitative questions

SPIDER prompts **Sample, Phenomenon of Interest, Design, Evaluation, Research type**. SPICE prompts **Setting, Perspective, Intervention or phenomenon of interest, Comparison, Evaluation**. These can make experience, setting, and method visible where PICO would force an unnatural comparison.

#### PICOC for organizational decisions

PICOC adds **Context** to PICO. Context can include industry, organization size, work setting, geography, maturity, incentives, or operating constraints. The Center for Evidence-Based Management uses PICOC in its critically appraised topic guidance.

#### A plain-language decision frame

For cross-domain work, use:

> For **[who or what]**, in **[context, jurisdiction, version, and time]**, how does **[option, exposure, or event]** compare with **[baseline or alternative]** on **[benefits, harms, costs, rights, and operational outcomes]**, and what evidence would justify **[decision]**?

### 3.4 Build a question tree

A question tree prevents unlike claims from being collapsed into one answer.

```text
Primary decision question
├── Reality: What is happening now?
├── Cause: Why is it happening?
├── People: Who is affected and how?
├── Options: What plausible responses exist?
├── Effect: What benefits and harms does each option produce?
├── Context: Where might the evidence not transfer?
├── Feasibility: What would implementation require?
├── Risk: What can fail, be abused, or create inequity?
└── Decision: What threshold would favor one option?
```

Each leaf should be answerable without relying on another leaf's conclusion. If a leaf contains “and,” test whether it hides two questions.

### 3.5 Convert questions into eligibility criteria

Before searching deeply, specify:

- population or system characteristics;
- intervention, exposure, event, or concept;
- comparator or baseline, if relevant;
- outcomes, including adverse and distributional outcomes;
- setting and context;
- study or source types;
- publication and observation dates;
- geography and jurisdiction;
- language policy;
- status requirements, such as enacted law rather than a proposal;
- minimum methodological or provenance requirements;
- exclusion reasons.

Eligibility and synthesis grouping are related but different. A source can be eligible for the research packet yet belong in a separate synthesis because its population, outcome definition, version, or context is not comparable.

### 3.6 Test the frame before committing

Run a small scoping search and ask:

- Does the question use the language sources actually use?
- Are important concepts missing or combined incorrectly?
- Is the population too broad to support a useful answer?
- Are outcomes measurable and decision-relevant?
- Does the comparison reflect the real alternative, including doing nothing?
- Are context, date, version, and jurisdiction explicit?
- Are benefits, harms, equity, privacy, security, and implementation represented where relevant?
- Would two reasonable researchers interpret inclusion the same way?
- Can the expected evidence answer the question, or is the question demanding certainty the available methods cannot provide?
- What result would change the decision?

Revise the protocol when the scoping search exposes a genuine conceptual error. Record the change and reason. Do not quietly narrow the question because the preferred answer is easier to support.

---

## 4. Search strategy

The ACRL information-literacy framework describes searching as strategic exploration: iterative, contextual, and dependent on the information need. Systematic-review methods add reproducibility, recall and precision, source coverage, and explicit reporting. A strong practical method combines both.

### 4.1 Select the research mode

Name the mode because “research” can imply very different coverage.

| Mode | Suitable use | Required disclosure |
|---|---|---|
| Known-item lookup | Verify a specific current fact, rule, value, document, or behavior | Exact source, version/date, access date, and scope |
| Orientation scan | Learn vocabulary, stakeholders, source classes, and disputed points | Search paths tried, representative sources, and explicit non-comprehensiveness |
| Rapid evidence review | Support a time-bounded decision with a structured but constrained search | Protocol, databases/source classes, limits, dates, selection logic, appraisal, and likely omissions |
| Systematic or comprehensive review | Minimize avoidable omission for a high-stakes or publishable question | Registered or fixed protocol, reproducible searches, complete eligibility and selection record, formal appraisal and reporting |
| Living review or monitor | Maintain an answer in a fast-changing domain | Baseline method, update cadence, alert sources, change log, and trigger for revising conclusions |

Do not label an ordinary web search “systematic.” A constrained method can be useful and honest if its limits are visible.

### 4.2 Create a source map before writing queries

List who would create evidence about the question and where it would live.

| Evidence need | Likely producers | Likely locations |
|---|---|---|
| Binding requirements | Legislature, regulator, court, standards body | Official code, gazette, regulator site, case database, standards registry |
| Product behavior | Maintainer, standards body, repository contributors, independent testers | Normative specification, official docs, source repository, issue tracker, changelog, test lab |
| Population and trends | Statistical agency, regulator, research institution | Official dataset, administrative records, survey microdata, methods report |
| Causal effects | Research teams and evidence-synthesis groups | Discipline databases, trial registries, systematic reviews, study reports |
| Experience and unmet need | Affected people, researchers, support and operations teams | Interviews, observation, qualitative studies, support themes, complaints, community records |
| Organizational claims | Organization, auditor, regulator, investors, counterparties | Filings, audit reports, contracts, official announcements, enforcement records |
| Current events | Direct participants, official records, local reporters, wire services | Statements and records, verified media, reputable current reporting |
| Failure and abuse | Users, incident responders, security researchers, regulators | Incident reports, advisories, postmortems, CVEs, enforcement actions, support evidence |

This source map counteracts database tunnel vision. Bibliographic databases do not contain every governing document, implementation record, dataset, or lived experience.

### 4.3 Build a concept table

For each central concept, collect:

- preferred term;
- controlled-vocabulary term where available;
- synonyms and older terms;
- spelling, hyphenation, and regional variants;
- acronyms and expanded forms;
- narrower and broader terms;
- brand, product, organization, policy, or standard names;
- common misspellings when relevant;
- exclusion terms that reveal ambiguity, but use `NOT` cautiously.

Example:

| Concept | Controlled or official terms | Natural-language variants | Ambiguities to test |
|---|---|---|---|
| Account recovery | Identity-management taxonomy term, if the database has one | reset password, regain access, lost credential, recovery flow | data recovery, addiction recovery |
| Security harm | account takeover, unauthorized access | hacked account, stolen account, social engineering | physical security, financial recovery |
| User population | workspace administrator | admin, account owner, team owner | database administrator, system root |

Derive terms from seed sources, subject headings, reference lists, user language, product vocabulary, and domain experts. Do not rely only on synonyms generated from memory.

### 4.4 Construct queries deliberately

In Boolean systems:

- combine synonyms within a concept with `OR`;
- combine distinct required concepts with `AND`;
- use phrases only when the words must occur together;
- use truncation and wildcards only after checking database syntax;
- use proximity operators when phrase searching is too strict;
- combine controlled vocabulary with title, abstract, and keyword terms;
- translate syntax and subject headings separately for each database;
- avoid `NOT` unless excluded meanings have been tested, because it can remove relevant records;
- avoid including every question element when an element is poorly indexed.

Cochrane notes that comparators and outcomes are often absent or inconsistently indexed in abstracts. Searching every PICO element can therefore reduce recall. Test concepts against a small set of known relevant sources.

For web search:

- begin broad enough to discover the field's vocabulary;
- use exact phrases for named rules, quotations, identifiers, and error text;
- use `site:` to search official domains or known repositories;
- use file-type filters to locate reports, standards, filings, and datasets, then verify their canonical host;
- include version, jurisdiction, date, or organization when currentness matters;
- search the exact claim and important alternative explanations;
- inspect several results before clicking; ranking is not evidence of authority;
- leave the page to investigate who is behind it and what independent sources say.

Professional fact-checkers' “lateral reading” behavior is supported by research comparing them with historians and students: the fact-checkers investigated the source in other tabs instead of relying on the site's own appearance or self-description.

### 4.5 Use multiple search modes

A defensible search usually combines:

1. **Database searching:** structured queries in discipline-appropriate indexes.
2. **Known-item searching:** exact title, author, identifier, standard number, case, statute, dataset, or quotation.
3. **Backward citation searching:** inspect references cited by a key source.
4. **Forward citation searching:** find later work that cites it, including replication, criticism, and correction.
5. **Related-record searching:** use indexing relationships or similarity tools.
6. **Author and organization searching:** find a research program, regulator, standards group, or maintainer's body of work.
7. **Registry searching:** find preregistrations, trials, protocols, filings, standards, vulnerabilities, legislation, or official records.
8. **Grey-literature searching:** find reports, theses, evaluations, working papers, conference material, and unpublished or non-commercial evidence.
9. **Repository and issue searching:** inspect source code, commits, releases, issues, design proposals, and tests for technical questions.
10. **Expert consultation:** identify terminology, missing evidence, implementation knowledge, and contested interpretations. Treat expert statements as evidence with their own provenance and conflicts, not as a substitute for the underlying record.
11. **Contradiction searching:** search for harms, null results, failed replications, critiques, retractions, enforcement actions, and alternative mechanisms.

Citation searching is especially valuable for interdisciplinary questions, concepts with unstable vocabulary, and newer terminology applied to older work.

### 4.6 Balance recall and precision

- **Recall or sensitivity:** relevant records retrieved divided by all relevant records in the source.
- **Precision:** relevant records retrieved divided by all records retrieved.

You usually cannot know the true denominator for recall, but the concepts are still useful. Missing one decisive source may be more costly than screening many irrelevant results in a high-stakes review. In a rapid review, precision may matter more, but the resulting omission risk must be stated.

Improve recall by:

- adding controlled vocabulary and observed variants;
- removing poorly indexed concepts;
- searching more source classes;
- using citation chains;
- including grey literature, preprints, non-English evidence, and unpublished results when relevant;
- widening date or geography limits when the rationale is weak.

Improve precision by:

- adding a concept that is consistently represented in records;
- using proximity and field restrictions;
- narrowing source types or contexts through explicit eligibility;
- separating a complex question into several focused searches;
- screening with clear inclusion criteria rather than over-constraining the query.

### 4.7 Validate the search

Before scaling it:

- confirm that known relevant sources are retrieved;
- sample included and excluded results;
- inspect why obvious false positives appear;
- inspect whether one query term dominates;
- compare results across source classes;
- check spellings, parentheses, field codes, Boolean logic, subject headings, limits, and date fields;
- have an experienced searcher review a consequential strategy.

The PRESS guideline identifies six core review areas: translation of the question, Boolean and proximity operators, subject headings, text words, spelling/syntax/line numbers, and appropriate limits or filters. Cochrane and PRISMA-S recommend peer review and transparent reporting of consequential searches.

### 4.8 Keep a search log

For every search, record:

- research question or subquestion;
- database, platform, site, repository, registry, or tool;
- exact query as executed;
- filters and limits;
- coverage dates and search date/time;
- result count;
- export or capture location;
- reviewer;
- changes from the prior query and why;
- known relevant sources found or missed;
- notes about ranking, personalization, login state, geography, or unstable results.

PRISMA-S has 16 reporting items for systematic-review searches. Even when a project is less formal, its principle is useful: another person should be able to understand what was searched, when, with which limits, and how records moved into the evidence set.

### 4.9 Define a stopping rule

“Stop when nothing new appears” is too vague by itself. Use a mode-appropriate rule.

Possible stopping conditions:

- the authoritative current source for a known fact has been located, authenticated, and checked for updates;
- every primary subquestion has at least one fit-for-purpose source or is explicitly marked as an evidence gap;
- two consecutive search iterations add no new material concept, source class, contradiction, or decision-relevant evidence;
- backward and forward citation checks on the decisive sources are complete;
- known relevant sources are retrieved by the final strategy;
- planned databases and grey-literature sources have been searched;
- the remaining uncertainty cannot be reduced within the approved time, access, privacy, or cost constraints;
- additional evidence is unlikely to change the decision at the specified threshold.

Record which rule was used and what remains unsearched.

### 4.10 Use AI as a search assistant, not evidence

AI can help:

- propose vocabulary and query variants for testing;
- cluster retrieved records;
- identify possible missing concepts;
- transform a reviewed query into another database's syntax for human verification;
- flag claims, citations, or contradictions for review.

AI output is not a source. Models can invent titles, identifiers, quotations, and consensus; omit adverse evidence; conflate versions; and make a partial search look complete. Verify every candidate source in the underlying system, preserve the actual query and record, and disclose material automation in a formal review.

---

## 5. Source hierarchy and source fitness

There is no universal source ladder. The ACRL framework treats authority as constructed and contextual, and the Oxford Centre for Evidence-Based Medicine warns that its evidence levels are a shortcut to the *likely* best evidence, not a substitute for judgment. A weak systematic review is not automatically stronger than a well-conducted primary study, and a randomized trial is not the right source for every question.

### 5.1 Start with claim-source fit

Use a hierarchy within each question type.

| Claim | Start with | Then use | Common mistake |
|---|---|---|---|
| Current law or regulation | Enacted text, official register, controlling decision | Regulator guidance; qualified commentary for interpretation | Citing a blog, proposal, summary, or outdated consolidation as the law |
| What an organization officially did or said | Original filing, announcement, transcript, contract, policy, or direct record | Independent reporting to test context and omissions | Treating the organization's account as independent proof of impact |
| Current product capability | Normative specification, official versioned docs, code, release notes, reproducible test | Independent testing and issue evidence | Relying on a search snippet or old tutorial |
| Numeric public statistic | Original dataset and methodology | Official analysis; strong independent analysis | Repeating a chart without denominator, period, units, or revision status |
| Comparative or causal effect | High-quality synthesis suited to the question; then strong primary studies | Replications, subgroup and implementation evidence | Ranking by publication type without checking bias, directness, or heterogeneity |
| Experience, meaning, or acceptability | Direct testimony and well-conducted qualitative research in the relevant population | Qualitative synthesis, complaints, support and observational evidence | Treating lived experience as “low-level” because it is not experimental |
| Prevalence or incidence | Representative measurement with clear denominator and sampling | Administrative data and triangulating surveys | Generalizing from convenience samples or platform users |
| Historical event | Contemporaneous primary records and artifacts | Critical historical scholarship and corroborating testimony | Treating a later recollection or single archive as complete |
| Current event | Direct record and verified on-the-ground evidence | Multiple independent reputable reports | Counting syndicated copies as independent confirmation |
| Best practice or recommendation | Current standard or guideline with transparent evidence method | Primary evidence, implementation data, stakeholder values | Treating a vendor checklist or inherited convention as consensus |

“Primary” means closest to the event, data, or decision—not automatically unbiased. A company's filing is primary evidence of what it filed; it may not independently prove the market effect it claims. An eyewitness is primary for what they perceived, but perception, vantage point, memory, and incentives still matter.

### 5.2 Evaluate every material source across dimensions

| Dimension | Questions |
|---|---|
| Identity | Who created, funded, published, and maintains it? Are credentials and roles verifiable? |
| Authority for this claim | Does the creator have direct access, relevant expertise, legal authority, or lived experience suited to the question? |
| Directness | Does the evidence measure the target population, context, outcome, version, and time, or require transfer and inference? |
| Method | How were data generated, selected, analyzed, and checked? Are definitions, denominators, instruments, exclusions, and code available? |
| Independence | Is the source independent of the claim maker and other sources? What financial, political, organizational, or reputational interests exist? |
| Completeness | Are unfavorable results, missing data, limitations, and relevant alternatives visible? |
| Currency and version | Is it current enough? Has the underlying system, law, dataset, or evidence changed? |
| Stability | Is there a persistent identifier, version, archive, or official record? Could the page change silently? |
| Correction status | Has it been corrected, updated, withdrawn, superseded, or retracted? |
| Corroboration | Do independent sources using different data or methods agree? Are they actually independent? |
| Accessibility and inspectability | Can a reviewer access enough of the source and method to evaluate the claim? |
| Applicability | Would the evidence transfer to the intended users, jurisdiction, device, organization, or decision? |

Do not reduce these dimensions to one opaque score. A source can be current but methodologically weak, authoritative but conflicted, or rigorous but indirect.

### 5.3 Separate publication signals from evidence quality

Useful signals include peer review, editorial standards, transparent funding, preregistration, data and code availability, persistent identifiers, named authors, and a correction policy. None proves a specific claim.

Check the work itself:

- Is the design capable of answering the question?
- Were outcomes and analysis selected before results were known?
- Is the sample adequate and relevant?
- Are comparison groups valid?
- Are measures reliable and definitions stable?
- Are missing data and exclusions explained?
- Are effect size and uncertainty reported, not only statistical significance?
- Are conclusions consistent with the results?
- Is the evidence independent or a restatement of the same source?
- Are conflicts and limitations disclosed?

Use domain-specific appraisal tools for high-stakes work. GRADE, for example, assesses certainty across a body of evidence and considers risk of bias, inconsistency, indirectness, imprecision, and dissemination bias. It does not merely label individual studies by design.

### 5.4 Handle source classes honestly

#### Systematic reviews

Prefer reviews with a clear question, protocol, reproducible search, explicit selection, appropriate risk-of-bias assessment, suitable synthesis, and current coverage. Check whether a newer decisive study or correction changes the conclusion.

#### Primary research

Inspect the actual methods and results. Abstracts and press releases often omit limitations. A preprint can provide timely evidence, but its review status and volatility must be visible.

#### Official and first-party sources

Use them for official rules, records, product state, and attributable claims. Seek independent evidence for performance, impact, controversy, and comparisons in which the source has an interest.

#### Journalism

Use strong reporting for current events, document discovery, direct interviews, and context. Trace important factual claims to named documents or direct evidence where possible. Distinguish original reporting from syndicated or derivative coverage.

#### Expert statements

Record the person's relevant expertise, role, access to evidence, date, question asked, and conflicts. Distinguish factual testimony from interpretation or recommendation.

#### Community, forum, review, and social content

These sources can reveal language, hypotheses, edge cases, perceived harm, and direct experience. They do not establish prevalence or representativeness without an appropriate sampling design. Preserve context and privacy; do not expose personal information unnecessarily.

#### Grey literature

Reports, theses, evaluations, standards drafts, working papers, and conference material can reduce publication bias and provide operational detail. Appraise methods, sponsorship, status, and version carefully.

#### Search snippets and AI summaries

Treat them as discovery aids only. They can be truncated, stale, synthesized, or detached from the source's qualifications.

### 5.5 Count independence, not links

Ten articles repeating one press release are one evidence lineage, not ten confirmations. Map dependencies:

- Does the report use the same dataset?
- Does it quote the same unnamed source?
- Is it syndicated copy?
- Does a review include the primary study being counted separately?
- Are several analyses produced by the same team with overlapping samples?
- Did all sources derive the claim from one incorrect document?

Triangulation is strongest when sources differ in authorship, incentives, data, and method yet converge on the same material claim.

---

## 6. Provenance and traceability

W3C PROV defines provenance in terms of the entities, activities, and agents involved in producing a thing. This is a useful mental model for research:

- **Entity:** source document, dataset, interview, image, code version, extracted claim, table, or final report.
- **Activity:** collection, transcription, filtering, calculation, translation, transformation, appraisal, or synthesis.
- **Agent:** author, publisher, researcher, institution, tool, model, reviewer, or decision owner.

Provenance helps assess trust and reproduce work; it does not prove that a claim is true. A complete chain can faithfully trace false source material.

### 6.1 Maintain a source record

For each material source, capture:

```yaml
source_id: S-001
title: Exact source title
creator: Person or organization
publisher_or_host: Publisher, registry, repository, or domain
source_type: standard | law | dataset | study | filing | interview | documentation | news | other
canonical_url: https://...
persistent_id: DOI, ISBN, standard number, case number, commit SHA, dataset ID, or null
publication_date: YYYY-MM-DD or best available precision
update_date: YYYY-MM-DD or null
accessed_at: YYYY-MM-DDTHH:MM:SSZ
version: Version, edition, release, revision, or commit
status: current | draft | corrected | superseded | withdrawn | retracted | unknown
authoritative_for: The claims this source is positioned to establish
funding_and_conflicts: Known funding, role, incentives, or not reported
method_notes: How the evidence was produced
rights_and_access: License, access restriction, quotation or media limits
archive_or_capture: Stable archive, repository path, or checksum when permitted
reviewer: Person who checked the record
```

Use the canonical source rather than an aggregator when possible. Preserve a lawful snapshot or checksum for unstable, consequential material. Do not archive sensitive, copyrighted, paywalled, or personal data in ways that violate rights or policy.

### 6.2 Maintain a claim-evidence ledger

A bibliography shows what was read. A ledger shows how the answer was built.

| Claim ID | Atomic claim | Source and locator | Evidence role | Extraction or calculation | Appraisal | Contradiction | Confidence | Owner |
|---|---|---|---|---|---|---|---|---|
| C-01 | Exact proposition | S-001, §4.2 / p. 17 / table 3 / commit | Direct support, context, challenge, or background | Quotation under limit, paraphrase, formula, or code step | Directness, method, currency, conflict | C-01-X | High, moderate, low, or unresolved with rationale | Reviewer |

Every externally checkable material statement should map to one or more claims. Put locators at the level needed to verify the statement: section, page, table, paragraph, timestamp, record ID, or code line.

### 6.3 Record transformations

If a final value was not copied directly, preserve:

- original variable and definition;
- source units and denominator;
- filters and exclusions;
- joins and deduplication logic;
- formula or code;
- software and version;
- rounding;
- missing-data treatment;
- time-zone, currency, and inflation conversion;
- chart or table generation step;
- reviewer and validation result.

For example, “conversion rate increased 12%” is incomplete. Record whether that means a 12% relative increase or 12 percentage points, the baseline, numerator, denominator, dates, segments, exclusions, and whether repeated users were deduplicated.

### 6.4 Track versions, corrections, and retractions

Before relying on a source:

- check its canonical page;
- inspect update, correction, erratum, withdrawal, and retraction notices;
- check whether a standard, statute, documentation page, dataset, or model has a newer version;
- confirm that a cited passage still appears in the version used;
- distinguish an updated source from a source that silently changed;
- record the date on which current status was checked.

Crossref's Crossmark can expose corrections, retractions, and updates for participating scholarly content, including downloaded PDFs. Crossref also cautions that the presence of Crossmark is not itself a guarantee; it makes publisher update practices easier to inspect.

### 6.5 Preserve quotation and paraphrase integrity

For quotations:

- transcribe exactly;
- retain enough surrounding context to preserve meaning;
- record speaker, role, date, venue, and locator;
- mark omissions and insertions according to the applicable style;
- verify translated quotations with a qualified speaker when stakes warrant it;
- observe copyright and source word limits.

For paraphrases:

- preserve actor, action, condition, scope, time, units, and uncertainty;
- do not turn “may” into “will,” association into causation, or a subgroup finding into a population-wide claim;
- cite the primary source rather than the intermediary that paraphrased it when possible.

### 6.6 Preserve media and data provenance

For images, video, and audio, record creator, capture date if known, location if relevant and safe, original asset, edit history, license, consent, and synthetic or generated status. Content Credentials based on C2PA can help trace origin and edits when present, but provenance metadata does not establish that the depicted claim is true.

For datasets, record collector, collection purpose, sampling frame, field dates, definitions, schema, processing, coverage, missingness, revision policy, license, and lineage. “Official data” can still be incomplete, revised, or unsuitable for a different denominator.

### 6.7 Make the synthesis traceable

The final document should distinguish:

- sourced fact;
- calculated result;
- interpretation;
- unresolved dispute;
- assumption;
- recommendation;
- owner decision.

Readers should be able to move from a conclusion to its supporting claims, from each claim to its sources, and from each transformed result to the method that produced it.

---

## 7. Fact-checking

Fact-checking is a claim-level process. General impressions such as “the article seems credible” are not enough.

### 7.1 Define the claim exactly

Capture:

- exact wording;
- speaker or author;
- original venue and date;
- intended referent;
- whether it is factual, predictive, causal, interpretive, or normative;
- the time, geography, jurisdiction, population, version, denominator, and comparison it implies;
- what evidence would confirm, qualify, or refute it.

Some statements are not fully fact-checkable. A value judgment can contain checkable premises, but evidence cannot prove a preference. A prediction can be assessed for assumptions, base rates, model performance, and later outcome; it cannot be labeled false merely because the future is uncertain.

### 7.2 Atomize compound claims

> “The new flow is faster, safer, and preferred by customers.”

This contains at least three claims:

1. completion time decreased under a defined comparison;
2. a defined security outcome improved or risk decreased;
3. a defined customer population preferred the flow under a stated method.

Each needs separate evidence. Do not let one supported part lend credibility to unsupported parts.

### 7.3 Run the verification sequence

1. **Locate the origin.** Find the earliest available record, not only a repetition.
2. **Authenticate the source.** Verify identity, canonical host, authorship, date, version, and whether media or documents were altered.
3. **Read laterally.** Investigate the creator, funder, reputation, conflicts, and external assessments outside the source's own page.
4. **Read vertically.** Once source suitability is established, inspect the complete document, method, definitions, footnotes, data, and limitations.
5. **Check the direct evidence.** Does it establish this exact claim or only a nearby one?
6. **Check context.** Restore omitted time periods, denominators, comparisons, qualifications, and surrounding quotation context.
7. **Check currency and status.** Look for later versions, corrections, retractions, legal changes, and product updates.
8. **Seek independent corroboration.** Use another evidence lineage when the claim is consequential or the first source has a material interest.
9. **Search for contradiction.** Look for null results, alternative explanations, unfavorable data, and informed criticism.
10. **Record the verdict and rationale.** Use a conclusion precise enough to show what is supported and what remains uncertain.

The International Fact-Checking Network's code emphasizes nonpartisanship and fairness, transparency of sources, funding and organization, transparent methods, and open corrections. It also expects significant evidence to be identified so readers can replicate the work and calls for explaining the use of secondary sources when suitable primary sources are unavailable.

### 7.4 Use claim-specific checks

#### Numbers and statistics

Verify:

- numerator and denominator;
- unit and scale;
- absolute versus relative change;
- time period and comparison baseline;
- nominal versus inflation-adjusted currency;
- seasonally adjusted versus raw values;
- population and sampling frame;
- revisions and provisional status;
- uncertainty interval and rounding;
- whether totals and percentages reconcile;
- whether a chart axis or truncation distorts the effect.

Recalculate decisive values from source data when feasible.

#### Quotations

Find the recording, transcript, document, or earliest attributable record. Check speaker, date, sequence, ellipses, translation, and whether the excerpt reverses or narrows the original meaning.

#### Causal claims

Ask:

- Did the cause precede the effect?
- Is there a valid comparison?
- Could selection, confounding, measurement, regression to the mean, seasonality, concurrent changes, or survivorship explain it?
- Is the mechanism plausible and supported?
- Do multiple methods converge?
- Does the source itself claim causation, or only association?

#### “First,” “only,” “largest,” and “best” claims

These require a defined universe and a search capable of supporting the superlative. If coverage is incomplete, narrow the wording: “the earliest example identified in the sources searched” is more honest than “the first ever.”

#### Current-state claims

Check as close to publication as needed. Record the check time and time zone for prices, schedules, officeholders, active policies, software versions, security advisories, and live service status.

#### Legal claims

Identify jurisdiction, authority, effective date, applicability, exceptions, enforcement, and whether the text is proposed, enacted, in force, stayed, superseded, or interpreted by a controlling decision. Obtain qualified legal review when people will rely on the answer.

#### Technical claims

Identify product and dependency versions, platform, configuration, inputs, and observed result. Prefer a reproducible test in addition to documentation when behavior matters.

#### Images and video

Check original upload, earlier occurrences, metadata when reliable, landmarks, weather, shadows, language, audio continuity, edit boundaries, and whether the media is synthetic or reused from another event. Avoid claiming authenticity from one forensic signal.

### 7.5 Triangulate properly

Corroboration should answer one of three needs:

- **replication:** independent evidence measures the same proposition;
- **complement:** another method fills a different part of the claim;
- **challenge:** a credible source tests an alternative explanation or contradiction.

Do not require “two sources” mechanically. One authoritative registry may settle a filing date; five commentary articles may still fail to establish it. Increase corroboration with consequence, novelty, conflict, and source incentive.

### 7.6 Resolve conflicts without forced balance

When credible sources disagree:

1. confirm they address the same population, measure, period, version, and question;
2. compare definitions and denominators;
3. inspect methods, data quality, directness, and missingness;
4. map whether evidence is independent;
5. check publication and update chronology;
6. distinguish factual disagreement from value or model disagreement;
7. consult a qualified reviewer when methods require expertise;
8. report the disagreement and its decision impact if it remains unresolved.

Do not average incompatible numbers or give equal weight solely because two positions exist.

### 7.7 Use precise verdicts

Binary true/false labels can hide scope. Prefer findings such as:

- supported by the specified source for the stated period;
- supported with a narrower scope;
- directionally supported, but magnitude uncertain;
- based on correct data presented with a misleading denominator;
- unsupported by the available evidence;
- contradicted by stronger or more direct evidence;
- not currently verifiable;
- opinion or prediction with factual premises checked separately;
- out of date as of a specified date.

### 7.8 Correct openly

Maintain:

- a visible route to report errors;
- an owner and response standard;
- distinction between cosmetic updates and material corrections;
- correction date and description;
- preservation of the original record when appropriate;
- notification or redistribution when a material error was widely circulated;
- re-review of downstream claims that depended on the corrected fact.

A correction is part of trustworthy research, not evidence that the process failed irredeemably.

---

## 8. Uncertainty

Uncertainty is not one quantity. Good research names its source, evaluates whether it could change the conclusion, and communicates it near the claim.

### 8.1 Diagnose the source of uncertainty

| Type | Example | Useful response |
|---|---|---|
| Semantic | “Active user” has different definitions | Define the term and test alternate definitions |
| Source | Authorship, authenticity, or completeness is unclear | Authenticate, triangulate, or lower confidence |
| Measurement | Instrument, proxy, labeling, or self-report is imperfect | Report validity, error, and sensitivity to measurement choices |
| Sampling | Sample may not represent the target population | Report frame, selection, response, weighting, and interval |
| Missing data | Outcomes, records, groups, or negative results are absent | Analyze missingness, seek other sources, bound conclusions |
| Statistical | Estimate varies because of finite data | Report interval or distribution; avoid false precision |
| Model | Result depends on model structure or assumptions | Compare plausible models and run sensitivity analysis |
| Causal | Alternative explanations remain | Use stronger design, test mechanisms, and use causal language cautiously |
| External validity | Evidence may not transfer to another context | State differences in population, setting, time, implementation, and incentives |
| Temporal | The fact or system may change quickly | Add “as of” date, monitor, and define expiry |
| Structural | The system or relevant mechanisms are incompletely understood | Describe plausible alternatives and avoid a closed-world conclusion |
| Disagreement | Experts or credible studies interpret evidence differently | Explain whether disagreement concerns data, method, model, or values |
| Decision | Thresholds, values, and tradeoffs are unsettled | Separate evidence certainty from preference and decision authority |

More data mainly reduces some sampling uncertainty. It may not repair biased measurement, missing populations, invalid causal assumptions, or a question that uses the wrong outcome.

### 8.2 Separate evidence, confidence, and likelihood

- **Evidence quality:** how trustworthy and fit the supporting record is.
- **Confidence in a conclusion:** judgment that the conclusion is robust to the important limitations.
- **Likelihood or probability:** quantified or calibrated chance of an event or parameter.

Do not translate “high confidence” into a numeric probability unless a defined method supports that mapping. The IPCC uses explicit calibrated vocabularies and bases confidence on evidence and agreement; its terms work because the scale and process are defined. Casual use of “likely” and “high confidence” does not inherit that calibration.

### 8.3 Assess confidence at the claim level

Use a transparent rationale rather than a mysterious score.

Consider:

- source quality and correction status;
- directness to the exact claim;
- consistency across independent evidence;
- precision or range;
- risk of missing evidence and selective reporting;
- applicability to the target context;
- temporal stability;
- sensitivity to analytic choices;
- plausible alternative explanations;
- whether disagreement is factual, methodological, or value-based.

Suggested labels:

| Label | Meaning |
|---|---|
| High | Multiple strong, direct, current lines of evidence converge; remaining uncertainty is unlikely to change the practical conclusion |
| Moderate | Evidence supports the conclusion, but a material limitation or transfer question could change magnitude, scope, or implementation |
| Low | Evidence is indirect, sparse, inconsistent, methodologically weak, or unstable; treat the conclusion as provisional |
| Unresolved | Available evidence cannot distinguish important alternatives or verify the claim |

Always attach a one-sentence rationale. Confidence applies to a particular claim in a particular context, not to a source or report as a whole.

### 8.4 Quantify only when defensible

When the method supports it, report:

- point estimate;
- interval or distribution;
- unit and denominator;
- time horizon;
- assumptions;
- baseline or reference case;
- sensitivity or scenario range;
- threshold that matters to the decision.

Avoid decorative precision. A model with weak inputs does not become reliable because it outputs three decimals.

### 8.5 Write uncertainty so it can guide action

Useful pattern:

> **What the evidence supports:** [bounded conclusion]. **Main uncertainty:** [specific gap and cause]. **Decision impact:** [what could change]. **Reasonable action now:** [proportionate step]. **Update trigger:** [new evidence, date, or event].

Examples:

- Weak: “More research is needed.”
- Stronger: “Two observational studies associate the change with lower abandonment, but both launched it alongside reminder emails, so the effect of the interface alone is uncertain. Use a staged test that isolates the interface change before committing to a full rollout.”
- Weak: “This is probably compliant.”
- Stronger: “The current regulation applies to organizations above the stated threshold, but the service's status under the sector exemption is unresolved. Do not publish the compliance claim until counsel confirms applicability.”

### 8.6 Put uncertainty beside the conclusion

Do not hide qualifications in a final limitations section. Keep scope, time, version, denominator, confidence, and exceptions close to the claim they govern.

### 8.7 Distinguish unknown from zero

- no evidence of harm is not evidence of no harm;
- no reported incidents is not zero incidents;
- not statistically significant is not proof of no effect;
- missing data is not a negative value;
- an unmeasured population is not represented by the measured average;
- lack of contradiction is not independent confirmation.

---

## 9. Synthesis

Synthesis is the disciplined integration of evidence into an answer. It is not a sequence of source summaries.

### 9.1 Build the evidence table before drafting prose

For each subquestion, capture:

| Field | Purpose |
|---|---|
| Claim or finding | Atomic proposition supported by the evidence |
| Population/context | Who, where, when, jurisdiction, version, and conditions |
| Method/source type | How the evidence was produced |
| Result | Magnitude, direction, range, or qualitative finding |
| Directness | How closely it answers the target question |
| Quality concerns | Bias, measurement, missingness, conflict, or status |
| Independence | Relationship to other evidence lineages |
| Contradictions | Conflicting findings or alternative explanations |
| Confidence | Label and rationale |
| Decision implication | What this changes, if anything |

This table makes selective emphasis easier to detect.

### 9.2 Group evidence before combining it

Group by decision-relevant dimensions established in advance:

- population or user group;
- context, jurisdiction, or organization type;
- intervention or option;
- comparator;
- outcome definition;
- time horizon;
- study or evidence type;
- product or standard version;
- risk level;
- mechanism;
- implementation maturity.

Do not pool unlike outcomes because they share a convenient label. “Engagement” might mean visits, time, clicks, retention, or self-reported interest. These are not interchangeable.

### 9.3 Weight evidence explicitly

Weight by:

- fitness for the exact question;
- methodological strength;
- directness and applicability;
- precision;
- independence;
- consistency;
- recency where the claim is time-sensitive;
- completeness and correction status;
- conflict and incentive.

Do not count studies or links as votes. Cochrane warns that vote counting by statistical significance is unacceptable: significance depends on sample size and does not communicate effect magnitude. When formal meta-analysis is not possible, report the actual synthesis method, display the data, and describe its limits rather than writing only “a narrative synthesis was conducted.” The SWiM guideline provides reporting items for synthesis without meta-analysis.

### 9.4 Separate layers of inference

Use an inference ladder:

1. **Observed:** what the source directly records.
2. **Calculated:** what a reproducible transformation produces.
3. **Pattern:** what appears across comparable observations.
4. **Explanation:** the mechanism or causal account proposed.
5. **Transfer:** why it may apply in the target context.
6. **Recommendation:** what should be done given evidence, values, constraints, and risk.

Each step adds assumptions. Cite and explain the bridge, especially between pattern and explanation and between evidence and recommendation.

### 9.5 Handle contradictions as data

Create a contradiction matrix:

| Disputed claim | Evidence A | Evidence B | Difference that may explain it | Resolution | Decision impact |
|---|---|---|---|---|---|

Common causes include:

- different definitions;
- different populations or contexts;
- changing conditions over time;
- measurement or implementation differences;
- small samples and imprecision;
- selective reporting;
- different models or assumptions;
- conflicting values rather than conflicting facts.

If the conflict cannot be resolved, preserve it. The correct synthesis may be conditional: the effect appears in one setting but not another.

### 9.6 Look for heterogeneity before an average

An average can hide that an intervention helps one group and harms another. Inspect:

- direction and magnitude across groups;
- baseline risk;
- delivery fidelity;
- dose or exposure;
- environment and incentives;
- accessibility and language;
- expertise or experience;
- time and learning effects;
- adverse outcomes;
- who is absent from the data.

Pre-specify important subgroup questions when possible. Post-hoc patterns are hypotheses unless independently confirmed.

### 9.7 Synthesize qualitative evidence without erasing people

For experience and meaning:

- preserve context and participant language where rights allow;
- distinguish a recurring theme from its prevalence;
- report negative cases and variation;
- separate participant interpretation from researcher interpretation;
- show how themes were coded, grouped, and challenged;
- do not treat frequency as the only marker of importance;
- identify power, access, and sampling limits;
- connect the finding to the population and setting in which it arose.

A rare experience can be decision-critical when it reveals severe harm or an exclusion pathway.

### 9.8 Move from evidence to a decision

Evidence does not choose values. A recommendation should state:

- decision and owner;
- options considered, including the baseline;
- expected benefits and harms;
- who receives each benefit or harm;
- certainty and key unknowns;
- legal, ethical, accessibility, privacy, security, cost, and operational constraints;
- reversibility and recovery;
- threshold or principle used to choose;
- monitoring and rollback condition.

Strong evidence for an effect can still support different decisions when costs, rights, preferences, or risk tolerance differ.

### 9.9 Write the synthesis in decision order

Recommended structure:

1. **Answer:** the bounded conclusion or current best judgment.
2. **Decision implication:** what the evidence supports doing now.
3. **Scope:** who, where, when, version, and conditions.
4. **Key evidence:** strongest direct lines, with magnitude where meaningful.
5. **Contradictions and alternatives:** what does not fit and why.
6. **Uncertainty:** specific limits and what could change the answer.
7. **Evidence gaps:** what was not found or could not be accessed.
8. **Method:** question, search dates and sources, eligibility, appraisal, and synthesis approach.
9. **Provenance:** claim ledger, source records, calculations, and update history.
10. **Next check:** owner, trigger, and review date.

Do not bury the answer after a chronological literature tour.

---

## 10. End-to-end workflow

### Phase 1: Orient

1. Identify the decision, owner, affected people, deadline, and consequence of error.
2. Inspect existing local evidence, terminology, behavior, and constraints.
3. State the research mode and evidence standard.
4. Resolve ambiguities that would change scope or result.

**Output:** research contract.

### Phase 2: Frame

1. Classify the primary and secondary question types.
2. Build the question tree.
3. Select a fit-for-purpose framework such as PICO, PCC, SPIDER, PICOC, or a plain-language decision frame.
4. Define eligibility, comparison, outcomes, harms, context, and time.
5. State what evidence would change the decision.

**Output:** protocol or question brief.

### Phase 3: Design the search

1. Build the source map and concept table.
2. Identify databases, official records, registries, repositories, grey literature, and affected communities.
3. Write and test source-specific queries.
4. Define search limits, review method, and stopping rule.
5. Peer-review the strategy when consequence warrants it.

**Output:** search plan and initial log.

### Phase 4: Retrieve and screen

1. Run searches and save exact queries.
2. Deduplicate without losing source lineage.
3. Screen against explicit criteria.
4. Record exclusions at the appropriate level.
5. Use backward, forward, related-record, and contradiction searching.
6. Update concepts and document justified protocol changes.

**Output:** selected evidence set and selection record.

### Phase 5: Appraise and verify

1. Create source records and claim ledger entries.
2. Appraise authority, method, directness, independence, currency, and correction status.
3. Atomize and fact-check material claims.
4. Recalculate decisive values where feasible.
5. Seek domain review and independent corroboration.

**Output:** verified evidence table, contradiction matrix, and provenance packet.

### Phase 6: Synthesize

1. Group comparable evidence.
2. Assess patterns, heterogeneity, mechanisms, and gaps.
3. Rate claim-level confidence with reasons.
4. Separate observation, calculation, interpretation, transfer, and recommendation.
5. Test whether alternative explanations would change the conclusion.

**Output:** draft synthesis.

### Phase 7: Challenge

1. Run an adversarial search for disconfirming evidence.
2. Ask a qualified reviewer to inspect claims, not merely prose.
3. Verify citations, locators, quotes, units, dates, versions, and links.
4. Check whether wording overstates certainty or scope.
5. Confirm that affected groups and material harms are not absent from the evidence packet.

**Output:** reviewed synthesis and issue log.

### Phase 8: Publish and maintain

1. Lead with the bounded answer and action.
2. Publish method, sources, limits, provenance, and corrections route appropriate to the audience.
3. Assign owner and next review date.
4. Monitor update triggers.
5. Correct material errors and re-evaluate downstream conclusions.

**Output:** maintained research artifact.

---

## 11. Reusable templates

### 11.1 Research brief

```markdown
# Research brief: [title]

## Decision
[Who must decide what, by when, for whom?]

## Why it matters
[Benefits, harms, cost, and consequence of error]

## Primary question
[One answerable question]

## Subquestions
1. [Reality]
2. [Cause or comparison]
3. [Experience]
4. [Implementation]
5. [Risk and constraints]

## Scope
- Population/system:
- Context/jurisdiction/version:
- Comparison:
- Outcomes and harms:
- Time horizon:

## Out of scope
- [Exclusion and rationale]

## Evidence standard
[Required source types, corroboration, reviewers, and confidence]

## What would change the decision
[Threshold or decisive evidence]

## Mode and deadline
[Lookup, orientation, rapid, systematic, or living; due date]

## Owners
- Decision:
- Research:
- Domain review:
- Maintenance:
```

### 11.2 Concept table

```markdown
| Concept | Official/controlled terms | Natural-language terms | Older/variant terms | Ambiguities | Tested notes |
|---|---|---|---|---|---|
| | | | | | |
```

### 11.3 Search log

```markdown
| Search ID | Subquestion | Source/platform | Exact query | Filters/coverage | Run at | Results | Export | Change and rationale | Reviewer |
|---|---|---|---|---|---|---:|---|---|---|
| Q-001 | | | | | | | | | |
```

### 11.4 Source record

```markdown
## S-001 — [title]

- Creator:
- Publisher/host:
- Source type:
- Canonical URL:
- Persistent identifier:
- Published/updated:
- Accessed:
- Version/status:
- Authoritative for:
- Method:
- Funding/conflicts:
- Rights/access:
- Correction check:
- Stable capture/checksum:
- Reviewer notes:
```

### 11.5 Claim-evidence ledger

```markdown
| Claim ID | Atomic claim | Source + locator | Role | Extraction/calculation | Quality/directness | Contradiction | Confidence + reason | Status |
|---|---|---|---|---|---|---|---|---|
| C-001 | | | | | | | | draft/verified/disputed |
```

### 11.6 Contradiction record

```markdown
## X-001 — [disputed claim]

- Evidence supporting:
- Evidence challenging:
- Same question/population/definition/period?
- Independence of evidence:
- Likely explanation:
- What remains unresolved:
- Decision impact:
- Resolution owner and trigger:
```

### 11.7 Confidence statement

```markdown
**Conclusion:** [bounded claim]
**Confidence:** [high/moderate/low/unresolved]
**Why:** [quality, directness, consistency, precision, and currency]
**Main uncertainty:** [specific source]
**Could change if:** [new evidence or altered assumption]
**Action now:** [proportionate response]
**Review trigger:** [date/event/version]
```

### 11.8 Synthesis outline

```markdown
# [Decision-oriented title]

## Answer
[Bounded conclusion]

## Recommended action
[Action, owner, and conditions]

## Scope
[Population, context, jurisdiction, version, and dates]

## What the evidence shows
### [Subquestion 1]
### [Subquestion 2]

## Contradictions and alternatives
[Material disagreement and resolution]

## Uncertainty and limits
[Claim-level limits and decision impact]

## Evidence gaps
[Missing or inaccessible evidence]

## Method
[Question, sources, searches, dates, eligibility, appraisal, synthesis]

## Provenance and calculations
[Ledgers, records, code, and captures]

## Ownership and next review
[Owner, corrections route, trigger, date]
```

---

## 12. Failure modes

### Starting with keywords instead of a decision

**Failure:** the search becomes a broad collection of interesting material.
**Fix:** write the decision, question tree, and evidence threshold first.

### Treating PICO as universal

**Failure:** qualitative, legal, technical, or complex-system questions are forced into an intervention template.
**Fix:** classify the question and use PCC, SPIDER, PICOC, or a tailored frame.

### Searching only one database or one web engine

**Failure:** the evidence set reflects platform coverage and ranking rather than the question.
**Fix:** map source producers and use multiple source classes and search modes.

### Searching every concept at once

**Failure:** poorly indexed outcomes or comparisons eliminate relevant records.
**Fix:** test which concepts are represented and optimize recall and precision deliberately.

### Using source prestige as a verdict

**Failure:** a respected institution's claim is accepted without checking method, directness, or conflict.
**Fix:** appraise the exact claim-source fit across explicit dimensions.

### “Two sources say it”

**Failure:** derivative articles or overlapping datasets are counted as independent corroboration.
**Fix:** map evidence lineage and seek different authorship, data, and method.

### Bibliography without provenance

**Failure:** reviewers cannot tell which source supports which sentence or reproduce a calculation.
**Fix:** maintain claim-level locators, extractions, transformations, and source versions.

### Abstract-only appraisal

**Failure:** methods, exclusions, adverse outcomes, and limitations remain unseen.
**Fix:** inspect the complete source for material claims.

### Citation laundering

**Failure:** a secondary source cites another secondary source until the original claim disappears or changes.
**Fix:** trace to the earliest accessible evidence and document any broken link in the chain.

### Fact-checking the source rather than the claim

**Failure:** a generally reputable source is treated as correct on every detail.
**Fix:** atomize and verify each material proposition.

### Smooth prose that hides inference

**Failure:** transitions turn correlation into cause or evidence into a recommendation without showing assumptions.
**Fix:** label observation, calculation, interpretation, transfer, and recommendation.

### “More research is needed”

**Failure:** uncertainty is acknowledged without explaining its type or decision impact.
**Fix:** name the missing evidence, why it matters, what action is reasonable now, and what would trigger an update.

### Vote counting

**Failure:** the conclusion follows the number of positive studies or statistically significant results.
**Fix:** synthesize magnitude, quality, directness, precision, independence, and heterogeneity.

### Arbitrary recency limits

**Failure:** older foundational or unfavorable evidence is silently excluded.
**Fix:** justify date limits through the history of the technology, policy, or phenomenon.

### Treating absence as zero

**Failure:** no report, no measurement, or no significant result becomes “none.”
**Fix:** distinguish unobserved, unreported, undetected, and absent.

### AI-generated sources and confidence

**Failure:** plausible citations, summaries, or consensus statements are accepted from model output.
**Fix:** use AI only to generate candidates or checks; verify in the authoritative underlying source.

### No maintenance plan

**Failure:** a correct answer is reused after its sources, laws, product version, or context changed.
**Fix:** assign an owner, expiry or trigger, correction route, and change log.

---

## 13. Quality checklist

### Question and scope

- [ ] The decision, owner, affected people, deadline, and consequence of error are explicit.
- [ ] The primary question is answerable and matched to its evidence type.
- [ ] Subquestions separate descriptive, causal, experiential, implementation, legal, technical, and normative needs.
- [ ] Population, context, jurisdiction, version, comparison, outcomes, harms, and time are defined.
- [ ] Inclusion, exclusion, and stopping criteria are explicit and justified.
- [ ] The evidence threshold and what would change the decision were set before synthesis.

### Search

- [ ] The research mode is named honestly.
- [ ] The source map covers all relevant producers and locations.
- [ ] Queries use tested vocabulary and source-specific syntax.
- [ ] Controlled vocabulary and natural-language terms are combined where appropriate.
- [ ] Database, official-record, registry, repository, citation, grey-literature, and contradiction searches were used as relevant.
- [ ] Exact queries, filters, dates, coverage, result counts, and changes are logged.
- [ ] Known decisive sources are retrieved or their absence is explained.
- [ ] Consequential searches received appropriate peer review.
- [ ] Unsearched sources and resource constraints are disclosed.

### Sources and provenance

- [ ] Every material source is fit for the exact claim.
- [ ] Authority, method, directness, independence, currency, completeness, and correction status were assessed.
- [ ] First-party evidence is not treated as independent proof of impact.
- [ ] Evidence lineages are mapped; derivative repetition is not counted as corroboration.
- [ ] Each material claim has a source and precise locator.
- [ ] Versions, access dates, stable identifiers, and lawful captures are recorded.
- [ ] Calculations and transformations preserve inputs, definitions, filters, code, units, and rounding.
- [ ] Rights, privacy, licensing, and sensitive-data constraints are respected.

### Fact-checking

- [ ] Compound statements were split into atomic claims.
- [ ] Origins, context, dates, definitions, denominators, and comparisons were checked.
- [ ] Quotes were verified against the original record.
- [ ] Material statistics were reconciled or recalculated where feasible.
- [ ] Current claims were checked against the current version and update status.
- [ ] Consequential claims have independent corroboration or an explicit reason why one source is sufficient.
- [ ] Contradictory and unfavorable evidence was actively sought.
- [ ] Verdicts describe scope and do not force false binary certainty.
- [ ] A correction route and downstream correction process exist.

### Uncertainty

- [ ] Uncertainty is diagnosed by type, not mentioned generically.
- [ ] Confidence applies to an individual claim and includes a rationale.
- [ ] Numeric probability is used only with a defined, defensible method.
- [ ] Estimates include units, denominators, time, range, assumptions, and relevant thresholds.
- [ ] Unknown, unreported, and zero are distinguished.
- [ ] Limits appear near the claims they qualify.
- [ ] The synthesis states what could change the conclusion and when it should be revisited.

### Synthesis

- [ ] Evidence is organized by question and comparable group, not narrated source by source.
- [ ] Weight reflects fitness, quality, directness, precision, independence, consistency, and currency.
- [ ] Study or link counts are not used as votes.
- [ ] Heterogeneity and distributional effects are visible before an average.
- [ ] Contradictions are explained or preserved.
- [ ] Observation, calculation, interpretation, transfer, recommendation, and owner decision are distinguishable.
- [ ] Recommendations state benefits, harms, affected groups, constraints, reversibility, and monitoring.
- [ ] The answer, scope, evidence, uncertainty, method, provenance, owner, and update trigger are findable.

---

## 14. Research basis and annotated sources

This guide is a cross-domain methodological synthesis, not a formal systematic review of research methodology. Source selection prioritized current standards, official handbooks, reporting guidelines, professional codes, and primary methodological research. The practices above generalize those sources to decision-oriented product and content work; claims about a specific domain should still use that domain's current methods and qualified review.

### Question framing and review scope

- [Cochrane Handbook, Chapter 2 — Determining the scope of the review and the questions it will address](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-02) — explains how a well-formed question governs eligibility, search, extraction, synthesis, and presentation; discusses stakeholder input and PICO.
- [Cochrane Handbook, Chapter 3 — Defining inclusion criteria and grouping for synthesis](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-03) — connects the review question to prespecified eligibility and synthesis groups.
- [Cochrane Handbook, Chapter 21 — Qualitative evidence](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-21) — discusses SPICE, SPIDER, context, implementation, and qualitative question development.
- [Cooke, Smith, and Booth — Beyond PICO: the SPIDER tool for qualitative evidence synthesis](https://pubmed.ncbi.nlm.nih.gov/22829486/) — original SPIDER paper; also states that the framework needed further testing rather than presenting it as universal.
- [JBI Manual for Evidence Synthesis](https://jbi-global-wiki.refined.site/download/attachments/355599504/JBI%20Manual%20for%20Evidence%20Synthesis%202024.pdf?download=true) — source for PCC and scoping-review methods.
- [Center for Evidence-Based Management — Critically Appraised Topics](https://cebma.org/resources/frequently-asked-questions/what-is-a-cat/) — decision-oriented CAT structure including PICOC, search strategy, limitations, and recommendation.

### Search strategy and reporting

- [Cochrane Handbook, Chapter 4 — Searching for and selecting studies](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-04) — detailed guidance on source coverage, concept selection, Boolean logic, controlled vocabulary, recall and precision, citation searching, restrictions, documentation, and peer review.
- [PRISMA-S — official extension page](https://www.prisma-statement.org/prisma-search) — links the 16-item reporting checklist and explanatory paper for literature searches.
- [Rethlefsen et al. — PRISMA-S explanatory paper](https://doi.org/10.1186/s13643-020-01542-z) — reporting guidance and examples for reproducible systematic-review searches.
- [McGowan et al. — PRESS 2015 Guideline Statement](https://pubmed.ncbi.nlm.nih.gov/27005575/) — evidence-based peer review of question translation, operators, subject headings, text words, syntax, and limits.
- [ACRL Framework for Information Literacy for Higher Education](https://www.ala.org/acrl/standards/ilframework) — supports research as inquiry, contextual authority, information creation as a process, and searching as iterative strategic exploration.

### Source hierarchy and evidence certainty

- [Oxford Centre for Evidence-Based Medicine — Levels of Evidence introduction](https://www.cebm.ox.ac.uk/resources/levels-of-evidence/levels-of-evidence-introductory-document) — explicitly frames evidence levels as a likely-best-evidence shortcut requiring judgment and notes that lower-level evidence can be stronger in a specific case.
- [GRADE Book — Overview of the GRADE approach](https://book.gradepro.org/guideline/overview-of-the-grade-approach) — current official overview of certainty across a body of evidence, including risk of bias, inconsistency, indirectness, imprecision, and dissemination bias.
- [GRADE Living Map](https://book.gradepro.org/map) — identifies current, replaced, and partially updated GRADE guidance while the living book evolves.

### Provenance, versions, and correction status

- [W3C PROV Overview](https://www.w3.org/TR/prov-overview/) — defines provenance around entities, activities, and people involved in producing data or things and provides the standards family roadmap.
- [W3C PROV Model Primer](https://www.w3.org/TR/prov-primer/) — explains agent-, object-, and process-centered provenance, derivation, revision, responsibility, and time.
- [C2PA and Content Credentials Explainer](https://spec.c2pa.org/specifications/specifications/2.2/explainer/Explainer.html) — explains tamper-evident media provenance and its limits, including that provenance alone cannot establish whether content is true or complete.
- [Crossref Crossmark](https://www.crossref.org/services/crossmark/) — explains how participating publishers expose corrections, retractions, updates, and editorial metadata; also states that Crossmark's presence is not itself a guarantee.

### Fact-checking and web-source evaluation

- [Wineburg and McGrew — Lateral Reading: Reading Less and Learning More When Evaluating Digital Information](https://doi.org/10.1177/016146811912101102) — primary study comparing professional fact-checkers, historians, and students; fact-checkers more often investigated sources laterally and reached more warranted conclusions efficiently.
- [McGrew and Breakstone — Civic Online Reasoning Across the Curriculum](https://doi.org/10.1177/23328584231176451) — describes and tests instruction based on source investigation, evidence tracing, and lateral reading.
- [International Fact-Checking Network — Commitments of the Code of Principles](https://ifcncodeofprinciples.poynter.org/the-commitments) — professional requirements for fairness, source and funding transparency, transparent methodology, and corrections.

### Uncertainty and synthesis

- [IPCC Guidance Note for Lead Authors on Consistent Treatment of Uncertainties](https://www.ipcc.ch/site/assets/uploads/2010/07/uncertainty-guidance-note.pdf) — structured evaluation of evidence, agreement, confidence, likelihood, and traceable uncertainty judgments.
- [Cochrane Handbook, Chapter 12 — Synthesizing and presenting findings using other methods](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-12) — explains acceptable methods when meta-analysis is not possible, rejects vote counting by statistical significance, and requires transparent methods and limitations.
- [SWiM — Synthesis Without Meta-analysis reporting guideline](https://www.equator-network.org/reporting-guidelines/synthesis-without-meta-analysis-swim-in-systematic-reviews-reporting-guideline/) — reporting guidance for grouping studies, synthesis methods, heterogeneity, certainty, data presentation, results, and limitations when effects are not meta-analyzed.
- [Cochrane-Campbell Handbook for Qualitative Evidence Synthesis](https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-campbell-handbook-qualitative-evidence-synthesis) — current handbook covering qualitative question framing, searching, appraisal, thematic and framework synthesis, meta-ethnography, confidence, and integration with quantitative evidence.
