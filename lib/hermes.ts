import { execFile } from "node:child_process";
import { promisify } from "node:util";
import type { JarvisMessage } from "@/types/jarvis";

const execFileAsync = promisify(execFile);

export type HermesBridgeResult = {
  reply: string;
  command: string;
  profile: string;
  mock: boolean;
};

const ANSI_PATTERN = /\u001b\[[0-9;?]*[ -/]*[@-~]/g;

function stripAnsi(value: string) {
  return value.replace(ANSI_PATTERN, "").trim();
}

function compactHistory(history: JarvisMessage[]) {
  return history
    .slice(-6)
    .map((item) => `${item.role === "assistant" ? "Erik" : "Roel"}: ${item.content}`)
    .join("\n");
}

function buildPrompt(message: string, history: JarvisMessage[]) {
  const recentHistory = compactHistory(history);

  return [
    "You are Erik, Pingwire's CMO agent, speaking to Roel through the local J.A.R.V.I.S. dashboard.",
    "Respond directly in the dashboard UI. Do not use Slack wire tags. Do not mention terminal commands, tools, or implementation details.",
    "Keep the response concise, calm, practical, and executive-ready. If action is needed, give the next step.",
    recentHistory ? `Recent dashboard conversation:\n${recentHistory}` : "No prior dashboard conversation in this request.",
    `Roel says: ${message}`
  ].join("\n\n");
}

export async function askErikViaHermes(message: string, history: JarvisMessage[]): Promise<HermesBridgeResult> {
  const bridgeUrl = process.env.HERMES_BRIDGE_URL;

  // If HTTP bridge URL is set, use that instead of local command
  if (bridgeUrl) {
    return askErikViaHttp(bridgeUrl, message, history);
  }

  // Otherwise fall back to local command
  const command = process.env.HERMES_PROFILE_COMMAND || "cmo";
  const profile = process.env.HERMES_PROFILE_NAME || "cmo";
  const timeoutMs = Number.parseInt(process.env.HERMES_BRIDGE_TIMEOUT_MS || "180000", 10);
  const toolsets = process.env.HERMES_TOOLSETS || "safe";
  const prompt = buildPrompt(message, history);

  const args = ["chat", "-q", prompt, "-Q"];
  if (toolsets.trim()) args.push("-t", toolsets.trim());

  try {
    const { stdout, stderr } = await execFileAsync(command, args, {
      timeout: Number.isFinite(timeoutMs) ? timeoutMs : 180000,
      maxBuffer: 1024 * 1024,
      env: {
        ...process.env,
        NO_COLOR: "1",
        FORCE_COLOR: "0"
      }
    });

    const reply = stripAnsi(stdout || stderr || "");

    if (!reply) {
      throw new Error("Erik returned an empty response.");
    }

    return {
      reply,
      command,
      profile,
      mock: false
    };
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Unknown Hermes bridge error.";
    throw new Error(`Could not reach Erik through the local Hermes bridge: ${detail}`);
  }
}

async function askErikViaHttp(url: string, message: string, history: JarvisMessage[]): Promise<HermesBridgeResult> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message, history })
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "Unknown HTTP error");
    throw new Error(`HTTP bridge failed (${response.status}): ${errorText}`);
  }

  const payload = await response.json();

  if (payload.error) {
    throw new Error(payload.error);
  }

  return {
    reply: payload.reply || "Erik responded, but no reply was returned.",
    command: payload.command || "http",
    profile: payload.profile || "cmo",
    mock: payload.mock || false
  };
}

