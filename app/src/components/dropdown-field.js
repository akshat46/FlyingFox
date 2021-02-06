import { Box, Select, Text, HStack, VStack } from '@chakra-ui/react';

function DropdownField(props) {
  return (
    <Box width="100%" color="gray.600">
      <VStack spacing={1} float="left" textAlign="left">
        <HStack spacing={2} alignSelf="start">
          {props.icon()}
          <Text>{props.name}</Text>
        </HStack>
        <Text fontSize="xs" color="gray.400" alignSelf="start">
          {props.subtext}
        </Text>
      </VStack>
      <Box width="130px" float="right">
        <Select
          _focus={{ border: 'none' }}
          onChange={props.callback}
          borderRadius="md"
          variant="filled"
          size="sm"
        >
          {props.options}
        </Select>
      </Box>
    </Box>
  );
}

export default DropdownField;
