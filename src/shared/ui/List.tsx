import React from 'react';
import {
  FlatList as RNFlatList,
  FlatListProps as RNFlatListProps,
} from 'react-native';

export type ListProps<T> = RNFlatListProps<T>;

const List = <T extends unknown>(props: ListProps<T>) => {
  return <RNFlatList {...props} />;
};

export default List;
