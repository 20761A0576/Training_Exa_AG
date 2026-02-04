import React, { useState } from "react";
import { Card, Title, Rating, Button, MovieImage } from "./MovieCard.Styled";

const MovieCard = ({ rating, imageUrl, title, description }) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <Card rating={rating}>
      <div>
        <MovieImage src={imageUrl} alt={title} />
        <Title>{title}</Title>
        <Rating rating={rating}>⭐ Rating: {rating}</Rating>

        {showDesc && <p>{description}</p>}
      </div>
      <Button onClick={() => setShowDesc(!showDesc)}>
        {showDesc ? "Hide" : "Show"} Description
      </Button>
    </Card>
  );
};

export default MovieCard;
