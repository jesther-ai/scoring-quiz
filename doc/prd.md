# Growth vs. Fixed Mindset Quiz — Product Requirements Document

## 1. Overview

A web-based self-assessment quiz that measures where a user falls on the growth-to-fixed mindset spectrum. Users answer 20 questions on a 4-point agreement scale and receive an instant result showing their mindset category and score.

**Target audience:** Students, corporate teams, educators, and the general public.

## 2. Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Database | Supabase (PostgreSQL) |
| Deployment | Vercel |

## 3. Quiz Structure

### 3.1 Questions
- 20 questions total, displayed **all at once** on a single scrollable page.
- Each question uses a **4-point Likert scale**:
  - Strongly Disagree = 1
  - Disagree = 2
  - Agree = 3
  - Strongly Agree = 4
- Question wording is flexible; only the scoring direction (normal vs. reverse) is fixed.

### 3.2 Scoring Direction

| Question ID | Scoring |
|-------------|---------|
| 1, 3, 4, 7, 10, 11, 14, 15, 18, 19 | Normal |
| 2, 5, 6, 8, 9, 12, 13, 16, 17, 20 | Reverse |

- **Normal:** score = answer value (1–4)
- **Reverse:** score = 5 − answer value

### 3.3 Score Calculation
1. Apply normal or reverse scoring to each of the 20 answers.
2. Sum all 20 scored values → **total score** (range: 20–80).

### 3.4 Result Bands

| Total Score | Category |
|-------------|----------|
| 60–80 | Strong Growth Mindset |
| 45–59 | Growth Mindset with some Fixed ideas |
| 28–44 | Fixed Mindset with some Growth ideas |
| 20–27 | Strong Fixed Mindset |

## 4. User Flow

1. **Landing page** — Brief intro + "Start Quiz" CTA.
2. **Quiz page** — All 20 questions on one scrollable page. Submit button at the bottom (disabled until all questions answered).
3. **Results page** — Shows the user's total score, mindset category, and a brief description of what the category means. Option to retake the quiz.

## 5. Data Persistence

- Each completed attempt is saved to **Supabase** with:
  - Anonymous session ID (auto-generated)
  - Individual answer values (Q1–Q20)
  - Computed total score
  - Result category
  - Timestamp
- No user authentication required.

## 6. Non-Functional Requirements

- Mobile-responsive design (Tailwind breakpoints).
- Client-side score calculation for instant feedback; saved to DB asynchronously.
- Accessible (semantic HTML, keyboard navigable, sufficient color contrast).

## 7. Out of Scope (v1)

- User accounts / authentication
- Admin dashboard / analytics
- Email or PDF export of results
- Embeddable widget mode
- Progress saving (partial completion)
