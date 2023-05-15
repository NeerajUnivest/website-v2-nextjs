import { UtilsContext } from '@/contexts/UtilsContext'
import '@/styles/globals.css'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { useEffect } from 'react'


export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   AOS.init({
  //     delay: 0,
  //     duration: 600,
  //   });
  // });
  return <UtilsContext>
    <Component {...pageProps} />
  </UtilsContext>
}
