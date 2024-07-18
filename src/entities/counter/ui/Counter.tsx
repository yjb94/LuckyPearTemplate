import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Text, View } from 'shared/ui';
import { useCounterStore } from '../model';
import IncreaseButton from './IncreaseButton';

export type CounterProps = {};

const Counter: React.FC<CounterProps> = () => {
  const { styles } = useStyles(stylesheet);

  const { count } = useCounterStore();

  return (
    <View style={styles.container}>
      <Text>Counter: {count}</Text>
      <IncreaseButton />
    </View>
  );
};

const stylesheet = createStyleSheet(() => ({
  container: {},
}));

export default Counter;
