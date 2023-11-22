import React from 'react'
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { ModeToggle } from './toggle'
import { ThemeProvider } from '../providers/theme-provider'
import {Linkedin,Instagram,Github} from 'lucide-react'
import Leetcode from '@/leetcode'

function Navbar() {
  return (
    <div className='sticky top-0 z-50' >
    <div className="sticky"> 
        <div className="absolute left-0 top-0 m-10">
        <Link 
                href='/'
                className='flex z-40 font-semibold'
                >
                    <span>Raghav Gupta</span>
                </Link>
        </div>
    
        <div className="absolute top-0 right-0 m-10 flex flex-col items-end text-right">
                        <span className='z-40 opacity-60 font-semibold'>About</span>
                        <span className='z-40 opacity-60 font-semibold'>Experience</span>
                        <span className='z-40 opacity-60 font-semibold'>Projects</span>
                     {/* <ModeToggle/> */}
        </div>
    </div>
    <div className="bg-red-500 absolute left-0 bottom-0 m-10">
        <Link 
                href='/'
                className='flex z-40 font-semibold'
                >
                    <span>Ananya Smirti</span>
                </Link>
        </div>
    
    </div>
  )
}

export default Navbar

