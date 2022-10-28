import React from 'react'
import CurrencyFormat from 'react-currency-format'


const ProductCartInfo = () => {
    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={value => <div>
                    <p> subtotal (0 items ): <strong> {value} </strong> </p>
                    <small className='subtotal__gift'>
                        <input type="checkbox" name="" id="" />
                        <span> this order contain a gift </span>
                    </small>
                </div>}
                value={2456981} 
                displayType={'text'}
                decimalScale={2} 
                thousandSeparator={true} 
                prefix={'$'} 
            />
        </div>
    )
}

export default ProductCartInfo