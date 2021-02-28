import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total, sallary) => total + sallary.sellery,0);
    return (
        <div>
            <h1>Added User: {cart.length}</h1>
            <h1>Total: {total}</h1>
        </div>
    );
};

export default Cart;