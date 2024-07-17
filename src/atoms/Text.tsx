import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

export type TextProps = RNTextProps;

const Text: React.FC<TextProps> = props => {
  return <RNText {...props} />;
};

export default Text;
