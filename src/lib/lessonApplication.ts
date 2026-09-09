export type ApplicationField = {
  /** Form field name — also the key read back by the inquiry server action. */
  name: string;
  label: string;
  /** Rendered as a <select> when options are present, otherwise a text input. */
  options?: string[];
  placeholder?: string;
  required?: boolean;
};

// Screening questions shown on the lesson application. Shared by InquiryModal
// (which renders them) and the inquiry server action (which puts them in the
// notification email), so the two can't drift apart.
export const LESSON_APPLICATION_FIELDS: ApplicationField[] = [
  {
    name: "handicap",
    label: "Handicap index or average score",
    placeholder: "e.g. 12.4, or “shoots low 90s”",
    required: true,
  },
  {
    name: "playing_experience",
    label: "How long have you been playing?",
    options: ["Less than 1 year", "1–3 years", "3–10 years", "10+ years"],
    required: true,
  },
  {
    name: "primary_goal",
    label: "Primary goal",
    options: [
      "Break a scoring barrier",
      "Compete in tournaments",
      "Rebuild my swing",
      "More consistency",
      "Add distance",
      "Other",
    ],
    required: true,
  },
  {
    name: "availability",
    label: "Preferred days & times",
    placeholder: "e.g. weekday mornings",
    required: true,
  },
  {
    name: "current_member",
    label: "Current Game Plan member?",
    options: ["Yes", "No"],
    required: true,
  },
];
