# AGENTS.md

## Project facts (verified)
- Stack: React 19 + Vite 8 + Tailwind CSS v4.
- Entry flow: `index.html` -> `src/main.jsx` -> `src/App.jsx`.
- Dev commands (from `package.json`):
  - `npm run dev`
  - `npm run build`
  - `npm run preview`
  - `npm run lint`
- There is no test script configured in `package.json`.
- ESLint uses flat config in `eslint.config.js` and ignores `dist/`.
- `no-unused-vars` is strict; intentionally unused names should match `^[A-Z_]`.

## Frontend/tooling gotchas
- Tailwind is enabled via `@tailwindcss/vite` in `vite.config.js` and `@import "tailwindcss";` in `src/index.css`.
- Brand tokens are defined in `src/index.css` `@theme` (`--color-raky-*`) and used via classes like `bg-raky-purple`.
- SVG-as-component imports require `?react` (configured by `vite-plugin-svgr` include `**/*.svg?react`).
- Regular SVG asset imports (without `?react`) are used for `<img src=...>`.

## Architecture notes that matter
- Main page composition currently lives in `src/App.jsx`:
  `NavigationBar`, `HeroSection`, `Feature1`, `LineDecoration`, `Feature2Copilot`, then another `Feature1`.
- Shared placeholder CTA behavior is centralized in `src/utils/handlers.js` (`handleSoon` alerts "will be written soon!").

## User workflow preferences for this repo
- Mentor-first collaboration: explain reasoning and provide code examples/snippets first.
- Do not edit files automatically unless the user explicitly asks to apply changes.
- Do not reorder existing Tailwind className token order unless explicitly requested.
- For UI work, prioritize aesthetic/clean visual outcomes (not only structural refactors).
- Preserve the current Hero -> Feature2 visual direction unless asked to redesign.

## Safe verification order for changes
- Run `npm run lint` first for quick feedback.
- Run `npm run build` before finalizing significant UI/code changes.
