"use client";

import type { QuizQuestion } from "@/lib/quiz-data";
import LikertScale from "./LikertScale";

interface QuestionCardProps {
  question: QuizQuestion;
  selectedValue: number | undefined;
  onSelect: (value: number) => void;
}

export default function QuestionCard({ question, selectedValue, onSelect }: QuestionCardProps) {
  return (
    <div className="bg-cream border border-black/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12">
      <p className="text-base sm:text-lg md:text-xl leading-relaxed text-dark-navy">
        <span className="font-bold mr-2">{question.id}.</span>
        <span className="font-serif">{question.text}</span>
      </p>
      <LikertScale
        questionId={question.id}
        selectedValue={selectedValue}
        onSelect={onSelect}
      />
    </div>
  );
}
