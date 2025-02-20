"use client";

import Delete from "@/components/icons/Delete";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const params = new URLSearchParams(searchParams);

  function handleClearInput() {
    if (inputRef.current) {
      params.delete("query");
      inputRef.current.value = "";
      replace(`${pathname}?${params.toString()}`);
    }
  }

  const handleSearch = useDebouncedCallback((term: string) => {
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="relative p-0 m-0">
      <input
        type="text"
        ref={inputRef}
        placeholder="Search game..."
        className=" p-[0.3rem] m-0 max-w-[12rem] rounded-lg bg-white/90 backdrop-blur-[3px] border-[1px] border-gray-400 text-black focus:border-green-600 focus:border-[2px] focus:outline-none"
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
      />
      
      <button
        onClick={handleClearInput}
        className="absolute overflow-hidden w-6 h-6 leading-none flex-shrink-0 flex items-center justify-center rounded-full top-[0.40rem] right-2 bg-green-600 text-md p-0 m-0 text-justify border-none focus:outline-none text-white"
      >
        <Delete />
      </button>
     
      
    </div>
  );
};

export default Search;
