import React from 'react';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import { RootStackScreenProps } from 'screens';
import { useImageQuery } from 'entities/image';
import { View, Text, ThumbImage } from 'shared/ui';

export type ImageDetailScreenProps = {
  id: string;
};

const ImageDetailScreen: React.FC<RootStackScreenProps<'ImageDetail'>> = ({
  route,
}) => {
  const { id } = route.params;
  const { data } = useImageQuery(id);

  const { styles } = useStyles(stylesheet);

  return (
    <View>
      <ThumbImage
        source={{
          uri: data?.uri,
        }}
        thumbhash={data?.thumbhash}
        style={styles.image}
      />
      <Text>{data?.id}</Text>
    </View>
  );
};

const stylesheet = createStyleSheet(() => ({
  image: {
    aspectRatio: 1,
    width: UnistylesRuntime.screen.width,
  },
}));

export default ImageDetailScreen;
