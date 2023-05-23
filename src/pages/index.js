import Head from 'next/head'
import NavBar from '@/elements/NavBar'
import Footer from '@/elements/Footer'
import { useEffect } from 'react'


export default function HomePage() {
  useEffect(() => {
    document.title = 'Univest'
  }, [])

  return <>
    <Head>
      <title>Univest is a one-stop solution for all investment problems.</title>
      <meta name="description" content="We will look into the basics of stock trading, tips to choose the right stocks for trading and how to start stock trading online, and also get expert views." />
    </Head>
    <div className='h-60' />
    {/*<MainScreen />
    <WhyshouldSection />
    <CommentSection />
    <MakeWish />
    <InvestorSection /> */}
  </>
}
