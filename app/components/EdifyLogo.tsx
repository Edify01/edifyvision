/**
 * EdifyLogo — three-band fluid sphere mark.
 *
 * The 36×36 viewBox is divided into exactly three equal 12-unit tiers:
 *   Top    y  0–12  → lightest dark blue   (#1c68d4 → #1458c0)
 *   Middle y 12–24  → royal blue           (#1040a8 → #0d3598)
 *   Bottom y 24–36  → deep midnight navy   (#0a2070 → #040c3e)
 *
 * Two centred S-curve wave boundaries (amplitude ±5 px) separate the tiers.
 * No specular highlight. Each tier has its own scoped linear gradient.
 *
 * variant="light" → wordmark in dark ink  (navbar on light bg)
 * variant="dark"  → wordmark in white ink (footer / dark bg)
 * variant="mark"  → icon only
 */
interface EdifyLogoProps {
  variant?: "light" | "dark" | "mark";
  width?: number;
}

export default function EdifyLogo({ variant = "light", width = 140 }: EdifyLogoProps) {
  const markSize   = Math.round(width * 0.252);
  const wordColor  = variant === "dark" ? "#ffffff" : "#101828";
  const mutedColor = variant === "dark" ? "rgba(255,255,255,0.52)" : "#667085";
  const fontSize   = Math.round(markSize * 0.62);
  const subSize    = Math.round(markSize * 0.355);

  // Unique prefix — prevents gradient ID collisions when rendered
  // multiple times on the same page (navbar + footer, etc.)
  const u = `el-${variant}`;

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: Math.round(markSize * 0.36) }}>

      {/* ── Sphere mark ─────────────────────────────────────────── */}
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <defs>
          {/* Clip to perfect circle */}
          <clipPath id={`${u}-clip`}>
            <circle cx="18" cy="18" r="17.5" />
          </clipPath>

          {/* ── BOTTOM tier gradient (y 24–36) ──────────────────
              Rich depth gradient: deep navy to royal blue            */}
          <linearGradient
            id={`${u}-bot`}
            x1="0" y1="36" x2="36" y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%"   stopColor="#0a1e4a" />
            <stop offset="50%"  stopColor="#0d2a66" />
            <stop offset="100%" stopColor="#10357d" />
          </linearGradient>

          {/* ── MIDDLE tier gradient (y 12–24) ──────────────────
              Smooth transition: royal to bright blue                 */}
          <linearGradient
            id={`${u}-mid`}
            x1="0" y1="24" x2="36" y2="12"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%"   stopColor="#10357d" />
            <stop offset="50%"  stopColor="#1448a8" />
            <stop offset="100%" stopColor="#1a5bc4" />
          </linearGradient>

          {/* ── TOP tier gradient (y 0–12) ───────────────────────
              Luminous highlight: bright to vibrant blue              */}
          <linearGradient
            id={`${u}-top`}
            x1="0" y1="12" x2="36" y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%"   stopColor="#1a5bc4" />
            <stop offset="50%"  stopColor="#1e6ed8" />
            <stop offset="100%" stopColor="#2882ed" />
          </linearGradient>

          {/* Subtle drop-shadow for edge depth */}
          <filter id={`${u}-sh`} x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow
              dx="0" dy="1.5" stdDeviation="2"
              floodColor="#000820" floodOpacity="0.55"
            />
          </filter>
        </defs>

        {/* ── Layer 1: full sphere = bottom tier base colour ── */}
        <circle
          cx="18" cy="18" r="17.5"
          fill={`url(#${u}-bot)`}
          filter={`url(#${u}-sh)`}
        />

        {/* ── Layers 2 & 3: wave fills, clipped to circle ── */}
        <g clipPath={`url(#${u}-clip)`}>

          {/*
           * MIDDLE tier fill.
           * Covers everything above the bottom wave boundary (y-centre = 24).
           * Smooth wave centered perfectly with controlled amplitude.
           * Creates clean separation between bottom and middle tiers.
           */}
          <path
            d="M -2,24 C 6,21 12,27 18,24 C 24,21 30,27 38,24 L 38,-2 L -2,-2 Z"
            fill={`url(#${u}-mid)`}
          />

          {/*
           * TOP tier fill.
           * Covers everything above the top wave boundary (y-centre = 12).
           * Identical wave geometry for visual consistency.
           * Creates clean separation between middle and top tiers.
           */}
          <path
            d="M -2,12 C 6,9 12,15 18,12 C 24,9 30,15 38,12 L 38,-2 L -2,-2 Z"
            fill={`url(#${u}-top)`}
          />
        </g>

        {/* ── Rim rings for polish ── */}
        <circle cx="18" cy="18" r="17.2"
          fill="none" stroke="rgba(0,5,40,0.5)" strokeWidth="0.85" />
        <circle cx="18" cy="18" r="16.6"
          fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.4" />
      </svg>

      {/* ── Wordmark ─────────────────────────────────────────────── */}
      {variant !== "mark" && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{
            fontFamily: "var(--font-ibm-plex-serif)",
            fontWeight: 600,
            fontSize: fontSize,
            color: wordColor,
            letterSpacing: "0.02em",
            lineHeight: 1.05,
          }}>
            Edify
          </span>
          <span style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
            fontSize: subSize,
            color: mutedColor,
            letterSpacing: "0.18em",
            textTransform: "uppercase" as const,
            lineHeight: 1.3,
            marginTop: 2,
          }}>
            Consulting
          </span>
        </div>
      )}
    </div>
  );
}
