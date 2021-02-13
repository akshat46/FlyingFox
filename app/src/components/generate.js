import React, { useState } from 'react';
import {
  Box,
  Text,
  Stack,
  VStack,
  HStack,
  Divider,
  Flex,
  Spacer,
  Container,
  Badge,
  Link,
  Image,
} from '@chakra-ui/react';
import {
  RiBrush3Fill,
  RiCodeSSlashFill,
  RiFirefoxFill,
  RiListSettingsFill,
  RiPaletteFill,
  RiSettingsFill,
  RiSideBarFill,
  RiSoundModuleFill,
  RiSpyFill,
} from 'react-icons/ri';
import { hexToCSSFilter } from 'hex-to-css-filter';
import data from '../data';
import config from '../config.json';
import ColorField from './color-field';
import NumberField from './number-field';
import BrowserPreview from './browser/browser-preview';
import PaletteGroup from './palette/palette-group';
import ButtonPair from './button-pair';
import Code from './code/code';
import DropdownField from './dropdown-field';
import CustomCheckbox from './checkbox';
const convert = require('color-convert');

function Generator() {
  function paletteGenerator(color, palette) {
    let arr = [];
    let hsl = convert.hex.hsl(color);
    hsl[2] = hsl[2] > Math.abs(palette[0]) + 4 ? hsl[2] - palette[0] : hsl[2];
    hsl[2] = hsl[2] > 100 ? 100 : hsl[2];
    arr.push('#' + convert.hsl.hex(hsl));
    for (let i = 1; i < palette.length; i++) {
      hsl[2] = hsl[2] + palette[i] > 99 ? 100 : hsl[2] + palette[i];
      hsl[1] = hsl[1] > 49 ? hsl[1] - palette[i] * 1.5 : hsl[1];
      arr.push('#' + convert.hsl.hex(hsl));
    }
    return arr;
  }
  const colorCallback = (value, name) => {
    let p;
    switch (
      name // _pr suffix for private
    ) {
      case 'Dark':
        p = paletteGenerator(darkMain.color, data.paletteProfiles.dark);
        setDarkMain({
          ...darkMain,
          color: value,
          palette: p,
          mask: hexToCSSFilter(p[3]).filter,
        });
        break;
      case 'Dark_pr':
        p = paletteGenerator(darkPrivate.color, data.paletteProfiles.dark);
        setDarkPrivate({
          ...darkPrivate,
          color: value,
          palette: p,
          mask: hexToCSSFilter(p[3]).filter,
        });
        break;
      case 'Light':
        setLightMain({
          ...lightMain,
          color: value,
          palette: paletteGenerator(
            lightMain.color,
            data.paletteProfiles.light
          ),
        });
        break;
      case 'Light_pr':
        setLightPrivate({
          ...lightPrivate,
          color: value,
          palette: paletteGenerator(
            lightPrivate.color,
            data.paletteProfiles.light
          ),
        });
        break;
      case 'Red':
      case 'Yellow':
      case 'Green':
      case 'Accent':
        setOtherMain({ ...otherMain, [name.toLowerCase()]: value });
        break;
      case 'Red_pr':
      case 'Yellow_pr':
      case 'Green_pr':
      case 'Accent_pr':
        setOtherPrivate({
          ...otherPrivate,
          [name.split('_')[0].toLowerCase()]: value,
        });
        break;
      default:
        break;
    }
  };
  const numberCallback = (value, name, parent) => {
    name = name.split(' ');
    name.splice(0, 1, name[0].toLowerCase());
    name = name.join('');
    switch (parent) {
      case 'sidebar':
        setSidebarValues({ ...sidebarValues, [name]: value });
        break;
      case 'general':
        setGeneral({ ...general, [name]: value });
        break;
      default:
        break;
    }
  };

  /* STATES */
  const [selectedConfig, setSelectedConfig] = useState(0);
  const [selectedView, setSelectedView] = useState(0);
  const [selectedMode, setSelectedMode] = useState(0);
  const [darkMain, setDarkMain] = useState({
    color: config.main.dark['dark-base'],
    palette: paletteGenerator(
      config.main.dark['dark-base'],
      data.paletteProfiles.dark
    ),
    mask: config.main['extension-icon-mask'],
  });
  const [lightMain, setLightMain] = useState({
    color: config.main.light['light-base'],
    palette: paletteGenerator(
      config.main.light['light-base'],
      data.paletteProfiles.light
    ),
  });
  const [otherMain, setOtherMain] = useState({
    accent: config.main.other['accent'],
    red: config.main.other['red'],
    yellow: config.main.other['yellow'],
    green: config.main.other['green'],
  });
  const [darkPrivate, setDarkPrivate] = useState({
    color: config.private.dark['dark-base'],
    palette: paletteGenerator(
      config.private.dark['dark-base'],
      data.paletteProfiles.dark
    ),
    mask: config.private['extension-icon-mask'],
  });
  const [lightPrivate, setLightPrivate] = useState({
    color: config.private.light['light-base'],
    palette: paletteGenerator(
      config.private.light['light-base'],
      data.paletteProfiles.light
    ),
  });
  const [otherPrivate, setOtherPrivate] = useState({
    accent: config.private.other['accent'],
    red: config.private.other['red'],
    yellow: config.private.other['yellow'],
    green: config.private.other['green'],
  });
  const [sidebarValues, setSidebarValues] = useState({
    type: data.dropdown.sidebar.default,
    width: config.main['sidebar-width'],
    collapsedWidth: config.main['sidebar-collapsed-width'],
  });
  const [includes, setIncludes] = useState({
    extensionIcons: true,
    windowControls: true,
    windowControlsWindowsPatch: false,
    hideTabline: true,
  });
  const [general, setGeneral] = useState({
    dividerWidth: '2',
  });

  const CustomBadge = props => (
    <Badge variant="subtle" ml="1" colorScheme={props.color}>
      {props.name}
    </Badge>
  );

  const colorFields = data.colorField.main;
  const colorFieldsPrivate = data.colorField.private;

  const theme =
    selectedMode === 0
      ? {
          dark: darkMain.color,
          light: lightMain.color,
          darkPalette: darkMain.palette,
          lightPalette: lightMain.palette,
          other: otherMain,
        }
      : {
          dark: darkPrivate.color,
          light: lightPrivate.color,
          darkPalette: darkPrivate.palette,
          lightPalette: lightPrivate.palette,
          other: otherPrivate,
        };

  return (
    <Stack direction="row" spacing={0}>
      <Box w="30%" minW="440px" h="auto" bg="white" p="8" overflowY="auto">
        <Image
          src={`${process.env.PUBLIC_URL}/name-logo.png`}
          h="40px"
          alt="flyingfox-logo"
          mb="8"
        />
        <ButtonPair
          styles={{ mb: '8', ml: '-10px' }}
          content={[RiPaletteFill, RiSoundModuleFill]}
          bgSelected={['#63CDCF', 'teal.300']}
          selected={selectedConfig}
          onClick={setSelectedConfig}
          icon
        />
        {selectedConfig === 0 ? (
          <>
            {/*** Color Fields ***/}
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
                  subtag="pr"
                  onChange={colorCallback}
                  default={cf.default}
                />
              ))}
            </VStack>
          </>
        ) : (
          <>
            {/*** Configs ***/}
            <HStack
              spacing={2}
              mb={4}
              fontSize="xl"
              color="gray.600"
              alignSelf="start"
            >
              <RiSettingsFill />
              <Text fontWeight="bold">General</Text>
            </HStack>
            <VStack
              w="100%"
              align="start"
              spacing={6}
              p="2"
              pr="10"
              marginX={4}
              mb={8}
            >
              <CustomCheckbox
                isChecked={includes.extensionIcons}
                onChange={e =>
                  setIncludes({
                    ...includes,
                    extensionIcons: e.target.checked,
                  })
                }
              >
                Handle Extension Icons
              </CustomCheckbox>
              <CustomCheckbox
                isChecked={includes.hideTabline}
                onChange={e =>
                  setIncludes({
                    ...includes,
                    hideTabline: e.target.checked,
                    windowControls: e.target.checked
                      ? includes.windowControls
                      : false,
                  })
                }
                subText={
                  !includes.hideTabline
                    ? 'WIP. Window controls are only handled if tabline is hidden.'
                    : null
                }
                badge={{ name: 'no preview', color: 'red' }}
              >
                Hide Tabline
              </CustomCheckbox>
              <CustomCheckbox
                isChecked={includes.windowControls}
                onChange={e =>
                  setIncludes({
                    ...includes,
                    windowControls: e.target.checked,
                  })
                }
                disabled={!includes.hideTabline}
                badge={{ name: 'experimental', color: 'teal' }}
                subText={
                  <>
                    Window controls positioning may not work out of the box and
                    will require tweaking variables{' '}
                    <Link
                      href="https://github.com/akshat46/FlyingFox/wiki/5.-Window-Controls"
                      color="teal.500"
                      isExternal
                    >
                      as shown here
                    </Link>
                    .
                  </>
                }
              >
                Window Controls
              </CustomCheckbox>
              <CustomCheckbox
                styles={{ pl: '6' }}
                isChecked={includes.windowControlsWindowsPatch}
                onChange={e =>
                  setIncludes({
                    ...includes,
                    windowControlsWindowsPatch: e.target.checked,
                  })
                }
                disabled={!includes.windowControls}
                subText={
                  <>
                    See{' '}
                    <Link
                      href="https://github.com/akshat46/FlyingFox/wiki/5.-Window-Controls#windows-patch"
                      color="teal.500"
                      isExternal
                    >
                      wiki
                    </Link>{' '}
                    for more details.
                  </>
                }
              >
                Window Controls Windows 10 Patch
              </CustomCheckbox>
              <NumberField
                name="Divider Width"
                type="width"
                parent="general"
                subtext="Divider width for sidebar and navbar. Set 0 to turn dividers off."
                onChange={numberCallback}
                default={general.dividerWidth}
                unit="px"
              />
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
              <CustomBadge color="red" name="no preview" />
            </HStack>
            <VStack w="100%" spacing={6} p="2" pr="10" marginX={4} mb={8}>
              <DropdownField
                icon={RiListSettingsFill}
                name={data.dropdown.sidebar.name}
                options={data.dropdown.sidebar.values.map((v, i) => (
                  <option
                    value={i.toString()}
                    onClick={() => {
                      setSidebarValues({ ...sidebarValues, type: i });
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
                  parent="sidebar"
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
        bg={theme.lightPalette[1]}
        pos="fixed"
        right={{ md: '0', sm: '-100%' }}
      >
        <Flex w="100%">
          <ButtonPair
            // *** Mode ***
            content={[RiFirefoxFill, RiSpyFill]}
            bgSelected={[theme.darkPalette[1], theme.darkPalette[2]]}
            color={{ selected: theme.light, regular: theme.dark }}
            selected={selectedMode}
            onClick={setSelectedMode}
            icon
          />
          <Spacer />
          <ButtonPair
            // *** view ***
            content={[RiBrush3Fill, RiCodeSSlashFill]}
            bgSelected={[theme.darkPalette[1], theme.darkPalette[2]]}
            color={{ selected: theme.light, regular: theme.dark }}
            alignSelf="end"
            selected={selectedView}
            onClick={setSelectedView}
            icon
          />
        </Flex>
        {selectedView === 0 ? (
          <Container
            // *** browser preview ***
            maxW="100%"
            m="0"
            p="0"
            pos="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
            centerContent
          >
            <BrowserPreview
              dark={theme.dark}
              darkPalette={theme.darkPalette}
              light={theme.light}
              lightPalette={theme.lightPalette}
              red={theme.other.red}
              yellow={theme.other.yellow}
              green={theme.other.green}
              windowControls={includes.windowControls && includes.hideTabline}
            >
              <VStack
                paddingY={12}
                w="100%"
                spacing={8}
                mt={2}
                borderTop={`solid ${general.dividerWidth}px ${darkMain.palette[0]}`}
              >
                <PaletteGroup
                  colors={[theme.dark, theme.light]}
                  contrast={theme.darkPalette[3]}
                  detached
                />
                <PaletteGroup colors={theme.lightPalette} />
                <PaletteGroup colors={theme.darkPalette} />
                <PaletteGroup
                  colors={[
                    theme.other.accent,
                    theme.other.red,
                    theme.other.yellow,
                    theme.other.green,
                  ]}
                  detached
                />
              </VStack>
            </BrowserPreview>
          </Container>
        ) : (
          <Code
            darkMain={darkMain}
            lightMain={lightMain}
            otherMain={otherMain}
            darkPrivate={darkPrivate}
            lightPrivate={lightPrivate}
            otherPrivate={otherPrivate}
            theme={theme}
            sidebarType={sidebarValues.type}
            sidebarWidth={sidebarValues.width}
            sidebarCollapsedWidth={sidebarValues.collapsedWidth}
            includes={includes}
            general={general}
          />
        )}
      </Box>
    </Stack>
  );
}

export default Generator;
