import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const GreenLargeBubble = styled.View`
  position: absolute;
  top: -114px;
  left: 48px;
  border: 0;
  background-color: #5ec22e;
  width: 519px;
  height: 519px;
  border-radius: 300px;
`;

export const GreenMediumBubble = styled.View`
  position: absolute;
  top: 271px;
  left: -140px;
  border: 0;
  background-color: #6afa5e;
  width: 239px;
  height: 239px;
  border-radius: 130px;
`;

export const WelcomeTitle = styled.Text`
  margin-top: 460px;
  font-family: 'DMSans-Bold';
  font-size: 24px;
  font-weight: bold;
`;

export const WelcomeSubTitle = styled.Text`
  margin: 15px 15px 40px 15px;
  font-size: 14px;
  font-family: 'DMSans-Regular';
  width: 270px;
  text-align: center;
`;
