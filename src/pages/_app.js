import { ModalContext } from '@/contexts/StockPageModal'
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
    <main className={`${inter.variable} min-w-[346px] pt-14 md:pt-0 ${pageProps?.pageName && 'bg-gradient-to-t from-[#222832] to-[#343434]'}`}>
      <TopBanner />
      <NavBar />
      {pageProps?.pageName === 'stock-details' ?
        <ModalContext>
          <Component {...pageProps} />
        </ModalContext>
        : <Component {...pageProps} />}

      <Footer />

      <div id="toast-container" className="fixed w-full lg:w-[400px] bottom-5 right-0 lg:right-5 z-40" />
      <div id="pop-up-container" />
    </main>
  )
}
