import { supabase } from 'shared/api';

export const fetchImages = async (): Promise<ImageType[] | null> => {
  try {
    const { data, error } = await supabase
      .from('images')
      .select('id, uri, thumbhash');

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching images:', error);
    return null;
  }
};
