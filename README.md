# J.A.R# J.A.R.V.I.S. Marketing Dashboard

Next.js, TypeScript, Tailwind, and shadcn-style components for the Pingwire J.A.R.V.I.S. marketing control dashboard.

The dashboard now talks to Erik, the Pingwire CMO Hermes profile, through a local backend route. ElevenLabs is optional.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Local Erik bridge

The dashboard posts chat messages to:

```text
POST /api/jarvis
```

That route can use **two modes**:

### Mode 1: Local command (default)

Runs the local Hermes profile command configured in `.env.local`:

```bash
HERMES_PROFILE_COMMAND=cmo
HERMES_PROFILE_NAME=cmo
HERMES_TOOLSETS=safe
HERMES_BRIDGE_TIMEOUT_MS=180000
HERMES_BRIDGE_DISABLED=0
```

Flow:

```text
Dashboard UI
  -> Next.js /api/jarvis
  -> local Hermes command: cmo chat -q ...
  -> Erik response
  -> dashboard response panel
  -> demo/browser speech playback
```

### Mode 2: HTTP bridge via SSH tunnel (for remote Erik)

When you want the dashboard on your laptop to talk to Erik on the remote server, set:

```bash
HERMES_BRIDGE_URL=http://localhost:3001/chat
```

Then start an SSH tunnel from your laptop:

```bash
ssh -L 3001:127.0.0.1:3001 hermes@REMOTE_SERVER_IP -N
```

Flow:

```text
Dashboard UI
  -> Next.js /api/jarvis
  -> HTTP POST http://localhost:3001/chat
  -> SSH tunnel (encrypted)
  -> Remote server Erik bridge
  -> cmo chat -q ...
  -> Erik response
  -> dashboard
```

This is secure because:
- All traffic encrypted via SSH
- Erik bridge only listens on localhost on the remote server
- No firewall changes needed
- Uses existing SSH authentication

Set `HERMES_BRIDGE_DISABLED=1` to use the local demo response without calling Hermes.

## Voice

The current default is demo/browser speech mode. Leave these empty until ElevenLabs should be enabled:

```bash
ELEVENLABS_API_KEY=
ELEVENLABS_MODEL_ID=eleven_multilingual_v2
```

When ELEVENLABS_API_KEY is set, the dashboard can load ElevenLabs voices and generate speech server-side.

## Verification

```bash
npm run typecheck
npm run build
```

For microphone access, run on a secure browser origin:

- http://localhost:3000
- http://127.0.0.1:3000
- or HTTPS.V.I.S. Marketing Dashboard

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

That route can use **two modes**:

### Mode 1: Local command (default)

Runs the local Hermes profile command configured in `.env.local`:

```bash
HERMES_PROFILE_COMMAND=cmo
HERMES_PROFILE_NAME=cmo
HERMES_TOOLSETS=safe
HERMES_BRIDGE_TIMEOUT_MS=180000
HERMES_BRIDGE_DISABLED=0
```

Flow:

text
Dashboard UI
  -> Next.js /api/jarvis
  -> local Hermes command: cmo chat -q ...
  -> Erik response
  -> dashboard response panel
  -> demo/browser speech playback


### Mode 2: HTTP bridge via SSH tunnel (for remote Erik)

When you want the dashbo2~d on your laptop to talk to Erik on the remote server, set:

```bash
HERMES_RIDGE_URL=http://ocalhost:3001/chat
```
Then start an SSH tunnel from your laptop:

```bash3001:127.0.0.1:3001 hermes@REMOTE_SERVER_IP -N
```


Flow:

text
Dashboard UI
  -> Next.js /api/jarvis  -> HTTP POST http://localhost:3001/chat
  -> SSH tunnel (encrypted)
  -> Remote server Erik bridge
  -> cmo chat -q ...
  -> Erik response
  -> dashboard (1/2)


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
