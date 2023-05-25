import { BlackButton } from '@/elements/Button/Button';
import { useState } from 'react'
import { useTransition, animated, } from 'react-spring'
import mornging_digest from '../../assets/images/mornging_digest.png';


const brokerList = [
    {
        name: "Market Sentiment",
        img: mornging_digest.src
    },
    {
        name: "Morning digest",
        img: mornging_digest.src
    },
    {
        name: "Global indices",
        img: mornging_digest.src
    },
    {
        name: "Bulk/Block deals",
        img: mornging_digest.src
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
            <p className="my-5 lg:my-4 text-center text-xl lg:text-3xl font-extrabold text-[#414141]">
                Stay on top of the markets
            </p>
            <div className='w-full  bg-white p-5 flex flex-col lg:flex-row justify-center items-center'>
                <div className='w-full lg:w-1/2'>
                    <p className="text-sm lg:text-xl font-medium text-[#414141]">
                        Lorem ipsum dolor sit amet consectetur. Vel cursus sit lacinia ut facilisi malesuada scelerisque suspendisse.
                    </p>
                    <div className='mt-8 mb-12 flex flex-row gap-5 lg:gap-11 lg:flex-col overflow-scroll no-scrollbar w-full'>
                        {brokerList.map((ele, i) =>
                            <span key={ele.name} className={`ease-in-out min-w-[150px] lg:w-auto duration-300 ${state === i ? 'uni-wise-gradient3 text-base lg:text-3xl font-extrabold ' : 'text-[#414141] text-base lg:text-2xl font-medium '}`}>
                                {ele.name}
                            </span>)
                        }
                    </div>
                    <BlackButton text='Explore more' className='mt-10 py-2 px-9 text-base font-extrabold hidden lg:block' onClick={() => null} />
                </div>
                <div className="w-full lg:w-1/2 h-[451px] px-2 lg:px-3 lg:h-[451px] flex place-content-center">
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
