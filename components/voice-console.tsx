"use client";

import { Mic, MicOff, Send, Volume2, Waves } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { PanelHeading } from "@/components/ui/panel-heading";
import type { JarvisVoice } from "@/lib/voices";
import { DEFAULT_VOICES } from "@/lib/voices";
import type { JarvisMessage, JarvisMode } from "@/types/jarvis";
import { cn } from "@/lib/utils";

type VoiceConsoleProps = {
  messages: JarvisMessage[];
  onMessagesChange: (messages: JarvisMessage[]) => void;
  onModeChange: (mode: JarvisMode) => void;
};

type VoicesResponse = {
  voices: JarvisVoice[];
  mock?: boolean;
};

type JarvisResponse = {
  reply?: string;
  error?: string;
  mock?: boolean;
};

function newMessage(role: JarvisMessage["role"], content: string, mock?: boolean): JarvisMessage {
  return {
    id: crypto.randomUUID(),
    role,
    content,
    createdAt: new Date().toISOString(),
    mock
  };
}

export function VoiceConsole({ messages, onMessagesChange, onModeChange }: VoiceConsoleProps) {
  const [voices, setVoices] = useState<JarvisVoice[]>(DEFAULT_VOICES);
  const [voiceId, setVoiceId] = useState(DEFAULT_VOICES[0]?.id ?? "");
  const [voiceMock, setVoiceMock] = useState(true);
  const [draft, setDraft] = useState("");
  const [interim, setInterim] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [speechSupported, setSpeechSupported] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const transcriptRef = useRef("");
  const shouldSubmitRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const status = useMemo(() => {
    if (isListening) return "Listening";
    if (isThinking) return "Processing";
    if (isSpeaking) return "Speaking";
    return "Ready";
  }, [isListening, isSpeaking, isThinking]);

  useEffect(() => {
    setSpeechSupported(Boolean(window.SpeechRecognition || window.webkitSpeechRecognition));

    fetch("/api/elevenlabs/voices")
      .then((response) => response.json() as Promise<VoicesResponse>)
      .then((payload) => {
        if (payload.voices?.length) {
          setVoices(payload.voices);
          setVoiceId((current) => current || payload.voices[0].id);
        }
        setVoiceMock(Boolean(payload.mock));
      })
      .catch(() => {
        setVoices(DEFAULT_VOICES);
        setVoiceMock(true);
      });
  }, []);

  useEffect(() => {
    if (isSpeaking) onModeChange("TALKING");
    else if (isListening || isThinking) onModeChange("THINKING");
    else onModeChange("AUTO");
  }, [isListening, isSpeaking, isThinking, onModeChange]);

  async function speak(text: string) {
    if (!text.trim()) return;
    setIsSpeaking(true);

    try {
      const response = await fetch("/api/elevenlabs/speech", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, voiceId })
      });

      if (!response.ok) throw new Error("Voice route unavailable");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = () => {
        URL.revokeObjectURL(url);
        setIsSpeaking(false);
      };
      audio.onerror = () => {
        URL.revokeObjectURL(url);
        setIsSpeaking(false);
      };
      await audio.play();
    } catch {
      const synth = window.speechSynthesis;
      if (!synth) {
        setIsSpeaking(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.98;
      utterance.pitch = 0.82;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      synth.cancel();
      synth.speak(utterance);
    }
  }

  async function sendMessage(content: string) {
    const clean = content.trim();
    if (!clean || isThinking) return;

    setError(null);
    setDraft("");
    setInterim("");
    const userMessage = newMessage("user", clean);
    const nextMessages = [...messages, userMessage];
    onMessagesChange(nextMessages);
    setIsThinking(true);

    try {
      const response = await fetch("/api/jarvis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: clean,
          history: messages.slice(-8)
        })
      });

      const payload = (await response.json()) as JarvisResponse;

      if (!response.ok || !payload.reply) {
        throw new Error(payload.error || "Jarvis route failed.");
      }

      const assistantMessage = newMessage("assistant", payload.reply, payload.mock);
      onMessagesChange([...nextMessages, assistantMessage]);
      await speak(payload.reply);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Jarvis route failed.");
    } finally {
      setIsThinking(false);
    }
  }

  function startPushToTalk() {
    if (isListening || isThinking) return;

    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) {
      setError("Speech recognition is not available in this browser. Type a message instead.");
      return;
    }

    setError(null);
    setInterim("");
    transcriptRef.current = "";
    shouldSubmitRef.current = false;

    const recognition = new Recognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
      let finalText = "";
      let interimText = "";

      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        const result = event.results[i];
        const text = result[0]?.transcript ?? "";
        if (result.isFinal) finalText += text;
        else interimText += text;
      }

      if (finalText) {
        transcriptRef.current = `${transcriptRef.current} ${finalText}`.trim();
        setDraft(transcriptRef.current);
      }
      setInterim(interimText.trim());
    };
    recognition.onerror = (event) => {
      setError(event.message || event.error || "Speech recognition failed.");
      setIsListening(false);
    };
    recognition.onend = () => {
      setIsListening(false);
      const transcript = (transcriptRef.current || interim).trim();
      if (shouldSubmitRef.current && transcript) void sendMessage(transcript);
      setInterim("");
      recognitionRef.current = null;
    };

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  }

  function stopPushToTalk() {
    if (!recognitionRef.current) return;
    shouldSubmitRef.current = true;
    recognitionRef.current.stop();
  }

  function cancelAudio() {
    audioRef.current?.pause();
    audioRef.current = null;
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
  }

  return (
    <section className="rounded-md border border-primary/20 bg-black/20 p-3">
      <PanelHeading title="Jarvis voice" meta={status}>
        <Badge variant={voiceMock ? "warning" : "success"} className="hidden sm:inline-flex">
          {voiceMock ? "Demo voices" : "ElevenLabs"}
        </Badge>
      </PanelHeading>

      <div className="grid gap-3">
        <div className="grid grid-cols-[1fr_auto] gap-2">
          <Select value={voiceId} onChange={(event) => setVoiceId(event.target.value)} aria-label="Voice">
            {voices.map((voice) => (
              <option key={voice.id} value={voice.id}>
                {voice.name}
              </option>
            ))}
          </Select>
          <Button type="button" variant="outline" size="icon" onClick={cancelAudio} aria-label="Stop voice">
            <Volume2 />
          </Button>
        </div>

        <Textarea
          value={interim || draft}
          onChange={(event) => {
            setDraft(event.target.value);
            transcriptRef.current = event.target.value;
          }}
          placeholder={speechSupported ? "Ask Jarvis..." : "Type to Jarvis..."}
          className="min-h-20"
        />

        <div className="grid grid-cols-[1fr_auto] gap-2">
          <Button
            type="button"
            onPointerDown={startPushToTalk}
            onPointerUp={stopPushToTalk}
            onPointerCancel={stopPushToTalk}
            onPointerLeave={() => {
              if (isListening) stopPushToTalk();
            }}
            disabled={isThinking || isSpeaking}
            className={cn(isListening && "bg-[#28c76f] text-[#03100b] hover:bg-[#28c76f]/90")}
          >
            {isListening ? <MicOff /> : <Mic />}
            {isListening ? "Release" : "Hold to talk"}
          </Button>
          <Button type="button" variant="secondary" onClick={() => sendMessage(draft)} disabled={!draft.trim() || isThinking}>
            {isThinking ? <Waves className="animate-pulse" /> : <Send />}
            Send
          </Button>
        </div>

        {error ? (
          <div className="rounded border border-destructive/35 bg-destructive/10 px-3 py-2 text-xs font-semibold text-destructive">
            {error}
          </div>
        ) : null}

        {messages.length ? (
          <div className="max-h-40 overflow-y-auto rounded-md border border-primary/15 bg-black/15 p-2">
            <div className="space-y-2">
              {messages.slice(-5).map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "rounded border px-2 py-1.5 text-xs leading-relaxed",
                    message.role === "assistant"
                      ? "border-primary/25 bg-primary/10 text-[#dceaf2]"
                      : "border-[#eca400]/25 bg-[#eca400]/10 text-[#f2deb0]"
                  )}
                >
                  <div className="mb-1 text-[9px] font-extrabold uppercase tracking-[0.14em] opacity-70">
                    {message.role === "assistant" ? "Jarvis" : "Operator"}
                    {message.mock ? " // Demo" : ""}
                  </div>
                  {message.content}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
