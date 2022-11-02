import React from 'react'

import { useStateValue } from '../../StateProvider'

const CartItem = (props) => {

    const {name, price, img, key} = props.cartItems
    const [{basket}, dispatch] = useStateValue()
    const removeItemHandel = () => {
        dispatch({
            type: 'REMOVE_BASKET',
            key: key,
        })
    }

    return (
        <div className='flex my-3 bg-white p-3 rounded' key={basket.key}>
            <div className='Checkout__ProductImg mr-6 '> 
                <img src={img} alt="" />
            </div>
            <div className='CheckOut__ProductInfo w-full'>
                <h4> { name }</h4>
                <p> <strong> price: </strong> {price}</p>
                <button type='button' onClick={removeItemHandel} > remove item </button>
            </div>
        </div>
    )
}

export default CartItem