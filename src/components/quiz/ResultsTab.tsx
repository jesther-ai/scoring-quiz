"use client";

import { useRouter } from "next/navigation";
import { useQuizState } from "@/hooks/useQuizState";
import ShareButtons from "./ShareButtons";

const bandColors = [
  { label: "Strong Fixed Mindset", color: "#EE9133" },
  { label: "Fixed Mindset with some Growth ideas", color: "#FECE00" },
  { label: "Growth Mindset with some Fixed ideas", color: "#46C4B5" },
  { label: "Strong Growth Mindset", color: "#23CEBC" },
];

export default function ResultsTab() {
  const router = useRouter();
  const { totalScore, resultBand, resetQuiz } = useQuizState();

  if (totalScore === null || !resultBand) {
    return (
      <div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-dark-navy mb-8">
          Your Results
        </h2>
        <div className="bg-cream/30 border border-black/5 rounded-3xl p-6 sm:p-10">
          <div className="text-center py-16">
            <p className="text-lg text-black/60 mb-6">
              Please complete the quiz first to see your results.
            </p>
            <button
              onClick={() => router.push("/quiz/quiz")}
              className="rounded-full py-5 px-12 bg-teal-button hover:bg-teal-button-hover text-white font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer"
            >
              Take Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Calculate marker position: score 20-80 maps to 0-100%
  const markerPercent = ((totalScore - 20) / 60) * 100;

  const handleRetake = () => {
    resetQuiz();
    router.push("/quiz/about");
  };

  return (
    <div>
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-dark-navy mb-8">
        Your Results
      </h2>

      {/* Outer card */}
      <div className="bg-cream/30 border border-black/5 rounded-3xl p-6 sm:p-10">
        {/* Score display */}
        <div className="text-center mb-8">
          <div className="inline-flex items-baseline gap-1 mb-2">
            <span className="text-6xl sm:text-7xl font-bold text-dark-navy">{totalScore}</span>
            <span className="text-xl sm:text-2xl text-black/40 font-medium">/ 80</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-dark-navy mb-2">
            {resultBand.label}
          </h3>
        </div>

        {/* Description — inner white card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 mb-8">
          {resultBand.label === "Strong Growth Mindset" && (
            <p className="text-dark-navy/80 leading-relaxed">
              You demonstrate a strong growth mindset. You believe that abilities can be developed through dedication and hard work. This view creates a love of learning and a resilience that is essential for great accomplishment. You tend to embrace challenges, persist in the face of setbacks, and see effort as the path to mastery.
            </p>
          )}
          {resultBand.label === "Growth Mindset with some Fixed ideas" && (
            <p className="text-dark-navy/80 leading-relaxed">
              You generally hold a growth mindset but have some areas where fixed beliefs may be influencing your behavior. You mostly believe in the power of effort and learning, though certain domains or situations may trigger more fixed thinking. Becoming aware of these patterns can help you continue developing a more consistent growth orientation.
            </p>
          )}
          {resultBand.label === "Fixed Mindset with some Growth ideas" && (
            <p className="text-dark-navy/80 leading-relaxed">
              You tend toward a fixed mindset but show some growth-oriented beliefs. You may often see abilities as relatively stable traits, though you recognize that improvement is possible in some areas. Research shows that even small shifts toward growth thinking can have meaningful effects on motivation and achievement.
            </p>
          )}
          {resultBand.label === "Strong Fixed Mindset" && (
            <p className="text-dark-navy/80 leading-relaxed">
              You currently hold a predominantly fixed mindset, believing that abilities are largely innate and stable. While this is a common perspective, research shows that adopting more growth-oriented beliefs can improve motivation, resilience, and achievement. The good news is that mindset itself is something that can be changed with awareness and practice.
            </p>
          )}
        </div>

        {/* Score bar */}
        <div className="mb-10">
          <div className="relative">
            {/* Segments */}
            <div className="flex rounded-full overflow-hidden h-5">
              {bandColors.map(({ label, color }) => (
                <div
                  key={label}
                  className="flex-1 h-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            {/* Marker */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
              style={{ left: `${markerPercent}%` }}
            >
              <div className="w-6 h-6 rounded-full bg-dark-navy border-[3px] border-white shadow-md" />
            </div>
          </div>
          {/* Labels */}
          <div className="flex justify-between mt-2">
            <span className="text-[10px] sm:text-xs text-black/40">Fixed (20)</span>
            <span className="text-[10px] sm:text-xs text-black/40">Growth (80)</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <button
          onClick={handleRetake}
          className="rounded-full py-5 px-12 bg-teal-button hover:bg-teal-button-hover text-white font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer"
        >
          Retake Assessment
        </button>
        <ShareButtons />
      </div>
    </div>
  );
}
