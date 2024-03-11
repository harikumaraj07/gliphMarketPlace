import {useState} from 'react';

export const usePagination = (initialPage: number = 0) => {
  const [page, setPage] = useState(initialPage);

  const nextPage = () => {
    setPage(_page => _page + 1);
  };

  const resetPage = () => {
    setPage(initialPage);
  };

  return {page, nextPage, resetPage};
};
