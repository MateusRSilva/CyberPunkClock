import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AlarmProvider } from './context/AlamContext';

ReactDOM.render(
  <React.StrictMode>
    <AlarmProvider>
      <App />
    </AlarmProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
