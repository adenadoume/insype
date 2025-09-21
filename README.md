Modernized site for Institute of Modern Education (Next.js + Tailwind)

## Getting Started

1) Ensure Node 20+ (Node 22 recommended on macOS via Homebrew):
```
brew install node@22
echo 'export PATH="/usr/local/opt/node@22/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc
```
2) Install deps:
```
npm install
```
3) Dev server:
```
npm run dev
```
Open http://localhost:3000.

Locales:
- Greek (default): /
- English: /en

Assets: legacy images are under `public/img/*`.

## Deploy on Vercel

Push this directory to a Git repo and import in Vercel (Framework Preset: Next.js). No extra env is required.
