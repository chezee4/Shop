import React from "react";


import { ImgContainer, ProductImage } from "./styles";
const Image = ({image}) => {
  return (
    <ImgContainer>
      <ProductImage src={image} alt="Product"/>
    </ImgContainer>
  );
};

export default Image;
