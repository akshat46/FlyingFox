import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Generator from './components/generate';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Generator />
    </ChakraProvider>
  );
}

export default App;
