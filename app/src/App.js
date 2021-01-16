import React from 'react';
import {
  ChakraProvider,
  CSSReset,
  theme,
  ThemeProvider,
} from '@chakra-ui/react';
import colors from './colors.json';
import Generator from './components/generate';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Generator />
    </ChakraProvider>
  );
}

export default App;
