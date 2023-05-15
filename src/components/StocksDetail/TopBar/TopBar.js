import React, { useState, useEffect } from 'react'
import './TopBar.css'


var myInterval = setInterval(() => { return }, 1000);
export default function TopBar() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])
    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(winScroll);
        clearInterval(myInterval);

        myInterval = setTimeout(() => {
            switch (true) {
                case 275 > winScroll:
                    setActive(0);
                    break;
                case 275 < winScroll && 565 > winScroll:
                    setActive(1);
                    break;
                case 565 < winScroll && 880 > winScroll:
                    setActive(2)
                    break;
                case 880 < winScroll && 1325 > winScroll:
                    setActive(3)
                    break;
                case 1325 < winScroll && 1630 > winScroll:
                    setActive(4)
                    break;
                case 1630 < winScroll && 2000 > winScroll:
                    setActive(5)
                    break;
                case 2000 < winScroll && 2350 > winScroll:
                    setActive(6)
                    break;
                case 2350 < winScroll && 2600 > winScroll:
                    setActive(7)
                    break;
            }
        }, 100)
    };
    return (
        <div className='bg-white sticky top-[74px] lg:top-[94px] z-30 pt-1 shadow-sm'>
            <div className='snap-mandatory snap-x font-Inter text-[14px] text-[#666666] flex flex-row justify-start m-4 bg-white overflow-x-auto no-scrollbar'>
                <a href="#overall"
                    className={`min-w-[90px] py-2 flex justify-center border-b-2 outline-none ${active === 0 ? 'snap-center border-b-[#00439D] text-[#00439D] font-semibold' :
                        'border-b-[#E5E5E5] font-medium'}`}
                    onClick={() => setActive(0)} >
                    Overall
                </a>
                <a href="#key-indicators"
                    className={`min-w-[140px] py-2 flex justify-center border-b-2 outline-none ${active === 1 ? 'snap-center border-b-[#00439D] text-[#00439D] font-semibold' :
                        'border-b-[#E5E5E5] font-medium'}`}
                    onClick={() => setActive(1)} >
                    Key indicators
                </a>
                <a href="#financial-indicators"
                    className={`min-w-[160px] py-2 flex justify-center border-b-2 outline-none ${active === 2 ? 'snap-center border-b-[#00439D] text-[#00439D] font-semibold' :
                        'border-b-[#E5E5E5] font-medium'}`}
                    onClick={() => setActive(2)} >
                    Financial indicators
                </a>
                <a href="#company-financial"
                    className={`min-w-[160px] py-2 flex justify-center border-b-2 outline-none ${active === 3 ? 'snap-center border-b-[#00439D] text-[#00439D] font-semibold' :
                        'border-b-[#E5E5E5] font-medium'}`}
                    onClick={() => setActive(3)} >
                    Company financial
                </a>
                <a href="#holdings"
                    className={`min-w-[100px] py-2 flex justify-center border-b-2 outline-none ${active === 4 ? 'snap-center border-b-[#00439D] text-[#00439D] font-semibold' :
                        'border-b-[#E5E5E5] font-medium'}`}
                    onClick={() => setActive(4)} >
                    Holdings
                </a>
                <a href="#peer-comparison"
                    className={`min-w-[140px] py-2 flex justify-center border-b-2 outline-none ${active === 5 ? 'snap-center border-b-[#00439D] text-[#00439D] font-semibold' :
                        'border-b-[#E5E5E5] font-medium'}`}
                    onClick={() => setActive(5)} >
                    Peer Comparison
                </a>
                <a href="#news"
                    className={`min-w-[80px] py-2 flex justify-center border-b-2 outline-none ${active === 6 ? 'snap-center border-b-[#00439D] text-[#00439D] font-semibold' :
                        'border-b-[#E5E5E5] font-medium'}`}
                    onClick={() => setActive(6)} >
                    News
                </a>
                <a href="#events"
                    className={`min-w-[90px] py-2 flex justify-center border-b-2 outline-none ${active === 7 ? 'snap-center border-b-[#00439D] text-[#00439D] font-semibold' :
                        'border-b-[#E5E5E5] font-medium'}`}
                    onClick={() => setActive(7)} >
                    Events
                </a>
                <div className={'w-full border-b-2 border-b-[#E5E5E5] outline-none font-medium'}>
                </div>
            </div>
        </div>
    )
}
