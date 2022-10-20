import React from 'react'

import Logo from '../../assets/images/logo.png'

const HeaderTop = () => {
    return (
        <div className='headerTop d-flex'>
            <div className='headerTop__logo'>
                <img src={Logo} alt="Amazon" />
            </div>
            <div className='headerTop__search'>
                <form>   
                    <div className="relative flex">
                        <div className='absulate'> 
                            S
                        </div>
                        <input type="search" className='w-100 border-1px' name="" id="" />
                        <button type="submit" className=''> search </button>
                    </div>
                </form>
            </div>
            <div className='headerTop__option'></div>
        </div>
    )
}

export default HeaderTop