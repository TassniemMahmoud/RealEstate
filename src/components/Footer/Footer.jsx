import React from 'react'
import darkLogo from "../../assets/logo_dark.svg"
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden'>
      <div className='container flex flex-col mx-auto md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={darkLogo} />
          <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id voluptatum earum quisquam expedita! Facere dolor culpa unde velit magni delectus?</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <Link to={""} className='hover:text-white'>Home</Link>
            <Link to={"/about"} className='hover:text-white'>About Us</Link>
            <Link to={"/contact"} className='hover:text-white'>Contact Us</Link>
            <Link to={"/contact"} className='hover:text-white'>Privacy Policy</Link>
          </ul>
        </div>
        <div className='w-full md:w-1/3'>
        <h3 className='text-white text-lg font-bold mb-4'>Susbcribe To Our newsletter</h3>
        <p className='text-gray-400 mb-4 max-w-80'>The Latetst news, articles and resources, sent to your inbox weekly</p>
        <div className='flex gap-2'>
          <input className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto'
           type='email' placeholder='Enter Your Email'/>
           <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
        </div>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-gray-500 text-center'>
        Copy right 2024 @ GreatStack. All Right Reserved.
      </div>
    </div>
  )
}
