import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => (props.isRed ? 'red' : 'blue')};
  background: red;
  border-radius: 12px;
`;
