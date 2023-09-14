import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
import { useNavigate } from 'react-router-dom'
function Subtotal() {

    const [{basket},dispatch]=useStateValue();

     const navigate=useNavigate();
    function calculateTotalPrice(basket) {
        let totalPrice = 0;
      
        for (let i = 0; i < basket.length; i++) {
          const item = basket[i];
          const itemPrice = parseFloat(item.price); // Convert price to a number
      
          totalPrice += itemPrice;
        }
      
        return totalPrice.toFixed(2); // Round to 2 decimal places
      }
      
      

  return (
    <div className='subtotal'><CurrencyFormat
    renderText={(value) => (
      <>
        <p>
          {/* Part of the homework */}
          Subtotal ({basket?.length}): <strong>{calculateTotalPrice(basket)}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>
      </>
    )}
    decimalScale={2}
    value={getBasketTotal(basket)} // Part of the homework
    displayType={"text"}
    thousandSeparator={true}
    prefix={"$"}
  />
  <button className='buttonn' onClick={e=>navigate('/payment')}>Proceed to Checkout</button>
  </div>
  )
}

export default Subtotal