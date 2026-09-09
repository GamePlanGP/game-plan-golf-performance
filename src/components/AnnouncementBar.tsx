"use client";

import { usePathname } from "next/navigation";
import { NEW_CLIENT_SPECIAL_URL } from "@/lib/constants";

// Pages that display the announcement bar. The Header offsets itself by the
// bar's height (h-10) on these same routes — keep the two lists in sync.
const ANNOUNCEMENT_ROUTES = ["/", "/lessons"];

export default function AnnouncementBar() {
  const pathname = usePathname();
  if (!ANNOUNCEMENT_ROUTES.includes(pathname)) return null;

  return (
    <a
      href={NEW_CLIENT_SPECIAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-0 inset-x-0 z-[60] flex h-10 items-center justify-center gap-2 overflow-hidden whitespace-nowrap bg-brand-green px-4 text-center text-white transition-colors hover:bg-brand-green-hover"
    >
      <span className="truncate text-xs font-semibold sm:text-sm">
        <span className="font-bold uppercase tracking-wide">New Client Special</span>
        <span className="hidden sm:inline">
          {" "}
          — 3 lessons with Christian, $99/lesson ($297 total). New clients only.
        </span>
        <span className="sm:hidden"> — 3 lessons, $99/lesson</span>
      </span>
      <svg
        className="h-4 w-4 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </a>
  );
}
