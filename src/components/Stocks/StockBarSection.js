import { useScrollPosition } from "@/hooks/useScrollPosition"

export default function StockBarSection() {
    const scrollPosition = useScrollPosition()
    return (
        <section className={`duration-300 ease-linear lg:px-8 sticky top-16 lg:top-20 pt-3 lg:py-2 z-[1] ${scrollPosition > 800 ? 'bg-[#20202080]' : 'bg-white'}`}>
            <div className='max-w-screen-xl mx-auto lg:mx-0 grid grid-cols-3 lg:grid-cols-6 justify-items-stretch gap-y-3'>
                <BarChip text='Markets' active={true} />
                <BarChip text='Ideas' />
                <BarChip text='Sharks' />
                <BarChip text='Screeners' />
                <BarChip text='Results' />
                <BarChip text='News' />
            </div>
        </section>
    )
}

export function BarChip({ text, active }) {
    return (
        <div className={`justify-self-center py-2 px-8 rounded-lg text-xs lg:text-base text-black font-extrabold ${active ? 'bg-[#F6F3F3]' : ''}`}>
            {text}
        </div>
    )
}

