import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Styling/index.css';
import { BrowserRouter } from 'react-router-dom';
import { UserNameProvider } from './contexts/userName.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserNameProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserNameProvider>
);
