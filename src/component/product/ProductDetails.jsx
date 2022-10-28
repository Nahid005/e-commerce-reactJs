import React from 'react'

import ProductCartInfo from './ProductCartInfo'

const ProductDetails = () => {
    return (
        <div className='productDetails container'>
            <div className='productDetails__productList'>
                <div className='productDetails_title'>
                    <h4> Cart items list </h4>
                </div>

                
            </div>
            <div className='productDetails__cartInfo'>
                <ProductCartInfo />
            </div>
        </div>
    )
}

export default ProductDetails