const LoadingSpinner = () => {
  return (
    <div className="w-[1rem] h-[0.5rem] p-0 m-0">
      <svg
        fill="#fff"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: '1rem', width: '1rem' }}
      >
        <path d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z">
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="0.75s"
            values="0 12 12;360 12 12"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

export default LoadingSpinner;
