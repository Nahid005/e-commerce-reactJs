import React from 'react'

import sliderImage from '../../assets/images/slider.jpg'

const Slider = () => {
    return(
        <div>
            <img className='w-full h-96' src={sliderImage} alt="slider images" />
        </div>
    )
}

export default Slider