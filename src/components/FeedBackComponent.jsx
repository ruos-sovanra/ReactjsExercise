import React from "react";
import { Card } from "flowbite-react";
import RatingComponent from "./RatingComponent";
const FeedBackComponent = (props) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {props.feedbacks.map((feedback) => (
          <Card
            className="max-w-sm"
            imgSrc={feedback.image}
            horizontal
            key={feedback.id}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {feedback.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {feedback.comment}
            </p>
            <RatingComponent />
          </Card>
        ))}
      </div>
    </>
  );
};

export default FeedBackComponent;
