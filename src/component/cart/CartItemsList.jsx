import React from 'react'

import {useStateValue} from '../../StateProvider'

const CartItemsList = () => {

    const [{basket}, dispatch] = useStateValue()

    return (
        <>
            <div className='CheckOut_title'>
                <h4> Cart items list </h4>
            </div>
            <div>
                {basket.map((cartItems) => <div>
                    <div> 
                        <img src={cartItems.img} alt="" />
                    </div>
                    <div>
                        <h4> { cartItems.name }</h4>
                        <p> <strong> price: </strong> {cartItems.price}</p>
                    </div>
                </div>)}
            </div>
        </>
    )
}

export default CartItemsList