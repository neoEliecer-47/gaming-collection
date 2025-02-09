"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Pagination = ({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) => {
  const [visibleButtons, setVisibleButtons] = useState<(number | string)[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  function handlePageChange(page: number) {
    if (page !== currentPage) {
      router.push(`/games/${page}?${params.toString()}`);
    }
  }

  function buildVisibleButtons() {
    const buttons: (number | string)[] = [1]; //always show the first page
    if (totalPages <= 5) {
      //short pagination
      for (let i = 2; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      //hanlde ellipses and dynamic middel buttons
      const startPage = Math.max(2, currentPage - 2); //first page at leats 2, to always display the button 1
      const endPage = Math.min(totalPages - 1, currentPage + 1); //here i build the range to always display the firts and last page

      if (startPage > 2) {
        buttons.push("...");
      }
      for (let i = startPage; i <= endPage; i++) {
        buttons.push(i);
      }
      if (endPage < totalPages - 1) {
        buttons.push("...");
      }
      buttons.push(totalPages); //it always includes the last page
    }
    setVisibleButtons(buttons);
  }

  useEffect(() => {
    buildVisibleButtons();
  }, [currentPage, totalPages]); //to recalculate pages whenever this changes

  return (
    <div className="flex items-center justify-center gap-2 overflow-auto w-full pb-4">
      <button
        disabled={currentPage === 1}
        className={`mr-3 ${currentPage === 1 && "text-gray-500/35"}`}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        &lt;
      </button>

      {visibleButtons.map((page, index) =>
        typeof page === "number" ? (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`p-0 h-8 w-8 border ${
              page === currentPage ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={`ellipsis-${index}`}>...</span>
        )
      )}

      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className={`ml-3 ${currentPage === totalPages && "text-gray-500/35"}`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
