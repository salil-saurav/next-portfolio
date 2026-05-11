# Project Gemini: Next.js Portfolio

This document outlines the architecture, conventions, and workflows for the Next.js Portfolio project. Adhering to these guidelines ensures consistency, maintainability, and high engineering standards.

## Project Overview

A high-performance, dark-themed interactive portfolio built with Next.js, showcasing full-stack expertise with a focus on clean code and interactive UX.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Testing:** [Vitest](https://vitest.dev/) (Unit/Component), [Playwright](https://playwright.dev/) (E2E)
- **Deployment:** Vercel (Preferred)

## Architecture & Directory Structure

- `app/`: Next.js App Router pages and API routes.
- `components/`:
  - `sections/`: High-level page sections (Hero, About, Projects, etc.).
  - `ui/`: Reusable, atomic UI components (Buttons, Inputs, ThemeToggle).
- `data/`: Centralized data store for portfolio content (experience, projects, skills).
- `lib/`:
  - `constants.ts`: Global configuration and static strings.
  - `types.ts`: Shared TypeScript interfaces and types.
- `public/`: Static assets (images, fonts).
- `tests/`: Unit and integration tests.
- `e2e/`: Playwright end-to-end tests.

## Coding Conventions

### 1. Components
- Use functional components with TypeScript.
- Favor `const Component = () => ...` or `export function Component() ...`.
- Keep components small and focused. Move complex logic to hooks or utility functions.
- Use `"use client"` directive only when necessary (e.g., for Framer Motion or React hooks).

### 2. Styling
- Use Tailwind CSS utility classes.
- Follow the established design system (see `tailwind.config.ts` for custom colors like `mint`, `surface-card`, etc.).
- Maintain accessibility (ARIA labels, semantic HTML).

### 3. Data Management
- Content should be stored in `data/*.ts` files to keep components clean and allow for easy updates.
- Ensure all data objects adhere to the types defined in `lib/types.ts`.

### 4. TypeScript
- Avoid `any`. Use strict typing for all props and functions.
- Utilize the shared types in `lib/types.ts`.

## Development Workflows

### Environment Setup
1. Install dependencies: `pnpm install`
2. Start development server: `pnpm dev`

### Commands
- `pnpm dev`: Start dev server.
- `pnpm build`: Production build.
- `pnpm lint`: Run ESLint checks.
- `pnpm test`: Run unit tests with Vitest.
- `pnpm test:e2e`: Run E2E tests with Playwright.

## Testing Strategy

- **Unit Tests:** Use Vitest and React Testing Library for UI components in `components/ui/`.
- **Section Tests:** Verify that high-level sections render correctly with mock data.
- **E2E Tests:** Use Playwright to verify critical user paths (e.g., navigation, contact form submission).
- **Validation:** Every PR should pass linting and all test suites.

## Design Principles

- **Dark Mode First:** The application is designed with a dark aesthetic. Ensure color contrast meets AA standards.
- **Interactivity:** Use Framer Motion for subtle, meaningful animations that enhance the UX without being distracting.
- **Performance:** Optimize images and minimize client-side JavaScript.
