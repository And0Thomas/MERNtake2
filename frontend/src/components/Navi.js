import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from '../assets/logo.svg'
import Bag from '../assets/bag.svg'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white font-tanker tracking-wider'>
            <img src={Logo} alt='Logo' className='h-16 cursor-pointer'/>
            <h1 className='w-full text-3xl font-bold text-[#f0f0f0] hidden sm:flex'>Cardinal Coffee</h1>
            <ul className='hidden md:flex'>
                <li className='p-4 cursor-pointer'>Home</li>
                <li className='p-4 cursor-pointer'>Products</li>
                <li className='p-4 cursor-pointer'>Contact</li>
                <li className='whitespace-nowrap p-4 cursor-pointer'>Sign-In</li>
            </ul>
            <img src={Bag} alt='/' className='hidden md:flex p-3 h-11 cursor-pointer'/>
            <div onClick={handleNav} className='block md:hidden cursor-pointer p-4'>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-white-900 bg-[#171717] ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#f0f0f0] m-4'>Cardinal Coffee</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b cursor-pointer'>Home</li>
                    <li className='p-4 border-b cursor-pointer'>Products</li>
                    <li className='p-4 border-b cursor-pointer'>Sign-In</li>
                    <li className='p-4 border-b cursor-pointer'>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar