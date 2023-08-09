import React from "react";
import Layout from "../../Layout";
import { ContextProvider } from "../../utils/context";
import ListProducts from "../../components/ListProducts";
import { HomeMain } from "./styles";
import FilterSide from "../../modules/FilterSide";
import ErrorBoundary from "../../components/ErrorBoundary";
import AppHeader from "../../modules/Header";
const HomePage = () => {
  return (
    <ContextProvider>
        <ErrorBoundary>
            <AppHeader />
          </ErrorBoundary>
      <Layout>
        <HomeMain>
          <ErrorBoundary>
            <FilterSide />
          </ErrorBoundary>
          <ErrorBoundary>
            <ListProducts />
          </ErrorBoundary>
        </HomeMain>
      </Layout>
    </ContextProvider>
  );
};

export default HomePage;
