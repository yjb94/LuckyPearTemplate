import { useQuery } from '@tanstack/react-query';
import { imagesQuery } from 'shared/const';
import { fetchImageById } from '../api';

export const useImageQuery = (id: string) => {
  return useQuery({
    queryKey: imagesQuery.detail(id),
    queryFn: () => fetchImageById(id),
  });
};
