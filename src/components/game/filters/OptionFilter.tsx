"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface filterType {
  id: number;
  name: string;
}

const OptionFilter = ({ filterType }: { filterType: string }) => {
  const searchParams = useSearchParams();
  const [optionFilter, setOptionFilter] = useState<string | null>(null);
  const [filterData, setFilterData] = useState<filterType[]>([]);
  const router = useRouter();

  function handleFilterChange(key: string, value: string) {
    
    const params = new URLSearchParams(searchParams);
    if (optionFilter === value) {
        params.delete(key);
        setOptionFilter(null)
    } else {
        setOptionFilter(value)
        params.set(key, value);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  }

  useEffect(() => {
    async function fetchFilters() {
      try {
        const res = await fetch(`/api/games/filter?type=${filterType}`);
        const data = await res.json();
        setFilterData(data);

        const existingFilter = searchParams.get(filterType)
        setOptionFilter(existingFilter || null)
      } catch (error) {}
    }
    fetchFilters();
  }, [filterType]);

  return (
    <select
      value={optionFilter ?? ''}
      onChange={(e) => handleFilterChange(filterType, e.target.value)}
      className="max-h-[5rem]"
    >
        <option value="" disabled={optionFilter !== null} className="capitalize">{filterType}</option>
      {filterData.length > 0 &&
        filterData.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
    </select>
  );
};

export default OptionFilter;
