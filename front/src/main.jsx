import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
     <StyleSheetManager shouldForwardProp={(prop) => !['index', 'rating'].includes(prop)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </StyleSheetManager>
  </React.StrictMode>,
);