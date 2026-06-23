# Pingwire Design System

> **Precise AML. Predictable Growth.**
> Built for Good.

Pingwire is an anti-money-laundering (AML) and compliance platform that helps financial teams detect risk faster, monitor transactions in real time, and prove their compliance impact — turning responsibility into momentum rather than a cost center.

This design system is the single source of truth for how Pingwire **looks, sounds, and communicates**. Use it to build product, marketing, decks, and prototypes with consistency and confidence.

---

## Sources

This system was distilled from the following source, which lives in the project:

- `uploads/pingwire_brand_guidelines.tsx` — the complete brand book React app (cover, narrative, values, principles, tone of voice, logo, colour, typography, spacing, components, patterns). All rules and values below are pulled directly from it.

No external codebase or Figma file was provided. If you have access to the production Pingwire repo or Figma library, hand it over and I'll deepen the UI kits with real component code.

---

## Product context

Based on the brand book, Pingwire ships (at minimum) two surfaces that this system covers:

1. **Marketing website** — Positions Pingwire as a next-gen AML platform. Hero with the "Precise AML. Predictable Growth." headline, a conversational "Ask Pingwire AI anything about compliance..." composer, compliance badges (SOC2, ISO 27001), feature cards, and trust markers.
2. **Compliance product (web app)** — Transaction monitoring, screening against 40+ global watchlists, AI-driven detection, rule configuration with audit trail, onboarding flows, dashboards. Sub-100ms screening; 99.7% accuracy claim.

Both surfaces share the full design system defined here.

---

## Content fundamentals

### Voice in one sentence
**Clear, confident, and human** — a compliance partner, not another system.

### Four tone dimensions (The Nielsen Norman model)
Pingwire's voice lives at specific positions on four axes:

| Axis | Position | What that means |
|---|---|---|
| Funny ↔ **Serious** | far Serious | The subject matter is serious. Treat it that way. |
| **Formal** ↔ Casual | near center, slightly casual | Approachable but credible. |
| **Respectful** ↔ Irreverent | far Respectful | Never playful about crime, enforcement, or customers. |
| Enthusiastic ↔ **Matter of fact** | center, leaning matter-of-fact | Calm certainty, not hype. |

### Tone by scenario (examples from the brand book)
- **Onboarding:** Serious, Respectful, Slightly Casual, Matter-of-fact — builds trust quickly, reduces friction.
- **Error messages:** Serious, Respectful, Formal, Matter-of-fact — keep users calm and focused on the next step.
- **Marketing / website:** Serious, Respectful, Slightly Casual, Moderately Enthusiastic — signals leadership without overstating claims.
- **Tooltips:** Explain complex topics clearly without sounding instructional or cold.

### Copy rules (DO)
- **Be precise, calm, and factual.** Lead with information. Remove anything that doesn't add clarity.
- **Explain complex topics in plain language.** Use correct regulatory terms, then immediately clarify them.
- **Guide users clearly toward the next step.** Every piece of copy should reduce confusion, not add to it.
- **Signal confidence through clarity, not emotion.** Calm certainty outperforms hype in this space.

### Copy rules (DON'T)
- **Don't joke** about financial crime, AML, KYC, sanctions, or enforcement.
- **Don't use** alarmist, judgmental, or playful language.
- **Don't overpromise** or speculate without evidence.
- **Don't hide meaning** behind jargon, acronyms, or buzzwords. If you need to explain a term, explain it immediately.

### Casing & conventions
- **Sentence case** for headings and buttons in UI (matches the brand book patterns — "How can we help you today?", "Contact us").
- **UPPERCASE with tracking** (0.08–0.14em) reserved for section eyebrows, compliance badges (e.g. `NEXT-GEN AML`, `SOC2 COMPLIANT`), and small metadata labels — always 12px / weight 600.
- **Pronouns:** "We" for Pingwire, "you" for the customer. First-person plural is the default ("We believe in turning responsibility into momentum.").
- **Numerals:** Prefer numerals for stats ("40+ watchlists", "99.7% accuracy", "sub-100ms").
- **Emoji:** Not a brand device. A tiny set of functional symbols are permitted in UI chrome only (⚡ in chip labels, 🔒 on compliance badges, ✓ / ● status dots). Do not use decorative emoji in marketing copy or slides.
- **No italics in UI.** Use weight changes for emphasis — italic breaks rhythm in data-dense layouts.

### Example voice
- **Tagline:** "Precise AML. Predictable Growth."
- **Narrative opener:** "Built for Good."
- **Product line:** "Secure your financial ecosystem with intelligent, real-time threat detection."
- **Feature line:** "Screen transactions against 40+ global watchlists with sub-100ms response time."
- **Trust line:** "AI-driven detection with near-zero false positives."

---

## Visual foundations

### Colors
The palette is **green-anchored** with warm accent moments. Main Green `#124131` is the brand anchor — it carries hero backgrounds, nav, and footer, and is **never** used as a CTA fill. The accent drives action; Marigold `#ECA400` is the default. Full token list in `colors_and_type.css` and the preview cards.

- **Anchors:** Deep Forest `#0B2920`, Main Green `#124131`, Dark Green `#238061` (CTAs, links, hover).
- **Surfaces:** Bright Snow `#F9FAFA`, Light Green 2 `#D1DCDA`, Light Green 3 `#ACC3BD`.
- **Accents (one at a time):** Marigold (default), Fresh Sky `#00A6ED`, Slate Indigo `#5158BB`, Pale Sky `#C6E0FF`.
- **Semantic:** Success `#28C76F`, Flame `#E4572E` (alerts/destructive only).
- **Text:** Black `#000000` body, `#999999` muted, `#B8B8B8` placeholder, `#E0E0E0` rule lines.

### Typography
**One family: Inter**, weights 400–800. No serif, no secondary typeface, no system fonts in brand contexts. Headlines are in brand color (Main Green on light, white on dark/green). Body minimum 14px at 1.65 line-height. Captions are always 12px / 600 with 0.08–0.14em tracking when in caps.

Display and heading tracking runs **tight** (`-0.02em` to `-0.03em`); body tracking is neutral; caps labels are **loose** (0.08–0.14em).

### Spacing
**4px base grid.** Scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96. Cards use 24px padding; buttons use 12/24 padding; sections use 48–64px; page margins use 96px.

### Radii
`sm 4` · `md 8` (buttons/inputs) · `lg 12` (cards) · `xl 16` (hero/modal) · `2xl 20` (cover hero) · `pill 9999` (badges, chips).

### Shadows
Layered but subtle, always tinted with the Main Green rather than pure black:
- **Card:** `0 1px 4px rgba(18,65,49,0.10)` — hairline lift
- **Elevated:** `0 4px 16px rgba(18,65,49,0.14)`
- **Modal:** `0 20px 48px rgba(18,65,49,0.22)`
- **CTA Glow:** `0 0 20px rgba(<accent>, 0.35–0.40)` — the signature "accent is alive" effect on primary CTAs and the marquee accent badge dot

### Borders
- Card borders are always a **single hairline** (1px) in Light Green 2 (`#D1DCDA`) on light, or `rgba(172,195,189,0.15)` on dark.
- Rule lines between list rows: `#E0E0E0`.
- Focus rings are 3px of the accent at ~18% opacity — never a dashed outline.
- The top nav carries a **2px Dark Green underline** on light theme as a signature detail.

### Backgrounds
- **Flood-fill** (color and type doing the work) is the house style — no stock photography by default.
- The dark hero block uses **radial accent glows**: large soft ellipses of `rgba(35,128,97,0.3–0.5)` placed off-canvas (e.g. `top:-20% right:-5%`) to create atmospheric depth without being gradient-heavy.
- Light surfaces use Bright Snow `#F9FAFA`; never pure white for the page.
- Photography (when used) is green-tinted: subjects composited onto a Main→Dark Green gradient in post. Three crops: Close Up (mid-chest), Half-Body, Wide.

### Layout modes
Three approved modes from the brand book:
- **Heroic** — full-bleed imagery, dark overlay, campaign moments.
- **Flood Fill** — content-first, no photography, typography + color.
- **Split** — image + copy in two columns.

### Cards
Four card styles exist and are distinct:
1. **Default** — white bg, 1px Light Green 2 border, 12px radius, subtle card shadow, small uppercase eyebrow in Dark Green.
2. **Dark** — Main Green bg, white text, Light Green 3 muted text. No shadow.
3. **Highlight** — Accent-tinted bg (`rgba(<accent>,0.07)`), accent-tinted border (`rgba(<accent>,0.25)`), accent-colored eyebrow.
4. **Success/Alert** — Semantic tint (`rgba(40,199,111,0.07)` or `rgba(228,87,46,0.07)`) with matching border.

All cards share the same radius, padding, and eyebrow pattern — the variation is purely bg/border/text color.

### Animation & interaction
- **Transitions:** short and functional — ~0.15s for hover color/bg, 0.25s for theme change. Cubic-bezier defaults; no bouncy easings.
- **Hover (buttons):** subtle brightness lift OR the CTA glow intensifying; no scale.
- **Press:** no shrink/scale — briefly shift to a darker shade of the same color.
- **Focus:** 3px accent-tinted ring, no dashed outlines.
- **No parallax, no confetti, no marquees.** Motion supports reading, not spectacle.

### Transparency & blur
Used sparingly, deliberately:
- Glass chips on the hero (`background:rgba(255,255,255,0.08)` + `backdrop-filter: blur(4px)` + 1px white 18% border).
- Badge backgrounds are semi-transparent tints of their own color (e.g. `rgba(40,199,111,0.12)`), not solid fills.
- Dark-theme input fills are `rgba(255,255,255,0.06)`.

### Borders vs. capsules
- Buttons, inputs, cards → **8–16px radius** with 1px borders.
- Badges, status dots, chips, compliance markers → **pill (9999px)** with semi-transparent color bg + matching border + dot or checkmark prefix.

### Dark theme
First-class. Page `#0B2920`, surfaces `#124131` / `#1A4D3A`, muted text `#ACC3BD`, borders drop to `rgba(172,195,189,0.15)`. Shadows become modal-heavy (`rgba(0,0,0,0.3)`) because green-tinted shadows are invisible on green.

---

## Iconography

Pingwire's brand book does **not** ship a proprietary icon font or SVG set. The guidelines lean on a small, intentional set of typographic and unicode icons used consistently across patterns:

### In-house iconic devices (keep these exact)
- **`>p` mark** — the shorthand logo. Use for favicons, avatars, social profiles, tight UI, slide footers. Positive (white on Main Green) and Negative (Main Green on Bright Snow) only. `assets/logo-mark-green.svg`, `assets/logo-mark-light.svg`.
- **`>pingwire_`** — the full wordmark with the leading `>` prompt-character and trailing `_` cursor. Always paired, never separated. `assets/logo-wordmark-*.svg`.
- **Status dot** — a filled 5–8px circle inside pill badges (`● Live`, `● Active`). The color matches the badge's text/border.
- **2px accent rule** — a 48×2 Dark Green bar used as a section divider on hero blocks, signalling the start of a content block.

### Unicode symbols used in UI
The brand book uses a narrow, specific set — prefer these when drawing icons before reaching for an icon library:

| Symbol | Usage |
|---|---|
| `▶` | Send / submit button in the AI composer |
| `⚡` | Active / high-priority chip |
| `🔗` | Integrations chip |
| `▷` | "Does X fit us?" exploratory chip |
| `🔒` | SOC2 compliance badge |
| `✔` / `✓` | Verified / successful states |
| `●` | Status dot inside pills |
| `☾` / `☀` | Dark/light theme toggle |
| `→` | CTA affordance on navigation buttons |
| `•` | Separator between compliance tags in caption text |

### When you need a broader icon set
Use **[Lucide](https://lucide.dev)** via CDN as the default substitute (same stroke weight, geometric, calm). Lucide matches Pingwire's feel better than Heroicons or Feather in A/B: square line caps, 2px stroke, geometric circles.

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="shield-check"></i>
<script>lucide.createIcons();</script>
```

> ⚠️ **Substitution flag:** Lucide is **not** officially sanctioned by Pingwire's brand book — it's a documented stand-in until the Pingwire icon library is shipped. Flag this to anyone using this system.

### No go
- No emoji as decorative content (cards, heroes, body copy). Functional chrome only.
- No multicolor / gradient icons. Strokes should always be a single brand color.
- No photo-realistic illustrations. No 3D isometrics. No hand-drawn line art.

---

## Visual foundations quick reference

See:
- `colors_and_type.css` — all color + type CSS variables
- `preview/` — rendered specimen cards for each foundation
- `ui_kits/` — live, interactive kits per product

---

## Index / manifest

```
Pingwire Design System/
├── README.md                     ← you are here
├── SKILL.md                      ← Claude Code skill manifest
├── colors_and_type.css           ← all CSS tokens (colors, type, spacing, radii, shadows)
├── uploads/
│   └── pingwire_brand_guidelines.tsx   ← original brand book (source of truth)
├── fonts/
│   └── README.md                 ← Inter, via Google Fonts @import
├── assets/
│   ├── logo-mark-green.svg       ← >p mark, white on green
│   ├── logo-mark-light.svg       ← >p mark, green on snow
│   ├── logo-wordmark-green.svg   ← >pingwire_ wordmark, green
│   ├── logo-wordmark-white.svg   ← >pingwire_ wordmark, white (for dark bgs)
│   └── logo-wordmark-black.svg   ← >pingwire_ wordmark, mono black
├── preview/
│   └── *.html                    ← specimen cards registered in the Design System tab
└── ui_kits/
    ├── marketing/                ← marketing website recreation
    │   ├── index.html
    │   └── *.jsx
    └── app/                      ← compliance product recreation
        ├── index.html
        └── *.jsx
```

---

## How to use this system

1. **For prototypes / mocks / slides** — link `colors_and_type.css`, drop in the logo SVGs, follow the voice + iconography rules, and pull components out of `ui_kits/`.
2. **For production code** — the tokens in `colors_and_type.css` are the contract. Mirror them into your project's theme file and follow the rules here for voice, motion, and iconography substitutions.
3. **For tone questions** — re-read the "Content fundamentals" section above. When in doubt: precise, calm, factual, human.
