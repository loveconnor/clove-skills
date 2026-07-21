import { existsSync, lstatSync, readFileSync, readdirSync, readlinkSync } from "node:fs";
import { dirname, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Run with: node examples/clove-site/validate.mjs
const siteDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryDirectory = resolve(siteDirectory, "../..");
const detailDirectory = resolve(siteDirectory, "skills");
const sourceDirectory = resolve(repositoryDirectory, ".agents/skills");
const indexPath = resolve(siteDirectory, "skills.html");
const detailStylesPath = resolve(detailDirectory, "style.css");
const publicSourceBaseUrl = "https://github.com/loveconnor/clove-skills/blob/main/.agents/skills";
const agentsPath = resolve(repositoryDirectory, "AGENTS.md");
const claudePath = resolve(repositoryDirectory, "CLAUDE.md");
const geminiPath = resolve(repositoryDirectory, "GEMINI.md");
const copilotPath = resolve(repositoryDirectory, ".github/copilot-instructions.md");
const claudeSkillsPath = resolve(repositoryDirectory, ".claude/skills");

const icons = {
  down: '<svg class="icon" aria-hidden="true" focusable="false" viewBox="0 0 16 16"><path d="M8 3.25v9.5m0 0 3.75-3.75M8 12.75 4.25 9"/></svg>',
  upRight: '<svg class="icon" aria-hidden="true" focusable="false" viewBox="0 0 16 16"><path d="m4.25 11.75 7.5-7.5m-5.5 0h5.5v5.5"/></svg>',
  left: '<svg class="icon icon--before icon--directional" aria-hidden="true" focusable="false" viewBox="0 0 16 16"><path d="M12.75 8h-9.5m0 0L7 4.25M3.25 8 7 11.75"/></svg>',
  right: '<svg class="icon icon--directional" aria-hidden="true" focusable="false" viewBox="0 0 16 16"><path d="M3.25 8h9.5m0 0L9 4.25M12.75 8 9 11.75"/></svg>',
};

const expectedCategories = new Set(["product", "content", "strategy", "engineering"]);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function read(path) {
  return readFileSync(path, "utf8");
}

function matchExactlyOnce(source, pattern, description) {
  const matches = source.match(pattern) ?? [];
  assert(matches.length === 1, `${description}: expected 1 match, found ${matches.length}`);
}

function extract(source, pattern, description) {
  const match = source.match(pattern);
  assert(match, `${description}: value not found`);
  return match[1];
}

function collectSourceSkillNames() {
  return readdirSync(sourceDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) => existsSync(resolve(sourceDirectory, entry.name, "SKILL.md")))
    .map((entry) => entry.name)
    .sort();
}

function collectCards(indexSource) {
  return [...indexSource.matchAll(/<article class="skill" data-category="([^"]+)">([\s\S]*?)<\/article>/g)].map(
    ([, category, markup]) => ({
      category,
      markup,
      name: extract(markup, /<h3>([^<]+)<\/h3>/, "Skill card heading"),
      href: extract(markup, /<a class="skill-link" href="([^"]+)"/, "Skill card link"),
    }),
  );
}

function validateIcons(source, label, expectedCount) {
  const iconMarkup = [...source.matchAll(/<svg class="icon[^"]*"[\s\S]*?<\/svg>/g)].map(([markup]) => markup);
  assert(iconMarkup.length === expectedCount, `${label}: expected ${expectedCount} icons, found ${iconMarkup.length}`);
  assert(!/[←→↑↓↗↘↖↙]/.test(source), `${label}: Unicode arrows must use the authored SVG set`);

  for (const icon of iconMarkup) {
    assert(icon.includes('aria-hidden="true"'), `${label}: decorative icon must be hidden from assistive technology`);
    assert(icon.includes('focusable="false"'), `${label}: decorative icon must not receive focus`);
    assert(icon.includes('viewBox="0 0 16 16"'), `${label}: icon must use the canonical 16-unit viewBox`);
    assert(/^<svg[^>]*><path d="[^"]+"\/><\/svg>$/.test(icon), `${label}: icon markup must contain one intentional path`);
    assert(!/<(?:script|foreignObject|image|use|a)\b/i.test(icon), `${label}: icon contains disallowed active or external content`);
    assert(!/\s(?:on\w+|href|xlink:href)=/i.test(icon), `${label}: icon contains a disallowed handler or reference`);
  }
}

function validateLocalLinks(path, source) {
  const ids = new Set([...source.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id));

  for (const [, href] of source.matchAll(/href="([^"]+)"/g)) {
    if (/^(?:https?:|mailto:)/.test(href)) continue;

    const [relativePath, fragment] = href.split("#");
    const targetPath = relativePath ? resolve(dirname(path), relativePath) : path;
    assert(existsSync(targetPath), `${path}: missing local link target ${href}`);

    if (fragment) {
      const targetSource = targetPath === path ? source : read(targetPath);
      const targetIds = targetPath === path
        ? ids
        : new Set([...targetSource.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id));
      assert(targetIds.has(fragment), `${path}: missing fragment target ${href}`);
    }
  }
}

function parseColorVariables(source) {
  return new Map(
    [...source.matchAll(/--([\w-]+):\s*([^;]+);/g)].map(([, name, value]) => [name, value.trim()]),
  );
}

function resolveColor(variables, name, trail = new Set()) {
  assert(!trail.has(name), `Circular color token: ${[...trail, name].join(" -> ")}`);
  const value = variables.get(name);
  assert(value, `Missing color token --${name}`);
  if (/^#[0-9a-f]{6}$/i.test(value)) return value;

  const reference = value.match(/^var\(--([\w-]+)\)$/);
  assert(reference, `Unsupported color token value for --${name}: ${value}`);
  return resolveColor(variables, reference[1], new Set([...trail, name]));
}

function relativeLuminance(hex) {
  const channels = hex.match(/[0-9a-f]{2}/gi).map((channel) => Number.parseInt(channel, 16) / 255);
  const linear = channels.map((channel) => (
    channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  ));
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}

function contrastRatio(first, second) {
  const firstLuminance = relativeLuminance(first);
  const secondLuminance = relativeLuminance(second);
  const lighter = Math.max(firstLuminance, secondLuminance);
  const darker = Math.min(firstLuminance, secondLuminance);
  return (lighter + 0.05) / (darker + 0.05);
}

function validateContrastPairs(source, label, pairs) {
  const variables = parseColorVariables(source);

  for (const [foregroundName, backgroundName, minimum] of pairs) {
    const ratio = contrastRatio(
      resolveColor(variables, foregroundName),
      resolveColor(variables, backgroundName),
    );
    assert(
      ratio >= minimum,
      `${label}: --${foregroundName} on --${backgroundName} is ${ratio.toFixed(2)}:1; expected ${minimum}:1`,
    );
  }
}

function validateDetailPage(name) {
  const path = resolve(detailDirectory, `${name}.html`);
  assert(existsSync(path), `${name}: missing detail page`);
  const source = read(path);
  const description = extract(source, /<meta name="description" content="([^"]+)"/, `${name} description`);
  const title = extract(source, /<title>\s*([^<]+?)\s*<\/title>/, `${name} title`);

  matchExactlyOnce(source, /<html lang="en">/g, `${name} language`);
  matchExactlyOnce(source, /<meta name="description"/g, `${name} description`);
  matchExactlyOnce(source, /<title>/g, `${name} title`);
  matchExactlyOnce(source, /<main>/g, `${name} main landmark`);
  matchExactlyOnce(source, /<h1>/g, `${name} h1`);
  matchExactlyOnce(source, /<nav class="nav shell" aria-label="Skill navigation">/g, `${name} navigation name`);
  matchExactlyOnce(source, /<span class="mark" aria-hidden="true">✦<\/span>/g, `${name} decorative mark`);
  assert(source.includes(`${name} Agent Skill — Clove`), `${name}: title does not identify the public offer`);
  assert(title.length <= 60, `${name}: title is too long for a concise search result`);
  assert(description.length >= 70 && description.length <= 160, `${name}: description must be useful and concise`);
  assert(description.includes("Clove") && description.includes("Agent Skill"), `${name}: description must identify Clove and Agent Skills`);
  assert(source.includes("Use this Agent Skill"), `${name}: opening description must orient direct visitors`);
  assert(source.includes("When to use this skill"), `${name}: usage heading must be explicit`);
  assert(source.includes("How this skill works"), `${name}: method heading must be explicit`);
  assert(source.includes("Clove — reusable Agent Skills"), `${name}: footer must match the public positioning`);
  assert(!source.includes('class="kicker"'), `${name}: repeated dot-and-label motif must stay removed`);
  assert(!source.includes('class="field-guide"'), `${name}: unexplained field-guide labels must stay removed`);
  assert(!source.includes("This skill helps an agent"), `${name}: copy must address public visitors, not internal agents`);
  assert(
    source.includes(`href="${publicSourceBaseUrl}/${name}/SKILL.md"`),
    `${name}: source link does not point to its public SKILL.md`,
  );
  assert(
    /<main>[\s\S]*<section class="next shell">[\s\S]*<\/main>/.test(source),
    `${name}: the continuation section must remain inside the main landmark`,
  );
  assert(source.includes(`>${icons.left}All skills</a>`), `${name}: back link must use the left-arrow icon`);
  assert(source.includes(`Read the complete skill instructions ${icons.upRight}</a>`), `${name}: instructions link must use the northeast-arrow icon`);
  assert(source.includes(`Browse all 19 skills ${icons.right}</a>`), `${name}: continuation link must use the right-arrow icon`);
  validateIcons(source, name, 3);

  validateLocalLinks(path, source);
  return { description, title };
}

function validate() {
  const indexSource = read(indexPath);
  const detailStyles = read(detailStylesPath);
  const cards = collectCards(indexSource);
  const sourceSkillNames = collectSourceSkillNames();
  const cardNames = cards.map(({ name }) => name).sort();

  assert(read(agentsPath).includes("## Agent compatibility"), "AGENTS.md must define platform-neutral compatibility");
  assert(read(claudePath).startsWith("@AGENTS.md"), "CLAUDE.md must import the canonical AGENTS.md");
  assert(read(geminiPath).startsWith("@./AGENTS.md"), "GEMINI.md must import the canonical AGENTS.md");
  assert(read(copilotPath).includes("root `AGENTS.md`"), "Copilot instructions must point to the canonical AGENTS.md");
  assert(lstatSync(claudeSkillsPath).isSymbolicLink(), "Claude skills adapter must be a symbolic link");
  assert(readlinkSync(claudeSkillsPath) === "../.agents/skills", "Claude skills adapter must target the canonical library");

  for (const name of sourceSkillNames) {
    const skillSource = read(resolve(sourceDirectory, name, "SKILL.md"));
    assert(!/\bCodex(?:'s)?\b/.test(skillSource), `${name}: portable SKILL.md contains a Codex-specific reference`);
    assert(existsSync(resolve(sourceDirectory, name, "agents/openai.yaml")), `${name}: missing optional OpenAI interface metadata`);
  }

  assert(cards.length > 0, "No skill cards found");
  assert(new Set(cardNames).size === cardNames.length, "Skill card names must be unique");
  assert(new Set(cards.map(({ href }) => href)).size === cards.length, "Skill card links must be unique");
  assert(
    JSON.stringify(cardNames) === JSON.stringify(sourceSkillNames),
    `Catalog skills do not match .agents/skills\nCatalog: ${cardNames.join(", ")}\nSource: ${sourceSkillNames.join(", ")}`,
  );

  assert(indexSource.includes(`Browse ${cards.length} skills`), "Hero skill count is stale");
  assert(indexSource.includes(`Showing all ${cards.length} skills.`), "Initial filter status count is stale");
  assert(indexSource.includes("<fieldset class=\"filters\" hidden>"), "Filters must use native grouping and remain hidden without JavaScript");
  assert(indexSource.includes("role=\"status\""), "Filter results need a status region");
  assert(indexSource.includes("selected research for decisions that need deeper evidence"), "Research coverage claim must preserve its boundary");
  assert(indexSource.includes("not an automatic guarantee of quality"), "Public copy must state the library's operating boundary");
  assert(indexSource.includes("Reusable Agent Skills for product work"), "Page title must identify the public offer");
  assert(indexSource.includes("Codex, Claude Code, Cursor, Gemini CLI, GitHub Copilot"), "Supported agents must remain visible in the public offer");
  assert(!indexSource.includes('class="eyebrow"'), "Catalog dot-and-label motifs must stay removed");
  assert(!indexSource.includes("principle-copy"), "Principle section must not retain the discarded supporting caption");
  assert(!indexSource.includes("Read the skill"), "Skill links must identify their destination");
  assert(indexSource.split(icons.down).length - 1 === 2, "Catalog calls to action must use the down-arrow icon");
  assert(indexSource.split(icons.upRight).length - 1 === cards.length, "Catalog links must use the northeast-arrow icon");

  const detailMetadata = [];
  for (const card of cards) {
    assert(expectedCategories.has(card.category), `${card.name}: unknown category ${card.category}`);
    assert(card.href === `skills/${card.name}.html`, `${card.name}: unexpected detail link ${card.href}`);
    assert(
      card.markup.includes(`Read the ${card.name} skill ${icons.upRight}`),
      `${card.name}: link text must identify the destination and hide the decorative arrow`,
    );
    detailMetadata.push(validateDetailPage(card.name));
  }

  assert(new Set(detailMetadata.map(({ title }) => title)).size === cards.length, "Detail page titles must be unique");
  assert(new Set(detailMetadata.map(({ description }) => description)).size === cards.length, "Detail page descriptions must be unique");

  validateLocalLinks(indexPath, indexSource);
  validateIcons(indexSource, "Catalog", cards.length + 2);

  const inlineScript = extract(indexSource, /<script>([\s\S]*?)<\/script>/, "Catalog script");
  new Function(inlineScript);

  assert(indexSource.includes("@media (forced-colors: active)"), "Catalog focus needs a forced-colors fallback");
  assert(detailStyles.includes("@media (forced-colors: active)"), "Detail focus needs a forced-colors fallback");
  assert(indexSource.includes(".step-number { color: var(--color-accent);"), "Step numbers must use the readable semantic color");
  assert(indexSource.includes("stroke: currentColor;"), "Catalog icons must inherit their link color");
  assert(detailStyles.includes("stroke: currentColor;"), "Detail icons must inherit their link color");
  assert(!indexSource.includes(".eyebrow"), "Catalog must not retain unused eyebrow styles");
  assert(!detailStyles.includes(".kicker"), "Detail pages must not retain unused kicker styles");

  validateContrastPairs(indexSource, "Catalog colors", [
    ["color-focus", "color-canvas", 3],
    ["color-focus", "color-surface", 3],
    ["color-focus-inverse", "color-inverse-surface", 3],
    ["color-text", "color-canvas", 4.5],
    ["color-text-muted", "color-canvas", 4.5],
    ["color-inverse-text", "color-inverse-surface", 4.5],
    ["color-inverse-text-muted", "color-inverse-surface", 4.5],
    ["color-accent", "color-canvas", 4.5],
    ["color-secondary", "color-inverse-surface", 4.5],
    ["color-text", "color-secondary", 4.5],
    ["color-inverse-text", "color-accent", 4.5],
  ]);
  validateContrastPairs(detailStyles, "Detail colors", [
    ["color-focus", "color-canvas", 3],
    ["color-focus", "color-surface", 3],
    ["color-focus-inverse", "color-inverse-surface", 3],
    ["color-text", "color-canvas", 4.5],
    ["color-text-muted", "color-canvas", 4.5],
    ["color-inverse-text", "color-inverse-surface", 4.5],
    ["color-inverse-text-muted", "color-inverse-surface", 4.5],
    ["color-accent", "color-canvas", 4.5],
    ["color-secondary", "color-inverse-surface", 4.5],
    ["color-text", "color-secondary", 4.5],
  ]);

  const detailFiles = readdirSync(detailDirectory)
    .filter((name) => extname(name) === ".html");
  assert(detailFiles.length === cards.length, "Detail page count does not match the catalog");

  console.log(`Validated ${cards.length} skills, ${cards.length * 4 + 2} authored arrows, local links, semantics, script syntax, and contrast pairs.`);
}

validate();
