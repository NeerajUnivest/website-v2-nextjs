import { UtilsContext } from '@/contexts/UtilsContext'
import Footer from '@/elements/Footer'
import NavBar from '@/elements/NavBar'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} min-w-[346px]`}>
      <UtilsContext>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </UtilsContext>
    </main>
  )
}
