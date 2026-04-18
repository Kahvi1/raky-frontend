# Copilot Instructions for `raky-frontend`

## Build, lint, and test commands

Run from repository root:

- `npm run dev` - start Vite dev server
- `npm run build` - production build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint (`eslint .`)

Testing status:

- There is currently **no test runner or `npm test` script configured** in `package.json`.
- There is currently **no single-test command** in this repo.

## High-level architecture

- This is a Vite + React frontend app. Boot flow is:
  `index.html` -> `src/main.jsx` -> `App` from `src/App.jsx`.
- `src/App.jsx` currently contains the main page composition and section components in the same file (`NavigationBar`, `HeroSection`, `Feature2`).
- Shared placeholder CTA behavior is centralized in `src/utils/handlers.js` (`handleSoon`) and reused across multiple buttons.
- Styling is Tailwind CSS v4 via `@tailwindcss/vite` in `vite.config.js` and `@import "tailwindcss";` in `src/index.css`.
- Brand/theme color tokens are defined in `src/index.css` using `@theme` custom variables (`--color-raky-*`) and consumed as Tailwind utility classes (for example `bg-raky-purple`).
- `Feature2` loads creator profile SVGs dynamically with `import.meta.glob('./assets/influencer-profile-pictures/ccreator-*.svg', { eager: true })`, then sorts numerically based on the filename suffix.

## Key repository conventions

- Keep asset naming compatible with existing dynamic import logic: creator avatars must follow `ccreator-<number>.svg` in `src/assets/influencer-profile-pictures/`.
- JS/JSX linting is configured only for `**/*.{js,jsx}` (see `eslint.config.js`), so keep frontend source in these extensions unless lint config is updated.
- ESLint `no-unused-vars` is strict, but allows names matching `^[A-Z_]`; for intentionally unused values (for example event args), use a leading underscore naming style.
- Typography uses `@fontsource/inter` weight imports in `src/main.jsx` and applies Inter globally via `body { font-family: "Inter"; }` in `src/index.css`.
