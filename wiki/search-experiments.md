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

## Melodia incoming links and project-file attribution — 2026-09-09

Search incoming GitHub links for [Melodia Melusina](https://github.com/fromage3900/MelodiaMelusinaV2). Then run the project-file queries `GPT-6 Astra project.godot`, `GPT-6 Astra .uproject`, `GPT6 Astra project.godot`, and `GPT6-Astra project.godot` in series.

The incoming-link results were self-references inside Melodia and portfolio mirrors. They did not expose another game repository. The exact Godot query returned only this collection's own research files. The Unreal project-file query and both spelling variants returned no useful external game repository. Do not count self-search results or portfolio mirrors.

### Critique gate

This branch is below the acceptance threshold as a discovery method: the yield is 0 new game repositories from 103 returned or inspected hits. Keep it as a verification and provenance check, but drop it as a primary discovery experiment.

### Next experiment

Search source files for `GPT-6 Astra package.json`, then search Unity project settings with an explicit model phrase. Continue serially. Inspect direct GitHub links from `astra-gallery` only when a link resolves to an accessible repository with a real game and model evidence.

## Critique gate: engine-first discovery — 2026-09-09

The critique scored both methods in the previous branch at **3.8/10** overall:

- Melodia incoming-link search: novelty 3, verification 5, yield 1, repeatability 7, source reliability 3.
- Model-name plus engine-file searches: novelty 2, verification 4, yield 1, repeatability 9, source reliability 3.

Drop both as primary discovery methods. Keep them only for provenance checks. The critique identified two failure modes: searching this collection creates circular evidence, and combining a model phrase with an engine filename misses repositories where the attribution and engine files are separate.

### Next experiment

Discover repositories by engine and game topics first. Search `topic:game topic:godot archived:false fork:false` and `topic:game topic:unreal-engine archived:false fork:false` in series. Then inspect each retained repository for a playable game and separately verify Astra, Opus, or Fable attribution.

## Engine-topic and engine-name discovery sweep — 2026-09-09

Run the Godot and Unreal topic searches in series. The GitHub CLI returned broad, repetitive game repositories, engines, catalogs, and unrelated projects for both queries. The topic filters did not isolate model-attributed games.

Run the narrower name searches `Astra Godot` and `Astra Unity`. `Astra Godot` returned three repositories: [Astrael-Godot](https://github.com/incri7/Astrael-Godot), which contains only a `.gitignore`; [3d_astra_godot](https://github.com/buicongnguyen/3d_astra_godot), a substantial playable Godot RTS without GPT-6 Astra/Opus/Fable evidence; and [ad-astra-godot-framework](https://github.com/oliverpatrick/ad-astra-godot-framework), a framework rather than a game. `Astra Unity` returned hardware-camera samples, name collisions, and [astra-unity](https://github.com/abuyukyi101198/astra-unity), a Unity terminal-like game without model attribution. Reject all four.

### Critique gate

Score this sweep **4/10**. It is repeatable and it finds real engine projects, but the topic syntax is noisy and the name searches produce collisions. Drop it as a primary discovery method. Keep engine searches only after a creator, post, or curated source identifies a specific candidate.

### Next experiment

Use the direct GitHub URLs and X posts in `majiayu000/astra-gallery` as leads. Search each creator's public GitHub repositories serially. Count only a repository with a real game source, a playable entry point, and explicit GPT-6 Astra, Claude Opus, or Claude Fable evidence.

## X creator-first Astra game search — 2026-09-09

Use the authenticated X feed to run:

- `("GPT-6 Astra" OR "GPT6 Astra") (game OR playable) (github.com OR itch.io)`
- `from:Im_IrushiK (game OR demo) (github.com OR itch.io)`

The search exposed two direct GitHub games:

- [Imirushik/sunbreak-downhill-3D-game](https://github.com/Imirushik/sunbreak-downhill-3D-game) — a complete Three.js downhill BMX race with physics, tricks, AI riders, weather, scoring, replay, tests and a creator post explicitly attributing the build to GPT-6 Astra.
- [Vheissu/hit-and-run-web](https://github.com/Vheissu/hit-and-run-web) — a live Three.js browser reconstruction with campaign missions, races, vehicles, walking, police pursuit, saves, converted assets and automated checks. The creator's post explicitly attributes the build to GPT-6 Astra.

The X search also repeated [GOROman/gpt-6-astra-ps1-game-benchmark](https://github.com/GOROman/gpt-6-astra-ps1-game-benchmark), which was already verified. It linked to catalogs from MartinDelophy and magiccreator-ai, which were not counted as games.

### Research correction

Reopen rejected candidates when stronger first-party evidence appears. The Hit & Run repository was previously rejected because its README mentioned Codex and Claude. The creator's direct X post is explicit model attribution, so the repository is now verified and the stale rejection was removed.

### Next experiment

Search `from:CtrlAltDwayne (game OR demo) (github.com OR itch.io)` and inspect direct links one at a time. Then search the next relevant creator handle from the X results. Keep model attribution and game-source verification separate.

## X creator follow-up: CtrlAltDwayne — 2026-09-09

Run the creator searches `from:CtrlAltDwayne (game OR demo) (github.com OR itch.io)`, `from:CtrlAltDwayne Astra`, and `from:CtrlAltDwayne "Saber Descent" github` in series. Resolve shortened links before verifying repositories.

The search found [Vheissu/saber-battle](https://github.com/Vheissu/saber-battle). The X post identifies Saber Descent as a GPT-6 Astra dungeon crawler with open-source code. The README independently confirms GPT-6 Astra and documents five dungeon depths, combat, enemies, portals, tests, a live demo and screenshots. Add one browser game.

The same creator linked [Vheissu/emerald-bayou](https://github.com/Vheissu/emerald-bayou), a substantial Three.js airboat game with a live demo, jobs, wildlife, weather and tests. Its post and README do not identify GPT-6 Astra, Claude Opus or Claude Fable. Keep it as an unconfirmed candidate.

The creator also posted Stick Fighter, but the result had only a Railway live URL and no public GitHub repository. Do not add it to a GitHub collection.

### Next experiment

Search the Vheissu GitHub account for adjacent public game repositories. Then search X for exact model phrases combined with Unity, Unreal, Godot and PlayStation. Resolve every link and require both game and attribution evidence.

## X non-browser engine search — 2026-09-09

Run `("GPT-6 Astra" OR "GPT6 Astra") (Godot OR Unity OR Unreal OR PlayStation) github.com` in the authenticated X feed. The search found [ToBeWin/vector-rush](https://github.com/ToBeWin/vector-rush). Its creator post says GPT-6 Astra made VECTOR RUSH with Godot and Blender. The repository contains a real Godot 4.7.2 project, `project.godot`, `main.tscn`, three tracks, three AI opponents, drift and nitro, medal progression, tests, a native macOS package, a web export and gameplay screenshots. Add it to **Non-Browser Engines**.

The other visible results were articles or catalogs without direct GitHub game repositories. Do not count them.

### Next experiment

Run exact X searches for GPT-6 Astra plus Unity, Unreal and PlayStation in series. Resolve shortened links and verify each repository before adding it.

## Critique gate: split non-browser X searches — 2026-09-09

The critique scored the combined multi-engine X query **7/10**: novelty 9, verification 8, yield 4, repeatability 7, source reliability 7. Drop that combined query from the repeat rotation. Keep X creator discovery, but treat creator attribution and repository evidence as separate checks.

### Next experiments

Run these exact searches in order:

1. `("GPT-6 Astra" OR "GPT6 Astra") Unity (game OR racing OR platformer) github.com`
2. `("GPT-6 Astra" OR "GPT6 Astra") ("Unreal Engine" OR UE5) game github.com`
3. `("GPT-6 Astra" OR "GPT6 Astra") (PlayStation OR PS5 OR PS4) game github.com`

Record native export evidence separately from engine mentions. A PlayStation phrase can describe visual style, and Unity or Unreal can also produce browser games.

## Split X engine searches — 2026-09-09

Run the Unity, Unreal and PlayStation queries in series:

- `("GPT-6 Astra" OR "GPT6 Astra") Unity (game OR racing OR platformer) github.com`
- `("GPT-6 Astra" OR "GPT6 Astra") ("Unreal Engine" OR UE5) game github.com`
- `("GPT-6 Astra" OR "GPT6 Astra") (PlayStation OR PS5 OR PS4) game github.com`

The three searches returned no new direct GitHub game repositories. Visible results were articles, catalogs or unrelated model discussions. Keep these as low-yield probes. Do not infer that no Unity, Unreal or PlayStation games exist.

### README classification correction

The README classifier previously inspected game names for engine keywords. That placed **The Simpsons: Hit & Run — Browser Reconstruction** in the non-browser section because `reconstruction` contains `construct`, and it risked treating browser projects named Minecraft as native Minecraft games. Change the classifier to inspect explicit technology fields only. Keep Godot, Unity, Unreal, Pygame, native desktop, Luanti, PlayStation, Minecraft mods, and related runtime evidence in **Non-Browser Engines**.

### Next experiment

Search creator handles from the X results directly. Then run an exact Opus/Fable creator-first X search so the collection does not depend on Astra-only discovery.

## X creator-first Opus/Fable game search — 2026-09-09

Run `("Claude Opus" OR "Claude Fable" OR "Fable 5") (game OR playable) (github.com OR itch.io)` in the authenticated X feed.

The search found [Franklin-C/turbo-kart-grand-prix](https://github.com/Franklin-C/turbo-kart-grand-prix), which was already verified. The creator's post explicitly says Claude Fable 5.1 built the Mario Kart-style game and links both the repository and the live Vercel demo. Upgrade the existing record with the X source, live URL, four screenshots, and the detailed README evidence. Do not create a duplicate record.

Other results were articles or catalogs. No new repository passed this search.

### Next experiment

Search `from:Franklin_Eh (game OR playable) (github.com OR itch.io)`. Then search exact Claude Opus plus GitHub game posts. Inspect direct repositories one at a time.

## X creator follow-up: Franklin_Eh — 2026-09-09

Run `from:Franklin_Eh (game OR playable) (github.com OR itch.io)`.

The search returned only the existing [Franklin-C/turbo-kart-grand-prix](https://github.com/Franklin-C/turbo-kart-grand-prix) post. No new Fable game repository passed verification. Keep the upgraded record and do not duplicate it.

## X creator follow-up: sudoingX — 2026-09-09

Run `from:sudoingX github.com`.

The search found [sudoingX/octopus-invaders](https://github.com/sudoingX/octopus-invaders). GitHub verification confirms a playable browser space shooter with source, controls and a complete game loop. Its README identifies Qwen 3.5 9B and Hermes Agent, so reject it for this Astra, Claude Opus and Claude Fable collection. This is a useful negative control: verify the game and the model attribution separately.

### Next experiment

Search exact Claude Opus plus GitHub game posts. Inspect each direct repository one at a time and retain only projects with explicit Astra, Opus or Fable evidence.

## X exact Claude Opus game search — 2026-09-09

Run `"Claude Opus" game github.com`.

The narrower search returned an Astra museum walkthrough article, OpenClaw material and unrelated articles. It exposed no direct GitHub game repository with Claude Opus attribution. Keep this as a low-yield probe. Do not infer that no Opus games exist.

### Next experiment

Search exact Claude Fable game GitHub posts. Then search GPT-6 Astra with one engine or genre term at a time.

## X exact Claude Fable game search — 2026-09-09

Run `("Claude Fable" OR "Fable 5.1") game github.com`.

The search found [achimala/TheLongSilence](https://github.com/achimala/TheLongSilence). GitHub verification confirms a substantial Three.js/WebGL2 browser space-exploration game with a live demo, flight, scanning, landing, encounters, custom shaders and automated browser verification. The README identifies Claude Opus 5 as the original builder. Anshu's [creator post](https://x.com/anshuc/status/2095526170972594240) explicitly says Claude Fable 5.1 overhauled the game and links the repository and demo. Add one verified game unit.

The same search exposed [kalelooz/game-x](https://github.com/kalelooz/game-x), which is a game-development skill toolkit, not an individual game. Reject it.

### Next experiment

Search the Anshu creator feed for more direct game repositories. Then search Claude Fable with one engine at a time: Godot, Unity or Unreal.

## Anshu creator-feed follow-up — 2026-09-09

Run `from:anshuc game github.com` and then `from:anshuc Astra github.com` in series.

The first search confirmed the existing [The Long Silence](https://github.com/achimala/TheLongSilence) links and exposed no additional direct game repository. The second search exposed [achimala/dream-loop](https://github.com/achimala/dream-loop). GitHub verification shows that it is an agent skill and reusable workflow with a demo example, not an independently authored game. Reject it. The feed also showed a separate Astra game video without a direct repository link; do not add it until a repository is available.

### Next experiment

Search exact Claude Fable with Godot, then Unity, then Unreal. Run each query separately and verify each repository before adding it.

## Split Claude Fable engine searches — 2026-09-09

Run these queries in series:

- `("Claude Fable" OR "Fable 5.1") Godot game github.com`
- `("Claude Fable" OR "Fable 5.1") Unity game github.com`
- `("Claude Fable" OR "Fable 5.1") (Unreal OR "Unreal Engine" OR UE5) game github.com`

The Godot and Unreal searches returned articles. The Unity search returned no results. No direct Claude Fable game repository passed verification. Keep this as a low-yield engine probe. Do not infer that no Fable engine games exist.

### Next experiment

Run the same three engine probes for GPT-6 Astra, one query at a time. Verify direct repositories before adding them.

## Split GPT-6 Astra engine searches — 2026-09-09

Run these queries in series:

- `("GPT-6 Astra" OR "GPT6 Astra") Godot game github.com`
- `("GPT-6 Astra" OR "GPT6 Astra") Unity game github.com`
- `("GPT-6 Astra" OR "GPT6 Astra") (Unreal OR "Unreal Engine" OR UE5) game github.com`

The three searches returned articles or model discussions. No new direct engine game repository passed verification. Keep the separate **Non-Browser Engines** category. Do not infer that no Astra engine games exist.

### Next experiment

Run a sequential GitHub code search for exact Claude Fable attribution. Inspect direct repositories one at a time.

## Sequential GitHub code search: model attribution plus game terms — 2026-09-09

Run these searches one at a time:

- `"Claude Fable 5.1"`
- `"Fable 5.1" game`
- `"Claude Fable" "Three.js"`
- `"Claude Opus 5" game`
- `"GPT-6 Astra" game`

The broad Fable search returned model documentation and agent repositories. The narrowed searches returned no new game repositories. The Astra query only matched this project's own research log. Drop this code-search pattern from the primary rotation because it is dominated by documentation and has no game-specific filtering.

### Next experiment

Return to creator-first X searches with direct GitHub links. Search one known high-yield creator handle at a time.

## Known Astra creator follow-ups — 2026-09-09

Run `from:CtrlAltDwayne github.com`, then `from:Im_IrushiK github.com`.

The CtrlAltDwayne feed returned only the existing [emerald-bayou](https://github.com/Vheissu/emerald-bayou) and [saber-battle](https://github.com/Vheissu/saber-battle) game links. The Irushi feed returned only the existing [sunbreak-downhill-3D-game](https://github.com/Imirushik/sunbreak-downhill-3D-game) link and its GPT-6 Astra attribution. No new repository passed verification.

### Next experiment

Search another known Astra creator handle. Use direct GitHub links from new X posts only, and inspect each repository one at a time.

## GOROman broader creator search — 2026-09-09

The first query, `from:GOROman github.com`, returned only the existing [FACET FIGHTER](https://github.com/GOROman/gpt-6-astra-ps1-game-benchmark) record. Its score was low because it required the repository URL in the original post.

Run the broader query `from:GOROman (game OR ゲーム)`.

This exposed a relevant Famicom/PlayStation development thread. Inspect the thread and its replies. The thread linked [GOROman/calude-famicom-game](https://github.com/GOROman/calude-famicom-game) in a separate post. GitHub verification confirms a four-stage side-scrolling Famicom action game with a ROM, 6502 source, browser WASM emulator, controls, build instructions and three screenshots. The README identifies Claude Code (Fable 5). Add it under **Non-Browser Engines**.

This result changes the method: search creator game posts first, then follow thread links. Do not require `github.com` in the original search hit.

### Next experiment

Critique the broader creator search. If the score is at least 8/10, apply the method to another known creator. If it is below 8/10, drop it from the primary rotation and retain only targeted follow-up use.

## Cross-author model search — 2026-09-09

Run the serial X search `(Astra OR "Claude Opus" OR "Claude Fable") (game OR playable OR demo)`.

The search exposed WoahWurdz posts for [BLACKWATER](https://github.com/Hiraeth010/blackwater) and [BLACKSITE](https://github.com/Hiraeth010/blacksite). Verify the repository, model attribution, game loop and live deployment separately. BLACKWATER is a playable Three.js tactical FPS. BLACKSITE is a playable Three.js wave-survival FPS with Rapier physics. Start the BLACKSITE demo and confirm its Wave 01 HUD state before counting it.

The same search exposed [Braffolk/fable5-world-demo](https://github.com/Braffolk/fable5-world-demo). Verify it, but reject it because it is a visual exploration and capability demo without a game loop or objective.

Keep the two verified FPS projects in the browser-game category. Keep [CALUDE KODO](https://github.com/GOROman/calude-famicom-game) in **Non-Browser Engines** because its primary runtime is a Famicom ROM, even though it also has a browser emulator.

### Next experiment

Critique this cross-author method. Apply it to one known creator only if the score is at least 8/10. Keep searches serial and inspect each direct repository once.

## Critique gate: cross-author model search — 2026-09-09

The critique scored the cross-author search **7/10**, so drop it from the primary rotation.

- Novelty: 7. Two new game units, but both came from one repository owner and one X account.
- Verification quality: 9. Repository inspection and live-demo checks were strong.
- Yield: 7. Two additions came from twelve visible posts, but the sample was small.
- Repeatability: 5. The search lacked a fixed date range, Latest-mode rule, post ledger and time limit.
- Source reliability: 6. X supplied leads; the repositories supplied stronger evidence.
- False-positive control: 8. The game-loop test correctly rejected the visual exploration demo.

Keep BLACKWATER and BLACKSITE. Do not treat the method as broad evidence until it passes a source-diversity test.

### Next experiment

Repeat the query with `-from:WoahWurdz`, a fixed seven-day window ending 2026-09-09, and Latest mode. Inspect up to 30 unique posts within 30 minutes. Record each post URL, repository owner, duplicate status and decision. Verify each repository and live demo separately.

## Controlled diversity search — 2026-09-09

Run the Latest-mode query `(Astra OR "Claude Opus" OR "Claude Fable") (game OR playable OR demo) -from:WoahWurdz since:2026-09-02 until:2026-09-10`.

The search exposed six accessible posts. They discussed Astra, games, or AI demos, but none linked a direct GitHub game repository. Do not add a candidate from a model discussion or a video-editing reference. This pass produced zero new records.

### Next experiment

Run the same fixed date window with `github.com` required and `-from:WoahWurdz`. If it remains empty, split the query by model or engine. Critique this controlled pass before broadening the search.

## Controlled direct-link search — 2026-09-09

Run `(Astra OR "Claude Opus" OR "Claude Fable") (game OR playable OR demo) github.com -from:WoahWurdz since:2026-09-02 until:2026-09-10` in Latest mode.

The search returned five accessible posts. The relevant posts all linked [kalelooz/game-x](https://github.com/kalelooz/game-x), which is a reusable game-development skill toolkit. It is not an individual game, so do not count it. This pass produced zero new game records.

### Next experiment

Score this direct-link pass. If it scores below 8/10, stop repeating this query family and switch to GitHub reverse-link or creator-source expansion.

## Critique gate: controlled direct-link search — 2026-09-09

The critique scored this pass **4/10**, so drop it from the primary rotation.

- Novelty: 1. Every relevant hit pointed to the known toolkit.
- Yield: 1. Five posts produced zero new game records.
- Verification quality: 7. The toolkit classification was already verified.
- Repeatability: 7. The query, date window and Latest mode were recorded.
- Source reliability: 5. X supplied leads; no new repository evidence was found.
- False-positive control: 9. Do not count a repeated toolkit as a new game or rejection.

### Next experiment

Keep X Latest and the same seven-day window. Require `"play now"`, `"playable demo"` or `"play here"`, require `github.com`, exclude `kalelooz/game-x` and `WoahWurdz`, inspect up to 20 accessible posts, and deduplicate repository URLs before verification.

## Playable-claim search — 2026-09-09

Run `(Astra OR "Claude Opus" OR "Claude Fable") ("play now" OR "playable demo" OR "play here") github.com -"kalelooz/game-x" -from:WoahWurdz since:2026-09-02 until:2026-09-10` in Latest mode.

X returned no results. Record this as a query limitation, not evidence that no matching games exist. Stop this wording variant after critique and switch to GitHub reverse-link expansion.

## Critique gate: playable-claim search — 2026-09-09

The critique scored the empty playable-claim query **5/10**, so drop it from the primary rotation.

The exact wording and GitHub requirement improved noise control, but the three play phrases reduced recall and gave no candidate to verify. Do not infer absence from an empty X result.

### Next experiment

Search GitHub repository READMEs for `Astra`, `Claude Opus` and `Claude Fable` in separate serial queries. Use `pushed:2026-09-02..2026-09-09` as a discovery filter only. Check model attribution and playability as separate claims.

## Critique gate: Claude Fable README search — 2026-09-09

The initial critique scored the search 8/10, but duplicate reconciliation corrected the result: `sorrycc/fable-arcade` was already recorded. The corrected score is **6/10**, so drop this unchanged query from the primary rotation.

The pass improved the existing record with eight direct source links and eight public play URLs. Repository source and model/date/prompt records are strong, but the search added zero new game units and all eight games still come from one repository.

### Next experiment

Do not repeat the same query without a changed date window. Inspect incoming links to [sorrycc/fable-arcade](https://github.com/sorrycc/fable-arcade), then switch to a new seed or date partition.

## Fable alias search — 2026-09-09

Run `Fable game in:readme pushed:2026-09-02..2026-09-09`.

The search returned no new game repository. Results were dominated by F# Fable software, catalogs, skills, benchmarks, old ports and the existing `PhiloLabs/fable51-worlds` record. Do not treat the word `Fable` alone as Claude Fable evidence.

### Next experiment

Critique the alias search. Then search incoming links to [sorrycc/fable-arcade](https://github.com/sorrycc/fable-arcade). Extract only direct game repositories from relevant list files.

## Critique gate: Fable alias search — 2026-09-09

The critique scored the alias query **4/10**, so drop it from the primary rotation. The word `Fable` matched unrelated F# software and reference material. GitHub was a reliable source, but false-positive control was weak and the pass found zero new game repositories.

### Next experiment

Search `"Fable" "gameplay" in:readme pushed:2026-09-02..2026-09-09` with the same limit and recent-update sort. Compare against the saved set. Then inspect incoming links to [sorrycc/fable-arcade](https://github.com/sorrycc/fable-arcade).

## Critique gate: Fable gameplay search — 2026-09-09

The critique scored the search **6/10**, so drop this wording from the primary rotation. The pass found zero new independent games, but it correctly rejected a name collision and a derivative game with clear README evidence. Keep the exclusion rules.

### Next experiment

Run `"Fable 5.1" in:readme pushed:2026-09-02..2026-09-09`, sorted by updated descending, with limit 20. Save all returned repositories. Check original-game lineage, model attribution and playable evidence before counting anything.

## Explicit Fable 5.1 search — 2026-09-09

Run `Fable 5.1 in:readme pushed:2026-09-02..2026-09-09`, sorted by updated descending, with limit 20.

The search returned workflow tools, agent skills, documentation, catalogs and infrastructure. It exposed no unseen accessible game repository. Keep explicit model attribution as a verification rule, but do not use this unfiltered query as a primary discovery family.

### Next experiment

Critique this search. Use a new verified game seed for incoming-link expansion, or return to serial creator-source searches when a direct repository link appears.

## Fable 5.1 game search — 2026-09-09

Run `Fable 5.1 game in:readme pushed:2026-09-02..2026-09-09`, sorted by updated descending, with limit 20.

This game-specific exact search exposed [Ashen-Skool/Aot-Fable-5.1](https://github.com/Ashen-Skool/Aot-Fable-5.1). Verify its public project page and README. It documents a playable Unity 6 action game with ODM traversal, combat, Titan objectives, native/WebGL builds, tests, screenshots and a Claude Fable 5.1 builder/critic gauntlet. Add it under **Non-Browser Engines**.

### Next experiment

Critique this result. Then search incoming links to the new Unity game. Keep native and browser exports separated by primary engine.

## Critique gate: Fable 5.1 game search — 2026-09-09

The critique scored the game-specific exact search **8/10**, so keep it in the primary rotation. It found one new repository with strong README evidence for a Unity game, native/WebGL builds, tests and direct Fable 5.1 gauntlet attribution. Keep the method with non-overlapping date partitions and stable repository IDs.

### Next experiment

Run `Fable 5.1 game in:readme pushed:2026-08-25..2026-09-01`, sorted by updated descending, with limit 20. Record all rejection reasons and compare repository IDs with the current set.

## API date-partition audit — 2026-09-09

The `gh` CLI wrapper did not reliably apply the prior non-overlapping `pushed` range. Run the equivalent direct GitHub REST API query:

`"Fable 5.1" game in:readme pushed:2026-08-25..2026-09-01`

The API returned three already-recorded games — [Turbo Kart Rush](https://github.com/bridge-mind/turbo-kart-rush), [SUPER FABLE BROS.](https://github.com/INONONO66/fable-5.1-mario), and [NEON WARDEN](https://github.com/Nipale-ai/fable-5-1-one-prompt-game) — plus [rts-benchmark](https://github.com/0xlnz/rts-benchmark). The benchmark is an evaluation project, not an independently authored game. Add no new game unit. Keep the three known records, including their upgraded live/source evidence.

### Critique gate

Score this experiment **3/10**. It found zero new games, repeated known records, exposed unreliable CLI date filtering, and produced a benchmark false positive. Drop it from the primary rotation. Keep direct REST date partitions only as secondary audits after stronger game-type filtering.

### Next experiment

Inspect incoming links to [Ashen-Skool/Aot-Fable-5.1](https://github.com/Ashen-Skool/Aot-Fable-5.1) one search at a time. Continue to classify Unity, Godot, Unreal, console, and other native-engine projects under **Non-Browser Engines**.

## AOT incoming-link pair — 2026-09-09

Search the exact URL `https://github.com/Ashen-Skool/Aot-Fable-5.1`, then search `Ashen-Skool/Aot-Fable-5.1`.

Both queries returned only the repository's own README self-reference. They exposed no external list, reverse-link source, or new game repository. Mark this seed exhausted for incoming-link discovery. Keep the AOT record under **Non-Browser Engines** because Unity 6 and native macOS are its primary runtime evidence, even though it also documents a WebGL build.

### Next experiment

Critique the AOT incoming-link pair. If it scores below 8/10, switch to another verified Unity, Godot, or Unreal seed and keep each search serial.

### Critique result

The pair scored **3/10**. Exact URL and owner/repository searches are repeatable and have strong false-positive control, but they returned only the repository's own README and zero new games. Drop them from the primary rotation. Keep them only as a low-cost identity preflight before broader reverse-link searches.

### Next experiment

Search another verified Unity, Godot, or Unreal seed with a broader list-oriented query. Prefer creator-source links, inspect each repository once, and keep the searches serial.

## Astra catalog expansion — 2026-09-09

Run the native-engine-oriented query `"GPT-6 Astra" Godot game in:readme` with updated sorting and a limit of 30. It exposed current Astra catalogs, known games, tools, and benchmarks. Treat catalog repositories as discovery sources only.

Inspect [xianyu110/awesome-gpt-6-astra](https://github.com/xianyu110/awesome-gpt-6-astra). Its `PLAYABLE.md` contains 86 live demo entries, but most entries do not provide a public GitHub source. Do not add playable-only entries to `games.json`.

Inspect the distinct [magiccreator-ai/awesome-gpt-6-astra](https://github.com/magiccreator-ai/awesome-gpt-6-astra) list. Its 42 game/demo entries include direct creator-code links. The list led to [alesha-pro/bench-portal](https://github.com/alesha-pro/bench-portal), whose tree contains separate game source and metadata for:

- [VOIDRUNNER: Orbital Combat League](https://github.com/alesha-pro/bench-portal/tree/main/games/voidrunner-astra) — [play](https://alesha-pro.github.io/bench-portal/games/voidrunner-astra/)
- [VOIDBOUND: The Choir of Ash](https://github.com/alesha-pro/bench-portal/tree/main/games/voidbound-choir-of-ash) — [play](https://alesha-pro.github.io/bench-portal/games/voidbound-choir-of-ash/)
- [Onslaught](https://github.com/alesha-pro/bench-portal/tree/main/games/onslaught-fable-5.1) — [play](https://alesha-pro.github.io/bench-portal/games/onslaught-fable-5.1/)

Browser verification started all three demos and showed gameplay state. Exclude the portal's RIG folders because they are 3D showcases without game rules. Add the three game units under one canonical repository record. Keep direct source and play links in the README.

### Next experiment

Critique this list-expansion method. Follow another distinct catalog only if the score is at least 8/10. Continue to require a canonical repository, actual game state, and Astra, Opus, or Fable evidence.

### Critique result

The method scored **8/10**. It produced three new game units and had strong false-positive control. Keep it in the primary rotation. The raw playable-URL count is not the useful metric: catalog entries are leads. Require direct source provenance and stronger runtime evidence than a page load before counting.

### Next experiment

Inspect [zlxxlz1026/awesome-gpt-6-astra-casebook](https://github.com/zlxxlz1026/awesome-gpt-6-astra-casebook) as a distinct catalog. Extract direct creator-code links only, then verify each candidate serially.

## Casebook catalog audit — 2026-09-09

The casebook has 13 game and simulation cases, including Unity, Godot, and Three.js entries. Its game category supplies prompts, X posts, and demo references, but no direct GitHub game repositories. [VOIDRUNNER](https://github.com/alesha-pro/bench-portal/tree/main/games/voidrunner-astra) is already recorded from the other catalog. Add no new record from this pass.

### Next experiment

Critique this zero-yield catalog pass. If it scores below 8/10, switch to another distinct catalog with direct source links or return to creator-source discovery.

### Critique result

The casebook audit scored **2.2/10**. It supplied no new direct GitHub game repository, so its verification and repeatability were weak. Drop it from the primary rotation. Keep it only as a low-priority lead list if a later source reveals direct repositories for its cases.

### Next experiment

Inspect [archorfight/awesome-gpt-6-astra](https://github.com/archorfight/awesome-gpt-6-astra) as another distinct catalog. Prefer entries with direct GitHub source links.

## Archorfight catalog audit — 2026-09-10

The catalog's games section contains two X/Reddit references, while its community-project section repeats known repositories and lists tools, benchmarks, and visual showcases. It exposed no unseen direct GitHub game repository. Add no records.

### Next experiment

Critique this zero-yield catalog pass. Then search a date-bounded GitHub repository window for `GPT-6 Astra` game attribution, using stable repository IDs and manual source verification.

## Fresh Astra repository window — 2026-09-10

Run `"GPT-6 Astra" game in:readme pushed:2026-09-09..2026-09-10`, sorted by updated time, with a limit of 50. The results were mixed: tools, catalogs, benchmarks, known games, and several fresh direct game candidates.

Verify [Orgxsm/azura](https://github.com/Orgxsm/azura). Its README explicitly credits GPT-6 Astra for the island design and Claude Code for the engine, rendering and quests. The repository contains source modules and a public [WebGL2 build](https://orgxsm.github.io/azura/). Browser verification showed the HUD, quest objective, counters, map, controls and autosave state. Add one game unit.

Verify [codersusu/game-city-skylines](https://github.com/codersusu/game-city-skylines). The README explicitly credits GPT-6 Astra and Codex for a Unity city-builder demo. The repository contains the Unity scene, C# simulation, screenshots, build scripts, and committed native macOS acceptance reports. The standalone playtest passed road construction, zoning, growth, save/load, traffic, pedestrians and progression from 24 to 609 residents with a working stadium. Add it under **Non-Browser Engines**. Do not claim a browser playtest because no public browser build is provided.

### Next experiment

Inspect [derek-wang/OpenCityMaker](https://github.com/derek-wang/OpenCityMaker) next. Verify whether it is an actual game and whether its GPT-6 Astra attribution is explicit rather than a generic tool mention.

OpenCityMaker could not be verified. GitHub metadata, README, and tree requests all returned **404**. Keep it in `research/candidates.json` as an inaccessible rejection; do not infer a game from the search result description.

### Next experiment

Inspect the next fresh direct game candidate from the same date window. Require repository metadata before reading source files.

### Critique result

The audit scored **2/10**. It found no new direct GitHub game repository and produced weak, indirect social leads. Drop it from the primary rotation. Keep it only as a low-value community-signal reference.

### Next experiment

Search a date-bounded GitHub repository window for `GPT-6 Astra` game attribution. Inspect returned repositories one at a time, compare numeric IDs, and exclude tools, benchmarks, and visual showcases.

The next result, [xzmzm/daily-slop](https://github.com/xzmzm/daily-slop), is a daily web-app gallery. Its current GPT-6 Astra entry is a typesetting playground; its game-like entry is attributed to GPT-5.6 Sol. Reject the gallery and unrelated apps.

### Next experiment

Inspect the next fresh direct game candidate from the same date window. Prefer repositories whose README names a qualifying game and model together.

The fresh game-focused [MartinDelophy/awesome-gpt-6-astra](https://github.com/MartinDelophy/awesome-gpt-6-astra) catalog exposed a stale source link for OpenCityMaker. The live canonical repository is [derek-wangpch/OpenCityMaker](https://github.com/derek-wangpch/OpenCityMaker), not the 404 `derek-wang/OpenCityMaker` alias. Verify numeric repository IDs after following list links.

CityMaker passed verification: it is a real Three.js 2048 game with twelve cities, 132 procedural models, scores, win/loss rules, saves, a public deployment, and GPT-6 Astra creation evidence. Browser verification showed the live board and controls. Add one browser game unit.

### Next experiment

Critique the fresh Astra repository window and canonical-link correction. Then inspect another unseen source only after the critique.

## Exact September 8 REST search — 2026-09-10

The CLI repeated the September 9 result set even when asked for the exact September 8 partition. Use the direct REST query instead:

`"GPT-6 Astra" game in:readme pushed:2026-09-08..2026-09-08`

The corrected results exposed fresh candidates. Verify [songkeys/little-flock](https://github.com/songkeys/little-flock): the README explicitly credits GPT-6 Astra in Codex for a one-shot cooperative sheep-farming game. The repository contains React Three Fiber frontend code, a Go server, WebSocket state, persistence, progression, tests, a gameplay video and a public deployment. The live page reached its account-creation play flow; no account was created, so authenticated gameplay remains untested. Add one browser game unit with that limitation.

### Next experiment

Inspect [xindomusic/pulsebreak](https://github.com/xindomusic/pulsebreak) next. Verify the Godot native game, its GPT-6 Astra evidence, and its actual game loop.

Verify [xindomusic/pulsebreak](https://github.com/xindomusic/pulsebreak). The README explicitly credits GPT-6 Astra inside Codex for a native Godot 4.7.2 arena roguelite. Source, tests, save state, upgrades, a Reactor Guardian boss, four review rounds and an automated winning run are present. Add it under **Non-Browser Engines** because the packaged Mac app is not published as a browser build.

Verify [davbachman/Mechapede](https://github.com/davbachman/Mechapede). The README explicitly credits GPT-6 Astra for a mechanical Centipede-style arcade game. The repository contains browser game systems, audio, collision and chain motion code, tests, stress tests and a public [GitHub Pages build](https://davbachman.github.io/Mechapede/). Browser verification showed the start screen, score, wave, tools, controls and firing instructions. Add one browser game unit.

Verify [monstercameron/Neural-Sight](https://github.com/monstercameron/Neural-Sight). The README explicitly describes a playable first-person browser game built with GPT-6 Astra. The repository contains PlayCanvas/WebGPU rendering, Gaussian-splat levels, movement, ballistics, collisions, weapon state, audio, HUD and an experimental zombie encounter. The public [live build](https://monstercameron.github.io/Neural-Sight/) opened its level picker and scene-loading flow with gameplay instructions. Add one browser game unit.

Verify [venkatarangan/mangoidiots-solitaire](https://github.com/venkatarangan/mangoidiots-solitaire). The README explicitly says it was generated with GPT-6 Astra. It is a complete offline-first Draw 1 Klondike game with solvable deals, hints, undo, auto-finish, IndexedDB saves, history, responsive input, two original themes and tests. The public [custom-domain build](https://solitaire.mangoidiots.com/) opened and showed its offline-game download flow. Add one browser game unit.

### Critique result

The pass scored **8/10**. AZURA and SEABRIGHT were strong direct finds; CityMaker was a useful catalog-derived find; and the stale 404 alias was rejected correctly. Keep the method. Treat `pushed` dates as activity dates, not creation dates, and label catalog-derived discoveries as secondary.

### Next experiment

Run a non-overlapping exact-date Astra repository query for `pushed:2026-09-08..2026-09-08`. Inspect repository creation dates, source, model evidence, and game state separately.

### Exact-date batch extension

The same REST batch yielded [PULSEBREAK](https://github.com/xindomusic/pulsebreak), [Mechapede](https://github.com/davbachman/Mechapede), and [Neural Sight](https://github.com/monstercameron/Neural-Sight) after serial repository checks. Keep the three records separate: PULSEBREAK is a native Godot game, while Mechapede and Neural Sight are browser games. Do not treat the REST query's pushed date as the creation date.

### Next experiment

The exact-date REST batch scored **8/10**. Keep it in the primary rotation. Repeat the query only as a comparison audit, and inspect the next unseen direct candidate from the same response without repeating known repositories. Use the fixed evidence matrix: repository content, playable deployment, and automated or test evidence.

The next serial candidate, [venkatarangan/mangoidiots-solitaire](https://github.com/venkatarangan/mangoidiots-solitaire), passed the same matrix. Continue with the next unseen candidate, [HaileyStorm/rift-chess](https://github.com/HaileyStorm/rift-chess), and classify it after checking whether its README attribution, source and runtime evidence qualify.

[HaileyStorm/rift-chess](https://github.com/HaileyStorm/rift-chess) passed verification as a Three.js 3D chess variant with a moving board, local bot, hotseat play, save/replay features, browser offline checks, source tests, a public browser build and an Electron Windows package. Browser verification opened the kinetic chess table. Keep it in **Browser Games** because the browser build is public, and record Electron as an additional runtime.

[xinbenlv/ra2-gpt-6-astra-2026-09-04](https://github.com/xinbenlv/ra2-gpt-6-astra-2026-09-04) also qualifies as an independent browser RTS recreation. Its README explicitly credits a one-shot GPT-6 Astra experiment and documents an independently written TypeScript engine, AI, rendering, map editor, skirmish play, pathfinding and combat. The public deployment opened its live shell, but first-run play requires local or Internet Archive asset preparation. Record that limitation and do not claim an immediate playable session.

[marius4lui/NULLSPACE](https://github.com/marius4lui/NULLSPACE) qualifies as a native Godot game. Its README credits GPT-6 Astra through Codex and documents a first-person survival-horror loop with a threat AI, weapon, flashlight, connected rooms, circuits, difficulty modes and a v0.3 beta release for Linux, Windows and Android. The repository contains the Godot project, original assets, native QA, performance measurements and playtest documentation. Classify it under **Non-Browser Engines**.

[codewithdivyasree/neon-drift](https://github.com/codewithdivyasree/neon-drift) qualifies as a lightweight browser runner. Its README explicitly credits GPT-6 Astra and documents three-lane movement, jump/slide hazards, power-ups, lives, missions, combo scoring, responsive controls and local persistence. The repository contains a complete `dist/index.html`, Canvas game code, CSS and state-validation notes. No hosted demo was found, so keep the verification note clear that the source is runnable but not live-deployed.

[GaintEnemyCrabBurger/reigns-ceo](https://github.com/GaintEnemyCrabBurger/reigns-ceo) contains three variants, but only the dedicated **GPT 6 Astra** version is counted. Its source is under `game/versions/v5-sixthirty`; its public [Astra build](https://gaintenemycrabburger.github.io/reigns-ceo/gpt-6-astra/) opened with four resource bars, a founder story and a Start button. Count one Astra browser game, not the original or Claude variants.

[erictfree/DECWAR](https://github.com/erictfree/DECWAR) qualifies as a non-browser terminal game. Its README credits OpenAI GPT-6 Astra and documents a playable multiplayer space battle with ships, scanning, weapons, planet capture, construction, messaging, scoring and a Romulan opponent. The TypeScript Node.js/Telnet runtime, preserved source provenance, two variants and real multiplayer tests are present. Classify it under **Non-Browser Engines**.

[lucas-wyd/False-Ritual](https://github.com/lucas-wyd/False-Ritual) qualifies as a native Godot game. The README credits GPT-6 Astra in Codex for the playable Carter House prologue and documents exploration, environmental evidence, interactive rooms and a pursuit-and-ritual sequence. The repository contains a Godot 4.3 project, QA screenshots and a v0.1.0 release with macOS and Windows ZIPs. Classify it under **Non-Browser Engines**.

[az9713/gpt-6-astra-tennis-game](https://github.com/az9713/gpt-6-astra-tennis-game) qualifies as a native Unity game. The README credits a largely autonomous Codex/GPT-6 Astra workflow for the Robo Open tennis prototype. It documents a Windows release, serving, volleys, scoring, CPU play, practice modes, learning reports and 156 validation checks. The repository contains the Unity project, C# controller, Blender assets, tests, screenshots and evidence receipts. Classify it under **Non-Browser Engines** because no browser build is included.

[nghienvothuat-a11y/GravityBox](https://github.com/nghienvothuat-a11y/GravityBox) qualifies as a native Unity physics-puzzle game. Its README documents a 100-level campaign, 10 bosses, 23 lab stages and real rigid-body mechanics. It explicitly attributes 35 difficult levels and 10 bosses to GPT-6 Astra, with the remaining campaign work attributed to GPT-5.6 Sol. The repository contains Unity source, Android build evidence, screenshots, validators and solvability tests. Count one game unit and classify it under **Non-Browser Engines**.

[KLINEKRAFT/First-Village](https://github.com/KLINEKRAFT/First-Village) qualifies as an Unreal Engine simulation/game prototype. Its README documents an embodied ancient-village world with survival resources, agent decisions, gathering, construction, navigation, HUD and a browser simulation surface. The Unreal 5.8 project contains C++ world, agent, resource, building and navigation systems, and explicitly integrates GPT-6 Astra through the Node bridge. Classify it under **Non-Browser Engines** and label it as an early simulation prototype.

[w4coder/donify](https://github.com/w4coder/donify) qualifies as a native Unreal Engine game/simulator. The README credits GPT-6 Astra and documents six-degree-of-freedom drone flight, rotor dynamics, battery simulation, waypoint missions, telemetry, weather, audio and indoor village flight. It contains a C++ Unreal 5.8.1 project, screenshots, a native 4K gameplay recording, a source release and 23 validation markers. Classify it under **Non-Browser Engines**.

[hlforever11/gpt6-city-crisis](https://github.com/hlforever11/gpt6-city-crisis) qualifies as a GPT-6 browser strategy game. Its README documents a seven-minute real-time city crisis, eight systems, limited resources, delayed causal rules, response teams, score, casualties, replay and local saves. The repository contains a Three.js/Vite runtime, deterministic simulation, audio, WebGL fallback, tests, Playwright checks, 100 seeded runs and a public [GitHub Pages build](https://hlforever11.github.io/gpt6-city-crisis/). Browser verification opened the intro, countdown, scenario and Take Control button.

[565353780/run-on-shoes](https://github.com/565353780/run-on-shoes) qualifies as a GPT6 browser runner. Its README documents running, jumping and sprinting across a giant shoe, scale changes, laser and meteor hazards, touch controls, local assets and a complete React/TypeScript/Three.js build. The public [GitHub Pages game](https://565353780.github.io/run-on-shoes/) opened with the 3D shoe world, scale control, loading state and gameplay controls.

[565353780/fly-around-sculpture](https://github.com/565353780/fly-around-sculpture) qualifies as a GPT6 browser flight game. Its README documents a 180-second session, six-axis flight, sculpture-aperture scoring, collision, cooldowns, combo multipliers, touch controls and a leaderboard. The public [GitHub Pages build](https://565353780.github.io/fly-around-sculpture/) opened with the sculpture flight screen, model-loading state, controls and GPT6 attribution.

[Ayi1337/gpt6-astra-one-shot-games](https://github.com/Ayi1337/gpt6-astra-one-shot-games) contains two separate qualifying games: [Melon Lab](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/melon-lab) and [Mosswing](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/mosswing). The README preserves the prompts and source for both. Their public demos opened successfully: Melon Lab showed fruit physics, score, energy and controls; Mosswing showed its canvas, score, start button and one-collision rules. Count two game units under one repository.

[bitofastickler/one-prompt-two-worlds](https://github.com/bitofastickler/one-prompt-two-worlds) contains two preserved game builds, but only [LASTLIGHT](https://github.com/bitofastickler/one-prompt-two-worlds/tree/main/games/lastlight) is counted because the README labels it GPT-6 Astra. The companion Last Light Lancer is GPT-5.6 Sol and is excluded. LASTLIGHT has a skiff, lighthouse defense, five tides, a Leviathan boss, upgrades, salvage, difficulty modes and offline browser launch instructions. Do not count the editorial cover as a gameplay screenshot.

[cagrikacmaz/gpt-6-astra-vs-gemini-3-8-flash](https://github.com/cagrikacmaz/gpt-6-astra-vs-gemini-3-8-flash) was rejected after a tree check. It documents an Astra browser civilization simulation and includes screenshots and recorded demonstrations, but it contains no game source, playable build or direct live-game link. Require one of those artifacts before counting a case study.

[crousty24-bit/Milady-s-Knight-godot](https://github.com/crousty24-bit/Milady-s-Knight-godot) passed verification as a native Godot game. The README credits Astra GPT-6 and describes a playable 2D action-platformer vertical slice with a two-route level, sword combat, slimes, movement mechanics, a coin-and-gate objective, persistence and 150 passing engine-level tests. The repository contains the Godot project and launch scripts, but no hosted browser build or packaged export. Add one unit to **Non-Browser Engines**.

The page-2 sweep for `"GPT-6" playable game in:readme` found five accepted game units across four new repositories: [Last Metro](https://github.com/mgoyal98/last-metro), [Game-Melon Field Lab](https://github.com/celia827/Game-Melon-Field-Lab) with two units, [Silent Meridian](https://github.com/stackloomdev/silent-meridian), [Bad Idea](https://github.com/ToukoUrsin/bad-idea), and [Failure is Not an Option](https://github.com/dan-lee-odinson/failure-is-not-an-option). Live browser verification passed for Silent Meridian and Failure is Not an Option. The others have source-backed local launch instructions; Bad Idea needs an API key for adaptive generation but keeps starter rooms playable.

Reject [Neon Kart Rush](https://github.com/NguiWeily/Neon-Kart-Rush) because its README attributes the game to GPT-5.6 Sol. Reject [Bankhar Steppe](https://github.com/gaiahead/bankhar-steppe) because its own limits describe an exploration scene without objectives or saved progress. Reject [Theandril](https://github.com/ErikBurdett/Theandril) because its GPT-6 Astra text is a future build handoff, not evidence for the current implementation. Reject [Wonder Relay](https://github.com/thepianistdirector/wonder-relay) because its README says that no playable implementation exists.

The reverse-link sweep also verified [Trial](https://github.com/pyros-projects/Trial). Its GPT-6 Astra result folders contain five separate source-backed browser games: [BLACKLINE](https://github.com/pyros-projects/Trial/tree/main/results/gpt-6_astra/10-stealth-heist), [ECHO / SHIFT](https://github.com/pyros-projects/Trial/tree/main/results/gpt-6_astra/12-rhythm-bullet-hell), [AERIS](https://github.com/pyros-projects/Trial/tree/main/results/gpt-6_astra/13-drone-racing), [Embervault](https://github.com/pyros-projects/Trial/tree/main/results/gpt-6_astra/16-procedural-roguelike), and [ECHO](https://github.com/pyros-projects/Trial/tree/main/results/gpt-6_astra/17-echo-loop-puzzler). Each folder contains an actual HTML artifact, game-specific source or embedded engine, validation evidence and screenshots. Exclude the repository's laboratories and studios.

[danielpradilla/choplifter](https://github.com/danielpradilla/choplifter) passed as a multi-variant source repository. Count only its GPT-6 Astra [Rescue Operations](https://github.com/danielpradilla/choplifter/tree/main/choplifter-6-astra) build. The public Phaser game opened with the pilot briefing, rescue counters, hostage objective and mission controls. Exclude the GPT-5.3 Codex, GPT-5.4 and GPT-5.6 Sol variants.

[lortkipa/minecraft-astra](https://github.com/lortkipa/minecraft-astra) passed source verification as **Wilderness**, a GPT-6 Astra Minecraft-style browser game with movement, mining, combat, block placement, inventory and crafting. Its advertised Netlify preview returned a 404 during the check. Keep the repository link, but label its deployment as unavailable until a new live URL is supplied.

### Critique result

The existing critique agent scored the broad GPT-6 page-2 query **8/10** and kept it for repeatable discovery with careful review. It scored the [Trial](https://github.com/pyros-projects/Trial) reverse-link method **9/10** and kept it as the strongest clustered-game method. It scored the exact GPT-6 Astra page-2 query **8/10** and kept it as a supporting method. Apply strict deduplication, separate source verification from live verification, and reject future handoff text, benchmarks without actual game artifacts, and duplicate variants.

The critique scored the [BeatAPI/awesome-3d-prompts](https://github.com/BeatAPI/awesome-3d-prompts) reverse-link method **6/10**. Drop it as a primary method because the inspected game-engine detail yielded no repository-backed game. Keep it only as a secondary lead source, and follow a catalog entry only when it exposes direct game code.

### Next experiment

Inspect page 3 of the same exact REST query. Review each unseen repository serially. Keep requiring direct source or a playable build, direct qualifying model evidence, and an actual game loop.

### Engine and alias partition

The serial `"GPT-6 Astra" playable game in:readme` repository search produced two new qualifying game artifacts. [NeoAiLabs/sidescroller](https://github.com/NeoAiLabs/sidescroller) contains a direct `gpt-6-astra.html` result with platforming, enemies, collectibles, checkpoints, a cyber-lobster boss, win and game-over states. [aaronshaver/dig-deep-descent](https://github.com/aaronshaver/dig-deep-descent) contains a public Canvas mining game and explicitly credits a GPT-6 Astra High update for the shop, upgrades, contracts, hazards, permadeath and saves. Both records are source-backed; Dig is also live on GitHub Pages. A case-study repository and a planning repository were rejected.

The same-day Godot partition returned [GameDevBench](https://github.com/waynchi/gamedevbench), but it is a benchmark with an aggregate Astra score, not one authored game. Reject it. Keep the existing native Godot, Unity and Unreal records in **Non-Browser Engines** and keep browser artifacts separate.

The Trial reverse-link check found [Alchemia](https://github.com/pyros-projects/Trial/tree/main/results/gpt-6_astra/09-falling-sand-alchemy). It has excellent Canvas source and validation, but it is an open-ended particle sandbox with no objective or win/loss state. Do not count it under the strict game-loop rule.

### Critique result

The exact playable-game search remains useful because it added two verified units from four inspected candidates. The Godot partition had zero accepted units after excluding a benchmark. Keep the playable-game query as a supporting method, but do not broaden the Godot query without a new date, alias or source family. Continue with one changed engine or model-alias partition at a time.

### Next experiment

Run one non-overlapping `GPT6` or engine-specific repository partition. Inspect every unseen result serially. Accept only a real game artifact, direct Astra/Opus/Fable evidence and a documented game loop.

### GPT6 alias partition

The serial `"GPT6 Astra" game in:readme` query found one additional non-browser game: [VANUS // Steel Horizon](https://github.com/berlinbrown/vanus-toy-sim-gpt). The README explicitly credits GPT6 Astra and provides a C++20 / SDL3 / OpenGL mech-combat sandbox with movement, aiming, pulse weapons, 18 enemy bots, score, radar, restart, deterministic autoplay and combat tests. Add it to **Non-Browser Engines**. Reject a Facebook-video pointer, a chess replay tool, and the derivative WeChat port of the already counted Melon Lab.

### Next experiment

Use one new native-engine or model-alias partition. Inspect results serially, verify the exact repository, confirm a game loop and model evidence, then update `games.json` immediately after each pass.

### Critique result

The critique scored the playable-game query **9/10** and kept it. It scored the standalone Godot query **7/10** and dropped it because it inspected one benchmark and added no game. Use the same strict checks with a different engine keyword, and compare accepted-game yield rather than widening the Godot search cosmetically.

The next serial native partition, `"GPT-6 Astra" C++ game in:readme`, produced [Advanced Daisenryaku PC](https://github.com/eric-wen-dev-it/AdvancedDaisenryaku). It is a native Windows C/C++ port of a turn-based strategy game, with campaign state, AI turns, movement, combat, production, supply, capture, saves and ROM-differential validation. The README directly credits GPT-6 Astra High. Count it under **Non-Browser Engines**, but disclose that the original ROM is required and is not included.

The critique scored the C++ method **8/10** and kept it. It has strong evidence and repeatability, but only one candidate was fully inspected. Use another language partition next and compare yield and false-positive types.

### Claude Opus / Fable language partition

The serial `"Claude Opus 4.6" game in:readme` search found [Silent Hill — Native PC Port](https://github.com/SlickAmogus/silent-hill-decomp). The README explicitly credits Claude Opus 4.6, Claude Opus 4.7 and the newer Fable model. It documents a native, fully playable start-to-finish port with maps, bosses, cutscenes, endings, combat, enemy AI, saves, alternate cameras, mod support and tests. Count one game under **Non-Browser Engines**. Require a legally obtained original disc; do not imply that the repository redistributes game data.

### Next experiment

Run one changed Opus/Fable language or engine partition. Inspect candidates serially. Keep material native ports only when the repository contains meaningful implementation work and direct model evidence.

The critique scored the Opus query **9/10** and kept it. Novelty, verification and source quality were high. Yield was limited because only one candidate was fully inspected. Add the `playable` qualifier next to test precision against catalogs and tooling.

The precision query `"Claude Opus 4.6" playable game in:readme` confirmed the already-recorded [Dungeon of Opus](https://github.com/joozio/dungeon-of-opus); it added zero new units after canonical deduplication. Its README directly credits Claude Opus 4.6 and documents a complete roguelike with procedural dungeons, turn-based combat, seven enemy types, inventory, fog of war, permadeath, a boss and a public live demo. The linked [Wiz Experiments](https://github.com/joozio/wiz-experiments) collection was inspected as a reverse-link source. Keep the standalone Dungeon repository; reject the collection and entries without exact Opus/Fable attribution.

### Next experiment

Run one new Opus/Fable query or reverse-link pass. Inspect each unseen repository serially, and prefer direct source plus live gameplay evidence.

The initial critique scored the precision query **9/10**, but canonical deduplication corrected this pass to zero new units. Re-score the method using the corrected yield before deciding whether to keep it as a primary search.

The correction audit scored the deduplicated method **6/10** and dropped it. Its verification and false-positive controls were strong, but it had zero novelty and zero new-game yield. Keep deduplication as a rule, not this exact query as a primary method. Change the platform term next.
