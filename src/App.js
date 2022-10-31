import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
