import { isSafeVoiceId } from "@/lib/voices";

export const runtime = "nodejs";

type SpeechRequest = {
  text?: unknown;
  voiceId?: unknown;
  modelId?: unknown;
};

export async function POST(request: Request) {
  let body: SpeechRequest;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const text = typeof body.text === "string" ? body.text.trim() : "";
  const voiceId = isSafeVoiceId(body.voiceId) ? body.voiceId : "";
  const modelId = typeof body.modelId === "string" && body.modelId.trim()
    ? body.modelId.trim()
    : process.env.ELEVENLABS_MODEL_ID || "eleven_multilingual_v2";

  if (!text) {
    return Response.json({ error: "Text is required." }, { status: 400 });
  }

  if (!voiceId) {
    return Response.json({ error: "A valid voice ID is required." }, { status: 400 });
  }

  if (text.length > 2500) {
    return Response.json({ error: "Speech text is too long." }, { status: 413 });
  }

  const apiKey = process.env.ELEVENLABS_API_KEY;

  if (!apiKey) {
    return Response.json({ error: "ELEVENLABS_API_KEY is not configured." }, { status: 503 });
  }

  const upstream = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xi-api-key": apiKey
      },
      body: JSON.stringify({
        text,
        model_id: modelId,
        voice_settings: {
          stability: 0.45,
          similarity_boost: 0.75,
          style: 0.15,
          use_speaker_boost: true
        }
      })
    }
  );

  if (!upstream.ok) {
    const error = await upstream.text().catch(() => "ElevenLabs request failed.");
    return Response.json({ error }, { status: upstream.status });
  }

  const audio = await upstream.arrayBuffer();

  return new Response(audio, {
    headers: {
      "Content-Type": upstream.headers.get("Content-Type") || "audio/mpeg",
      "Cache-Control": "no-store"
    }
  });
}
