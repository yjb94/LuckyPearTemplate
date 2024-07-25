import { useInfiniteQuery } from '@tanstack/react-query';
import { imagesQuery } from 'shared/const';
import { fetchImages } from '../api';

const LIMIT = 10 as const;

export const useImageListQuery = () => {
  return useInfiniteQuery({
    queryKey: imagesQuery.list(),
    queryFn: ({ pageParam }) => fetchImages(pageParam, LIMIT),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      const isLast = (lastPage || []).length < LIMIT;
      return isLast ? undefined : lastPageParam + LIMIT;
    },
  });
};
