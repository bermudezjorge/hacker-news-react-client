import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fcfcfc;
`;

export const LayoutWidth = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

export const LayoutNews = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 2rem 2.5rem;
  margin-top: 2rem;
`;
