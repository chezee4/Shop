import React from 'react';
import Image from '../../UI/ImagesContainer';
import { Price, ProductContainer, TitleProduct } from './styles';
const Product = ({product}) => {
    return (
        <ProductContainer>
            <Image image={product.image}/>
            <TitleProduct>{`${product.title.slice(0,20)}`}</TitleProduct>
            <Price>{"$"+ product.price}</Price>
        </ProductContainer>
    );
};

export default Product;