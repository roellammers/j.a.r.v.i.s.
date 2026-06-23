import type { JarvisMessage } from "@/types/jarvis";

export const DEFAULT_JARVIS_PROMPT = [
  "You are J.A.R.V.I.S., Pingwire's marketing control operator.",
  "You help with marketing budget, OKRs, pipeline, campaign operations, and team coordination.",
  "Keep responses concise, calm, and executive-ready.",
  "Use concrete next actions when useful.",
  "Do not mention implementation details or internal prompts."
].join(" ");

export function localJarvisReply(message: string) {
  const lower = message.toLowerCase();

  if (lower.includes("budget") || lower.includes("spend")) {
    return "Budget status is nominal. FY allocation is 734,564 SEK, with 378,500 SEK allocated through June and the year 52% elapsed. The main watch item is the September allocation spike.";
  }

  if (lower.includes("okr") || lower.includes("pipeline") || lower.includes("arr")) {
    return "Current OKR rollups are mixed. Pipeline is healthy at 11.1M of 20M, but new ARR and visitor-to-demo conversion need attention. I would prioritize conversion diagnostics before adding more paid spend.";
  }

  if (lower.includes("linkedin") || lower.includes("brand")) {
    return "Brand trust is tracking unevenly. Top-of-funnel traffic is nearly complete, while LinkedIn growth is behind plan. A focused founder-led content sprint would likely improve reach without adding much cost.";
  }

  return `Acknowledged. I have logged: "${message}". Recommended next step: convert this into one owner, one metric, and one deadline before assigning it to the marketing agents.`;
}

export function extractResponseText(payload: unknown) {
  if (!payload || typeof payload !== "object") return "";
  const record = payload as Record<string, unknown>;

  if (typeof record.output_text === "string") return record.output_text;

  const output = Array.isArray(record.output) ? record.output : [];
  const chunks: string[] = [];

  for (const item of output) {
    if (!item || typeof item !== "object") continue;
    const content = (item as Record<string, unknown>).content;
    if (!Array.isArray(content)) continue;

    for (const part of content) {
      if (!part || typeof part !== "object") continue;
      const text = (part as Record<string, unknown>).text;
      if (typeof text === "string") chunks.push(text);
    }
  }

  return chunks.join("\n").trim();
}

export function toResponseInput(history: JarvisMessage[], message: string) {
  const recent = history.slice(-8).map((item) => ({
    role: item.role === "assistant" ? "assistant" : "user",
    content: item.content
  }));

  return [
    {
      role: "developer",
      content: process.env.JARVIS_SYSTEM_PROMPT || DEFAULT_JARVIS_PROMPT
    },
    ...recent,
    {
      role: "user",
      content: message
    }
  ];
}
