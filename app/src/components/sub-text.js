const { Text } = require('@chakra-ui/react');

const SubText = props => (
  <Text align="start" m="0" p="0" fontSize="xs" color="gray.400">
    {props.text}
    {props.children}
  </Text>
);

export default SubText;
