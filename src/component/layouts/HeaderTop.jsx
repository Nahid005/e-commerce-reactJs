import React from 'react'
import { FaSistrix, FaShoppingCart,FaUser,FaRegBell } from 'react-icons/fa';
import {Link} from 'react-router-dom'

import Logo from '../../assets/images/logo.png'

const HeaderTop = () => {
    return (
        <div className='headerTop bg-[#334155] py-2 '>
            <div className='headerTop__container container mx-auto flex items-center justify-between flex-row w-full'>
                <div className='headerTop__logo w-3/12'>
                    <Link to="/">
                        <img className='w-28' src={Logo} alt="Amazon" />
                    </Link>
                </div>
                <div className='headerTop__search w-6/12'>
                    <form>   
                        <div className="relative flex items-center ">
                            <div className='absolute left-4 font-medium text-lg text-[#444]'> 
                                <FaSistrix />
                            </div>
                            <input type="search" className='w-full border-none h-10 px-8 focus:outline-none rounded-sm' name="" id="" placeholder='Fiend your product...' />
                            <button type="submit" className='absolute right-4 bg-orange-500 rounded-sm px-3 py-1 text-white'> search </button>
                        </div>
                    </form>
                </div>
                <div className='headerTop__option w-3/12 flex items-center justify-end gap-2'>
                    <div className='headerTop__optionLine bg-orange-500 p-2 text-white rounded-sm'>
                        <span> <FaUser /> </span>
                    </div>
                    <div className='headerTop__optionLine relative bg-orange-500 p-2 text-white rounded-sm'>
                        <span className="absolute text-white top-0 right-0 px-1 text-xs font-semibold rounded dark:bg-gray-700 dark:text-gray-300"> 0 </span>
                        <span> <FaShoppingCart /> </span>
                    </div>
                    <div className='headerTop__optionLine relative bg-orange-500 p-2 text-white rounded-sm'>
                        <span className="absolute text-white top-0 right-0 px-1 text-xs font-semibold rounded dark:bg-gray-700 dark:text-gray-300"> 0 </span>
                        <span> <FaRegBell /> </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop