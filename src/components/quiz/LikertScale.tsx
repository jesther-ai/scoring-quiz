"use client";

import { Heart, ThumbsUp, ThumbsDown, HeartCrack } from "lucide-react";
import { likertScale } from "@/lib/quiz-data";

const iconMap = {
  heart: Heart,
  thumbsUp: ThumbsUp,
  thumbsDown: ThumbsDown,
  heartCrack: HeartCrack,
} as const;

interface LikertScaleProps {
  questionId: number;
  selectedValue: number | undefined;
  onSelect: (value: number) => void;
}

export default function LikertScale({ questionId, selectedValue, onSelect }: LikertScaleProps) {
  return (
    <fieldset className="flex flex-col gap-3 mt-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {likertScale.map(({ value, label, icon }) => {
          const isSelected = selectedValue === value;
          const Icon = iconMap[icon];
          return (
            <label
              key={value}
              className="flex flex-col items-center gap-1.5 cursor-pointer group"
            >
              <input
                type="radio"
                name={`question-${questionId}`}
                value={value}
                checked={isSelected}
                onChange={() => onSelect(value)}
                className="sr-only"
              />
              <span
                className={`w-16 h-16 rounded-xl flex items-center justify-center border-2 transition-all duration-200 ${
                  isSelected
                    ? "bg-gold-accent/50 border-gold-accent shadow-md"
                    : "bg-gold-accent/[0.28] border-transparent group-hover:bg-gold-accent/40"
                }`}
              >
                <Icon className="w-7 h-7 text-dark-navy/70 transition-transform duration-200 group-hover:scale-105" />
              </span>
              <span className="text-xs sm:text-[13px] text-center text-black/60 font-medium leading-tight">
                {label}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
