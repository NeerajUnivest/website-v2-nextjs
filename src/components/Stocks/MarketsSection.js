import { BlackButton } from '@/elements/Button/Button';
import { useState } from 'react'
import { useTransition, animated, } from 'react-spring'
import bulk_block_deals from '../../assets/images/bulk_block_deals.png';
import global_indices from '../../assets/images/global_indices.png';
import morning_digest from '../../assets/images/morning_digest.png';
import market_sentiment from '../../assets/images/market_sentiment.png';
import Image from 'next/image';
import { popUp } from '@/elements/PopUp/PopUp';


const brokerList = [
    {
        name: "Market Sentiment",
        img: market_sentiment
    },
    {
        name: "Morning digest",
        img: morning_digest
    },
    {
        name: "Global indices",
        img: global_indices
    },
    {
        name: "Bulk/Block deals",
        img: bulk_block_deals
    },
]

export default function MarketsSection() {
    const [state, setState] = useState(0);

    const transitions = useTransition(state, {
        key: state,
        from: { opacity: 1, scale: 1 },
        enter: { opacity: 0, scale: 0.9, delay: 2000 },
        leave: { opacity: 1, scale: 1 },
        config: { duration: 300 },
        onRest: (_a, _b, item) => {
            if (_a.value?.opacity === 0) {
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
        <section id="Markets" className='max-w-screen-xl mx-auto lg:px-8 bg-[#FFFFFF]'>
            <p className="mt-5 lg:my-4 text-center text-xl lg:text-3xl font-extrabold text-[#414141]">
                Stay on top of the markets
            </p>
            <div className='w-full  bg-white p-5 flex flex-col lg:flex-row justify-between items-center'>
                <div className='w-full lg:w-1/2'>
                    <p className="text-sm lg:text-xl font-medium text-[#414141] text-center lg:text-left">
                        Harness the power of data and valuable insights that help you stay ahead of market trends and make well-informed decisions.
                    </p>
                    <div className='mt-8 mb-12 flex flex-row gap-5 lg:gap-11 lg:flex-col overflow-scroll no-scrollbar w-full snap-x snap-mandatory'>
                        {brokerList.map((ele, i) =>
                            <span key={ele.name} className={`ease-in-out whitespace-nowrap lg:w-auto duration-300 mx-3 lg:mx-0
                                ${state === i ? 'snap-center uni-wise-gradient3 text-base lg:text-3xl font-extrabold border-b-2 border-[#0862bcef] lg:border-0'
                                    : 'snap-none text-[#414141] text-base lg:text-2xl font-medium '}`}>
                                {ele.name}
                            </span>)
                        }
                    </div>
                    <BlackButton text='Explore more' className='mt-10 py-2 px-9 text-base font-extrabold hidden lg:block' onClick={() => popUp.open()} />
                </div>
                {transitions(style => (
                    <animated.div style={style} className="w-full lg:w-5/12 h-[451px] px-2 lg:px-3 lg:h-[451px] flex place-content-center">
                        <Image
                            width={400}
                            height={450}
                            quality={30}
                            src={brokerList[state].img}
                            className='w-full object-contain'
                            alt='broker logo' />
                    </animated.div>
                ))}
            </div>
            <BlackButton text='Explore more' className='mt-10 mx-auto py-2 px-9 text-base font-extrabold lg:hidden block' onClick={() => popUp.open()} />
        </section>
    )
}
