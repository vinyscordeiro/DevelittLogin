import React, {useCallback} from 'react';

import {useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Title,
  Subtitle,
  SignUpTitle,
  SignUpTitleBold,
  CenteredView,
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const navigateToSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  const navigateToDashboard = useCallback(() => {
    navigation.navigate('Dashboard');
  }, [navigation]);

  return (
    <>
      <Container>
        <Title>Faça seu Login</Title>
        <Subtitle>Bem-vindo de volta, és bué importante para nós!</Subtitle>
        <Input autoCapitalize="none" icon="user" title="Email" />
        <Input autoCompleteType="off" icon="lock" title="Senha" secret={true} />

        <CenteredView>
          <Button title="ENTRAR" onPress={navigateToDashboard} />
          <SignUpTitle>Não tem conta ainda?</SignUpTitle>
          <SignUpTitleBold onPress={navigateToSignUp}>
            Cadastre-se
          </SignUpTitleBold>
        </CenteredView>
      </Container>
    </>
  );
};

export default SignIn;
