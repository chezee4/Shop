import React, { useEffect, useState } from "react";

import { CartList } from "./styles";
import { useContext } from "react";
import { Context } from "../../utils/context";
import CartItems from "../../components/CartItems";

const CartPage = () => {
  const { cartItems } = useContext(Context);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const Price = cartItems
      .map((item) => item.count * item.price)
      .reduce((sum, itemPrice) => sum + itemPrice, 0);

    setTotalPrice(Price);
  }, [cartItems]);
  return (
    cartItems.length ? 
    <div style={{width: "100%", maxWidth: "1000px", margin: "0 auto"}}>
      <CartList>
        {cartItems.map((item) => (
          <CartItems item={item} key={item.id} />
        ))}
      </CartList>
      <div style={{ display: "flex", gap: "40px", alignItems:"center" , justifyContent: "end"}}>
        <span style={{fontSize: "21px"}}>Total: </span>
        <span style={{fontSize: "24px"}}>{`${totalPrice.toFixed(2)}  $`}</span>
      </div>
    </div>
    :
    <p style={{margin: "auto", fontSize: "80px"}}>Ви, бомж, вітаю! :) </p>
  );
};

export default CartPage;
