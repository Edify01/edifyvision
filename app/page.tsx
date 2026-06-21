"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle, Cpu, Network, Layers, BarChart3, Star } from "lucide-react";

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
const services = [
  {
    icon: Cpu,
    color: "#EFF8FF", iconColor: "#1570EF",
    title: "AI Integration",
    desc: "We design and implement custom AI solutions — automating workflows, surfacing insights, and embedding intelligence directly into your existing systems and processes.",
  },
  {
    icon: Network,
    color: "#F5F3FF", iconColor: "#6172F3",
    title: "Systems Consulting",
    desc: "End-to-end systems architecture for growing organisations. We map, optimise, and rebuild the operational infrastructure that your business runs on — eliminating friction at every layer.",
  },
  {
    icon: Layers,
    color: "#ECFDF3", iconColor: "#039855",
    title: "Process Automation",
    desc: "Identify the manual, repetitive, and error-prone. We replace it with intelligent automation that scales with your team — freeing your people to focus on high-value work.",
  },
  {
    icon: BarChart3,
    color: "#FEF6FB", iconColor: "#DD2590",
    title: "Strategic Advisory",
    desc: "High-level consulting on technology adoption, digital transformation roadmaps, and the strategic decisions that define how your organisation operates in an AI-first world.",
  },
];

const whyEdify = [
  "AI solutions built for your specific systems — not off-the-shelf",
  "End-to-end ownership from architecture through deployment",
  "Measurable outcomes tied to real business metrics",
  "Senior-led from day one — no juniors left to deliver",
];

const testimonials = [
  {
    quote: "Edify mapped our entire ops stack, identified the bottlenecks we'd been ignoring for two years, and had automations running within six weeks. The ROI was immediate.",
    name: "Chief Operations Officer", role: "Series B Tech Company",
  },
  {
    quote: "The AI integration work completely changed how our team operates. What used to take days now happens in minutes — and the system just keeps learning.",
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
        paddingTop: 140, paddingBottom: 100,
        paddingLeft: 24, paddingRight: 24,
        position: "relative", overflow: "hidden",
        background: "#0f0c29",
      }}>
        {/* ── Animated gradient behind everything ── */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          background: "linear-gradient(135deg, #1a0533 0%, #0f0c29 25%, #0d1b6e 50%, #1a0533 75%, #2d0b5e 100%)",
          backgroundSize: "400% 400%",
          animation: "gradientFlow 14s ease infinite",
        }} />
        {/* Soft radial light overlay — gives depth */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 60% at 60% 50%, rgba(99,130,255,0.13) 0%, transparent 70%)",
          animation: "orbDrift3 18s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
          background: "radial-gradient(ellipse 50% 40% at 20% 70%, rgba(180,80,255,0.10) 0%, transparent 65%)",
          animation: "orbDrift1 22s ease-in-out infinite",
        }} />

        {/* ── Topographic SVG ── */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
          opacity: 0.13,
          animation: "orbDrift2 40s ease-in-out infinite",
        }}>
          <svg width="100%" height="100%" viewBox="0 0 900 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="rgba(200,180,255,0.9)" strokeWidth="1.1" strokeLinejoin="round">
              {/* Large outer rings — centre cluster */}
              <path d="M450,250 Q510,180 570,210 Q640,245 620,310 Q600,375 530,390 Q450,405 400,360 Q340,310 360,250 Q380,185 450,250Z"/>
              <path d="M450,250 Q530,155 610,195 Q690,240 665,330 Q640,415 550,435 Q445,455 380,395 Q305,325 330,240 Q358,150 450,250Z"/>
              <path d="M450,250 Q550,130 645,180 Q745,235 715,348 Q685,455 570,480 Q440,505 360,428 Q268,338 300,228 Q336,112 450,250Z"/>
              {/* Inner detail — left pocket */}
              <path d="M240,310 Q260,270 305,278 Q350,290 345,330 Q340,368 300,375 Q255,378 240,350 Q228,328 240,310Z"/>
              <path d="M235,308 Q252,255 310,265 Q368,278 362,335 Q356,390 305,398 Q245,400 230,360 Q218,325 235,308Z"/>
              <path d="M228,306 Q243,238 315,250 Q388,264 380,342 Q374,415 308,425 Q232,428 217,370 Q206,320 228,306Z"/>
              {/* Tight centre spiral */}
              <path d="M450,250 Q470,230 490,242 Q508,258 498,278 Q485,295 465,290 Q445,282 443,264 Q442,252 450,250Z"/>
              <path d="M450,250 Q480,218 510,235 Q538,255 525,290 Q510,320 480,320 Q448,317 437,290 Q428,264 450,250Z"/>
              {/* Upper right cluster */}
              <path d="M660,130 Q690,110 718,122 Q742,137 738,163 Q732,188 706,194 Q677,196 662,175 Q648,153 660,130Z"/>
              <path d="M657,128 Q693,100 727,118 Q760,138 754,172 Q747,205 712,212 Q672,215 655,183 Q640,152 657,128Z"/>
              {/* Lower right wandering line */}
              <path d="M600,420 Q660,400 700,415 Q745,432 740,465 Q730,490 695,492 Q655,490 630,468 Q605,445 600,420Z"/>
              <path d="M595,418 Q668,390 715,410 Q762,432 756,472 Q748,500 703,503 Q650,503 620,473 Q592,444 595,418Z"/>
              {/* Far left loose ring */}
              <path d="M90,200 Q120,160 165,175 Q205,192 200,235 Q194,275 158,280 Q115,282 97,250 Q82,220 90,200Z"/>
              <path d="M85,196 Q120,145 173,164 Q222,185 216,240 Q209,293 165,300 Q108,303 88,258 Q72,216 85,196Z"/>
              {/* Thin wandering path across midfield */}
              <path d="M130,350 Q200,310 280,330 Q370,355 400,410 Q425,455 490,460 Q560,462 620,430"/>
              <path d="M125,358 Q195,312 285,336 Q380,364 410,425 Q438,468 505,472 Q580,474 638,440"/>
              {/* Top left whisp */}
              <path d="M60,80 Q110,50 160,68 Q205,85 200,125 Q194,162 155,168 Q110,170 88,140 Q68,112 60,80Z"/>
              <path d="M55,76 Q112,38 168,60 Q220,82 213,130 Q206,176 158,184 Q102,187 78,148 Q58,115 55,76Z"/>
            </g>
          </svg>
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 10 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}
            className="hero-grid">
            {/* Left — copy */}
            <div className="animate-fade-in-up">
              <div style={{ marginBottom: 24 }}>
                <Badge>AI Integration &amp; Systems Consulting</Badge>
              </div>
              <h1 style={{
                fontFamily: "var(--font-ibm-plex-serif)",
                fontSize: "clamp(2.6rem, 4vw, 3.75rem)",
                fontWeight: 600, lineHeight: 1.12,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                marginBottom: 24,
              }}>
                Build smarter systems.{" "}
                <span style={{
                  fontStyle: "italic",
                  background: "linear-gradient(90deg, #a78bfa 0%, #818cf8 50%, #60a5fa 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>Operate at a higher level.</span>
              </h1>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.72)", lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
                Edify helps ambitious organisations integrate AI, modernise their systems, and unlock the operational potential that most businesses leave on the table.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <a href="mailto:info@edifyvision.com" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "linear-gradient(90deg,#6366f1,#3b82f6)",
                  color: "#fff",
                  padding: "14px 28px", borderRadius: 12,
                  fontWeight: 600, fontSize: 15, textDecoration: "none",
                  transition: "opacity 0.3s, box-shadow 0.3s",
                  boxShadow: "0 4px 20px rgba(99,102,241,0.4)",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                >
                  Book a Free Consultation
                  <ArrowRight size={16} />
                </a>
                <Link href="/about" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.88)",
                  padding: "14px 28px", borderRadius: 12,
                  fontWeight: 600, fontSize: 15, textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                }}>
                  Our Story
                </Link>
              </div>
              <div style={{ display: "flex", gap: 24, marginTop: 40, flexWrap: "wrap" }}>
                {["Custom AI — not off-the-shelf", "End-to-end implementation", "Measurable outcomes only"].map(t => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle size={15} style={{ color: "#a78bfa", flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — headshot card only, no floating badges */}
            <div className="animate-fade-in-up hero-cards" style={{ position: "relative" }}>
              <div style={{
                borderRadius: 28, overflow: "hidden",
                boxShadow: "0px 24px 60px -12px rgba(99,102,241,0.35), 0px 4px 16px rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(4px)",
                position: "relative", maxWidth: 400, margin: "0 auto",
              }}>
                {/* Gradient accent bar */}
                <div style={{ height: 4, background: "linear-gradient(90deg,#a78bfa 0%,#6366f1 50%,#3b82f6 100%)" }} />
                {/* Headshot */}
                <div style={{ width: "100%", aspectRatio: "4/5", position: "relative", background: "linear-gradient(160deg,#1e1b4b 0%,#0f172a 100%)" }}>
                  <Image
                    src="/headshot-placeholder.svg"
                    alt="Founder headshot"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    priority
                  />
                </div>
                {/* Name strip */}
                <div style={{ padding: "20px 24px 22px", background: "rgba(15,12,41,0.9)", backdropFilter: "blur(8px)" }}>
                  <p style={{ fontFamily: "var(--font-ibm-plex-serif)", fontSize: 18, fontWeight: 600, color: "#fff", marginBottom: 2 }}>
                    Your Name
                  </p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Founder &amp; Principal Advisor</p>
                </div>
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
              AI &amp; systems expertise across{" "}
              <span className="gradient-text" style={{ fontStyle: "italic" }}>every layer</span>
            </h2>
            <p style={{ fontSize: 17, color: "#667085", maxWidth: 520, margin: "0 auto" }}>
              From intelligent automation to full systems overhauls — we work across the entire operational stack to make your organisation run smarter.
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
              We build it,{" "}
              <span className="gradient-text" style={{ fontStyle: "italic" }}>then we make it work</span>
            </h2>
            <p style={{ fontSize: 16, color: "#475467", lineHeight: 1.8, marginBottom: 32, maxWidth: 440 }}>
              Most technology engagements end at delivery. Ours don&apos;t. We stay embedded through adoption — because an AI system no one uses is just expensive software collecting dust.
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
              { step: "01", title: "Assess", desc: "We audit your current systems, workflows, and data infrastructure to find exactly where AI and automation will create the most impact." },
              { step: "02", title: "Architect", desc: "We design the solution — selecting the right tools, integrations, and models tailored specifically to your business and your team." },
              { step: "03", title: "Build", desc: "End-to-end implementation: we build, connect, test, and refine until every component performs as intended." },
              { step: "04", title: "Embed", desc: "We train your team, monitor performance, and stay on hand — ensuring the system gets adopted and keeps improving over time." },
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
              Meet <em>EdifySuite</em> — the platform built for this
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.82)", lineHeight: 1.75 }}>
              EdifySuite is the operational platform built to extend the work we do together — bringing your AI integrations, workflows, and performance data into one unified environment your team will actually use.
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
            <span className="gradient-text" style={{ fontStyle: "italic" }}>that actually works</span>
          </h2>
          <p style={{ fontSize: 17, color: "#667085", lineHeight: 1.75, marginBottom: 36 }}>
            Whether you&apos;re exploring AI for the first time or rebuilding systems from the ground up — it starts with a conversation.
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
