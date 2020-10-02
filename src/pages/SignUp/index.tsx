import React, {useState, useCallback} from 'react';
import {Alert, SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';

import {
  Container,
  Title,
  Subtitle,
  CenteredView,
  TermsView,
  TermsText,
  TermsTextBold,
} from './styles';

const SignUp: React.FC = () => {
  const [terms, setTerms] = useState(false);
  const nav = useNavigation();

  const acceptTerms = useCallback(() => {
    setTerms(!terms);
  }, [terms]);

  const register = useCallback(() => {
    Alert.alert(
      'Pronto',
      'Cadastro realizado com sucesso, já podes fazer login',
    );
    nav.navigate('SignIn');
  }, [nav]);
  return (
    <>
      <Container>
        <Title>Vamos lá</Title>
        <Subtitle>Crie uma conta para continuar!</Subtitle>
        <SafeAreaView>
          <ScrollView>
            <Input autoCapitalize="words" icon="user" title="Nome" />
            <Input autoCapitalize="none" icon="mail" title="Email" />
            <Input
              autoCompleteType="off"
              icon="calendar"
              title="Data de aniversário"
            />
            <Input
              autoCapitalize="none"
              secret={true}
              icon="lock"
              title="Senha"
            />
            <Input
              autoCapitalize="none"
              secret={true}
              icon="lock"
              title="Confirmar Senha"
            />

            <TermsView>
              <Checkbox checked={terms} onPress={acceptTerms} />
              <TermsText>Ao criar sua conta voce concorda com os</TermsText>
            </TermsView>
            <TermsTextBold>Termos e Condições</TermsTextBold>

            <CenteredView>
              <Button disabled={terms} title="Cadastrar" onPress={register} />
            </CenteredView>
          </ScrollView>
        </SafeAreaView>
      </Container>
    </>
  );
};

export default SignUp;
