import { UtilsContext } from '@/contexts/UtilsContext'
import Footer from '@/elements/Footer'
import Loading from '@/elements/Loading/Loading'
import NavBar from '@/elements/NavBar'
import { usePageLoading } from '@/hooks/usePageLoading'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function App({ Component, pageProps }) {
  const { isPageLoading } = usePageLoading();
  console.log(isPageLoading);
  return (
    <main className={`${inter.variable} min-w-[346px]`}>
      <UtilsContext>
        <NavBar />
        {isPageLoading ? <Loading /> : (
          <Component {...pageProps} />
        )}
        <Footer />
      </UtilsContext>
    </main>
  )
}
