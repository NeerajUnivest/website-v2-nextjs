import React, { useState } from 'react'
import arrowUp from '../assets/icons/arrowUp.png'
import arrowDown from '../assets/icons/arrowDown.png'
import point from '../assets/icons/point.png'
import Image from 'next/image';

function FAQcard({ heading, content }) {
    const [showFull, setShowFull] = useState(false);
    return (
        <div className='border-[1px] border-solid border-[#E5E5E5] rounded-[4px] mx-4 my-3'>
            <div className='flex flex-row justify-between px-2 my-2'
                onClick={() => setShowFull(!showFull)}>
                <div className='flex flex-row w-11/12'>
                    <Image src={point} className="h-[6px] mt-1.5 w-[6px] mx-2" alt="point" />
                    <div className='font-Inter font-medium text-[12px] leading-[20px]'>{heading}</div>
                </div>
                <div className='mt-2'>
                    <Image src={showFull ? arrowUp : arrowDown} className="h-[9.47px] w-auto mr-2" alt="arrow" />
                </div>
            </div>
            {showFull ?
                <div
                    className='mx-8 font-Inter font-medium text-[10px] leading-[18px] text-[#0b0b0b] my-4 text-justify'>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
                :
                null
            }
        </div>
    )
}

export default FAQcard