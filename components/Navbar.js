import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-16 bg-purple-700 flex justify-between px-3 items-center text-white'>
        {/* <div className='logo font-bold text-lg'> 
          <Link href="/" >NanoLink</Link >
          </div> */}
          <div className='logo font-bold text-2xl'> 
          <Link href="/" className='relative'>
            <span className='text-yellow-300'>Nano</span>
            <span className='text-white'>Link</span>
            <span className='absolute -top-1 -right-2 text-xs text-yellow-300'>✦</span>
          </Link>
        </div>
        <ul className='flex justify-center gap-4 items-center'>
            <Link href="/" ><li>Home</li></Link >
            <Link href="/about"><li>About</li></Link >
            <Link href="/shorten"><li>Shorten</li></Link >
            <Link href="/contact"><li>Contact us</li></Link >

            <li className='flex gap-3'>
                <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
                <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Github</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar