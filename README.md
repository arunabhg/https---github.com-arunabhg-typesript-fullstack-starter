# Fullstack React with TypeScript Starter Template

## Quick Start

You can clone this repository into your local project folder by downloading the zip file or copying the repository URL.

```bash
git clone https://github.com/arunabhg/typescript-fullstack-starter <MyProjectName>
cd <MyProjectName>
npm install
npm run dev
```

If you want to detach from this repository into your own repository do this:

```bash
git remote remove origin
git remote add origin YOUR_REPO_URL
git push -u origin master
```

---

## Why use this template

- Simple and minimalistic fullstack template. You can add more packages as per your requirements.
- Separate `tsconfig.json` for client and server.
- Client and Server can share code (And types)
- The client is bundled using [Vite](https://github.com/vitejs/vite)
- Both client and server use [TypeScript](https://github.com/Microsoft/TypeScript)

---

## What's Included

- [React v18](https://facebook.github.io/react/)
- [Express](https://github.com/expressjs/express)
- [TypeScript](https://github.com/Microsoft/TypeScript)

The project is bundled using [Vite](https://github.com/vitejs/vite)

## Usage

- `npm run dev` - Client and server run in dev mode, opens http://localhost:5173/
- `npm build` - `dist` folder will include all the needed files
- `npm start` - Runs `node dist/server/`
