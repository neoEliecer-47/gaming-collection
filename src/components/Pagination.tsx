'use client'

import { useRouter } from "next/navigation"


const Pagination = ({ totalPages, currentPage }: {totalPages: number, currentPage: number}) => {

  const router = useRouter()

  function handlePageChange(page: number) {
    if(page !== currentPage){
      router.push(`/games/${page}`)
    }
  }
    

  return (
    <div>
      {Array.from({length: totalPages}, (_, index) => (//create an array of length totalPages (using only the index + 1 since index starts in 0) and loop through it
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`px-4 py-2 mx-1 ${
            currentPage === index + 1 ? "bg-gray-800 text-white" : "bg-gray-300"
          }`}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}

export default Pagination