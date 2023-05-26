import dynamic from 'next/dynamic'

const CountUp = dynamic(
    () => import('react-countup'),
    { ssr: false }
)
const VisibilitySensor = dynamic(
    () => import('react-visibility-sensor'),
    { ssr: false }
)

export default function CountUpBox({ start = 0, end, decimals = 0, duration = 3 }) {
    return <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
            isVisible ? <CountUp end={end} start={start} duration={duration} decimals={decimals} /> : <span>{start}</span>
        )}
    </VisibilitySensor>
}