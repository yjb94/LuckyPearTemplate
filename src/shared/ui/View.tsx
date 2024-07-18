import React from 'react';
import { View as RNView, ViewProps as RNViewProps } from 'react-native';

export type ViewProps = RNViewProps;

const View: React.FC<ViewProps> = props => {
  return <RNView {...props} />;
};

export default View;
