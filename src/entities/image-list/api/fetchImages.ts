import { supabase } from 'shared/api';

export const fetchImages = async (
  from = 0,
  limit = 10
): Promise<ImageType[]> => {
  try {
    const { data, error } = await supabase
      .from('images')
      .select('id, uri, thumbhash', { count: 'exact' })
      .order('id', { ascending: true })
      .range(from, from + limit - 1);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};
