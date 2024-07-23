import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function SeatBookingForm() {
    const { id } = useParams();
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/confirmation', {
            state: {...formData, bookingId: Math.floor(Math.random() * 1000000) }
        });
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        h2 > Book a Seat < /h2> <
        label >
        Name:
        <
        input type = "text"
        name = "name"
        value = { formData.name }
        onChange = { handleChange }
        required / >
        <
        /label> <
        br / >
        <
        label >
        Email:
        <
        input type = "email"
        name = "email"
        value = { formData.email }
        onChange = { handleChange }
        required / >
        <
        /label> <
        br / >
        <
        label >
        Mobile:
        <
        input type = "tel"
        name = "mobile"
        value = { formData.mobile }
        onChange = { handleChange }
        required / >
        <
        /label> <
        br / >
        <
        button type = "submit" > Submit < /button> <
        /form>
    );
}

export default SeatBookingForm;