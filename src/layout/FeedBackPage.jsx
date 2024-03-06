import React from "react";
import FeedBackComponent from "../components/FeedBackComponent";
import { useState } from "react";

const FeedBackPage = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/1126649031/photo/happy-african-american-girl-laughing-isolated-on-pink-background.jpg?s=612x612&w=0&k=20&c=PLNoddsoIhqY8sEgbZlkn3_wZYAnGjbNfu4hqXReC8I=",
      name: "John Doe",
      comment: "“I highly recommend this business.”",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/amazed-adult-woman-being-deeply-surprised-stares-smartphone-display-reads-shocking-news-website-dressed-orange-jumper-has-bugged-eyes-covers-mouth-omg-its-horrible_273609-43457.jpg",
      name: "Sara Smith",
      comment:
        "“The product quality is consistently outstanding, exceeding my expectations every time.”",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/1181380486/photo/happy-writer-smart-young-african-ethnic-lady-is-sitting-cross-legged-on-the-floor-with-her.jpg?s=612x612&w=0&k=20&c=yB7YjCiQEI4gttdpHPDTA126QNhIyRhgOvnwS0arRx8=",
      name: "Asura Kato",
      comment: "“Their customer service is second to none.”",
    },
  ]);
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-5xl my-5">FeedBack Section</h1>
        <FeedBackComponent feedbacks={feedbacks} />
      </div>
    </>
  );
};

export default FeedBackPage;
