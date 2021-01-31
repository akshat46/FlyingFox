import React, { useState } from 'react';
import {
  Box,
  InputGroup,
  InputRightAddon,
  NumberInput,
  NumberInputField,
  Text,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { AiOutlineColumnWidth } from 'react-icons/ai';
import { RiTimeFill } from 'react-icons/ri';

function NumberField(props) {
  const [value, setValue] = React.useState(props.default);
  const handleChange = event => {
    let v = event.target.value;
    setValue(v);
    if (/^\d+$/.test(v)) {
      props.onChange(v, props.name);
    }
  };
  let icon;
  if (props.type == 'width') {
    icon = <AiOutlineColumnWidth />;
  } else if (props.type == 'time') {
    icon = <RiTimeFill />;
  } else {
  }
  return (
    <Box width="100%" color="gray.600">
      <VStack spacing={1} float="left" textAlign="left">
        <HStack spacing={2} alignSelf="start">
          {icon}
          <Text>{props.name}</Text>
        </HStack>
        <Text fontSize="xs" color="gray.400" alignSelf="start">
          {props.subtext}
        </Text>
      </VStack>
      <NumberInput float="right" value={value}>
        <InputGroup size="sm" w="130px">
          <NumberInputField
            type="number"
            w="80px"
            size="sm"
            borderLeftRadius="md"
            onChange={handleChange}
            placeholder={props.default}
          />
          <InputRightAddon borderRightRadius="md" children={props.unit} />
        </InputGroup>
      </NumberInput>
    </Box>
  );
}

export default NumberField;
