import { ModalContext } from '@/contexts/StockPageModal'
import Footer from '@/elements/Footer'
// import Loading from '@/elements/Loading/Loading'
import NavBar from '@/elements/NavBar'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function App({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <main className={`${inter.variable} min-w-[346px]`}>
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
