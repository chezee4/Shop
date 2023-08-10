import React, { useContext, useEffect, useState } from "react";

import {
  MenuList,
  MenuItem,
  ContainerIconMenu,
  CurrentProducts,
} from "./styles";
import InputSearchHeader from "../../UI/InputSearchHeader";
import { Icon } from "../../UI/Icons/styles";

import cart from "../../assets/img/cart.svg";
import user from "../../assets/img/user.svg";
import { Link } from "react-router-dom";
import { Context } from "../../utils/context";

const Menu = () => {
  const {cartItems} = useContext(Context);
  const [currentProducts, setCurrentProducts] = useState(0);
  useEffect(() => {
    setCurrentProducts(cartItems.reduce((sumItems, currentItem) => sumItems + currentItem.count, 0));
  },[cartItems])
  
  return (
    <MenuList>
      <MenuItem>
        <InputSearchHeader />
      </MenuItem>
      <MenuItem>
        <Link to="/cart">
          <ContainerIconMenu>
            <Icon src={cart} alt="cart" />
            {cartItems.length ? <CurrentProducts>{currentProducts}</CurrentProducts> : null}
          </ContainerIconMenu>
        </Link>
      </MenuItem>
      <MenuItem>
        <ContainerIconMenu>
          <Icon src={user} alt="user" />
        </ContainerIconMenu>
      </MenuItem>
    </MenuList>
  );
};

export default Menu;
