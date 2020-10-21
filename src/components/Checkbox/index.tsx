import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import {Container} from './styles';

interface CheckboxProps extends TouchableOpacityProps {
  checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({checked, ...rest}) => {
  if (checked) {
    return (
      <>
        <Container {...rest}>
          <Feather name="check-square" size={18} />
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container {...rest}>
          <Feather name="square" size={18} />
        </Container>
      </>
    );
  }
};

export default Checkbox;
