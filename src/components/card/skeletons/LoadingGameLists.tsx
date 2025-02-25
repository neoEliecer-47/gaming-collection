const LoadingGameLists = () => {
    
  return (
    <div className="w-[5rem] h-[3rem] p-0 m-0">
        <svg
      fill="hsl(228, 97%, 42%)"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
    >
      <ellipse cx="12" cy="5" rx="4" ry="4">
        <animate
          id="spinner_jbYs"
          begin="0;spinner_JZdr.end"
          attributeName="cy"
          calcMode="spline"
          dur="0.375s"
          values="5;20"
          keySplines=".33,0,.66,.33"
          fill="freeze"
        />
        <animate
          begin="spinner_jbYs.end"
          attributeName="rx"
          calcMode="spline"
          dur="0.05s"
          values="4;4.8;4"
          keySplines=".33,0,.66,.33;.33,.66,.66,1"
        />
        <animate
          begin="spinner_jbYs.end"
          attributeName="ry"
          calcMode="spline"
          dur="0.05s"
          values="4;3;4"
          keySplines=".33,0,.66,.33;.33,.66,.66,1"
        />
        <animate
          id="spinner_ADF4"
          begin="spinner_jbYs.end"
          attributeName="cy"
          calcMode="spline"
          dur="0.025s"
          values="20;20.5"
          keySplines=".33,0,.66,.33"
        />
        <animate
          id="spinner_JZdr"
          begin="spinner_ADF4.end"
          attributeName="cy"
          calcMode="spline"
          dur="0.4s"
          values="20.5;5"
          keySplines=".33,.66,.66,1"
        />
      </ellipse>
    </svg>
    </div>
  );
};

export default LoadingGameLists;
