import React, { useContext } from "react";

import Logo from "../../UI/Logo";
import Navigate from "../../components/Navigate";

import { HeaderContainer, Content, HeaderWrapper } from "./styles";
import Menu from "../../components/Menu";
import Burger from "../../components/Burger";
import { Context } from "../../utils/context";
const Header = () => {
  const { burgerActive } = useContext(Context);
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo />
        <Burger />
        <Content burgerActive={burgerActive}>
          <Navigate />
          <Menu />
        </Content>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
