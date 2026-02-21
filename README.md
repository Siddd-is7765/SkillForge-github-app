# SkillForge

AI-powered learning and course platform — full-stack MERN starter.

Structure
- `/client` — React (Vite) frontend, Tailwind, React Router, Context API.
- `/server` — Node.js + Express API, MongoDB (Mongoose), Socket.io.

Quick start (local)

1. Backend

```bash
cd server
npm install
cp .env.example .env   # set MONGODB_URI and JWT_SECRET
npm run dev
```

2. Frontend

```bash
cd client
npm install
npm run dev
```

Build & Deploy
- Frontend: `npm run build` (in `/client`) produces a static `dist` suitable for GitHub Pages. Update `vite.config.js` base to your repo name (e.g. `/your-repo-name/`).
- Backend: Deploy `/server` to Render. Provide `MONGODB_URI`, `JWT_SECRET`, and `PORT` in Render environment.

Environment
- Copy `/server/.env.example` to `/server/.env` and fill secrets before running.

Project Notes
- All development occurs on `main` branch only.
- Frontend is static-build compatible for GitHub Pages.
- Backend is a separate Node.js + Express server with Socket.io and modular controllers.
