import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  margin-bottom: 15px;
  width: 93%;
  height: 70px;
`;

export const ButtonTitle = styled.Text`
  font-family: 'DMSans-Medium';
  color: #8f92a1;
  margin-left: 3px;
`;

export const Icon = styled(Feather)`
  margin: 13px 0 0 11px;
  color: #000;
`;

export const InputBox = styled.TextInput`
  position: absolute;
  left: 40px;
  top: 19px;
  width: 280px;
  font-family: 'DMSans-Medium';
  font-size: 16px;
`;

export const Eye = styled(Feather)`
  position: absolute;
  right: 10px;
  top: 30px;
`;

export const BottomBorder = styled.View`
  position: absolute;
  bottom: 0px;
  border: 1px solid #8f92a1;
  width: 100%;
`;
