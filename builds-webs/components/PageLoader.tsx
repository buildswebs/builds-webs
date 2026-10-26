"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const timer = setTimeout(
      () => {
        setMounted(false);
      },
      prefersReduced ? 0 : 1150
    );

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="loader" aria-hidden="true">
      <div>
        <Image
          src="/favicon.png"
          alt="BuildsWebs"
          width={50}
          height={50}
          priority
          className="loader-logo-img"
        />
        <i></i>
      </div>
    </div>
  );
}
