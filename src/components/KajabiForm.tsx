"use client";

import { useEffect, useRef } from "react";

// Kajabi's embed script self-injects the form markup adjacent to its own
// <script> tag. Rendering that tag through JSX won't run it (React ignores
// script tags), and next/script loads it detached from the DOM, which breaks
// the embed's self-positioning. Appending the script into a container ref
// makes Kajabi render the form exactly where we want it.
const KAJABI_EMBED_SRC =
  "https://www.gameplangolfperformance.com/forms/2148716689/embed.js";

export default function KajabiForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Guard against React Strict Mode's double-invoked effects and against
    // client-side navigations re-mounting the component.
    if (container.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = KAJABI_EMBED_SRC;
    script.async = true;
    container.appendChild(script);

    return () => {
      // Clear anything Kajabi injected so a remount starts from a clean slate.
      container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="kajabi-form-embed" />;
}
