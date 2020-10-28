import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Auth.Screen name="Dashboard" component={Dashboard} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
