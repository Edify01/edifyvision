import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import EdifyLogo from "./EdifyLogo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "#101828", borderTop: "1px solid #1e293b" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 48, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <EdifyLogo variant="dark" width={140} />
            </div>
            <p style={{ fontSize: 14, color: "#667085", lineHeight: 1.7, maxWidth: 220 }}>
              Strategic advisory for organisations built to last.
            </p>
          </div>
          {/* Navigation */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#475467", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
              Company
            </p>
            {[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Services", href: "/#services" }].map(l => (
              <div key={l.label} style={{ marginBottom: 10 }}>
                <Link href={l.href} style={{ fontSize: 14, color: "#98A2B3", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#f3f4f6")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#98A2B3")}
                >{l.label}</Link>
              </div>
            ))}
          </div>
          {/* Ecosystem */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#475467", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
              Ecosystem
            </p>
            <a href="https://edifysuite.com" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, color: "#4893FF", textDecoration: "none", marginBottom: 8 }}>
              EdifySuite <ArrowUpRight size={13} />
            </a>
            <p style={{ fontSize: 13, color: "#667085", lineHeight: 1.6 }}>
              The operational platform for Edify-aligned organisations.
            </p>
          </div>
          {/* Contact */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#475467", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
              Contact
            </p>
            <a href="mailto:info@edifyvision.com"
              style={{ fontSize: 14, color: "#98A2B3", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f3f4f6")}
              onMouseLeave={e => (e.currentTarget.style.color = "#98A2B3")}
            >
              info@edifyvision.com
            </a>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1e293b", paddingTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <p style={{ fontSize: 13, color: "#475467" }}>&copy; {year} Edify Consulting. All rights reserved.</p>
          <p style={{ fontSize: 13, color: "#344054" }}>edifyvision.com</p>
        </div>
      </div>
    </footer>
  );
}
