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
- `MartinDelophy` — inspect its curated Astra game list and extract only direct game repositories.

### Result

- Add 1 verified game unit.
- Add 1 more verified game unit after resolving the GOROman short link from X.
- Reject `marius4lui/NUL`: the inferred public GitHub URL returns 404.
- Reject video-only Spider-Man, M3TH Lab Simulator, and other posts without a public game repository.
- Do not count the X post, a catalog, or an unresolved repository as a game.

### Critique

Score this experiment 7/10. It has good novelty and repeatability, but verification quality and expected yield are too low for an unchanged method. Keep it only as a lead-generation input. Improve it by processing one query at a time and requiring an exact public repository, playable game code, a working demo or runnable entry point, model evidence, and deduplication before counting.

### Next experiment

Run these searches in order, without parallel searches:

1. `"GPT-6 Astra" game`
2. `"built with Astra" game GitHub`
3. `"AI-built game" GitHub Three.js`
4. `"vibe coded game" GitHub`

For each result, resolve the repository and inspect its README, source tree, and entry point. Add a record immediately after verification. Update the score after the pass. Drop methods that score below 8/10 unless they produce a strong new lead for a higher-yield experiment.
