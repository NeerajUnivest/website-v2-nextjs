import React, { useState } from 'react'
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
} from 'react-spring'

export default function MarketsSection() {
    const [open, set] = useState(false)

    const springApi = useSpringRef()
    const { size, ...rest } = useSpring({
        ref: springApi,
        config: config.stiff,
        from: { size: '20%', background: 'hotpink' },
        to: {
            size: open ? '100%' : '20%',
            background: open ? 'white' : 'hotpink',
        },
    })

    const transApi = useSpringRef()

    // This will orchestrate the two animations above, comment the last arg and it creates a sequence
    useChain(open ? [springApi, transApi] : [transApi, springApi], [
        0,
        open ? 0.1 : 0.6,
    ])
    return (
        <section id="Markets" className='max-w-screen-xl mx-auto lg:px-8'>
            <p className="my-5 lg:my-4 text-center text-xl lg:text-3xl font-extrabold text-[#414141]"
                onClick={() => set(open => !open)}>
                Stay on top of the markets
            </p>
            {/* grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 25px;
  padding: 25px;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height; */}
            <div className='w-full h-[500px] bg-white p-5 flex justify-center items-center'>
                {/* <animated.div
                    style={{ ...rest, width: size, height: size }}
                    className='relative grid grid-cols-4 grid-flow-row gap-4 p-4 bg-white  shadow-lg'>

                </animated.div> */}
            </div>
        </section>
    )
}
