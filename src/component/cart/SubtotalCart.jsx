import React from 'react'
import CurrencyFormat from 'react-currency-format'

import { priceCalculation } from '../../reducer'
import { useStateValue } from '../../StateProvider'

const SubtotalCart = () => {
    
    const [{basket}, dispatch] = useStateValue()

    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={value => <div>
                    <p> subtotal ( {basket.length} items ): <strong> {value} </strong> </p>
                    <small className='subtotal__gift'>
                        <input type="checkbox" name="" id="" />
                        <span> this order contain a gift </span>
                    </small>
                </div>}
                value={priceCalculation(basket)} 
                displayType={'text'}
                decimalScale={2} 
                thousandSeparator={true} 
                prefix={'$'} 
            />
        </div>
    )
}

export default SubtotalCart