import { supabase } from 'shared/api';

export const setThumbhash = async (image: ImageType, thumbhash: string) => {
  try {
    const { error } = await supabase.from('images').upsert({
      ...image,
      thumbhash,
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error setting thumbhash:', error);
  }
};
