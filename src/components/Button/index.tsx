import React from 'react';

import {ButtonProps} from 'react-native';
import {Container, ButtonTitle, Icon} from './styles';

interface NewButtonProps extends ButtonProps {
  title: string;
  icon?: string;
}

const Button: React.FC<NewButtonProps> = ({
  icon,
  title,
  ...rest
}: NewButtonProps) => {
  if (icon) {
    return (
      <>
        <Container {...rest}>
          <ButtonTitle>{title}</ButtonTitle>
          <Icon name={icon} size={15} />
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container {...rest}>
          <ButtonTitle>{title}</ButtonTitle>
        </Container>
      </>
    );
  }
};

export default Button;
