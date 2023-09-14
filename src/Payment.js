import React from 'react'
import Shopping_basket from './Shopping_basket'
import { useStateValue } from './StateProvider'

function Payment() {
    const [{basket,user},dispatch]=useStateValue();
    return (
        <div className='payment'>
            <div className='payment_container'>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>

                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 recent address</p>
                        <p>Patna,Bihar</p>
                    </div>
                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review Items ans Delivery</h3>

                    </div>


                    <div className='payment_item'>
                        {basket.map(item => (


                            <Shopping_basket
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                rating={item.rating}
                            />

                        ))}</div>
                </div>



                <div className='payment_section'>
                    <div className='payment_tittle'>
                        <h3>
                            payment method
                        </h3>
                       
                    </div>
                    <div className='payment_details'>
                        {/*stripe magic*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment