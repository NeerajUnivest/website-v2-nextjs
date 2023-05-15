


function LazyEventCard() {
    return (
        <div className='mx-0 my-3
        border-[1px] 
        border-[#E5E5E5] rounded-[8px] 
        shadow-[0_1px_2px_rgba(0,0,0,0.2)] relative'>
            <div className='mx-3 my-3'>
                <div className='flex flex-row justify-between my-2'>
                    <div className='h-[16px] animate-pulse bg-[#D9D9D9] w-4/12 rounded'></div>
                    <div className='w-[16px] h-[16px] animate-pulse bg-[#D9D9D9] rounded'></div>
                </div>
                <div className='flex flex-row justify-start my-2 items-center'>
                    <div className='w-[24px] h-[24px] animate-pulse bg-[#D9D9D9] rounded' />
                    <div className=' ml-2 h-[18px] animate-pulse bg-[#D9D9D9] w-32 rounded '></div>
                </div>
                <div className='w-10/12 my-2 h-[12px] animate-pulse bg-[#D9D9D9] rounded'>
                </div>
                <div className='w-8/12 my-2 h-[12px] animate-pulse bg-[#D9D9D9] rounded'>
                </div>
            </div>
        </div>
    )
}

export default LazyEventCard