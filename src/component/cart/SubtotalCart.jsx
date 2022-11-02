import React from 'react'
import CurrencyFormat from 'react-currency-format'


const SubtotalCart = () => {
    
    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={value => <div>
                    <p> subtotal ( items ): <strong> {value} </strong> </p>
                    <small className='subtotal__gift'>
                        <input type="checkbox" name="" id="" />
                        <span> this order contain a gift </span>
                    </small>
                </div>}
                value={0} 
                displayType={'text'}
                decimalScale={2} 
                thousandSeparator={true} 
                prefix={'$'} 
            />
        </div>
    )
}

export default SubtotalCart