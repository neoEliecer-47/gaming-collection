"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface filterType {
  id: number;
  name: string;
}

const OptionFilter = ({ filterType }: { filterType: string }) => {
  const searchParams = useSearchParams();
  const [optionFilter, setOptionFilter] = useState(()=> searchParams.get(filterType) || '');
  const [filterData, setFilterData] = useState<filterType[]>([]);
  const router = useRouter();
console.log('component mounted')
  function handleFilterChange(key: string, value: string) {
    //setOptionFilter(value)
    console.log('handle', key, value)
    
    const params = new URLSearchParams(searchParams);
    if (optionFilter === value) {
        params.delete(key);
        setOptionFilter('')
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

      } catch (error) {}
    }
    fetchFilters();
  }, [filterType]);


   useEffect(()=>{    const valueFromSearchParams = searchParams.get(filterType)
    console.log('VALUE EFFECT', valueFromSearchParams)
    if(valueFromSearchParams) setOptionFilter(valueFromSearchParams)
   }, [searchParams, filterType])

  return (
    <select
      value={optionFilter ?? ''}
      onChange={(e) => handleFilterChange(filterType, e.target.value)}
      className="max-h-[5rem] capitalize"
      
    >
        <option value="" disabled={optionFilter !== null} className="capitalize h-4">{filterType}</option>
        <button className="p-1 bg-green-500 text-white">clear</button>
        {filterData.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
    </select>
  );
};

export default OptionFilter;
