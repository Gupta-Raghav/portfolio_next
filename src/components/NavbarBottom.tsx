'use client'
import React from 'react';
import Link from 'next/link';
import FramerMagnetic from '@/components/framer'
import { Linkedin, Instagram, Github } from 'lucide-react';

function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      {/* Content for the Navbar */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="m-10 ">
            <div className="absolute hidden sm:block bottom-0 left-0 mt-[-20] pt-20">
                <div className='flex flex-col mx-10 mb-32 space-y-6'>
                <FramerMagnetic>
                <a href='https://www.linkedin.com/in/raghvgupta/' target="_blank">
                <Linkedin className='hover:stroke-highlightColor' size={30} strokeWidth={0.75} />
                </a>
                </FramerMagnetic>
                <FramerMagnetic>
                <a href='https://www.instagram.com/its_rg_/' target="_blank">
                <Instagram className='hover:stroke-highlightColor' size={30} strokeWidth={0.75} />
                </a>
                </FramerMagnetic>
                <FramerMagnetic>
                <a href='https://github.com/Gupta-Raghav' target="_blank">
                <Github className='hover:stroke-highlightColor' size={30} strokeWidth={0.75} />
                </a>
                </FramerMagnetic>

                {/* <a href='https://leetcode.com/guptaRaghav/' target="_blank">
                <Leetcode/>
                </a> */}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
