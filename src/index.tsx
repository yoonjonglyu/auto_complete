import React from 'react';
import { createRoot } from 'react-dom/client';

const root = document.querySelector('#app');
if (root === null) {
  console.error('루트를 찾을 수 없습니다.');
} else {
  createRoot(root).render(<div>foo</div>);
}
