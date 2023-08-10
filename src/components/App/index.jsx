import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../../assets/styles/reset.scss";
import "../../assets/styles/global.scss";
import { ContextProvider } from "../../utils/context";
import Spinner from "../../UI/Spinner";
import AppHeader from "../../modules/Header";
import ErrorBoundary from "../ErrorBoundary";
import { Main } from "./styles";
import Layout from "../../Layout";
const HomePage = lazy(() => import("../../pages/HomePage"));
const ProductPage = lazy(() => import("../../pages/ProductPage"));
const CartPage = lazy(() => import("../../pages/СartPage"));
function App() {
  return (
    <ContextProvider>
      <Router basename="/">
        <ErrorBoundary>
          <AppHeader />
        </ErrorBoundary>
        <Layout>
          <Main>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:productId" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </Suspense>
          </Main>
        </Layout>
      </Router>
    </ContextProvider>
  );
}

export default App;
