import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import Navigation from './Navigation';
import { queryClient } from './QueryClient';

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;
