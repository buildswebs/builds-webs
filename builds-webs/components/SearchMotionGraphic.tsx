"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SearchMotionGraphic.module.css";

const SEARCH_QUERY = "dentist near me";

export default function SearchMotionGraphic() {
  const [query, setQuery] = useState("");
  const [isShimmering, setIsShimmering] = useState(false);

  // Row visibility
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const [showMe, setShowMe] = useState(false);

  // Slots: "slot0" | "slot1" | "slot2"
  const [slotA, setSlotA] = useState<"slot0" | "slot1" | "slot2">("slot0");
  const [slotB, setSlotB] = useState<"slot0" | "slot1" | "slot2">("slot1");
  const [slotMe, setSlotMe] = useState<"slot0" | "slot1" | "slot2">("slot2");

  // User clinic state: "low" | "rise" | "win"
  const [meState, setMeState] = useState<"low" | "rise" | "win">("low");
  const [meText, setMeText] = useState("Page 3");

  // Trail state: "idle" | "on" | "off"
  const [trailState, setTrailState] = useState<"idle" | "on" | "off">("idle");

  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;

    const wait = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    async function runLoop() {
      while (isMountedRef.current) {
        // 1. Reset state
        setQuery("");
        setIsShimmering(false);
        setShowA(false);
        setShowB(false);
        setShowMe(false);
        setSlotA("slot0");
        setSlotB("slot1");
        setSlotMe("slot2");
        setMeState("low");
        setMeText("Page 3");
        setTrailState("idle");

        await wait(1000);
        if (!isMountedRef.current) break;

        // 2. Type query character by character
        for (let i = 0; i < SEARCH_QUERY.length; i++) {
          if (!isMountedRef.current) break;
          setQuery(SEARCH_QUERY.slice(0, i + 1));
          await wait(75 + Math.random() * 50);
        }

        await wait(350);
        if (!isMountedRef.current) break;

        // 3. Shimmer across search bar
        setIsShimmering(true);
        await wait(900);
        if (!isMountedRef.current) break;

        // 4. Stagger in results
        setShowA(true);
        await wait(260);
        if (!isMountedRef.current) break;

        setShowB(true);
        await wait(260);
        if (!isMountedRef.current) break;

        setShowMe(true);
        await wait(1300);
        if (!isMountedRef.current) break;

        // 5. Rise to Rank 1!
        setTrailState("on");
        setMeState("rise");
        setSlotMe("slot0");
        setSlotA("slot1");
        setSlotB("slot2");

        await wait(600);
        if (!isMountedRef.current) break;

        // 6. Win state
        setMeText("Page 1, #1 Result");
        setMeState("win");

        await wait(500);
        if (!isMountedRef.current) break;
        setTrailState("off");

        // 7. Admire and pause before replaying
        await wait(3600);
      }
    }

    runLoop();

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <div
      className={styles.card}
      role="region"
      aria-label="Interactive Search Ranking Motion Graphic"
    >
      <div className={styles.bar}>
        <svg
          className={styles.searchIcon}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <span className={styles.queryText}>{query}</span>
        <i className={styles.caret} />
        <div
          className={`${styles.shimmer} ${isShimmering ? styles.shimmerGo : ""}`}
        />
      </div>

      <div className={styles.list}>
        {/* Glow Trail */}
        <div
          className={`${styles.trail} ${
            trailState === "on"
              ? styles.trailOn
              : trailState === "off"
              ? styles.trailOff
              : ""
          }`}
        />

        {/* Row: Clinic A */}
        <div
          className={`${styles.row} ${styles[slotA]} ${
            showA ? styles.rowIn : ""
          }`}
        >
          <span className={styles.rowTitle}>Clinic A</span>
          <span className={styles.rowRank}>Page 1, first result</span>
        </div>

        {/* Row: Clinic B */}
        <div
          className={`${styles.row} ${styles[slotB]} ${
            showB ? styles.rowIn : ""
          }`}
        >
          <span className={styles.rowTitle}>Clinic B</span>
          <span className={styles.rowRank}>Page 1, second result</span>
        </div>

        {/* Row: Your Clinic */}
        <div
          className={`${styles.row} ${styles[slotMe]} ${
            showMe ? styles.rowIn : ""
          } ${
            meState === "low"
              ? styles.clinicLow
              : meState === "rise"
              ? styles.clinicRise
              : styles.clinicWin
          }`}
        >
          <span className={styles.rowTitle}>Your clinic</span>
          <span className={styles.rowRank}>{meText}</span>
        </div>
      </div>
    </div>
  );
}
