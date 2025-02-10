

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react";
import OptionFilter from "./OptionFilter";


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
    <div className="gap-2">
        {/* <select value={selectedDeveloper} onChange={(e)=>handleFilterChange('developers',e.target.value)}>
            <option value="smt">another</option>
            <option value="rockstar-games">Rockstar</option>
            <option value="ubisoft">ubisoft</option>
        </select>

        <select value={selectedPlatform} onChange={(e)=>handleFilterChange('platforms',e.target.value)}>
            <option value="4">PC</option>
            <option value="18">PlayStation 4</option>
            <option value="15">PlayStation 2</option>
        </select> */}
        <OptionFilter filterType="genres"/>
        <OptionFilter filterType="developers"/>
        <OptionFilter filterType="platforms"/>
        <OptionFilter filterType="publishers"/>

    </div>
  )
}

export default Filters