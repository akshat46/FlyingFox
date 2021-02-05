import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Generator from './components/generate';

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        {/* <Generator /> */}
        <Route path="/" component={LandingPage} exact />
        <Route path="/generate" component={Generator} />
      </ChakraProvider>
    </Router>
  );
}

const LandingPage = () => {
  return <Link to="/generate">Customize</Link>;
};

export default App;
