import React from 'react'
import arrowDown from '@/assets/icn/arrowDown.png'
import Image from 'next/image';

export default function ExtraDetailCard({ heading, content, active, setActive, i }) {
    return (
        // <div className={`ease-in-out duration-300 border rounded-xl cursor-pointer bg-white ${active === i ? 'border-black border-1' : 'border-[#dfdfdf]'} `}
        //     onClick={() => setActive(active === i ? -1 : i)}>
        //     <div className='flex flex-row p-3'>
        //         {/* <div className='mr-3 mt-1.5 h-1 w-1 lg:h-2 lg:w-2 bg-[#202020] rounded-full' /> */}
        //         <p className='w-10/12 font-bold text-sm lg:text-base '>{heading}</p>
        //         <Image src={arrowDown} className={`ml-auto mt-1.5 h-2 lg:h-3 w-auto mr-2 ease-in-out duration-300 ${active === i ? 'rotate-180' : 'rotate-0'}`} alt="arrow" />
        //     </div>
        //     <div className={`overflow-hidden ease-in-out duration-300 mx-4 text-justify ml-3
        //     ${active === i ? ' opacity-100' : 'max-h-0 opacity-0 ml-0'}`}>
        //         <div className='h-px self-stretch bg-[#EDEDED]' ></div>
        //         <div className='mb-4 mt-2 font-medium text-xs lg:text-sm text-[#202020]' dangerouslySetInnerHTML={{ __html: content }} />
        //     </div>
        // </div>
        <div className='flex flex-col gap-3'>
            <h2 className='font-bold text-sm lg:text-base '>{heading}</h2>
            <div className='font-medium text-xs lg:text-sm text-[#202020]' dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}
