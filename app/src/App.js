import React from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  HStack,
  Image,
  Text,
  theme,
  VStack,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Generator from './components/generate';
import { RiBrush4Line, RiDownloadLine } from 'react-icons/ri';

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
  return (
    <Box w="100vw" h="100vh" m="0" p="0" bg="#A1B5CE">
      <VStack
        pos="absolute"
        top="30%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Image
          src={`${process.env.PUBLIC_URL}/name-logo.png`}
          w="40vw"
          alt="flyingfox-logo"
          pointerEvents="none"
        />
        <Text mb="4" p="0" fontSize="lg" color="#192330">
          A minimal Firefox theme.
        </Text>
        <HStack spacing="8">
          <Button
            onClick={() =>
              window.open(
                'https://github.com/akshat46/FlyingFox/releases',
                '_blank'
              )
            }
            size="lg"
            p="8"
            borderColor="green.500"
            borderRadius="lg"
            boxShadow="0 5px 25px -10px #192330A0, -5px 0 10px -5px #192330A0, 5px 0 10px -5px #192330A0"
            color="#59A9BB"
            bg="#192330"
            _hover={{ backgroundColor: '#223042' }}
            _active={{ backgroundColor: '#384F6B' }}
            leftIcon={<RiDownloadLine />}
          >
            Download
          </Button>
          <Link to="/generate">
            <Button
              href="https://github.com/akshat46/FlyingFox/releases"
              size="lg"
              p="8"
              borderColor="green.500"
              borderRadius="lg"
              boxShadow="0 5px 25px -10px #5AA6C7c0, -5px 0 10px -5px #5AA6C7A0, 5px 0 10px -5px #5AA6C7A0"
              color="#192330"
              bgGradient="linear(to-l, #63CDCF, #5AA6C7)"
              _hover={{ backgroundColor: '#94ABC7' }}
              _active={{ backgroundColor: '#7996B9' }}
              leftIcon={<RiBrush4Line />}
            >
              Customize
            </Button>
          </Link>
        </HStack>
      </VStack>
      <Image
        src={`${process.env.PUBLIC_URL}/preview.png`}
        pos="absolute"
        bottom="0"
        left="50%"
        transform="translateX(-50%)"
        w="70vw"
        alt="preview"
        pointerEvents="none"
      />
    </Box>
  );
};

export default App;
