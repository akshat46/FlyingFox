import { Box } from '@chakra-ui/react';

function Palette(props) {
  return (
    <Box
      boxSize="8vmin"
      borderRadius={props.detached ? 'md' : ''}
      boxShadow="lg"
      bg={props.color}
    ></Box>
  );
}

export default Palette;
