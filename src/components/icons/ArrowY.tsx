const ArrowY = ({ className = '', duration = 0.3, strokeWidth = 1.5 }: { className?: string, duration?: 0.3 |0.5| 1, strokeWidth?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={`size-5 transition-all ${className}`}
      style={{ transitionDuration: `${duration}s` }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

export default ArrowY;
