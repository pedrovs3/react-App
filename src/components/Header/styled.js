import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  a {
    color: aliceblue;
    margin: 0 10px 0 0;
    text-align: center;
    font-weight: bold;
    padding: 10px 12px;
    border-radius: 50%;
    transition: all 300ms ease-in-out;
  }

  a:hover {
    box-shadow: 2px 2px 5px #a60636, -2px -2px 5px #e00848;
  }
`;
