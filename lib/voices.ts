export type JarvisVoice = {
  id: string;
  name: string;
  category?: string;
  description?: string;
};

export const DEFAULT_VOICES: JarvisVoice[] = [
  {
    id: "JBFqnCBsd6RMkjVDRZzb",
    name: "George",
    category: "ElevenLabs",
    description: "Measured, direct, senior operator tone"
  },
  {
    id: "21m00Tcm4TlvDq8ikWAM",
    name: "Rachel",
    category: "ElevenLabs",
    description: "Clear, warm, polished briefing voice"
  },
  {
    id: "pNInz6obpgDQGcFmaJgB",
    name: "Adam",
    category: "ElevenLabs",
    description: "Calm, low-register command voice"
  },
  {
    id: "EXAVITQu4vr4xnSDxMaL",
    name: "Bella",
    category: "ElevenLabs",
    description: "Crisp, expressive, concise"
  }
];

export function isSafeVoiceId(value: unknown): value is string {
  return typeof value === "string" && /^[A-Za-z0-9_-]{8,80}$/.test(value);
}
