import { supabase } from "./supabase";

interface SaveQuizResultParams {
  sessionId: string;
  answers: Record<number, number>;
  totalScore: number;
  resultBand: string;
}

export async function saveQuizResult({
  sessionId,
  answers,
  totalScore,
  resultBand,
}: SaveQuizResultParams): Promise<void> {
  try {
    if (process.env.NODE_ENV === "development") {
      console.log("Saving quiz result...", { score: totalScore, band: resultBand, sessionId });
    }

    const { error } = await supabase.from("quiz_results").insert({
      session_id: sessionId,
      answers,
      total_score: totalScore,
      result_band: resultBand,
    });

    if (error) {
      console.error("Supabase insert error:", error.message);
    } else {
      if (process.env.NODE_ENV === "development") {
        console.log("Quiz result saved successfully");
      }
    }
  } catch (err) {
    console.error("Network error saving quiz result:", err);
  }
}
