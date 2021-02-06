import React from 'react';
import { Box } from '@chakra-ui/react';

function IconWrapper(props) {
  let spacing = { sm: 1, md: 0, lg: 1 };
  return (
    <Box
      fontSize={
        props.size == null
          ? { md: '1vw', lg: 'sm' }
          : { sm: props.size, md: '1vw', lg: props.size }
      }
      borderRadius="md"
      marginX={spacing}
      p="7px"
      color={props.color}
      _hover={{ background: props.hover_bg }}
    >
      {props.children}
    </Box>
  );
}

export default IconWrapper;
