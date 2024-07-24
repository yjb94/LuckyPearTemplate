import { Thumbhash } from '@luckypear/react-native-thumbhash';
import { useQuery } from '@tanstack/react-query';
import { imagesQuery } from 'shared/const';
import { fetchImages, setThumbhash } from '../api';

export const useImageListQuery = () => {
  return useQuery({
    queryKey: imagesQuery.list({}),
    queryFn: () => fetchImages(),
    select: data => {
      data
        ?.filter(image => !image.thumbhash)
        .forEach(image => {
          Thumbhash.encode(image.uri).then(thumbhash => {
            setThumbhash(image, thumbhash);
          });
        });

      return data;
    },
  });
};
