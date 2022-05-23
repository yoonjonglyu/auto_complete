import React from 'react';
import { useRoutes } from 'react-router-dom';

import Main from './main';

const Routes: React.FC = () => {
  return useRoutes([Main]);
}

export default Routes;