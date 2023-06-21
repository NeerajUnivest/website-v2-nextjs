import { ModalContext } from '@/contexts/StockPageModal'
import Footer from '@/elements/Footer'
// import Loading from '@/elements/Loading/Loading'
import NavBar from '@/elements/NavBar'
import { ToastContainer } from '@/elements/Toast/Toast'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function App({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <main className={`${inter.variable} min-w-[346px]`}>
      <Head>
        <title>{pageProps.title ?? 'Univest is a one-stop solution for all investment problems.'}</title>
        <meta name="description" content={pageProps.desc ?? "We will look into the basics of stock trading, tips to choose the right stocks for trading and how to start stock trading online, and also get expert views."} />
        <meta name="keywords" content={pageProps.keyWords ?? "Univest"} />
        <meta name="theme-color" content="#00439D" />
        <meta name="msapplication-navbutton-color" content="#00439D" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#00439D" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

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
