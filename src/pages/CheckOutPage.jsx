import React from 'react'

import HeaderTop from '../component/layouts/HeaderTop'
import SubtotalCart from '../component/cart/SubtotalCart'
import CartItemsList from '../component/cart/CartItemsList'

const CheckOutPage = () => {
    return (
        <>
            <HeaderTop />
            <div className='CheckOutPage container'>
                <div className='CheckOutPage__productList'>
                    <CartItemsList />
                </div>
                <div className='CheckOut__cartInfo'>
                    <SubtotalCart />
                </div>
            </div>
        </>
    )
}

export default CheckOutPage