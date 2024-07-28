import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Logo from '../assets/logo1.png'

const Header = () => {
  return (

    <div className='max-w-6xl mx-auto px-10 flex justify-between items-center py-4 shadow-lg'>
      <logo className="flex justify-start items-center ">
        <Image src={Logo} alt="logo" className="h-16  w-full object-contain aspect-auto" />
          </logo>
          <nav className='hidden md:flex items-center gap-6 text-md font-semibold text-gray-500'>
        <Link href="../home" className='hover:text-black '>Home</Link>
        <Link href="../menu" className='hover:text-black '>Menu</Link>
        <Link href="../about" className='hover:text-black '>About</Link>
        <Link href="../contact" className='hover:text-black '>Contact</Link>
        <Link href="../login  " className=' bg-red-500 px-4 py-2 rounded-full text-white'>Login</Link>
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
