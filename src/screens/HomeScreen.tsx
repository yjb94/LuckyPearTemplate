import React from 'react';
import { RootStackScreenProps } from 'screens';
import { Text, View } from 'shared/ui';

export type HomeScreenProps = undefined;

const HomeScreen: React.FC<RootStackScreenProps<'Home'>> = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
