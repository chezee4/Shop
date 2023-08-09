import React, {useState, useEffect, useContext} from 'react';
import styled from "styled-components";
import useShopService from '../../API/products';
import { Context } from '../../utils/context';
import { useParams } from 'react-router-dom';
const GalleryContainer = styled.div`
  width: 800px;
  height: 800px;
  display: grid;
  grid-template-columns: repeat(2, 200px) 1fr;
  grid-gap: 10px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductPage = () => {
    const { getProduct } = useShopService();
    const {productId} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    
      useEffect(() => {
        (async () => {
          setLoading(true);
          const data = await getProduct(productId);
          setProduct(data);
          setLoading(false);
        })();
        // eslint-disable-next-line
      }, []);
    return (
    <div>feaffafffws</div>
    );
};

export default ProductPage;