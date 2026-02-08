"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import AboutTab from "@/components/quiz/AboutTab";
import QuizTab from "@/components/quiz/QuizTab";
import ResultsTab from "@/components/quiz/ResultsTab";
import ReferencesTab from "@/components/quiz/ReferencesTab";

const tabs: Record<string, React.ComponentType> = {
  about: AboutTab,
  quiz: QuizTab,
  results: ResultsTab,
  references: ReferencesTab,
};

export default function QuizTabPage({ params }: { params: Promise<{ tab: string }> }) {
  const { tab } = use(params);

  const TabComponent = tabs[tab];
  if (!TabComponent) {
    notFound();
  }

  return <TabComponent />;
}
