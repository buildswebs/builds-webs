"use client";

import { useState } from "react";
import Link from "next/link";
import SearchMotionGraphic from "./SearchMotionGraphic";
import styles from "./SemrushHero.module.css";

const WA_BASE = "https://wa.me/918287593102";

export default function SemrushHero() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("Greater Noida");
  const [activeTab, setActiveTab] = useState<"maps" | "ncr" | "india">("maps");

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryText = query.trim() || "my business";
    const message = `Hi BuildsWebs, I would like a free digital audit for ${queryText} in ${location}.`;
    const waUrl = `${WA_BASE}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroGlow} aria-hidden="true" />

      <div className={styles.heroContent}>
        {/* Main Headline (Original Copy) */}
        <h1 className={styles.mainTitle}>
          We get local businesses found on Google, then turn those searches{" "}
          <span className={styles.gradientText}>into enquiries.</span>
        </h1>

        {/* Subtitle (Original Copy) */}
        <p className={styles.subtitle}>
          BuildsWebs is a digital growth agency in Greater Noida. We work with
          businesses across India on local SEO, Google Business Profile, Google
          Ads, websites and WhatsApp follow-up, so customers searching near you
          find you first.
        </p>

        {/* Search & Audit Bar */}
        <form onSubmit={handleAuditSubmit} className={styles.searchAuditBar}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Enter your business name or website (e.g. Apollo Dental clinic)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className={styles.locationDropdown}>
            <select
              aria-label="Select location"
              className={styles.locationSelect}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="Greater Noida">Greater Noida</option>
              <option value="Noida & Delhi NCR">Delhi NCR</option>
              <option value="Pan India">Pan India</option>
            </select>
          </div>

          <button type="submit" className={styles.auditBtn}>
            <span>Get Free Audit</span>
            <span aria-hidden="true">→</span>
          </button>
        </form>

        {/* Bento Showcase Grid (Perfect Sharpened Square Cards) */}
        <div className={styles.bentoGrid}>
          {/* Card 1: Featured Brand Card */}
          <div className={styles.brandCard}>
            <div className={styles.brandCardPattern} aria-hidden="true" />
            <div>
              <h2 className={styles.brandCardTitle}>
                Get found in search and AI answers.
              </h2>
              <p className={styles.brandCardDesc}>
                Powered by local SEO, Google Business Profile optimization, and
                verified review workflows. BuildsWebs puts your business where
                nearby customers look first.
              </p>
            </div>
            <a
              href={`${WA_BASE}?text=Hi%2C%20I%20would%20like%20a%20free%20audit%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.brandCardBtn}
            >
              <span>Claim Free Audit</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Card 2: Visibility Overview Card */}
          <div className={styles.overviewCard}>
            <div>
              <div className={styles.overviewHeader}>
                <span className={styles.overviewTitle}>Visibility Overview</span>
                <div className={styles.overviewTabs}>
                  <button
                    type="button"
                    onClick={() => setActiveTab("maps")}
                    className={`${styles.overviewTab} ${
                      activeTab === "maps" ? styles.overviewTabActive : ""
                    }`}
                  >
                    Google Maps
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("ncr")}
                    className={`${styles.overviewTab} ${
                      activeTab === "ncr" ? styles.overviewTabActive : ""
                    }`}
                  >
                    Delhi NCR
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("india")}
                    className={`${styles.overviewTab} ${
                      activeTab === "india" ? styles.overviewTabActive : ""
                    }`}
                  >
                    Pan India
                  </button>
                </div>
              </div>

              {/* Radial Meter / Gauge */}
              <div className={styles.gaugeBox}>
                <div className={styles.gaugeCircle}>
                  <svg className={styles.gaugeSvg} viewBox="0 0 72 72">
                    <circle className={styles.gaugeBg} cx="36" cy="36" r="30" />
                    <circle
                      className={styles.gaugeProgress}
                      cx="36"
                      cy="36"
                      r="30"
                    />
                  </svg>
                  <div className={styles.gaugeText}>
                    <span className={styles.gaugeScore}>94</span>
                    <span className={styles.gaugeMax}>/100</span>
                  </div>
                </div>

                <div className={styles.gaugeLabel}>
                  <strong>Top 3 Map Pack</strong>
                  {activeTab === "maps"
                    ? "Frequently ranked #1 for nearby searches"
                    : activeTab === "ncr"
                    ? "High local visibility across regional clusters"
                    : "Dominating primary service search queries"}
                </div>
              </div>

              <p className={styles.overviewText}>
                Bring your Google Business Profile, organic rank, and competitor
                insights into one clear growth roadmap.
              </p>
            </div>

            <Link href="/services/local-seo" className={styles.overviewActionBtn}>
              <span>Explore Local SEO Solutions</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Card 3: Live Search Motion Card */}
          <div className={styles.motionCard}>
            <div className={styles.motionCardHeader}>
              <span className={styles.motionCardTitle}>Live Search Ranking</span>
              <span className={styles.liveTag}>
                <span className={styles.liveDot} />
                Live Demo
              </span>
            </div>

            <div className={styles.motionGraphicWrapper}>
              <SearchMotionGraphic />
            </div>
          </div>
        </div>

        {/* Logo / Industry Trust Strip (No Emojis) */}
        <div className={styles.trustStrip}>
          <div className={styles.trustLabel}>
            Trusted by Ambitious Local Businesses Across India
          </div>
          <div className={styles.trustLogos}>
            <div className={styles.trustItem}>
              <span>Dental & Medical Clinics</span>
            </div>
            <div className={styles.trustItem}>
              <span>Coaching & Academies</span>
            </div>
            <div className={styles.trustItem}>
              <span>Retail Showrooms</span>
            </div>
            <div className={styles.trustItem}>
              <span>Legal & Consulting</span>
            </div>
            <div className={styles.trustItem}>
              <span>Home Services & Repairs</span>
            </div>
            <div className={styles.trustItem}>
              <span>Real Estate Builders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
