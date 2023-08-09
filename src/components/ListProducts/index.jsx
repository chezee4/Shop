import React, { useContext, useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useShopService from "../../API/products";
import { Grid, ContainerList, ButtonLoading, ButtonText } from "./styles";
import Product from "../Product";
import loadingSVG from "./loadingList.svg";
import { Context } from "../../utils/context";
import Spinner from "../../UI/Spinner";

const ListProducts = () => {
  const { getAllProducts } = useShopService();
  const {
    setProducts,
    visibleProducts,
    data,
    setData,
    lastFetch,
    setLastFetch,
  } = useContext(Context);
  const [lengthProducts, setLengthProducts] = useState(9);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getAllProducts();
      setData(data);
      setProducts(data.slice(0, 9));
      setLoading(false);
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
  const View = () => {
     return(
      <>
      <TransitionGroup>
        {visibleProducts.map((product) => (
          <CSSTransition key={product.id} timeout={500} classNames="item">
            <Product product={product} />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <ButtonLoading
        lastFetch={lastFetch}
        onClick={() => loadMoreItems()}
      >
        <img src={loadingSVG} alt="loading" />
        <ButtonText>More</ButtonText>
      </ButtonLoading>
    </>
     )
  }
  const spinner = loading ? <Spinner /> : null;
  const elements = !spinner ? visibleProducts.length ? View() : <p>Такого товару немає в наявності, вибачте.</p> : null;

  return (
    <ContainerList>
      <Grid>
        {spinner}
        {elements}
      </Grid>
    </ContainerList>
  );
};

export default ListProducts;
