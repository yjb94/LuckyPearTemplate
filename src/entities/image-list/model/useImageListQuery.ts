import { Thumbhash } from '@luckypear/react-native-thumbhash';
import { useInfiniteQuery } from '@tanstack/react-query';
import { imagesQuery } from 'shared/const';
import { fetchImages, setThumbhash } from '../api';

const LIMIT = 10 as const;

export const useImageListQuery = () => {
  return useInfiniteQuery({
    queryKey: imagesQuery.list({}),
    queryFn: ({ pageParam }) => fetchImages(pageParam, LIMIT),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      const isLast = (lastPage || []).length < LIMIT;
      return isLast ? undefined : lastPageParam + LIMIT;
    },
    select: data => {
      data.pages
        .flat()
        .filter(image => !image.thumbhash)
        .forEach(image => {
          Thumbhash.encode(image.uri).then(thumbhash => {
            setThumbhash(image, thumbhash);
          });
        });

      return data;
    },
  });
};
