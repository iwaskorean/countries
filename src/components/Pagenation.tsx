import React from 'react';

interface Props {
  countriesPerPage: number;
  totalCountries: number | undefined;
  paginate: (pageNumber: number) => void;
}
const Pagination: React.FC<Props> = ({
  countriesPerPage,
  totalCountries,
  paginate,
}) => {
  const pageNumber = [];

  if (totalCountries !== undefined) {
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
      pageNumber.push(i);
    }
  }

  return (
    <ul className="pagination">
      {pageNumber.map((pageNum) => (
        <li
          key={pageNum}
          className="pagination_item"
          onClick={() => paginate(pageNum)}
        >
          {pageNum}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
