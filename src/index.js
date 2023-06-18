import React from 'react';
import ReactDOM from 'react-dom/client';
import FormWrapper from './FormWrapper';
import reportWebVitals from './reportWebVitals';
import HookUseEffect from './Lesson3/lesson3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HookUseEffect/>
  </React.StrictMode>
);
reportWebVitals();
