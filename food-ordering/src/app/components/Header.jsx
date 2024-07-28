import Link from 'next/link'
import React from 'react'
import home from '../about/page';

const Header = () => {
  return (
    <div className='flex justify-between items-center px-6 py-4 shadow-lg'>
          <logo className="text-red-500 text-xl md:text-2xl font-bold">
            <h1>Foody</h1>
          </logo>
          <nav className='hidden md:flex items-center gap-6 text-md font-semibold text-gray-500'>
              <Link href={' '} className='hover:text-black '>Home</Link>
              <Link href={' '} className='hover:text-black '>Menu</Link>
              <Link href={' '} className='hover:text-black '>About</Link>
              <Link href={' '} className='hover:text-black '>Contact</Link>
              <Link href={' '} className=' bg-red-500 px-4 py-2 rounded-full text-white'>Login</Link>
      </nav>
      
      <div className="menu md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
      </div>
          
    </div>
  )
}

export default Header
