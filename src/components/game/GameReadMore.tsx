"use client";

import { useEffect, useRef, useState } from "react";

const GameReadMore = ({
  description,
  title,
  initialHeight = 7.5,
  dangerousHtml = true,
  duration = 300,
  maxLength = 120
}: {
  description: string;
  title?: string;
  initialHeight: number;
  dangerousHtml?: boolean;
  duration?: number,
  maxLength?: number
}) => {
  const [hiddenText, setHiddenText] = useState<boolean>(true);
  const [dynamicHeight, setDynamicHeight] = useState('75px')
  const readMoreRef = useRef<HTMLDivElement>(null);

  const truncatedText = description.slice(0, maxLength);
  const shouldTruncate = description.length > maxLength;

  useEffect(()=>{
    setTimeout(()=>{
      setDynamicHeight(hiddenText ? `75px` : `${readMoreRef.current?.scrollHeight}px`)
    }, 0)
  }, [hiddenText])

  return (
    <div
      className="w-full h-fit overflow-hidden mb-4"
      onClick={() => !hiddenText && setHiddenText(!hiddenText)}
    >
      <h1 className="text-white text-center text-2xl font-bold">{title}</h1>
      <div
        ref={readMoreRef}
        className={`relative inline-flex justify-center text-white w-full bg-black transition-all duration-${duration} ease-in-out overflow-hidden`}
        style={{
          height: dynamicHeight
           
         
        }}
      >
        <p className="relative text-white w-full h-fit">
       {hiddenText ? truncatedText : description}
        {shouldTruncate && hiddenText && "..."} 
        </p>
        {hiddenText && (
       
          <button
          onClick={() => setHiddenText(!hiddenText)}
          className="text-blue-500 absolute right-0 bottom-0 text-xs bg-green-300 h-[30%] hover:text-blue-700 focus:outline-none whitespace-nowrap"
        >
          {hiddenText && "Read More"}
        </button>
        

      )}
      
        {/* {dangerousHtml ? (
          <div
            className="text-white overflow-hidden"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ) : (
          <p className="text-white overflow-hidden">{description}</p>
        )} */}
      </div>
      
        {/* <button className="absolute top-[10.2rem] right-2 text-white bg-green-500">
          {hiddenText && "Read more"}
        </button> */}
      
    </div>
  );
};

export default GameReadMore;
