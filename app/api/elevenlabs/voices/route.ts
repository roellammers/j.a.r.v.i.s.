import { DEFAULT_VOICES, type JarvisVoice } from "@/lib/voices";

export const runtime = "nodejs";

type ElevenLabsVoice = {
  voice_id?: string;
  name?: string;
  category?: string;
  labels?: Record<string, string>;
};

export async function GET() {
  const apiKey = process.env.ELEVENLABS_API_KEY;

  if (!apiKey) {
    return Response.json({
      voices: DEFAULT_VOICES,
      mock: true
    });
  }

  const upstream = await fetch("https://api.elevenlabs.io/v1/voices", {
    headers: {
      "xi-api-key": apiKey
    },
    cache: "no-store"
  });

  if (!upstream.ok) {
    return Response.json({
      voices: DEFAULT_VOICES,
      mock: true,
      error: "Could not load ElevenLabs voices."
    });
  }

  const payload = await upstream.json().catch(() => null);
  const voices = Array.isArray(payload?.voices)
    ? payload.voices
      .map((voice: ElevenLabsVoice): JarvisVoice | null => {
        if (!voice.voice_id || !voice.name) return null;
        return {
          id: voice.voice_id,
          name: voice.name,
          category: voice.category,
          description: voice.labels ? Object.values(voice.labels).filter(Boolean).join(" / ") : undefined
        };
      })
      .filter((voice: JarvisVoice | null): voice is JarvisVoice => Boolean(voice))
      .slice(0, 24)
    : DEFAULT_VOICES;

  return Response.json({
    voices,
    mock: false
  });
}
