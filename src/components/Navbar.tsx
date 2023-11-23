import React from 'react'
import Link from 'next/link'

import Leetcode from '@/leetcode'

function Navbar() {
  return (
    <div className='sticky top-0 bg-red-700'>
        <div className="absolute left-0 top-0 m-10">
        <Link 
                href='/'
                className='flex z-40 font-semibold'
                >
                    <span>Raghav Gupta</span>
                </Link>
        </div>
    
        <div className="absolute top-0 right-0 m-10 flex flex-col items-end text-right">
                       <Link href="#about">
                        <span className='z-40 opacity-60 font-semibold'>About</span>
                       </Link>
                        <span className='z-40 opacity-60 font-semibold'>Experience</span>
                        <span className='z-40 opacity-60 font-semibold'>Projects</span>
                     {/* <ModeToggle/> */}
        </div>    
    </div>
  )
}

export default Navbar

