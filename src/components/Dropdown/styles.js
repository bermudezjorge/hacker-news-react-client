import styled from "styled-components";

export const DropdownWrapper = styled.div`
  width: 250px;
  height: 100%;
  position: relative;
`;

export const DropdownInput = styled.div`
  width: 250px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
  border-bottom-width: 2px;
  border-style: solid;
  border-color: #454545;
  border-bottom-color: #8a8a8a;
  border-radius: 4px;
  cursor: pointer;
`;

export const DefaultMsg = styled.h2`
  margin-left: 1rem;
  font-size: 1rem;
`;

export const DropDownIndicator = styled.img`
  width: 8px;
  margin-right: 1rem;
  transition: transform 0.2s;
  transform: ${({ active }) => (active ? "rotateZ(90deg)" : "rotateZ(0deg)")};
`;
