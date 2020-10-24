import React from "react";

import { Option, Logo, Title } from "./styles";

export default function DropdownOption({
  inMenu,
  clickable,
  handleMenu,
  active,
  setOption,
  option,
  children,
}) {
  const handleClick = () => {
    if (clickable) {
      setOption(option);
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
