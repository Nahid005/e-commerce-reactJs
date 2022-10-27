import React from 'react'

import HeaderTop from '../component/layouts/HeaderTop'
import Slider from '../component/layouts/Slider'
import ProductCategories from '../component/productCategory/ProductCategories'
import Products from '../component/product/Products'

const Home = () => {
    return (
        <div>
            <HeaderTop />
            <Slider />
            <ProductCategories />
            <Products />
        </div>
    )
}

export default Home 