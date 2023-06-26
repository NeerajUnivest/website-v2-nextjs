import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useSmoothScrollToId } from '@/hooks/useSmoothScrollToId';
import { useDebounce } from '@uidotdev/usehooks';
import React, { useState, useEffect } from 'react'
// import './TopBar.css'


let sec = [0, 275, 565, 880, 1325, 1630, 2000, 2300, 2600]

const section = [
    { id: 'overall', text: 'Overall', pos: 0 },
    { id: 'key-indicators', text: 'Key indicators', pos: 275 },
    { id: 'financial-indicators', text: 'Financial indicators', pos: 565 },
    { id: 'company-financial', text: 'Company financial', pos: 880 },
    { id: 'holdings', text: 'Holdings', pos: 1325 },
    { id: 'peer-comparison', text: 'Peer comparison', pos: 1630 },
    { id: 'news', text: 'News', pos: 2000 },
    { id: 'events', text: 'Events', pos: 2300 },
    { id: '', text: '', pos: 4000 },
]


export default function TopBar() {
    const scrollPosition = useScrollPosition();
    const scrolled = useDebounce(scrollPosition, 10);
    const [active, setActive] = useState('overall');

    useEffect(() => {
        section.map((ele, i) => {
            if (section[i].pos < scrolled && scrolled < section[i + 1]?.pos) {
                setActive(ele.id)
            }
        })
    }, [scrolled])
    return (
        <div className='bg-white sticky lg:top-[84px] z-[8] pt-1 shadow-sm'>
            <div className='snap-mandatory snap-x font-Inter text-[14px] text-[#666666] flex flex-row justify-start m-4 bg-white overflow-x-auto no-scrollbar'>
                {section.map(ele =>
                    <BarChip key={ele.id} id={ele.id} text={ele.text} active={active} setActive={setActive} />
                )}
            </div>
        </div>
    )
}

export function BarChip({ id, text, active, setActive }) {
    const smoothScrollTo = useSmoothScrollToId()
    return (
        <div className={`whitespace-nowrap px-4 py-2 flex justify-center border-b-2 outline-none select-none cursor-pointer duration-300 ease-in-out text-sm
            ${active === id ? 'snap-center border-b-[#00439D] text-[#00439D] font-semibold' : 'border-b-[#E5E5E5] font-medium'}`}
            onClick={() => { setActive(id); smoothScrollTo(id) }} >
            {text}
        </div>
    )
}
