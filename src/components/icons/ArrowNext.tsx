const ArrowRightIcon = ({ className = '', strokeWidth = 2.5 }: { className?: string, strokeWidth?: number }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={strokeWidth}
        stroke="white"
        className={`size-6 transition-all duration-300 ${className}`}
        style={{ width: "1.5rem", height: "1.5rem" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    );
  };
  
  export default ArrowRightIcon;