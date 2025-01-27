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
      {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2 mx-1 ${
            currentPage === page ? "bg-gray-800 text-white" : "bg-gray-300"
          }`}
          disabled={currentPage === page}
        >
          {page}
        </button>
      ))}
    </div>
  )
}

export default Pagination