import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {Container, Title, Subtitle, CenteredView} from './styles';

const SignUp: React.FC = () => {
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

            <CenteredView>
              <Button title="Cadastrar" onPress={() => {}} />
            </CenteredView>
          </ScrollView>
        </SafeAreaView>
      </Container>
    </>
  );
};

export default SignUp;
