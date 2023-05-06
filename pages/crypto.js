import Head from 'next/head'
import Banner from '../components/Banner'
import Banner_2 from '../components/Banner_2'
import Footer from '../components/Footer'
import HashRate from '../components/HashRate'
import Navigation from '../components/Navigation'
import Options from '../components/Options'
import Perks from '../components/Perks'
import Status from '../components/Status'
import Subscribe from '../components/Subscribe'

export default function Crypto() {
  return (
    <div className="relative">
      <Head>
        <title>YAKSHARAT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navigation */}
      <Navigation />
      {/* Banner */}
      <Banner />
      {/* Status */}
      <Status />
      {/* Banner-2 */}
      <Banner_2 />
      {/* HashRate */}
      <HashRate />
      {/* Options */}
      <Options />
      {/* Perks */}
      <Perks />
      {/* Subscribe */}
      <Subscribe />
      {/* Footer */}
      <Footer />
    </div>
  )
}
