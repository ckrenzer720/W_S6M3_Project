import React from "react";
import Image from "./Image";

export default function CardMaker({ title, explanation, imageURL, date }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{explanation}</p>
      <Image imageURL={imageURL} date={date}/>
    </div>
  );
}