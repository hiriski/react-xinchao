import React from 'react';
import routes from './routes';
import { useRoutes } from 'react-router';

const App = () => {
  return useRoutes(routes());
};

export default App;
