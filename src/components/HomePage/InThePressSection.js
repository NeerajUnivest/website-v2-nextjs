
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { useInView } from 'react-spring';
import news1 from '../../assets/inpress/news1.png';
import news2 from '../../assets/inpress/news2.png';
import news3 from '../../assets/inpress/news3.png';
import news4 from '../../assets/inpress/news4.png';
import Link from 'next/link';
import logo1 from '../../assets/inpress/logo1.png';
import logo2 from '../../assets/inpress/logo2.png';
import logo3 from '../../assets/inpress/logo3.png';
import logo4 from '../../assets/inpress/logo4.png';
import logo5 from '../../assets/inpress/logo5.png';
import logo6 from '../../assets/inpress/logo6.png';
import logo7 from '../../assets/inpress/logo7.png';
import logo8 from '../../assets/inpress/logo8.png';

const newsList = [
    { logo: logo1, url: 'https://brandequity.economictimes.indiatimes.com/news/advertising/pratik-gandhi-solves-all-investor-challenges-in-univests-new-ad/96914991' },
    { logo: logo2, url: 'https://www.aninews.in/news/business/business/univest-collaborates-with-pratik-gandhi-to-conquer-retail-investor-challenges20230110114440/' },
    { logo: logo3, url: 'https://www.ceoinsightsindia.com/ceo-talks/next-revolution-ai-ml-in-investments-space-nwid-13438.html' },
    { logo: logo4, url: 'https://www.zee5.com/articles/univest-collaborates-with-pratik-gandhi-to-conquer-retail-investor-challenges' },
    { logo: logo5, url: 'https://www.livemint.com/v/s/www.livemint.com/money/personal-finance/mutual-fund-calculator-can-you-make-a-corpus-of-rs-5-cr-in-5-years-by-investing-rs-5-lakh/amp-11682166974534.html?usqp=mq331AQIUAKwASCAAgM%3D&amp_js_v=0.1#ampf=' },
    { logo: logo6, url: 'https://yourstory.com/2022/09/startup-funding-pescafresh-hackle-univest-savart-raise-early-stage-deals/amp' },
    { logo: logo7, url: 'https://bwdisrupt.businessworld.in/article/Univest-Secures-INR-3-8-Cr-In-Pre-Seed-Round-In-talks-To-Raise-4-Mn/22-09-2022-447768/' },
    { logo: logo8, url: 'https://theprint.in/ani-press-releases/univest-collaborates-with-pratik-gandhi-to-conquer-retail-investor-challenges/1307389/' },
]

export default function InThePressSection() {
    const [ref, inView] = useInView()
    return (
        <section className=' bg-[#f5f5f5] pt-10 lg:pt-24 font-Inter'>
            <div className='max-w-screen-xl mx-auto px-4 lg:px-8' ref={ref}>
                <p className="font-extrabold text-center pb-6 lg:pb-10 text-xl lg:text-5xl text-black">
                    In The Press
                </p>
                <div className='grid grid-cols-12 grid-rows-2 grid-flow-col gap-2 h-[380px]'>
                    <Link href='https://www.entrepreneur.com/en-in/news-and-trends/univest-raises-15-million-in-seed-funding-round/447810'
                        className='col-span-8 lg:col-span-4 lg:row-span-2 inset-0'>
                        <Image src={news2} alt="gallery" className='h-full w-full object-cover object-center rounded-lg' />
                    </Link>
                    <Link href='https://www.ceoinsightsindia.com/ceo-talks/next-revolution-ai-ml-in-investments-space-nwid-13438.html'
                        className='col-span-4 lg:col-span-4 inset-0'>
                        <Image src={news3} alt="gallery" className='h-full w-full object-cover lg:object-top object-center rounded-lg' />
                    </Link>
                    <Link href='https://brandequity.economictimes.indiatimes.com/news/advertising/pratik-gandhi-solves-all-investor-challenges-in-univests-new-ad/96914991'
                        className='col-span-8 lg:col-span-4 inset-0'>
                        <Image src={news1} alt="gallery" className='h-full w-full object-cover object-center rounded-lg ' />
                    </Link>
                    <Link href='https://www.aninews.in/news/business/business/univest-collaborates-with-pratik-gandhi-to-conquer-retail-investor-challenges20230110114440/'
                        className='col-span-4 lg:col-span-4 lg:row-span-2 inset-0'>
                        <Image src={news4} alt="gallery" className='h-full w-full object-cover object-center rounded-lg ' />
                    </Link>
                </div>
            </div>
            <Marquee
                play={inView}
                speed={30}
                delay={2}>
                <div className='flex overflow-y-auto gap-x-14 lg:gap-x-40 py-8 lg:py-24 mx-10'>
                    {/* TODO */}
                    {newsList
                        .map((ele, i) =>
                            <Link key={i} href={ele.url}>
                                <Image src={ele.logo} className='h-6 lg:h-10 w-auto object-contain' alt='icon' /></Link>
                        )}
                </div>
            </Marquee>
        </section >
    )
}
