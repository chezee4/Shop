import React from "react";
import ListProducts from "../../components/ListProducts";
import FilterSide from "../../modules/FilterSide";
import ErrorBoundary from "../../components/ErrorBoundary";

const HomePage = () => {
  return (
    <>
      <ErrorBoundary>
        <FilterSide />
      </ErrorBoundary>
      <ErrorBoundary>
        <ListProducts />
      </ErrorBoundary>
    </>
  );
};

export default HomePage;
