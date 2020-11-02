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
}

interface SignInDTO {
  email: string;
  password: string;
  biometry: boolean;
}

interface AuthContextData {
  user: User;
  signInForm(credentials: SignInDTO): Promise<void>;
  signInBiometry(): Promise<void>;
  signOut(): Promise<void>;
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
        api.defaults.headers.authorization = `Bearer ${token}`;
        setDados({
          token,
          user: JSON.parse(user),
        });
      } else {
        setDados({} as AuthState);
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
    await AsyncStorage.setItem('@DevLogin:biometry', JSON.stringify(biometry));
    api.defaults.headers.authorization = `Bearer ${token}`;
    setDados({token, user});
  }, []);

  const signInBiometry = useCallback(async () => {
    const token = await AsyncStorage.getItem('@DevLogin:token');

    if (!token) {
      throw new Error('Token não disponível');
    }
    api.defaults.headers.authorization = `Bearer ${token}`;
    const response = await api.post('/user/me', token);
    const {user} = response.data;

    if (!user) {
      throw new Error(
        'Usuário não encontrado com esse token utilize o login com email e senha',
      );
    }

    await AsyncStorage.setItem('@DevLogin:user', JSON.stringify(user));
    api.defaults.headers.authorization = `Bearer ${token}`;
    setDados({token, user});
  }, []);

  const signOut = useCallback(async () => {
    const storageResponse = await AsyncStorage.getItem('@DevLogin:biometry');
    if (storageResponse) {
      const biometry = JSON.parse(storageResponse);
      if (biometry) {
        await AsyncStorage.removeItem('@DevLogin:user');
        setDados({} as AuthState);
        return;
      }
    }

    await AsyncStorage.multiRemove(['@DevLogin:token', '@DevLogin:user']);
    setDados({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: dados.user,
        signInForm,
        signInBiometry,
        signOut,
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
