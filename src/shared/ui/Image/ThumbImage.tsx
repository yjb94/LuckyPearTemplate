import { Thumbhash } from '@luckypear/react-native-thumbhash';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import Image, { ImageProps } from './Image';

export type ThumbImageProps = ImageProps & {
  thumbhash?: string;
  onEncode?: (thumbhash: string) => void;
};

const ThumbImage: React.FC<ThumbImageProps> = ({
  style,
  thumbhash,
  source,
  ...otherProps
}) => {
  const { styles } = useStyles(stylesheet);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadEnd = () => {
    setIsLoaded(true);
  };

  const composedStyle = StyleSheet.compose(styles.absoulte, style);

  return (
    <>
      {!!thumbhash && !isLoaded && (
        <Thumbhash
          thumbhash={thumbhash}
          style={composedStyle}
        />
      )}
      <Image
        style={[style]}
        source={source}
        onLoadEnd={handleLoadEnd}
        {...otherProps}
      />
    </>
  );
};

const stylesheet = createStyleSheet({
  absoulte: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default ThumbImage;
