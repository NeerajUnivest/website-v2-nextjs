import { ModalContext } from '@/contexts/StockPageModal'
import { UtilsContext } from '@/contexts/UtilsContext'
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
  console.log('pageName : ' + pageProps?.pageName);
  return (
    <main className={`${inter.variable} min-w-[346px]`}>
      <UtilsContext>
        <NavBar />





        {pageProps?.pageName === 'stock-details' ?
          <ModalContext>
            <Component {...pageProps} />
          </ModalContext>
          : <Component {...pageProps} />}


        {/* {isPageLoading ? <Loading /> : (
        <Component {...pageProps} />
        )} */}
        <Footer />
      </UtilsContext>
    </main>
  )
}
