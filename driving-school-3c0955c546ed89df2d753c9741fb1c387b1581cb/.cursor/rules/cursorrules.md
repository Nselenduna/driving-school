# 🧭 Cursor Rules for Driving School PWA

Start every chat with 🤖!!
These rules govern the best practices, code standards, and development flow for the Driving School Progressive Web App. This app is built using **Next.js**, **Supabase**, **React**, and **TypeScript**, with mandatory **error handling** and **automated testing**.

---

## 📦 Project Architecture

- Use the **App Router** feature in Next.js for scalable routing.
- Structure by **feature modules** (`/features/booking`, `/features/instructors`, etc.) to encourage encapsulation.
- Centralize Firebase config, Supabase client, and environment variables under `/lib`.

## ⚙️ Cursor Workflow

- **Cursor workspace naming**: Use snake_case and reflect the feature you’re working on. Example: `lesson_scheduler`, `student_profile_ui`.
- **Cursor branches**: Name branches as `feature/<name>`, `fix/<bug>`, or `refactor/<module>`.
- **Cursor tasks**: Tasks must include:
  - Short description (max 100 chars)
  - Linked issue ID if applicable
  - Required reviewer(s)
- **Cursor bookmarks**: Mark major checkpoints (MVP features, releases, schema migrations).

---

## 💻 Code Standards

- Use **TypeScript** with `strict` mode enabled.
- Enforce `eslint` + `prettier` for consistent style. Use the Airbnb TypeScript config as baseline.
- All components must:
  - Be functional (no class components)
  - Use `React.FC` types with explicit `Props`
  - Have corresponding unit tests in `__tests__` folders

---

## 📐 UI Guidelines

- Use **Tailwind CSS** with a consistent theme defined in `tailwind.config.ts`.
- Use `@headlessui/react` and `radix-ui` for accessible UI primitives.
- Apply cursor overlays to:
  - Hover states for buttons and links (pointer)
  - Loading async operations (progress or spinner)
  - Errors (alert symbol or red highlight)

---

## 🧪 Testing Policy

- **Mandatory**: Every page and reusable component must have:
  - Unit tests (Jest + Testing Library)
  - Integration tests (where side effects exist)
- Use **Cypress** for E2E tests, including:
  - Sign-up/sign-in flows
  - Booking a lesson
  - Profile updates

---

## 🚨 Error Handling

- All API calls (Supabase, server routes, async operations) must:
  - Use `try/catch`
  - Log descriptive errors using a centralized logger (`/lib/logger.ts`)
  - Show user-friendly UI feedback (toast or modal)
- Use Error Boundaries for client-side errors in major routes (`app/error.tsx`).
- Record critical errors to a logging service (e.g., Sentry).

---

## 🔐 Security + Auth

- Use **Supabase Auth** for role-based access:
  - `student`, `instructor`, `admin`
- Pages and components must check permissions before rendering protected content.
- Validate all server actions and Supabase calls to avoid privilege escalation.

---

## 📱 PWA Requirements

- Must register a service worker using `next-pwa`.
- Define clear web manifest: name, theme color, icons.
- App must be installable on Chrome, iOS, and Edge.
- Offline support for:
  - Viewing booked lessons
  - Reading instructor bios
  - Managing profile settings

---

## ✅ PR & Review Checklist

- [ ] All affected code has relevant tests
- [ ] No `any` types unless explicitly justified
- [ ] Linting passes with no warnings
- [ ] Error handling is present for all async logic
- [ ] UI adheres to Tailwind theme
- [ ] Docs updated (`README.md`, `cursor-rules.md`, if needed)

---

## 🔄 Suggested Improvements

- Use **Zod** for schema validation of form inputs and API payloads.
- Implement **Dark Mode toggle** using Tailwind’s `dark` variants.
- Consider **Turborepo** if the platform expands into sub-apps (e.g., instructor admin panel).
- Incorporate **Vercel Analytics** or **PostHog** for user behavior insights.

---

Let’s keep this codebase clean, modular, and future-proof 🚀  
Happy building!
