import React from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import {useAuth} from '../hooks/Context/AuthContext';

const Routes = () => {
  const {user} = useAuth();
  return user ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
