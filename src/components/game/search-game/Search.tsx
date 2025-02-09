"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null)

  function handleClearInput(){
    if(inputRef.current){
      inputRef.current.value = ''
    }
  }

  const handleSearch= useDebouncedCallback((term: string)=> {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500)

  return (
    <div className="p-0 m-0">
      <input
        type="text"
        ref={inputRef}
        placeholder="Search game..."
        className="relative p-2 m-0 rounded-lg bg-transparent backdrop-blur-[5px] border-[1px] border-gray-800"
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button onClick={handleClearInput} className="absolute z-10 cursor-pointer right-20 top-[1rem] p-1 bg-green-500 text-xl font-bold">X</button>
    </div>
  );
};

export default Search;
