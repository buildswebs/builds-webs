"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setAboutOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const closeAll = () => {
    setServicesOpen(false);
    setAboutOpen(false);
  };

  return (
    <header className={styles.top}>
      <div className={`wrap ${styles.inner}`}>
        {/* Brand */}
        <Link href="/" className={styles.brand} aria-label="BuildsWebs Home">
          <Image
            src="/logo.png"
            alt="BuildsWebs"
            width={166}
            height={55}
            priority
            className={styles.brandImg}
          />
        </Link>

        {/* Nav */}
        <nav className={styles.nav} aria-label="Main">
          {/* Services dropdown */}
          <div
            className={`${styles.dd} ${servicesOpen ? styles.ddOpen : ""}`}
            ref={servicesRef}
          >
            <button
              className={styles.ddBtn}
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={(e) => {
                e.stopPropagation();
                setServicesOpen((o) => !o);
                setAboutOpen(false);
              }}
            >
              Services
              <svg
                className={styles.ddChevron}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M2 4l4 4 4-4" />
              </svg>
            </button>

            <div className={styles.ddMenu} role="menu">
              <div className={styles.ddIn}>
                {/* Grow column */}
                <div>
                  <p className={styles.ddLabel}>Grow</p>
                  <Link href="/services/local-seo" onClick={closeAll}>
                    Local SEO
                    <span>Show up for searches in your area</span>
                  </Link>
                  <Link href="/services/google-business-profile" onClick={closeAll}>
                    Google Business Profile
                    <span>Appear in the map results</span>
                  </Link>
                  <Link href="/services/google-ads" onClick={closeAll}>
                    Google Ads
                    <span>Search campaigns for enquiries</span>
                  </Link>
                  <Link href="/services/whatsapp-automation" onClick={closeAll}>
                    WhatsApp automation
                    <span>Replies and follow-up</span>
                  </Link>
                </div>

                {/* Build column */}
                <div>
                  <p className={styles.ddLabel}>Build</p>
                  <Link href="/services/website-design" onClick={closeAll}>
                    Website design
                    <span>Fast, mobile-first websites</span>
                  </Link>
                  <Link href="/services/ecommerce-development" onClick={closeAll}>
                    E-commerce development
                    <span>Online stores and orders</span>
                  </Link>
                  <Link href="/services/custom-software" onClick={closeAll}>
                    Custom software
                    <span>Admin panels, APIs and tools</span>
                  </Link>
                </div>

                <Link href="/services" className={styles.ddAll} onClick={closeAll}>
                  See all services
                </Link>
              </div>
            </div>
          </div>

          {/* About dropdown */}
          <div
            className={`${styles.dd} ${aboutOpen ? styles.ddOpen : ""}`}
            ref={aboutRef}
          >
            <button
              className={styles.ddBtn}
              type="button"
              aria-expanded={aboutOpen}
              aria-haspopup="true"
              onClick={(e) => {
                e.stopPropagation();
                setAboutOpen((o) => !o);
                setServicesOpen(false);
              }}
            >
              About
              <svg
                className={styles.ddChevron}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M2 4l4 4 4-4" />
              </svg>
            </button>

            <div className={styles.ddMenu} role="menu">
              <div className={styles.ddIn}>
                {/* Company & Leadership */}
                <div>
                  <p className={styles.ddLabel}>Company</p>
                  <Link href="/about/who-we-are" onClick={closeAll}>
                    Who We Are
                    <span>Our story & operating philosophy</span>
                  </Link>
                  <Link href="/about/director" onClick={closeAll}>
                    Meet Our Director
                    <span>Leadership, vision & direct consulting</span>
                  </Link>
                  <Link href="/about/mission" onClick={closeAll}>
                    Our Mission
                    <span>High-ROI local growth for Indian MSMEs</span>
                  </Link>
                  <Link href="/about/vision" onClick={closeAll}>
                    Our Vision
                    <span>The future of localized search in India</span>
                  </Link>
                  <Link href="/about/team" onClick={closeAll}>
                    Our Team
                    <span>SEOs, ad engineers & developers</span>
                  </Link>
                </div>

                {/* Reputation & Proof */}
                <div>
                  <p className={styles.ddLabel}>Reputation & Knowledge</p>
                  <Link href="/about/clients" onClick={closeAll}>
                    Our Clients
                    <span>Clinics, retail & service partners</span>
                  </Link>
                  <Link href="/about/achievements" onClick={closeAll}>
                    Our Achievements
                    <span>Top-3 rankings & performance record</span>
                  </Link>
                  <Link href="/about/testimonials" onClick={closeAll}>
                    Testimonials
                    <span>Verifiable reviews & client stories</span>
                  </Link>
                  <Link href="/about/articles" onClick={closeAll}>
                    Articles
                    <span>Educational guides & local insights</span>
                  </Link>
                </div>

                <Link href="/about" className={styles.ddAll} onClick={closeAll}>
                  See full About overview
                </Link>
              </div>
            </div>
          </div>

          <Link href="/#approach" className={styles.hide}>Approach</Link>
          <Link href="/#process" className={styles.hide}>Process</Link>
          <Link href="/happy-clients" className={styles.hide}>Happy clients</Link>
          <Link href="/blog">Blog</Link>

          <a
            className={`btn ${styles.navBtn}`}
            href="https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20a%20free%20digital%20audit%20for%20my%20business."
            target="_blank"
            rel="noopener"
          >
            Free audit
          </a>
        </nav>
      </div>
    </header>
  );
}
