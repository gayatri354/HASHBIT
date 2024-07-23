import React from 'react';
import { Link } from 'react-router-dom';

// Define your movie data with JPEG image paths
const movies = [
    { id: 1, title: 'Movie 1', image: '/images/movie1.jpeg' },
    { id: 2, title: 'Movie 2', image: '/images/movie2.jpeg' },
    { id: 3, title: 'Movie 3', image: '/images/movie3.jpeg' },
    { id: 4, title: 'Movie 4', image: '/images/movie4.jpeg' },
];

function MovieList() {
    return ( <
        div className = "movie-list" > {
            movies.map(movie => ( <
                div key = { movie.id }
                className = "movie-item" >
                <
                Link to = { `/movie/${movie.id}` } >
                <
                img src = { movie.image }
                alt = { movie.title }
                /> <
                h3 > { movie.title } < /h3> <
                /Link> <
                /div>
            ))
        } <
        /div>
    );
}

export default MovieList;