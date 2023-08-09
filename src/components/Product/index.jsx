import React from 'react';
import Image from '../../UI/ImagesContainer';
import { Price, ProductContainer, TitleProduct, Text } from './styles';
const Product = ({product}) => {
    return (
        <ProductContainer>
            <Image image={product.image}/>
            <Text>
            <TitleProduct>{`${product.title.slice(0,20)}`}</TitleProduct>
            <Price>{"$"+ product.price}</Price>
            </Text>
        </ProductContainer>
    );
};

export default Product;