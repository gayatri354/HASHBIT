// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import SeatBookingForm from './components/SeatBookingForm';
import BookingSummary from './components/BookingSummary';
import './App.css';

function App() {
    return ( <
        Router >
        <
        div className = "App" >
        <
        Routes >
        <
        Route path = "/"
        element = { < MovieList / > }
        /> <
        Route path = "/movie/:id"
        element = { < MovieDetails / > }
        /> <
        Route path = "/book/:id"
        element = { < SeatBookingForm / > }
        /> <
        Route path = "/confirmation"
        element = { < BookingSummary / > }
        /> <
        /Routes> <
        /div> <
        /Router>
    );
}

export default App;