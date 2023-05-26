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

export default function Section() {
    const [state, setState] = useState(0);

    const transitions = useTransition(state, {
        key: state,
        from: { opacity: 0, transform: 'translateY(10%)' },
        enter: { opacity: 1, transform: 'translateY(0)' },
        leave: { opacity: 0, transform: 'translateY(-10%)', delay: 2000, },
        config: { duration: 300 },
        onRest: (_a, _b, item) => {
            // if (_a.value?.opacity === 0) {
            if (state > brokerList.length - 2) {
                setState(0)
            } else {
                setState(state + 1)
                // }
            }
        },
        exitBeforeEnter: true,
    })
    return (
        <section id="Markets" className='max-w-screen-xl mx-auto lg:px-8 bg-[#EDF5FF]'>
            <div className='w-full p-5 flex flex-col lg:flex-row justify-between items-center'>
                <div className='w-full lg:w-5/12'>
                    <p className="my-5 lg:my-4 text-center lg:text-left text-xl lg:text-3xl font-extrabold text-[#414141]">
                        Crisp stock research
                    </p>
                    <p className="text-sm lg:text-xl font-medium text-[#414141]">
                        Lorem ipsum dolor sit amet consectetur. Vel cursus sit lacinia ut facilisi malesuada scelerisque suspendisse.
                    </p>
                    <div className='mt-8 mb-12 flex flex-row gap-5 lg:gap-11 lg:flex-col overflow-scroll no-scrollbar w-full'>
                        {brokerList.map((ele, i) =>
                            // <span key={ele.name} className={`ease-in-out min-w-[150px] lg:w-auto duration-300 ${state === i ? 'uni-wise-gradient3 text-base lg:text-3xl font-extrabold ' : 'text-[#414141] text-base lg:text-2xl font-medium '}`}>
                            //     {ele.name}
                            // </span>
                            <div key={ele.name} onClick={() => { setActive(text); smoothScrollTo(text) }}
                                className={`flex flex-col lg:flex-row justify-center lg:justify-start items-center rounded-lg py-2 px-3 cursor-pointer border border-[#8EC8F7] ${false ? 'bg-[#F6F3F3]' : ''}`}>
                                <Image
                                    placeholder="empty"
                                    src={ele.icon}
                                    className='h-[20px] lg:h-[40px] w-[20px] lg:w-[40px] object-contain'
                                    alt='demo image'
                                />
                                <span className="ml-2.5 text-xs lg:text-xl text-black">
                                    {ele.name}
                                </span>
                            </div>
                        )
                        }
                    </div>
                    <BlackButton text='Explore more' className='mt-10 py-2 px-9 text-base font-extrabold hidden lg:block' onClick={() => null} />
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
            <BlackButton text='Explore more' className='mt-10 mx-auto py-2 px-9 text-base font-extrabold lg:hidden block' onClick={() => null} />
        </section>
    )
}
