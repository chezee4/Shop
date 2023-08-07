import React, { useContext } from "react";
import { BurgerContainer, Line } from "./styles";
import { Context } from "../../utils/context";


const Burger = () => {
  const { setBurgerActive} = useContext(Context);
  return (
    <BurgerContainer
      onClick={() => setBurgerActive(burgerActive => !burgerActive)}
    >
      <Line />
    </BurgerContainer>
  );
};

export default Burger;
