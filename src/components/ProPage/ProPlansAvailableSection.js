import { BlackButton } from "@/elements/Button/Button"
import { popUp } from "@/elements/PopUp/PopUp"
import useSWR from 'swr'

const localData = [
    {
        "planName": "12 months",
        "displayAmount": 5999,
        "discountedAmount": 2399,
        "renewalPrice": 2399,
    },
    {
        "planName": "6 months",
        "displayAmount": 2999,
        "discountedAmount": 1499,
        "renewalPrice": 1499,
    },
    {
        "planName": "3 months",
        "displayAmount": 1499.0,
        "discountedAmount": 999,
        "renewalPrice": 999,
    }
]

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function ProPlansAvailableSection() {
    const { data, isLoading } = useSWR(`${process.env.apiBaseURL}/resources/pro-membership/plans`, fetcher)
    return (
        <section className="font-Inter ">
            <div className='max-w-screen-xl pt-24 mx-auto px-4 lg:px-8 overflow-hidden'>
                <p className={`text-center text-xl lg:text-5xl font-bold text-white `}>
                    Available plans
                </p>
                <div className="flex gap-3 lg:gap-6 justify-between mt-6 lg:mt-14">
                    {(data ?? localData)?.map(ele => <ProPlansCard key={ele.name} data={ele} />)}
                </div>
            </div>
            <div className='flex justify-center mt-6 lg:mt-12'>
                <BlackButton onClick={() => popUp.open()} text='Buy Pro' className='px-8 lg:px-12 py-2.5 text-sm lg:text-xl font-bold' />
            </div>
        </section>
    )
}



export function ProPlansCard({ data }) {
    return (
        <div className="border rounded-xl overflow-hidden w-full font-Inter flex flex-col font-extrabold bg-white">
            <p className="bg-[#ECF6FE] py-1.5 lg:py-5 text-[10px] lg:text-3xl text-center">
                {data.planName}
            </p>
            <p className="mt-2.5 lg:mt-7 text-sm lg:text-4xl text-center">
                ₹{data.discountedAmount?.toLocaleString('en-IN', { maximumFractionDigits: 0 })}<del className="text-[#606060] text-xs lg:text-3xl font-medium ml-1 lg:ml-2">₹{data.displayAmount?.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</del>
            </p>
            <div className="py-2 lg:py-6 flex justify-center">
                <span className="text-white rounded-md text-[10px] lg:text-2xl text-center bg-gradient-to-r from-[#61B2F3] to-[#0862bcd9] py-1 px-2 lg:px-5">
                    Save {((data.displayAmount - data.discountedAmount) * 100 / data.displayAmount)?.toLocaleString('en-IN', { maximumFractionDigits: 0 })}%
                </span>
            </div>
        </div>
    )
}
