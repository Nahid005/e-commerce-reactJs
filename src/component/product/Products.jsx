import React, {useState}from 'react'

import productData from '../../fake-data/products.json'
import Product from './Product'

const Products = () => {

    const [products, setProducts] = useState(productData)

    return (
        <div className='container w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center gap-y-10 gap-x-10 mt-10 mb-5'>
            {products.map((product) => <div key={product.key}>
                <Product {...product} />
            </div>)}
        </div>
    )
}

export default Products