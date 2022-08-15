import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Foooter'
import MainPage from '../components/MainPage'
import Navbar from '../components/Navbar'
import Notify from '../components/Notify'
import Trending from '../components/Trending'
import Destination from '../components/Destination'
import Services from '../components/Services'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TravelX</title>
        <link rel="icon" href="./pro.ico" />
      </Head>

      <Navbar />
      <MainPage />
      <Trending />
      <Services />
      <Destination />
      <Notify />
      <Footer />
    </div>
  )
}

export default Home
