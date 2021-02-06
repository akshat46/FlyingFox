import React from 'react';
import {
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
import SubText from './sub-text';

function NumberField(props) {
  const [value, setValue] = React.useState(props.default);
  const handleChange = event => {
    let v = event.target.value;
    setValue(v);
    if (/^\d+$/.test(v)) {
      props.onChange(v, props.name, props.parent);
    }
  };
  let icon;
  if (props.type === 'width') {
    icon = <AiOutlineColumnWidth />;
  } else if (props.type === 'time') {
    icon = <RiTimeFill />;
  } else {
  }
  return (
    <HStack width="100%" justify="space-between" align="start" color="gray.600">
      <VStack spacing={1} maxW="70%" float="left" textAlign="left">
        <HStack spacing={2} alignSelf="start">
          {icon}
          <Text>{props.name}</Text>
        </HStack>
        <SubText>{props.subtext}</SubText>
      </VStack>
      <NumberInput value={value}>
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
    </HStack>
  );
}

export default NumberField;
