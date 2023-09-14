import React from 'react'
import './Sopping_basket.css'
import { useStateValue } from './StateProvider'
function Shopping_basket({id,image,title,price,rating}) {
  const [{basket},dispatch]=useStateValue();

  const removefrombasket=()=>{
    //remove item from basket
    dispatch({
        type:'REMOVE_FROM_BASKET',
        id:id,
    })
  }

  return (
    <div className='Shopping_basket'>

     <img src={image}></img>
     <div className='left'>
      <p><strong>{title}</strong></p>
      <p>$<strong>{price}</strong></p>
      <p>rating<strong>{rating}</strong></p>

      <button className='btno' onClick={removefrombasket}>Remove from basket</button>
     </div>
    </div>
  )
}

export default Shopping_basket