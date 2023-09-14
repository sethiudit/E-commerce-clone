import React, { useState } from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id,tittle,price,rating,image}) {
 const [{basket},dispatch]=useStateValue();
console.log("this is the basket >>>>>",basket);
 const addttoBasket=()=>{
    // dispatch item to data layer
    dispatch({
        type:'ADD_TO_BASKET',
        item:{
            id:id,
            title:tittle,
            image:image,
            price:price,
            rating:rating,
        },
    });
 };



    return (
        <div className='product_p'>
            <div className='pinfo'>
                <h3> {tittle}</h3>

                <p>$<strong> {price}</strong></p>

                <p>rating <strong>{rating}</strong></p>
            </div>



            <div className='imageCart'>
                <img src={image} className='productImage'></img>
                <div className='btn'><button className='cartbtn' onClick={addttoBasket}>Add to cart</button></div>
            </div>

        </div>


    )
}

export default Product