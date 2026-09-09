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
