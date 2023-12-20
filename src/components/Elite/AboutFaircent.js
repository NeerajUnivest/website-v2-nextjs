
export default function AboutFaircent() {
    return (
        <section className='py-[72px] font-Inter relative overflow-hidden'>
            <div className='rounded-full absolute left-[-20vw] top-[50vh] bg-gradient-to-r from-[#c1eef4] to-[#fff] h-[30vh] w-[50vw] blur-3xl opacity-50' />
            <div className='max-w-screen-xl mx-auto px-4 lg:px-8  z-[2]'>
                <p className='mb-6 text-base lg:text-4xl text-black font-semibold lg:font-extrabold'>
                    About <span className="text-[#B3161B]">FAI<span className="text-[#0075B8]">₹</span>CENT</span>
                </p>
                <div className=' flex flex-col lg:flex-row justify-between items-center'>
                    <div className="w-full lg:w-[47%]">
                        <div className=' py-2 px-4 lg:py-7 lg:px-5 flex justify-start w-auto rounded-lg border-[3px] border-[#0862BC] items-center'>
                            <p className='font-extrabold mr-2 lg:mr-6 text-transparent text-2xl lg:text-5xl bg-clip-text bg-gradient-to-r from-[#4158D0] to-[#C850C0]'>
                                100%
                            </p>
                            <p className='text-xs lg:text-xl font-semibold text-black'>
                                payouts and withdrawals have been honoured at Faircent
                            </p>
                        </div>
                        <p className='my-4 lg:my-0 lg:mt-8 text-xs lg:text-base leading-6 text-[#606060]'>
                            Faircent is <b>India`s first and largest Registered NBFC-P2P</b> that started with the vision of financially empowering the country’s eligible individuals and SMEs. Whether you are a lender or a borrower, you get the best of rates at Faircent. Because we know every % counts!
                        </p>
                    </div>
                    <div className='w-full lg:w-[47%] grid grid-cols-2 grid-rows-2 gap-4 lg:gap-6'>
                        <div className='p-3 lg:p-5 bg-[#7CC6B4] w-full flex flex-col rounded-xl'>
                            <p className='text-base lg:text-2xl font-extrabold text-[#FFFFFF]'>
                                2.5 Lacs+
                            </p>
                            <p className='mt-1 lg:mt-2 text-xs lg:text-xl font-medium text-[#FFFFFF]'>
                                lenders joined us
                            </p>
                        </div>
                        <div className='p-3 lg:p-5 bg-[#5D8EDD] w-full flex flex-col rounded-xl'>
                            <p className='text-base lg:text-2xl font-extrabold text-[#FFFFFF]'>
                                40 Lacs+
                            </p>
                            <p className='mt-1 lg:mt-2 text-xs lg:text-xl font-medium text-[#FFFFFF]'>
                                borrowers joined us
                            </p>
                        </div>
                        <div className='p-3 lg:p-5 bg-[#77C6E0] w-full flex flex-col rounded-xl'>
                            <p className='text-base lg:text-2xl font-extrabold text-[#FFFFFF]'>
                                3.5 Lacs+
                            </p>
                            <p className='mt-1 lg:mt-2 text-xs lg:text-xl font-medium text-[#FFFFFF]'>
                                avg investment size
                            </p>
                        </div>
                        <div className='p-3 lg:p-5 bg-[#DE7F61] w-full flex flex-col rounded-xl'>
                            <p className='text-base lg:text-2xl font-extrabold text-[#FFFFFF]'>
                                3,900 Crores+
                            </p>
                            <p className='mt-1 lg:mt-2 text-xs lg:text-xl font-medium text-[#FFFFFF]'>
                                loans funded so far
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
