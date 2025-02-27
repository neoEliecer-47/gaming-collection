

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react";
import OptionFilter from "./OptionFilter";
import { mainOrderingFilters, mainPlatformsFilters } from "@/constants";



const Filters = () => {


    // function handleFilterChange(key: string, value: string){
    //     const params = new URLSearchParams(searchParams);
    //     if(value){
    //         params.set(key, value)
    //     }else{
    //         params.delete(key)
    //     }

    //     router.push(`?${params.toString()}`, {scroll: false})
    // }

  return (
    <div className="gap-2 flex justify-center lg:justify-start mt-2 mb-4 md:px-8 items-center w-full">
       
       <OptionFilter filterType="platforms" placeholder="platforms" filterTypeData={mainPlatformsFilters}/>
        
         <OptionFilter filterType="ordering" placeholder="order by" filterTypeData={mainOrderingFilters}/>

    </div>
  )
}

export default Filters