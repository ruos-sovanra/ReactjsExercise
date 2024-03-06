import React from "react";
import FeedBackPage from "./FeedBackPage";
import ProductPage from "./ProductPage";
const MainPage = () => {
  return (
    <>
      <main className="mb-5">
        <ProductPage />
        <FeedBackPage />
      </main>
    </>
  );
};

export default MainPage;
