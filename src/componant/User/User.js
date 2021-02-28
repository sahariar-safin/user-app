import React, { useEffect, useState } from 'react';
import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faUserPlus, faPhone, faMoneyBillAlt, faSignature } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';

const User = (props) => {
    const { name, email, image, phone, sellery } = props.user;
    
    return (
        <div className="user">
            <img src={image} alt="" />
            <h1><FontAwesomeIcon icon={faSignature} /> {name} </h1>
            <h2><FontAwesomeIcon icon={faEnvelopeOpenText} /> {email}</h2>
            <h3><FontAwesomeIcon icon={faPhone} /> {phone}</h3>
            <h3><small><FontAwesomeIcon icon={faMoneyBillAlt} /> ${sellery}</small></h3>
            <button onClick={() => props.handleAdd(props.user)} className="add-button"> <FontAwesomeIcon icon={faUserPlus} /> Add Friend</button>
        </div>
    );
};

export default User;