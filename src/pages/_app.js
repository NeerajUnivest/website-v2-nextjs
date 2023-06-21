import { ModalContext } from '@/contexts/StockPageModal'
import Footer from '@/elements/Footer'
// import Loading from '@/elements/Loading/Loading'
import NavBar from '@/elements/NavBar'
import { ToastContainer } from '@/elements/Toast/Toast'
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

      <ToastContainer />
      <div id="pop-up-container" />
    </main>
  )
}
