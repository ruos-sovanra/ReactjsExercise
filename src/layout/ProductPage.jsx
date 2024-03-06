import React, { useEffect } from "react";
import CardComponent from "../components/CardComponent";
import { useState } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    const slicedProducts = data.slice(0, 3);
    setProducts(slicedProducts);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-5xl my-5 ">Product Section</h1>
        <CardComponent products={products} />
      </div>
    </>
  );
};

export default ProductPage;
