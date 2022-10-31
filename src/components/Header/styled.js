import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  a {
    color: aliceblue;
    margin: 0 10px 0 0;
    text-align: center;
    font-weight: bold;
  }
`;
