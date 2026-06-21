"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle, TrendingUp, Users, Target, BarChart3, Star } from "lucide-react";

/* ── tiny reusable primitives ─────────────────────────────────────────── */
const Badge = ({ children }: { children: React.ReactNode }) => (
  <span style={{
    display: "inline-flex", alignItems: "center",
    background: "#EFF8FF", color: "#1570EF",
    border: "1px solid #D1E9FF",
    borderRadius: 999, padding: "4px 14px",
    fontSize: 13, fontWeight: 500,
  }}>{children}</span>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: 13, fontWeight: 600, color: "#1570EF", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>
    {children}
  </p>
);

/* ── data ─────────────────────────────────────────────────────────────── */
const stats = [
  { value: "150+", label: "Client Engagements" },
  { value: "94%",  label: "Retention Rate" },
  { value: "12",   label: "Industries Served" },
  { value: "3.2×", label: "Avg. ROI" },
];

const services = [
  {
    icon: Target,
    color: "#EFF8FF", iconColor: "#1570EF",
    title: "Strategic Advisory",
    desc: "Market positioning, competitive analysis, and long-range roadmaps that give your organisation a decisive edge.",
  },
  {
    icon: TrendingUp,
    color: "#ECFDF3", iconColor: "#039855",
    title: "Growth Architecture",
    desc: "Revenue model optimisation, scalable systems design, and channel strategies built for compounding growth.",
  },
  {
    icon: Users,
    color: "#F5F3FF", iconColor: "#6172F3",
    title: "Leadership Development",
    desc: "Executive coaching, team alignment programmes, and succession planning that builds organisations that outlast their founders.",
  },
  {
    icon: BarChart3,
    color: "#FEF6FB", iconColor: "#DD2590",
    title: "Operational Excellence",
    desc: "Process redesign, KPI frameworks, and change management that drive measurable efficiency across every function.",
  },
];

const whyEdify = [
  "Outcomes-first engagement model — no billable-hour bloat",
  "Embedded advisory, not external observation",
  "Evidence-based strategy grounded in data, not assumption",
  "Senior-led from day one — no juniors left to deliver",
];

const testimonials = [
  {
    quote: "Edify didn't just give us a strategy — they stayed until it was working. The clarity they brought to our leadership team was transformative.",
    name: "Chief Executive", role: "Series B SaaS Company",
  },
  {
    quote: "In six months we restructured our go-to-market, doubled pipeline velocity, and finally had a roadmap the entire board could align behind.",
    name: "Founder & CEO", role: "Professional Services Firm",
  },
];

/* ── page ─────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(120deg,#f0f5ff 0%,#e0e7ff 100%)",
        paddingTop: 140, paddingBottom: 100,
        paddingLeft: 24, paddingRight: 24,
        position: "relative", overflow: "hidden",
      }}>
        {/* ── Animated background layer ── */}
        {/* Slow-drifting gradient orbs */}
        <div style={{
          position: "absolute", top: "-15%", left: "-8%",
          width: 640, height: 640, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79,140,255,0.18) 0%, transparent 68%)",
          animation: "orbDrift1 18s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-20%", right: "-10%",
          width: 720, height: 720, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(1,121,254,0.13) 0%, transparent 65%)",
          animation: "orbDrift2 22s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "35%", left: "55%",
          width: 380, height: 380, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(110,170,255,0.10) 0%, transparent 70%)",
          animation: "orbDrift3 14s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "10%", right: "20%",
          width: 260, height: 260, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(1,121,254,0.09) 0%, transparent 70%)",
          animation: "orbDrift4 16s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        {/* Animated fine grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          opacity: 0.035,
          backgroundImage: "linear-gradient(#1570EF 1px, transparent 1px), linear-gradient(90deg,#1570EF 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          animation: "gridShift 8s linear infinite",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}
            className="hero-grid">
            {/* Left — copy */}
            <div className="animate-fade-in-up">
              <div style={{ marginBottom: 24 }}>
                <Badge>Strategic Business Advisory</Badge>
              </div>
              <h1 style={{
                fontFamily: "var(--font-ibm-plex-serif)",
                fontSize: "clamp(2.6rem, 4vw, 3.75rem)",
                fontWeight: 600, lineHeight: 1.12,
                color: "#101828",
                letterSpacing: "-0.02em",
                marginBottom: 24,
              }}>
                Strategy that turns{" "}
                <span className="gradient-text" style={{ fontStyle: "italic" }}>vision into growth</span>
              </h1>
              <p style={{ fontSize: 18, color: "#475467", lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
                We partner with ambitious leaders to define clear strategy, build high-performance operations, and create organisations built to endure.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <a href="mailto:info@edifyvision.com" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#1570EF", color: "#fff",
                  padding: "14px 28px", borderRadius: 12,
                  fontWeight: 600, fontSize: 15, textDecoration: "none",
                  transition: "background 0.3s, box-shadow 0.3s",
                  boxShadow: "0 1px 2px rgba(16,24,40,0.05)",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#175CD3"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#1570EF"; }}
                >
                  Book a Free Consultation
                  <ArrowRight size={16} />
                </a>
                <Link href="/about" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.82)", color: "#344054",
                  padding: "14px 28px", borderRadius: 12,
                  fontWeight: 600, fontSize: 15, textDecoration: "none",
                  border: "1px solid #EAECF0",
                  boxShadow: "0 1px 2px rgba(16,24,40,0.05)",
                }}>
                  Our Story
                </Link>
              </div>
              <div style={{ display: "flex", gap: 24, marginTop: 40, flexWrap: "wrap" }}>
                {["No long-term lock-in", "Senior advisors only", "Results-first model"].map(t => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle size={15} style={{ color: "#039855", flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "#667085", fontWeight: 500 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — headshot card */}
            <div className="animate-fade-in-up hero-cards" style={{ position: "relative" }}>
              {/* Card frame */}
              <div style={{
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0px 12px 40px -8px rgba(21,112,239,0.22), 0px 4px 12px rgba(16,24,40,0.08)",
                border: "1px solid rgba(255,255,255,0.85)",
                background: "#fff",
                position: "relative",
                maxWidth: 400,
                margin: "0 auto",
              }}>
                {/* Blue accent bar at top */}
                <div style={{
                  height: 4,
                  background: "linear-gradient(90deg,#0179FE 0%,#4893FF 100%)",
                }} />
                {/* Headshot image */}
                <div style={{ width: "100%", aspectRatio: "4/5", position: "relative", background: "linear-gradient(160deg,#e0e7ff 0%,#c7d7f5 100%)" }}>
                  <Image
                    src="/headshot-placeholder.svg"
                    alt="Founder headshot"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    priority
                  />
                </div>
                {/* Name strip */}
                <div style={{ padding: "20px 24px 22px", background: "#fff" }}>
                  <p style={{ fontFamily: "var(--font-ibm-plex-serif)", fontSize: 18, fontWeight: 600, color: "#101828", marginBottom: 2 }}>
                    Your Name
                  </p>
                  <p style={{ fontSize: 13, color: "#667085", fontWeight: 500 }}>Founder &amp; Principal Advisor</p>
                </div>
              </div>

              {/* Floating "accepting clients" badge */}
              <div style={{
                position: "absolute", bottom: 24, right: -12,
                background: "#fff", borderRadius: 14,
                border: "1px solid #D1E9FF",
                padding: "10px 16px",
                boxShadow: "0 4px 16px rgba(21,112,239,0.18)",
                display: "flex", alignItems: "center", gap: 8,
                zIndex: 2,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#039855" }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: "#344054" }}>Accepting new clients</span>
              </div>

              {/* Floating stat pill — top left */}
              <div style={{
                position: "absolute", top: 32, left: -18,
                background: "#fff", borderRadius: 14,
                border: "1px solid #EAECF0",
                padding: "10px 16px",
                boxShadow: "0 4px 16px rgba(16,24,40,0.10)",
                display: "flex", alignItems: "center", gap: 10,
                zIndex: 2,
              }}>
                <span style={{
                  fontFamily: "var(--font-ibm-plex-serif)", fontWeight: 600, fontSize: 22,
                  background: "linear-gradient(90deg,#0179FE,#4893FF)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>94%</span>
                <span style={{ fontSize: 12, color: "#667085", fontWeight: 500, lineHeight: 1.4 }}>Client<br/>Retention</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section id="services" style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionLabel>What We Do</SectionLabel>
            <h2 style={{
              fontFamily: "var(--font-ibm-plex-serif)",
              fontSize: "clamp(2rem, 3vw, 2.75rem)",
              fontWeight: 600, color: "#101828",
              letterSpacing: "-0.02em", lineHeight: 1.2,
              marginBottom: 16,
            }}>
              Advisory across the full{" "}
              <span className="gradient-text" style={{ fontStyle: "italic" }}>strategic spectrum</span>
            </h2>
            <p style={{ fontSize: 17, color: "#667085", maxWidth: 520, margin: "0 auto" }}>
              From high-level vision to operational detail — we cover every dimension of organisational performance.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 24 }}>
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} style={{
                  background: "#fff", borderRadius: 16,
                  border: "1px solid #EAECF0", padding: "32px 28px",
                  boxShadow: "0px 1px 3px rgba(16,24,40,0.10), 0px 1px 2px rgba(16,24,40,0.06)",
                  transition: "box-shadow 0.3s, transform 0.3s",
                  cursor: "default",
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "0 8px 24px rgba(21,112,239,0.12)"; el.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "0px 1px 3px rgba(16,24,40,0.10)"; el.style.transform = "none"; }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: s.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20,
                  }}>
                    <Icon size={20} color={s.iconColor} strokeWidth={1.75} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-ibm-plex-serif)", fontSize: 19, fontWeight: 600, color: "#101828", marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "#667085", lineHeight: 1.75 }}>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY EDIFY — split ─────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(120deg,#f8fafc 0%,#e0e7ff 100%)", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
          className="split-grid">
          {/* Left */}
          <div>
            <SectionLabel>Why Edify</SectionLabel>
            <h2 style={{
              fontFamily: "var(--font-ibm-plex-serif)",
              fontSize: "clamp(2rem,3vw,2.75rem)",
              fontWeight: 600, color: "#101828",
              letterSpacing: "-0.02em", lineHeight: 1.2,
              marginBottom: 20,
            }}>
              We stay until<br />
              <span className="gradient-text" style={{ fontStyle: "italic" }}>the work is real</span>
            </h2>
            <p style={{ fontSize: 16, color: "#475467", lineHeight: 1.8, marginBottom: 32, maxWidth: 440 }}>
              Most consulting relationships end at the deck. Ours begin there. We embed alongside your team through implementation — because strategy only has value when it executes.
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {whyEdify.map(item => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <CheckCircle size={18} style={{ color: "#1570EF", marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: 15, color: "#344054", lineHeight: 1.65 }}>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 36 }}>
              <Link href="/about" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                color: "#1570EF", fontWeight: 600, fontSize: 15,
                textDecoration: "none",
              }}>
                Read our philosophy <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right — process steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { step: "01", title: "Discover", desc: "Deep diagnostic across strategy, operations, culture, and market position." },
              { step: "02", title: "Define", desc: "Crystallise priorities with measurable outcomes and a shared success framework." },
              { step: "03", title: "Design", desc: "Build the roadmap: sequenced initiatives, model shifts, capability building." },
              { step: "04", title: "Deliver", desc: "Embedded advisory through execution — ensuring momentum never stalls." },
            ].map((p) => (
              <div key={p.step} style={{
                background: "#fff", borderRadius: 14,
                border: "1px solid #EAECF0", padding: "20px 24px",
                display: "flex", gap: 20, alignItems: "flex-start",
                boxShadow: "0px 1px 2px rgba(16,24,40,0.06)",
                transition: "box-shadow 0.3s",
              }}>
                <span style={{
                  minWidth: 36, height: 36, borderRadius: 10,
                  background: "linear-gradient(90deg,#0179FE,#4893FF)",
                  color: "#fff", fontWeight: 700, fontSize: 12,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>{p.step}</span>
                <div>
                  <p style={{ fontWeight: 600, fontSize: 15, color: "#101828", marginBottom: 4 }}>{p.title}</p>
                  <p style={{ fontSize: 13, color: "#667085", lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <SectionLabel>Client Results</SectionLabel>
            <h2 style={{
              fontFamily: "var(--font-ibm-plex-serif)",
              fontSize: "clamp(1.8rem,3vw,2.5rem)",
              fontWeight: 600, color: "#101828",
              letterSpacing: "-0.02em",
            }}>
              Trusted by leaders who mean business
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24 }}>
            {testimonials.map((t) => (
              <div key={t.name} style={{
                background: "#fff", borderRadius: 20,
                border: "1px solid #EAECF0", padding: "36px 32px",
                boxShadow: "0px 1px 3px rgba(16,24,40,0.10), 0px 1px 2px rgba(16,24,40,0.06)",
              }}>
                <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#F79009" color="#F79009" />
                  ))}
                </div>
                <p style={{ fontSize: 16, color: "#344054", lineHeight: 1.8, fontStyle: "italic", marginBottom: 24, fontFamily: "var(--font-ibm-plex-serif)", fontWeight: 400 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p style={{ fontWeight: 600, fontSize: 14, color: "#101828" }}>{t.name}</p>
                  <p style={{ fontSize: 13, color: "#667085" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDIFYSUITE BAND ───────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(90deg,#0179FE 0%,#4893FF 100%)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 32 }}>
          <div style={{ maxWidth: 560 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
              The Edify Ecosystem
            </p>
            <h2 style={{
              fontFamily: "var(--font-ibm-plex-serif)",
              fontSize: "clamp(1.6rem,3vw,2.25rem)",
              fontWeight: 600, color: "#fff",
              letterSpacing: "-0.01em", lineHeight: 1.3, marginBottom: 12,
            }}>
              Meet <em>EdifySuite</em> — strategy in action
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.82)", lineHeight: 1.75 }}>
              The purpose-built operational platform for organisations in the Edify ecosystem. Strategy, performance, and accountability — unified.
            </p>
          </div>
          <a href="https://edifysuite.com" target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#fff", color: "#1570EF",
              padding: "16px 32px", borderRadius: 14,
              fontWeight: 700, fontSize: 15, textDecoration: "none",
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              transition: "box-shadow 0.3s, transform 0.3s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-1px)"; el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.18)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "none"; el.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)"; }}
          >
            Explore EdifySuite
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section style={{ background: "#f8fafc", padding: "96px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <SectionLabel>Ready to Start?</SectionLabel>
          <h2 style={{
            fontFamily: "var(--font-ibm-plex-serif)",
            fontSize: "clamp(2rem,4vw,3rem)",
            fontWeight: 600, color: "#101828",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            marginBottom: 20,
          }}>
            Let&apos;s build something{" "}
            <span className="gradient-text" style={{ fontStyle: "italic" }}>exceptional</span>
          </h2>
          <p style={{ fontSize: 17, color: "#667085", lineHeight: 1.75, marginBottom: 36 }}>
            Every engagement starts with a conversation. Tell us where you are — we&apos;ll map where you&apos;re going.
          </p>
          <a href="mailto:info@edifyvision.com" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#1570EF", color: "#fff",
            padding: "16px 36px", borderRadius: 14,
            fontWeight: 700, fontSize: 16, textDecoration: "none",
            boxShadow: "0 4px 12px rgba(21,112,239,0.3)",
            transition: "background 0.3s, box-shadow 0.3s",
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#175CD3"; el.style.boxShadow = "0 8px 24px rgba(21,112,239,0.4)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#1570EF"; el.style.boxShadow = "0 4px 12px rgba(21,112,239,0.3)"; }}
          >
            Book a Free Consultation
            <ArrowRight size={16} />
          </a>
          <p style={{ fontSize: 13, color: "#98A2B3", marginTop: 16 }}>
            No commitment. No hard sell. Just a conversation.
          </p>
        </div>
      </section>

      <Footer />

      {/* responsive grid breakpoints */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-cards { display: none !important; }
          .split-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}
