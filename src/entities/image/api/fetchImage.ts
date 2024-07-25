import { supabase } from 'shared/api';

export const fetchImageById = async (id: string): Promise<ImageType | null> => {
  try {
    const { data, error } = await supabase
      .from('images')
      .select('id, uri, thumbhash')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching images:', error);
    return null;
  }
};
