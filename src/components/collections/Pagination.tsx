"use client";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  totalBooks: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  startIndex,
  endIndex,
  totalBooks,
  onPageChange,
}: PaginationProps) {
  const goToPrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-between mt-[50px]">
      <p style={{ fontFamily: "var(--font-urbanist)" }}>
        Showing{" "}
        <span style={{ fontFamily: "var(--font-urbanist-bold)", color: "#e45f65" }}>
          {startIndex} - {endIndex}
        </span>{" "}
        of{" "}
        <span style={{ fontFamily: "var(--font-urbanist-bold)", color: "#e45f65" }}>
          {totalBooks}
        </span>{" "}
        books
      </p>

      <div className="flex items-center">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className="btn-previous-pagination"
          style={{
            opacity: currentPage === 1 ? 0.5 : 1,
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <p className="mx-2.5" style={{ fontFamily: "var(--font-urbanist)" }}>
          <span>{currentPage}</span> / {totalPages}
        </p>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="btn-next-pagination"
          style={{
            opacity: currentPage === totalPages ? 0.5 : 1,
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}