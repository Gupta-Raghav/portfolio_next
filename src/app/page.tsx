import Hero from '@/components/Hero'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Navbar from '@/components/Navbar'
import About from '@/components/About'

export default function Home() {
  return (
    <MaxWidthWrapper>
      {/* <Navbar/> */}
      <Hero/>
      <About/>
    </MaxWidthWrapper>

  )
}
