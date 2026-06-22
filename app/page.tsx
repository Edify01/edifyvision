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

        {/* ── Topographic SVG — static, dense, full-canvas ── */}
        {/* TO REPLACE: Upload your own topographic SVG file to /public/topographic-bg.svg
            Then replace this entire <div> with: 
            <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}>
              <Image src="/topographic-bg.svg" alt="" fill style={{ objectFit: "cover", opacity: 0.3 }} />
            </div>
        */}
        <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}>
          <svg width="100%" height="100%" viewBox="0 0 1440 640" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="rgba(99,102,241,0.18)" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">

              {/* ═══ MAIN CENTER-RIGHT CLUSTER (cx≈920, cy≈315) — 7 rings ═══ */}
              <path d="M920,285 Q948,280 954,308 Q960,338 936,348 Q910,357 896,334 Q883,311 897,290 Q906,277 920,285Z"/>
              <path d="M918,252 Q964,244 978,286 Q992,330 966,364 Q938,398 898,393 Q856,387 844,352 Q832,315 852,275 Q870,240 918,252Z"/>
              <path d="M916,218 Q982,206 1004,258 Q1028,314 1000,368 Q970,424 916,430 Q856,435 826,394 Q796,350 814,284 Q830,220 916,218Z"/>
              <path d="M914,183 Q1000,167 1030,226 Q1064,292 1032,366 Q998,442 930,458 Q856,472 814,426 Q772,376 786,300 Q800,224 914,183Z"/>
              <path d="M912,147 Q1018,127 1056,200 Q1098,280 1062,372 Q1024,466 946,486 Q858,506 806,454 Q752,398 766,308 Q780,212 912,147Z"/>
              <path d="M910,110 Q1036,86 1082,172 Q1132,266 1090,374 Q1046,484 962,508 Q864,532 800,474 Q734,412 750,308 Q764,198 910,110Z"/>
              <path d="M908,74 Q1054,46 1108,146 Q1168,254 1118,378 Q1066,506 978,534 Q876,562 800,496 Q722,428 738,312 Q752,186 908,74Z"/>

              {/* ═══ LEFT CLUSTER (cx≈242, cy≈358) — 5 rings ═══ */}
              <path d="M242,326 Q270,319 276,346 Q282,374 258,384 Q232,392 220,368 Q210,344 226,326 Q234,315 242,326Z"/>
              <path d="M240,290 Q287,279 300,322 Q314,367 286,398 Q256,428 216,418 Q175,406 169,369 Q163,331 190,299 Q212,272 240,290Z"/>
              <path d="M238,253 Q304,237 324,294 Q346,355 314,406 Q280,458 230,450 Q174,442 154,399 Q134,353 161,293 Q185,237 238,253Z"/>
              <path d="M236,215 Q322,195 350,264 Q380,340 344,410 Q304,484 242,480 Q170,476 140,425 Q110,370 138,288 Q163,206 236,215Z"/>
              <path d="M234,178 Q340,153 376,236 Q416,328 374,420 Q328,514 250,512 Q164,510 122,450 Q82,386 112,280 Q140,176 234,178Z"/>

              {/* ═══ UPPER-RIGHT CLUSTER (cx≈1162, cy≈158) — 4 rings ═══ */}
              <path d="M1162,130 Q1188,125 1194,150 Q1200,177 1176,186 Q1151,193 1140,170 Q1130,148 1162,130Z"/>
              <path d="M1160,100 Q1204,91 1217,133 Q1230,177 1202,205 Q1172,233 1132,222 Q1092,211 1086,172 Q1080,132 1107,106 Q1128,84 1160,100Z"/>
              <path d="M1158,68 Q1220,55 1238,112 Q1258,174 1222,216 Q1184,260 1132,249 Q1078,238 1068,192 Q1058,143 1088,98 Q1112,60 1158,68Z"/>
              <path d="M1156,36 Q1236,19 1260,90 Q1286,168 1242,222 Q1196,278 1130,266 Q1062,254 1048,200 Q1034,144 1066,92 Q1095,44 1156,36Z"/>

              {/* ═══ TOP-LEFT CLUSTER (cx≈158, cy≈158) — 4 rings ═══ */}
              <path d="M158,129 Q183,122 188,147 Q193,173 170,181 Q147,188 136,164 Q126,142 158,129Z"/>
              <path d="M156,97 Q198,86 210,124 Q222,165 195,193 Q166,222 130,211 Q93,200 88,163 Q83,124 108,99 Q128,78 156,97Z"/>
              <path d="M154,64 Q213,49 230,101 Q249,157 216,198 Q182,240 136,228 Q88,216 77,168 Q67,118 96,74 Q118,38 154,64Z"/>
              <path d="M152,30 Q228,12 252,78 Q278,150 237,203 Q195,258 138,244 Q79,230 62,172 Q46,110 78,56 Q102,14 152,30Z"/>

              {/* ═══ TOP-CENTER CLUSTER (cx≈682, cy≈118) — 3 rings ═══ */}
              <path d="M682,90 Q707,83 713,108 Q719,135 694,143 Q668,150 658,126 Q648,104 682,90Z"/>
              <path d="M680,58 Q722,47 733,87 Q744,129 716,156 Q687,183 652,170 Q617,157 614,122 Q611,85 638,62 Q657,43 680,58Z"/>
              <path d="M678,25 Q738,10 752,64 Q768,122 733,162 Q697,203 650,188 Q602,173 596,128 Q590,80 622,44 Q648,14 678,25Z"/>

              {/* ═══ BOTTOM-LEFT CLUSTER (cx≈112, cy≈528) — 3 rings ═══ */}
              <path d="M112,500 Q138,493 143,518 Q148,545 124,553 Q99,560 89,536 Q80,512 112,500Z"/>
              <path d="M110,468 Q153,457 161,495 Q170,535 141,561 Q111,587 77,571 Q42,554 40,517 Q38,479 66,456 Q86,439 110,468Z"/>
              <path d="M108,434 Q167,420 179,472 Q193,527 157,561 Q119,597 74,578 Q29,559 25,512 Q21,463 53,428 Q77,400 108,434Z"/>

              {/* ═══ BOTTOM-CENTER CLUSTER (cx≈702, cy≈558) — 3 rings ═══ */}
              <path d="M702,530 Q727,524 731,549 Q735,574 711,582 Q685,588 675,565 Q666,542 702,530Z"/>
              <path d="M700,498 Q741,487 750,524 Q759,563 730,586 Q700,609 667,594 Q634,578 632,546 Q630,512 657,490 Q677,474 700,498Z"/>
              <path d="M698,464 Q755,449 767,499 Q781,554 745,585 Q708,617 664,600 Q618,582 614,543 Q610,502 641,469 Q665,442 698,464Z"/>

              {/* ═══ BOTTOM-RIGHT CLUSTER (cx≈1312, cy≈492) — 4 rings ═══ */}
              <path d="M1312,464 Q1339,457 1344,482 Q1349,508 1324,517 Q1298,524 1287,501 Q1277,478 1312,464Z"/>
              <path d="M1310,432 Q1354,421 1363,461 Q1372,502 1343,526 Q1313,551 1279,535 Q1244,518 1242,481 Q1240,443 1268,420 Q1288,404 1310,432Z"/>
              <path d="M1308,398 Q1370,383 1382,435 Q1396,492 1360,526 Q1322,561 1276,543 Q1229,524 1226,478 Q1222,430 1256,397 Q1281,372 1308,398Z"/>
              <path d="M1306,362 Q1386,343 1402,409 Q1420,480 1378,526 Q1334,573 1275,553 Q1214,532 1208,476 Q1202,418 1244,374 Q1274,339 1306,362Z"/>

              {/* ═══ RIGHT-EDGE PARTIAL CLUSTER (cx≈1420, cy≈315) ═══ */}
              <path d="M1420,284 Q1440,278 1440,302 L1440,340 Q1425,354 1404,342 Q1382,328 1384,302 Q1386,276 1420,284Z"/>
              <path d="M1418,250 Q1440,240 1440,272 L1440,360 Q1430,386 1400,372 Q1362,354 1360,312 Q1358,268 1390,248 Q1404,238 1418,250Z"/>

              {/* ═══ MID-LEFT SMALL CLUSTER (cx≈410, cy≈490) ═══ */}
              <path d="M410,464 Q433,458 437,480 Q441,504 418,511 Q395,517 386,495 Q378,474 410,464Z"/>
              <path d="M408,436 Q444,426 451,460 Q458,496 432,518 Q404,540 374,526 Q344,512 342,482 Q340,452 366,432 Q386,416 408,436Z"/>

              {/* ═══ WANDERING CONNECTING FLOWS ═══ */}
              {/* Main cluster ↔ left cluster — upper lane */}
              <path d="M804,258 Q710,242 590,256 Q500,268 408,286 Q380,292 350,298"/>
              {/* Main cluster ↔ left cluster — lower lane */}
              <path d="M802,368 Q706,382 580,396 Q486,406 394,402 Q368,400 348,394"/>
              {/* Left cluster → bottom-left */}
              <path d="M144,434 Q120,468 108,494"/>
              {/* Top-left → top-center */}
              <path d="M252,108 Q388,86 562,88 Q624,88 648,96"/>
              {/* Top-center → upper-right cluster */}
              <path d="M718,98 Q828,76 998,72 Q1074,70 1122,80"/>
              {/* Main cluster → bottom-right */}
              <path d="M994,524 Q1086,538 1186,530 Q1234,526 1276,512"/>
              {/* Bottom-left → bottom-center */}
              <path d="M180,516 Q322,514 486,530 Q576,540 634,545"/>
              {/* Bottom-center → bottom-right */}
              <path d="M768,548 Q896,550 1048,536 Q1128,528 1202,512"/>
              {/* Upper-right → right-edge */}
              <path d="M1254,194 Q1326,242 1366,272"/>
              {/* Top-left → left cluster (left side) */}
              <path d="M82,216 Q100,270 118,298"/>
              {/* Mid-canvas upper cross-flow */}
              <path d="M352,180 Q468,164 588,170 Q644,172 674,182"/>
              {/* Mid-canvas lower cross-flow */}
              <path d="M408,456 Q504,442 628,448 Q658,450 676,458"/>
              {/* Main cluster top flow to upper-right */}
              <path d="M928,112 Q1004,88 1096,78"/>
              {/* Texture: flow through center gap */}
              <path d="M524,316 Q572,302 634,306 Q688,310 742,302 Q786,296 804,286"/>
              <path d="M522,338 Q570,328 634,334 Q690,340 744,334 Q788,328 806,318"/>
              {/* Bottom arch connecting bottom clusters */}
              <path d="M178,556 Q294,570 412,570 Q510,570 586,562 Q624,558 638,554"/>
              {/* Right-side vertical flow */}
              <path d="M1246,270 Q1308,290 1350,316 Q1380,336 1390,360 Q1400,386 1388,416"/>
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
