import React, { useState } from "react";

import { Container, LeftTab, RightTab } from "./styles";

const BUTTON = {
  left: "All",
  right: "My faves",
};

const DEFAULT_ACTIVE_TAB = BUTTON.left;

export default function Tab() {
  const [tab, setTab] = useState(DEFAULT_ACTIVE_TAB);

  const isTabActive = (thisTab) => tab === thisTab;

  return (
    <Container>
      <LeftTab
        active={isTabActive(BUTTON.left)}
        onClick={() => setTab(BUTTON.left)}
      >
        {BUTTON.left}
      </LeftTab>
      <RightTab
        active={isTabActive(BUTTON.right)}
        onClick={() => setTab(BUTTON.right)}
      >
        {BUTTON.right}
      </RightTab>
    </Container>
  );
}
