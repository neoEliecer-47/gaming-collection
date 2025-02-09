'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react";


const Filters = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selectedDeveloper, setSelectedDeveloper] = useState(searchParams.get('developer') || '');
    const [selectedPlatform, setSelectedPlatform] = useState(searchParams.get('platform') || '');

    function handleFilterChange(key: string, value: string){
        const params = new URLSearchParams(searchParams);
        if(value){
            params.set(key, value)
        }else{
            params.delete(key)
        }

        router.push(`?${params.toString()}`, {scroll: false})
    }

  return (
    <div className="gap-2">
        <select value={selectedDeveloper} onChange={(e)=>handleFilterChange('developers',e.target.value)}>
            <option value="smt">another</option>
            <option value="rockstar-games">Rockstar</option>
        </select>

        <select value={selectedPlatform} onChange={(e)=>handleFilterChange('platforms',e.target.value)}>
            <option value="pc">PC</option>
            <option value="playstation">PlayStation</option>
        </select>
    </div>
  )
}

export default Filters