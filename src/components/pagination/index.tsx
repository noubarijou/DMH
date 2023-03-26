import * as s from './pagination.styles';

interface PaginationProps {
  pages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ pages, currentPage, onPageChange }: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <s.Pagination>
        {pageNumbers.map((number) => (
          <s.PaginationItem key={number}>
            <button
              type="button"
              onClick={() => onPageChange(number)}
              disabled={number === currentPage}
            >
              {number}
            </button>
          </s.PaginationItem>
        ))}
      </s.Pagination>
    </nav>
  );
};
export { Pagination };
