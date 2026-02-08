"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQuizState } from "@/hooks/useQuizState";

const tabs = [
  { label: "About", href: "/quiz/about" },
  { label: "Quiz", href: "/quiz/quiz" },
  { label: "Results", href: "/quiz/results" },
  { label: "References", href: "/quiz/references" },
];

export default function TabNavigation() {
  const pathname = usePathname();
  const { totalScore } = useQuizState();
  const tabRefs = useRef<Map<string, HTMLElement>>(new Map());
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [ready, setReady] = useState(false);

  const updateIndicator = useCallback(() => {
    const activeEl = tabRefs.current.get(pathname);
    if (activeEl) {
      const parent = activeEl.parentElement;
      if (parent) {
        setIndicator({
          left: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
        });
        setReady(true);
      }
    }
  }, [pathname]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  const setTabRef = useCallback((href: string) => (el: HTMLElement | null) => {
    if (el) {
      tabRefs.current.set(href, el);
    } else {
      tabRefs.current.delete(href);
    }
  }, []);

  return (
    <nav className="relative flex justify-center gap-8 sm:gap-12 md:gap-16 border-b border-black/10 mb-10 sm:mb-12">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        const isDisabled = tab.href === "/quiz/results" && totalScore === null;

        if (isDisabled) {
          return (
            <span
              key={tab.href}
              ref={setTabRef(tab.href)}
              className="relative pb-4 sm:pb-5 text-sm sm:text-[15px] uppercase tracking-[0.1em] font-bold text-black/30 cursor-not-allowed"
            >
              {tab.label}
            </span>
          );
        }

        return (
          <Link
            key={tab.href}
            ref={setTabRef(tab.href)}
            href={tab.href}
            className={`relative pb-4 sm:pb-5 text-sm sm:text-[15px] uppercase tracking-[0.1em] font-bold transition-colors ${
              isActive ? "text-black" : "text-black/70 hover:text-black"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}

      {/* Sliding indicator */}
      <span
        className="absolute bottom-0 h-2 sm:h-2.5 bg-black rounded-full transition-all duration-300 ease-out"
        style={{
          left: indicator.left,
          width: indicator.width,
          opacity: ready ? 1 : 0,
        }}
      />
    </nav>
  );
}
