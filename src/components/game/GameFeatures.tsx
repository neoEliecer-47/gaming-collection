"use client";

import { buildDate } from "@/utils";

const GameFeatures = ({ label, data }: { label: string; data: any }) => {
  if (!data) return null;

  let content;

  if (Array.isArray(data)) {
    //it handles any array of objects
    content = data.map((item, index) => (
      <span key={item?.id || index}>
        {item.name || item.platform.name}
        {index < data.length - 1 ? ", " : ""}
      </span>
    ));
  } else if (typeof data === "object") {
    //to handle single objects
    content = data.name || "";
  } else {
    //to handle primitive values
    if(label === 'release date'){
        return content = buildDate(data)
    }
    content = data;
  }

  return (
    <div className="flex flex-col mb-2">
      <h2 className="text-gray-500 text-sm capitalize p-0">{label}</h2>
      <div
        className={`text-white ${
          typeof content === "number" &&
          "flex items-center justify-center text-green-300 rounded-full w-[2.6rem] p-2 border mt-1"
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default GameFeatures;
