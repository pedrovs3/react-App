import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>oi</small>
        <Paragrafo>Lorem Ipsum</Paragrafo>
        <button type="button">Enviar</button>
      </Title>
    </Container>
  );
}
