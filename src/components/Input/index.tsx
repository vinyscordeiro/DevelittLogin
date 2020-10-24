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

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({
  name,
  icon,
  title,
  secret = false,
  ...rest
}: InputProps) => {
  const {fieldName, defaultValue = '', registerField} = useField(name);
  const inputValueRef = useRef<InputValueReference>({value: defaultValue});

  const [visible, setVisible] = useState(!!secret);

  const changeVisibility = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container>
        <ButtonTitle>{title}</ButtonTitle>
        <Icon name={icon} size={24} />
        <InputBox
          defaultValue={defaultValue}
          secureTextEntry={visible}
          onChangeText={(value) => {
            inputValueRef.current.value = value;
          }}
          {...rest}
        />
        {secret &&
          (visible ? (
            <Eye onPress={changeVisibility} name="eye" size={24} />
          ) : (
            <Eye onPress={changeVisibility} name="eye-off" size={24} />
          ))}
        <BottomBorder />
      </Container>
    </>
  );
};
export default Input;
