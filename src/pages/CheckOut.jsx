import React from 'react'

import ProductCartInfo from '../component/product/ProductCartInfo'
import { useStateValue } from '../StateProvider'
import HeaderTop from '../component/layouts/HeaderTop'

const CheckOut = () => {

    const [state] = useStateValue()

    console.log(state.basket.map((item) => item.name)  )

    return (
        <>
            <HeaderTop />
        <div className='CheckOut container'>
            <div className='CheckOut__productList'>
                <div className='CheckOut_title'>
                    <h4> Cart items list </h4>
                </div>

                
            </div>
            <div className='CheckOut__cartInfo'>
                <ProductCartInfo />
            </div>
        </div>
        </>
    )
}

export default CheckOut