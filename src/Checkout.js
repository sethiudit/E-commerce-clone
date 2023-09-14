import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"
import { useStateValue } from './StateProvider'
import Shopping_basket from './Shopping_basket'
const Checkout = () => {
  const [{basket},dispatch]=useStateValue();

  return (
    <div className='checkout'>
        <div className='checkleft'>
            <img className='checkout_ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/PrimedayJuly/1500x300_s2.jpg'/>
<div>
<h2 className='checkout_tittle'>
shopping basket


</h2>
{basket.map(item=>(
  
  
  <Shopping_basket
id={item.id}
title={item.title}
price={item.price}
image={item.image}
rating={item.rating}
/>

))}
</div>

        </div>
        <div className='checkright'>
          <Subtotal></Subtotal>
        </div>
    </div>
  )
}

export default Checkout