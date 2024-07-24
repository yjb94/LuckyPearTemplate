import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { List, ThumbImage } from 'shared/ui';
import { ListProps } from 'shared/ui/List';
import { setThumbhash } from '../api';
import { useImageListQuery } from '../model';

export type ImageListProps = {};

const ImageList: React.FC<ImageListProps> = () => {
  const { styles } = useStyles(stylesheet);

  const { data } = useImageListQuery();

  const renderItem: ListProps<ImageType>['renderItem'] = ({ item }) => {
    const handleEncode = (thumbhash: string) => {
      setThumbhash(item, thumbhash);
    };

    return (
      <ThumbImage
        thumbhash={item.thumbhash}
        source={{ uri: item.uri }}
        style={styles.image}
        onEncode={handleEncode}
      />
    );
  };

  return (
    <List
      data={data}
      renderItem={renderItem}
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
