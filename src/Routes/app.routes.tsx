import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Welcome">
    <App.Screen name="Welcome" component={Welcome} />
    <App.Screen name="SignIn" component={SignIn} />
  </App.Navigator>
);

export default AppRoutes;
