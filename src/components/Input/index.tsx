import React, {useState, useCallback} from 'react';

import {TextInputProps} from 'react-native';
import {
  Container,
  ButtonTitle,
  InputBox,
  Icon,
  Eye,
  BottomBorder,
} from './styles';

interface InputProps extends TextInputProps {
  title: string;
  icon: string;
  secret?: boolean;
}

const Input: React.FC<InputProps> = ({
  icon,
  title,
  secret,
  ...rest
}: InputProps) => {
  const [visible, setSecret] = useState(!!secret);

  const changeVisibility = useCallback(() => {
    setSecret(!visible);
  }, [visible]);

  if (secret) {
    return (
      <>
        <Container>
          <ButtonTitle>{title}</ButtonTitle>
          <Icon name={icon} size={24} />
          <InputBox secureTextEntry={visible} {...rest} />
          {visible ? (
            <Eye onPress={changeVisibility} name="eye" size={24} />
          ) : (
            <Eye onPress={changeVisibility} name="eye-off" size={24} />
          )}
          <BottomBorder />
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container>
          <ButtonTitle>{title}</ButtonTitle>
          <Icon name={icon} size={24} />
          <InputBox secureTextEntry={secret} {...rest} />
          <BottomBorder />
        </Container>
      </>
    );
  }
};

export default Input;
