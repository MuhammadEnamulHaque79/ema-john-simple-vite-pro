import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    console.log(cart);
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
   return (
        <div className ='cart'>
            <h2>Order Summery</h2>
            <h6>Selected Items : {cart.length}</h6>
            <h6>Total Price : {total}</h6>
            <h6>Total Shipping Charge   :</h6>
            <h6>Tax :</h6>
            <h4>Grand Total :</h4>
        </div>
    );
};

export default Cart;



