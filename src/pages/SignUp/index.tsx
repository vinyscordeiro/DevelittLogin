/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback} from 'react';
import {Alert, SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';

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
import {Form} from '@unform/mobile';

const SignUp: React.FC = () => {
  const [terms, setTerms] = useState(false);

  const nav = useNavigation();

  const handleSubmit = useCallback(async (data: object): Promise<void> => {
    Alert.alert(`${data}`);
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        birthday: Yup.date().required('Data Obrigatória'),
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),
        password: Yup.string()
          .required('Senha obrigatório')
          .min(4, 'No mínimo 4 digitos'),
        password_confirmation: Yup.string()
          .required('Senha obrigatório')
          .min(4, 'No mínimo 4 digitos')
          .oneOf([Yup.ref('password')], 'Senhas precisam ser iguais'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      Alert.alert(err);
    }
  }, []);

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
        <SafeAreaView style={{height: 500}}>
          <ScrollView>
            <Form onSubmit={handleSubmit}>
              <Input
                name="name"
                autoCapitalize="words"
                icon="user"
                title="Nome"
              />
              <Input
                name="mail"
                autoCapitalize="none"
                icon="mail"
                title="Email"
              />
              <Input
                name="birthday"
                autoCompleteType="off"
                icon="calendar"
                title="Data de aniversário"
              />
              <Input
                name="password"
                autoCapitalize="none"
                secret={true}
                icon="lock"
                title="Senha"
              />
              <Input
                name="password_confirmation"
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
                <Button
                  disabled={!terms}
                  title="Cadastrar"
                  onPress={register}
                />
              </CenteredView>
            </Form>
          </ScrollView>
        </SafeAreaView>
      </Container>
    </>
  );
};

export default SignUp;
