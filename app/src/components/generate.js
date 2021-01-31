import React, { useState } from 'react';
import {
  useToast,
  Box,
  Text,
  Stack,
  VStack,
  HStack,
  Divider,
  Flex,
  Spacer,
  Container,
  Select,
} from '@chakra-ui/react';
import {
  RiBrush3Fill,
  RiCodeSSlashFill,
  RiFirefoxFill,
  RiListSettingsFill,
  RiPaletteFill,
  RiSideBarFill,
  RiSoundModuleFill,
  RiSpyFill,
} from 'react-icons/ri';
import data from '../data';
import config from '../config.json';
import ColorField from './color-field';
import NumberField from './number-field';
import BrowserPreview from './browser/browser-preview';
import PaletteGroup from './palette/palette-group';
import ButtonPair from './button-pair';
import Code from './code/code';
import DropdownField from './dropdown-field';
const convert = require('color-convert');

function Generator() {
  function paletteGenerator(callback, color, palette) {
    let arr = [];
    let hsl = convert.hex.hsl(color);
    let paletteProfile = palette;
    hsl[2] = hsl[2] > paletteProfile[0] ? hsl[2] - paletteProfile[0] : hsl[2];
    arr.push('#' + convert.hsl.hex(hsl));
    for (let i = 1; i < paletteProfile.length; i++) {
      hsl[2] =
        hsl[2] + paletteProfile[i] > 99 ? 100 : hsl[2] + paletteProfile[i];
      arr.push('#' + convert.hsl.hex(hsl));
    }
    callback(arr);
  }
  const colorCallback = (value, name) => {
    switch (name) {
      case 'Dark':
        setDark(value);
        paletteGenerator(setDarkPalette, dark, data.paletteProfiles.dark);
        break;
      case 'Light':
        setLight(value);
        paletteGenerator(setLightPalette, light, data.paletteProfiles.light);
        break;
      case 'Red':
        setRed(value);
        break;
      case 'Yellow':
        setYellow(value);
        break;
      case 'Green':
        setGreen(value);
        break;
      case 'Accent':
        setAccent(value);
        break;
    }
  };
  const numberCallback = (value, name) => {
    switch (name) {
      case 'Width':
        setSidebarWidth(value);
        break;
      case 'Collapsed Width':
        setSidebarCollapsedWidth(value);
        break;
    }
  };

  const setDefaultPalette = (name, type) => {
    let d = config[type][name];
    let arr = [];
    for (const s in d) {
      if (s.endsWith('base')) continue;
      arr.push(d[s]);
    }
    return arr;
  };

  const [selectedConfig, setSelectedConfig] = useState(0);
  const [selectedView, setSelectedView] = useState(0);
  // const [darkMain, setDarkMain] = useState({color: config.main.dark['dark-base'],})
  const [dark, setDark] = useState(config.main.dark['dark-base']);
  const [light, setLight] = useState(config.main.light['light-base']);
  const [accent, setAccent] = useState(config.main.other['accent']);
  const [red, setRed] = useState(config.main.other['red']);
  const [yellow, setYellow] = useState(config.main.other['yellow']);
  const [green, setGreen] = useState(config.main.other['green']);
  const [darkPalette, setDarkPalette] = useState(
    setDefaultPalette('dark', 'main')
  );
  const [lightPalette, setLightPalette] = useState(
    setDefaultPalette('light', 'main')
  );
  const [sidebarType, setSidebarType] = useState(data.dropdown.sidebar.default);
  const [sidebarWidth, setSidebarWidth] = useState(
    config.main['sidebar-width']
  );
  const [sidebarCollapsedWidth, setSidebarCollapsedWidth] = useState(
    config.main['sidebar-collapsed-width']
  );
  const colorFields = data.colorField.main;
  const colorFieldsPrivate = data.colorField.private;
  const toast = useToast();

  return (
    <Stack direction="row" spacing={0}>
      paletteGenerator(setDarkPalette, dark);
      <Box w="30%" minW="440px" h="auto" bg="white" p="8" overflowY="auto">
        <ButtonPair
          content={[RiPaletteFill, RiSoundModuleFill]}
          bgSelected={['#63CDCF', 'teal.300']}
          selected={selectedConfig}
          onClick={setSelectedConfig}
          icon
        />
        {selectedConfig == 0 ? (
          <>
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
            <VStack w="100%" spacing={6} p="2" pr="10" marginX={4} mb={8}>
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
            <VStack w="100%" spacing={6} p="2" pr="10" marginX={4} mb={8}>
              {colorFieldsPrivate.map(cf => (
                <ColorField
                  name={cf.name}
                  onChange={colorCallback}
                  default={cf.default}
                />
              ))}
            </VStack>
          </>
        ) : (
          <>
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
            <VStack w="100%" spacing={6} p="2" pr="10" marginX={4} mb={8}>
              <DropdownField
                icon={RiListSettingsFill}
                name={data.dropdown.sidebar.name}
                onChange={setSidebarType}
                options={data.dropdown.sidebar.values.map((v, i) => (
                  <option
                    value={i.toString()}
                    onClick={() => {
                      setSidebarType(i);
                    }}
                    colorScheme="teal"
                  >
                    {v}
                  </option>
                ))}
              />
              {data.numberFields.sidebar.map(cf => (
                <NumberField
                  name={cf.name}
                  type="width"
                  subtext={cf.subtext}
                  onChange={numberCallback}
                  default={cf.default.replace('px', '')}
                  unit="px"
                />
              ))}
            </VStack>
          </>
        )}
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
            bgSelected={[darkPalette[1], darkPalette[2]]}
            color={{ selected: light, regular: dark }}
            selected={0}
            onClick={() =>
              toast({
                title: 'Work In Progress :(',
                position: 'bottom-right',
                description:
                  'Private mode preview has not been implemented yet.',
                status: 'error',
                duration: 5000,
                isClosable: false,
              })
            }
            icon
          />
          <Spacer />
          <ButtonPair
            content={[RiBrush3Fill, RiCodeSSlashFill]}
            bgSelected={[darkPalette[1], darkPalette[2]]}
            color={{ selected: light, regular: dark }}
            alignSelf="end"
            selected={selectedView}
            onClick={setSelectedView}
            icon
          />
        </Flex>
        {selectedView == 0 ? (
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
              red={red}
              yellow={yellow}
              green={green}
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
                <PaletteGroup colors={[accent, red, yellow, green]} detached />
              </VStack>
            </BrowserPreview>
          </Container>
        ) : (
          <Code
            dark={dark}
            light={light}
            darkPalette={darkPalette}
            lightPalette={lightPalette}
            red={red}
            green={green}
            yellow={yellow}
            accent={accent}
            sidebarType={sidebarType}
            sidebarWidth={sidebarWidth}
            sidebarCollapsedWidth={sidebarCollapsedWidth}
          />
        )}
      </Box>
    </Stack>
  );
}

export default Generator;
