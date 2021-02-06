import React from 'react';
import {
  Tooltip,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  HStack,
} from '@chakra-ui/react';
import {
  RiContrast2Fill,
  RiContrast2Line,
  RiErrorWarningFill,
  RiPaintFill,
} from 'react-icons/ri';
const convert = require('color-convert');

function ColorField(props) {
  const [value, setValue] = React.useState(props.default);
  const [tooLight, setTooLight] = React.useState(false);
  const [error, setError] = React.useState(false);
  const handleChange = event => {
    let v = event.target.value;
    v = v[0] !== '#' ? '#' + v : v;
    v = v[0] === '#' && v[1] === '#' ? v.substring(1) : v;
    v.toLowerCase();
    setValue(v);
    if (/^#[0-9A-F]{6}$/i.test(v) || /^#([0-9A-F]{3}){1,2}$/i.test(v)) {
      if (props.name === 'Dark') setTooLight(convert.hex.hsl(v)[2] > 60);
      else if (props.name === 'Light') setTooLight(convert.hex.hsl(v)[2] < 40);

      setError(false);
      props.subtag
        ? props.onChange(v, `${props.name}_${props.subtag}`)
        : props.onChange(v, props.name);
    } else {
      setError(true);
    }
  };
  let icon;
  if (props.name === 'Dark') {
    icon = <RiContrast2Fill />;
  } else if (props.name === 'Light') {
    icon = <RiContrast2Line />;
  } else {
    icon = <RiPaintFill />;
  }
  // TODO: onblur to generate palette when lost focus
  return (
    <Box width="100%" color="gray.600">
      <HStack spacing={2} float="left">
        {icon}
        <Text fontSize="md">{props.name}</Text>
        {/* when color is too light */}
      </HStack>
      <InputGroup width="130px" float="right" size="sm">
        <Input
          borderRadius="md"
          value={value}
          onChange={handleChange}
          onBlur={handleChange}
          placeholder={props.default}
          variant="filled"
          errorBorderColor="red.300"
          isInvalid={error}
        />
        <InputRightElement display={tooLight ? 'inherit' : 'none'}>
          <Tooltip
            shouldWrapChildren
            label={`Color might be too ${
              props.name === 'Light' ? 'dark' : 'light'
            }.`}
            placement="bottom"
          >
            <Box color="orange.200">
              <RiErrorWarningFill />
            </Box>
          </Tooltip>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default ColorField;
