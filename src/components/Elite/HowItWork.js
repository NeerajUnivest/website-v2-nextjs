
const data = [
    {
        id: 1,
        title: `Lenders (like you) invest`,
        details: `Funds invested through different investment plans are merged into corpus funds`,
    },
    {
        id: 2,
        title: `Borrowers are selected`,
        details: `Credible selection via rigorous verification & evaluation of 200+ criteria & 400+ data points`,
    },
    {
        id: 3,
        title: `Loans are disbursed`,
        details: `Basis credit history and loan tenures, money is disbursed at rates ranging from 10% to 24% p.a.`,
    },
    {
        id: 4,
        title: `You get your promised returns*`,
        details: `Post maturity of the plan, the funds are returned to the users based on the promised interest`,
    },
]
export default function HowItWork() {
    return (
        <section className='font-Inter max-w-screen-xl py-16 lg:py-24 mx-auto px-4 lg:px-8'>
            <p className='mb-8 text-xl lg:text-4xl text-black font-extrabold'>
                How is my money invested?
            </p>
            <div className='grid grid-rows-4 grid-cols-1 gap-y-4 lg:grid-rows-2 lg:grid-cols-2 lg:gap-y-12 lg:gap-x-16'>
                {data.map((ele, i) =>
                    <div key={i} className='flex'>
                        <div className='w-1/12'>
                            <div className={`text-center mt-3 mx-auto text-[14px] leading-[24px] h-6 w-6 rounded-full font-semibold text-black border border-black`}>
                                <span className='mx-auto'>{ele.id}</span>
                            </div>
                        </div>
                        <div className={`pl-4 py-2 rounded-xl font-extrabold text-base lg:text-xl text-black `}>
                            {ele.title}<br />
                            <span className='mt-3 font-normal text-sm lg:text-xl text-black'>{ele.details}</span>
                        </div>
                    </div>)}
            </div>
        </section>
    )
}
