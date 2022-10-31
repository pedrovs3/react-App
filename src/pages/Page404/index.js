import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import history from '../../services/history';

export default function Page404() {
  history.push('/');
  return (
    <Container>
      <h1>Essa página nao existe</h1>
    </Container>
  );
}
