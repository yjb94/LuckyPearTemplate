import React from 'react';
import { List } from 'shared/ui';
import { ListProps } from 'shared/ui/List';
import { useImageListQuery } from '../model';
import ImageListItem from './ImageListItem';

export type ImageListProps = {};

const ImageList: React.FC<ImageListProps> = () => {
  const { data, hasNextPage, fetchNextPage } = useImageListQuery();
  const images = data?.pages.flat();

  const handleEndReached = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderItem: ListProps<ImageType>['renderItem'] = ({ item }) => {
    return <ImageListItem {...item} />;
  };

  return (
    <List
      data={images}
      renderItem={renderItem}
      onEndReached={handleEndReached}
    />
  );
};

export default ImageList;
