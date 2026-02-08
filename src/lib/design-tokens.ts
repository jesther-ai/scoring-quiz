// ─── Brand Colors ────────────────────────────────────────────────────────────

export const colors = {
  teal: "#23CEBC",
  tealButton: "#46C4B5",
  tealButtonHover: "#3aa89b",
  darkNavy: "#2C2F44",
  darkTeal: "#334445",
  yellow: "#FECE00",
  goldAccent: "#E3C440",
  cream: "#FFF8D9",
  tan: "#F0EAD6",
  badgeGray: "#EAEAEA",
  borderGray: "#e5e5e5",
  orange: "#EE9133",
} as const;

// ─── Answer Button Opacity Variants (applied to goldAccent #E3C440) ─────────

export const answerOpacity = {
  unselected: 0.28,
  hover: 0.4,
  selected: 0.5,
} as const;

// ─── Typography ──────────────────────────────────────────────────────────────

export const fonts = {
  serif: "Lyon Text",
  sans: "Sailec",
  serifFallback: "Playfair Display",
  sansFallback: "DM Sans",
  stack:
    "Lyon Text, Sailec, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
} as const;

export const fontSizes = {
  smallLabel: "11px",
  label: "13px",
  quizBody: "15px",
  quizBodyLg: "18px",
  sectionHeading: "24px",
  sectionHeadingLg: "30px",
  headingXl: "38px",
  heroTitle: "52px",
  heroTitleLg: "60px",
} as const;

// ─── Button Styles ───────────────────────────────────────────────────────────

export const button = {
  shape: "rounded-full",
  padding: "py-5 px-12",
  text: "font-bold uppercase tracking-wider",
} as const;

// ─── Answer Circles ──────────────────────────────────────────────────────────

export const answerCircle = {
  size: "w-16 h-16",
  shape: "rounded-full",
} as const;

// ─── Question Cards ──────────────────────────────────────────────────────────

export const questionCard = {
  background: colors.cream,
  border: "border-black/10",
  borderRadius: "rounded-2xl sm:rounded-3xl",
  padding: "p-5 sm:p-8 md:p-12",
} as const;

// ─── Tab Navigation ──────────────────────────────────────────────────────────

export const tabNav = {
  active: "text-black",
  activeUnderline: "h-2 sm:h-2.5 bg-black rounded-full",
  inactive: "text-black/70",
  text: "uppercase tracking-[0.1em]",
} as const;

// ─── Progress Bar ────────────────────────────────────────────────────────────

export const progressBar = {
  activeColor: colors.yellow,
  inactiveOpacity: 0.3,
  height: "h-3",
} as const;
