import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {AuthProvider} from './hooks/Context/AuthContext';

import Routes from './Routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </NavigationContainer>
);

export default App;
