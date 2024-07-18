import React from 'react';
import { RootStackScreenProps } from 'screens';
import { Counter } from 'entities/counter';
import { View } from 'shared/ui';

export type HomeScreenProps = undefined;

const HomeScreen: React.FC<RootStackScreenProps<'Home'>> = () => {
  return (
    <View>
      <Counter />
    </View>
  );
};

export default HomeScreen;
