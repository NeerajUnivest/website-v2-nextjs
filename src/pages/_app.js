import { UtilsContext } from '@/contexts/UtilsContext'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   AOS.init({
  //     delay: 0,
  //     duration: 600,
  //   });
  // });
  return (
    <main className={`${inter.variable} min-w-[346px]`}>
      <UtilsContext>
        <Component {...pageProps} />
      </UtilsContext>
    </main>
  )
}
