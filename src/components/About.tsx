import MaxWidthWrapper from "./MaxWidthWrapper"

const About = () => {

  return (
    <MaxWidthWrapper>
    <div className='h-screen px-0 sm:px-16'>
        <div className="pt-60 flex items-center ml-3 sm:ml-0 sm:justify-center">
           <div className=" w-3/4 sm:w-full ">
           <h3 className="uppercase mb-5">About Me</h3>
            <p className="text-5xl/[55px] sm:text-7xl/[80px] font-semibold">
                I'm a selectively skilled <span className="text-textColor">software engineer</span> with strong focus on developing efficient products & impactful user experience. 
            </p>
           </div>
        </div>
    </div>
    </MaxWidthWrapper>
  )
}

export default About