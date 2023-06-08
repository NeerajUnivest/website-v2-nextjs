
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { useInView } from 'react-spring';
import Team_Univest_1 from '@/assets/team/Team_Univest_1.webp';
import Team_Univest_2 from '@/assets/team/Team_Univest_2.webp';
import Team_Univest_3 from '@/assets/team/Team_Univest_3.webp';
import Team_Univest_4 from '@/assets/team/Team_Univest_4.webp';
import cxoLogo from '../../assets/images/cxo_today.png';
import financial_express from '../../assets/images/financial_express.png';
import yourstory from '../../assets/images/yourstory.png';
import VCC from '../../assets/images/VCC-logo.png';

const newsList = [
    {
        logo: cxoLogo,
        text: `The brainchild of Pranit Arora and Avneet Dhamija, was started with the goal to improve ROIs for every stock market investor by solving their problems of: Timely exit from non-performing investments to letting them convert into great investments within a jiffy.`,
        link: 'https://www.cxotoday.com/press-release/univest-secures-pre-seed-funding-of-3-8-crs-in-talks-to-raise-4-mn/'
    }, {
        logo: financial_express,
        text: `Nvestor must be careful while choosing these funds as these are cyclical in nature and may perform well when the going is good and disappoint at other times. “These have not been in the market long enough to make a conclusive point about outperformance over a longer time,” he says.`,
        link: 'https://www.financialexpress.com/money/mutual-funds/mutual-funds-business-cycle-funds-a-tactical-play/2671939/'
    }, {
        logo: yourstory,
        text: 'Univest is a stock market investment platform for retail investors, which aims to improve ROIs for stock market investor by helping them with timely exit from non-performing investments. It has onboarded around 4,000 active retail investors.',
        link: 'https://yourstory.com/2022/09/startup-funding-pescafresh-hackle-univest-savart-raise-early-stage-deals/amp'
    }, {
        logo: cxoLogo,
        text: `The brainchild of Pranit Arora and Avneet Dhamija, was started with the goal to improve ROIs for every stock market investor by solving their problems of: Timely exit from non-performing investments to letting them convert into great investments within a jiffy.`,
        link: 'https://www.cxotoday.com/press-release/univest-secures-pre-seed-funding-of-3-8-crs-in-talks-to-raise-4-mn/'
    }, {
        logo: VCC,
        text: 'Offers unique investment ecosystem enabling influencers and investors to discover stocks, research, trade, share information and track stocks through its exclusive platform where investments are made easy, intelligent and transparent. ',
        link: 'https://www.vccircle.com/earlystage-startups-deep-rooted-aye-finance-univest-raise-funding'
    }, {
        logo: yourstory,
        text: 'Univest is a stock market investment platform for retail investors, which aims to improve ROIs for stock market investor by helping them with timely exit from non-performing investments. It has onboarded around 4,000 active retail investors.',
        link: 'https://yourstory.com/2022/09/startup-funding-pescafresh-hackle-univest-savart-raise-early-stage-deals/amp'
    },
]

export default function InThePressSection() {
    const [ref, inView] = useInView()
    return (
        <section className=' bg-[#f5f5f5] pt-10 lg:pt-24 font-Inter'>
            <div className='max-w-screen-xl mx-auto px-4 lg:px-8' ref={ref}>
                <p className="font-extrabold text-center pb-8 text-lg lg:text-4xl text-black">
                    In The Press
                </p>
                <div className='grid grid-cols-12 grid-rows-2 grid-flow-col gap-2 h-[400px]'>
                    <Image src={Team_Univest_1} alt="gallery" className='col-span-8 lg:col-span-4 lg:row-span-2 inset-0 h-full w-full object-cover object-center rounded-lg' />
                    <Image src={Team_Univest_2} alt="gallery" className='col-span-4 lg:col-span-4 inset-0 h-full w-full object-cover object-center rounded-lg' />
                    <Image src={Team_Univest_3} alt="gallery" className='col-span-8 lg:col-span-4 inset-0 h-full w-full object-cover object-center rounded-lg ' />
                    <Image src={Team_Univest_4} alt="gallery" className='col-span-4 lg:col-span-4 lg:row-span-2 inset-0 h-full w-full object-cover object-center rounded-lg ' />
                </div>
            </div>
            <Marquee
                play={inView}
                speed={30}
                delay={2}>
                <div className='flex overflow-y-auto gap-x-14 lg:gap-x-40 py-10 lg:py-24 mx-10'>
                    {/* TODO */}
                    {newsList
                        .map((ele, i) =>
                            <Image key={i} src={ele.logo} className='h-7 lg:h-10 w-auto object-contain' alt='icon' />
                        )}
                </div>
            </Marquee>
        </section>
    )
}
