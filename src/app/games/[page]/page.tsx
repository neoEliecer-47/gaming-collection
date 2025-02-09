import Filters from "@/components/game/filters/Filters"
import GamesList from "@/components/GamesList"
import { Suspense } from "react"


const page = ({ params, searchParams }: {params: { page: string }, searchParams: Record<string, string>}) => {

    const currentPage = parseInt(params.page, 10) || 1 //parse it to base 10 integer and in case its undefined set it to 1
  return (
   <div className="bg-black/20 px-2">
     <Filters />
     <Suspense fallback={<p>Loading...</p>}>
        <GamesList currentPage={currentPage} searchParams={searchParams}/>
    </Suspense>
   </div>
  )
}

export default page

