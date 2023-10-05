import Head from 'next/head'
import HeroSection from './components/heroSection'
import Pencil from './components/Pencil/pencil'



export default function Home() {
  return (
    <div className="z-0">
      <Head>
        Oasis Infobyte - Landing page
      </Head>
      <HeroSection/>
      <div className='flex'>
        <Pencil/>
        <Pencil/>
        <Pencil/>
      </div>
      

      </div>
    
  )
}
