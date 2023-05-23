import Head from "next/head"
import { useEffect } from "react"

export default function Blogs() {
    useEffect(() => {
        // location.href = 'https://univest.in/blogs'
    }, [])

    return (<>
        <Head>
            <title>Univest is a one-stop solution for all investment problems.</title>
            <meta name="description" content="We will look into the basics of stock trading, tips to choose the right stocks for trading and how to start stock trading online, and also get expert views." />
            <meta name="theme-color" content="#00439D" />
            <meta name="msapplication-navbutton-color" content="#00439D" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#00439D" />
        </Head>
        <section className='font-Inter max-w-screen-xl h-[70vh] mx-auto lg:px-8 bg-[#FFFFFF] flex justify-center'>
            <div className='self-center h-10 w-10 border-e-4 lg:h-20 lg:w-20 lg:border-e-8 border-[#00439D] animate-spin rounded-full' />
        </section>
    </>
    )
}
