import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faUserPlus, faPhone, faMoneyBillAlt, faSignature } from '@fortawesome/free-solid-svg-icons'
import './AddedUser.css';

const AddedUser = (props) => {
    const {name, email, phone, sellery, image} = props.user;
    return (
        <div className="added-user">
            <img src={image} alt="" />
            <div>
                <h1><FontAwesomeIcon icon={faSignature} /> {name} </h1>
                <h2><FontAwesomeIcon icon={faEnvelopeOpenText} /> {email}</h2>
                <h3><FontAwesomeIcon icon={faPhone} /> {phone}</h3>
                <h3><small><FontAwesomeIcon icon={faMoneyBillAlt} /> ${sellery}</small></h3>
            </div>
        </div>
    );
};

export default AddedUser;