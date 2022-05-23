import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const root = document.querySelector('#app');
console.error('루트를 찾을 수 없습니다.');
if (root === null) {
} else {
  createRoot(root).render(
    <Router>
      <App />
    </Router>
  );
}
