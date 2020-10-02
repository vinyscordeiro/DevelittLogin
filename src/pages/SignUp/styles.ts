import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 0 0px 0 20px;
`;

export const Title = styled.Text`
  margin: 70px 0 12px 0;
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

export const CenteredView = styled.View`
  margin: 30px 0 0 -15px;
  align-items: center;
`;

export const TermsView = styled.View`
  flex-direction: row;
  margin: 5px;
`;

export const TermsText = styled.Text`
  margin: 0 7px 0 7px;
  font-family: 'DMSans-Regular';
  font-size: 14px;
  color: #747474;
`;

export const TermsTextBold = styled.Text`
  font-family: 'DMSans-Bold';
  font-size: 16px;
  color: #747474;
`;
