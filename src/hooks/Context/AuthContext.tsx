import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

interface User {
  id: string;
  name: string;
  birthday: Date;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
  biometry: boolean;
}

interface SignInDTO {
  email: string;
  password: string;
  biometry: boolean;
}

interface AuthContextData {
  user: User;
  signInForm(credentials: SignInDTO): Promise<void>;
  signInBiometry(token: string): Promise<void>;
  signOut(): Promise<void>;
  biometry: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [dados, setDados] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const token = await AsyncStorage.getItem('@DevLogin:token');
      const user = await AsyncStorage.getItem('@DevLogin:user');
      const biometry = await AsyncStorage.getItem('@DevLogin:biometry');

      if (token && user && biometry) {
        setDados({
          token,
          user: JSON.parse(user),
          biometry: JSON.parse(biometry),
        });
      }
    }

    loadStoragedData();
  }, []);

  const signInForm = useCallback(async (data: SignInDTO) => {
    const response = await api.post('/sessions', data);
    const {token, user} = response.data;
    const {biometry} = data;

    await AsyncStorage.setItem('@DevLogin:token', token);
    await AsyncStorage.setItem('@DevLogin:user', JSON.stringify(user));
    setDados({token, user, biometry});
  }, []);

  const signInBiometry = useCallback(
    async (token: string) => {
      const response = await api.post('/me', token);
      const {user} = response.data;
      const biometry = dados.biometry;

      if (!user) {
        throw new Error(
          'Usuário não encontrado com esse token utilize o login com email e senha',
        );
      }

      await AsyncStorage.setItem('@DevLogin:user', JSON.stringify(user));
      setDados({token, user, biometry});
    },
    [dados.biometry],
  );

  const signOut = useCallback(async () => {
    if (dados.biometry) {
      await AsyncStorage.removeItem('@DevLogin:token');
      setDados({
        user: {} as User,
        biometry: dados.biometry,
        token: dados.token,
      });
    } else {
      await AsyncStorage.multiRemove(['@DevLogin:token', '@DevLogin:user']);
    }
    setDados({} as AuthState);
  }, [dados.biometry, dados.token]);

  return (
    <AuthContext.Provider
      value={{
        user: dados.user,
        signInForm,
        signInBiometry,
        signOut,
        biometry: dados.biometry,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be within an AuthProvider');
  }
  return context;
}

export {AuthProvider, useAuth};
