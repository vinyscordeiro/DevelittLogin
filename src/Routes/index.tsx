import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Welcome">
      <Auth.Screen name="Welcome" component={Welcome} />
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="Dashboard" component={Dashboard} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
