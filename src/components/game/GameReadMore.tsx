"use client";

import { useEffect, useRef, useState } from "react";

const GameReadMore = ({
  description,
  title,
  initialHeight = 7.5,
  dangerousHtml = true,
  duration = 300,
  maxLength = 132
}: {
  description: string;
  title?: string;
  initialHeight: number;
  dangerousHtml?: boolean;
  duration?: number,
  maxLength?: number
}) => {
  const [hiddenText, setHiddenText] = useState<boolean>(true);
  const [dynamicHeight, setDynamicHeight] = useState('70px')
  const readMoreRef = useRef<HTMLDivElement>(null);

  
  const shouldTruncate = description.length > maxLength;
  function buildText(){
    const truncatedText = description.slice(0, maxLength);
    const dots =shouldTruncate && hiddenText && "..."
return (hiddenText ? truncatedText : description) + dots
  }

  useEffect(()=>{
    setTimeout(()=>{
      setDynamicHeight(hiddenText ? `70px` : `${readMoreRef.current?.scrollHeight}px`)
    }, 0)
  }, [hiddenText])

  return (
    <div
      className="w-full h-fit overflow-hidden mb-4 bg-blue-300 py-2"
      onClick={() => !hiddenText && setHiddenText(!hiddenText)}
    >
     
      <div
        ref={readMoreRef}
        className={`relative inline-flex justify-center text-white w-full bg-black transition-all duration-${duration} ease-in-out overflow-hidden`}
        style={{
          height: dynamicHeight
           
         
        }}
      >
        <div className="relative text-white w-full h-fit" dangerouslySetInnerHTML={{__html: buildText()}} >
       
         {/* {shouldTruncate && hiddenText && "..."}   */}
        </div>
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
