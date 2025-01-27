import React from 'react'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
      <nav className='flex justify-between items-center '>
        {/* left side */}
        <div className='flex items-center md:gap-16 gap-4'>
          <Link to="/">
          <FaBarsStaggered className='size-6'/>
          </Link>

          {/* Search Input */}
          <div className='relative sm:w-72 w-40 space-x-2'>
          <BsSearch className='absolute inline-block left-3 inset-y-2'/>
          <input type="text" placeholder='Search here' 
          className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md 
          focus:outline-none' />
          </div>
        </div>

        {/* right side */}
        <div>
          nav items 
        </div>
      </nav>
    </header>
  )
}

export default Navbar