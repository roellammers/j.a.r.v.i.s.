# J.A.R.V.I.S. Marketing Dashboard

Next.js, TypeScript, Tailwind, and shadcn-style components for the Pingwire J.A.R.V.I.S. marketing control dashboard.

The dashboard now talks to **Erik, the Pingwire CMO Hermes profile**, through a local backend route. ElevenLabs is optional; by default the UI can stay in demo/browser speech mode.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Local Erik bridge

The dashboard posts chat messages to:

```text
POST /api/jarvis
```

That route runs the local Hermes profile command configured in `.env.local`:

```bash
HERMES_PROFILE_COMMAND=cmo
HERMES_PROFILE_NAME=cmo
HERMES_TOOLSETS=safe
HERMES_BRIDGE_TIMEOUT_MS=180000
HERMES_BRIDGE_DISABLED=0
```

Default flow:

```text
Dashboard UI
  -> Next.js /api/jarvis
  -> local Hermes command: cmo chat -q ...
  -> Erik response
  -> dashboard response panel
  -> demo/browser speech playback
```

Set `HERMES_BRIDGE_DISABLED=1` to use the local demo response without calling Hermes.

## Voice

The current default is demo/browser speech mode. Leave these empty until ElevenLabs should be enabled:

```bash
ELEVENLABS_API_KEY=
ELEVENLABS_MODEL_ID=eleven_multilingual_v2
```

When `ELEVENLABS_API_KEY` is set, the dashboard can load ElevenLabs voices and generate speech server-side through `/api/elevenlabs/*`. Without the key, it falls back to browser speech synthesis.

## Verification

```bash
npm run typecheck
npm run build
```

For microphone access, run on a secure browser origin:

- `http://localhost:3000`
- `http://127.0.0.1:3000`
- or HTTPS
