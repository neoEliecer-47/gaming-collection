import GamesList from "@/components/GamesList"
import { Suspense } from "react"


const page = ({ params }: {params: { page: string }}) => {

    const currentPage = parseInt(params.page, 10) || 1 //parse it to base 10 integer and in case its undefined set it to 1
  return (
   <div className="bg-black/15 px-2">
     <Suspense fallback={<p>Loading...</p>}>
        <GamesList currentPage={currentPage} />
    </Suspense>
   </div>
  )
}

export default page