"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import {
  calculateScore,
  getResultBand,
  questions,
  type ResultBand,
} from "@/lib/quiz-data";
import { saveQuizResult } from "@/lib/save-quiz-result";

interface QuizState {
  answers: Record<number, number>;
  totalScore: number | null;
  resultBand: ResultBand | null;
  isComplete: boolean;
  answeredCount: number;
  setAnswer: (questionId: number, value: number) => void;
  submitQuiz: () => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizState | null>(null);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [totalScore, setTotalScore] = useState<number | null>(null);
  const [resultBand, setResultBand] = useState<ResultBand | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === questions.length;

  const setAnswer = useCallback((questionId: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }, []);

  const submitQuiz = useCallback(() => {
    if (submitted) return;
    setSubmitted(true);

    const score = calculateScore(answers);
    const band = getResultBand(score) ?? null;
    setTotalScore(score);
    setResultBand(band);

    if (band) {
      saveQuizResult({
        sessionId: crypto.randomUUID(),
        answers,
        totalScore: score,
        resultBand: band.label,
      });
    }
  }, [answers, submitted]);

  const resetQuiz = useCallback(() => {
    setAnswers({});
    setTotalScore(null);
    setResultBand(null);
    setSubmitted(false);
  }, []);

  const value = useMemo(
    () => ({
      answers,
      totalScore,
      resultBand,
      isComplete,
      answeredCount,
      setAnswer,
      submitQuiz,
      resetQuiz,
    }),
    [answers, totalScore, resultBand, isComplete, answeredCount, setAnswer, submitQuiz, resetQuiz]
  );

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuizState() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizState must be used within a QuizProvider");
  }
  return context;
}
