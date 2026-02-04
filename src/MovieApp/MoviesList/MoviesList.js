import React from 'react';
import MovieCard from "../MovieCard/MovieCard";
import movies from "../Data/movies";
import { Container } from "./MoviesList.Styled";

function MoviesList() {
    return (
        <Container>
            {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    rating={movie.rating}
                    title={movie.title}
                    imageUrl={movie.image}
                    description={movie.description}
                />
            ))}
        </Container>
    )
}

export default MoviesList
