import React from 'react'

import HeaderTop from '../component/layouts/HeaderTop'
import Slider from '../component/layouts/Slider'
import Products from '../component/product/Products'

const HomePage = () => {
    return (
        <div>
            <HeaderTop />
            <Slider />
            <Products />
        </div>
    )
}

export default HomePage 