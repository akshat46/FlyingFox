import { HStack } from '@chakra-ui/react';
import Palette from './palette';

function PaletteGroup(props) {
  return (
    <HStack
      bg={props.contrast ? props.contrast : ''}
      p={props.contrast ? 4 : ''}
      boxShadow={props.detached ? '' : 'lg'}
      borderRadius="md"
      overflow={props.detached ? '' : 'hidden'}
      spacing={props.detached ? 6 : 0}
    >
      {props.colors.map(c => {
        return <Palette color={c} detached={props.detached} />;
      })}
    </HStack>
  );
}

export default PaletteGroup;
