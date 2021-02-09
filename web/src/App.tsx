import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import Provider from './hooks';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Provider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>

    <GlobalStyle />
  </>
);

export default App;
