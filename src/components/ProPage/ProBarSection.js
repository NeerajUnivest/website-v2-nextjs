import Image from "next/image";
import { useScrollPosition } from "@/hooks/useScrollPosition"
import portfolio_pro from '../../assets/icons/portfolio_pro.png';
import elite_pro from '../../assets/icons/elite_pro.png';
import trade_ideas from '../../assets/icons/trade_ideas_pro.png';
import screeners_pro from '../../assets/icons/screeners_pro.png';
import { useEffect, useState } from "react";
import { useSmoothScrollToId } from "@/hooks/useSmoothScrollToId";
import { useDebounce } from "@uidotdev/usehooks";

let sec = [0, 1265, 2040, 2980, 7000]
const data = [
    { name: 'Trusted<br/> trade ideas', id: 'Ideas', icon: trade_ideas },
    { name: 'Premium<br/> screeners', id: 'Screeners', icon: screeners_pro },
    { name: 'Earn extra<br/>on Elite investments', id: 'AvailablePlans', icon: elite_pro },
    { name: 'Quarterly<br/> portfolio review', id: 'QuarterlyPortfolio', icon: portfolio_pro },

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

    return (<>
        <div className={`duration-300 ease-linear sticky top-[132px] md:top-20 pt-3 pb-2 z-[2] ${scrollPosition > 660 ? 'shadow bg-black' : 'bg-black'}`}>
            <div className='max-w-screen-xl px-4 lg:px-8 mx-auto grid grid-cols-4 justify-items-stretch gap-4 lg:gap-6'>
                {data.map((ele, i) =>
                    <BarChip key={i} icon={ele.icon} text={ele.name} active={i === active} i={i} setActive={setActive} />)}
            </div>
        </div>
        <div className="h-8 bg-black" />
        <div className="mt-5 lg:mt-8 flex justify-center">
            <p className="text-center text-sm lg:text-3xl font-extrabold text-white">Exclusively available on the Univest app</p>
            <a href='https://univest.onelink.me/VC6b/investwithunivest'>
                {/* <Image src={appAndPlay} alt='appAndPlay' className='h-5 ml-3 lg:h-10 lg:ml-6 object-contain' /> */}
            </a>
        </div>
    </>
    )
}

export function BarChip({ icon, text, active, setActive, i }) {
    const smoothScrollTo = useSmoothScrollToId()
    return (
        <section onClick={() => { setActive(i); smoothScrollTo(data[i]?.id) }}
            className={`flex flex-col lg:flex-row justify-start items-center rounded-lg py-1  cursor-pointer bg-[#FFFFFF1A] border-2 ${active ? 'bg-[#FFFFFF1A] border-[#ffb935]' : 'border-black'}`}>
            <Image
                placeholder="empty"
                src={icon}
                className='h-[40px] lg:h-[52px] w-[40px] lg:w-[52px] object-contain m-3 lg:mx-4'
                alt='demo image'
            />
            <span className=" text-xs lg:text-base text-white font-extrabold hidden lg:block" dangerouslySetInnerHTML={{ __html: text }} />
        </section>
    )
}

