import React, { useEffect } from "react";

import DropdownOption from "../DropdownOption";

import { MenuContainer } from "./styles";

import MENU_OPTIONS from "../menu_options";

export default function DropdownMenu({
  currectOption,
  handleMenu,
  handleOption,
}) {
  useEffect(() => {
    const BODY = document.querySelector("body");

    BODY.addEventListener("click", handleMenu);

    return () => {
      BODY.removeEventListener("click", handleMenu);
    };
  }, [handleMenu]);

  const isOptionActive = (thisOption) => currectOption.title === thisOption;

  return (
    <MenuContainer>
      {MENU_OPTIONS.map((option) => (
        <DropdownOption
          key={option.title}
          inMenu={true}
          active={isOptionActive(option.title)}
          handleMenu={handleMenu}
          handleOption={handleOption}
          option={option}
          clickable={true}
        >
          <DropdownOption.Logo src={option.logo} alt="logo" />
          <DropdownOption.Title title={option.title} />
        </DropdownOption>
      ))}
    </MenuContainer>
  );
}
