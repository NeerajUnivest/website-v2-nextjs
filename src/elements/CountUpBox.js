import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useInView } from 'react-spring'

const CountUp = dynamic(
    () => import('react-countup'),
    { ssr: false }
)

export default function CountUpBox({ start = 0, end, decimals = 0, duration = 3 }) {
    const [ref, inView] = useInView()
    const [viewed, setViewed] = useState(false)
    useEffect(() => {
        inView && setViewed(true)
    }, [inView])

    return (
        <span ref={ref} >
            {viewed ? <CountUp end={end} start={start} duration={duration} decimals={decimals} /> : <span>{start}</span>}
        </span>)
}