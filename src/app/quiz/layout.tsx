"use client";

import { QuizProvider } from "@/hooks/useQuizState";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuizShell from "@/components/quiz/QuizShell";

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return (
    <QuizProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <QuizShell>{children}</QuizShell>
        </div>
        <Footer />
      </div>
    </QuizProvider>
  );
}
