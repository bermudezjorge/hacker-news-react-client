import React from "react";

import { Container, ButtonLeft, ButtonRight } from "./styles";

const BUTTON = {
  left: "All",
  right: "My faves",
};

export default function Tab() {
  return (
    <Container>
      <ButtonLeft active={true}>{BUTTON.left}</ButtonLeft>
      <ButtonRight active={false}>{BUTTON.right}</ButtonRight>
    </Container>
  );
}
