"use client";

import { useRouter } from "next/navigation";
import { Clock, HelpCircle, Brain, TrendingUp, Target } from "lucide-react";

export default function AboutTab() {
  const router = useRouter();

  return (
    <div>
      {/* Meta info */}
      <div className="flex items-center gap-5 text-sm text-black/60 mb-8">
        <span className="flex items-center gap-2">
          <Clock size={16} className="text-teal" />
          5 min
        </span>
        <span className="flex items-center gap-2">
          <HelpCircle size={16} className="text-teal" />
          20 Questions
        </span>
      </div>

      {/* Description */}
      <div className="max-w-none text-dark-navy/80 mb-10 space-y-4">
        <p className="font-serif text-base sm:text-lg leading-relaxed">
          Stanford psychologist Carol Dweck&apos;s groundbreaking research revealed that people hold fundamentally different beliefs about their abilities. Those with a <strong>growth mindset</strong> believe intelligence and skills can be developed through effort, effective strategies, and input from others. Those with a <strong>fixed mindset</strong> believe talents are innate gifts that cannot be meaningfully changed.
        </p>
        <p className="font-serif text-base sm:text-lg leading-relaxed">
          These beliefs have profound consequences for motivation, resilience, learning, and achievement. This assessment measures where you fall on the growth-to-fixed mindset spectrum across 20 research-informed questions.
        </p>
      </div>

      {/* What You'll Learn */}
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-dark-navy mb-8">
        What You&apos;ll Learn
      </h2>
      <div className="grid sm:grid-cols-3 gap-5 mb-10">
        {[
          {
            icon: Brain,
            title: "Your Mindset Profile",
            description: "Discover whether you lean toward a growth or fixed mindset and understand what that means for your development.",
          },
          {
            icon: TrendingUp,
            title: "Areas for Growth",
            description: "Identify specific belief patterns that may be limiting your potential and learn strategies to shift them.",
          },
          {
            icon: Target,
            title: "Actionable Insights",
            description: "Get evidence-based recommendations for cultivating a stronger growth mindset in your daily life.",
          },
        ].map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-cream/50 border border-black/5 rounded-2xl p-5 sm:p-6"
          >
            <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mb-3">
              <Icon size={22} className="text-teal" />
            </div>
            <h3 className="font-bold text-dark-navy text-base sm:text-lg mb-1.5">{title}</h3>
            <p className="text-xs sm:text-sm text-black/60 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={() => router.push("/quiz/quiz")}
        className="rounded-full py-5 px-12 bg-teal-button hover:bg-teal-button-hover text-white font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer"
      >
        Start Assessment &rarr;
      </button>
    </div>
  );
}
