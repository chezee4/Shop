import React, { useEffect, useState } from "react";
import useShopService from "../../API/products";
import { Grid, ContainerList, ButtonLoading, ButtonText } from "./styles";
import Product from "../Product";
import loadingSVG from "./loadingList.svg"; 
const ListProducts = () => {
  const { getAllProducts } = useShopService();
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [lastFetch, setLastFetch] = useState(false);
  const [lengthProducts, setLengthProducts] = useState(9);
  
  useEffect(() => {
    (async () => {
      const data = await getAllProducts();
      setData(data);
      setProducts(data.slice(0, 9));
    })();
    // eslint-disable-next-line
  }, []);

  const loadMoreItems = () => {
    if (data.length <= lengthProducts + 9) {
      setProducts((products) => [
        ...products,
        ...data.slice(lengthProducts, data.length),
      ]);
      setLastFetch(true);
    } else {
      setLengthProducts((lengthProducts) => lengthProducts + 9);
      setProducts((products) => [
        ...products,
        ...data.slice(lengthProducts, lengthProducts + 9),
      ]);
    }
  };

  return (
    <ContainerList>
      <Grid>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Grid>
      <ButtonLoading lastFetch={lastFetch} onClick={() => loadMoreItems()}>
        <img src={loadingSVG} alt="loading" />
        <ButtonText>More</ButtonText>
      </ButtonLoading>
    </ContainerList>
  );
};

export default ListProducts;
