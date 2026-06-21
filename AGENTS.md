# Dream Draft FC — AGENTS.md

## Zero build tooling
- No npm, no package.json, no bundler, no build step, no tests, no linter, no formatter, no typecheck.
- App is a single HTML file (`index.html`) with Vue 3 app logic inline in a `<script>` block.
- Dependencies loaded via CDN: Vue 3, Tailwind CSS, PeerJS (see `<script>` tags in `<head>`).
- `teams.js` declares a global `TEAMS_DATA` constant — must be loaded before Vue app.

## Dev workflow
- **Only way to run**: open `index.html` directly in a browser.
- For service worker / PWA testing, serve via any static HTTP server (e.g. `npx serve .` or `python -m http.server`).
- No lint/typecheck/test commands exist.

## Architecture
- `index.html` — entire application (HTML template + Vue 3 SPA + CSS)
- `teams.js` — `TEAMS_DATA` object: continents -> klub/tim_nasional -> team name -> { era, league, players[] }
- `sw.js` — PWA service worker (caches `index.html`, `teams.js`, `manifest.json`)
- `manifest.json` — PWA manifest

## Key data flows
- All game state persisted in `localStorage` under key `dreamDraftFC`.
- Dark mode preference: `dreamDraftFC_dark`.
- Hall of Fame: `dreamDraftFC_hof`.
- Export/Import buttons in header use JSON file download/upload.
- Online multiplayer via PeerJS (peer-to-peer WebRTC). Host creates room, others join by 5-char room code.

## Game states (Vue `currentState`)
- `setup` → `gacha` → `tournament` → `winner`

## Player data
- `TEAMS_DATA` has teams from continents: `eropa`, `amerika_selatan`, `asia`, `afrika`, `amerika_utara`, `oseania`.
- Each team has 11 players with `{ id, name, position, rating }`.
- Market value is generated dynamically via `calculatePrice(rating)` in `index.html`.
- Specific positions (e.g. CB, RB, ST) are randomly assigned per player on first access.
- Player attributes (pace, pass, defense, etc.) are randomly generated per player on first access.

## Code quirks
- `calculatePrice()` uses `\u221E` (infinity symbol) for unlimited budget display.
- Sound effects use Web Audio API oscillators (no audio files).
- Match simulation uses `setTimeout`-based sleep with configurable delay.

## Important team naming conventions
- Teams use era labels: `Klasik (1945-1970)`, `Retro (1970-1990)`, `Modern (2000-2026)`.
- League values: `La Liga`, `Premier League`, `Serie A`, `Bundesliga`, `Ligue 1`, `Eredivisie`, `Primeira Liga`.
