import styled, {css} from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  flex: 1;
  padding: 0 0px 0 20px;

  ${(modalVisible) =>
    modalVisible &&
    css`
      background-color: rgba(229, 229, 229, 0.7);
    `}
`;

export const ModalFingerprintView = styled.View`
  margin: 240px 17px 0 17px;
  background-color: #fff;
  width: 90%;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;

export const ModalFingerprintIcon = styled(Ionicons)`
  margin-top: 30px;
`;

export const ModalFingerprintText = styled.Text`
  font-family: 'DMSans-regular';
  margin-top: 15px;
`;

export const ModalFingerprintLink = styled.Text`
  font-family: 'DMSans-Bold';
  font-size: 14px;
  margin: 4px 0 30px 0;
`;

export const Title = styled.Text`
  margin: 100px 0 12px 0;
  font-family: 'DMSans-Bold';
  font-size: 24px;
  color: #000;
`;

export const Subtitle = styled.Text`
  margin-bottom: 30px;
  font-family: 'DMSans-Medium';
  font-size: 14px;
  color: #747474;
`;

export const FingerprintView = styled.View`
  flex-direction: row;
`;

export const FingerprintText = styled.Text`
  margin: 5px 0 0 8px;
  font-family: 'DMSans-Bold';
`;

export const CenteredView = styled.View`
  margin: 30px 0 0 -15px;
  align-items: center;
`;

export const SignUpTitle = styled.Text`
  margin-top: 55px;
`;

export const SignUpTitleBold = styled.Text`
  font-family: 'DMSans-Bold';
  color: #000;
  margin-left: 4px;
`;
