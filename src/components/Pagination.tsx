'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


const Pagination = ({ totalPages, currentPage }: {totalPages: number, currentPage: number}) => {
  const [visibleButtons, setVisibleButtons] = useState<(number | string)[]>([])
  const router = useRouter()

  function handlePageChange(page: number) {
    if(page !== currentPage){
      router.push(`/games/${page}`)
    }
  }

  function buildVisibleButtons(){
    const buttons: (number | string)[] = [1]//always show the first page
    if(totalPages <= 5){
      for(let i = 2; i <= totalPages; i++){
        buttons.push(i)
      }
    }else{
      //hanlde ellipses and dynamic middel buttons
      const startPage = Math.max(2, currentPage -2)
      const endPage = Math.min(totalPages - 1, currentPage + 1)

      if(startPage > 2){
        buttons.push('...')
      }
      for(let i = startPage; i <= endPage; i++){
        buttons.push(i)
      }
      if(endPage < totalPages - 1){
        buttons.push('...')
      }
      buttons.push(totalPages)//it always includes the last page
    }
    setVisibleButtons(buttons)
  }

  useEffect(()=>{
    buildVisibleButtons()
  },[currentPage, totalPages])//to recalculate pages whenever this changes
    

  return (
    <div className="flex items-center gap-2 overflow-auto">
      <button disabled={currentPage === 1} onClick={()=>handlePageChange(currentPage - 1)}>
        &lt;
      </button>

      {visibleButtons.map((page, index)=> typeof page === 'number' ? (
        <button key={page} onClick={()=> handlePageChange(page)} className={`px-3 py-1 border ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-white'}`}>
          {page}
        </button>
      ): (
        <span key={`ellipsis-${index}`}>
          ...
        </span>
      ))}


      <button disabled={currentPage === totalPages} onClick={()=> handlePageChange(currentPage + 1)} className="px-3 py-1 border">
        &gt;
      </button>
    </div>
    
    // <div>
    //   {Array.from({length: totalPages}, (_, index) => (//create an array of length totalPages (using only the index + 1 since index starts in 0) and loop through it
    //     <button
    //       key={index}
    //       onClick={() => handlePageChange(index + 1)}
    //       className={`px-4 py-2 mx-1 ${
    //         currentPage === index + 1 ? "bg-gray-800 text-white" : "bg-gray-300"
    //       }`}
    //       disabled={currentPage === index + 1}
    //     >
    //       {index + 1}
    //     </button>
    //   ))}
    // </div>
  )
}

export default Pagination