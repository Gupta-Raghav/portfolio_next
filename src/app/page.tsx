import Hero from '@/components/Hero'
import HiddenHero from '@/components/HiddenHero'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Navbar from '@/components/Navbar'
import About from '@/components/About'

export default function Home() {
  return (
    <MaxWidthWrapper>
      <Hero/>
        <HiddenHero/>
      {/* <Navbar/> */}
      <div className='text-textColor'>
          {/* <Hero/>
          <HiddenHero/> */}
          
          <section id='about'>
          <About/>
          </section>
      </div>
    </MaxWidthWrapper>

  )
}
