import React from "react";

import { Option, Logo, Title } from "./styles";

export default function DropdownOption({
  inMenu,
  active,
  clickable,
  handleMenu,
  handleOption,
  option,
  children,
}) {
  const handleClick = () => {
    if (clickable) {
      handleOption(option);
      handleMenu();
    }
  };

  return (
    <Option inMenu={inMenu} active={active} onClick={() => handleClick()}>
      {children}
    </Option>
  );
}

DropdownOption.Logo = ({ src }) => <Logo src={src} alt="logo" />;

DropdownOption.Title = ({ title }) => <Title>{title}</Title>;
