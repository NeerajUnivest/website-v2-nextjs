import { BlackButton } from '@/elements/Button/Button';
import sebi_new_logo from '@/assets/icons/sebi_new_logo.png';
import { useState } from 'react'
import { useTransition, animated, } from 'react-spring'
import crisp_stock_research from '../../assets/images/crisp_stock_research.png';
import marketsImg from '../../assets/images/markets.png';
import sharksImg from '../../assets/images/sharks.png';
import resultsImg from '../../assets/images/results.png';
import newsImg from '../../assets/images/news.png';
import markets from '../../assets/icons/markets.png';
import sharks from '../../assets/icons/sharks.png';
import results from '../../assets/icons/results.png';
import news from '../../assets/icons/news.png';
import Image from "next/image";
import background_circles from '../../assets/images/background_circles.png';
import { useRouter } from 'next/router';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { popUp } from "@/elements/PopUp/SEBIPopUp";


const brokerList = [
    {
        name: "Markets",
        icon: markets,
        img: marketsImg,
        text: 'Stay up to date with market and get daily pre - market analysis'
    },
    {
        name: "News",
        icon: news,
        img: newsImg,
        text: 'Read all your financial news in just about 60 words '
    },
    {
        name: "Results",
        icon: results,
        img: resultsImg,
        text: 'Track upcoming analyse declared company results'
    },
    {
        name: "Sharks",
        icon: sharks,
        img: sharksImg,
        text: 'Track the holdings and changes of India’s top investors'
    },
    {
        name: false,
        img: crisp_stock_research
    }
]

export default function ProductSection() {
    const router = useRouter()
    const [state, setState] = useState(3);

    const transitions = useTransition(state, {
        key: state,
        from: { opacity: 0, transform: 'translateY(30%)' },
        enter: { opacity: 1, transform: 'translateY(0)', },
        leave: { opacity: 0, transform: 'translateY(-10%)', delay: 3000, },
        config: { duration: 300 },
        onStart: (_a, _b, item) => {
            if (item === state) {
                if (state > brokerList.length - 2) {
                    setState(0)
                } else {
                    setState(state + 1)
                }
            }
        },
        exitBeforeEnter: true,
    })
    return (
        <section className='mt-8 px-4 lg:px-8 lg:py-20 bg-[#EDF5FF] font-Inter overflow-hidden bg-no-repeat bg-right-bottom lg:bg-center bg-[length:200vw_50%] lg:bg-cover' style={{ backgroundImage: `url(${background_circles.src})` }} >
            <div className='max-w-screen-xl mx-auto my-5 lg:my-0 lg:mb-7 flex flex-col lg:flex-row items-center justify-between'>
                <p className="mb-3 lg:mb-0 text-center lg:text-left text-xl lg:text-4xl font-extrabold text-[#414141]">
                    Crisp stock research
                </p>
                <div className="flex col-span-3 items-center" onClick={() => popUp.open()}>
                    <Image
                        placeholder="empty"
                        src={sebi_new_logo}
                        className='object-contain w-[40px] lg:w-[64px]'
                        alt='demo image'
                    />
                    <p className={`font-semibold text-base lg:text-2xl mx-2 text-black`}>Registered</p>
                    <AiOutlineInfoCircle color='#202020' className='text-[16px]  lg:text-[20px]' />
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center'>
                <div className='w-full lg:w-5/12'>
                    <p className=" text-center lg:text-left text-sm lg:text-xl font-medium text-[#414141]">
                        Personalise your investment experience with trade ideas from SEBI experts, AI based ‘Buy/Sell/Hold’ insights, advanced screeners and a lot more!
                    </p>
                    <div className='mt-8 mb-12 flex flex-row  lg:flex-col justify-between w-full lg:min-h-[370px]'>
                        {brokerList?.slice(0, -1).map((ele, i) =>
                            <div key={ele.name} className={`min-w-[70px] flex flex-col rounded-xl py-2 px-3 duration-300 ease-in ${i === state ? 'bg-[#FFFFFF80]  border-2 border-[#0862BC]' : ' border border-[#8EC8F7]'}`}
                                onClick={() => null}
                            >
                                <div className={`flex flex-col lg:flex-row justify-center lg:justify-start items-center `}>
                                    <Image
                                        placeholder="empty"
                                        src={ele.icon}
                                        className={`h-[36px] lg:h-[44px] w-[36px] lg:w-[44px] object-contain rounded-md lg:p-1 ${i === state ? 'lg:border-2 border-[#0862BC]' : 'lg:border border-[#8EC8F7]'}`}
                                        alt='demo image'
                                    />
                                    <span className={`mt-2 lg:mt-0 lg:ml-2.5 text-black ${i === state ? 'text-xs lg:text-2xl font-semibold' : 'text-xs lg:text-xl'}`}>
                                        {ele.name}
                                    </span>
                                </div>
                                <div className={`hidden lg:block mt-1 text-black text-xs lg:text-base duration-300 ease-in font-semibold overflow-hidden ${i === state ? 'max-h-8' : 'max-h-0'}`}>
                                    {ele.text}
                                </div>
                            </div>)}
                    </div>
                    <div className='flex justify-center'>
                        <BlackButton text='Explore more' className='mb-10 lg:mb-0 lg:w-full mx-auto py-3 px-9 lg:px-24 text-base font-extrabold' onClick={() => router.push('/stocks')} />
                    </div>
                </div>
                {transitions(style => (
                    <animated.div
                        style={style}
                        className="w-full lg:w-5/12 px-2 lg:px-3 h-[430px] lg:h-[551px] flex place-content-center"
                    >
                        <Image src={brokerList[state].img} className={`w-full object-top lg:object-right lg:object-contain ${!brokerList[state].name ? 'object-contain' : 'object-cover'}`} alt='demo image' />
                    </animated.div>
                ))}
            </div>
        </section>
    )
}
