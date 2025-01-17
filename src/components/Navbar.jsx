import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
import { links } from '../utils/contants';
import CartButtons from './CartButtons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img  src={logo} className=" w-[175px]" alt="Flowbite Logo" />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={handleMenuToggle}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            'X'
          ) : (
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
          )
          }
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full transation-all md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col gap-3 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className='block md:hidden'>
              <button onClick={handleMenuToggle}>X</button>
            </li>
            {links.map((link) => {
              const {id,text,url} = link
              console.log(url);
              return (
                <Fragment key={id}>
                <li key={id} >
                  <Link to={url} className="block py-2 px-3 text-white  bg-[#AB7B60] rounded md:bg-transparent md:text-black md:p-0  dark:text-white md:dark:text-blue-500 md:hover:text-[#AB7B60]"  aria-current="page">
                    {text}
                  </Link>
                </li>
                </Fragment>
              )
            })}
          </ul>
        </div>
          <CartButtons/>
      </div>
    </nav>
  );
};

export default Navbar;
