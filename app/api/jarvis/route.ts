import { extractResponseText, localJarvisReply, toResponseInput } from "@/lib/jarvis";
import type { JarvisMessage } from "@/types/jarvis";

export const runtime = "nodejs";

type JarvisRequest = {
  message?: unknown;
  history?: unknown;
};

function isHistory(value: unknown): value is JarvisMessage[] {
  return Array.isArray(value) && value.every((item) => {
    if (!item || typeof item !== "object") return false;
    const record = item as Record<string, unknown>;
    return (record.role === "user" || record.role === "assistant") && typeof record.content === "string";
  });
}

export async function POST(request: Request) {
  let body: JarvisRequest;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const message = typeof body.message === "string" ? body.message.trim() : "";
  const history = isHistory(body.history) ? body.history : [];

  if (!message) {
    return Response.json({ error: "Message is required." }, { status: 400 });
  }

  if (message.length > 4000) {
    return Response.json({ error: "Message is too long." }, { status: 413 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || "gpt-5-mini";

  if (!apiKey) {
    return Response.json({
      reply: localJarvisReply(message),
      model: "local-demo",
      mock: true
    });
  }

  const upstream = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      input: toResponseInput(history, message)
    })
  });

  const payload = await upstream.json().catch(() => null);

  if (!upstream.ok) {
    const error = payload && typeof payload === "object" && "error" in payload
      ? payload.error
      : "OpenAI request failed.";

    return Response.json({ error }, { status: upstream.status });
  }

  const reply = extractResponseText(payload) || "I received the request, but no response text was returned.";

  return Response.json({
    reply,
    model,
    mock: false
  });
}
