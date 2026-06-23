"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
];

const buildingBlocks = [
  {
    icon: "🎯",
    title: "Strategic AI Integration",
    desc: "We don't just implement tools — we architect intelligent systems that align with your business goals and scale as you grow.",
  },
  {
    icon: "⚡",
    title: "Operational Excellence",
    desc: "From workflow automation to data optimization, we eliminate friction and build systems that make your team more effective.",
  },
  {
    icon: "🔄",
    title: "Continuous Improvement",
    desc: "Technology evolves fast. We build adaptable systems and stay embedded to ensure you're always operating at the cutting edge.",
  },
  {
    icon: "🤝",
    title: "Partnership Approach",
    desc: "Your success is our success. We work alongside your team, not above them, transferring knowledge and building capability.",
  },
];

/* ── page ─────────────────────────────────────────────────────────────── */
export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <Navbar onOpenContactModal={() => setIsModalOpen(true)} />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section style={{
        paddingTop: 140, paddingBottom: 100,
        paddingLeft: 24, paddingRight: 24,
        position: "relative", overflow: "hidden",
        background: "#e8eef9",
      }}>
        {/* ── Animated gradient — lighter, more vibrant colors ── */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          background: "linear-gradient(135deg, #e0e7ff 0%, #dbeafe 15%, #e0e7ff 30%, #ddd6fe 45%, #e0e7ff 60%, #dbeafe 75%, #e0e7ff 100%)",
          backgroundSize: "400% 400%",
          animation: "gradientFlow 8s ease infinite",
        }} />

        {/* Soft radial highlights — brighter, more visible */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 60% at 55% 45%, rgba(147,197,253,0.35) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
          background: "radial-gradient(ellipse 50% 45% at 20% 70%, rgba(167,139,250,0.25) 0%, transparent 60%)",
        }} />

        {/* ── Custom Topographic Background ── */}
        <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}>
          <Image src="/topographic-bg.svg" alt="" fill style={{ objectFit: "cover", opacity: 0.25 }} />
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
                color: "#0f172a",
                letterSpacing: "-0.02em",
                marginBottom: 24,
              }}>
                Build smarter systems.{" "}
                <span style={{
                  fontStyle: "italic",
                  background: "linear-gradient(90deg, #6366f1 0%, #3b82f6 50%, #2563eb 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>Operate at a higher level.</span>
              </h1>
              <p style={{ fontSize: 18, color: "#475467", lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
                Edify helps ambitious organisations integrate AI, modernise their systems, and unlock the operational potential that most businesses leave on the table.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <button onClick={() => setIsModalOpen(true)} style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "linear-gradient(90deg,#6366f1,#3b82f6)",
                  color: "#fff",
                  padding: "14px 28px", borderRadius: 12,
                  fontWeight: 600, fontSize: 15, textDecoration: "none",
                  transition: "opacity 0.3s, box-shadow 0.3s",
                  boxShadow: "0 4px 20px rgba(99,102,241,0.4)",
                  border: "none",
                  cursor: "pointer",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                >
                  Book a Free Consultation
                  <ArrowRight size={16} />
                </button>
                <Link href="/about" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(15,23,42,0.08)", color: "#1e293b",
                  padding: "14px 28px", borderRadius: 12,
                  fontWeight: 600, fontSize: 15, textDecoration: "none",
                  border: "1px solid rgba(15,23,42,0.12)",
                  backdropFilter: "blur(8px)",
                }}>
                  Our Story
                </Link>
              </div>
              <div style={{ display: "flex", gap: 24, marginTop: 40, flexWrap: "wrap" }}>
                {["Custom AI — not off-the-shelf", "End-to-end implementation", "Measurable outcomes only"].map(t => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle size={15} style={{ color: "#6366f1", flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "#64748b", fontWeight: 500 }}>{t}</span>
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
                <div style={{ 
                  width: "100%", 
                  aspectRatio: "1", 
                  position: "relative", 
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(160deg,#1e1b4b 0%,#0f172a 100%)",
                  padding: "40px"
                }}>
                  <Image
                    src="/headshot.png"
                    alt="Founder headshot"
                    width={320}
                    height={320}
                    style={{ 
                      width: "100%",
                      height: "auto",
                      maxWidth: "100%"
                    }}
                    priority
                  />
                </div>
                {/* Name strip */}
                <div style={{ padding: "20px 24px 22px", background: "rgba(15,12,41,0.9)", backdropFilter: "blur(8px)" }}>
                  <p style={{ fontFamily: "var(--font-ibm-plex-serif)", fontSize: 18, fontWeight: 600, color: "#fff", marginBottom: 2 }}>
                    Angel Velazquez
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

      {/* ── OUR APPROACH ──────────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <SectionLabel>Our Approach</SectionLabel>
            <h2 style={{
              fontFamily: "var(--font-ibm-plex-serif)",
              fontSize: "clamp(1.8rem,3vw,2.5rem)",
              fontWeight: 600, color: "#101828",
              letterSpacing: "-0.02em",
            }}>
              How we build systems that actually work
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
            {buildingBlocks.map((block) => (
              <div key={block.title} style={{
                background: "#fff", borderRadius: 20,
                border: "1px solid #EAECF0", padding: "36px 32px",
                boxShadow: "0px 1px 3px rgba(16,24,40,0.10), 0px 1px 2px rgba(16,24,40,0.06)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 12px 32px rgba(21,112,239,0.12)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "none"; el.style.boxShadow = "0px 1px 3px rgba(16,24,40,0.10)"; }}
              >
                <div style={{ fontSize: 42, marginBottom: 16 }}>{block.icon}</div>
                <h3 style={{ fontFamily: "var(--font-ibm-plex-serif)", fontSize: 19, fontWeight: 600, color: "#101828", marginBottom: 12 }}>{block.title}</h3>
                <p style={{ fontSize: 15, color: "#667085", lineHeight: 1.75 }}>{block.desc}</p>
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
              Meet <em>EdifySuite</em> — your operational command center
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.82)", lineHeight: 1.75 }}>
              Project management software built for modern businesses. Track sales pipelines with an integrated CRM, sync seamlessly with Square for real-time transaction data, and connect your Google Calendar to never miss a beat. EdifySuite brings your entire operation into one unified platform.
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
          <button onClick={() => setIsModalOpen(true)} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#1570EF", color: "#fff",
            padding: "16px 36px", borderRadius: 14,
            fontWeight: 700, fontSize: 16, textDecoration: "none",
            boxShadow: "0 4px 12px rgba(21,112,239,0.3)",
            transition: "background 0.3s, box-shadow 0.3s",
            border: "none",
            cursor: "pointer",
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#175CD3"; el.style.boxShadow = "0 8px 24px rgba(21,112,239,0.4)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#1570EF"; el.style.boxShadow = "0 4px 12px rgba(21,112,239,0.3)"; }}
          >
            Book a Free Consultation
            <ArrowRight size={16} />
          </button>
          <p style={{ fontSize: 13, color: "#98A2B3", marginTop: 16 }}>
            No commitment. No hard sell. Just a conversation.
          </p>
        </div>
      </section>

      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

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
