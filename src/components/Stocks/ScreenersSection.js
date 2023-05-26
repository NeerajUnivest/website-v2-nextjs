import { BlackButton, ScreenerCategoryChip } from "@/elements/Button/Button";
import { useAxios } from "@/hooks/useAxios";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from 'next/navigation';
import { BsArrowRight } from "react-icons/bs";
import ScreenerCard from "../Screeners/ScreenerCard";

export default function ScreenersSection() {
    // const { push } = useRouter();
    const { data, loading } = useAxios({ method: 'GET', url: `/resources/screeners/v2` });
    return (
        <section id="Screeners" className='font-Inter max-w-screen-xl mx-auto lg:px-8 py-32 bg-[#FFFFFF]'>
            <p className="my-8 lg:my-4 text-center text-xl lg:text-3xl font-extrabold text-black">
                Powered by robust algorithms built by a highly experienced research team.
            </p>
            <div className="mx-4 p-[1px] rounded-3xl bg-gradient-to-br to-[#ABC7ED] from-[#F1F6F8]">
                <p className="mt-6 lg:mt-16 ml-4 lg:ml-8 text-base lg:text-3xl font-semibold text-primary">
                    Popular screeners
                </p>
                <div className="pt-2 pb-4 lg:pt-6 lg:pb-12 grid grid-rows-2 lg:grid-rows-1 grid-flow-col overflow-x-auto gap-x-3 lg:gap-x-14 gap-y-6 px-4 lg:px-8" >
                    {data?.data?.list?.screenersList?.filter(f => f.mobile)?.map((ele, i) =>
                        <ScreenerCard key={i} ele={ele} />
                    )}
                </div>
                <p className="mb-11 text-center text-sm lg:text-xl font-semibold text-black">
                    <span className="text-app-red font-extrabold">New</span> screeners added every month
                </p>
            </div>
            <div className="mx-4 mt-8 py-2 lg:mt-12 flex flex-col lg:flex-row items-center justify-between gap-y-4 lg:gap-x-5">
                <div className="text-sm lg:text-base font-semibold text-black">
                    Explore by categories
                </div>
                <div className="grid grid-cols-2 lg:grid-flow-col grid-flow-row lg:grid-rows-1 gap-3">
                    {data?.data?.list?.screenersCategories?.map(ele => <ScreenerCategoryChip key={ele.categoryId} text={ele.categoryTitle} />)}
                </div>
                <BlackButton onClick={() => null} text='View all' className='px-6 lg:px-8 py-2 text-sm lg:text-base font-extrabold' />
            </div>
        </section>
    )
}

