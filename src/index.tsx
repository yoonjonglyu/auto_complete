import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const root = document.querySelector('#app');

if (root === null) {
  console.error('루트를 찾을 수 없습니다.');
} else {
  createRoot(root).render(
    <Router basename='/auto_complete'>
      <App />
    </Router>
  );
}
