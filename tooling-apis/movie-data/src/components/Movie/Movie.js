import React from 'react';
import './Movie.css';

const Movie = (props) => {
    console.log(props.movie.Poster);
    const keys = Object.keys(props.movie);
    const foundMovie = (
        <div>
            <h2>{props.movie.Title}</h2>
            <hr />
            <p><strong>Director:</strong> {props.movie.Director}</p>
            <p><strong>Year:</strong> {props.movie.Year}</p>
            <p><strong>Rated:</strong> {props.movie.Rated}</p>
            <p><strong>Plot:</strong> {props.movie.Plot}</p>
        </div>
    )
    const noMovie = (<h2>Find a movie!</h2>)
    const notFound = (<h2>{props.movie.Error}</h2>)

    let movie;
    if(keys.includes("Error"))
        movie = notFound;
    else if (keys.length < 1)
        movie = noMovie;
    else
        movie = foundMovie

    return (
        <div className="movie">
            {movie}
        </div>
    )

}

export default Movie;
