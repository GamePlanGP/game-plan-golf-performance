"use client";

import { useEffect, useRef } from "react";

// Kajabi's form embed renders itself by calling document.write() while the
// browser parses the host page. That works on a plain HTML page, where the
// <script> is parser-inserted, but document.write() is a silent no-op once the
// document has finished loading — which is always the case in a client-side
// React app. So the naive approaches all fail: a <script> tag in JSX never
// runs, next/script runs too late, and appending the script in an effect runs
// it after load, where its document.write() output is discarded.
//
// To make it work we temporarily intercept document.write()/writeln() while the
// embed script executes, capture the HTML it emits, and inject that HTML into
// our own container — re-creating any <script> tags so they actually run.
const KAJABI_EMBED_SRC =
  "https://www.gameplangolfperformance.com/forms/2148716689/embed.js";

export default function KajabiForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Guard against React Strict Mode's double-invoked effects and re-mounts on
    // client-side navigation, either of which would load the form twice.
    if (container.dataset.kajabiLoaded) return;
    container.dataset.kajabiLoaded = "true";

    const originalWrite = document.write;
    const originalWriteln = document.writeln;
    let captured = "";

    const restore = () => {
      document.write = originalWrite;
      document.writeln = originalWriteln;
    };

    // Injects captured markup, re-creating <script> elements so the browser
    // executes them (innerHTML alone never runs scripts).
    const injectCaptured = () => {
      if (!captured) return;
      const staging = document.createElement("div");
      staging.innerHTML = captured;
      Array.from(staging.childNodes).forEach((node) => {
        if (node.nodeName === "SCRIPT") {
          const original = node as HTMLScriptElement;
          const script = document.createElement("script");
          for (const attr of Array.from(original.attributes)) {
            script.setAttribute(attr.name, attr.value);
          }
          script.text = original.text;
          container.appendChild(script);
        } else {
          container.appendChild(node);
        }
      });
    };

    document.write = (...args: string[]) => {
      captured += args.join("");
    };
    document.writeln = (...args: string[]) => {
      captured += args.join("") + "\n";
    };

    const embed = document.createElement("script");
    embed.src = KAJABI_EMBED_SRC;
    // Keep execution ordered so our onload fires only after the embed's
    // synchronous document.write() calls have run.
    embed.async = false;
    embed.onload = () => {
      restore();
      injectCaptured();
    };
    embed.onerror = restore;

    container.appendChild(embed);

    return () => {
      // Safety net: never leave document.write patched if the effect tears down
      // before the script finishes loading.
      restore();
    };
  }, []);

  return <div ref={containerRef} className="kajabi-form-embed" />;
}
