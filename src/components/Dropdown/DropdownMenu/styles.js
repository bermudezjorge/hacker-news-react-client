import styled, { keyframes } from "styled-components";

const appear = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const MenuContainer = styled.div`
  width: 253px;
  margin-left: 0.1rem;
  background: #fff;
  box-shadow: 0px 2px 3px rgb(0 0 0 / 15%);
  animation: ${appear} 0.2s ease;
  z-index: 10;
`;
