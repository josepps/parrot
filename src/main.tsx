import React from 'react';
import ReactDOM from 'react-dom/client';
import Feed from './Feed';
import Login from './Login';

import "./Main.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
)
