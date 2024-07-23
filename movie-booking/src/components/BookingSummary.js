// src/components/BookingSummary.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function BookingSummary() {
    const { state } = useLocation();
    const { name, email, mobile, bookingId } = state;

    return ( <
        div >
        <
        h2 > Booking Confirmed < /h2> <
        p > Booking ID: { bookingId } < /p> <
        p > Name: { name } < /p> <
        p > Email: { email } < /p> <
        p > Mobile: { mobile } < /p> <
        /div>
    );
}

export default BookingSummary;