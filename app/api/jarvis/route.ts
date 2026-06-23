import { localJarvisReply } from "@/lib/jarvis";
import { askErikViaHermes } from "@/lib/hermes";
import type { JarvisMessage } from "@/types/jarvis";

export const runtime = "nodejs";

// The local Hermes bridge can take longer than a normal API call because it
// starts a real Erik/CMO profile turn. Keep this route dynamic and local-first.
export const dynamic = "force-dynamic";

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

  if (process.env.HERMES_BRIDGE_DISABLED === "1") {
    return Response.json({
      reply: localJarvisReply(message),
      model: "local-demo",
      profile: "demo",
      mock: true
    });
  }

  try {
    const result = await askErikViaHermes(message, history);

    return Response.json({
      reply: result.reply,
      model: `hermes:${result.command}`,
      profile: result.profile,
      mock: result.mock
    });
  } catch (error) {
    return Response.json({
      error: error instanceof Error ? error.message : "Local Hermes bridge failed."
    }, { status: 502 });
  }
}
