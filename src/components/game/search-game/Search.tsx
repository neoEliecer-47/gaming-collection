"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="p-0 m-0">
      <input
        type="text"
        placeholder="Search game..."
        className=" p-2 m-0 rounded-lg bg-transparent backdrop-blur-[5px] border-[1px] border-gray-800"
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
