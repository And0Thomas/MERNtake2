import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/logo.svg';
import Bag from '../assets/bag.svg';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const cart = (message) => {
    window.alert(message);
  };
  const products = (message) => {
    //window.alert(message);
    window.location.href = '/signin';
  };

  const contacts = (message) => {
    //window.alert(message);
    window.location.href = '/contacts';
  };

  const signIn = (message) => {
    //window.alert(message);
    window.location.href = '/signin';
  };

  const signUp = (message) => {
    //window.alert(message);
    window.location.href = '/signup';
  };

  const home = (message) => {
    //window.alert(message);
    window.location.href = '/';
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white font-tanker tracking-wider'>
      <img src={Logo} alt='Logo' className='h-16 cursor-pointer' onClick={() => home('Home button clicked')}/>
      <h1 className='w-full text-3xl font-bold text-[#f0f0f0] hidden sm:flex'>
        Cardinal Coffee
      </h1>
      <ul className='hidden md:flex'>
        <li className='p-4 cursor-pointer'>
          <button className='focus:outline-none' onClick={() => home('Home button clicked')}>Home</button>
        </li>
        <li className='p-4 cursor-pointer'>
          <button className='focus:outline-none' onClick={() => products('Products button clicked')}>Products</button>
        </li>
        <li className='p-4 cursor-pointer'>
          <button className='focus:outline-none' onClick={() => contacts('Contact button clicked')}>Contact</button>
        </li>
        <li className='whitespace-nowrap p-4 cursor-pointer'>
          <button className='focus:outline-none' onClick={() => signIn('Sign-Up button clicked')}>Sign-In</button>
        </li>
        <li className='whitespace-nowrap p-4 cursor-pointer'>
          <button className='focus:outline-none' onClick={() => signUp('Sign-In button clicked')}>Sign-Up</button>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden cursor-pointer p-4'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-white-900 bg-[#171717] ease-in-out duration-500 md:hidden'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-[#f0f0f0] m-4'>
          Cardinal Coffee
        </h1>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b cursor-pointer'>
            <button className='focus:outline-none' onClick={() => home('Home button clicked')}>Home</button>
          </li>
          <li className='p-4 border-b cursor-pointer'>
            <button className='focus:outline-none' onClick={() => products('Products button clicked')}>Products</button>
          </li>
          <li className='p-4 border-b cursor-pointer'>
            <button className='focus:outline-none' onClick={() => signIn('Sign-In button clicked')}>Sign-In</button>
          </li>
          <li className='p-4 border-b cursor-pointer'>
            <button className='focus:outline-none' onClick={() => signUp('Sign-Up button clicked')}>Sign-Up</button>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
