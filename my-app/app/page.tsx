import Head from 'next/head'
import HeroSection from './components/heroSection'
import Pencil from './components/Pencil/pencil'



export default function Home() {
  return (
    <div>
      <Head>
        Oasis Infobyte - Landing page
      </Head>
      <HeroSection/>
      <Pencil/>

      </div>
    
  )
}
