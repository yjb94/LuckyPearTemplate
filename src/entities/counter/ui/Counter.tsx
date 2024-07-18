import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Button, Text, View } from 'shared/ui';
import { counterStore, useCounterStore } from '../model';

export type CounterProps = {};

const Counter: React.FC<CounterProps> = () => {
  const { styles } = useStyles(stylesheet);

  const { count } = useCounterStore();

  return (
    <View style={styles.container}>
      <Text>Counter: {count}</Text>
      <Button
        title="Increment"
        onPress={() => {
          counterStore.count += 1;
        }}
      />
      <Button
        title="Change test"
        onPress={() => {
          counterStore.test = ['hello', 'hi', 'bye'][
            Math.floor(Math.random() * 3)
          ];
        }}
      />
    </View>
  );
};

const stylesheet = createStyleSheet(() => ({
  container: {},
}));

export default Counter;
