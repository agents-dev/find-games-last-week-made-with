import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const records = JSON.parse(fs.readFileSync('games.json', 'utf8'));
const outputPath = 'research/screenshot-discoveries.json';
const output = fs.existsSync(outputPath)
  ? JSON.parse(fs.readFileSync(outputPath, 'utf8'))
  : { checked_on: new Date().toISOString().slice(0, 10), method: 'serial GitHub README source scan', screenshots: {} };
output.checked_on = new Date().toISOString().slice(0, 10);
output.method = 'serial GitHub README source scan';

const candidates = records
  .filter((record) => record.is_independent_game && record.counted_game_units > 0 && !(record.screenshot_urls ?? []).length)
  .filter((record, index, all) => all.findIndex((item) => item.github_url === record.github_url) === index);

function repositoryPath(url) {
  const match = String(url).match(/^https:\/\/github\.com\/([^/]+)\/([^/#]+)/);
  return match ? `${match[1]}/${match[2]}` : null;
}

function resolveImage(url, htmlUrl) {
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith('data:')) return null;
  try {
    return new URL(url, htmlUrl).href;
  } catch {
    return null;
  }
}

function isUseful(url, alt = '') {
  const text = `${url} ${alt}`.toLowerCase();
  if (/shields\.io|img\.shields|badge|codecov|travis-ci|coveralls|githubactions|actions\/workflows|npmjs|downloads|buymeacoffee|\/brand\/|\/nav\/|progress\.svg/.test(text)) return false;
  return /\.(avif|gif|jpe?g|png|svg|webp)(?:[?#].*)?$/i.test(url) || /user-attachments|raw\.githubusercontent|github\.com\/.*\/assets\//.test(url);
}

function extractImages(markdown, htmlUrl) {
  const found = [];
  const add = (candidate, alt = '') => {
    const url = resolveImage(candidate.trim().replace(/^<|>$/g, ''), htmlUrl);
    if (!url || !isUseful(url, alt) || found.includes(url)) return;
    found.push(url);
  };
  for (const match of markdown.matchAll(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) add(match[2], match[1]);
  for (const match of markdown.matchAll(/<img\b[^>]*?src=["']([^"']+)["'][^>]*>/gi)) add(match[1], match[0]);
  return found.slice(0, 4);
}

let scanned = 0;
let found = 0;
let failed = 0;
for (const record of candidates) {
  if (output.screenshots[record.github_url]?.checked_on === output.checked_on) continue;
  const repo = repositoryPath(record.github_url);
  if (!repo) continue;
  scanned += 1;
  try {
    const raw = execFileSync('gh', ['api', `repos/${repo}/readme`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
    const payload = JSON.parse(raw);
    const markdown = Buffer.from(payload.content ?? '', 'base64').toString('utf8');
    const screenshots = extractImages(markdown, payload.html_url ?? `${record.github_url}/blob/HEAD/README.md`);
    output.screenshots[record.github_url] = {
      checked_on: output.checked_on,
      method: 'README image scan from the game repository',
      screenshots,
    };
    if (screenshots.length) found += 1;
  } catch {
    failed += 1;
    output.screenshots[record.github_url] = {
      checked_on: output.checked_on,
      method: 'README request failed during serial source scan',
      screenshots: [],
    };
  }
}

fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`);
console.log(`Scanned ${scanned} repositories serially. Found README screenshot sources for ${found}; ${failed} README requests failed.`);
