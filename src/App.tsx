import React from 'react';
import { RecoilRoot } from 'recoil';

import Routes from './pages';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  );
};

export default App;
