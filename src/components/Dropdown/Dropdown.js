import React, { useState } from "react";

import DropdownMenu from "./DropdownMenu/DropdownMenu";
import DropdownOption from "./DropdownOption";

import { LayoutWidth } from "../Layouts";

import useLocalStorage from "hooks/useLocalStorage";

import {
  DropdownWrapper,
  DropdownInput,
  DefaultMsg,
  DropDownIndicator,
} from "./styles";

import MENU_OPTIONS from "./menu_options";

import arrow from "assets/icon/arrow.svg";

const defaultMsg = MENU_OPTIONS[0].title;

export default function Dropdown() {
  const [storage, setStorage] = useLocalStorage("filterOption");
  const [currectOption, setCurrectOption] = useState(
    storage || MENU_OPTIONS[0]
  );
  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow(!show);
  };

  const handleOption = (option) => {
    setCurrectOption(option);
    setStorage(option);
    handleMenu();
  };

  return (
    <LayoutWidth>
      <DropdownWrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <DropdownInput onClick={() => handleMenu()}>
          {currectOption.title === defaultMsg ? (
            <DefaultMsg>{currectOption.title}</DefaultMsg>
          ) : (
            <DropdownOption inMenu={false} clickable={false}>
              <DropdownOption.Logo src={currectOption.logo} />
              <DropdownOption.Title title={currectOption.title} />
            </DropdownOption>
          )}
          <DropDownIndicator active={show} src={arrow} alt="arrow-indicator" />
        </DropdownInput>
        {show && (
          <DropdownMenu
            currectOption={currectOption}
            handleMenu={handleMenu}
            handleOption={handleOption}
          />
        )}
      </DropdownWrapper>
    </LayoutWidth>
  );
}
