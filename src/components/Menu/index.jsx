import React from "react";

import { MenuList, MenuItem } from "./styles";
import InputSearchHeader from "../../UI/InputSearchHeader";
import { Icon } from "../../UI/Icons/styles";

import cart from "../../assets/img/cart.svg";
import user from "../../assets/img/user.svg";
const Menu = () => {
  return (
    <MenuList>
      <MenuItem>
        <InputSearchHeader />
      </MenuItem>
      <MenuItem><Icon src={cart} alt="cart"/></MenuItem>
      <MenuItem><Icon src={user} alt="user"/></MenuItem>
    </MenuList>
  );
};

export default Menu;
