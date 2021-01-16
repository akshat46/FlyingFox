import React, { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Input,
  Text,
  Stack,
  Grid,
  VStack,
  HStack,
  Divider,
  Flex,
  Spacer,
  Container,
} from '@chakra-ui/react';
import {
  RiBrush3Fill,
  RiCodeSSlashFill,
  RiFirefoxFill,
  RiPaletteFill,
  RiSideBarFill,
  RiSoundModuleFill,
  RiSpyFill,
} from 'react-icons/ri';
import data from '../data';
import colors from '../colors.json';
import ColorField from './color-field';
import NumberField from './number-field';
import BrowserPreview from './browser/browser-preview';
import PaletteGroup from './palette/palette-group';
import ButtonPair from './button-pair';

function Generator() {
  const colorCallback = (value, name) => {
    // check if valid
    if (name == 'Dark') {
      setDark(value);
    } else if (name == 'Light') {
      setLight(value);
    }
    // TODO: handle other colors
  };
  const setDefaultPalette = (name, type) => {
    let d = colors[type][name];
    let arr = [];
    for (const s in d) {
      if (s.endsWith('base')) continue;
      arr.push(d[s]);
    }
    return arr;
  };

  const [selectedConfig, setSelectedConfig] = useState(0);
  const [selectedView, setSelectedView] = useState(0);
  const [dark, setDark] = useState(colors.main.dark['--dark-base']);
  const [light, setLight] = useState(colors.main.light['--light-base']);
  const [darkPalette, setDarkPalette] = useState(
    setDefaultPalette('dark', 'main')
  );
  const [lightPalette, setLightPalette] = useState(
    setDefaultPalette('light', 'main')
  );
  const [otherPalette, setOtherPalette] = useState(
    setDefaultPalette('other', 'main')
  );

  const colorFields = data.colorField.main;
  const colorFieldsPrivate = data.colorField.private;

  return (
    <Stack direction="row" spacing={0}>
      <Box
        w="30%"
        minW="440px"
        maxW="560px"
        h="auto"
        bg="white"
        p="8"
        overflowY="auto"
      >
        <ButtonPair
          content={[RiPaletteFill, RiSoundModuleFill]}
          bg={{
            selected: [otherPalette[2], otherPalette[2]],
            regular: 'gray.100',
          }}
          selected={selectedConfig}
          onClick={setSelectedConfig}
          icon
        />
        <HStack
          spacing={2}
          mb={4}
          fontSize="xl"
          color="gray.600"
          alignSelf="start"
        >
          <RiFirefoxFill />
          <Text fontWeight="bold">Main</Text>
        </HStack>
        <VStack spacing={6} p="2" marginX={4} mb={8}>
          {colorFields.map(cf => (
            <ColorField
              name={cf.name}
              onChange={colorCallback}
              default={cf.default}
            />
          ))}
        </VStack>
        <Divider mb={8} />
        <HStack
          spacing={2}
          mb={4}
          fontSize="xl"
          color="gray.600"
          alignSelf="start"
        >
          <RiSpyFill />
          <Text fontWeight="bold">Private Mode</Text>
        </HStack>
        <VStack spacing={6} p="2" marginX={4} mb={8}>
          {colorFieldsPrivate.map(cf => (
            <ColorField
              name={cf.name}
              onChange={colorCallback}
              default={cf.default}
            />
          ))}
        </VStack>
        <Divider mb={8} />
        <HStack
          spacing={2}
          mb={4}
          fontSize="xl"
          color="gray.600"
          alignSelf="start"
        >
          <RiSideBarFill />
          <Text fontWeight="bold">Sidebar</Text>
        </HStack>
        <VStack spacing={6} p="2" marginX={4} mb={8}>
          {data.sidebarWidths.map(cf => (
            <NumberField
              name={cf.name}
              type="width"
              subtext={cf.subtext}
              onChange={colorCallback}
              default={cf.default.replace('px', '')}
              unit="px"
            />
          ))}
        </VStack>
      </Box>
      <Box
        w={{ lg: '70%', md: '60%', sm: '100%' }}
        h="100vh"
        p="8"
        bg={lightPalette[1]}
        pos="fixed"
        right={{ md: '0', sm: '-100%' }}
      >
        <Flex w="100%">
          <ButtonPair
            content={[RiFirefoxFill, RiSpyFill]}
            bg={{
              selected: [otherPalette[3], otherPalette[3]],
              regular: lightPalette[3],
            }}
            selected={selectedView}
            onClick={setSelectedView}
            icon
          />
          <Spacer />
          <ButtonPair
            content={[RiBrush3Fill, RiCodeSSlashFill]}
            bg={{
              selected: [otherPalette[0], otherPalette[0]],
              regular: lightPalette[3],
            }}
            alignSelf="end"
            selected={selectedView}
            onClick={setSelectedView}
            icon
          />
        </Flex>
        <Container
          maxW="100%"
          pos="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
          centerContent
        >
          <BrowserPreview
            dark={dark}
            darkPalette={darkPalette}
            light={light}
            lightPalette={lightPalette}
            red={otherPalette[3]}
            yellow={otherPalette[1]}
            green={otherPalette[2]}
          >
            <VStack
              paddingY={12}
              w="100%"
              spacing={8}
              mt={2}
              borderTop={`solid 2px ${darkPalette[0]}`}
            >
              <PaletteGroup
                colors={[dark, light]}
                contrast={darkPalette[3]}
                detached
              />
              <PaletteGroup colors={lightPalette} />
              <PaletteGroup colors={darkPalette} />
              <PaletteGroup colors={otherPalette} detached />
            </VStack>
          </BrowserPreview>
        </Container>
      </Box>
    </Stack>
  );
}

export default Generator;
