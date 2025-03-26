import React, { useEffect } from 'react'
import logo from "../../assets/logo.svg"
import menu from "../../assets/menu_icon.svg"
import close from "../../assets/cross_icon.svg"
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [showMobileMenu])

  return (
    <>
      <nav>
        <div className="absolute top-0 left-0 w-full z-10">
          <div className=' mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-gray-900'>
            <img src={logo} alt='logo' />
            <ul className='hidden md:flex gap-7 text-white'>
              <Link to={"/"} className='cursor-pointer hover:text-gray-400'>Home</Link>
              <Link to={"/about"} className='cursor-pointer hover:text-gray-400'>About</Link>
              <Link to={"/projects"} className='cursor-pointer hover:text-gray-400'>Projects</Link>
              <Link to={"/testimonial"} className='cursor-pointer hover:text-gray-400'>Testimonial</Link>
              <Link to={"/contact"} className='cursor-pointer hover:text-gray-400'>Contact Us</Link>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>SignUp</button>
            <img onClick={() => { setshowMobileMenu(true) }} src={menu} className='md:hidden w-7 cursor-pointer' />
          </div>
          {  /*--------Mobile-menu------*/}
          <div className={`md:hidden ${showMobileMenu ? "fixed w-full" : "h-0 w-0"}   right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className='flex justify-end p-6 cursor-pointer'>
              <img onClick={() => { setshowMobileMenu(false) }} src={close} className='w-6' />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
              <Link to={"/"} onClick={() => { setshowMobileMenu(false) }} className='cursor-pointer hover:text-gray-400 px-4 py-2 rounded-full inline-block'>Home</Link>
              <Link to={"/about"} onClick={() => { setshowMobileMenu(false) }} className='cursor-pointer hover:text-gray-400 inline-block'>About</Link>
              <Link to={"/projects"} onClick={() => { setshowMobileMenu(false) }} className='cursor-pointer hover:text-gray-400 inline-block'>Projects</Link>
              <Link to={"/testimonial"} onClick={() => { setshowMobileMenu(false) }} className='cursor-pointer hover:text-gray-400 inline-block'>Testimonial</Link>
              <Link to={"/contact"} onClick={() => { setshowMobileMenu(false) }} className='cursor-pointer hover:text-gray-400 inline-block'>Contact Us</Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
