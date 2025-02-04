"use client";

import { useRef, useState } from "react";

const GameAbout = ({ description }: { description: string }) => {
  const [hiddenText, setHiddenText] = useState<boolean>(true);
  const aboutRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className="w-full h-fit overflow-hidden"
      onClick={() => setHiddenText(!hiddenText)}
    >
      <h1 className="text-white text-center text-2xl font-bold">About</h1>
      <div
        ref={aboutRef}
        className={`text-white bg-black`}
        style={{
          height: hiddenText ? "7.5rem" : `${aboutRef.current?.scrollHeight}px`,
        }}
      >
        {/* <div className="text-white" dangerouslySetInnerHTML={{ __html: description }} />  */}
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="p-0 m-0 flex items-center justify-end">
        <button className="text-white bg-green-500">
          {hiddenText ? "...Read more" : "Show less"}
        </button>
      </div>
    </div>
  );
};

export default GameAbout;
