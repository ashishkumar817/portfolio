# Ashish Portfolio (ACE-style)
Replicates the ACE site's glow/scroll vibe using React + Vite + Tailwind + Framer Motion, with your freelancing content.

## Quickstart
```bash
npm i
npm run dev
```
Open http://localhost:5173

## Build
```bash
npm run build
npm run preview
```

## Deploy to Vercel (Recommended)
1) Push this folder to a new GitHub repository.
2) Go to https://vercel.com/new and **Import** the repo.
3) Framework: **Vite** (auto-detected). Build: `npm run build`. Output: `dist`.
4) Click **Deploy** — you'll get a live link in seconds.

## Replace content
- Edit text in `src/App.jsx` (name, bio, services, contacts).
- Add images to `public/images/` and keep the same filenames or update paths in `src/App.jsx`.
- Colors: tweak in `tailwind.config.js` (`theme.extend.colors.brand`).

## Notes
- Cursor-follow glow is implemented in CSS + a small React effect.
- Animations via `framer-motion`.
- Form is static — connect to Formspree/Vercel Forms or your backend.
