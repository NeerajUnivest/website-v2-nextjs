import Image from "next/image";
import { useScrollPosition } from "@/hooks/useScrollPosition"
import portfolio_pro from '../../assets/icons/portfolio_pro.png';
import elite_pro from '../../assets/icons/elite_pro.png';
import trade_ideas from '../../assets/icons/trade_ideas.png';
import screeners_pro from '../../assets/icons/screeners_pro.png';
import { useEffect, useState } from "react";
import { useSmoothScrollToId } from "@/hooks/useSmoothScrollToId";
import { useDebounce } from "@uidotdev/usehooks";

let sec = [0, 1265, 2040, 2780, 3500, 4300, 7000]
export default function ProBarSection() {
    const scrollPosition = useScrollPosition();
    const scrolled = useDebounce(scrollPosition, 10);
    const [active, setActive] = useState('Markets');

    useEffect(() => {
        if (sec[0] < scrolled && scrolled < sec[1]) {
            setActive('Markets')
        } else if (sec[1] < scrolled && scrolled < sec[2]) {
            setActive('Ideas')
        } else if (sec[2] < scrolled && scrolled < sec[3]) {
            setActive('Sharks')
        } else if (sec[3] < scrolled && scrolled < sec[4]) {
            setActive('Screeners')
        } else if (sec[4] < scrolled && scrolled < sec[5]) {
            setActive('Results')
        } else if (sec[5] < scrolled && scrolled < sec[6]) {
            setActive('News')
        }
    }, [scrolled])

    return (
        <div className={`duration-300 ease-linear sticky top-[136px] lg:top-20 py-2 z-[2] ${scrollPosition > 660 ? 'shadow bg-black' : 'bg-black'}`}>
            <div className='max-w-screen-xl px-4 lg:px-8 mx-auto grid grid-cols-4 justify-items-stretch gap-3'>
                <BarChip icon={trade_ideas} text='Ideas' active={active} setActive={setActive} />
                <BarChip icon={screeners_pro} text='Ideas' active={active} setActive={setActive} />
                <BarChip icon={elite_pro} text='Sharks' active={active} setActive={setActive} />
                <BarChip icon={portfolio_pro} text='Screeners' active={active} setActive={setActive} />
            </div>
        </div>
    )
}

export function BarChip({ icon, text, active, setActive }) {
    const smoothScrollTo = useSmoothScrollToId()
    return (
        <section onClick={() => { setActive(text); smoothScrollTo(text) }}
            className={`flex flex-col lg:flex-row justify-center items-center rounded-lg py-3 cursor-pointer hover:bg-[#ffffff0c] ${active === text ? 'bg-[#FFFFFF1A]' : ''}`}>
            <Image
                placeholder="empty"
                src={icon}
                className='h-[20px] lg:h-[28px] w-[20px] lg:w-[28px] object-contain'
                alt='demo image'
            />
            <span className="lg:ml-2.5 text-xs lg:text-base text-white font-extrabold hidden lg:block">
                {text}
            </span>
        </section>
    )
}

