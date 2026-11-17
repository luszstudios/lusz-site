// The LUSZ eight-point star, drawn as a shape so it takes any colour and size.
export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <polygon
        fill="currentColor"
        points="100,50 70.3,58.4 85.4,85.4 58.4,70.3 50,100 41.6,70.3 14.6,85.4 29.7,58.4 0,50 29.7,41.6 14.6,14.6 41.6,29.7 50,0 58.4,29.7 85.4,14.6 70.3,41.6"
      />
    </svg>
  );
}
