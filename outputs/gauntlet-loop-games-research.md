# Astra, Opus, and Fable games: verified GitHub collection

## Result

Use [games.json](../games.json) as the complete list. It contains 261 unique public GitHub repository records and 300 independently counted game units.

- Count 117 independent verified repositories.
- Keep 53 verified related-fork records for traceability, but count them as zero additional independent game units.
- Treat collections as one repository record with a `game_count` and `contained_games` list.
- Keep only games with evidence for GPT-6 Astra, Claude Opus, or Claude Fable.
- Exclude prompt catalogs, skills, starter templates, visual-only scenes, benchmarks, empty repositories, generic AI-agent projects without model evidence, and unchanged forks as independent games.
- Search one query at a time. Verify the repository, source tree, game behavior, and model attribution before adding a record.

The earlier “153” figure did not separate repository records from games inside collections. This collection makes that distinction explicit.

## Published today

Use the `published_on` field for same-day publication. Distinguish a same-day creator post from the repository creation timestamp.

- [Astra Tetris](https://github.com/Ni-Cobra/GPT-6-Astra-Minecraft-Datapack-Tetris) — created and posted today; Minecraft datapack; creator-reported GPT-6 Astra.
- [Ember Run](https://github.com/mbilalameen/games.ai) — created today; Phaser browser runner; repository description says GPT Astra.
- [No AI's Sky](https://github.com/jesuscurreripa/noaissky) — creator post today; repository created yesterday; Three.js/Vite; creator-reported GPT-6 Astra.
- [Fable 5.1 Games](https://github.com/Time-dev-alt/Fable-5.1-Games) — created today; two HTML games; creator-reported Fable 5.1.

Treat these as newly published or surfaced today. Do not claim that every repository created today was also first announced today.

## Fresh GH Archive activity

Use the GH Archive hourly event date to identify projects with fresh public activity. Today’s archive is available through hour 9 UTC. A final serial check at 10:33:44 UTC found hours 10 and 11 unpublished. Count these nine game units:

- [Astra Tetris](https://github.com/Ni-Cobra/GPT-6-Astra-Minecraft-Datapack-Tetris)
- [Ember Run](https://github.com/mbilalameen/games.ai)
- [No AI’s Sky](https://github.com/jesuscurreripa/noaissky)
- [FC 27](https://github.com/Time-dev-alt/Fable-5.1-Games)
- [VALORANT Ascent](https://github.com/Time-dev-alt/Fable-5.1-Games)
- [Coro Solto](https://github.com/corosolto/client)
- [World of ClaudeCraft](https://github.com/levy-street/world-of-claudecraft)
- [Astra — Chapter I: A delivery for Gundren](https://github.com/LucasM25-max/dnd-astra)
- [VESPER: The Hollow Earth](https://github.com/EiNSTeiN-/astra-tomb-raider-test)

Leave the tenth slot open until the next GH Archive hour or a direct creator source provides one more qualifying game. Do not count Astra-named games when the repository identifies Astra only as a character, title, or unrelated project name.

## Highest-yield game collections

Open these repositories first when you want the most playable games from one link.

| Games | Repository |
|---:|---|
| 37 | [roblox-extreme-minigames](https://github.com/lawrenceandrewlargo/roblox-extreme-minigames) |
| 15 | [renderwolf-fable5-chart-toppers](https://github.com/pawanp3/renderwolf-fable5-chart-toppers) |
| 8 | [fable-arcade](https://github.com/sorrycc/fable-arcade) |
| 7 | [fable-arcade](https://github.com/keisuke19831213-source/fable-arcade) |
| 7 | [claude-fable5-3D-games](https://github.com/shironagasu-ai/claude-fable5-3D-games) |
| 6 | [toy2game](https://github.com/asmoyou/toy2game) |
| 6 | [Baboons-Over-London](https://github.com/zuwasi/Baboons-Over-London) |
| 6 | [claude-fable5-games](https://github.com/shironagasu-ai/claude-fable5-games) |
| 4 | [astracraft](https://github.com/octopus7/astracraft) |
| 3 | [fable-sandbox](https://github.com/koviq4/fable-sandbox) |

The `games.json` records include every contained game name, the canonical repository link, evidence link, technology, model evidence, FLOPS estimate, and quality estimate.

## FLOPS estimate

Interpret `flops_estimate_raw` as an estimated FP32 workload per game at 60 FPS. Estimate the operations required by the documented renderer, simulation, effects, entities, AI, physics, networking, and server loop. Do not interpret it as measured hardware throughput or model-training compute.

Use the estimate as an engineering scale only. Mark it low confidence because repository documentation cannot measure the user's device or the actual frame workload.

The collection uses a conservative heuristic: simple Canvas games start near 220 MFLOPS, Three.js/WebGL games near 900 MFLOPS, and WebGPU or heavier physics, particles, AI, open-world, multiplayer, voxel, strategy, or tower-defense features raise the estimate. Cap the estimate at 20 GFLOPS.

## Quality estimate

Interpret `quality_estimate_10` as an evidence-based 0–10 score. Score source completeness, playable behavior, game scope, testing or deployment evidence, and model-attribution strength. Do not treat it as an artistic review or a measured player rating.

Score independent verified records from their evidence. Score unchanged related forks low and set `counted_game_units` to zero. Read `quality_estimate_basis` for the reason behind each score.

## Model evidence

Read `model_evidence` before claiming how a game was made.

- `confirmed`: repository or creator directly names Astra, Opus, or Fable.
- `creator-reported`: a creator source reports the model or method.
- `directory-method`: a curated directory connects the project to the model or method.
- `inferred`: repository identity, README, or source trail supports the attribution, but the creator does not provide a direct run log.

Do not upgrade inferred evidence to confirmed evidence.

## Discovery sources

Expand these sources for reverse-link research:

- [GPT-6 Astra curated game list](https://github.com/xianyu110/awesome-gpt-6-astra)
- [GPT-6 Astra games index](https://github.com/magiccreator-ai/awesome-gpt-6-astra)
- [Gauntlet Loop games directory](https://somethingbig.ai/games)
- [Claude of Duty source repository](https://github.com/mshumer/Claude-of-Duty)

The `discovery_sources` field records Reddit, X, itch.io, curated-list, directory, and other discovery paths when available.

## Verification status

Treat `verification_status: "verified"` as an independently counted game repository. Treat `verification_status: "verified_related"` as a real related repository that is retained for provenance but not counted again when it is an unchanged fork or duplicate build.

Run these checks after edits:

```sh
jq empty games.json
jq 'length' games.json
jq '[.[].counted_game_units] | add' games.json
```
