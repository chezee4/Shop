import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../../assets/styles/reset.scss";
import "../../assets/styles/global.scss";
import Spinner from "../../UI/Spinner";
const HomePage = lazy(() => import("../../pages/HomePage/"));

function App() {
  return (
    
 
      <Router basename="/">
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense> 
    </Router>
 
  );
}

export default App;
