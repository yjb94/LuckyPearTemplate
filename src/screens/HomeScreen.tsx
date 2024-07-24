import React from 'react';
import { RootStackScreenProps } from 'screens';
import { ImageList } from 'entities/image-list';
import { View } from 'shared/ui';

export type HomeScreenProps = undefined;

const HomeScreen: React.FC<RootStackScreenProps<'Home'>> = () => {
  return (
    <View>
      <ImageList />
    </View>
  );
};

export default HomeScreen;
