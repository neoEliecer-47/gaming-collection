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
  platforms: Array<{
    name: string;
    id: number
  }>
}

const OptionFilter = ({ filterType, placeholder, filterTypeData }: optionFilterProps) => {
  const searchParams = useSearchParams();
  const [optionFilter, setOptionFilter] = useState<number | null>(null);
  const [filterData, setFilterData] = useState<filterType[]>([]);
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>(({}))
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

  function toggleSubmenus(platformName: string){
    console.log('plat', platformName)
    setOpenSubmenus((prev)=>({
      ...prev, [platformName]: !prev[platformName]
    }))
  }

  // useEffect(() => {
  //   async function fetchFilters() {
  //     try {
  //       const res = await fetch(`/api/games/filter?type=${filterType}`);
  //       const data = await res.json();
  //       setFilterData(data);

  //     } catch (error) {}
  //   }
  //   fetchFilters();
  // }, [filterType]);


  //  useEffect(()=>{    const valueFromSearchParams = searchParams.get(filterType)
  //   console.log('VALUE EFFECT', valueFromSearchParams)
  //   if(valueFromSearchParams) setOptionFilter(valueFromSearchParams)
  //  }, [searchParams, filterType])

  useEffect(() => {
    if (isClickOutside) {
      setIsOpen(false);
      setIsClickOutside(false);
    }
  }, [isClickOutside]);//to handle and close it when user clicks outside the element

  return (
<section
        className="cursor-pointer p-0 mt-2 shadow-md z-20 "
        ref={dropMenuRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <button className="capitalize hover:bg-white/65 relative flex justify-center w-[7rem] text-[1rem] py-[6px]  transition-all duration-300 ease-linear bg-gray-200 rounded-[5px]">
          {placeholder}
        </button>

        <ul
          className={`max-h-[10rem] z-10 bg-transparent absolute m-auto w-[12rem] rounded-[0.5rem] transition-all duration-250 ease-linear shadow-sm overflow-scroll overflow-y-auto`}
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
          {filterTypeData.map(({ name, id, platforms }, index) => {
            return (
              <div
                key={id}
                onClick={id !== 0 ? () => handleFilterChange(filterType, id) : ()=>null}
                className="z-10 relative bg-white m-0 flex justify-between items-center md:hover:bg-red-100 transition-all"
              >
                <li
                  className={`${
                    optionFilter === id
                      ? "bg-blue-300"
                      : "bg-white/35"
                  } flex gap-2 rounded-md text-center w-full m-0 p-2 border-[2px] border-red-100`}
                >
                  <p className="p-0 m-0">{name}</p>
                  {platforms?.length > 0 && (
                    <>
                      <p className="p-0 bg-black text-white" onClick={()=> toggleSubmenus(platforms[index]?.name)}>aaa</p>
                      {openSubmenus[platforms[index]?.name] && (
                        <ul className="absolute bottom-0 w-[8rem] -right-10 z-20 bg-green-300" onClick={()=> handleFilterChange(filterType, id)}>
                          {platforms.map(({ id, name })=>(
                            <li key={id} >{name}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              </div>
            );
          })}
        </ul>
      </section>
  );
};

export default OptionFilter;
