import React from 'react'
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { ModeToggle } from './toggle'
import { ThemeProvider } from './theme-provider'
// import { buttonVariants } from './ui/button'
// import { LoginLink , RegisterLink} from '@kinde-oss/kinde-auth-nextjs/server'
// import { ArrowRight } from 'lucide-react'

function Navbar() {
  return (
    <nav className='absolute sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 backdrop-blur-lg transition-all'>

        <MaxWidthWrapper>
            <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                <Link 
                href='/'
                className='flex z-40 font-semibold'
                >
                    <span>Raghav Gupta</span>
                </Link>
            {/* ToDO: Mobile Nav Bar */}
                <div className='hidden items-center space-x-4 sm:flex'>
                    <span className='flex z-40 font-semibold'>About</span>
                    <span className='flex z-40 font-semibold'>Experience</span>
                    <span className='flex z-40 font-semibold'>Projects</span>
                    <ModeToggle/>
                </div>
            </div>
        </MaxWidthWrapper>

    </nav>
  )
}

export default Navbar











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