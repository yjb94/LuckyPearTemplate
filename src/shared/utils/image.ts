import { ImageURISource } from 'react-native';
import { ImageProps } from 'shared/ui';

export const isImageSourceType = (
  source: ImageProps['source']
): source is ImageURISource => {
  return !!(source as ImageURISource).uri;
};
