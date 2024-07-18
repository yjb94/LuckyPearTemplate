import React, { useState } from 'react';
import { Button } from 'shared/ui';
import { state } from './Counter';

export type IncreaseButtonProps = {};

const IncreaseButton: React.FC<IncreaseButtonProps> = () => {
  // const [_, setCount] = useState(0);

  const increaseCount = () => {
    state.count += 1;
    // setCount(prev => prev + 1);
  };

  return (
    <Button
      title="Increment"
      onPress={increaseCount}
    />
  );
};

export default IncreaseButton;
