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
  if (/godot|unity|unreal|pygame|playstation|ps1|minecraft|mcfunction|datapack|cocos|libgdx|monogame|love2d|sdl|raylib|bevy|defold|construct|rpg maker|game maker|python, cli|c\+\+.*alphazero|^c,/.test(text)) return 'Non-Browser Engines';
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
const iconLinks = (record) => [
  ...(record.screenshot_urls ?? []).map((url) => `[📸 screenshot](${url})`),
  ...(record.prompt_urls ?? []).map((url) => `[🧠 prompt](${url})`),
].join(' · ');
const categoryIcons = {
  'Racing and Vehicles': '🏎️',
  'Action and Shooters': '💥',
  'Puzzle, Arcade, and Platformers': '🧩',
  'Adventure, RPG, and Exploration': '🗺️',
  'Strategy, Simulation, and Sports': '♟️',
  'Three.js and WebGL': '🧊',
  'Other Browser Games': '🎮',
  'Non-Browser Engines': '🛠️',
};
const slug = (title) => title.toLowerCase().replaceAll(/[^a-z0-9 ]/g, '').replaceAll(' ', '-');
const rankedRows = [...rows].sort((a, b) => b.rating - a.rating || a.name.localeCompare(b.name));
const featuredRepos = new Set();
const topPicks = rankedRows.filter((row) => {
  if (featuredRepos.has(row.record.github_url)) return false;
  featuredRepos.add(row.record.github_url);
  return true;
}).slice(0, 15);
const threeCount = rows.filter((row) => /three\.js|threejs|webgl|webgpu/i.test(techText(row.record))).length;
const nonBrowserCount = rows.filter((row) => row.category === 'Non-Browser Engines').length;
const promptCount = rows.filter((row) => row.record.prompt_urls?.length).length;
const screenshotCount = rows.filter((row) => row.record.screenshot_urls?.length).length;

let output = `<div align="center">\n\n`;
output += `# 🎮 Awesome AI-Built Games\n\n`;
output += `### ${count} verified games. Real source. No prompt-only filler.\n\n`;
output += `[![Games](https://img.shields.io/badge/GAMES-${count}-7c3aed?style=for-the-badge&logo=itchdotio&logoColor=white)](#game-library) `;
output += `[![Repositories](https://img.shields.io/badge/REPOSITORIES-${repoCount}-2563eb?style=for-the-badge&logo=github&logoColor=white)](games.json) `;
output += `[![Three.js](https://img.shields.io/badge/3D%20GAMES-${threeCount}-111827?style=for-the-badge&logo=threedotjs&logoColor=white)](#threejs-and-webgl)\n\n`;
output += `[![Stars](https://img.shields.io/github/stars/agents-dev/find-games-last-week-made-with?style=for-the-badge&logo=github&color=f59e0b)](https://github.com/agents-dev/find-games-last-week-made-with/stargazers) `;
output += `[![Forks](https://img.shields.io/github/forks/agents-dev/find-games-last-week-made-with?style=for-the-badge&logo=github&color=06b6d4)](https://github.com/agents-dev/find-games-last-week-made-with/forks)\n\n`;
output += `> **A source-verified field guide to games built with GPT-6 Astra, Claude Opus, and Claude Fable.**<br />\n`;
output += `> Every counted entry has a real GitHub repository and playable game code. Browser and non-browser engines are separated.\n\n`;
output += `</div>\n\n---\n\n`;
output += `## 🤯 What is this?\n\n`;
output += `Most AI-game lists mix finished games, visual demos, empty repositories, and prompt collections. This list checks the repository, gameplay source, model evidence, and canonical GitHub identity before counting a game.\n\n`;
output += `**Yes, that is ${count} games. Yes, each one links to source.**\n\n`;
output += `## ⚡ Collection at a glance\n\n`;
output += `| 🔎 Signal | 📊 Result |\n| --- | ---: |\n`;
output += `| 🎮 Independently counted games | **${count}** |\n`;
output += `| 📦 Independent repositories | **${repoCount}** |\n`;
output += `| 🧊 Three.js, WebGL, or WebGPU games | **${threeCount}** |\n`;
output += `| 🛠️ Non-browser engine games | **${nonBrowserCount}** |\n`;
output += `| 📸 Games with verified screenshot links | **${screenshotCount}** |\n`;
output += `| 🧠 Games with direct prompt links | **${promptCount}** |\n\n`;
output += `## 🏆 Top-rated picks\n\n`;
output += `> **Start here. These projects have the strongest combined evidence, scope, and source quality.**\n\n`;
output += `| Game | Score | Built with |\n| --- | ---: | --- |\n`;
for (const row of topPicks) {
  output += `| [**${esc(row.name)}**](${row.record.github_url}) | ⭐ **${Number(row.rating).toFixed(1)}** | ${esc(modelText(row.record))} |\n`;
}
output += `\n`;
if (screenshotCount) {
  const shot = rows.find((row) => row.record.screenshot_urls?.length);
  const image = shot.record.screenshot_urls[0].replace('https://github.com/', 'https://raw.githubusercontent.com/').replace('/blob/', '/');
  output += `## 📸 Screenshot spotlight\n\n<div align="center">\n\n[<img src="${image}" alt="${esc(shot.name)} screenshot" width="760" />](${shot.record.github_url})\n\n**${esc(shot.name)}** — verified game source and screenshot.\n\n</div>\n\n`;
}
output += `## Game library\n\n> 🕹️ **Browse all verified games by category.**\n\n`;
output += `Jump to a category:\n\n`;
for (const [title, group] of groups) output += `- ${categoryIcons[title]} [${title}](#${slug(title)}) — **${group.length} games**\n`;
output += `\n`;
output += `Each compact row shows **rating**, **model**, **technology**, **FLOPS estimate**, and any verified screenshot or prompt link. The layout wraps on narrow screens and avoids horizontal table scrolling.\n\n`;

for (const [title, group] of groups) {
  output += `## ${title}\n\n`;
  output += `> ${categoryIcons[title]} **${group.length} verified games. Ranked by evidence-based quality score.**\n\n`;
  for (const row of group) {
    const r = row.record;
    const extra = iconLinks(r);
    output += `- [**${esc(row.name)}**](${r.github_url}) — ⭐ **${Number(row.rating).toFixed(1)}/10** · ${esc(modelText(r))} · ${esc(techText(r))} · ${formatFlops(row.flops)} · _${esc(evidenceText(r))}_${extra ? ` · ${extra}` : ''}\n`;
  }
  output += `\n[⬆️ Back to game library](#game-library)\n\n`;
}

output += `## Method\n\n> 🔬 **Proof over promises. Repository evidence decides what gets counted.**\n\n`;
output += `- Verify the canonical GitHub repository and numeric repository ID.\n`;
output += `- Inspect the README, entry point, and gameplay source. Confirm input, rules or objectives, and game state.\n`;
output += `- Place Godot, Unity, Unreal, Pygame, native-console, Minecraft, and other non-browser engine games in the dedicated non-browser section.\n`;
output += `- Accept creator, repository, directory, or build-log evidence for Claude Opus, Claude Fable, or GPT-6 Astra. Label the evidence level.\n`;
output += `- Do not count catalogs, skills, screenshots, visual-only scenes, empty repositories, unchanged forks, or prompt-only projects.\n`;
output += '- Keep the source records in [`games.json`](games.json). Keep rejected candidates in [`research/candidates.json`](research/candidates.json).\n';
output += `\n## 📐 Rating and FLOPS notes\n\n`;
output += `The **0–10 rating** uses source completeness, playable mechanics, scope, tests or deployment, and model-evidence strength. The **FLOPS value** is a low-confidence static estimate of FP32 work per second at 60 FPS. It is not measured device performance and it is not model-training compute.\n\n`;
output += `## 🤝 Contributing\n\n`;
output += `Open an issue or pull request with the game repository, model evidence, playable-source path, screenshot, and original prompt when available. New entries must pass the same verification rules.\n\n`;
output += `## ⭐ Star this collection\n\n`;
output += `If source-backed AI game history should stay searchable, [**star the repository**](https://github.com/agents-dev/find-games-last-week-made-with). The robots made the games. Humans still have to curate the receipts. 😏\n`;

fs.writeFileSync('README.md', output);
