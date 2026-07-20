---
name: adhd
description: Run parallel, isolated divergent ideation and structured convergence for open-ended, consequential decisions with several viable answers. Use when the user explicitly invokes `/adhd`, “ADHD mode,” or `$adhd`; otherwise use only for high-stakes architecture, public API, schema, product-direction, naming, creative-concept, or fuzzy-debugging decisions where the obvious answer could be costly. Do not use for syntax, lookups, routine implementation, known-root-cause bugs, or requests for a quick, standard, canonical, textbook, or single answer.
---

# ADHD

Push past the first few correct but predictable answers. Generate options through isolated cognitive frames, then score, cluster, prune, and deepen the strongest survivors.

## Pre-flight gate

Run this gate before spawning sub-agents.

1. If the user explicitly invoked `/adhd`, “ADHD mode,” or `$adhd`, proceed directly to divergence.
2. Otherwise proceed only when every answer below is yes:
   - **Open-ended:** Would several materially different answers be valid?
   - **Consequential:** Would choosing the obvious answer incorrectly create meaningful cost or lock-in?
   - **Openly phrased:** Did the user avoid asking for a quick, standard, canonical, textbook, or single answer?
3. If any answer is no, stop using this skill and answer directly. When useful, briefly mention that the user can invoke `$adhd` for a wider exploration.

## Preserve isolation and capacity

- Use isolated sub-agents for divergent generation and focused deepening. Do not simulate all branches sequentially inside the coordinator.
- Spawn each divergent branch with `fork_turns: "none"`. Give it only the problem, necessary user context, its frame, and the divergent prompt below.
- Do not show a divergent branch another branch's prompt or output.
- Use as much safe parallelism as current capacity permits. This environment normally allows the coordinator plus three child agents, so run five divergent frames in isolated batches when necessary.
- Create fresh isolated branches for later batches; do not reuse a branch that has seen a different frame.
- Keep scoring and clustering in the coordinator. Spawn isolated focus branches for the three finalists when capacity permits.
- Do not create user-owned Codex tasks or threads for internal branches.
- If isolation cannot be maintained, say so and use a direct structured brainstorm instead of claiming to have run this workflow.

## Phase 1: Diverge without criticism

1. Select five frames from the table below. For code-shaped problems, select four frames tagged `code` or `design` and at least one `wild` frame. For product or strategy problems, mix tags. Vary selections across runs.
2. Spawn one isolated sub-agent per frame. Ask every branch for six short, distinct ideas.
3. Forbid evaluation, ranking, hedging, and small variations of obvious defaults during divergence.

Give each divergent branch this instruction, followed by the problem, relevant context, and frame:

```text
You are in DIVERGENT mode. Act as a generator, not a critic.
Generate 6 short, distinct ideas through the supplied cognitive frame.
Each idea must be one phrase or one sentence. Do not evaluate, rank, or hedge.
Ban the first three obvious answers most people would give. Push into the
awkward middle while keeping each idea relevant to the problem.
Return a JSON array only, with no prose before or after:
[{"text":"...","rationale":"..."}, ...]
```

Reject malformed or duplicative branch output once and request a corrected JSON array. Do not let correction turn into critique.

## Phase 2: Focus with criticism

### Score and detect traps

Rate every idea from 0 to 10 on:

- **Novelty:** distance from the obvious default;
- **Viability:** whether the idea could realistically ship or work;
- **Fit:** how directly it addresses the stated problem.

Compute `novelty × 0.35 + viability × 0.40 + fit × 0.25`. Flag attractive traps such as hidden operational cost, false economy, premature abstraction, poor scalability, or reliance on an unverified assumption. Give each trap a one-line reason.

### Cluster

Group the surviving ideas into three to six clusters by their underlying mechanism or strategic angle, not surface vocabulary. Give every cluster a concrete label.

### Deepen the top three

Exclude traps and choose the three highest weighted ideas, using judgment to break near-ties and avoid three versions of the same mechanism. Spawn one isolated focus branch per finalist with `fork_turns: "none"`.

Give each focus branch this instruction, followed by the problem, relevant context, and selected idea:

```text
You are in FOCUS mode. Develop the supplied idea into a practical direction.
Explain how it works in 4 to 8 sentences. Name the load-bearing risk and the
first concrete step a builder would take. Generate 3 to 5 child ideas such as
variations, hybrids, or capabilities this direction unlocks.
Return JSON only:
{"sketch":"...","risk":"...","first_step":"...","children":["..."]}
```

## Frames

| Frame | Vantage prompt | Tags |
|---|---|---|
| **Hardware engineer** | Recast the problem in terms of latency, memory layout, buses, caches, timing budgets, and physical limits. | code, wild |
| **Regulator** | Ask what must be provable, traceable, contestable, or refusable. Explore compliance and failure modes. | design, general |
| **10-year-old** | Use naive, convention-free reasoning. Ask why every assumed constraint exists. | general, wild |
| **Competitor trying to break it** | Exploit or sabotage the obvious solution, then invert the attacks into stronger ideas. | code, design |
| **Biology** | Transplant mechanisms such as immune response, signaling, evolution, plasticity, or symbiosis. | code, wild |
| **Logistics** | Apply queues, batching, hubs, routing, returns, inventory, and last-mile mechanisms literally. | code, design |
| **Game design** | Find loops, rewards, friction, save states, exploits, and speedrun strategies. Treat the user as a player. | design, general |
| **Markets** | Model buyers, sellers, market-makers, auctions, contracts, and clearing mechanisms. | design, wild |
| **Inversion** | Design ways to guarantee the opposite outcome, then negate each mechanism into a candidate solution. | code, design, general |
| **$0 budget, one hour** | Find the crudest version that preserves the load-bearing value. | code, general |
| **Infinite budget, ten years** | Explore the maximal version with abundant compute, time, and expertise. | design, wild |
| **Remove the load-bearing assumption** | Identify what everyone treats as fixed, remove it, and explore what becomes possible. | code, design, wild |
| **Speedrunner** | Find skips, glitches, boundary breaks, and abusive-but-legal shortcuts. | code, wild |
| **Ant colony** | Replace central planning with many simple actors, local rules, and emergent coordination. | code, wild |
| **3 a.m. on-call** | Design for diagnosis, containment, recovery, and avoiding the next page. | code, design |

## Present the result

Use this order:

1. **Brief:** Confirm the problem and any useful reframe in one or two lines.
2. **Wide set:** Show the full pool grouped by cluster. Keep each idea short and append score chips such as `[N7 V8 F9]`.
3. **Converge:** Present a shortlist of two to four ideas and explain why each survived. Mark the strongest non-obvious but viable option with `★`. List traps separately with their one-line reasons.
4. **Focus:** Present the three deepened branches, each with its sketch, load-bearing risk, first step, and child ideas.
5. **Provocation:** End with one wildcard question or direction that could reopen the search space if none of the finalists lands.

Commit to a recommendation after divergence. Do not make the user sort an undifferentiated pile of ideas.

## Quality checks

- Confirm that clusters differ in mechanism, not merely wording.
- Remove near-duplicate ideas before scoring.
- Keep wild ideas only when they seed a viable direction or reveal an assumption.
- Make risks concrete and tied to the proposed mechanism.
- Stop adding candidates when new ideas repeat existing shapes.
- Scale down only when the user's explicit invocation also requests a smaller run; preserve branch isolation at every size.
- State the actual number of branches used. Do not claim five-way simultaneity when capacity required batches.

This workflow adapts the open-source `adhd-agent` method described at <https://github.com/UditAkhourii/adhd> to Codex's sub-agent model and concurrency limits.
