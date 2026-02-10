import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationBox({ items, itemsPerPage, setCurrentDatas }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    setCurrentDatas(
      items.slice(startIndex, startIndex + itemsPerPage)
    );
  }, [page,items]);

  return (
    <Stack spacing={5} className="mt-10">
      <Pagination
        size="large"
        count={Math.ceil(items.length / itemsPerPage)}
        page={page}
        className="bg-green-500/30! mx-auto! text-center rounded-full p-1"
        onChange={(e, value) => setPage(value)}
      />
    </Stack>
  );
}
