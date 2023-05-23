// import ScreenersList from '../../components/Screeners/ScreenersList';
// import './Screeners.css'

// import screenerIcon from '../../assets/img/screenerIcon.webp';
// import newSquare from '../../assets/icn/newSquare.webp';
// import premium from '../../assets/icn/premium.webp';
import Image from 'next/image';
import axios from 'axios';
import Head from 'next/head';

export default function Screeners({ data }) {
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
        <div className='bg-[#e5e5e5]'>
            <div className='mx-4 py-2 lg:mx-20 font-normal text-[#414141] text-[10px] leading-[12px] md:text-[16px] md:leading-[24px] text-center'>
                Find the best stocks | Investing less time & energy into the research | Earn higher ROIs | Premium and advanced screeners
            </div>
        </div>

        {/* <div className='relative overflow-hidden ml-4 lg:ml-20 pt-4 lg:pt-0'>
            <div className='-z-10 rounded-[50px] absolute left-[50vw] top-[30vh] bg-[#e3f0fb96] h-[100vh] w-[60vw]' />

            <div className='absolute top-4 lg:top-10 right-4 font-Inter flex flex-row justify-center lg:justify-end  lg:mr-4 h-10'>
                <div className='ml-2 mr-1'>
                    <Image src={premium} className='-mt-[2px] h-5 lg:h-6' alt='icon' />
                </div>
                <div className='lg:mt-[2px] text-[12px] leading-[16px] text-[#202020]'>
                    Premium
                </div>
                <div className='ml-6 mr-1'>
                    <Image src={newSquare} className='h-4 lg:h-5' alt='icon' />
                </div>
                <div className='lg:mt-[2px] text-[12px] leading-[16px] text-[#202020]'>
                    Newly added
                </div>
            </div>
            <div className='hidden lg:flex flex-row content-center items-center mt-4 lg:mt-8 lg:mb-12'>
                <div className='mr-4'>
                    <Image src={screenerIcon} className='h-8 lg:h-20' alt='icon' />
                </div>
                <div>
                    <div className='font-Inter font-bold text-[18px] leading-[24px] text-[#202020] lg:text-[32px] lg:leading-[40px]'>
                        Screener homepage
                    </div>
                    <div className='font-normal text-[#414141] hidden lg:flex text-[20px] leading-[32px]'>
                        Top picks based on your preference. Powered by robust algorithms built by a highly experienced research team.
                    </div>
                </div>
            </div>
            <ScreenersList data={data} />
        </div> */}
    </>)
}

export async function getStaticProps() {
    let res = await axios.get(`https://uat-api.univest.in/resources/screeners/v2`)
    return {
        props: {
            data: res.data.data.list
        }
    };
}