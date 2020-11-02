import React, {useCallback} from 'react';
import {StatusBar} from 'react-native';

import Button from '../../components/Button';
import {useAuth} from '../../hooks/Context/AuthContext';
import {formattedDate, age} from '../../utils/DateConvert';

import {
  Container,
  GreenLargeBubble,
  GreenMediumBubble,
  WelcomeView,
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
  const nameArray = user.name ? user.name.split(' ') : ['Usuário'];
  const firstName = nameArray[0];
  const date = user.birthday;
  const stringDate = formattedDate(date);
  const userAge = age(user.birthday);

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
        <WelcomeView>
          <WelcomeTitle>Hey {firstName}</WelcomeTitle>
          <WelcomeSubTitle>Seja bem-vindo a Develitt</WelcomeSubTitle>
        </WelcomeView>
        <CenteredView>
          <UserCard>
            <Title>Dados Pessoais</Title>
            <Subtitle>Nome</Subtitle>
            <Information>{user.name}</Information>
            <Subtitle>Email</Subtitle>
            <Information>{user.email}</Information>
            <Subtitle>Data de aniversário</Subtitle>
            <Information>{`${stringDate}`}</Information>
            {userAge < 0 ? (
              <Age> {'Após o nascimento começaremos a contar!'}</Age>
            ) : (
              <Age> {`${userAge} anos e a contar!`}</Age>
            )}
          </UserCard>
          <Button title="Sair" onPress={logout} />
        </CenteredView>
      </Container>
    </>
  );
};

export default Dashboard;
