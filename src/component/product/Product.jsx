import React from 'react'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useStateValue } from '../../StateProvider';

const productTitleShort = (str, num) => {
    return str.slice(0, num)+"..."
}

const Product = ({name, img, price, }) => {

    const [state, dispatch] = useStateValue()

    const adToBasket = () => {
        dispatch({
            type:"ADD_TO_BASKET",
            item: [{name:name, img:img, price:price}]
        })
    } 

    return (
        <div className='productCard bg-white border p-3 h-full rounded hover:scale-105 hover:transition-all'>
            <div className='productCard__img flex justify-center mb-3'>
                <img className='w-auto text-center' src={img} alt={name} />
            </div>
            <div className='productCard__info '>
                <div className='productCard__title'>
                    <h5> {productTitleShort(name, 49)} </h5>
                </div>
                <div className='porductCard__price text-left mb-5 mt-3 '> 
                    <p> <strong> Price: </strong> {price} </p>
                </div>
                <div className='productCard__button flex justify-center items-end'>
                    <button onClick={adToBasket} className='bottom-0 text-center bg-slate-900 p-2 text-white rounded flex items-center '> <MdOutlineAddShoppingCart className='mr-2'/> add to cart </button>
                </div>
            </div>
        </div>
    )
}

export default Product