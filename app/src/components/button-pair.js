import React, { useState } from 'react';
import { ButtonGroup, Button } from '@chakra-ui/react';

function ButtonPair(props) {
  let { selected: c_sel, regular: c_reg } = props.color
    ? props.color.selected
    : {};
  let { selected: b_sel, regular: b_reg } = props.bg;
  let shadow = `0 5px 25px -10px ${b_sel[0]}A0, -5px 0 10px -5px ${b_sel[0]}A0, 5px 0 10px -5px ${b_sel[0]}A0`;
  return (
    <ButtonGroup
      alignSelf={props.alignSelf}
      mb={8}
      colorScheme="gray"
      size="sm"
    >
      {props.content.map((c, i) => {
        return (
          <Button
            bgGradient={
              props.selected == i ? `linear(to-r,${b_sel[0]},${b_sel[1]})` : ''
            }
            bg="transparent"
            boxShadow={props.selected == i ? shadow : 'none'}
            color={props.selected == i ? c_sel : c_reg}
            _hover={
              props.selected == i
                ? { background: '' }
                : { background: 'gray.300' }
            }
            _focus={{ border: 'none' }}
            onClick={() => props.onClick(i)}
          >
            {props.icon ? c() : c}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}

export default ButtonPair;
