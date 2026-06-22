/**
 * EdifyLogo — a crisp isometric cube built from three gradient faces.
 * The mark is purely geometric: modern, techy, instantly recognisable.
 * variant="light"  → wordmark in dark ink  (navbar on white/light bg)
 * variant="dark"   → wordmark in white ink (navbar on dark/hero bg, footer)
 * variant="mark"   → icon only (favicons, tight spaces)
 */
interface EdifyLogoProps {
  variant?: "light" | "dark" | "mark";
  /** Overall width in px — height scales proportionally */
  width?: number;
}

export default function EdifyLogo({ variant = "light", width = 140 }: EdifyLogoProps) {
  const markSize = Math.round(width * 0.245);        // cube icon size
  const wordColor = variant === "dark" ? "#ffffff" : "#101828";
  const mutedColor = variant === "dark" ? "rgba(255,255,255,0.55)" : "#667085";
  const fontSize = Math.round(markSize * 0.62);
  const subSize  = Math.round(markSize * 0.36);

  /* The cube: isometric three faces rendered in SVG */
  const s = markSize;
  // face points
  const cx = s / 2;                // horizontal center
  const top = s * 0.08;
  const mid = s * 0.44;
  const bot = s * 0.92;
  const lx  = s * 0.09;
  const rx  = s * 0.91;
  const lm  = s * 0.09;
  const rm  = s * 0.91;

  const topFace   = `${cx},${top} ${rx},${mid} ${cx},${mid + (mid - top)} ${lx},${mid}`;
  const leftFace  = `${lx},${mid} ${cx},${mid + (mid - top)} ${cx},${bot} ${lm},${bot}`;
  const rightFace = `${cx},${mid + (mid - top)} ${rx},${mid} ${rm},${bot} ${cx},${bot}`;

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: Math.round(markSize * 0.38) }}>
      {/* ── Cube mark ────────────────────────────────────────────── */}
      <svg
        width={s} height={s}
        viewBox={`0 0 ${s} ${s}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="ec-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4893FF" />
            <stop offset="100%" stopColor="#0179FE" />
          </linearGradient>
          <linearGradient id="ec-left" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#175CD3" />
            <stop offset="100%" stopColor="#0F3F99" />
          </linearGradient>
          <linearGradient id="ec-right" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E90FA" />
            <stop offset="100%" stopColor="#1570EF" />
          </linearGradient>
          {/* subtle inner edge highlight */}
          <filter id="ec-soft">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#0179FE" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Top face */}
        <polygon points={topFace}   fill="url(#ec-top)"   filter="url(#ec-soft)" />
        {/* Left face */}
        <polygon points={leftFace}  fill="url(#ec-left)" />
        {/* Right face */}
        <polygon points={rightFace} fill="url(#ec-right)" />

        {/* Edge lines for crispness */}
        <polyline
          points={`${lx},${mid} ${cx},${top} ${rx},${mid} ${cx},${mid + (mid - top)} ${lx},${mid}`}
          fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.7" strokeLinejoin="round"
        />
        <line x1={cx} y1={mid + (mid - top)} x2={cx} y2={bot}
          stroke="rgba(255,255,255,0.18)" strokeWidth="0.7" />
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
