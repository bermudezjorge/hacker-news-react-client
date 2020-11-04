import React, { useState } from "react";

import DropdownMenu from "./DropdownMenu";
import DropdownOption from "./DropdownOption";

import { LayoutWidth } from "../Layouts";

import {
  DropdownWrapper,
  DropdownInput,
  DefaultMsg,
  DropDownIndicator,
} from "./styles";

import arrow from "assets/icon/arrow.svg";

export default function Dropdown({ currectOption, handleOption }) {
  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow(!show);
  };

  return (
    <LayoutWidth>
      <DropdownWrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <DropdownInput onClick={() => handleMenu()}>
          {currectOption.title === null ? (
            <DefaultMsg>Select your news</DefaultMsg>
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
