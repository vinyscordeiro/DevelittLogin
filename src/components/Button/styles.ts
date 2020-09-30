import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Container = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  background-color: #5ec22e;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonTitle = styled.Text`
  align-items: center;
  justify-content: center;
  font-family: 'DMSans-Medium';
  color: #fff;
`;

export const Icon = styled(FontAwesome)`
  position: absolute;
  right: 15px;
  color: #fff;
`;
