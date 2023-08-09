import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [lastFetch, setLastFetch] = useState(false);
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const filterProducts = (value) => {
    let elements;
    if (value) {
      elements = data.filter(
        ({ price }) => price >= value[0] && price <= value[1]
      );
      setLastFetch(true);
    } else {
      elements = products;
      data.length > products.length && setLastFetch(false);
    }
    setVisibleProducts(elements);
  };

  const searchProduct = (text) => {
    if (text.replace(/\s/g, "").length === 0) {
      setVisibleProducts(products);
      data.length > products.length && setLastFetch(false);
      return;
    }
    const elements = data.filter(({ title }) => title.toLowerCase().indexOf(text.toLowerCase()) > -1);
    setLastFetch(true);
    setVisibleProducts(elements);
  };
  useEffect(() => {
    filterProducts();
    // eslint-disable-next-line
  }, [products]);

  return (
    <Context.Provider
      value={{
        burgerActive,
        setBurgerActive,
        products,
        setProducts,
        setVisibleProducts,
        visibleProducts,
        filterProducts,
        searchProduct,
        setData,
        data,
        lastFetch,
        setLastFetch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
