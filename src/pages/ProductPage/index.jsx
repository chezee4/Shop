import React, { useState, useEffect } from "react";
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
  HomeLink
} from "./styles";

import Stars from "../../components/Stars";
import Media from "../../components/Media";

const ProductPage = () => {
  const { getProduct } = useShopService();
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getProduct(productId);
      setProduct(data);
      setLoading(false);
    })();
    // eslint-disable-next-line
  }, []);
  const { title, description, price, rating, image, category } = product;

  console.log(loading);
  return loading ? (
    <Spinner />
  ) : (
    <ConteinerCard>
         <Link to="/"><HomeLink> Back to all </HomeLink></Link>
        <ContainerProductImg>
            <Img src={image} alt={title} />
        </ContainerProductImg>
        <ProductContent>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>{`$  ${price}`}</ProductPrice>
            <Rating>
                <Stars />
                <NumberOfComments>
                    {`${rating.count} customer review`}
                </NumberOfComments>
            </Rating>
            <ProductDescr>{description}</ProductDescr>
            <ContainerAddProduct>
                <button>ADD TO CART</button>
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
