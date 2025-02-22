"use client";

import ArrowY from "@/components/icons/ArrowY";
import { useClickOutsideDetector } from "@/hooks/useClickOutsideDetector";
import { useRouter, useSearchParams } from "next/navigation";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface optionFilterProps {
  filterType: string;
  placeholder: string;
  filterTypeData: filterData[];
}

interface filterData {
  name: string;
  id: number | string;
  platforms: Array<{
    name: string;
    id: number | string;
  }>;
}

const OptionFilter = ({
  filterType,
  placeholder,
  filterTypeData,
}: optionFilterProps) => {
  const searchParams = useSearchParams();
  const [optionFilter, setOptionFilter] = useState<number | string>("");
  const [optionName, setOptionName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const router = useRouter();
  const { dropMenuRef, isClickOutside, setIsClickOutside } =
    useClickOutsideDetector();
  const countriesRef = useRef<HTMLUListElement | null>(null);
  const submenuRef = useRef<HTMLLIElement | null>(null);

  //console.log('component mounted')
  const handleFilterChange = useCallback(
    (key: string, value: number | string) => {
      //console.log("value: ", value);
      setOptionFilter(value);

      const params = new URLSearchParams(searchParams);

      if (optionFilter === value) {
        params.delete(key);
        setOptionFilter("");
      } else {
        setOptionFilter(value);
        params.set(key, value.toString());
      }

      router.push(`?${params.toString()}`, { scroll: false });
    },
    [searchParams, router]
  );

  const toggleSubmenus = useCallback((platformName: string) => {
    console.log("plat", platformName);
    setOpenSubmenus((prev) => ({
      [platformName]: !prev[platformName],
    }));
  }, []);

  useEffect(() => {
    if (isClickOutside) {
      setIsOpen(false);
      setIsClickOutside(false);
    }
  }, [isClickOutside]); //to handle and close it when user clicks outside the element

  const filteredData = useMemo(() => filterTypeData, [filterTypeData]); //to prevent unnecessary recalculations.

  return (
    <section
      className="cursor-pointer p-0 mt-2 shadow-md z-20 "
      ref={dropMenuRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`capitalize font-bold hover:bg-white/65 relative flex justify-center w-[10rem] text-[1rem] py-[6px]  transition-all duration-300 ease-linear ${optionFilter ? 'bg-green-300' : 'bg-gray-200'} rounded-[5px]`}
      >
        {!optionFilter ? placeholder : optionName}
      </button>

      <ul
        className={` z-20 bg-transparent absolute m-auto w-[12rem] rounded-[0.5rem] transition-all duration-250 ease-linear shadow-sm overflow-scroll overflow-y-auto`}
        ref={countriesRef}
        style={{
          height:
            isOpen === false
              ? "0px"
              : `${countriesRef.current?.scrollHeight}px`,
          maxHeight: `${isOpen === true ? "15rem" : "0rem"}`,
          scrollbarWidth: "none",
        }}
      >
        {filteredData.map(({ name, id, platforms }, index) => {
          return (
            <div
              key={id}
              onClick={
                id === 0
                  ? () => null
                  : () => {
                      handleFilterChange(filterType, id),
                        setIsOpen(!isOpen),
                        setOptionName(name);
                    }
              }
              className="z-10 bg-white m-0 flex justify-between items-center md:hover:bg-red-100 transition-all"
            >
              <li
                ref={submenuRef}
                className={`${
                  optionFilter === id ? "bg-blue-300" : "bg-white/35"
                } flex flex-col z-10 items-center justify-center transition-all duration-300 overflow-hidden rounded-md text-center ${""} w-full m-0 p-0 border-[2px] border-red-100`}
                onClick={() => toggleSubmenus(name)}
                style={{
                  height: !openSubmenus[name]
                    ? "3rem"
                    : `${submenuRef.current?.scrollHeight}rem`,
                  maxHeight: `${
                    !openSubmenus[name] || platforms.length < 1
                      ? "3rem"
                      : "6.5rem"
                  }`,
                }}
              >
                <p className="p-0 m-0 capitalize font-semibold">{name}</p>
                {platforms?.length > 0 && (
                  <>
                    <ArrowY
                      className={openSubmenus[name] ? "rotate-[180deg]" : ""}
                    />
                    {openSubmenus[name] && (
                      <ul className="w-full">
                        {platforms.map(({ id: subId, name: subName }) => (
                          <li
                            onClick={() => {
                              handleFilterChange(filterType, subId),
                                setIsOpen(!isOpen),
                                setOptionName(subName);
                            }}
                            key={subId}
                            className={`mb-2 h-6 flex justify-center w-full border-2 m-auto capitalize ${
                              optionFilter === subId
                                ? "bg-blue-300"
                                : "bg-white/35"
                            }`}
                          >
                            {subName}
                          </li>
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
