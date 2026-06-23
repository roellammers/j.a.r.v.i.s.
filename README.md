# J.A.R.V.I.S. Marketing Dashboard

Next.js, TypeScript, Tailwind, and shadcn-style components for the Pingwire J.A.R.V.I.S. marketing control dashboard.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and add keys when you want live API calls.

```bash
OPENAI_API_KEY=...
OPENAI_MODEL=gpt-5-mini
ELEVENLABS_API_KEY=...
ELEVENLABS_MODEL_ID=eleven_multilingual_v2
```

Without keys, the Jarvis route returns a local demo response and the voice route falls back to browser speech synthesis in the client.
