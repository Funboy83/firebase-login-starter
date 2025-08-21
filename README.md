# Firebase Login Starter (React + Vite + Tailwind)

A tiny, modern starter with:
- Email/Password login using Firebase Authentication
- Protected dashboard that says **Hello, {email}!**
- TailwindCSS styling and clean, expandable structure

## 1) Prereqs
- Node.js 18+ recommended (use `node -v` to check)
- A Firebase project with a Web App created

## 2) Get started
1. Unzip this folder
2. In the project folder, run:
   ```bash
   npm install
   ```
3. Copy `.env.local.example` to `.env.local` and paste your web app config from:
   Firebase Console → Project settings → Your apps (Web) → SDK setup and configuration
   - Be sure **Authentication → Sign-in method → Email/Password** is **enabled**.
   - If you see an error mentioning *identitytoolkit* API, visit the link in the error to enable it and retry.

4. Run the dev server:
   ```bash
   npm run dev
   ```
   Open the shown localhost URL.

## 3) Where to add features later
- UI: `src/pages/*.jsx` and components in `src/components`
- Auth utilities: `src/firebase.js`
- Routes: `src/App.jsx`

## 4) Deploy (Firebase Hosting example)
```bash
npm run build
# then in your Firebase project folder
firebase init hosting
firebase deploy
```

If `npm install` gives peer dependency warnings, try:
```bash
npm install --legacy-peer-deps
```
