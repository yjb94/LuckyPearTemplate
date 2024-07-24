import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { List, Text, ThumbImage } from 'shared/ui';
import { ListProps } from 'shared/ui/List';
import { useImageListQuery } from '../model';

export type ImageListProps = {};

const ImageList: React.FC<ImageListProps> = () => {
  const { styles } = useStyles(stylesheet);

  const { data, hasNextPage, fetchNextPage } = useImageListQuery();
  const images = data?.pages.flat();

  const handleEndReached = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderItem: ListProps<ImageType>['renderItem'] = ({ item }) => {
    return (
      <>
        <Text>{item.id}</Text>
        <ThumbImage
          thumbhash={item.thumbhash}
          source={{ uri: item.uri }}
          style={styles.image}
        />
      </>
    );
  };

  return (
    <List
      data={images}
      renderItem={renderItem}
      onEndReached={handleEndReached}
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
