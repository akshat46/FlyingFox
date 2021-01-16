import React, { useState } from 'react';
import { Box, Input, Text, HStack } from '@chakra-ui/react';
import { RiContrast2Fill, RiContrast2Line, RiPaintFill } from 'react-icons/ri';

function ColorField(props) {
  const [value, setValue] = React.useState(props.default);
  const handleChange = event => {
    let v = event.target.value;
    v = v[0] !== '#' ? '#' + v : v;
    v = v[0] === '#' && v[1] === '#' ? v.substring(1) : v;
    v.toLowerCase();
    setValue(v);
    if (/^#[0-9A-F]{6}$/i.test(v) || /^#([0-9A-F]{3}){1,2}$/i.test(v)) {
      props.onChange(v, props.name);
    }
  };
  let icon;
  if (props.name == 'Dark') {
    icon = <RiContrast2Fill />;
  } else if (props.name == 'Light') {
    icon = <RiContrast2Line />;
  } else {
    icon = <RiPaintFill />;
  }
  // TODO: onblur to generate palette when lost focus
  return (
    <Box width="100%" color="gray.600">
      <HStack spacing={2} float="left">
        {icon}
        <Text size="md">{props.name}</Text>
      </HStack>
      <Input
        width="130px"
        size="sm"
        float="right"
        value={value}
        borderRadius="md"
        onChange={handleChange}
        placeholder={props.default}
      />
    </Box>
  );
}

export default ColorField;
