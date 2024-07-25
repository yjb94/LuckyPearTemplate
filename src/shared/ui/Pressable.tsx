import React from 'react';
import {
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
} from 'react-native';

export type PressableProps = RNPressableProps;

const Pressable: React.FC<PressableProps> = props => {
  return <RNPressable {...props} />;
};

export default Pressable;
