"use client";

import { useEffect, useRef } from "react";

export default function FloatingWidgets() {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onScroll = () => {
      btn.classList.toggle("show", window.scrollY > 500);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: rm ? "auto" : "smooth" });
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <a
        className="wa-float"
        href="https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20a%20free%20digital%20audit%20for%20my%20business."
        target="_blank"
        rel="noopener"
        aria-label="Chat with BuildsWebs on WhatsApp"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 20l1.4-4.2A8 8 0 1 1 8.2 18.7z" />
        </svg>
        WhatsApp us
      </a>

      <button
        ref={btnRef}
        className="to-top"
        type="button"
        aria-label="Back to top"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M3 11l6-6 6 6" />
        </svg>
      </button>
    </>
  );
}
