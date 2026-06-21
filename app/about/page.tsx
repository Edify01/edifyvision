"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle, Lightbulb, Eye, Compass, Shield } from "lucide-react";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: 13, fontWeight: 600, color: "#1570EF", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>
    {children}
  </p>
);

const values = [
  { icon: Lightbulb, color: "#EFF8FF", iconColor: "#1570EF", title: "Intellectual Rigour", desc: "Every recommendation is grounded in evidence and critical thinking — never intuition alone." },
  { icon: Eye, color: "#ECFDF3", iconColor: "#039855", title: "Radical Clarity", desc: "We strip complexity down to the insight that is simple, actionable, and immediately useful." },
  { icon: Compass, color: "#F5F3FF", iconColor: "#6172F3", title: "Purposeful Direction", desc: "We don't chase trends. We help organisations define their true north and build toward it relentlessly." },
  { icon: Shield, color: "#FEF6FB", iconColor: "#DD2590", title: "Uncompromising Integrity", desc: "Our counsel is honest, even when uncomfortable. We would rather lose a client than mislead one." },
];

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(120deg,#101828 0%,#1e3a5f 100%)",
        paddingTop: 140, paddingBottom: 96,
        paddingLeft: 24, paddingRight: 24,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -100, right: -100, width: 600, height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(79,140,255,0.1) 0%,transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}
          className="hero-grid">
          <div>
            <SectionLabel>About Edify</SectionLabel>
            <h1 style={{
              fontFamily: "var(--font-ibm-plex-serif)",
              fontSize: "clamp(2.4rem,4vw,3.5rem)",
              fontWeight: 600, color: "#f3f4f6",
              letterSpacing: "-0.02em", lineHeight: 1.12,
              marginBottom: 24,
            }}>
              Built on the belief that{" "}
              <span style={{
                background: "linear-gradient(90deg,#60a5fa,#93c5fd)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                fontStyle: "italic",
              }}>
                strategy is everything
              </span>
            </h1>
            <p style={{ fontSize: 17, color: "rgba(243,244,246,0.72)", lineHeight: 1.8, maxWidth: 480 }}>
              Edify Consulting was founded with one conviction: the gap between where organisations are and where they could be is almost always a strategic one.
            </p>
          </div>
          {/* Right — headshot instead of stat cards */}
          <div style={{ position: "relative" }}>
            <div style={{
              borderRadius: 28, overflow: "hidden",
              boxShadow: "0px 24px 60px -12px rgba(59,130,246,0.35), 0px 4px 16px rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(4px)",
              position: "relative", maxWidth: 400, margin: "0 auto",
            }}>
              {/* Gradient accent bar */}
              <div style={{ height: 4, background: "linear-gradient(90deg,#60a5fa 0%,#3b82f6 50%,#2563eb 100%)" }} />
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
      </section>

      {/* ── STORY ─────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "280px 1fr", gap: 80, alignItems: "start" }}
          className="story-grid">
          {/* Sticky label */}
          <div style={{ position: "sticky", top: 100 }}>
            <SectionLabel>Our Philosophy</SectionLabel>
            <div style={{ width: 40, height: 3, background: "linear-gradient(90deg,#0179FE,#4893FF)", borderRadius: 4, marginBottom: 20 }} />
            <p style={{ fontSize: 14, color: "#667085", lineHeight: 1.75 }}>
              The word <em>edify</em> means to instruct and improve — to lift another through knowledge and deliberate guidance.
            </p>
          </div>
          {/* Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-ibm-plex-serif)", fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 600, color: "#101828", letterSpacing: "-0.02em", marginBottom: 16 }}>
                The word itself is a promise
              </h2>
              <p style={{ fontSize: 16, color: "#475467", lineHeight: 1.85 }}>
                When we chose <em>Edify</em> as our name, we were making a commitment: every engagement would leave an organisation genuinely better — not just differently busy. Too many consulting relationships produce volumes of work that gather dust.
              </p>
            </div>
            <div style={{ width: "100%", height: 1, background: "#EAECF0" }} />
            <div>
              <h2 style={{ fontFamily: "var(--font-ibm-plex-serif)", fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 600, color: "#101828", letterSpacing: "-0.02em", marginBottom: 16 }}>
                Who we serve
              </h2>
              <p style={{ fontSize: 16, color: "#475467", lineHeight: 1.85, marginBottom: 20 }}>
                We partner with small to medium-sized businesses ready to capitalize on the AI revolution. If you're a forward-thinking founder or leadership team looking to modernize operations, automate intelligently, and build competitive advantages through technology — this is your moment.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {["Growing SMBs ready to scale with AI", "Forward-thinking founders embracing automation", "Teams seeking operational transformation"].map(i => (
                  <li key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <CheckCircle size={15} style={{ color: "#039855", flexShrink: 0 }} />
                    <span style={{ fontSize: 15, color: "#344054" }}>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button onClick={() => setIsModalOpen(true)} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#1570EF", color: "#fff",
                padding: "14px 28px", borderRadius: 12,
                fontWeight: 600, fontSize: 15, textDecoration: "none",
                border: "none",
                cursor: "pointer",
              }}>
                Work With Us <ArrowRight size={15} />
              </button>
              <Link href="/#services" style={{
                display: "inline-flex", alignItems: "center",
                background: "#fff", color: "#344054",
                padding: "14px 28px", borderRadius: 12,
                fontWeight: 600, fontSize: 15, textDecoration: "none",
                border: "1px solid #EAECF0",
              }}>
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(120deg,#f8fafc 0%,#e0e7ff 100%)", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <SectionLabel>Core Values</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-ibm-plex-serif)", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 600, color: "#101828", letterSpacing: "-0.02em" }}>
              What we stand for
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 24 }}>
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} style={{
                  background: "#fff", borderRadius: 16,
                  border: "1px solid #EAECF0", padding: "32px 24px",
                  boxShadow: "0px 1px 3px rgba(16,24,40,0.10)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 8px 24px rgba(21,112,239,0.1)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "none"; el.style.boxShadow = "0px 1px 3px rgba(16,24,40,0.10)"; }}
                >
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: v.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                    <Icon size={20} color={v.iconColor} strokeWidth={1.75} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-ibm-plex-serif)", fontSize: 17, fontWeight: 600, color: "#101828", marginBottom: 10 }}>{v.title}</h3>
                  <p style={{ fontSize: 14, color: "#667085", lineHeight: 1.75 }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── EDIFYSUITE TEASER ─────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "64px 24px", borderTop: "1px solid #EAECF0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 32 }}>
          <div style={{ maxWidth: 520 }}>
            <SectionLabel>Part of the Edify Ecosystem</SectionLabel>
            <h3 style={{ fontFamily: "var(--font-ibm-plex-serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#101828", letterSpacing: "-0.02em", marginBottom: 12 }}>
              Powered by{" "}
              <span className="gradient-text" style={{ fontStyle: "italic" }}>EdifySuite</span>
            </h3>
            <p style={{ fontSize: 15, color: "#667085", lineHeight: 1.75 }}>
              Our methodology brought to life through a purpose-built operational platform. Strategy and technology, unified.
            </p>
          </div>
          <a href="https://edifysuite.com" target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#1570EF", color: "#fff",
              padding: "14px 28px", borderRadius: 12,
              fontWeight: 600, fontSize: 15, textDecoration: "none",
              boxShadow: "0 1px 2px rgba(16,24,40,0.05)",
              transition: "background 0.3s",
            }}>
            Explore EdifySuite <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style>{`
        @media (max-width: 768px) {
          .hero-grid  { grid-template-columns: 1fr !important; }
          .about-hero-cards { display: none !important; }
          .story-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  );
}
