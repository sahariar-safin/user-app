import React from 'react';
import AddedUser from '../AddedUser/AddedUser';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, sallary) => total + sallary.sellery,0);
    return (
        <div>
            <h1>Added User: {cart.length}</h1>
            <h1>Total Cost: {total}</h1>
            {cart.map(user => <AddedUser user={user}></AddedUser>)}
        </div>
    );
};

export default Cart;