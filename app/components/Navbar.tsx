"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import EdifyLogo from "./EdifyLogo";

const links = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "EdifySuite", href: "https://edifysuite.com", external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.3s",
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #EAECF0" : "1px solid transparent",
        boxShadow: scrolled ? "0px 1px 3px rgba(16,24,40,0.08)" : "none",
      }}
    >
      <nav style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <EdifyLogo variant="light" width={148} />
        </Link>

        {/* Desktop nav */}
        <ul style={{ display: "flex", alignItems: "center", gap: 32, listStyle: "none", margin: 0, padding: 0 }}
          className="hidden md:flex">
          {links.map((l) => {
            const active = !l.external && pathname === l.href;
            return (
              <li key={l.label}>
                <Link
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  style={{
                    fontFamily: "var(--font-inter)", fontSize: 15, fontWeight: 500,
                    color: active ? "#1570EF" : "#475467",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#1570EF")}
                  onMouseLeave={e => (e.currentTarget.style.color = active ? "#1570EF" : "#475467")}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a href="mailto:info@edifyvision.com"
          className="hidden md:flex"
          style={{
            background: "#1570EF", color: "#fff",
            padding: "10px 20px", borderRadius: 12,
            fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 14,
            textDecoration: "none", transition: "background 0.3s, box-shadow 0.3s",
            boxShadow: "0px 1px 2px rgba(16,24,40,0.05)",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#175CD3"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#1570EF"; }}
        >
          Book a Consultation
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{ background: "none", border: "none", cursor: "pointer", color: "#475467" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#fff", borderTop: "1px solid #EAECF0", padding: "16px 24px 24px" }} className="md:hidden">
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            {links.map((l) => (
              <li key={l.label}>
                <Link href={l.href} onClick={() => setOpen(false)}
                  target={l.external ? "_blank" : undefined}
                  style={{ fontSize: 15, fontWeight: 500, color: "#344054", textDecoration: "none" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="mailto:info@edifyvision.com"
                style={{
                  display: "inline-block", background: "#1570EF", color: "#fff",
                  padding: "10px 20px", borderRadius: 12,
                  fontWeight: 600, fontSize: 14, textDecoration: "none",
                }}
              >
                Book a Consultation
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
