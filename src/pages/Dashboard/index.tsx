import React, {useCallback} from 'react';
import {StatusBar} from 'react-native';

import Button from '../../components/Button';
import {useAuth} from '../../hooks/Context/AuthContext';

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

const Dashboard: React.FC = () => {
  const {user, signOut} = useAuth();
  const firstName = user.name.split(' ');

  const logout = useCallback(() => {
    signOut();
  }, [signOut]);

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

        {firstName[0] ? (
          <WelcomeTitle>Hey {firstName[0]}</WelcomeTitle>
        ) : (
          <WelcomeTitle>Hey Usuário</WelcomeTitle>
        )}
        <WelcomeSubTitle>Seja bem-vindo a Develitt</WelcomeSubTitle>
        <CenteredView>
          <UserCard>
            <Title>Dados Pessoais</Title>
            <Subtitle>Nome</Subtitle>
            <Information>{user.name}</Information>
            <Subtitle>Email</Subtitle>
            <Information>{user.email}</Information>
            <Subtitle>Data de aniversário</Subtitle>
            <Information>{user.birthday}</Information>
            <Age>22 anos e a contar!</Age>
          </UserCard>
          <Button title="Sair" onPress={logout} />
        </CenteredView>
      </Container>
    </>
  );
};

export default Dashboard;
