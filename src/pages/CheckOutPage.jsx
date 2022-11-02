import React from 'react'

import HeaderTop from '../component/layouts/HeaderTop'
import SubtotalCart from '../component/cart/SubtotalCart'
import CartItemsList from '../component/cart/CartItemsList'

const CheckOutPage = () => {
    return (
        <>
            <HeaderTop />
            <div className='CheckOutPage container mx-auto flex w-full '>
                <div className='CheckOutPage__productList w-9/12'>
                    <CartItemsList />
                </div>
                <div className='CheckOut__cartInfo w-3/12 ml-6 bg-white p-5 mt-9'>
                    <SubtotalCart />
                </div>
            </div>
        </>
    )
}

export default CheckOutPage