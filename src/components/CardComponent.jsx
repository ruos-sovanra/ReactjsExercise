import React from "react";
import { Card } from "flowbite-react";
import RatingComponent from "./RatingComponent";
const CardComponent = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card
            className="max-w-sm overflow-hidden"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            key={product.id}
          >
            <a
              href="#"
              className=" h-[300px] overflow-hidden flex justify-center"
            >
              <img
                className="rounded-t-lg w-[200px]"
                src={product.image}
                alt=""
              />
            </a>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
            <RatingComponent />
          </Card>
        ))}
      </div>
    </>
  );
};

export default CardComponent;
