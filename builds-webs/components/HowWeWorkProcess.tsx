"use client";

import { useEffect, useState, useCallback } from "react";
import styles from "./HowWeWorkProcess.module.css";

const STEPS = [
  {
    n: 1,
    title: "Audit",
    desc: "We review your Google Business Profile, website and the searches your customers use.",
  },
  {
    n: 2,
    title: "Plan",
    desc: "You get a written list of fixes, ordered by what is likely to bring the most enquiries.",
  },
  {
    n: 3,
    title: "Build",
    desc: "We fix listings, pages and ads, and set up WhatsApp so enquiries reach you quickly.",
  },
  {
    n: 4,
    title: "Review",
    desc: "We go through the enquiries with you each month and change what is not working.",
  },
];

export default function HowWeWorkProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % STEPS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextStep();
    }, 3600);

    return () => clearInterval(timer);
  }, [nextStep, activeStep]);

  return (
    <div className={styles.wrap}>
      <div className={styles.steps} role="list">
        {/* Step 1: Audit */}
        <button
          type="button"
          onClick={() => setActiveStep(0)}
          className={`${styles.step} ${activeStep === 0 ? styles.stepOn : ""}`}
          aria-pressed={activeStep === 0}
        >
          <div className={styles.head}>
            <div className={styles.badge}>1</div>
            <div className={styles.conn}>
              <i className={styles.connFill} />
            </div>
          </div>
          <div className={styles.art}>
            <svg
              viewBox="0 0 240 150"
              role="img"
              aria-label="A magnifier scanning a profile page"
            >
              <rect
                className={styles.panel}
                x="20"
                y="14"
                width="200"
                height="122"
                rx="10"
              />
              <circle cx="36" cy="30" r="3" fill="#4a3b3e" />
              <circle cx="47" cy="30" r="3" fill="#4a3b3e" />
              <circle cx="58" cy="30" r="3" fill="#4a3b3e" />
              <rect className={styles.ln} x="36" y="48" width="84" height="9" rx="4.5" />
              <rect className={styles.ln} x="36" y="66" width="140" height="7" rx="3.5" />
              <rect className={styles.ln} x="36" y="82" width="116" height="7" rx="3.5" />
              <rect className={styles.ln} x="36" y="98" width="72" height="7" rx="3.5" />
              <rect
                className={`${styles.hot} ${styles.flag}`}
                x="156"
                y="80"
                width="30"
                height="11"
                rx="5.5"
              />
              <g className={styles.scan}>
                <circle
                  cx="64"
                  cy="66"
                  r="22"
                  fill="rgba(251,113,133,.08)"
                  stroke="#fb7185"
                  strokeWidth="3"
                />
                <path
                  d="M80 82l16 16"
                  stroke="#fb7185"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>
          <h3 className={styles.stepTitle}>Audit</h3>
          <p className={styles.stepDesc}>
            We review your Google Business Profile, website and the searches your
            customers use.
          </p>
        </button>

        {/* Step 2: Plan */}
        <button
          type="button"
          onClick={() => setActiveStep(1)}
          className={`${styles.step} ${activeStep === 1 ? styles.stepOn : ""}`}
          aria-pressed={activeStep === 1}
        >
          <div className={styles.head}>
            <div className={styles.badge}>2</div>
            <div className={styles.conn}>
              <i className={styles.connFill} />
            </div>
          </div>
          <div className={styles.art}>
            <svg
              viewBox="0 0 240 150"
              role="img"
              aria-label="A ranked checklist of fixes"
            >
              <rect
                className={styles.panel}
                x="20"
                y="14"
                width="200"
                height="122"
                rx="10"
              />
              <g className={styles.row}>
                <rect className={styles.hot} x="36" y="30" width="22" height="22" rx="6" />
                <text
                  x="47"
                  y="46"
                  fill="#fff"
                  fontSize="12"
                  fontWeight="700"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                >
                  1
                </text>
                <rect className={styles.ln} x="68" y="36" width="96" height="10" rx="5" />
                <path className={`${styles.ac} ${styles.tick}`} d="M178 41l6 6 12-13" />
              </g>
              <g className={styles.row}>
                <rect x="36" y="60" width="22" height="22" rx="6" fill="#3b2a2e" />
                <text
                  x="47"
                  y="76"
                  fill="#fb7185"
                  fontSize="12"
                  fontWeight="700"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                >
                  2
                </text>
                <rect className={styles.ln} x="68" y="66" width="74" height="10" rx="5" />
                <path className={`${styles.ac} ${styles.tick}`} d="M178 71l6 6 12-13" />
              </g>
              <g className={styles.row}>
                <rect x="36" y="90" width="22" height="22" rx="6" fill="#3b2a2e" />
                <text
                  x="47"
                  y="106"
                  fill="#fb7185"
                  fontSize="12"
                  fontWeight="700"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                >
                  3
                </text>
                <rect className={styles.ln} x="68" y="96" width="54" height="10" rx="5" />
                <path className={`${styles.ac} ${styles.tick}`} d="M178 101l6 6 12-13" />
              </g>
            </svg>
          </div>
          <h3 className={styles.stepTitle}>Plan</h3>
          <p className={styles.stepDesc}>
            You get a written list of fixes, ordered by what is likely to bring
            the most enquiries.
          </p>
        </button>

        {/* Step 3: Build */}
        <button
          type="button"
          onClick={() => setActiveStep(2)}
          className={`${styles.step} ${activeStep === 2 ? styles.stepOn : ""}`}
          aria-pressed={activeStep === 2}
        >
          <div className={styles.head}>
            <div className={styles.badge}>3</div>
            <div className={styles.conn}>
              <i className={styles.connFill} />
            </div>
          </div>
          <div className={styles.art}>
            <svg
              viewBox="0 0 240 150"
              role="img"
              aria-label="WhatsApp style chat so enquiries reach you quickly"
            >
              <rect
                className={styles.panel}
                x="20"
                y="14"
                width="200"
                height="122"
                rx="10"
              />
              <g className={`${styles.bub} ${styles.b1}`}>
                <path
                  d="M38 32h92a10 10 0 0 1 10 10v22a10 10 0 0 1-10 10H50l-12 10V42a10 10 0 0 1 0-10z"
                  fill="#241c1e"
                  stroke="#382c2f"
                />
                <rect className={styles.ln} x="50" y="43" width="70" height="7" rx="3.5" fill="#4a3b3e" />
                <rect className={styles.ln} x="50" y="57" width="46" height="7" rx="3.5" fill="#4a3b3e" />
              </g>
              <g className={`${styles.bub} ${styles.b2}`}>
                <path
                  d="M110 82h82a10 10 0 0 1 10 10v16a10 10 0 0 1-10 10h-70a10 10 0 0 1-10-10V92a10 10 0 0 1 0-10z"
                  fill="#e11d48"
                />
                <rect x="122" y="94" width="50" height="7" rx="3.5" fill="rgba(255,255,255,.9)" />
                <path
                  className={styles.tk2}
                  d="M178 106l5 5 10-11M172 106l5 5"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
          <h3 className={styles.stepTitle}>Build</h3>
          <p className={styles.stepDesc}>
            We fix listings, pages and ads, and set up WhatsApp so enquiries
            reach you quickly.
          </p>
        </button>

        {/* Step 4: Review */}
        <button
          type="button"
          onClick={() => setActiveStep(3)}
          className={`${styles.step} ${styles.stepLast} ${activeStep === 3 ? styles.stepOn : ""}`}
          aria-pressed={activeStep === 3}
        >
          <div className={styles.head}>
            <div className={styles.badge}>4</div>
          </div>
          <div className={styles.art}>
            <svg
              viewBox="0 0 240 150"
              role="img"
              aria-label="Monthly enquiries chart trending up"
            >
              <rect
                className={styles.panel}
                x="20"
                y="14"
                width="200"
                height="122"
                rx="10"
              />
              <path d="M36 118h168" stroke="#382c2f" strokeWidth="1.5" />
              <rect className={styles.bar} x="44" y="94" width="28" height="24" rx="5" fill="#3b2a2e" />
              <rect className={styles.bar} x="84" y="78" width="28" height="40" rx="5" fill="#5a242f" />
              <rect className={styles.bar} x="124" y="60" width="28" height="58" rx="5" fill="#9b1b3b" />
              <rect className={styles.bar} x="164" y="38" width="28" height="80" rx="5" fill="#e11d48" />
              <path className={`${styles.ac} ${styles.trend}`} d="M58 84L98 66l40-18 40-16" />
            </svg>
          </div>
          <h3 className={styles.stepTitle}>Review</h3>
          <p className={styles.stepDesc}>
            We go through the enquiries with you each month and change what is not
            working.
          </p>
        </button>
      </div>
    </div>
  );
}
