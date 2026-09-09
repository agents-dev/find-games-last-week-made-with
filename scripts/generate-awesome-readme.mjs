import fs from 'node:fs';

const games = JSON.parse(fs.readFileSync('games.json', 'utf8'))
  .filter((record) => record.is_independent_game && record.counted_game_units > 0);

const esc = (value) => String(value ?? '')
  .replaceAll('|', '\\|')
  .replaceAll('\n', ' ')
  .trim();

const techText = (record) => (record.technology ?? []).join(', ') || 'Browser';
const modelText = (record) => (record.model_family ?? []).join(', ') || 'Unspecified';
const evidenceText = (record) => record.model_evidence ?? record.method_evidence ?? 'unknown';

function category(record, gameName) {
  const text = `${gameName} ${record.name} ${record.verification_notes ?? ''} ${techText(record)}`.toLowerCase();
  if (/racing|racer|kart|car game|drift|flight|mountain-bike|motorbike|formula/.test(text)) return 'Racing and Vehicles';
  if (/shooter|fps|doom|assault|zombie|surviv|combat|war|iron man|invader|battle|arena/.test(text)) return 'Action and Shooters';
  if (/puzzle|tetris|sudoku|breakout|minesweeper|word|match|snake|pinball|flap|platform|arcade/.test(text)) return 'Puzzle, Arcade, and Platformers';
  if (/rpg|dungeon|quest|horror|adventure|explor|space|planet|story|castle|hollow|rooms/.test(text)) return 'Adventure, RPG, and Exploration';
  if (/strategy|tactic|chess|card|board|farm|kingdom|gm|simulator|simulation|soccer|football|basketball|monopoly/.test(text)) return 'Strategy, Simulation, and Sports';
  if (/three\.js|threejs|webgl|webgpu/.test(text)) return 'Three.js and WebGL';
  return 'Other Browser Games';
}

function units(record) {
  const names = [...(record.contained_games ?? [])];
  const target = record.counted_game_units || 1;
  while (names.length < target) names.push(target === 1 ? record.name : `${record.name} — game ${names.length + 1}`);
  const estimates = record.contained_game_estimates ?? [];
  return names.slice(0, target).map((name, index) => {
    const estimate = estimates[index] ?? {};
    return {
      name,
      rating: estimate.quality_estimate_10 ?? record.quality_estimate_10 ?? 0,
      flops: estimate.flops_estimate_raw ?? record.flops_estimate_raw ?? 0,
      record,
    };
  });
}

const rows = games.flatMap(units).map((unit) => ({
  ...unit,
  category: category(unit.record, unit.name),
}));
const groups = new Map();
for (const row of rows) {
  if (!groups.has(row.category)) groups.set(row.category, []);
  groups.get(row.category).push(row);
}
for (const group of groups.values()) group.sort((a, b) => b.rating - a.rating || a.name.localeCompare(b.name));

const count = rows.length;
const repoCount = games.length;
const formatFlops = (value) => value >= 1e9 ? `${(value / 1e9).toFixed(2).replace(/\.00$/, '')} GFLOPS` : `${Math.round(value / 1e6)} MFLOPS`;
const linkList = (values) => values?.length ? values.map((url) => `[link](${url})`).join(' ') : '—';

let output = `# Awesome AI-Built Games\n\n`;
output += `A verified list of ${count} independently counted games from ${repoCount} GitHub repositories. The collection covers Claude Opus, Claude Fable, and GPT-6 Astra projects.\n\n`;
output += `## Contents\n\n`;
for (const title of groups.keys()) output += `- [${title}](#${title.toLowerCase().replaceAll(/[^a-z0-9 ]/g, '').replaceAll(' ', '-')})\n`;
output += `- [Method](#method)\n\n`;
output += `## Rating scale\n\n`;
output += `Rate each game from 0 to 10 using source completeness, playable mechanics, scope, tests or deployment, and strength of model evidence. FLOPS is a low-confidence static estimate of FP32 work per second at 60 FPS. It is not measured device performance or model-training compute.\n\n`;
output += `Links in the last two columns appear only when the repository exposes a screenshot or prompt file.\n\n`;

for (const [title, group] of groups) {
  output += `## ${title}\n\n`;
  output += `| Game | GitHub | Rating | Estimate | Model | Technology | Evidence | Screenshot | Prompt |\n| --- | --- | ---: | ---: | --- | --- | --- | --- | --- |\n`;
  for (const row of group) {
    const r = row.record;
    output += `| ${esc(row.name)} | [repo](${r.github_url}) | ${Number(row.rating).toFixed(1)} | ${formatFlops(row.flops)} | ${esc(modelText(r))} | ${esc(techText(r))} | ${esc(evidenceText(r))} | ${linkList(r.screenshot_urls)} | ${linkList(r.prompt_urls)} |\n`;
  }
  output += '\n';
}

output += `## Method\n\n`;
output += `- Verify the canonical GitHub repository and numeric repository ID.\n`;
output += `- Inspect the README, entry point, and gameplay source. Confirm input, rules or objectives, and game state.\n`;
output += `- Accept creator, repository, directory, or build-log evidence for Claude Opus, Claude Fable, or GPT-6 Astra. Label the evidence level.\n`;
output += `- Do not count catalogs, skills, screenshots, visual-only scenes, empty repositories, unchanged forks, or prompt-only projects.\n`;
output += '- Keep the source records in [`games.json`](games.json). Keep rejected candidates in [`research/candidates.json`](research/candidates.json).\n';

fs.writeFileSync('README.md', output);
