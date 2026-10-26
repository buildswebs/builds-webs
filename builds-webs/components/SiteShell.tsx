"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import PageLoader from "@/components/PageLoader";
import PageTransition from "@/components/PageTransition";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <PageLoader />
      <Header />
      <main>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
