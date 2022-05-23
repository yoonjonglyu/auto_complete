import React from 'react';
import { useRoutes } from 'react-router-dom';

import MainPage from './main';

const Routes: React.FC = () => {
  return useRoutes([MainPage]);
};

export default Routes;
