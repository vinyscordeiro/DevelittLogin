import React, {useCallback} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
import {
  Container,
  GreenLargeBubble,
  GreenMediumBubble,
  WelcomeTitle,
  WelcomeSubTitle,
  CenteredView,
  UserCard,
  Title,
  Subtitle,
  Information,
  Age,
} from './styles';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  const logout = useCallback(() => {
    navigation.navigate('Welcome');
  }, [navigation]);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Container>
        <GreenLargeBubble />
        <GreenMediumBubble />

        <WelcomeTitle>Hey Vinicius</WelcomeTitle>
        <WelcomeSubTitle>Seja bem-vindo a Develitt</WelcomeSubTitle>
        <CenteredView>
          <UserCard>
            <Title>Dados Pessoais</Title>
            <Subtitle>Nome</Subtitle>
            <Information>Vinicius Silva Cordeiro</Information>
            <Subtitle>Email</Subtitle>
            <Information>vinyscordeiro@gmail.com</Information>
            <Subtitle>Data de aniversário</Subtitle>
            <Information>15/04/1998</Information>
            <Age>22 anos e a contar!</Age>
          </UserCard>
          <Button title="Sair" onPress={logout} />
        </CenteredView>
      </Container>
    </>
  );
};

export default Welcome;
