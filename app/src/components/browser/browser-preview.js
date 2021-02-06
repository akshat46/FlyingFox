import { Flex, Box, HStack, Spacer } from '@chakra-ui/react';
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiBookMarkFill,
  RiBookmarkLine,
  RiCheckboxBlankCircleFill,
  RiHome5Fill,
  RiLock2Fill,
  RiMenu3Fill,
  RiMore2Fill,
  RiRestartLine,
  RiShieldFlashFill,
} from 'react-icons/ri';
import IconWrapper from './icon-wrapper';

function setTitlebarControlStyles(color) {
  return { color: color, opacity: 0.8 };
}
function BrowserPreview(props) {
  let spacing = { sm: 1, md: 0, lg: 2 };
  return (
    <Box
      w="90%"
      maxW="1200px"
      minH="50vh"
      bg={props.dark}
      boxShadow="dark-lg"
      p={2}
      borderRadius="lg"
    >
      <Flex>
        <HStack spacing={spacing} ml={spacing} fontSize="sm">
          {props.windowControls && (
            <>
              <RiCheckboxBlankCircleFill
                style={setTitlebarControlStyles(props.red)}
              />
              <RiCheckboxBlankCircleFill
                style={setTitlebarControlStyles(props.yellow)}
              />
              <RiCheckboxBlankCircleFill
                style={setTitlebarControlStyles(props.green)}
              />
            </>
          )}
          <HStack pl={spacing} spacing={1}>
            <IconWrapper
              size="lg"
              color={props.light}
              hover_bg={props.darkPalette[2]}
            >
              <RiArrowLeftSLine />
            </IconWrapper>
            <IconWrapper
              size="lg"
              color={props.light}
              hover_bg={props.darkPalette[2]}
            >
              <RiArrowRightSLine />
            </IconWrapper>
            <IconWrapper color={props.light} hover_bg={props.darkPalette[2]}>
              <RiRestartLine />
            </IconWrapper>
            <IconWrapper color={props.light} hover_bg={props.darkPalette[2]}>
              <RiHome5Fill />
            </IconWrapper>
          </HStack>
        </HStack>
        <Spacer />
        <Flex
          minW={{ sm: 'auto', md: '30%', lg: '50%' }}
          borderRadius="md"
          p={1}
          bg={props.darkPalette[1]}
        >
          <IconWrapper
            size="xs"
            color={props.light}
            hover_bg={props.darkPalette[2]}
          >
            <RiLock2Fill />
          </IconWrapper>
          <Spacer />
          <Box
            w="40%"
            alignSelf="center"
            h="12px"
            bg={props.lightPalette[2]}
            borderRadius="lg"
          />
          <Spacer />
          <IconWrapper
            size="xs"
            color={props.light}
            hover_bg={props.darkPalette[2]}
          >
            <RiBookmarkLine />
          </IconWrapper>
        </Flex>
        <Spacer />
        <HStack spacing={1}>
          <IconWrapper color={props.light} hover_bg={props.darkPalette[2]}>
            <RiBookMarkFill />
          </IconWrapper>
          <IconWrapper color={props.light} hover_bg={props.darkPalette[2]}>
            <RiShieldFlashFill />
          </IconWrapper>
          <IconWrapper color={props.light} hover_bg={props.darkPalette[2]}>
            <RiMore2Fill />
          </IconWrapper>
          <IconWrapper color={props.light} hover_bg={props.darkPalette[2]}>
            <RiMenu3Fill />
          </IconWrapper>
        </HStack>
      </Flex>
      {props.children}
    </Box>
  );
}

export default BrowserPreview;
