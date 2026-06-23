"use client";

import { Activity, Bot, CheckCircle2, CircleDollarSign, Cpu, Radio, ShieldCheck, Volume2 } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PanelHeading } from "@/components/ui/panel-heading";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { NeuralOrb } from "@/components/neural-orb";
import { VoiceConsole } from "@/components/voice-console";
import {
  budgetMonths,
  diagnosticsErrors,
  diagnosticsMessages,
  initialVitals,
  marketingAgents,
  objectives,
  telemetryErrors,
  telemetryMessages,
  type Vital
} from "@/lib/marketing-data";
import { cn, formatNumber } from "@/lib/utils";
import type { JarvisMessage, JarvisMode } from "@/types/jarvis";

type LogLine = {
  id: string;
  time: string;
  message: string;
  status: "OK" | "ERR";
};

const ragColor = {
  good: "#28c76f",
  amber: "#eca400",
  bad: "#e4572e"
};

const statusColor = {
  ONLINE: "#28c76f",
  RUNNING: "#28c76f",
  ACTIVE: "#4fd2ff",
  SYNCING: "#4fd2ff",
  IDLE: "#6e96a0",
  STANDBY: "#6e96a0"
};

function timeNow() {
  return new Intl.DateTimeFormat("en-SE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3,
    hour12: false
  }).format(new Date());
}

function shortTime() {
  return new Intl.DateTimeFormat("en-SE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(new Date());
}

function makeLog(pool: string[], errPool: string[]): LogLine {
  const isError = Math.random() < 0.12;
  const source = isError ? errPool : pool;
  return {
    id: crypto.randomUUID(),
    time: shortTime(),
    message: source[Math.floor(Math.random() * source.length)],
    status: isError ? "ERR" : "OK"
  };
}

function randomizeVitals(): Vital[] {
  const definitions = [
    { key: "Neural core", base: 98.4, jitter: 0.6, format: (v: number) => `${v.toFixed(1)}%`, fill: () => 96 + Math.random() * 3.5 },
    { key: "Memory", base: 62.8, jitter: 2.5, format: (v: number) => `${v.toFixed(1)}%`, fill: () => 58 + Math.random() * 12 },
    { key: "Latency", base: 14, jitter: 5, format: (v: number) => `${Math.round(v)} ms`, fill: (v: number) => 100 - Math.min(v, 60) },
    { key: "Signal", base: 92, jitter: 4, format: (v: number) => `${Math.round(v)}%`, fill: (v: number) => v },
    { key: "Thermal", base: 41, jitter: 3, format: (v: number) => `${Math.round(v)} C`, fill: (v: number) => v + 18 },
    { key: "Throughput", base: 2.4, jitter: 0.5, format: (v: number) => `${v.toFixed(1)} GB/s`, fill: (v: number) => v * 30 }
  ];

  return definitions.map((item) => {
    const value = item.base + (Math.random() - 0.5) * 2 * item.jitter;
    return {
      key: item.key,
      value: item.format(value),
      fill: Math.max(4, Math.min(100, item.fill(value)))
    };
  });
}

function Dot({ className }: { className?: string }) {
  return <span className={cn("size-1.5 rounded-full bg-current shadow-[0_0_7px_currentColor]", className)} aria-hidden="true" />;
}

function SystemPill({ children, good }: { children: ReactNode; good?: boolean }) {
  return (
    <Badge variant={good ? "success" : "default"} className="gap-2 rounded px-2.5 py-1.5">
      <Dot className="animate-jarvis-blink" />
      {children}
    </Badge>
  );
}

function TopBar() {
  const [clock, setClock] = useState("00:00:00,000");
  const [bearing, setBearing] = useState(0);
  const [session, setSession] = useState("0x000000");
  const [coord, setCoord] = useState("59.3293 N 18.0686 E");

  useEffect(() => {
    setClock(timeNow());
    setBearing(Math.floor(Math.random() * 360));
    setSession(`0x${Math.floor(Math.random() * 0xffffff).toString(16).toUpperCase().padStart(6, "0")}`);

    const fast = window.setInterval(() => setClock(timeNow()), 41);
    const slow = window.setInterval(() => {
      setBearing((value) => (value + 1) % 360);
      const lat = (59.3293 + (Math.random() - 0.5) * 0.0009).toFixed(4);
      const lng = (18.0686 + (Math.random() - 0.5) * 0.0009).toFixed(4);
      setCoord(`${lat} N ${lng} E`);
    }, 1100);

    return () => {
      window.clearInterval(fast);
      window.clearInterval(slow);
    };
  }, []);

  return (
    <header className="flex min-h-[62px] shrink-0 items-center gap-5 border-b border-primary/15 bg-gradient-to-b from-[#0b2920]/60 to-transparent px-5 py-3 lg:px-6">
      <div className="min-w-0">
        <div className="text-[15px] font-extrabold uppercase tracking-[0.05em] text-white">
          PINGWIRE <span className="font-semibold text-[#4fd2ff]">// MARKETING CONTROL</span>
        </div>
        <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          J.A.R.V.I.S. // Just a rather very intelligent system
        </div>
      </div>

      <div className="hidden gap-2 xl:flex">
        <SystemPill good>Online</SystemPill>
        <SystemPill>Secure</SystemPill>
        <SystemPill>Encrypted</SystemPill>
      </div>

      <div className="flex-1" />

      <div className="text-right">
        <div className="text-[19px] font-bold tracking-[0.08em] text-[#4fd2ff] drop-shadow-[0_0_12px_rgba(79,210,255,0.45)]">
          {clock}
        </div>
        <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
          SES <span className="text-foreground">{session}</span> // <span className="text-foreground">{coord}</span> // BRG{" "}
          <span className="text-foreground">{String(bearing).padStart(3, "0")}</span>
        </div>
      </div>
    </header>
  );
}

function VitalsPanel({ vitals }: { vitals: Vital[] }) {
  return (
    <Card className="p-4">
      <PanelHeading title="System vitals" meta="Core v4.2" />
      <CardContent className="space-y-3 p-0">
        {vitals.map((item) => (
          <div key={item.key}>
            <div className="mb-1.5 flex justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.12em]">
              <span>{item.key}</span>
              <span className="text-[#4fd2ff]">{item.value}</span>
            </div>
            <Progress value={item.fill} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function LogPanel({ title, meta, logs, tall }: { title: string; meta: string; logs: LogLine[]; tall?: boolean }) {
  return (
    <Card className={cn("p-4", tall && "flex min-h-0 flex-1 flex-col")}>
      <PanelHeading title={title} meta={meta} className="mb-2.5" />
      <CardContent
        className={cn(
          "min-h-0 overflow-hidden p-0 text-[10.5px] font-semibold",
          tall ? "flex-1" : "h-[138px]"
        )}
        style={{
          WebkitMaskImage: "linear-gradient(180deg, transparent 0, #000 22px)",
          maskImage: "linear-gradient(180deg, transparent 0, #000 22px)"
        }}
      >
        <div className="flex flex-col justify-end">
          {logs.map((log) => (
            <div key={log.id} className="flex items-center gap-2 py-0.5">
              <span className="shrink-0 text-muted-foreground">{log.time}</span>
              <span className={cn("min-w-0 flex-1 truncate", log.status === "ERR" && "text-[#f0a08c]")}>{log.message}</span>
              <span
                className={cn(
                  "shrink-0 rounded border px-1.5 py-px text-[9px] font-extrabold tracking-[0.1em]",
                  log.status === "ERR" ? "border-[#e4572e]/50 bg-[#e4572e]/10 text-[#e4572e]" : "border-[#28c76f]/50 bg-[#28c76f]/10 text-[#28c76f]"
                )}
              >
                {log.status}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function AgentsPanel() {
  const onlineCount = marketingAgents.filter((agent) => ["ONLINE", "RUNNING", "ACTIVE", "SYNCING"].includes(agent.status)).length;

  return (
    <Card className="flex min-h-[150px] flex-1 flex-col p-4">
      <PanelHeading title="Marketing agents" meta={`${onlineCount}/${marketingAgents.length}`} />
      <CardContent className="min-h-0 flex-1 overflow-y-auto p-0">
        <div className="flex flex-col gap-0.5">
          {marketingAgents.map((agent, index) => {
            const color = statusColor[agent.status];
            const hue = 158 + (index * 9) % 46;
            const avatarStyle = agent.lead
              ? { background: "linear-gradient(135deg, #1f8f63, #0d5a3c)" }
              : { background: `linear-gradient(135deg, hsl(${hue}, 46%, 34%), hsl(${hue + 18}, 54%, 20%))` };

            return (
              <div key={agent.name} className="flex items-center gap-2 rounded px-1.5 py-1.5 transition hover:bg-primary/10">
                <span
                  className={cn(
                    "grid size-7 shrink-0 place-items-center rounded border border-primary/25 text-[13px] font-extrabold text-[#cfeaf6]",
                    agent.lead && "border-[#28c76f]/50 text-[#bdf3d4] shadow-[0_0_9px_rgba(40,199,111,0.4)]"
                  )}
                  style={avatarStyle}
                >
                  {agent.glyph}
                </span>
                <span className="min-w-0 flex-1 leading-tight">
                  <span className="block truncate text-[11px] font-extrabold uppercase tracking-[0.06em]">{agent.name}</span>
                  <span className="block truncate text-[8.5px] font-bold uppercase tracking-[0.1em] text-muted-foreground">{agent.role}</span>
                </span>
                <span className="flex shrink-0 items-center gap-1.5 text-[8.5px] font-extrabold uppercase tracking-[0.1em]" style={{ color }}>
                  <Dot className={cn((agent.status === "ACTIVE" || agent.status === "RUNNING" || agent.status === "SYNCING") && "animate-jarvis-blink")} />
                  {agent.status}
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

function BudgetPanel() {
  const [view, setView] = useState<"allocation" | "month">("allocation");

  return (
    <Card className="mx-4 mb-4 shrink-0 p-4 lg:mx-4">
      <PanelHeading title="Marketing budget // FY2026" amber>
        <span className="hidden shrink-0 items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#7ee0a8] sm:inline-flex">
          <Dot className="animate-jarvis-blink" />
          On track
        </span>
        <div className="ml-1 flex gap-1">
          <Button type="button" size="sm" variant={view === "allocation" ? "default" : "outline"} onClick={() => setView("allocation")}>
            Allocation
          </Button>
          <Button type="button" size="sm" variant={view === "month" ? "default" : "outline"} onClick={() => setView("month")}>
            This month
          </Button>
        </div>
      </PanelHeading>

      {view === "allocation" ? (
        <div className="grid min-h-24 grid-cols-[152px_1fr_140px] items-stretch gap-5 max-md:grid-cols-1">
          <div className="flex flex-col justify-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">Annual</span>
            <strong className="text-[34px] font-extrabold leading-none text-white drop-shadow-[0_0_16px_rgba(79,210,255,0.35)]">
              734,564
            </strong>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#4fd2ff]">SEK</span>
          </div>

          <div className="flex h-[84px] items-end gap-1.5">
            {budgetMonths.map((month) => (
              <div key={month.label} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
                <div
                  title={`${month.label} ${formatNumber(month.value)} SEK`}
                  className={cn(
                    "w-3/5 rounded-t-sm bg-gradient-to-b from-[#4fd2ff]/55 to-primary/45 transition-all",
                    month.current && "animate-jarvis-pulse bg-[#eca400] shadow-[0_0_12px_#eca400]"
                  )}
                  style={{ height: `${Math.max(2, month.height)}%` }}
                />
                <span className={cn("text-[8px] font-extrabold uppercase tracking-[0.06em] text-muted-foreground", month.current && "text-[#eca400]")}>
                  {month.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center gap-2 border-l border-primary/15 pl-4 max-md:border-l-0 max-md:border-t max-md:pl-0 max-md:pt-3">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-muted-foreground">Allocated // Jan-Jun</div>
              <div className="text-lg font-extrabold text-[#4fd2ff]">378,500 <span className="text-[10px] text-muted-foreground">SEK</span></div>
            </div>
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-muted-foreground">Year elapsed</div>
              <div className="text-lg font-extrabold text-[#eca400]">52<span className="text-[11px]">%</span></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid min-h-24 grid-cols-[260px_1fr] items-center gap-6 max-md:grid-cols-1">
          <div className="flex flex-col justify-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">Current period // Jun-26</span>
            <strong className="text-[34px] font-extrabold leading-none text-white drop-shadow-[0_0_16px_rgba(79,210,255,0.35)]">
              17,956 <span className="text-sm uppercase tracking-[0.16em] text-[#4fd2ff]">SEK</span>
            </strong>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-muted-foreground">2.4% of annual // 734,564 SEK FY total</span>
          </div>
          <div>
            <div className="mb-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-muted-foreground">12-month allocation trace</div>
            <div className="flex h-[54px] items-end gap-1">
              {budgetMonths.map((month) => (
                <div
                  key={month.label}
                  className={cn("min-w-1 flex-1 rounded-sm bg-primary/60", month.current && "bg-[#eca400] shadow-[0_0_10px_#eca400]")}
                  style={{ height: `${Math.max(4, month.height)}%` }}
                  title={`${month.label} ${formatNumber(month.value)} SEK`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}

function OkrPanel() {
  return (
    <Card className="p-4">
      <PanelHeading title="Marketing OKRs" meta="Q2 2026" />
      <CardContent className="p-0">
        {objectives.map((objective) => (
          <div key={objective.id} className="mt-3 first:mt-0">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-primary">{objective.id}</span>
              <span className="min-w-0 flex-1 truncate text-[10px] font-extrabold uppercase tracking-[0.08em]">{objective.title}</span>
              <span className="text-[11px] font-extrabold text-muted-foreground">{objective.rollup}%</span>
            </div>
            <div className="space-y-2.5">
              {objective.keyResults.map((kr) => {
                const color = ragColor[kr.rag];
                return (
                  <div key={kr.id} style={{ color }}>
                    <div className="mb-1.5 flex items-center gap-2 text-[10px] font-bold">
                      <Dot />
                      <span className="min-w-0 flex-1 truncate text-foreground">{kr.id} // {kr.name}</span>
                      <span className="shrink-0 text-[#4fd2ff]">{kr.value}</span>
                    </div>
                    <div className="relative h-1.5 rounded-full bg-primary/10">
                      <div className="absolute inset-y-0 left-0 rounded-full bg-current shadow-[0_0_7px_currentColor]" style={{ width: `${Math.max(2, kr.fill)}%` }} />
                      {kr.start ? <span className="absolute -top-0.5 bottom-[-2px] w-px bg-white/45" style={{ left: `${kr.start}%` }} /> : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <Separator className="my-3 bg-primary/15" />
        <div className="flex flex-wrap gap-3">
          <span className="flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-[0.1em] text-[#28c76f]"><Dot />On track</span>
          <span className="flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-[0.1em] text-[#eca400]"><Dot />At risk</span>
          <span className="flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-[0.1em] text-[#e4572e]"><Dot />Off track</span>
        </div>
      </CardContent>
    </Card>
  );
}

function AudioPanel({ mode }: { mode: JarvisMode }) {
  const level = mode === "TALKING" ? 1 : mode === "THINKING" ? 0.62 : 0.35;
  const bars = Array.from({ length: 42 }, (_, index) => {
    const env = Math.sin((index / 42) * Math.PI);
    const height = Math.max(8, (0.2 + Math.abs(Math.sin(index * 0.72)) * 0.8) * env * level * 100);
    return height;
  });

  return (
    <Card className="p-4">
      <PanelHeading title="Audio I/O" meta={mode === "TALKING" ? "TX // Synthesizing" : mode === "THINKING" ? "RX // Processing" : "RX // Monitoring"} className="mb-2.5" />
      <div className="flex h-[58px] items-center gap-1">
        {bars.map((height, index) => (
          <span
            key={index}
            className="flex-1 rounded-sm bg-gradient-to-b from-[#4fd2ff] via-primary to-[#4fd2ff]"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </Card>
  );
}

export function MarketingDashboard() {
  const [mode, setMode] = useState<JarvisMode>("AUTO");
  const [vitals, setVitals] = useState(initialVitals);
  const [telemetry, setTelemetry] = useState<LogLine[]>(() => telemetryMessages.slice(0, 7).map((message, index) => ({
    id: `telemetry-${index}`,
    time: "00:00:00",
    message,
    status: "OK"
  })));
  const [diagnostics, setDiagnostics] = useState<LogLine[]>(() => diagnosticsMessages.slice(0, 7).map((message, index) => ({
    id: `diagnostics-${index}`,
    time: "00:00:00",
    message,
    status: "OK"
  })));
  const [messages, setMessages] = useState<JarvisMessage[]>([]);

  useEffect(() => {
    const vitalsTimer = window.setInterval(() => setVitals(randomizeVitals()), 2000);
    const telemetryTimer = window.setInterval(() => {
      setTelemetry((current) => [...current.slice(-15), makeLog(telemetryMessages, telemetryErrors)]);
    }, 3600);
    const diagnosticsTimer = window.setInterval(() => {
      setDiagnostics((current) => [...current.slice(-15), makeLog(diagnosticsMessages, diagnosticsErrors)]);
    }, 4300);

    return () => {
      window.clearInterval(vitalsTimer);
      window.clearInterval(telemetryTimer);
      window.clearInterval(diagnosticsTimer);
    };
  }, []);

  const activeModeLabel = useMemo(() => mode === "AUTO" ? "Auto" : mode.charAt(0) + mode.slice(1).toLowerCase(), [mode]);

  return (
    <main className="jarvis-grid flex h-screen min-h-[680px] w-screen flex-col overflow-hidden bg-[radial-gradient(125%_85%_at_50%_-5%,#0d3327_0%,rgba(7,32,22,0.54)_42%,#03100b_100%)] text-foreground max-[1180px]:h-auto max-[1180px]:min-h-screen max-[1180px]:overflow-visible">
      <TopBar />

      <section className="grid min-h-0 flex-1 grid-cols-[318px_minmax(460px,1fr)_344px] max-[1180px]:grid-cols-[minmax(280px,320px)_minmax(420px,1fr)] max-[820px]:flex max-[820px]:flex-col">
        <aside className="flex min-h-0 flex-col gap-3.5 overflow-y-auto p-4">
          <VitalsPanel vitals={vitals} />
          <LogPanel title="Telemetry" meta="Stream" logs={telemetry} />
          <AgentsPanel />
        </aside>

        <section className="relative flex min-h-0 min-w-0 flex-col max-[820px]:min-h-[720px]">
          <div className="relative min-h-0 flex-1">
            <NeuralOrb mode={mode} audioLevel={mode === "TALKING" ? 1 : 0.5} className="absolute inset-0" />

            <div className="absolute left-1/2 top-4 z-10 flex max-w-[calc(100%-28px)] -translate-x-1/2 gap-2 overflow-x-auto">
              {(["AUTO", "IDLE", "THINKING", "TALKING"] as JarvisMode[]).map((item) => (
                <Button
                  key={item}
                  type="button"
                  size="sm"
                  variant={mode === item ? "default" : "outline"}
                  onClick={() => setMode(item)}
                >
                  {item === "AUTO" ? <Activity /> : item === "IDLE" ? <Cpu /> : item === "THINKING" ? <Bot /> : <Radio />}
                  {item.toLowerCase()}
                </Button>
              ))}
            </div>

            <div className="pointer-events-none absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-center">
              <div className="whitespace-nowrap text-sm font-extrabold uppercase tracking-[0.34em] text-[#4fd2ff] drop-shadow-[0_0_14px_rgba(79,210,255,0.5)]">
                {activeModeLabel}
              </div>
              <div className="mt-1 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                Neural interface active
              </div>
            </div>
          </div>

          <div className="mx-4 mb-3">
            <VoiceConsole messages={messages} onMessagesChange={setMessages} onModeChange={setMode} />
          </div>
          <BudgetPanel />
        </section>

        <aside className="flex min-h-0 flex-col gap-3.5 overflow-y-auto p-4 max-[1180px]:col-span-2 max-[1180px]:grid max-[1180px]:grid-cols-3 max-[820px]:flex">
          <OkrPanel />
          <AudioPanel mode={mode} />
          <LogPanel title="Diagnostics" meta="Ops" logs={diagnostics} tall />
        </aside>
      </section>

      <div className="pointer-events-none fixed bottom-4 right-4 hidden items-center gap-2 rounded-full border border-primary/25 bg-black/30 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground backdrop-blur md:flex">
        <ShieldCheck className="size-3.5 text-[#28c76f]" />
        Secure operator console
        <CircleDollarSign className="ml-2 size-3.5 text-[#eca400]" />
        FY2026
        <Volume2 className="ml-2 size-3.5 text-[#4fd2ff]" />
        Push-to-talk
        <CheckCircle2 className="ml-2 size-3.5 text-[#28c76f]" />
        API routed
      </div>
    </main>
  );
}
