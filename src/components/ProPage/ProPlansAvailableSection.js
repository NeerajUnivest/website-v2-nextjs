
const data = [
    { name: '3 months', dP: 499, rP: 999 },
    { name: '6 months', dP: 999, rP: 1099 },
    { name: '12 months', dP: 1299, rP: 1599 },
]

export default function ProPlansAvailableSection() {
    return (
        <section className="font-Inter ">
            <div className='max-w-screen-xl pt-24 mx-auto px-4 lg:px-8 overflow-hidden'>
                <p className={`text-center text-base lg:text-5xl font-bold text-white `}>
                    Plans available
                </p>
                <p className={`text-center mt-2 lg:mt-4 font-semibold text-sm lg:text-xl text-[#BCBCBC]`}>
                    Lorem ipsum dolor isit, lorem ipsum dolor isit
                </p>
                <div className="flex gap-3 lg:gap-6 justify-between mt-6 lg:mt-14">
                    {data.map(ele => <ProPlansCard key={ele.name} data={ele} />)}
                </div>
            </div>
        </section>
    )
}



export function ProPlansCard({ data }) {
    return (
        <div className="border rounded-xl overflow-hidden w-full font-Inter flex flex-col font-extrabold bg-white">
            <p className="bg-[#ECF6FE] py-1.5 lg:py-5 text-[10px] lg:text-3xl text-center">
                {data.name}
            </p>
            <p className="mt-2.5 lg:mt-7 text-sm lg:text-4xl text-center">
                ₹{data.dP}<del className="text-[#606060] text-xs lg:text-3xl font-medium ml-1 lg:ml-2">{data.rP}</del>
            </p>
            <div className="py-2 lg:py-6 flex justify-center">
                <span className="text-white rounded-md text-[10px] lg:text-2xl text-center bg-gradient-to-r from-[#61B2F3] to-[#0862bcd9] py-1 px-2 lg:px-5">
                    Save 25%
                </span>
            </div>
        </div>
    )
}
