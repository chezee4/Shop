import React from "react";
import Header from "../../modules/Header";
import Layout from "../../Layout";
import { ContextProvider } from "../../utils/context";
import ListProducts from "../../components/ListProducts";
const HomePage = () => {
  return (
    <ContextProvider>
      <Header />
      <Layout>
        <main><aside style={{minHeight:"100vh", minWidth:"20%"}}>dd</aside><ListProducts/></main>
        <footer>dwd</footer>
      </Layout>
    </ContextProvider>
  );
};

export default HomePage;
