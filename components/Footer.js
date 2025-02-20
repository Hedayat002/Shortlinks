import React from 'react'

const Footer = () => {
return (
    <footer className=' bg-purple-700  text-white flex items-center justify-center px-4 h-16'>
        <p className='text-center'>Copyright &copy; {new Date().getFullYear()} NanoLinks. All rights reserved.</p>
    </footer>
)
}

export default Footer