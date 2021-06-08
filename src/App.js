import React from 'react';
import routes from './routes';
import { useRoutes } from 'react-router';
import { useSelector } from 'react-redux';

const App = () => {
  const { token } = useSelector((state) => state.authReducer);
  return useRoutes(routes(Boolean(token)));
};

export default App;
