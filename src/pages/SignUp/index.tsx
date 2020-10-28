/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback, useRef} from 'react';
import {Alert, SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {FormHandles} from '@unform/core';
import {Form} from '@unform/mobile';
import {toDate} from 'date-fns';

import api from '../../services/api';

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

interface signUpFormData {
  name: string;
  birthday: string;
  email: string;
  password: string;
  password_confirmation: string;
}
const SignUp: React.FC = () => {
  const [terms, setTerms] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const nav = useNavigation();

  const handleSignUp = useCallback(
    async ({
      name,
      birthday,
      email,
      password,
      password_confirmation,
    }: signUpFormData): Promise<void> => {
      try {
        const birthdayArray = birthday.split('/');
        const day = parseInt(birthdayArray[0]);
        const month = parseInt(birthdayArray[1]) - 1;
        const year = parseInt(birthdayArray[2]);

        if (
          birthdayArray[2].length < 2 ||
          birthdayArray[2].length === 3 ||
          birthdayArray[2].length > 4
        ) {
          throw new Error('Ano inválido');
        }

        if (month < 1 || month > 12) {
          throw new Error('Mês inválido');
        }

        if (day < 1 || day > 31) {
          throw new Error('Dia inválido');
        }

        const mountedDate = toDate(new Date(year, month, day));
        const data = {
          name,
          birthday: mountedDate,
          email,
          password,
          password_confirmation,
        };

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

        await schema.validate(data, {abortEarly: false});
        await api.post('/user', data);

        Alert.alert(
          'Cadastro realizado com sucesso',
          `${data.name} já podes fazer login na sua conta`,
        );
        nav.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          Alert.alert('Erro no preenchimento', err.message);
        } else {
          Alert.alert(
            'Erro ao fazer login',
            'Verifique seus dados e tente novamente',
          );
        }
      }
    },
    [nav],
  );

  const acceptTerms = useCallback(() => {
    setTerms(!terms);
  }, [terms]);

  return (
    <>
      <Container>
        <Title>Vamos lá</Title>
        <Subtitle>Crie uma conta para continuar!</Subtitle>
        <SafeAreaView style={{height: 500}}>
          <ScrollView>
            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                name="name"
                autoCapitalize="words"
                icon="user"
                title="Nome"
              />
              <Input
                name="email"
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
                  onPress={() => {
                    formRef.current?.submitForm();
                  }}
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
