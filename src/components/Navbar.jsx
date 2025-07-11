import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-purple-200 text-white '>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

                <div className="logo font-bold text-black text-2xl">

                    <span>Pass</span><span className='text-purple-700'>Vault</span>
                </div>
                {/* <ul>
                    <li className='flex gap-4 '>
                        <a className='hover:font-bold' href='/'>Home</a>
                        <a className='hover:font-bold' href='#'>About</a>
                        <a className='hover:font-bold' href='#'>Contact</a>
                    </li>
                </ul> */}
                <button className='text-white bg-purple-700 my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1'>
                    <img className='invert  w-10 p-1' src="/icons/github.svg" alt="github logo" />
                    <a className='font-bold px-2' href="https://github.com/rishikesh04"> Github
                    </a>
                </button>

            </div>
        </nav>
    )
}

export default Navbar
