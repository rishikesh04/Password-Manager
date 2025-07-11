import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full'>
            <div className="logo font-bold text-white text-2xl">

                <span>Pass</span><span className='text-purple-500'>Vault</span>
            </div>
            <div className='flex justify-center items-center'> Created with <img className='w-7 mx-2' src="icons/heart.png" alt="" /> by - <a className='text-purple-300' href="https://rishikeshshaw.netlify.app/">Rishikesh Shaw</a> </div>
        </div>
    )
}

export default Footer
