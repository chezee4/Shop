import React, { useState, useEffect, useContext } from "react";
import useShopService from "../../API/products";
import { Link, useParams } from "react-router-dom";
import Spinner from "../../UI/Spinner";
import {
  ConteinerCard,
  ProductContent,
  ContainerProductImg,
  ProductDescr,
  ProductPrice,
  Img,
  ProductCategory,
  ProductTitle,
  ConteinerCategory,
  Rating,
  NumberOfComments,
  ContainerAddProduct,
  HomeLink,
  AddButtonProduct,
} from "./styles";
import QuantityInput from "../../components/QuantityInput";
import Stars from "../../components/Stars";
import Media from "../../components/Media";
import { Context } from "../../utils/context";

const ProductPage = () => {
  const { getProduct } = useShopService();
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(1);
  const { cartItems, setCartItems } = useContext(Context);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getProduct(productId);
      setProduct(data);
      setLoading(false);
    })();
    // eslint-disable-next-line
  }, []);
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, count: cartItem.count + value };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, count: value }]);
    }
    setValue(1);
  };

  const { title, description, price, rating, image, category } = product;

  return loading ? (
    <Spinner />
  ) : (
    <ConteinerCard>
      <Link to="/">
        <HomeLink> Back to all </HomeLink>
      </Link>
      <ContainerProductImg>
        <Img src={image} alt={title} />
      </ContainerProductImg>
      <ProductContent>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>{`$  ${price}`}</ProductPrice>
        <Rating>
          <Stars rate={rating.rate} />
          <NumberOfComments>
            {`${rating.count} customer review`}
          </NumberOfComments>
        </Rating>
        <ProductDescr>{description}</ProductDescr>
        <ContainerAddProduct>
          <QuantityInput setValue={setValue} value={value} />
          <AddButtonProduct onClick={() => addToCart(product)}>
            ADD TO CART
          </AddButtonProduct>
        </ContainerAddProduct>
        <Media />
        <ConteinerCategory>
          <span>Category:</span>
          <ProductCategory>{`" ${category} "`}</ProductCategory>
        </ConteinerCategory>
      </ProductContent>
    </ConteinerCard>
  );
};

export default ProductPage;
