# Roshambo 26

> Verified game note.

![Roshambo 26 screenshot placeholder](roshambo-26-placeholder.svg)

## At a glance

- **Score:** 9.2/10
- **Model:** Claude Fable 5.1
- **Technology:** Roblox Engine, Luau, Rojo, Native game platform, Multiplayer arena, WebSocket backend
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/jonlabrie/roshambo_26](https://github.com/jonlabrie/roshambo_26)
- **Evidence:** [direct model evidence](https://github.com/jonlabrie/roshambo_26/commit/1dd6eb0559cbe647e172d2093b12b132844617ba)
- **Live demo:** [open demo](https://playroshambo.com)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The repository contains a real Roblox/Rojo project with a declared DataModel, client and server entry points, shared game rules, round coordination, player profiles, arena spawn, remote events, on-site 3D stage assets, economy, progression, fireworks, shops, HUD, WebSocket-backed multiplayer and a large Luau test suite. README_DEPLOY documents the published Roblox place and the live public game site at playroshambo.com, which returned HTTP 200 during verification. The inspected gameplay commit adds a player-facing Fireworks tab and contains an exact Co-Authored-By: Claude Fable 5.1 trailer. Count the current multiplayer Roshambo game once; do not count its shared systems, tests or visual sub-features as extra games. Roblox/Luau is classified under Non-Browser Engines as an other engine platform.

### Gameplay source

- [https://github.com/jonlabrie/roshambo_26/blob/main/README_DEPLOY.md](https://github.com/jonlabrie/roshambo_26/blob/main/README_DEPLOY.md)
- [https://github.com/jonlabrie/roshambo_26/blob/main/roblox/default.project.json](https://github.com/jonlabrie/roshambo_26/blob/main/roblox/default.project.json)
- [https://github.com/jonlabrie/roshambo_26/blob/main/roblox/src/client/main.client.luau](https://github.com/jonlabrie/roshambo_26/blob/main/roblox/src/client/main.client.luau)
- [https://github.com/jonlabrie/roshambo_26/blob/main/roblox/src/server/main.server.luau](https://github.com/jonlabrie/roshambo_26/blob/main/roblox/src/server/main.server.luau)
- [https://github.com/jonlabrie/roshambo_26/blob/main/roblox/src/server/RoundCoordinator.luau](https://github.com/jonlabrie/roshambo_26/blob/main/roblox/src/server/RoundCoordinator.luau)
- [https://github.com/jonlabrie/roshambo_26/blob/main/roblox/src/shared/GameRules.luau](https://github.com/jonlabrie/roshambo_26/blob/main/roblox/src/shared/GameRules.luau)
- [https://github.com/jonlabrie/roshambo_26/tree/main/roblox/tests](https://github.com/jonlabrie/roshambo_26/tree/main/roblox/tests)
- [https://github.com/jonlabrie/roshambo_26/commit/1dd6eb0559cbe647e172d2093b12b132844617ba](https://github.com/jonlabrie/roshambo_26/commit/1dd6eb0559cbe647e172d2093b12b132844617ba)

## Verification notes

- **Status:** verified_source
- **Counted units:** 1
- **Discovery:** GitHub code search for OpenGL game Co-Authored-By Claude Fable; https://github.com/jonlabrie/roshambo_26

[Back to the awesome list](../../README.md)
