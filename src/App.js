import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Router } from 'react-router-dom';

import history from './services/history';
import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
