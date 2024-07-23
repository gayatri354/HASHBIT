// src/components/MovieDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const movies = [
    { id: 1, title: 'Movie 1', image: 'movie1.jpeg', description: 'Description of Movie 1' },
    { id: 2, title: 'Movie 2', image: 'movie2.jpeg', description: 'Description of Movie 2' },
    { id: 3, title: 'Movie 3', image: 'movie3.jpeg', description: 'Description of Movie 3' },
    { id: 4, title: 'Movie 4', image: 'movie4.jpeg', description: 'Description of Movie 4' },
];

function MovieDetails() {
    const { id } = useParams();
    const movie = movies.find(m => m.id === parseInt(id));

    return ( <
        div >
        <
        h2 > { movie.title } < /h2> <
        img src = { movie.image }
        alt = { movie.title }
        /> <
        p > { movie.description } < /p> <
        Link to = { `/book/${movie.id}` } >
        <
        button > Book Seat < /button> < /
        Link > <
        /div>
    );
}

export default MovieDetails;