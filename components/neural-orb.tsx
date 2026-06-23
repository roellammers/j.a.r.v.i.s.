"use client";

import { useEffect, useRef } from "react";
import type { JarvisMode } from "@/types/jarvis";

type NeuralOrbProps = {
  mode: JarvisMode;
  audioLevel?: number;
  className?: string;
};

const COLORS = {
  accent: "#00A6ED",
  accent2: "#4FD2FF",
  fade: "rgba(5,18,13,0.30)"
};

export function NeuralOrb({ mode, audioLevel = 0.4, className }: NeuralOrbProps) {
  const orbRef = useRef<HTMLCanvasElement | null>(null);
  const waveRef = useRef<HTMLCanvasElement | null>(null);
  const modeRef = useRef(mode);
  const audioRef = useRef(audioLevel);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    audioRef.current = audioLevel;
  }, [audioLevel]);

  useEffect(() => {
    const canvasNode = orbRef.current;
    const waveNode = waveRef.current;
    if (!canvasNode || !waveNode) return;

    const canvasContext = canvasNode.getContext("2d");
    const waveContext = waveNode.getContext("2d");
    if (!canvasContext || !waveContext) return;

    const canvas = canvasNode;
    const wave = waveNode;
    const ctx = canvasContext;
    const wctx = waveContext;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 1;
    let H = 1;
    let cx = 0;
    let cy = 0;
    let R = 1;
    let DPR = Math.min(window.devicePixelRatio || 1, 2);
    let waveW = 1;
    let waveH = 1;
    let raf = 0;
    let rot = 0;
    let tilt = 0;
    let last = performance.now();
    let autoTimer = 0;
    let autoIdx = 0;
    let autoMode: Exclude<JarvisMode, "AUTO"> = "IDLE";

    const modes = {
      IDLE: { speed: 0.28, breathe: 0.025, bf: 0.8, chaos: 0.018, glow: 0.55, audio: 0.32 },
      THINKING: { speed: 0.55, breathe: 0.05, bf: 1.4, chaos: 0.2, glow: 0.7, audio: 0.5 },
      TALKING: { speed: 0.85, breathe: 0.018, bf: 5.0, chaos: 0.04, glow: 0.95, audio: 1.0 }
    };
    const autoSeq: Exclude<JarvisMode, "AUTO">[] = ["IDLE", "THINKING", "TALKING"];
    const pointCount = 1100;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const particles = new Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      phase: number;
      speed: number;
      color: number;
    }>(pointCount);
    const sx = new Float32Array(pointCount);
    const sy = new Float32Array(pointCount);
    const sz = new Float32Array(pointCount);
    const sa = new Float32Array(pointCount);
    const ss = new Float32Array(pointCount);
    const connected = new Int8Array(pointCount);
    const cell = 34;
    const waveBars = 52;
    const phases = Array.from({ length: waveBars }, () => Math.random() * Math.PI * 2);

    for (let i = 0; i < pointCount; i += 1) {
      const y = 1 - ((i + 0.5) / pointCount) * 2;
      const radial = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i;
      const x = Math.cos(theta) * radial;
      const z = Math.sin(theta) * radial;
      let vx = -z;
      let vy = 0;
      let vz = x;
      const velocityLength = Math.hypot(vx, vy, vz) || 1;
      vx /= velocityLength;
      vy /= velocityLength;
      vz /= velocityLength;
      particles[i] = {
        x,
        y,
        z,
        vx,
        vy,
        vz,
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 0.7,
        color: Math.random()
      };
    }

    function sizeCanvas() {
      const r = canvas.getBoundingClientRect();
      W = Math.max(1, r.width);
      H = Math.max(1, r.height);
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      cx = W / 2;
      cy = H / 2;
      R = Math.min(W, H) * 0.3;
    }

    function sizeWave() {
      const r = wave.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      waveW = Math.max(1, r.width);
      waveH = Math.max(1, r.height);
      wave.width = waveW * dpr;
      wave.height = waveH * dpr;
      wctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawWave(t: number, amp: number) {
      wctx.clearRect(0, 0, waveW, waveH);
      const width = waveW / waveBars;
      const mid = waveH / 2;
      const mix = Math.max(0.22, Math.min(1.1, amp * audioRef.current));

      for (let i = 0; i < waveBars; i += 1) {
        const env = Math.sin((i / waveBars) * Math.PI);
        const h = (0.12 + 0.88 * Math.abs(Math.sin(t * 0.004 * (1 + mix) + phases[i] + i * 0.3))) * env * mix * (waveH * 0.46);
        const x = i * width + width * 0.2;
        const bw = width * 0.6;
        const gradient = wctx.createLinearGradient(0, mid - h, 0, mid + h);
        gradient.addColorStop(0, COLORS.accent2);
        gradient.addColorStop(0.5, COLORS.accent);
        gradient.addColorStop(1, COLORS.accent2);
        wctx.fillStyle = gradient;
        wctx.fillRect(x, mid - h, bw, h * 2);
      }

      wctx.strokeStyle = "rgba(0,166,237,.25)";
      wctx.lineWidth = 1;
      wctx.beginPath();
      wctx.moveTo(0, mid);
      wctx.lineTo(waveW, mid);
      wctx.stroke();
    }

    function drawSatellites(t: number) {
      const sr = Math.min(W, H) * 0.455;
      for (let s = 0; s < 4; s += 1) {
        const angle = t * 0.00018 + s * Math.PI / 2;
        const x = cx + Math.cos(angle) * sr;
        const y = cy + Math.sin(angle) * sr;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + t * 0.001);
        ctx.strokeStyle = COLORS.accent2;
        ctx.globalAlpha = 0.85;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(0, -7);
        ctx.lineTo(6, 0);
        ctx.lineTo(0, 7);
        ctx.lineTo(-6, 0);
        ctx.closePath();
        ctx.stroke();
        ctx.globalAlpha = 0.4;
        ctx.beginPath();
        ctx.arc(0, 0, 11, 0, Math.PI * 1.4);
        ctx.stroke();
        ctx.fillStyle = COLORS.accent;
        ctx.globalAlpha = 0.9;
        ctx.fillRect(-1.3, -1.3, 2.6, 2.6);
        ctx.restore();
      }
      ctx.globalAlpha = 1;
    }

    function frame(now: number) {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      let modeName = modeRef.current;

      if (modeName === "AUTO") {
        autoTimer += dt;
        if (autoTimer > 4.5) {
          autoTimer = 0;
          autoIdx = (autoIdx + 1) % autoSeq.length;
          autoMode = autoSeq[autoIdx];
        }
        modeName = autoMode;
      }

      const modeDef = modes[modeName] || modes.IDLE;
      rot += modeDef.speed * dt * 0.6;
      tilt = Math.sin(now * 0.0002) * 0.3 + 0.35;
      const breathe = 1 + modeDef.breathe * Math.sin(now * 0.001 * modeDef.bf);
      const radius = R * breathe;

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = COLORS.fade;
      ctx.fillRect(0, 0, W, H);

      ctx.globalCompositeOperation = "lighter";
      const coreRadius = radius * (modeName === "TALKING" ? 1 + 0.12 * Math.abs(Math.sin(now * 0.02)) : 0.95);
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreRadius);
      glow.addColorStop(0, `rgba(180,235,255,${0.5 * modeDef.glow})`);
      glow.addColorStop(0.18, `rgba(79,210,255,${0.28 * modeDef.glow})`);
      glow.addColorStop(0.5, `rgba(0,166,237,${0.12 * modeDef.glow})`);
      glow.addColorStop(1, "rgba(0,166,237,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2);
      ctx.fill();

      const cosR = Math.cos(rot);
      const sinR = Math.sin(rot);
      const cosT = Math.cos(tilt);
      const sinT = Math.sin(tilt);

      for (let i = 0; i < pointCount; i += 1) {
        const p = particles[i];
        const speed = modeDef.speed * p.speed;
        p.x += p.vx * speed * dt;
        p.y += p.vy * speed * dt;
        p.z += p.vz * speed * dt;

        if (modeName === "THINKING") {
          p.vx += (Math.random() - 0.5) * modeDef.chaos;
          p.vy += (Math.random() - 0.5) * modeDef.chaos;
          p.vz += (Math.random() - 0.5) * modeDef.chaos;
        }

        const len = Math.hypot(p.x, p.y, p.z) || 1;
        p.x /= len;
        p.y /= len;
        p.z /= len;

        const dot = p.vx * p.x + p.vy * p.y + p.vz * p.z;
        p.vx -= dot * p.x;
        p.vy -= dot * p.y;
        p.vz -= dot * p.z;
        const velocityLength = Math.hypot(p.vx, p.vy, p.vz) || 1;
        p.vx /= velocityLength;
        p.vy /= velocityLength;
        p.vz /= velocityLength;

        let rr = radius;
        if (modeName === "THINKING") rr = radius * (1 + 0.2 * Math.sin(now * 0.0013 + p.phase * 3) + 0.07 * Math.sin(now * 0.004 + p.phase * 7));
        else if (modeName === "TALKING") rr = radius * (1 + 0.03 * Math.sin(now * 0.012 + p.phase * 4));
        else rr = radius * (1 + 0.014 * Math.sin(now * 0.001 + p.phase * 2));

        const X = p.x * rr;
        const Y = p.y * rr;
        const Z = p.z * rr;
        const X1 = X * cosR + Z * sinR;
        const Z1 = -X * sinR + Z * cosR;
        const Y1 = Y * cosT - Z1 * sinT;
        const Z2 = Y * sinT + Z1 * cosT;
        const depth = (Z2 / radius + 1) / 2;
        sx[i] = cx + X1;
        sy[i] = cy + Y1;
        sz[i] = Z2;
        sa[i] = 0.18 + depth * 0.82;
        ss[i] = 0.8 + depth * 1.9;
        connected[i] = 0;
      }

      const grid = new Map<string, number[]>();
      for (let i = 0; i < pointCount; i += 1) {
        const gx = (sx[i] / cell) | 0;
        const gy = (sy[i] / cell) | 0;
        const key = `${gx},${gy}`;
        const bucket = grid.get(key);
        if (bucket) bucket.push(i);
        else grid.set(key, [i]);
      }

      ctx.lineWidth = 0.7;
      const d2max = 30 * 30;
      for (let i = 0; i < pointCount; i += 1) {
        if (connected[i] >= 2) continue;
        const gx = (sx[i] / cell) | 0;
        const gy = (sy[i] / cell) | 0;
        for (let ox = -1; ox <= 1 && connected[i] < 2; ox += 1) {
          for (let oy = -1; oy <= 1 && connected[i] < 2; oy += 1) {
            const bucket = grid.get(`${gx + ox},${gy + oy}`);
            if (!bucket) continue;
            for (const j of bucket) {
              if (j <= i || connected[j] >= 2) continue;
              const dx = sx[i] - sx[j];
              const dy = sy[i] - sy[j];
              const distance = dx * dx + dy * dy;
              if (distance < d2max && Math.abs(sz[i] - sz[j]) < radius * 0.45) {
                const alpha = (1 - distance / d2max) * Math.min(sa[i], sa[j]) * 0.5;
                ctx.strokeStyle = `rgba(0,166,237,${alpha.toFixed(3)})`;
                ctx.beginPath();
                ctx.moveTo(sx[i], sy[i]);
                ctx.lineTo(sx[j], sy[j]);
                ctx.stroke();
                connected[i] += 1;
                connected[j] += 1;
                if (connected[i] >= 2) break;
              }
            }
          }
        }
      }

      for (let i = 0; i < pointCount; i += 1) {
        const p = particles[i];
        const alpha = sa[i];
        const size = ss[i];
        const color = p.color > 0.85 ? "193,224,255" : p.color > 0.5 ? "79,210,255" : "0,166,237";
        ctx.fillStyle = `rgba(${color},${alpha.toFixed(3)})`;
        ctx.fillRect(sx[i] - size / 2, sy[i] - size / 2, size, size);
      }

      drawSatellites(now);
      drawWave(now, modeDef.audio);
      ctx.globalCompositeOperation = "source-over";

      if (!reduced) raf = requestAnimationFrame(frame);
    }

    function resize() {
      sizeCanvas();
      sizeWave();
      if (reduced) {
        ctx.fillStyle = "#03100b";
        ctx.fillRect(0, 0, W, H);
        frame(performance.now());
        cancelAnimationFrame(raf);
      }
    }

    sizeCanvas();
    sizeWave();
    if (reduced) resize();
    else raf = requestAnimationFrame(frame);

    window.addEventListener("resize", resize);
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    observer.observe(wave);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={className}>
      <canvas ref={orbRef} className="absolute inset-0 size-full" aria-label="Neural interface" />
      <canvas ref={waveRef} className="sr-only" aria-hidden="true" />
    </div>
  );
}
