import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background: #ff9000;
  color: #312e38;
  height: 56px;
  border-radius: 10px;
  border: 0;
  font-weight: 600;
  margin-top: 16px;

  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
