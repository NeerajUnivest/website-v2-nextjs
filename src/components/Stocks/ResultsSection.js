import { BlackButton, ResultButton } from "@/elements/Button/Button";
import results_background from '../../assets/images/results_background.webp';
import declared_results from '../../assets/images/declared_results.webp';
import Image from "next/image";
import { useTransition, animated, } from 'react-spring'
import { useState } from "react";
let data = [
    { name: 'Upcoming', img: declared_results.src },
    { name: 'Declared', img: declared_results.src },
]
export default function ResultsSection() {
    const [state, setState] = useState(0);
    console.log(state);
    const transitions = useTransition(state, {
        key: state,
        from: { opacity: 1, scale: 1 },
        enter: { opacity: 0, scale: 0.9, delay: 2000, },
        leave: { opacity: 1, scale: 1 },
        config: { duration: 300 },
        onRest: (_a, _b, item) => {
            if (_a.value?.opacity === 0) {
                if (state === 1) {
                    setState(0)
                } else {
                    setState(1)
                }
            }
        },
        exitBeforeEnter: true,
    })
    return (
        <section id="Results" className='py-16 lg:py-4 font-Inter bg-[#FFFFFF]'>
            <div className="py-0 lg:py-8 max-w-screen-xl mx-auto lg:px-8 h-[500px] lg:h-[666px] w-full bg-no-repeat bg-center bg-cover flex flex-col justify-between" style={{ backgroundImage: `url(${results_background.src})` }} >

                <p className="text-center text-2xl lg:text-3xl font-semibold text-[#414141] relative">
                    Stay updated on the <br className="lg:hidden" />
                    <span className="uni-wise-gradient3 font-extrabold">Upcoming & Declared</span>
                    <br className="lg:hidden" /> results in your demat
                    <ResultButton className='absolute top-28 left-4 lg:top-20 lg:left-60' text='Upcoming' active={state === 0} />
                    <ResultButton className='absolute top-28 right-4 lg:top-20 lg:right-60' text='Declared' active={state === 1} />
                </p>
                {transitions(style => (
                    <animated.img
                        style={style}
                        src={data[state].img}
                        className='h-[280px] lg:h-[400px] object-contain mx-auto'
                        alt='broker logo'
                    />
                ))}
                {/* TODO */}
                <div className="w-full flex justify-center">
                    <BlackButton text='View latest results' className='px-6 lg:px-8 py-2 text-sm lg:text-base font-extrabold' onClick={() => null} />
                </div>
            </div>
        </section>
    )
}
