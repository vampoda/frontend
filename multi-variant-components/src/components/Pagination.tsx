import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const paginationStyles = cva("flex items-center space-x-2", {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    variant: {
      default: "bg-gray-100 text-gray-800 hover:bg-gray-200",
      primary: "bg-blue-300 text-white hover:bg-blue-600",
      secondary: "bg-gray-300 text-gray-700 hover:bg-gray-400",
    },
    disabled: {
      true: "bg-gray-200 text-gray-400 cursor-not-allowed",
    },
  },
  defaultVariants: {
    size: "medium",
    variant: "default",
    disabled: false,
  },
});

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  size?: "small" | "medium" | "large";
  variant?: "default" | "primary" | "secondary";
  disabled?: boolean;
  offset?: number; 
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  size,
  variant,
  disabled,
  offset = 2,
}: PaginationProps) => {
  const mergedClassNames = twMerge(
    paginationStyles({ size, variant, disabled })
  );

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const renderPageButton = (page: number) => (
    <button
      key={page}
      className={`px-4 py-2 rounded transition-all duration-200 ${
        page === currentPage ? "bg-blue-500 text-white" : "bg-gray-400 hover:bg-gray-800"
      }`}
      onClick={() => onPageChange(page)}
      disabled={disabled || page === currentPage}
      aria-label={`Page ${page}`}
      aria-current={page === currentPage ? "page" : undefined}
    >
      {page}
    </button>
  );

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const start = Math.max(1, currentPage - offset);
    const end = Math.min(totalPages, currentPage + offset);

    if (start > 1) {
      pageNumbers.push(renderPageButton(1));
      if (start > 2) pageNumbers.push(<span key="start-ellipsis">...</span>);
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(renderPageButton(i));
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pageNumbers.push(<span key="end-ellipsis">...</span>);
      pageNumbers.push(renderPageButton(totalPages));
    }

    return pageNumbers;
  };

  return (
    <div className={mergedClassNames}>
    { currentPage>1&& <button
        onClick={handlePrevious}
        disabled={currentPage === 1 || disabled}
        className="px-4 py-2 rounded transition-all duration-200 hover:bg-gray-200"
        aria-label="Previous page"
      >
        &lt; Prev
      </button>}
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages || disabled}
        className="px-4 py-2 rounded transition-all duration-200 hover:bg-gray-200"
        aria-label="Next page"
      >
        Next &gt;
      </button>
    </div>
  );
};

export default Pagination;
