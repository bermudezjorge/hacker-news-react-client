import React from "react";

import { LayoutWidth } from "components/Layouts";

import { Container, Logo } from "./styles";

export default function Header() {
  return (
    <Container>
      <LayoutWidth>
        <Logo>HACKER NEWS</Logo>
      </LayoutWidth>
    </Container>
  );
}
