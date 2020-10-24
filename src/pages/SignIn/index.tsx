import React, {useState, useCallback, useEffect, useRef} from 'react';
import {Alert, Switch, View} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

import {useNavigation} from '@react-navigation/native';
import {FormHandles} from '@unform/core';
import {Form} from '@unform/mobile';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Title,
  Subtitle,
  SignUpTitle,
  SignUpTitleBold,
  FingerprintView,
  FingerprintText,
  CenteredView,
} from './styles';

interface signInFormData {
  mail: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const [fingerprintEnabled, setFingerprintEnabled] = useState(false);
  const [fingerprintAvailable, setFingerprintAvailable] = useState(false);
  const [biometry, setBiometry] = useState(false);

  const handleSignIn = useCallback(
    async (data: signInFormData): Promise<void> => {
      try {
        const schema = Yup.object().shape({
          mail: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {abortEarly: false});

        navigation.navigate('Dashboard');
      } catch (err) {
        Alert.alert(err.title, err.message);
      }
    },
    [navigation],
  );

  const toggleSwitch = useCallback(async () => {
    const available = await LocalAuthentication.hasHardwareAsync();
    if (available) {
      setFingerprintEnabled((previousState) => !previousState);
    } else {
      Alert.alert(
        'Biometria não disponível',
        'Dispositivo não possui biometria disponível',
      );
    }
  }, []);

  const navigateToSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  /*const navigateToDashboard = useCallback(() => {
    navigation.navigate('Dashboard');
  }, [navigation]);*/

  useEffect(() => {
    // Solicitar do banco de dados  SQLite se digital está disponível nesse dispositivo setar na variavel fingerprint available.
    setFingerprintAvailable(true);

    async function loginWithBiometry() {
      const {success} = await LocalAuthentication.authenticateAsync();

      if (success) {
        navigation.navigate('Dashboard');
      }
    }
    if (fingerprintAvailable) {
      loginWithBiometry();
    }
  }, [fingerprintAvailable, navigation]);

  useEffect(() => {
    async function haveAvailableBiometry() {
      const available = await LocalAuthentication.hasHardwareAsync();
      setBiometry(available);
    }
    async function haveAvailableBiometryData() {
      await LocalAuthentication.isEnrolledAsync();
    }

    haveAvailableBiometry();
    haveAvailableBiometryData();
  }, []);

  return (
    <>
      <Container>
        <Title>Faça seu Login</Title>
        <Subtitle>Bem-vindo de volta, és bué importante para nós!</Subtitle>
        <Form ref={formRef} onSubmit={handleSignIn}>
          <Input name="mail" autoCapitalize="none" icon="user" title="Email" />
          <Input
            name="password"
            autoCompleteType="off"
            icon="lock"
            title="Senha"
            secret={true}
          />

          {biometry ? (
            <FingerprintView>
              <Switch
                trackColor={{false: '#767577', true: '#5ec22e'}}
                thumbColor={'#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={fingerprintEnabled}
              />
              <FingerprintText>Ativar uso da digital</FingerprintText>
            </FingerprintView>
          ) : (
            <View />
          )}

          <CenteredView>
            <Button
              title="ENTRAR"
              onPress={() => {
                formRef.current?.submitForm();
              }}
            />
            <SignUpTitle>Não tem conta ainda?</SignUpTitle>
            <SignUpTitleBold onPress={navigateToSignUp}>
              Cadastre-se
            </SignUpTitleBold>
          </CenteredView>
        </Form>
      </Container>
    </>
  );
};

export default SignIn;
