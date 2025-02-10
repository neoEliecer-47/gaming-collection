"use client";

import { useClickOutsideDetector } from "@/hooks/useClickOutsideDetector";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

interface filterType {
  id: number;
  name: string;
}

interface optionFilterProps {
  filterType: string;
  placeholder: string;
  filterTypeData: filterData[]
}

interface filterData {
  name: string;
  id: number;
}

const OptionFilter = ({ filterType, placeholder, filterTypeData }: optionFilterProps) => {
  const searchParams = useSearchParams();
  const [optionFilter, setOptionFilter] = useState<number | null>(null);
  const [filterData, setFilterData] = useState<filterType[]>([]);
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter();
  const { dropMenuRef, isClickOutside, setIsClickOutside } = useClickOutsideDetector()
  const countriesRef = useRef<HTMLUListElement | null>(null);


//console.log('component mounted')
  function handleFilterChange(key: string, value: number) {
    console.log('value: ', value)
    setOptionFilter(value)
    //   ...prev: value[]
      
    // ))
    console.log('handle', key, value)
    console.log('option filter: ', optionFilter)
    const params = new URLSearchParams(searchParams);
    // if(value === 'clear') {
      
    //   console.log('HEREEEEEEEEEE')  
    //   params.delete(key)
    //   router.push(`?${params.toString()}`, { scroll: false });
    //   return
    // }
    if (optionFilter === value) {
      params.delete(key);
        setOptionFilter(null)
    } else {
        setOptionFilter(value)
        params.set(key, value.toString());
    }

    router.push(`?${params.toString()}`, { scroll: false });
  }


  function clearFilter(type: string){
    const params = new URLSearchParams(searchParams);
    if(params){
      params.delete(type)
    }
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


  //  useEffect(()=>{    const valueFromSearchParams = searchParams.get(filterType)
  //   console.log('VALUE EFFECT', valueFromSearchParams)
  //   if(valueFromSearchParams) setOptionFilter(valueFromSearchParams)
  //  }, [searchParams, filterType])

  return (
<section
        className="cursor-pointer p-0 mt-2 shadow-md z-20 "
        ref={dropMenuRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <button className="capitalize hover:bg-white/65 relative flex justify-center w-[12rem] text-[1rem] py-[10px] transition-all duration-300 ease-linear bg-gray-200 rounded-[5px]">
          {placeholder}
        </button>

        <ul
          className={`max-h-[10rem] z-10 bg-transparent absolute m-auto w-[12rem] rounded-[0.5rem] transition-all duration-250 ease-linear shadow-sm overflow-scroll overflow-x-hidden overflow-y-auto`}
          ref={countriesRef}
          style={{
            height:
              isOpen === false
                ? "0px"
                : `${countriesRef.current?.scrollHeight}px`,
            maxHeight: `${isOpen === true ? "10rem" : "0rem"}`,
            scrollbarWidth: "none",
          }}
        >
          {filterTypeData.map(({ name, id }, index) => {
            return (
              <div
                key={id}
                onClick={() => handleFilterChange(filterType, id)}
                className="z-10 bg-white m-0 flex justify-between items-center md:hover:bg-red-100 transition-all"
              >
                <li
                  className={`${
                    optionFilter === id
                      ? "bg-blue-300"
                      : "bg-white/35"
                  } rounded-md text-center w-full m-0 p-2 border-[2px] border-red-100 `}
                >
                  {name}
                </li>
              </div>
            );
          })}
        </ul>
      </section>
  );
};

export default OptionFilter;
