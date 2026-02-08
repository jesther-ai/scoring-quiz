"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/lib/quiz-data";
import { useQuizState } from "@/hooks/useQuizState";
import QuestionCard from "./QuestionCard";

const PAGE_SIZE = 5;
const TOTAL_PAGES = Math.ceil(questions.length / PAGE_SIZE);

export default function QuizTab() {
  const router = useRouter();
  const { answers, answeredCount, isComplete, setAnswer, submitQuiz } = useQuizState();
  const [page, setPage] = useState(0);
  const topRef = useRef<HTMLDivElement>(null);

  const pageQuestions = questions.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  const isLastPage = page === TOTAL_PAGES - 1;
  const pageAllAnswered = pageQuestions.every((q) => answers[q.id] !== undefined);

  const goToPage = (nextPage: number) => {
    setPage(nextPage);
    requestAnimationFrame(() => {
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const handleSubmit = () => {
    submitQuiz();
    requestAnimationFrame(() => {
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    router.push("/quiz/results");
  };

  return (
    <div>
      <div ref={topRef} />

      {/* Progress bar — sticky */}
      <div className="sticky top-0 z-20 bg-white -mx-4 sm:-mx-6 px-4 sm:px-6 pt-2 pb-4 ">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-black/60">
            Questions {page * PAGE_SIZE + 1}–{Math.min((page + 1) * PAGE_SIZE, questions.length)} of {questions.length}
          </span>
          <span className="text-sm font-bold text-dark-navy">
            {answeredCount} of {questions.length} answered
          </span>
        </div>
        <div className="w-full h-3 rounded-full bg-yellow/30 overflow-hidden">
          <div
            className="h-full bg-yellow rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(answeredCount / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {pageQuestions.map((q) => (
          <QuestionCard
            key={q.id}
            question={q}
            selectedValue={answers[q.id]}
            onSelect={(value) => setAnswer(q.id, value)}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 0}
          className={`rounded-full py-4 px-10 font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer ${
            page === 0
              ? "bg-black/10 text-black/30 cursor-not-allowed"
              : "bg-dark-navy text-white hover:bg-dark-navy/90"
          }`}
        >
          Previous
        </button>

        {isLastPage ? (
          <button
            onClick={handleSubmit}
            disabled={!isComplete}
            className={`rounded-full py-4 px-10 font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer ${
              isComplete
                ? "bg-teal-button hover:bg-teal-button-hover text-white"
                : "bg-black/10 text-black/30 cursor-not-allowed"
            }`}
          >
            Submit Assessment
          </button>
        ) : (
          <button
            onClick={() => goToPage(page + 1)}
            disabled={!pageAllAnswered}
            className={`rounded-full py-4 px-10 font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer ${
              pageAllAnswered
                ? "bg-teal-button hover:bg-teal-button-hover text-white"
                : "bg-black/10 text-black/30 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
