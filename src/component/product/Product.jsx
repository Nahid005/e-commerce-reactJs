import React from 'react'

const Product = (props) => {

console.log(props.items)

    const {name, img, price, } = props.items

    return (
        <div className='productCard bg-white border border-slate-900 p-3'>
            <div className='productCard__img text-center mb-3'>
                <img className='w-full' src={img} alt={name} />
            </div>
            <div className='productCard__info'>
                <div className='productCard__title'>
                    <h5> {name} </h5>
                </div>
                <div className='porductCard__price'> 
                    <p> <strong> Price: </strong> {price} </p>
                </div>
                <button> add to cart </button>
            </div>
        </div>
    )
}

export default Product