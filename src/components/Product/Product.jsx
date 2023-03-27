import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const { img, name, price, seller, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} *</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart
                <span className='mx-5'><FontAwesomeIcon icon={faShoppingCart} /></span>
                </button>
        </div>

    );
};

export default Product;