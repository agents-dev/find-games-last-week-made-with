# Search experiments

Use this page to record discovery methods, scores, and the next serial test.

## X feed and focused search — 2026-09-09

Classify verified games by runtime. Keep browser games in the browser categories. Put Godot, Unity, Unreal, Pygame, native console, Minecraft datapack, and other clearly non-browser engine projects in the separate **Non-Browser Engines** category. Do not reject a project only because it is not a web game.

Run the user's Following feed, then run this focused query:

`"GPT-6 Astra" game github`

Use the X post by [@kepochnik](https://x.com/kepochnik/status/2097286217641697459) as the seed. Inspect each linked repository in order. Resolve the canonical GitHub URL. Confirm that the repository contains playable game code. Confirm the claimed model evidence. Reject video-only posts, catalogs, and repositories without game source.

Record one verified game:

- [GPT-6 Astra × Smash Karts](https://github.com/amsminn/gpt-6-astra-smash-karts) — playable multiplayer Three.js kart game; README records GPT-6 Astra, controls, eight-player networking, bots, tests, and gameplay preview.

Record these leads for the next serial pass:

- `marius4lui/NUL` — X describes a survival-horror FPS made with Astra; inspect the repository before counting it.
- [GOROman/gpt-6-astra-ps1-game-benchmark](https://github.com/GOROman/gpt-6-astra-ps1-game-benchmark) — verified as [FACET FIGHTER](https://github.com/GOROman/gpt-6-astra-ps1-game-benchmark/blob/main/README.md), an original PS1 fighting game with GPT-6 Astra attribution, source, tests, release artifacts, screenshots, and emulator evidence.
- [LucasMarquesShiva/the-free-game](https://github.com/LucasMarquesShiva/the-free-game) — verified as The Free Game, a Godot village-building game. The creator’s [X post](https://x.com/LucasMarquesSv/status/2096772160404504583) says it is built with GPT ASTRA.
- [derek-wangpch/OpenCityMaker](https://github.com/derek-wangpch/OpenCityMaker) — verified as CityMaker, a Three.js 2048 city puzzle. Its creation record attributes all 132 procedural models to GPT-6 Astra.
- [Imirushik/sunbreak-downhill-3D-game](https://github.com/Imirushik/sunbreak-downhill-3D-game) — verified as SUNBREAK, a Three.js BMX racer. The creator’s [X post](https://x.com/Im_IrushiK/status/2096280064019353891) states that GPT-6 Astra built the whole demo.
- [bannzai/godotpractice](https://github.com/bannzai/godotpractice) — count nine contained Godot game projects from its explicit project plan. Each named project has its own `project.godot`, main scene, source, and run or test path; the plan identifies Codex GPT-6 Astra workers. Treat these as unpublished playable prototypes, not as nine separate repositories.
- `MartinDelophy` — inspect its curated Astra game list and extract only direct game repositories.

### Result

- Add 1 verified game unit.
- Add 1 more verified game unit after resolving the GOROman short link from X.
- Reject `marius4lui/NUL`: the inferred public GitHub URL returns 404.
- Reject video-only Spider-Man, M3TH Lab Simulator, and other posts without a public game repository.
- Do not count the X post, a catalog, or an unresolved repository as a game.

### Critique

Score the unchanged method 6.8/10. It found two strong games and had 9/10 verification quality, but GitHub indexing missed the known OpenCityMaker record and the yield was moderate. Drop the exact query form as a primary method because it is below the 8/10 threshold. Keep the verification gate and use the search only as a lead source.

### Next experiment

Run these searches in order, without parallel searches. Use attribution variants to improve indexing coverage:

1. `"GPT-6 Astra" Godot game`
2. `"GPT-6 Astra" "Godot 4"`
3. `"GPT-6 Astra" videogame`
4. `"GPT-6 Astra" playable`
5. `"GPT-6 Astra" release`

For each result, resolve the repository and inspect its README, source tree, and entry point. Add a record immediately after verification. Update the score after the pass. Drop methods that score below 8/10 unless they produce a strong new lead for a higher-yield experiment.

## Godot 4 variant and monorepo inspection — 2026-09-09

Run `GPT-6 Astra` plus `Godot 4` against README files. The query returned five results, but no new direct game repository. It repeated known games and found a Godot camera addon.

Inspect the strongest remaining repository lead instead of repeating the low-yield query. [bannzai/godotpractice](https://github.com/bannzai/godotpractice) contains nine explicitly scoped independent Godot projects. Verify each `games/<slug>/project.godot`, main scene, source, and run/test path. Use `documents/PROJECT.md` as method evidence. Count the nine named projects as contained game units. Do not count the other repository folders or the monorepo itself as extra games.

### Critique

Score the combined pass 7/10. Verification quality is 9/10 and the monorepo inspection produced nine valid units, but the query itself produced zero new direct repositories and scales poorly toward 900. Drop the exact query as a primary method. Retain monorepo inspection as a secondary method when a repository has explicit project boundaries and first-party model evidence.

### Next experiment

Search development documents and project files in separate sequential queries:

1. `GPT-6 Astra project.godot`
2. `GPT-6 Astra Godot Engine` with `path:documents`
3. `GPT-6 Astra Godot Engine` with `path:docs`

Count a contained game only when it has an independent project boundary, a main scene, source files, runnable instructions or tests, and explicit Astra, Opus, or Fable evidence.

## Reverse-link expansion from a verified game — 2026-09-09

Search incoming GitHub links for the verified [NULLSPACE](https://github.com/marius4lui/NULLSPACE) repository. Inspect the [Arnon-hs/open-source](https://github.com/Arnon-hs/open-source) catalog entry. Follow its cited [Dev.to GPT-6 Astra list](https://dev.to/valyuai/25-gpt-6-astra-creations-every-developer-should-see-and-how-to-enrich-them-with-real-world-datasets-d53). Inspect every direct GitHub link in that article. Do not count catalogs, tools, visual-only scenes, or agents that only play an existing game.

This chain added one verified repository:

- [xinbenlv/ra2-gpt-6-astra-2026-09-04](https://github.com/xinbenlv/ra2-gpt-6-astra-2026-09-04) — a TypeScript/Vite Red Alert 2 browser RTS with a skirmish lobby, map editor, AI, GitHub Pages build, tests, and explicit ChatGPT 6 Astra attribution.

The chain repeated the existing one-shot games and exposed no other new direct game repository. An incoming-link search for the new RTS found only the Arnon catalog entry and self-links.

### Critique

Score the exact reverse-link method 6.5/10. Verification quality is 9/10, but yield is 4/10. The method depends on incomplete curator coverage and article selection. Reject it as the primary method. Keep it as a supplemental check after adding a strong verified repository.

### Next experiment

Run GitHub-first repository metadata searches in series. Start with `Astra game`, then use exact model-name variants such as `gpt6-astra`. Inspect fresh candidates one at a time. Require a real game entry point, gameplay rules, source or release evidence, and explicit Astra, Opus, or Fable attribution. Record tool-only repositories, editors, visual scenes, and name collisions as rejected.

## GitHub repository metadata search — 2026-09-09

Run `gh search repos 'Astra game' --limit 100` and inspect recent candidates. The corrected query returned 73 repositories. It exposed many name collisions, one existing AstraCraft collection, and fresh game candidates.

Verified or updated records from this pass:

- [FLYING37520/astra-air-combat](https://github.com/FLYING37520/astra-air-combat) — Three.js air-combat game with 4v4 AI, weather, terrain, weapons, tests, and a GitHub Pages build.
- [phenomenal-manish/gpt6-astra-vs-opus5-digimon-sim](https://github.com/phenomenal-manish/gpt6-astra-vs-opus5-digimon-sim) — Canvas-based Digi Garden raising and battle game in the Astra build.
- [MrAllNeo/frost-hop](https://github.com/MrAllNeo/frost-hop) — mobile Canvas platform game with physics, combos, characters, audio, and tests.
- [vvvvvvvvvashhh/block-world-cn](https://github.com/vvvvvvvvvashhh/block-world-cn) — native Luanti/Mineclonia survival game with a downloadable Windows release; place it in Non-Browser Engines.
- [swathidbhat/gpt6-astra-max-codex-trashketball](https://github.com/swathidbhat/gpt6-astra-max-codex-trashketball), plus five high/ultra/extra-high/medium variants — playable Three.js paper-toss games with source and physics tests.
- [octopus7/astracraft](https://github.com/octopus7/astracraft) — update the existing record with the fifth playable web2 game, VOIDWRENCH. Keep web3 and web4 visual scene variants excluded.

Reject `barretovski/astra-game-rio-demo` as empty, `vaibhav-k/gpt6-astra-gameforge` as a generation harness, `SakuraTCuu/AstraGame` as a Cocos game without model attribution, `Mungoz/astraGame` as an empty repository, `keno303/blockwerk-GPT6astra` as a no-game editor, `writersrinivasan/GPT6Astra` as an explainer, and `Qw1nti/gpt6AstraThingy` as an Android utility.

Run `gh search repos 'gpt6-astra' --limit 100` next. The corrected query returned 49 repositories. Prefer candidates whose descriptions, README files, or checked-in source identify a playable game. Do not count a model name in a repository slug without gameplay evidence.

### Critique

Score the metadata sweep 7.6/10. It found ten new verified game repositories with 8/10 verification quality and 20.4% raw yield, but six records came from one Trashketball model-run family. Do not keep the exact query as the only primary method. Retain it for incremental high-precision updates.

### Next experiment

Search code for the same identifier: `gh search code '"gpt6-astra"' --limit 100`. Exclude repositories already checked in the metadata sweep. Use the same game-entry, gameplay, model-evidence, and release checks. Code search should find model attribution in README files, generation notes, configuration, commits, or source when repository metadata does not mention it.

## GitHub code search for exact attribution — 2026-09-09

Run `gh search code '"gpt6-astra"' --limit 100`. Inspect unique repositories in result order and skip repositories already examined by metadata search.

This pass returned 48 code results. Most were model registries, tools, catalogs, or unrelated documents. Two direct game sources passed:

- [PhiloLabs/fable51-worlds](https://github.com/PhiloLabs/fable51-worlds/tree/main/death-star-trench-run-gpt-astra) — the parent README labels the subproject as the GPT-6 Astra build. It contains a complete playable Rogue Squadron trench-run mission with Three.js, manual flight, combat, weapons, objectives, QA reports, and build checks.
- [TetsuakiBaba/2DAction.bench](https://github.com/TetsuakiBaba/2DAction.bench/tree/main/GPT6-Astra) — the benchmark README defines one browser game per model directory. The GPT6-Astra directory contains the complete LUMA platform game with stage completion, enemies, collectibles, lives, restart, tests, and screenshots.

Reject [emollick/abyssal-living-deep](https://github.com/emollick/abyssal-living-deep) as a substantial interactive underwater visualization without a player objective or game loop. Keep the exact identifier code search as a supplemental method because the result set contains many non-game false positives.

### Next experiment

Search incoming links to the newly verified ASTRA AIR COMBAT and Block World CN repositories. Then inspect direct GitHub links from another curated Astra list. Keep all searches serial.

## GitHub source-file attribution search — 2026-09-09

Run `gh search code 'GPT-6 Astra game' --limit 100` without a README filename restriction. Inspect each unique repository. This returned five results. Most were catalogs or this collection's own research files.

The useful new result was [fromage3900/MelodiaMelusinaV2](https://github.com/fromage3900/MelodiaMelusinaV2). It is a real Unreal Engine 5.8 rhythm-JRPG project with a `.uproject`, C++ and Blueprint systems, maps, combat, traversal, narrative progression, save state and verification tooling. Its README and handoff document identify a GPT-6 Astra game-state checkpoint. Put it in **Non-Browser Engines**.

The [awesome-gpt-6-astra-casebook](https://github.com/zlxxlz1026/awesome-gpt-6-astra-casebook) result is a catalog with no direct GitHub game links in its README. Do not count the catalog.

### Next experiment

Search project files and incoming links for the new Unreal record. Use paths such as `.uproject`, `project.godot`, `package.json`, and engine-specific manifests. Keep the game-source and model-evidence gates.

### Critique

Score the unrestricted source-file query 7/10. It found a substantial Unreal game repository that README-only search missed, but the model-use checkpoint is first-party and self-reported, and the runtime was not independently executed. Keep the method provisionally. Group file hits by repository before counting.

### Next experiment

Run the same unrestricted search with `GPT-6 Astra Unreal`. Save the model-use passage and a concrete gameplay file for every new repository. Separate catalogs, self-results, and documentation from actual game projects.

## Unrestricted Unreal attribution variant — 2026-09-09

Run `gh search code 'GPT-6 Astra Unreal' --limit 100`, then run the broader `gh search code 'Astra Unreal' --limit 100` only after the exact query is complete. Inspect each unique repository. Treat the word Astra as a name collision until a repository gives model evidence.

The exact query returned no results. The broader query returned six code results. It exposed [majiayu000/astra-gallery](https://github.com/majiayu000/astra-gallery), a catalog of social game leads, and [marcusllittle/Astra-Valkyries](https://github.com/marcusllittle/Astra-Valkyries), a real React/TypeScript shmup. The latter has an Unreal production roadmap, but `Astra` is the game name and no file attributes the game to GPT-6 Astra, Claude Opus, or Claude Fable. Reject it. Do not count the gallery because it is a catalog and has no direct, independently verified game artifact for this pass.

### Critique

Score this variant 6.5/10. The exact engine query had zero yield. The broad query found one real game but it was a model-name collision, which confirms the need for an explicit attribution gate. The catalog is useful for future social reverse-link work but is not a direct game source.

### Next experiment

Search incoming links to [Melodia Melusina](https://github.com/fromage3900/MelodiaMelusinaV2). Then search `GPT-6 Astra project.godot` and `GPT-6 Astra .uproject` serially. Require both a playable project and model evidence before adding a record.
