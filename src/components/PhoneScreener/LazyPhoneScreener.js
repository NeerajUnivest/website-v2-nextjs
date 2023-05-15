

function LazyPhoneScreener() {
    return (
        <div className='mx-4 pt-2 relative'>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
                .map((ele, i) =>
                    <div className='my-6 flex flex-row' key={i}>
                        <div className='h-11 mr-2 w-2/12 animate-pulse bg-[#D9D9D9] rounded-full'></div>
                        <div className='w-5/12'>
                            <div className='ml-2 mt-1 self-end w-8/12 h-[14px] animate-pulse bg-[#D9D9D9] rounded'></div>
                            <div className='ml-2 mt-1 self-end h-[12px] animate-pulse bg-[#D9D9D9] rounded'></div>
                        </div>
                        <div className='ml-2 self-end h-[22.5px] w-3/12 animate-puls'></div>
                        <div className='w-3/12'>
                            <div className='ml-2 self-end h-[14px] animate-pulse bg-[#D9D9D9] rounded'></div>
                            <div className='ml-2 mt-1 self-end h-[12px] animate-pulse bg-[#D9D9D9] rounded'></div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default LazyPhoneScreener;