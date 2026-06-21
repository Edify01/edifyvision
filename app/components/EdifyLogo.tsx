/**
 * EdifyLogo — fluid sphere mark with layered S-curve waves.
 * Inspired by smooth spherical iconography — dark-navy base with
 * two organic wave fills creating depth and visual flow.
 *
 * variant="light" → wordmark in dark ink  (navbar on white/light bg)
 * variant="dark"  → wordmark in white ink (navbar on dark bg, footer)
 * variant="mark"  → icon only
 */
interface EdifyLogoProps {
  variant?: "light" | "dark" | "mark";
  width?: number;
}

export default function EdifyLogo({ variant = "light", width = 140 }: EdifyLogoProps) {
  const markSize = Math.round(width * 0.252);
  const wordColor  = variant === "dark" ? "#ffffff" : "#101828";
  const mutedColor = variant === "dark" ? "rgba(255,255,255,0.52)" : "#667085";
  const fontSize   = Math.round(markSize * 0.62);
  const subSize    = Math.round(markSize * 0.355);

  // Per-instance gradient IDs so multiple logo renders on one page never clash
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
          {/* Hard circle clip — keeps all fills perfectly round */}
          <clipPath id={`${u}-c`}>
            <circle cx="18" cy="18" r="17.6" />
          </clipPath>

          {/*
           * Base: deep navy radial, lit subtly from upper-left.
           * Centre ~#0f3ea8, edges fade to very dark #020e52.
           */}
          <radialGradient
            id={`${u}-bg`}
            cx="13" cy="11" r="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%"   stopColor="#1045b0" />
            <stop offset="55%"  stopColor="#0a2880" />
            <stop offset="100%" stopColor="#020e52" />
          </radialGradient>

          {/*
           * Wave 1: the large lower-body fill.
           * Slightly lighter than the base so it reads as a distinct wave.
           */}
          <linearGradient
            id={`${u}-w1`}
            x1="0" y1="36" x2="36" y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%"   stopColor="#1045b0" />
            <stop offset="100%" stopColor="#1558c4" />
          </linearGradient>

          {/*
           * Wave 2: the S-curve highlight band.
           * Still clearly a dark blue — just enough lift to pop.
           */}
          <linearGradient
            id={`${u}-w2`}
            x1="0" y1="36" x2="36" y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%"   stopColor="#1660cc" />
            <stop offset="100%" stopColor="#1f78de" />
          </linearGradient>

          {/* Drop-shadow filter for subtle depth at the sphere edge */}
          <filter id={`${u}-sh`} x="-8%" y="-8%" width="116%" height="116%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.8"
              floodColor="#000830" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* ── Base sphere ── */}
        <circle
          cx="18" cy="18" r="17.6"
          fill={`url(#${u}-bg)`}
          filter={`url(#${u}-sh)`}
        />

        {/* ── Wave fills, clipped to circle ── */}
        <g clipPath={`url(#${u}-c)`}>

          {/*
           * Wave 1 — large organic sweep from bottom-left to upper-right.
           * Fills the bottom ~60 % of the sphere.
           *   Left entrance y≈22, curves up to centre y≈17, exits right y≈13.
           */}
          <path
            d="M -2,22 C 6,14 13,26 20,18 C 27,11 32,20 38,13 L 38,38 L -2,38 Z"
            fill={`url(#${u}-w1)`}
          />

          {/*
           * Wave 2 — the S-curve highlight band sitting above Wave 1.
           * Left entrance y≈12, sweeps up, exits right y≈5.
           * Bottom edge matches Wave 1's top edge for a seamless seam.
           */}
          <path
            d="M -2,12 C 6,4 13,16 20,8 C 27,0 32,9 38,4 L 38,13 C 32,20 27,11 20,18 C 13,26 6,14 -2,22 Z"
            fill={`url(#${u}-w2)`}
          />

          {/*
           * Specular gleam — small rotated ellipse at upper-left.
           * Gives the sphere its glassy, dimensional quality.
           */}
          <ellipse
            cx="11.5" cy="9"
            rx="7.5" ry="3.2"
            fill="rgba(255,255,255,0.13)"
            transform="rotate(-28 11.5 9)"
          />
        </g>

        {/* ── Outer rim — adds depth / edge definition ── */}
        <circle
          cx="18" cy="18" r="17.3"
          fill="none"
          stroke="rgba(0,8,50,0.4)"
          strokeWidth="0.9"
        />
        {/* Inner highlight ring */}
        <circle
          cx="18" cy="18" r="16.7"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.45"
        />
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
