import React from 'react';
import { Button as RNButton, ButtonProps as RNButtonProps } from 'react-native';

export type ButtonProps = RNButtonProps;

const Button: React.FC<ButtonProps> = props => {
  return <RNButton {...props} />;
};

export default Button;
