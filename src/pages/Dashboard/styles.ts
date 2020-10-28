import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: flex-end;
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
  margin: 110px 112px 0 0;
  font-family: 'DMSans-Bold';
  font-size: 26px;
  font-weight: bold;
  text-align: right;
`;

export const WelcomeSubTitle = styled.Text`
  margin: 10px 15px 40px 15px;
  font-size: 18px;
  font-family: 'DMSans-Regular';
  width: 270px;
  text-align: center;
`;
export const CenteredView = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const UserCard = styled.View`
  background-color: #eeeeee;
  width: 80%;
  height: 300px;
  border-radius: 30px;
  padding: 15px;
  align-items: center;
  margin-bottom: 50px;
  elevation: 2;
`;

export const Title = styled.Text`
  font-family: 'DMSans-Bold';
  font-size: 22px;
  margin: 16px 0 10px 0;
`;

export const Subtitle = styled.Text`
  font-family: 'DMSans-Bold';
  font-size: 12px;
  margin-top: 12px;
`;

export const Information = styled.Text`
  font-family: 'DMSans-Regular';
  font-size: 18px;
`;

export const Age = styled.Text`
  margin: 15px 0;
  font-family: 'DMSans-Bold';
  font-size: 18px;
`;
