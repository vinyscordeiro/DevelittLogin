import React, {useState, useCallback, useEffect, useRef} from 'react';
import {useField} from '@unform/core';

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
  name: string;
  icon: string;
  title: string;
  secret?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  icon,
  title,
  secret,
  ...rest
}: InputProps) => {
  const inputRef = useRef(null);
  const {fieldName, defaultValue, registerField} = useField(name);

  const [visible, setVisible] = useState(!!secret);

  const changeVisibility = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  if (secret) {
    return (
      <>
        <Container>
          <ButtonTitle>{title}</ButtonTitle>
          <Icon name={icon} size={24} />
          <InputBox
            defaultValue={defaultValue}
            ref={inputRef}
            secureTextEntry={visible}
            {...rest}
          />
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
          <Icon ref={inputRef} name={icon} size={24} />
          <InputBox
            defaultValue={defaultValue}
            ref={inputRef}
            secureTextEntry={secret}
            {...rest}
          />
          <BottomBorder />
        </Container>
      </>
    );
  }
};

export default Input;
