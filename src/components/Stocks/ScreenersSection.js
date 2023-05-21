import { BlackButton, ScreenerCategoryChip } from "@/elements/Button/Button";
import { useAxios } from "@/hooks/useAxios";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from 'next/navigation';
import { BsArrowRight } from "react-icons/bs";

export default function ScreenersSection() {
    // const { push } = useRouter();
    const { data, loading } = useAxios({ method: 'GET', url: `/resources/screeners/v2` });
    return (
        <section id="Screeners" className='font-Inter max-w-screen-xl mx-auto lg:px-8 py-10 bg-[#FFFFFF]'>
            <p className="my-8 lg:my-4 text-center text-xl lg:text-3xl font-extrabold text-black">
                Powered by robust algorithms built by a highly experienced research team.
            </p>
            <div className="mx-4 p-[1px] rounded-3xl bg-gradient-to-br to-[#ABC7ED] from-[#F1F6F8]">
                <p className="mt-6 lg:mt-16 ml-4 lg:ml-8 text-base lg:text-3xl font-semibold text-primary">
                    Popular screeners
                </p>
                <div className="pt-2 pb-4 lg:pt-6 lg:pb-12 grid grid-rows-2 lg:grid-rows-1 grid-flow-col overflow-x-auto gap-x-3 lg:gap-x-14 gap-y-6 px-4 lg:px-8" >
                    {data?.data?.list?.screenersList?.filter(f => f.mobile)?.map((ele, i) =>
                        <ScreenersCard key={i} ele={ele} />
                    )}
                </div>
                <p className="mb-11 text-center text-sm lg:text-xl font-semibold text-black">
                    <span className="text-app-red font-extrabold">New</span> screeners added every month
                </p>
            </div>
            <div className="mx-4 mt-8 lg:mt-12 flex flex-col lg:flex-row items-center justify-between gap-y-4 lg:gap-x-5">
                <div className="text-sm lg:text-base font-semibold text-black">
                    Explore by categories
                </div>
                <div className="grid grid-cols-2 lg:grid-flow-col grid-flow-row lg:grid-rows-1 gap-3 ">
                    {data?.data?.list?.screenersCategories?.map(ele => <ScreenerCategoryChip key={ele.categoryId} text={ele.categoryTitle} />)}
                </div>
                <BlackButton onClick={() => null} text='View all' className='px-6 lg:px-8 py-2 text-sm lg:text-base font-extrabold' />
            </div>
        </section>
    )
}


export function ScreenersCard({ ele }) {
    return (
        <Link href={`screeners/${ele.code}`}>
            <div className={`font-Inter bg-white w-[120px] min-w-[120px] h-[132px] lg:w-[200px] lg:min-w-[200px] lg:h-[156px] border-[1px] border-[#E5E5E5] rounded-[12px] p-3 relative overflow-hidden shadow-md z-[1]`}>
                {ele.newFlag && <div className='absolute top-2 -right-5 px-6 py-0.5 text-[8px] text-xs text-white bg-app-red rotate-45'>New</div>}
                <div className='relative'>
                    <Image width={40} height={40} src={ele.imageUrl} alt={ele.title} className='h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]' />
                    {/* {ele.premium && <img src={premium} className='absolute -bottom-2 left-5 h-[20px] w-[20px] lg:h-[24px] lg:w-[24px]' alt='premiumIcon' />} */}
                </div>
                <div className='line-clamp-2 w-2/3 text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px] font-semibold mt-4'>
                    {ele.title}
                </div>
                <div className='flex items-center justify-between text-[10px] leading-16px] lg:text-[12px] lg:leading-[20px] text-[#606060] font-medium mt-1'>
                    {ele.stocksCount} stocks <BsArrowRight size={16} color="#202020" className="hidden lg:flex" />
                </div>
            </div>
        </Link >
    )
}