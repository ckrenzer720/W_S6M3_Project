import React from "react";
import Image from "./Image";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 2px solid crimson;
  margin: 5px;
  padding: 3rem;
  border-radius: 5%;

  h2 {
    color: ${pr => pr.$color};
    font-size: 1.75em;
    margin: inherit;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  p {
    margin: 0 0 2rem 0;
    font-size: medium;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    &::first-line {
      font-size: 1.5rem;
    }
  }
`;

export default function CardMaker({ title, explanation, imageURL, date }) {
  return (
    <StyledCard $color='dodgerblue' className="card">
      <h2>{title}</h2>
      <p>{explanation}</p>
      <Image imageURL={imageURL} date={date} />
    </StyledCard>
  );
}
