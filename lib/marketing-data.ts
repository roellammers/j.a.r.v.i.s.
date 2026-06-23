export type Vital = {
  key: string;
  value: string;
  fill: number;
};

export type AgentStatus = "ONLINE" | "RUNNING" | "ACTIVE" | "SYNCING" | "IDLE" | "STANDBY";

export type MarketingAgent = {
  name: string;
  role: string;
  glyph: string;
  status: AgentStatus;
  lead?: boolean;
};

export type KeyResult = {
  id: string;
  name: string;
  value: string;
  fill: number;
  start?: number;
  rag: "good" | "amber" | "bad";
};

export type Objective = {
  id: string;
  title: string;
  rollup: number;
  keyResults: KeyResult[];
};

export type BudgetMonth = {
  label: string;
  value: number;
  height: number;
  current?: boolean;
};

export const initialVitals: Vital[] = [
  { key: "Neural core", value: "98.4%", fill: 97 },
  { key: "Memory", value: "62.8%", fill: 64 },
  { key: "Latency", value: "14 ms", fill: 84 },
  { key: "Signal", value: "92%", fill: 92 },
  { key: "Thermal", value: "41 C", fill: 59 },
  { key: "Throughput", value: "2.4 GB/s", fill: 72 }
];

export const marketingAgents: MarketingAgent[] = [
  { name: "HILDA", role: "EVENT MANAGER", glyph: "H", status: "ONLINE" },
  { name: "HERMES", role: "ORCHESTRATOR", glyph: "H", status: "ONLINE", lead: true },
  { name: "BJORN", role: "COPYWRITER", glyph: "B", status: "ACTIVE" },
  { name: "MAJA", role: "SEO SPECIALIST", glyph: "M", status: "ONLINE" },
  { name: "ASTRID", role: "PAID MEDIA SPECIALIST", glyph: "A", status: "ACTIVE" },
  { name: "INGRID", role: "SOCIAL MEDIA MANAGER", glyph: "I", status: "ONLINE" },
  { name: "SVEN", role: "DATA ANALYST", glyph: "S", status: "SYNCING" },
  { name: "SIGRID", role: "CONTENT STRATEGIST", glyph: "S", status: "ONLINE" },
  { name: "FREYA", role: "DESIGNER", glyph: "F", status: "IDLE" },
  { name: "ERIK", role: "CMO", glyph: "E", status: "ONLINE" },
  { name: "SAGA", role: "AI MARKETING SPECIALIST", glyph: "S", status: "RUNNING" },
  { name: "VIDAR", role: "CONCIERGE", glyph: "V", status: "STANDBY" },
  { name: "TOR", role: "RESEARCH AGENT", glyph: "T", status: "ONLINE" }
];

export const objectives: Objective[] = [
  {
    id: "OBJ-1",
    title: "Drive a scalable demand engine",
    rollup: 37,
    keyResults: [
      { id: "KR-1.1", name: "Mkt-sourced new ARR", value: "0.6M / 5.6M", fill: 10.7, rag: "good" },
      { id: "KR-1.2", name: "Mkt-sourced pipeline", value: "11.1M / 20M", fill: 55.5, rag: "good" },
      { id: "KR-1.3", name: "Intros sourced", value: "12 / 27", fill: 44.4, rag: "amber" }
    ]
  },
  {
    id: "OBJ-2",
    title: "Build measurable brand trust",
    rollup: 43,
    keyResults: [
      { id: "KR-2.1", name: "Top-of-funnel traffic", value: "10,487 / 10,600", fill: 98.9, rag: "good" },
      { id: "KR-2.2", name: "LinkedIn followers", value: "243 / 1,000", fill: 24.3, start: 18, rag: "bad" },
      { id: "KR-2.3", name: "Visitor to demo conv.", value: "0.03% / 0.60%", fill: 5, start: 26.7, rag: "bad" }
    ]
  }
];

export const budgetMonths: BudgetMonth[] = [
  { label: "JAN", value: 11910, height: 4.9 },
  { label: "FEB", value: 12656, height: 5.2 },
  { label: "MAR", value: 80009, height: 32.9 },
  { label: "APR", value: 220013, height: 90.6 },
  { label: "MAY", value: 35956, height: 14.8 },
  { label: "JUN", value: 17956, height: 7.4, current: true },
  { label: "JUL", value: 10506, height: 4.3 },
  { label: "AUG", value: 34801, height: 14.3 },
  { label: "SEP", value: 242907, height: 100 },
  { label: "OCT", value: 16806, height: 6.9 },
  { label: "NOV", value: 34238, height: 14.1 },
  { label: "DEC", value: 16806, height: 6.9 }
];

export const telemetryMessages = [
  "core.heartbeat sync complete",
  "signal.trace quantized",
  "neural.mesh recalibrated",
  "cache.layer flushed",
  "telemetry.stream buffered",
  "sentiment.model scored",
  "attribution.graph resolved",
  "audience.segment refreshed",
  "vector.store compacted",
  "token.rotate verified",
  "cdn.edge warmed",
  "anomaly.scan nominal",
  "model.weights hot-swapped"
];

export const telemetryErrors = [
  "signal.trace packet loss",
  "cache.layer stale read",
  "neural.mesh sync drift"
];

export const diagnosticsMessages = [
  "utm.tags validated",
  "adspend.feed reconciled",
  "lead.score recomputed",
  "crm.sync handshake",
  "seo.audit pass",
  "funnel.stage mapped",
  "ssl.cert valid",
  "rate.limit nominal",
  "backup.snapshot stored",
  "webhook.queue drained",
  "dns.record propagated",
  "campaign.delta merged"
];

export const diagnosticsErrors = [
  "webhook.queue timeout",
  "adspend.feed retry",
  "crm.sync 429 throttle"
];
