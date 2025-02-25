"use client";

import { useRef, useState } from "react";

const GameReadMore = ({
  description,
  title,
  initialHeight = 7.5,
  dangerousHtml = true,
}: {
  description: string;
  title?: string;
  initialHeight: number;
  dangerousHtml?: boolean;
}) => {
  const [hiddenText, setHiddenText] = useState<boolean>(true);
  const readMoreRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className="w-full h-fit overflow-hidden"
      onClick={() => setHiddenText(!hiddenText)}
    >
      <h1 className="text-white text-center text-2xl font-bold">{title}</h1>
      <div
        ref={readMoreRef}
        className={`text-white bg-black`}
        style={{
          height: hiddenText
            ? `${initialHeight}rem`
            : `${readMoreRef.current?.scrollHeight}px`,
        }}
      >
        {/* <div className="text-white" dangerouslySetInnerHTML={{ __html: description }} />  */}
        {dangerousHtml ? (
          <div
            className="text-white"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ) : (
          <p className="text-white">{description}</p>
        )}
      </div>
      <div className="p-0 m-0 flex items-center justify-end">
        <button className="text-white bg-green-500">
          {hiddenText ? "...Read more" : "Show less"}
        </button>
      </div>
    </div>
  );
};

export default GameReadMore;
