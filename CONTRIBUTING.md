# Contributing

Submit only a game that meets the collection rules.

## Provide evidence

Provide these fields in the pull request.

- Give the canonical `https://github.com/OWNER/REPOSITORY` URL.
- Give a public URL that identifies GPT-6 Astra, Claude Opus, or Claude Fable.
- Give a source-file URL that shows the playable game loop, controls, rules, objective, or game state.
- State the technology, verification date, and concise verification notes.
- Give a live demo, screenshot, and original prompt when they are public. These are optional evidence, not substitutes for source code.

## Do not submit

Do not submit catalogs, skills, game generators, screenshots, visual scenes without rules, empty repositories, unchanged forks, or prompt-only projects.

## Update the dataset

Keep one record per repository in `games.json`. Update an existing record when the repository already exists. Set `is_independent_game` and `counted_game_units` only when the game qualifies for the published list. Keep related or rejected records out of the counted units.

## Verify the change

Run these commands before opening a pull request.

```sh
node scripts/validate-games.mjs
node scripts/generate-awesome-readme.mjs
git diff --check
```

Include the generated README update with the dataset update. Do not edit generated counts by hand.
