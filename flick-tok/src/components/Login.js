import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg' alt="cover-image" />
        </div>
        <form className='w-3/12 absolute p-12 bg-black bg-opacity-70 mx-auto my-36 right-0 left-0 text-white rounded-lg'>
            <h1 className='py-4 font-bold text-3xl'>{isSignInForm? "Sign In": "Sign Up"}</h1>
            {!isSignInForm &&
                <input className='p-4 my-4 w-full bg-gray-500' type='text' placeholder='Full Name'/>
            }
            <input className='p-4 my-4 w-full bg-gray-500' type='text' placeholder='Email address'/>
            <input className='p-4 my-4 w-full bg-gray-500' type='password' placeholder='Password'/>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm? "Sign In": "Sign Up"}</button>
            <p onClick={toggleSignInForm} className='py-4 cursor-pointer'>{isSignInForm? "New to Netflix? Sign Up Now" : "Already an user! Sign In."}</p>
        </form>
    </div>
  )
}

export default Login