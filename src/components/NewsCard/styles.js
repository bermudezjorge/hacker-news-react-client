import styled, { keyframes } from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  border: 1px solid #bfbfbf;
  border-radius: 7px;
  overflow: hidden;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
  @media (min-width: 640px) {
    &:nth-child(even) {
      margin-left: 25px;
    }
  }
`;

export const TextContainerLink = styled.a`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  padding: 0.7rem 1.5rem;
`;

export const TimeAuthorCon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ClockIcon = styled.img`
  width: 15px;
`;

export const TimeAuthorText = styled.p`
  color: #96979c;
  margin-left: 0.4rem;
  font-size: 0.8rem;
`;

export const CardTitle = styled.h1`
  color: #6f6c71;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.5rem;
`;

export const FavCon = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  &:hover {
    opacity: 1 !important;
    transform: scale(1.1);
  }
`;

const beat = keyframes`
  0% {
    transform: scale(0.9)
  }
  100%{
    transform: scale(1.1)
  }
`;

export const FavIcon = styled.img`
  width: 23px;
  transition: transform 0.2s;
  animation: ${({ hearted }) => (hearted ? beat : "")} 0.2s 3;
`;
