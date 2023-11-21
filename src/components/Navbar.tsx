import React from 'react'
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { ModeToggle } from './toggle'
import { ThemeProvider } from './theme-provider'
import {Linkedin,Instagram,Github} from 'lucide-react'
import Leetcode from '@/leetcode'

function Navbar() {
  return (
    // <div className=''>
    // <nav className='flex justify-between sticky h-14 inset-x-0 top-2 z-30 pl-2.5 transition-all'>
    //     <div className='flex h-14 items-center row'>
    //             
    //     </div>
    //         {/* ToDO: Mobile Nav Bar */}
    //     <div className=' flex flex-col top-6 z-30 right-0 pr-5'>
    //                     <span className='flex z-40 font-semibold'>About</span>
    //                     <span className='flex z-40 font-semibold'>Experience</span>
    //                     <span className='flex z-40 font-semibold'>Projects</span>
    //                     <ModeToggle/>
    //     </div>
            
    // </nav>
    // <div className='relative h-50 w-50'>
    // <div className=' flex flex-col bottom-0 left-0 z-30 pr-5'>
    //                     <span className='flex z-40 font-semibold'>About</span>
    //                     <span className='flex z-40 font-semibold'>Experience</span>
    //                     <span className='flex z-40 font-semibold'>Projects</span>
    //                     <ModeToggle/>
    // </div>
    // </div>
    // </div>
    <div>
    {/* <div className="relative h-32 w-32 ..."> */}
        <div className="absolute left-0 top-0 m-10">
        <Link 
                href='/'
                className='flex z-40 font-semibold'
                >
                    <span>Raghav Gupta</span>
                </Link>
        </div>
    {/* </div> */}
    {/* <div className="relative h-32 w-32 ..."> */}
        <div className="absolute top-0 right-0 m-10">
                        <span className='flex z-40 opacity-60 font-semibold'>About</span>
                        <span className='flex z-40 opacity-60 font-semibold'>Experience</span>
                        <span className='flex z-40 opacity-60 font-semibold'>Projects</span>
                     <ModeToggle/>
        </div>

        <div className="hidden sm:block absolute bottom-0 left-0 ">
        <div className='flex flex-col m-10 space-y-6'>
        <a href='https://www.linkedin.com/in/raghvgupta/' target="_blank">
        <Linkedin size={32} strokeWidth={0.75} />
        </a>
        <a href='https://www.instagram.com/its_rg_/' target="_blank">
        <Instagram size={32} strokeWidth={0.75} />
        </a>
        <a href='https://github.com/Gupta-Raghav' target="_blank">
        <Github size={32} strokeWidth={0.75} />
        </a>
        {/* <div >
        <Leetcode/>
        </div> */}
        </div>

        </div>
    {/* </div> */}
    </div>
  )
}

export default Navbar






// <MaxWidthWrapper>
// <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
//     <Link 
//     href='/'
//     className='flex z-40 font-semibold'
//     >
//         <span>Raghav Gupta</span>
//     </Link>
// {/* ToDO: Mobile Nav Bar */}
//     <div className='hidden items-center space-x-4 sm:flex'>
//         <span className='flex z-40 font-semibold'>About</span>
//         <span className='flex z-40 font-semibold'>Experience</span>
//         <span className='flex z-40 font-semibold'>Projects</span>
//         <ModeToggle/>
//     </div>
// </div>
// </MaxWidthWrapper>




{/* <div className='hidden items-center space-x-4 sm:flex'>
                <>
                    <Link 
                    href='/pricing'
                    className={buttonVariants({
                        variant:"ghost",
                        size:'sm'
                    })}>
                        Pricing
                    </Link>
                    <LoginLink
                    className={buttonVariants({
                        variant:"ghost",
                        size:'sm'
                    })}>Sign in</LoginLink>
                    <RegisterLink
                    className={buttonVariants({
                        size:'sm'
                    })}>Get Started<ArrowRight className='ml-1.5 h-4 w-5'></ArrowRight></RegisterLink>
                </>
            </div> */}