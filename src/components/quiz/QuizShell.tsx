"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Share2 } from "lucide-react";
import ShareButtons from "./ShareButtons";
import TabNavigation from "./TabNavigation";

export default function QuizShell({ children }: { children: React.ReactNode }) {
  const [showShare, setShowShare] = useState(false);
  const pathname = usePathname();

  return (
    <main>
      {/* Full-width yellow hero */}
      <div className="w-full bg-yellow">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="grid md:grid-cols-[1fr,auto] gap-6 items-center">
            <div>
              {/* QUIZ label + teal underline */}
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-dark-navy">
                  Quiz
                </span>
                <div className="w-8 h-[3px] bg-teal rounded-full mt-1.5" />
              </div>

              <h1 className="font-serif text-3xl sm:text-[42px] md:text-[52px] leading-tight font-bold text-dark-navy mb-3">
                Growth vs. Fixed Mindset
              </h1>
              <p className="text-sm sm:text-base text-dark-navy/70 mb-5">
                Discover your mindset and unlock your potential.
              </p>

              {/* SHARE pill button */}
              <div className="relative">
                <button
                  onClick={() => setShowShare(!showShare)}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-dark-navy/20 px-5 py-2 text-xs font-bold uppercase tracking-[0.1em] text-dark-navy hover:border-dark-navy/40 transition-colors cursor-pointer"
                >
                  <Share2 size={14} />
                  Share
                </button>
                {showShare && (
                  <div className="absolute top-full left-0 mt-2 z-10 bg-white rounded-xl shadow-lg p-3">
                    <ShareButtons />
                  </div>
                )}
              </div>
            </div>

            {/* Illustration */}
            <Image
              src="/assets/icons/quiz-growth.svg"
              alt="Growth mindset illustration"
              width={240}
              height={240}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>

      {/* White content area */}
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <TabNavigation />
        <div key={pathname} className="animate-tab-enter">
          {children}
        </div>
      </div>
    </main>
  );
}
