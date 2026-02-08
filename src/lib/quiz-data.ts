export type ScoringDirection = "normal" | "reverse";

export interface QuizQuestion {
  id: number;
  text: string;
  scoring: ScoringDirection;
}

/**
 * Normal scoring:  score = answer value (1–4)
 * Reverse scoring: score = 5 − answer value
 *
 * Normal IDs:  1, 3, 4, 7, 10, 11, 14, 15, 18, 19
 * Reverse IDs: 2, 5, 6, 8, 9, 12, 13, 16, 17, 20
 */
export const questions: QuizQuestion[] = [
  {
    id: 1,
    text: "With enough time and effort, I can get much better at almost any skill.",
    scoring: "normal",
  },
  {
    id: 2,
    text: "People's basic level of intelligence stays about the same throughout their lives.",
    scoring: "reverse",
  },
  {
    id: 3,
    text: "Feedback, even when it's hard to hear, helps me improve my abilities.",
    scoring: "normal",
  },
  {
    id: 4,
    text: "I can train myself to get better at handling challenges and setbacks.",
    scoring: "normal",
  },
  {
    id: 5,
    text: "If I'm not good at something right away, it usually means it's not for me.",
    scoring: "reverse",
  },
  {
    id: 6,
    text: "Natural talent is the main reason some people succeed more than others.",
    scoring: "reverse",
  },
  {
    id: 7,
    text: "When I struggle with something, I see it as a sign that my brain is working and growing.",
    scoring: "normal",
  },
  {
    id: 8,
    text: "How talented you are matters more than how much effort you put in.",
    scoring: "reverse",
  },
  {
    id: 9,
    text: "No matter what I do, there are certain areas where I'll never improve much.",
    scoring: "reverse",
  },
  {
    id: 10,
    text: "When I see someone perform better than me, it makes me curious about what I can learn.",
    scoring: "normal",
  },
  {
    id: 11,
    text: "If I keep practicing a skill in a smart way, I expect to see progress over time.",
    scoring: "normal",
  },
  {
    id: 12,
    text: "Some people are just 'math people' or 'language people,' and I'm not likely to change.",
    scoring: "reverse",
  },
  {
    id: 13,
    text: "If I fail at something important, it shows I don't have what it takes.",
    scoring: "reverse",
  },
  {
    id: 14,
    text: "I can always find strategies to improve, even when I feel stuck.",
    scoring: "normal",
  },
  {
    id: 15,
    text: "Learning new strategies can significantly change how well I perform at difficult tasks.",
    scoring: "normal",
  },
  {
    id: 16,
    text: "When I make mistakes, it mostly proves I've reached my limits.",
    scoring: "reverse",
  },
  {
    id: 17,
    text: "Some people are born to be leaders or creators; others will never reach that level.",
    scoring: "reverse",
  },
  {
    id: 18,
    text: "I believe my abilities can grow with effort, feedback, and persistence.",
    scoring: "normal",
  },
  {
    id: 19,
    text: "When something is hard for me, I see it as an opportunity to become stronger.",
    scoring: "normal",
  },
  {
    id: 20,
    text: "Improvement is limited; after a certain point, you can't get much better at most things.",
    scoring: "reverse",
  },
];

export const likertScale = [
  { value: 4, label: "Strongly Agree", icon: "heart" },
  { value: 3, label: "Agree", icon: "thumbsUp" },
  { value: 2, label: "Disagree", icon: "thumbsDown" },
  { value: 1, label: "Strongly Disagree", icon: "heartCrack" },
] as const;

export interface ResultBand {
  min: number;
  max: number;
  label: string;
}

export const resultBands: ResultBand[] = [
  { min: 60, max: 80, label: "Strong Growth Mindset" },
  { min: 45, max: 59, label: "Growth Mindset with some Fixed ideas" },
  { min: 28, max: 44, label: "Fixed Mindset with some Growth ideas" },
  { min: 20, max: 27, label: "Strong Fixed Mindset" },
];

export function calculateScore(answers: Record<number, number>): number {
  return questions.reduce((total, q) => {
    const raw = answers[q.id];
    if (raw === undefined) return total;
    const scored = q.scoring === "reverse" ? 5 - raw : raw;
    return total + scored;
  }, 0);
}

export function getResultBand(score: number): ResultBand | undefined {
  return resultBands.find((band) => score >= band.min && score <= band.max);
}
