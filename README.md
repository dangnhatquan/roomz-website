# 🏨 RoomZ

🚀 RoomZ is a modern web application.
It provides a solid foundation for building scalable, high-performance products using the latest Next.js ecosystem.

---

## Overview

RoomZ is designed as a base for a landing page (or similar applications), focusing on:

- High performance and SEO
- Clean and scalable architecture
- Excellent developer experience
- Easy maintenance and extensibility

This project leverages a production-ready Next.js starter with best practices already configured.

---

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- NextAuth for authentication
- next-intl for internationalization
- Jest & React Testing Library
- Playwright (End-to-End testing)
- ESLint & Prettier
- Husky & Lint-Staged
- Commitlint
- Sitemap & robots.txt

---

## Getting Started

### 1. Clone the repository

```
git clone https://github.com/dangnhatquan/roomz-website.git
cd roomz-website
```

---

### 2. Install dependencies

```
npm install
```

or

```
yarn install
```

or

```
pnpm install
```

---

### 3. Environment variables

Create a .env file from the example:

cp .env.example .env

Example configuration:

```
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
```

---

### 4. Prepare Git hooks

```
npm run prepare
```

---

### 5. Run the development server

```
npm run dev
```

Open your browser at:

http://localhost:3000

---

## Project Structure

```
.
├── .github            # CI / GitHub workflows
├── .husky             # Git hooks
├── public             # Static assets
├── src
│   ├── app            # Next.js App Router
│   ├── components     # Reusable UI components
│   ├── actions        # Server Actions
│   ├── lib            # Utilities and helpers
│   ├── styles         # Global and Tailwind styles
│   └── env.mjs        # Environment validation
├── .env.example
├── next.config.js
└── package.json
```

---

## Available Scripts

```
dev            Start development server
build          Build the app for production
start          Run the production server
preview        Preview the production build
lint           Run ESLint
lint:fix       Fix ESLint issues
format:check   Check code formatting
format:write   Auto-format code
typecheck      Run TypeScript checks
test           Run unit tests
e2e            Run end-to-end tests
```

---

## Testing

Unit Tests:

```
npm run test
```

End-to-End Tests:

```
npm run e2e
```

---

## Authentication

RoomZ uses NextAuth for handling authentication.
You can configure authentication providers (Google, GitHub, Credentials, etc.) via environment variables and NextAuth configuration.

---

## Internationalization

Internationalization is powered by next-intl, enabling multi-language support and localized routing.

---

## Deployment

RoomZ can be deployed easily on:

- Vercel (recommended)
- Netlify
- Render

Make sure all required environment variables are properly configured on your deployment platform.

---

## Contributing

1. Fork the repository
2. Create a new branch: feature/your-feature-name
3. Commit your changes using Conventional Commits
4. Open a Pull Request

---
