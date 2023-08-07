import React from "react";
import Header from "../../modules/Header";

import "../../assets/styles/reset.scss";
import "../../assets/styles/global.scss";
import Layout from "../../Layout";
import { ContextProvider } from "../../utils/context";
function App() {
  return (
    <ContextProvider>
          <Header />
          <Layout>
         </Layout>
        </ContextProvider>
  );
}

export default App;
