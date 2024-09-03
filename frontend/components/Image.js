import React from "react";

export default function Image({ imageURL, date }) {
  return (
    <span>
      <img src={imageURL}></img>
      <figcaption>{date}</figcaption>
    </span>
  );
}