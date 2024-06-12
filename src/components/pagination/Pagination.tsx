import * as styles from './Pagination.styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <styles.PaginationContainer>
      {Array.from({ length: totalPages }, (_, index) => (
        <styles.PageItem
          key={index}
          isActive={index === currentPage}
          onClick={() => onPageChange && onPageChange(index)}
        />
      ))}
    </styles.PaginationContainer>
  );
};

export default Pagination;
