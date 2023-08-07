import React from "react";

import { MenuList, MenuItem } from "./styles";
import InputSearch from "../../UI/InputSearch";
import { Icon } from "../../UI/Icons/styles";

import cart from "../../assets/img/cart.svg";
import user from "../../assets/img/user.svg";
const Menu = () => {
  return (
    <MenuList>
      <MenuItem>
        <InputSearch />
      </MenuItem>
      <MenuItem><Icon src={cart} alt="cart"/></MenuItem>
      <MenuItem><Icon src={user} alt="user"/></MenuItem>
    </MenuList>
  );
};

export default Menu;
