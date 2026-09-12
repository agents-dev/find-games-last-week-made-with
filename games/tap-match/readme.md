# Tap Match

> Verified game note.

![Tap Match screenshot placeholder](tap-match-placeholder.svg)

## At a glance

- **Score:** 8.9/10
- **Model:** Claude Opus 5
- **Technology:** Flutter, Dart, Native Android, Mobile puzzle games, Unit tests
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/lofiski/mini-games](https://github.com/lofiski/mini-games)
- **Evidence:** [direct model evidence](https://github.com/lofiski/mini-games/commit/0ba7348e37919c2c4ddb53d0d63b23d31e76b7b9)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README identifies a native Android mini-game collection and lists three playable games: 2048, a 1–15 sliding puzzle and Tap Match. The Flutter source has separate game definitions, pure rules, presentation pages, a registry that exposes all three from the home screen, audio and score persistence, signed Android release targets and dedicated tests for each game's rules and notifier. The inspected history contains exact Claude Opus trailers on the 2048, sliding-puzzle and tap-match implementation commits. Count three independent game units; do not count the shared app shell separately.

### Gameplay source

- [https://github.com/lofiski/mini-games/blob/main/README.md](https://github.com/lofiski/mini-games/blob/main/README.md)
- [https://github.com/lofiski/mini-games/blob/main/lib/games/game2048/game2048_definition.dart](https://github.com/lofiski/mini-games/blob/main/lib/games/game2048/game2048_definition.dart)
- [https://github.com/lofiski/mini-games/blob/main/lib/games/sliding_puzzle/sliding_puzzle_definition.dart](https://github.com/lofiski/mini-games/blob/main/lib/games/sliding_puzzle/sliding_puzzle_definition.dart)
- [https://github.com/lofiski/mini-games/blob/main/lib/games/tap_match/tap_match_definition.dart](https://github.com/lofiski/mini-games/blob/main/lib/games/tap_match/tap_match_definition.dart)
- [https://github.com/lofiski/mini-games/blob/main/lib/games_registry.dart](https://github.com/lofiski/mini-games/blob/main/lib/games_registry.dart)
- [https://github.com/lofiski/mini-games/tree/main/test/games](https://github.com/lofiski/mini-games/tree/main/test/games)
- [https://github.com/lofiski/mini-games/commit/0ba7348e37919c2c4ddb53d0d63b23d31e76b7b9](https://github.com/lofiski/mini-games/commit/0ba7348e37919c2c4ddb53d0d63b23d31e76b7b9)

## Verification notes

- **Status:** verified_source
- **Counted units:** 3
- **Discovery:** GitHub code search for Flutter game Co-Authored-By Claude Opus 5; https://github.com/lofiski/mini-games

[Back to the awesome list](../../README.md)
