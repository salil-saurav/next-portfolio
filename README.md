# Salil Saurav Portfolio

Modern dark-themed developer portfolio built with Next.js, React, Tailwind CSS, Framer Motion, and lucide-react.

## Features

- App Router based Next.js project
- Responsive dark UI with accessible focus states
- Framer Motion reveal animations and micro-interactions
- Resume-driven content in `data/profile.ts`
- Modular sections for Hero, About, Skills, Experience, Projects, and Contact
- Comprehensive test suite with Vitest and Playwright
- Detailed project documentation in `GEMINI.md`

## Run Locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Testing

```bash
pnpm test       # Run unit/component tests (Vitest)
pnpm test:e2e   # Run end-to-end tests (Playwright)
```

## Production Build

```bash
pnpm build
pnpm start
```

## Deploy

The fastest deployment path is Vercel:

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Keep the default Next.js settings.
4. Add a custom domain if needed.

## Contact Form Integration

The form currently prevents default submission and shows a placeholder status message. A placeholder route exists at `app/api/contact/route.ts`; connect it to an open-source-friendly provider or SMTP setup such as Nodemailer, Resend SDK, or EmailJS.

## Updated (07 May 26)

env added
