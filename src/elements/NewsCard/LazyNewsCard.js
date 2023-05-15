

function LazyNewsCard(props) {
    return (
        <div className='font-Inter mx-0 my-3
        text-[12px] border-[1px] bg-[#ffffff]
        border-[#E5E5E5] rounded-[8px] 
        flex flex-row shadow-[0_1px_1px_rgba(0,0,0,0.2)] relative'>
            <div
                className='mx-3 mt-3 mb-3 flex flex-row w-full animate-pulse'
            >
                <div className='w-3/4 flex flex-col justify-between'>
                    <div className='mb-1 mr-2 h-5 w-9/12
                    text-[#232A31] text-[14px] 
                    font-Inter font-medium leading-[21px] pt-2 animate-pulse bg-[#D9D9D9] rounded'>
                    </div>
                    <div className='mb-1 mr-2 h-5 w-7/12
                    text-[#232A31] text-[14px] 
                    font-Inter font-medium leading-[21px] pt-2 animate-pulse bg-[#D9D9D9] rounded'>
                    </div>
                    <div className='mt-1 mr-2 h-3 w-10/12
                    text-[#5C6269] text-[12px] font-Inter font-medium leading-[18px] pb-2 animate-pulse bg-[#D9D9D9] rounded'>
                    </div>
                </div>
                <div className='w-1/4 flex flex-row justify-end'>
                    <div className='w-[77px] h-[76px] rounded-[8px] animate-pulse bg-[#D9D9D9]'></div>
                </div>
            </div>
        </div>
    )
}

export default LazyNewsCard;