import React from "react";

import { LayoutFixedWidth } from "components/Layouts";

import { Container, Logo } from "./styles";

export default function Header() {
  return (
    <Container>
      <LayoutFixedWidth>
        <Logo>HACKER NEWS</Logo>
      </LayoutFixedWidth>
    </Container>
  );
}
