import React, {useState} from 'react'

import './Authentication.css'


const Authentication = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handelSignIn = (e) => {
        e.preventDefault()
        // auth.signInWithEmailAndPassword(email, password)
        // .then(auth => {
        //     console.log(auth)
        // })
    }

    const handelSignUp = (e) => {
        e.preventDefault()
    }

    const handelSubmit = () => {
        
    }


    return (
        <div className=' authentication container mx-auto'>
            <div className='authentication__logo mb-5 text-center'>
                <h2 className="font-bold text-lg"> Authentication Now </h2>
            </div>
            <div className='authentication__form w-full max-w-xs mx-auto'>
                <form onSubmit={handelSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input onChange={(e)=> setEmail(e.target.value) } className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" value={email} type="email" placeholder="Enter Email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input onChange={(e)=> setPassword(e.target.value) } className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" value={password} type="password" placeholder="******" />
                    </div>
                    <div className="w-full mb-5">
                        <button onClick={handelSignIn} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                        <a className="w-full align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="w-full">
                        <button onClick={handelSignUp} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Create an Account 
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2022 Nahid Hassan. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Authentication