import { ModalContext } from '@/contexts/StockPageModal'
import { UserDetailContext } from '@/contexts/UserDetailContext'
import Footer from '@/elements/Footer'
// import Loading from '@/elements/Loading/Loading'
import NavBar from '@/elements/NavBar'
import TopBanner from '@/elements/TopBanner'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function App({ Component, pageProps }) {
  return (
    <main id='main_container' className={`${inter.variable} min-w-[346px] ${pageProps?.pageName == 'pro' ? 'bg-gradient-to-t from-[#222832] to-[#343434]' : ''}`}>
      {/* <TopBanner /> */}
      <UserDetailContext>
        <NavBar />
        {pageProps?.pageName === 'stock-details' ?
          <ModalContext>
            <Component {...pageProps} />
          </ModalContext>
          : <Component {...pageProps} />}
        <Footer />
      </UserDetailContext>

      <div id="toast-container" className="fixed w-full lg:w-[400px] bottom-5 right-0 lg:right-5 z-40" />
      <div id="pop-up-container" />
    </main>
  )
}
