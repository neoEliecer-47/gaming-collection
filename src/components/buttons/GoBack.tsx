'use client'

import { useRouter } from "next/navigation"

const GoBack = () => {
  const router = useRouter()
    return (
    <div>
        <button onClick={()=>router.back()} className="p-2 bg-blue-500 text-white">go back</button>
    </div>
  )
}

export default GoBack