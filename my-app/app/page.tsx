import Head from 'next/head'
import HeroSection from './components/heroSection'
import Pencil from './components/Pencil/pencil'
import Banner from './components/banner'


export default function Home() {
  return (
    <div className="">
      <Head>
        Oasis Infobyte - Landing page
      </Head>
      {/* <Banner/> */}
      <HeroSection/>
      <div className='flex'>
        <Pencil/>
        <Pencil/>
        <Pencil/>
      </div>
      </div>
    
  )
}
