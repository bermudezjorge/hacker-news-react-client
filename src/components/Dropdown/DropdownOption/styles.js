import styled from "styled-components";

export const Option = styled.div`
  display: flex;
  padding-left: 1rem;
  cursor: pointer;
  background: ${({ active }) => (active ? "#fafafa" : "transparent")};
  padding: 0.8rem;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${({ inMenu }) => (inMenu ? "#fafafa" : "transparent")};
  }
`;

export const Logo = styled.img`
  width: 20px;
`;

export const Title = styled.h2`
  margin-left: 0.7rem;
  font-size: 1rem;
`;
