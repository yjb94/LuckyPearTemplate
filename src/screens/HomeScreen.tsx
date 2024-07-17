import React from 'react';
import { RootStackScreenProps } from 'screens';
import Text from 'atoms/Text';
import View from 'atoms/View';

export type HomeScreenProps = undefined;

const HomeScreen: React.FC<RootStackScreenProps<'Home'>> = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
