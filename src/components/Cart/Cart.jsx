import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;

    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = totalPrice * 5/100;

    const grandTotal = totalPrice + totalShipping + tax;
   return (
        <div className ='cart'>
            <h2>Order Summery</h2>
            <h6>Selected Items : {cart.length}</h6>
            <h6>Total Price : ${totalPrice.toFixed(2)}</h6>
            <h6>Shipping Charge : ${totalShipping.toFixed(2)}</h6>
            <h6>Tax : ${tax.toFixed(2)}</h6>
            <h4>Grand Total : ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;



