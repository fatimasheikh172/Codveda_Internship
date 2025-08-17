import Link from 'next/link'
import React from 'react'
export default function Navbar () {
  return (
    <nav className='bg-yellow-300 text-black px-6 py-4'>
     <div className="max-w-7xl  mx-auto flex items-center justify-between">
             <Link href="/" className="text-2xl font-bold tracking-wide">
             Fleurique
            </Link>
           <ul className="flex gap-6 font-medium text-lg">
            <li>
                <Link href="/" className="hover:text-white transition">
                Home
                </Link>
            </li>
            <li>
                <Link href="./about" className="hover:text-white transition">
                About
                </Link>
            </li>
            <li>
                <Link href="/contact" className="hover:text-white transition">
                Contact
                </Link>
            </li>
           </ul>
          </div>
    </nav>
  )
}


