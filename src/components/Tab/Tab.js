import React, { useState } from "react";
import { useLocation, Link } from "wouter";

import { Container, LeftTab, RightTab } from "./styles";

const BUTTON = {
  left: "All",
  right: "My faves",
};

export default function Tab() {
  const [location] = useLocation();
  const [tab, setTab] = useState(location === "/" ? BUTTON.left : BUTTON.right);

  const isTabActive = (thisTab) => tab === thisTab;

  return (
    <Container>
      <Link href="/" onClick={() => setTab(BUTTON.left)}>
        <LeftTab active={isTabActive(BUTTON.left)}>{BUTTON.left}</LeftTab>
      </Link>
      <Link href="/fav-news" onClick={() => setTab(BUTTON.right)}>
        <RightTab active={isTabActive(BUTTON.right)}>{BUTTON.right}</RightTab>
      </Link>
    </Container>
  );
}
