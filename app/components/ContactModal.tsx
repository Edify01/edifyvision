"use client";
import { X } from "lucide-react";
import { useState, FormEvent } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", businessName: "", description: "" });
        setTimeout(() => {
          onClose();
          setSubmitStatus("idle");
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(8px)",
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "relative",
          background: "#ffffff",
          borderRadius: 24,
          maxWidth: 540,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 24px 48px rgba(0, 0, 0, 0.24), 0 8px 16px rgba(0, 0, 0, 0.12)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: "32px 32px 24px",
            borderBottom: "1px solid #EAECF0",
            position: "relative",
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 8,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#F2F4F7";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            <X size={20} color="#667085" />
          </button>
          <h2
            style={{
              fontFamily: "var(--font-ibm-plex-serif)",
              fontSize: 28,
              fontWeight: 600,
              color: "#101828",
              marginBottom: 8,
              letterSpacing: "-0.01em",
            }}
          >
            Book a Free Consultation
          </h2>
          <p style={{ fontSize: 15, color: "#667085", lineHeight: 1.6 }}>
            Tell us about your business and what you're looking to achieve. We'll get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#344054",
                  marginBottom: 6,
                }}
              >
                Your Name *
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  fontSize: 15,
                  border: "1px solid #D0D5DD",
                  borderRadius: 10,
                  outline: "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onFocus={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#1570EF";
                  (e.target as HTMLElement).style.boxShadow = "0 0 0 4px rgba(21,112,239,0.08)";
                }}
                onBlur={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#D0D5DD";
                  (e.target as HTMLElement).style.boxShadow = "none";
                }}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#344054",
                  marginBottom: 6,
                }}
              >
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  fontSize: 15,
                  border: "1px solid #D0D5DD",
                  borderRadius: 10,
                  outline: "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onFocus={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#1570EF";
                  (e.target as HTMLElement).style.boxShadow = "0 0 0 4px rgba(21,112,239,0.08)";
                }}
                onBlur={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#D0D5DD";
                  (e.target as HTMLElement).style.boxShadow = "none";
                }}
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                style={{
                  display: "block",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#344054",
                  marginBottom: 6,
                }}
              >
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  fontSize: 15,
                  border: "1px solid #D0D5DD",
                  borderRadius: 10,
                  outline: "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onFocus={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#1570EF";
                  (e.target as HTMLElement).style.boxShadow = "0 0 0 4px rgba(21,112,239,0.08)";
                }}
                onBlur={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#D0D5DD";
                  (e.target as HTMLElement).style.boxShadow = "none";
                }}
              />
            </div>

            {/* Business Name */}
            <div>
              <label
                htmlFor="businessName"
                style={{
                  display: "block",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#344054",
                  marginBottom: 6,
                }}
              >
                Business Name *
              </label>
              <input
                id="businessName"
                type="text"
                required
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  fontSize: 15,
                  border: "1px solid #D0D5DD",
                  borderRadius: 10,
                  outline: "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onFocus={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#1570EF";
                  (e.target as HTMLElement).style.boxShadow = "0 0 0 4px rgba(21,112,239,0.08)";
                }}
                onBlur={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#D0D5DD";
                  (e.target as HTMLElement).style.boxShadow = "none";
                }}
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                style={{
                  display: "block",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#344054",
                  marginBottom: 6,
                }}
              >
                What are you looking to achieve? *
              </label>
              <textarea
                id="description"
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  fontSize: 15,
                  border: "1px solid #D0D5DD",
                  borderRadius: 10,
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "inherit",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onFocus={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#1570EF";
                  (e.target as HTMLElement).style.boxShadow = "0 0 0 4px rgba(21,112,239,0.08)";
                }}
                onBlur={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#D0D5DD";
                  (e.target as HTMLElement).style.boxShadow = "none";
                }}
              />
            </div>

            {/* Submit Status */}
            {submitStatus === "success" && (
              <div
                style={{
                  padding: 12,
                  background: "#D1FADF",
                  border: "1px solid #6CE9A6",
                  borderRadius: 10,
                  fontSize: 14,
                  color: "#027A48",
                  fontWeight: 500,
                }}
              >
                ✓ Message sent! We'll be in touch soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div
                style={{
                  padding: 12,
                  background: "#FEE4E2",
                  border: "1px solid #FDA29B",
                  borderRadius: 10,
                  fontSize: 14,
                  color: "#B42318",
                  fontWeight: 500,
                }}
              >
                Something went wrong. Please try again or email us directly at info@edifyvision.com
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                padding: "14px 24px",
                background: isSubmitting ? "#98A2B3" : "#1570EF",
                color: "#ffffff",
                fontSize: 16,
                fontWeight: 600,
                border: "none",
                borderRadius: 12,
                cursor: isSubmitting ? "not-allowed" : "pointer",
                transition: "background 0.2s",
                marginTop: 8,
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  (e.currentTarget as HTMLElement).style.background = "#175CD3";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  (e.currentTarget as HTMLElement).style.background = "#1570EF";
                }
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
