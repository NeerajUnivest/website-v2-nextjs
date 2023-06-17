import { BlackButton } from '@/elements/Button/Button';
import sebi_logo from '@/assets/icons/sebi_logo.png';
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
import { useWindowSize } from '@uidotdev/usehooks';


const brokerList = [
    {
        name: "Markets",
        icon: markets,
        img: marketsImg.src
    },
    {
        name: "News",
        icon: news,
        img: newsImg.src
    },
    {
        name: "Results",
        icon: results,
        img: resultsImg.src
    },
    {
        name: "Sharks",
        icon: sharks,
        img: sharksImg.src
    },
    {
        img: crisp_stock_research.src
    }
]

export default function ProductSection() {
    const [state, setState] = useState(3);
    const { width } = useWindowSize();

    const transitions = useTransition(state, {
        key: state,
        from: { opacity: 0, transform: 'translateY(30%)' },
        enter: { opacity: 1, transform: 'translateY(0)', },
        leave: { opacity: 0, transform: 'translateY(-10%)', delay: 3000, },
        config: { duration: 300 },
        onStart: (_a, _b, item) => {
            // console.log(inView);
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
        <section className='mt-8 px-4 lg:px-8 lg:py-20 bg-[#EDF5FF] font-Inter overflow-hidden bg-no-repeat bg-right-bottom lg:bg-center bg-[length:200vw_50%] lg:bg-cover' style={{ backgroundImage: width > 746 && `url(${background_circles.src})` }} >
            <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center'>
                <div className='w-full lg:w-5/12'>
                    <p className="my-5 lg:my-4 text-center lg:text-left text-xl lg:text-5xl font-extrabold text-[#414141]">
                        Crisp stock research
                    </p>
                    <div className="flex lg:hidden justify-center mt-4 mb-6">
                        <Image
                            placeholder="empty"
                            src={sebi_logo}
                            className=' h-[40px] lg:h-[64px] w-[40px] lg:w-[64px]'
                            alt='demo image'
                        />
                        <div className="self-center ml-4 lg:ml-5">
                            <p className="font-semibold text-sm lg:text-base">Registered - <b>INA000017639</b></p>
                            <p className="font-medium text-[10px] text-[#606060]">Uniapps, a wholly owned subsidiary of Univest</p>
                        </div>
                    </div>
                    <p className=" text-center lg:text-left text-sm lg:text-xl font-medium text-[#414141]">
                        Lorem ipsum dolor sit amet consectetur. Vel cursus sit lacinia ut facilisi malesuada scelerisque suspendisse.
                    </p>
                    <div className='mt-8 mb-12 flex flex-row  lg:flex-col justify-between w-full lg:min-h-[370px]'>
                        {brokerList?.slice(0, -1).map((ele, i) =>
                            <div key={ele.name} className={`min-w-[70px] flex flex-col rounded-xl py-2 px-3 duration-300 ease-in ${i === state ? 'bg-[#FFFFFF80]  border-2 border-[#0862BC]' : ' border border-[#8EC8F7]'}`}
                            //  onClick={() => setState(i)}
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
                                    Read financial news like never before in 60 words.
                                </div>
                            </div>)}
                    </div>
                    <div className='flex justify-center'>
                        <BlackButton text='Explore more' className='mb-10 lg:mb-0 lg:w-full mx-auto py-3 px-9 lg:px-24 text-base font-extrabold' onClick={() => null} />
                    </div>
                </div>
                <div className="w-full lg:w-5/12 px-2 lg:px-3 h-[430px] lg:h-[551px] flex place-content-center">
                    {transitions(style => (
                        <animated.img
                            style={style}
                            src={brokerList[state].img}
                            className='w-full object-cover object-top lg:object-right lg:object-contain'
                            alt='broker logo'
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
