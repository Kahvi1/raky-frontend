# Raky Frontend - Project Context

## Project Overview

This is a modern React Single Page Application (SPA) built with Vite. It serves as the frontend for "Raky", an application with specific branding and design guidelines.

**Key Technologies:**
- **Framework:** React 19
- **Build Tool:** Vite 8
- **Language:** JavaScript (JSX)
- **Styling:** Tailwind CSS v4 (using `@tailwindcss/vite`)
- **Icons:** `@heroicons/react`
- **Fonts:** Inter (`@fontsource/inter`)
- **SVG Handling:** `vite-plugin-svgr` (import SVGs as React components using `?react` suffix)

## Building and Running

The project uses `npm` as its package manager.

- **Development Server:** `npm run dev`
- **Production Build:** `npm run build`
- **Preview Production Build:** `npm run preview`
- **Linting:** `npm run lint` (uses ESLint 9 with flat config)

## Development Conventions & Design System

The project has established styling and layout conventions to maintain a consistent UI/UX.

### Colors
Custom colors are defined in `src/index.css` and are available as Tailwind classes (e.g., `bg-raky-purple`, `text-raky-red`):
- **Purple (Primary):** `#7A5AE1` (var: `--color-raky-purple`)
- **Red:** `oklch(...)` (var: `--color-raky-red`)
- **Blue:** `oklch(...)` (var: `--color-raky-blue`)
- **Green:** `oklch(...)` (var: `--color-raky-green`)

### Typography
- **Global Font:** Inter (`font-family: "Inter"`)
- **Headings:** Use `font-black` and `leading-tight` (e.g., `text-2xl sm:text-3xl lg:text-4xl font-black leading-tight`).
- **Body Text:** Use `leading-relaxed` and muted colors (e.g., `text-[#707070]`).

### Layout & Spacing
- **Sections:** Mobile padding (`px-4 py-12`), scaling up for desktop (`sm:px-6 sm:py-16 lg:py-20`). Center content with `mx-auto max-w-6xl`.
- **Cards:** Use `rounded-3xl`, padding (`p-6` to `lg:p-10`), and subtle elevation (`shadow-sm ring-1 ring-black/5`).
- **Grid Layouts:** Prefer one column on mobile, splitting at desktop (e.g., `grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]`).

### Components
- **Buttons (Primary CTA):** `rounded-full bg-raky-purple text-white font-semibold px-6 py-3 hover:brightness-110 active:scale-[0.98]`.
- **Avatars/Media:** Compact mobile-first sizes (e.g., `size-12 sm:size-14`) with `rounded-full border border-gray-200`.

### Code Style
- **SVG Imports:** When importing SVGs as React components, always append `?react` to the path (e.g., `import MyIcon from './icon.svg?react'`).
- **Linting:** The project uses ESLint. Unused variables are configured as errors, except those matching `^[A-Z_]` (e.g., `React`).
