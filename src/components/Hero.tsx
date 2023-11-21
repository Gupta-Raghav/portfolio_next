import MaxWidthWrapper from "./MaxWidthWrapper"
import{ArrowUpRight, MoveDown} from 'lucide-react'
function Hero() {
  return (
    <MaxWidthWrapper>
        <div className="relative h-max">
        <div className='py-6 pt-60'>
        <h1 className='text-3xl sm:text-7xl dark:opacity-60 uppercase font-bold '>software</h1>
        <div className='w-2/4 flex flex-col items-end width-fit'>
            <h1 className='text-3xl sm:text-7xl dark:opacity-60 uppercase font-bold'>DEVELOPER</h1>
            <p className='text-xs sm:text-lg text-right'>Based in United States.</p>
        </div>
    </div>

     <div className="flex flex-col items-end mt-24 text-sm sm:text-lg">
                <div className="bounding">
                    <h5 className="boundingelem">Looking for full time SWE roles</h5>
                </div>
                <div className="bounding">
                    <h5 className="boundingelem">from Jan '24</h5>
                </div>
            </div>
    <div className=" w-full flex justify-between items-center -bottom-80 sm:-bottom-60 absolute">
        <a href="https://drive.google.com/file/d/13MjrDsANnUSSPSVIQdF6B11PrF57cw4R/view?usp=sharing"
            className="underline flex">check out my
            resume<ArrowUpRight/></a>
        <a href="#" className='hidden sm:block'>currently a grader for DBMS</a>
        <div className="flex">
            <div className="circle"><MoveDown /></div>
            <div className="circle"><MoveDown /></div>
        </div>
    </div>
        </div>
    </MaxWidthWrapper>
    
  )
}

export default Hero