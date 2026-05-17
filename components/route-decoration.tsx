export function RouteDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20 100 Q60 40 100 100 T180 100"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="6 8"
        className="text-white"
      />
      <circle cx="20" cy="100" r="6" fill="currentColor" className="text-amber" />
      <circle cx="100" cy="100" r="5" fill="currentColor" className="text-turquoise" />
      <circle cx="180" cy="100" r="6" fill="currentColor" className="text-amber" />
      <path
        d="M165 85 L180 100 L165 115"
        stroke="currentColor"
        strokeWidth="2"
        className="text-white"
      />
    </svg>
  );
}
