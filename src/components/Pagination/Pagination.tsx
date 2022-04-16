import Pagination, { PaginationProps } from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import styled from 'styled-components';

export default function CustomPagination({ ...props }: PaginationProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target instanceof HTMLUListElement || !window.scrollY) {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Wrapper onClick={(e) => handleClick(e)}>
      <Pagination {...props} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 3rem;

  .rc-pagination {
    display: flex;
    align-items: center;
    justify-content: center;

    .rc-pagination-item {
      font-size: 1rem;
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--elements);
      @media (max-width: 500px) {
        margin: 0;
      }
      a {
        color: var(--text);
        background-color: var(--elements);
      }
    }
  }
  .rc-pagination-item-link {
    background-color: var(--elements);
    color: var(--text);
    font-size: 1rem;
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;
