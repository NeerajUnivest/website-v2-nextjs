import Image from "next/image";
import { useScrollPosition } from "@/hooks/useScrollPosition"
import portfolio_pro from '../../assets/icons/portfolio_pro.png';
import elite_pro from '../../assets/icons/elite_pro.png';
import trade_ideas from '../../assets/icons/trade_ideas.png';
import screeners_pro from '../../assets/icons/screeners_pro.png';
import { useEffect, useState } from "react";
import { useSmoothScrollToId } from "@/hooks/useSmoothScrollToId";
import { useDebounce } from "@uidotdev/usehooks";

let sec = [0, 1265, 2040, 2980, 7000]
const data = [
    { name: 'Unlimited trade ideas', id: 'Ideas', icon: trade_ideas },
    { name: 'Premium Screeners', id: 'Screeners', icon: screeners_pro },
    { name: '0.5% extra on Elite', id: 'AvailablePlans', icon: elite_pro },
    { name: 'Expert Advisory', id: 'QuarterlyPortfolio', icon: portfolio_pro },

]
export default function ProBarSection() {
    const scrollPosition = useScrollPosition();
    const scrolled = useDebounce(scrollPosition, 10);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (sec[0] < scrolled && scrolled < sec[1]) {
            setActive(0)
        } else if (sec[1] < scrolled && scrolled < sec[2]) {
            setActive(1)
        } else if (sec[2] < scrolled && scrolled < sec[3]) {
            setActive(2)
        } else if (sec[3] < scrolled && scrolled < sec[4]) {
            setActive(3)
        }
    }, [scrolled])

    return (
        <div className={`duration-300 ease-linear sticky top-[136px] lg:top-20 py-2 z-[2] ${scrollPosition > 660 ? 'shadow bg-black' : 'bg-black'}`}>
            <div className='max-w-screen-xl px-4 lg:px-8 mx-auto grid grid-cols-4 justify-items-stretch gap-3'>
                {data.map((ele, i) =>
                    <BarChip key={i} icon={ele.icon} text={ele.name} active={i === active} i={i} setActive={setActive} />)}
            </div>
        </div>
    )
}

export function BarChip({ icon, text, active, setActive, i }) {
    const smoothScrollTo = useSmoothScrollToId()
    return (
        <section onClick={() => { setActive(i); smoothScrollTo(data[i]?.id) }}
            className={`flex flex-col lg:flex-row justify-center items-center rounded-lg py-3 cursor-pointer hover:bg-[#ffffff0c] ${active ? 'bg-[#FFFFFF1A]' : ''}`}>
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

