# J.A.R.V.I.S. Dashboard — SSH Tunnel Setup

Connect your local dashboard to Erik on the remote Hermes server via encrypted SSH tunnel.

## Quick Start

### 1. On your laptop — open tunnel

Open Terminal and run:

```bash
ssh -L 3001:127.0.0.1:3001 hermes@YOUR_SERVER_IP -N
```

Replace `YOUR_SERVER_IP` with the Hermes server IP.

**Keep this terminal open** while using the dashboard.

### 2. Configure dashboard

```bash
cd ~/Library/Mobile\ Documents/com~apple~CloudDocs/Pingwire/J.A.R.V.I.S.
cp .env.example .env.local
```

Edit `.env.local` and set:

```bash
HERMES_BRIDGE_URL=http://localhost:3001/chat
```

### 3. Start dashboard

```bash
npm run dev
```

Open: http://localhost:3000

Test Erik in the voice panel!

## Troubleshooting

### "Connection refused"

Erik bridge not running on remote server. SSH in and start it:

```bash
ssh hermes@YOUR_SERVER_IP
cd ~/.hermes/erik-bridge
node server.js
```

### Test tunnel

From your laptop:

```bash
curl http://localhost:3001/health
```

Should return:

```json
{"status":"ok","service":"erik-bridge"}
```

## Security

✓ All traffic encrypted via SSH  
✓ No public exposure  
✓ Uses existing SSH auth  
✓ No firewall changes needed

