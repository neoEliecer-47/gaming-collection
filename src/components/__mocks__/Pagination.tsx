// __mocks__/Pagination.tsx
export default function Pagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
    return <div>Pagination Mock: {currentPage} / {totalPages}</div>;
  }