---
name: research
description: Frame, conduct, verify, and synthesize evidence-based research. Use for research questions, literature or market scans, source discovery, search strategies, source hierarchies, provenance, fact-checking, contradiction analysis, uncertainty, recommendations, and research reports where claims must be traceable to credible evidence.
---

# Research

## Operating principle

Produce the smallest defensible answer to a clear decision question. Keep claims traceable to sources, distinguish evidence from inference, and make uncertainty and missing evidence visible.

## Load the detailed research

For consequential, unfamiliar, disputed, or multi-source work, read the research-contract, framing, search, source, verification, uncertainty, synthesis, and workflow sections of `references/research.md`; load its templates and checklists when producing the corresponding artifacts. For bounded work, search and read only the relevant sections before acting.

Useful searches:

```sh
rg -n '^## (2|3|4)\.|contract|question fram|search strateg' references/research.md
rg -n '^## (5|6|7)\.|source hierarchy|fitness|provenance|fact-check' references/research.md
rg -n '^## (8|9)\.|uncertainty|synthesis|contradiction' references/research.md
rg -n '^## (10|11|13)\.|workflow|template|checklist' references/research.md
```

## Workflow

### 1. Establish the research contract

Define the decision, audience, primary question, subquestions, scope, exclusions, evidence standard, deadline, output, and what would change the decision. Resolve ambiguity before choosing a consequential interpretation.

### 2. Plan the search

Break the question into concepts, synonyms, entities, mechanisms, outcomes, populations, places, and dates. Choose sources before queries: primary and authoritative material first, then strong synthesis and discovery sources. Record time-sensitive cutoffs.

### 3. Search iteratively

Use broad searches to learn vocabulary, narrow searches to test claims, and citation chaining to find original evidence. Search for disconfirming evidence, limitations, alternative explanations, retractions, corrections, and later updates. Stop when additional searching no longer changes material claims or decisions, not when a favored answer appears.

### 4. Evaluate and record sources

Assess authority, directness, methodology, population, recency, independence, incentives, and applicability. Preserve title, author or institution, date, URL or identifier, access date, version, relevant passage or data, and the claim it supports. Trace summaries and statistics to their original source when possible.

### 5. Verify claims

Atomize material claims. Check names, dates, quantities, denominators, units, definitions, comparisons, and quotations against the source. Recalculate important numbers, inspect source context, and separate absence of evidence from evidence of absence.

### 6. Resolve contradiction

Do not average incompatible sources. Compare definitions, methods, samples, dates, incentives, and scope. State whether evidence truly conflicts, addresses different questions, or changed over time.

### 7. Synthesize for the decision

Lead with the answer or recommendation. Connect each material conclusion to evidence, identify the reasoning step, state confidence and limits, preserve viable alternatives, and name evidence gaps that could change the result.

### 8. Audit the result

Verify every material claim, citation, quote, calculation, and link. Check that the conclusion is no broader than the evidence. Record source and review dates, responsible owner, and a refresh trigger for unstable facts.

## Research rules

- Prefer primary sources, official standards, original datasets, and direct records for factual claims.
- Use secondary sources for orientation, synthesis, and independent critique—not to conceal a missing primary source.
- Treat snippets, summaries, generated text, and unsourced claims as leads.
- Date volatile facts and re-verify them close to publication or action.
- Preserve the difference between observed fact, source interpretation, analyst inference, hypothesis, and recommendation.
- Use calibrated confidence tied to evidence quality and agreement.
- Do not fabricate sources, quotations, statistics, consensus, or certainty.
- Follow copyright and quotation limits; paraphrase accurately and link to the source.

## Handoff

Report the answer, recommended action when appropriate, scope, strongest evidence, meaningful contradictions, uncertainty, evidence gaps, method, provenance, and next review trigger. Include a source ledger when another person must audit or update the work.
