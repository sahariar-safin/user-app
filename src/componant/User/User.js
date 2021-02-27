import React, { useEffect, useState } from 'react';
import './User.css'

const User = (props) => {
    console.log(props);
    const {name, email, image, phone} = props.user;
    return (
        <div className="user">
            <img src={image} alt=""/>
            <h1>Name: {name} </h1>
            <h2>Email: {email}</h2>
            <h3>Phone: {phone}</h3>
        </div>
    );
};

export default User;