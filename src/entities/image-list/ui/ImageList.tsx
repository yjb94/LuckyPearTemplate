import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Image, List } from 'shared/ui';
import { ListProps } from 'shared/ui/List';
import { useImageList } from '../model';

export type ImageListProps = {};

const ImageList: React.FC<ImageListProps> = () => {
  const { styles } = useStyles(stylesheet);

  const images: ImageType[] = useImageList();

  const keyExtractor: ListProps<ImageType>['keyExtractor'] = item => item.uri;

  const renderItem: ListProps<ImageType>['renderItem'] = ({ item }) => {
    return (
      <Image
        source={{ uri: item.uri }}
        style={styles.image}
      />
    );
  };

  return (
    <List
      data={images}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

const stylesheet = createStyleSheet({
  image: {
    height: 100,
    width: 100,
  },
});

export default ImageList;
