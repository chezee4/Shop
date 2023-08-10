import React, { useEffect, useState } from "react";
import {
  CartItem,
  CartItemTitle,
  CartItemPrice,
  CartItemTotalPrice,
  CartItemDelete,
  ContainerImage,
} from "./styles";
import QuantityInput from "../QuantityInput";
import { useContext } from "react";
import { Context } from "../../utils/context";

const CartItems = ({ item }) => {
  const { title, price, image, id, count } = item;
  const { cartItems, setCartItems } = useContext(Context);
  const [value, setValue] = useState(count);
  console.log(value);
  const changeCurrent = () => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, count: value };
      }
      return cartItem;
    });

    setCartItems(updatedCartItems);
  };

  useEffect(() => {
   changeCurrent();
  },[value]);

  const deleteItem = () => {
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
  };

  return (
    <CartItem>
      <ContainerImage>
        <img src={image} alt={title} />
      </ContainerImage>
      <CartItemTitle>{title.slice(0,25)}</CartItemTitle>
      <CartItemPrice>{`${price} $`}</CartItemPrice>
      <QuantityInput value={value} setValue={setValue} changeCurrent={changeCurrent} />
      <CartItemTotalPrice>{`Total: ${(price * count).toFixed(2)} $`}</CartItemTotalPrice>
      <CartItemDelete onClick={() => deleteItem()}>x</CartItemDelete>
    </CartItem>
  );
};

export default CartItems;
