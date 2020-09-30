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
} from './styles';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  const navigateToSignIn = useCallback(() => {
    navigation.navigate('SignIn');
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

        <WelcomeTitle>Bem vindo a Develitt Login</WelcomeTitle>
        <WelcomeSubTitle>
          Faça login na sua conta e veja como é simples ter o seu perfil online
        </WelcomeSubTitle>
        <Button
          title="INICIAR"
          icon="long-arrow-right"
          onPress={navigateToSignIn}
        />
      </Container>
    </>
  );
};

export default Welcome;
