import React from "react";
import styled from "styled-components";

const StyledImage = styled.span`
  max-width: fit-content;

  figcaption {
    font-style: italic;
  }
`

export default function Image({ imageURL, date }) {
  return (
    <StyledImage>
      <img src={imageURL}></img>
      <figcaption>{date}</figcaption>
    </StyledImage>
  );
}