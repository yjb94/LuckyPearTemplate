import React from 'react';
import { Button } from 'shared/ui';
import { counterStore } from '../model';

export type IncreaseButtonProps = {};

const IncreaseButton: React.FC<IncreaseButtonProps> = () => {
  const increaseCount = () => {
    counterStore.count += 1;
  };

  return (
    <Button
      title="Increment"
      onPress={increaseCount}
    />
  );
};

export default IncreaseButton;
