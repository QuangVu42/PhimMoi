import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './Components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <GlobalStyles>
    <React.StrictMode>
      <App />
    </React.StrictMode>
 </GlobalStyles>
);

reportWebVitals();
