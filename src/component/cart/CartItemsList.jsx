import React from 'react'

import {useStateValue} from '../../StateProvider'
import CartItem from './CartItem'

const CartItemsList = () => {

    const [{basket}, dispatch] = useStateValue()

    return (
        <>
            <div className='CheckOut__title'>
                <h4 className='border-bottom '> Cart items list </h4>
            </div>
            <div className='CheckOut__CartInfo'>
                {basket.map((cartItems) => <CartItem cartItems = {cartItems} key={cartItems.key} />)}
            </div>
        </>
    )
}

export default CartItemsList