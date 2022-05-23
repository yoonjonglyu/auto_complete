import React from 'react';
import { RouteObject } from 'react-router-dom';

import SearchFeature from '../feature/search';

const MainPage: RouteObject = {
  path: '/',
  element: <SearchFeature />,
  children: [],
};

export default MainPage;