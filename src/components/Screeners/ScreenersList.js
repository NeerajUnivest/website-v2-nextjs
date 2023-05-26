/* eslint-disable react-hooks/exhaustive-deps */

import ScreenerCard from "./ScreenerCard";


export default function ScreenersList({ data }) {
    return (
        <div className='relative mb-10'>
            {data?.screenersCategories?.map((cat, i) =>
                    <div className='font-Inter flex flex-col mt-4  lg:mt-6' key={i}>
                        <div className='ml-4 lg:ml-32 font-semibold text-[#00439D] text-[16px] leading-[20px] lg:text-[32px] lg:leading-[40px]'>
                            {cat.categoryTitle}
                        </div>
                        <div className='ml-4 lg:ml-32 font-normal text-[#414141] hidden lg:flex text-[20px] leading-[32px]'>
                            {cat.categoryDescription}
                        </div>
                        <div className="pl-4 lg:pl-32 py-2 lg:mt-4 lg:mb-6 flex gap-3 lg:gap-6 overflow-x-auto no-scrollbar">
                            {data?.screenersList?.filter(f => f.categoryId === cat.categoryId)?.map((ele, i) =>
                                <ScreenerCard key={i} ele={ele} />
                            )}
                        </div>
                    </div>
                )}

        </div >
    )
}
