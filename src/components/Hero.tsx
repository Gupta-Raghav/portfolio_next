"use client"
import { useContext, useEffect, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper"
import{ArrowUpRight, MoveDown} from 'lucide-react'
import { CursorContext } from "@/providers/cursorProvider";
function Hero() {
    const [cursorType, setCursorType] = useContext<any>(CursorContext);
  return (
    <MaxWidthWrapper>
        <div  className='flex justify-center pt-60 items-center'>
        {/* <h1 className='text-6xl sm:text-7xl dark:opacity-90 uppercase font-bold '>software</h1> */}
        <div className='flex flex-col items-center w-fit' onMouseEnter={() => setCursorType("hovered")}
                        onMouseLeave={() => setCursorType("default")}>
        <p className='text-xl sm:text-2xl mb-4 dark:opacity-80 uppercase font-extralight'>Raghav Gupta</p>
            <h1 className='text-6xl sm:text-7xl dark:opacity-80 uppercase font-semibold'>DEVELOPING </h1>
            <h1 className='text-6xl sm:text-7xl dark:opacity-80 uppercase font-semibold text-highlightColor'>amazing</h1>
            <h1 className='text-6xl sm:text-7xl dark:opacity-80 uppercase font-semibold text-highlightColor'>products</h1>
            <h1 className='text-6xl sm:text-7xl dark:opacity-80 uppercase font-semibold'>since</h1>
            <h1 className='text-6xl sm:text-7xl dark:opacity-80 uppercase font-semibold'>2020</h1>
            {/* <p className='text-xs sm:text-lg text-right'></p> */}
        </div>
        
    </div>

     <div className="flex flex-col items-end mt-24 text-sm sm:text-lg">
                <div className="bounding">
                    <h5 className="font-light">Looking for full time SWE roles</h5>
                </div>
                <div className="bounding">
                    <h5 className="boundingelem">from Jan '24</h5>
                </div>
            </div>
    {/* <div className="w-full flex justify-between items-center bottom-0 absolute"> 
        <a href="https://drive.google.com/file/d/13MjrDsANnUSSPSVIQdF6B11PrF57cw4R/view?usp=sharing"
            className="underline flex">check out my
            resume<ArrowUpRight/></a>
        <a href="#" className='hidden sm:block'>currently a grader for DBMS</a>
        <div className="flex">
            <div className="circle"><MoveDown /></div>
            <div className="circle"><MoveDown /></div>
        </div>
    </div> */}
    </MaxWidthWrapper>
    
  )
}

export default Hero
