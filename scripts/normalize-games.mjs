import fs from 'node:fs';

const path = 'games.json';
const idByRepo = {
  'mshumer/Claude-of-Duty': 1312257227,
  'atiqur-rahman-pro/claude-bandicoot': 1327427897,
  'jason-c-dev/iridium-reach-demo': 1334247928,
  'ryancampbell/kart-royale': 1313290235,
  'mike007jd/ZofDuty': 1335494100,
  'DEADover/DRIFTLANDS': 1334092684,
  'e01-ai/starfall': 1314575864,
  'cocodedk/Dune-Browser-Game': 1208322980,
  'MichaelBernhardt/GTB6': 1296269627,
  'jimskin03/Verdium-Storm': 1317406481,
  'kaykayyali/Group-Survival-Game': 77716576,
  'corosolto/client': 1304174300,
  'jolbol1/apex-gp': 1320932400,
  'eriknomitch/dustmaker': 1329478237,
  '404-Repo/404-game-recipe': 1326542313,
  'alessoh/game': 1325930285,
  'Kevin-Liu-01/Claude-of-Tanks': 1316388080,
  'scottjmaddox/claude-of-duty-bevy': 1313149705,
  'jrsmith1279/claude-of-duty-too': 1313022612,
  'Paranjayy/COD-Fable': 1318773419,
  'hurtz/choppricer': 1343185302,
  'TheXUMU9/TheXUMU9-Game_with-Gauntlet_Loop': 1318013761,
  'marcosmallet/breakout-gauntlet-loop': 1351948686,
  'rubenvoss07-hub/GauntletGame': 1328763530,
  'the-missionary-company/moonberry-trail': 1334576981,
  'dylanhsieh/neon-precinct': 1322607954,
  'PeterBlenessy/ashlands': 1320905048,
  'teoobarca/beach-volley-fps': 1322115643,
  'jacobv25/speedhell': 1342964745,
  'az9713/gauntlet-loop-unity-cli-demo': 1327910319,
};

function repoPath(url) {
  return url.replace('https://github.com/', '').replace(/\/$/, '');
}

function roundEstimate(value) {
  const exponent = Math.floor(Math.log10(value));
  const scale = 10 ** Math.max(0, exponent - 1);
  return Math.round(value / scale) * scale;
}

function flopsFor(game) {
  const text = `${game.name} ${game.technology?.join(' ') ?? ''} ${game.verification_notes ?? ''}`.toLowerCase();
  let value = text.includes('three.js') || text.includes('webgl') ? 900_000_000 : 220_000_000;
  if (text.includes('webgpu')) value = 2_000_000_000;
  if (text.includes('3d')) value *= 1.35;
  if (text.match(/physics|rapier|cannon|ray|shader|particle|pbr/)) value *= 1.45;
  if (text.match(/ai|enemy|traffic|open-world|open world|mmo|multiplayer|server/)) value *= 1.35;
  if (text.match(/voxel|rpg|boss|shooter|strategy|tower-defense|tower defense/)) value *= 1.2;
  return Math.min(20_000_000_000, roundEstimate(value));
}

function qualityFor(game) {
  if (game.verification_status === 'verified_related') return 2;
  let value = 6.5;
  if (game.method_evidence === 'confirmed') value += 1;
  else if (game.method_evidence === 'creator-reported') value += 0.5;
  if ((game.game_count ?? 1) > 1) value += 0.5;
  if (/tests?|playtest|gameplay|controls|playable|live demo/i.test(game.verification_notes ?? '')) value += 0.5;
  return Math.min(9.5, Math.round(value * 10) / 10);
}

const games = JSON.parse(fs.readFileSync(path, 'utf8'));
for (const game of games) {
  const key = repoPath(game.github_url);
  if (!game.repository_id) game.repository_id = idByRepo[key];
  if (!game.repository_id) throw new Error(`Missing repository id for ${game.github_url}`);
  game.game_count ??= 1;
  game.gauntlet_loop ??= false;
  game.model_family ??= ['Claude Opus 5'];
  game.model_evidence ??= game.method_evidence === 'confirmed' || game.method_evidence === 'creator-reported'
    ? game.method_evidence
    : game.gauntlet_loop ? 'directory-method' : 'repository/topic trail';
  game.flops_estimate_raw ??= flopsFor(game);
  game.flops_estimate_unit ??= 'estimated FP32 operations per second at 60 FPS';
  game.flops_estimate_confidence ??= game.verification_status === 'verified' ? 'low' : 'very-low';
  game.flops_estimate_basis ??= 'Static workload estimate from documented renderer, simulation, effects, and entity complexity; not measured hardware throughput.';
  game.quality_estimate_10 ??= qualityFor(game);
  game.quality_estimate_basis ??= game.verification_status === 'verified_related'
    ? 'Related fork only; original gameplay is verified, but this copy is not counted as an independent game.'
    : 'Evidence-based estimate from documented playability, controls, gameplay scope, tests, demo/source verification, and method evidence.';
  game.counted_game_units ??= game.verification_status === 'verified' ? game.game_count : 0;
  game.is_independent_game ??= game.verification_status === 'verified';
  if (game.verification_status === 'verified_related') game.canonical_repository_id ??= 1312257227;
  if (game.contained_games && !game.contained_game_estimates) {
    game.contained_game_estimates = game.contained_games.map((name) => ({
      name,
      flops_estimate_raw: game.flops_estimate_raw,
      quality_estimate_10: game.quality_estimate_10,
    }));
  }
}

const tmp = `${path}.tmp`;
fs.writeFileSync(tmp, `${JSON.stringify(games, null, 2)}\n`);
fs.renameSync(tmp, path);
