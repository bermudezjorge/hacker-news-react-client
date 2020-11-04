import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 3rem;
`;

const TabStyles = styled.div`
  width: 5.5rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-width: 2px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${({ active }) => (active ? "#7cc3fd" : "#d8d8d8")};
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ active }) => (active ? "#7cc3fd" : "#606061")};
  outline: none;
  cursor: pointer;
`;

export const LeftTab = styled(TabStyles)`
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border-right-width: ${({ active }) => (active ? "1px" : "0")};
  border-right-color: #d8d8d8;
`;

export const RightTab = styled(TabStyles)`
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-width: ${({ active }) => (active ? "1px" : "0")};
  border-left-color: #d8d8d8;
`;
