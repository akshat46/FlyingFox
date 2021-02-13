import SubText from './sub-text';

const { Checkbox, Badge } = require('@chakra-ui/react');

const CustomBadge = props => (
  <Badge variant="subtle" ml="1" colorScheme={props.color}>
    {props.name}
  </Badge>
);

const CustomCheckbox = props => {
  return (
    <Checkbox
      {...props.styles}
      isChecked={props.isChecked}
      onChange={e => props.onChange(e)}
      colorScheme="gray"
      alignItems="center"
      size="md"
      isDisabled={props.disabled}
    >
      {props.children}
      {props.badge && (
        <CustomBadge name={props.badge.name} color={props.badge.color} />
      )}
      {props.subText && <SubText>{props.subText}</SubText>}
    </Checkbox>
  );
};

export default CustomCheckbox;
