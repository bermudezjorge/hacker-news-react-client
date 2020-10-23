import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5rem 0;
`;

const ButtonStyles = styled.button`
  width: 5.5rem;
  height: 2rem;
  background: transparent;
  border-width: 2px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${({ active }) => (active ? "#7cc3fd" : "#d8d8d8")};
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ active }) => (active ? "#7cc3fd" : "#606061")};
  cursor: pointer;
`;

export const ButtonLeft = styled(ButtonStyles)`
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border-right-width: ${({ active }) => (active ? "1px" : "0")};
`;

export const ButtonRight = styled(ButtonStyles)`
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-width: ${({ active }) => (active ? "1px" : "0")};
`;
