import { BlackButton } from '@/elements/Button/Button';
import { useState } from 'react'
import { useTransition, animated, } from 'react-spring'
import mornging_digest from '../../assets/images/mornging_digest.png';
import markets from '../../assets/icons/markets.png';
import sharks from '../../assets/icons/sharks.png';
import results from '../../assets/icons/results.png';
import news from '../../assets/icons/news.png';
import Image from "next/image";


const brokerList = [
    {
        name: "Markets",
        icon: markets,
        img: mornging_digest.src
    },
    {
        name: "News",
        icon: news,
        img: mornging_digest.src
    },
    {
        name: "Results",
        icon: results,
        img: mornging_digest.src
    },
    {
        name: "Sharks",
        icon: sharks,
        img: mornging_digest.src
    },
]

export default function ProductSection() {
    const [state, setState] = useState(0);

    const transitions = useTransition(state, {
        key: state,
        from: { opacity: 0, transform: 'translateY(30%)' },
        enter: { opacity: 1, transform: 'translateY(0)' },
        leave: { opacity: 0, transform: 'translateY(-10%)', delay: 2000, },
        config: { duration: 300 },
        onRest: (_a, _b, item) => {
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
        <section className=' px-4 lg:px-8 py-20 bg-[#EDF5FF] font-Inter overflow-hidden'>
            <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center'>
                <div className='w-full lg:w-5/12'>
                    <p className="my-5 lg:my-4 text-center lg:text-left text-xl lg:text-3xl font-extrabold text-[#414141]">
                        Crisp stock research
                    </p>
                    <p className="text-sm lg:text-xl font-medium text-[#414141]">
                        Lorem ipsum dolor sit amet consectetur. Vel cursus sit lacinia ut facilisi malesuada scelerisque suspendisse.
                    </p>
                    <div className='mt-8 mb-12 flex flex-row gap-y-6 lg:flex-col justify-between w-full'>
                        {brokerList.map((ele, i) =>
                            <div key={ele.name} className={`min-w-[70px] flex flex-col rounded-lg py-2 px-3 duration-300 ease-in ${i === state ? 'bg-[#F6F3F3]  border-2 border-[#0862BC]' : ' border border-[#8EC8F7]'}`}
                            //  onClick={() => setState(i)}
                            >
                                <div className={`flex flex-col lg:flex-row justify-center lg:justify-start items-center `}>
                                    <Image
                                        placeholder="empty"
                                        src={ele.icon}
                                        className='h-[20px] lg:h-[40px] w-[20px] lg:w-[40px] object-contain'
                                        alt='demo image'
                                    />
                                    <span className={`lg:ml-2.5 text-black ${i === state ? 'text-xs lg:text-2xl font-semibold' : 'text-xs lg:text-xl'}`}>
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
                <div className="w-full lg:w-5/12 h-[451px] px-2 lg:px-3 lg:h-[451px] flex place-content-center">
                    {transitions(style => (
                        <animated.img
                            style={style}
                            src={brokerList[state].img}
                            className='w-full object-contain'
                            alt='broker logo'
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
