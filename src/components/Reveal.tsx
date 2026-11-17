import type { CSSProperties, ReactNode } from "react";

// Fades and lifts its content into place as it scrolls into view.
// Pure CSS (see .reveal in globals.css): content stays visible in browsers
// without scroll-driven animations and for people who prefer reduced motion.
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`reveal ${className}`} style={{ "--reveal-shift": `${28 + delay * 200}px` } as CSSProperties}>
      {children}
    </div>
  );
}
