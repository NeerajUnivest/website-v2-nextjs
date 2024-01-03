import React from 'react'
import Actions from '@/elements/Actions';

const amortizationData = [
    {
        month: 'Jan',
        principalPaid: '12345',
        interestCharged: '54321',
        totalPayment: '12345',
        balance: '54321'
    },
    {
        month: 'Feb',
        principalPaid: '12345',
        interestCharged: '54321',
        totalPayment: '12345',
        balance: '54321'
    },
    {
        month: 'Mar',
        principalPaid: '12345',
        interestCharged: '54321',
        totalPayment: '12345',
        balance: '54321'
    }
]

export default function AmortizationDetailSetion() {
    return (
        <section className='mx-4 lg:m-0  flex flex-col items-center gap-4 '>
            <div className='w-full flex justify-between items-center self-stretch py-0'>
                <p className='text-[color:var(--Neutral-900,#202020)] text-base not-italic font-bold leading-7'>Amortization details </p>
                <select className=' flex justify-end items-center gap-2 border border-[color:var(--Neutral-900,#202020)] rounded-lg border-solid pl-3 pr-2 py-1 '>
                    <option value={'2010'}>2010</option>
                    <option value={'2011'}>2011</option>
                    <option value={'2012'}>2012</option>
                    <option value={'2013'}>2013</option>
                </select>
            </div>
            <div className='w-full  bg-white rounded-2xl overflow-hidden whitespace-nowrap'>
                <div className='flex flex-row font-Inter w-full overflow-x-scroll no-scrollbar '>
                    <table className="table w-full border-collapse swiper-no-swiping">
                        <thead>
                            <tr className='h-10 text-center '>
                                <th className='sticky -left-[0px] bg-gradient-to-br from-[#ECF1F3] to-[#F1F4EE] text-[10px] lg:text-sm md:text-sm text-[color:var(--Neutral-900,#202020)] text-center font-bold min-w-[30px] pl-2'>Month</th>
                                <th className='px-2 text-[10px] lg:text-sm md:text-sm text-[color:var(--Neutral-900,#202020)] font-bold border border-x-0 border-neutral-100  min-w-[30px] '>Principal paid</th>
                                <th className='px-2 text-[10px] lg:text-sm md:text-sm text-[color:var(--Neutral-900,#202020)] font-bold border border-x-0 border-neutral-100  min-w-[30px]'>Interest charged</th>
                                <th className='px-2 text-[10px] lg:text-sm md:text-sm text-[color:var(--Neutral-900,#202020)] font-bold border border-x-0 border-neutral-100  min-w-[30px]'>Total payment</th>
                                <th className='px-2 text-[10px] lg:text-sm md:text-sm text-[color:var(--Neutral-900,#202020)] font-bold border border-x-0 border-neutral-100  min-w-[30px]'>Balance</th>
                            </tr>
                        </thead>
                        <AmortizationDetailTable amortizationData={amortizationData} />
                    </table>
                </div>
            </div>
        </section>
    )
}


export function AmortizationDetailTable({ amortizationData }) {
    return (
        <tbody>
            {!amortizationData?.[0]
                ?
                <tr className="m-4 bg-[#D9D9D9] w-full rounded-lg animate-pulse" /> :
                amortizationData?.map((item, i) =>
                    <tr key={i} className='h-[52px] md:h-16'>
                        <td className='pt-2 sticky -left-[0px] text-center font-bold  bg-gradient-to-br from-[#ECF1F3] to-[#F1F4EE] text-[10px] leading-[18px]  px-2 min-w-[70px] lg:min-w-[100px] border border-neutral-100 cursor-pointer'>
                            {item.month}
                        </td>
                        <td className='text-xs md:text-sm font-semibold leading-[18px] text-center items-center pl-4 px-2 border border-x-0 border-neutral-100 text-[#979797] '>
                            ₹{Actions.putComma(item.principalPaid)}
                        </td>
                        <td className='text-xs md:text-sm font-semibold leading-[18px] text-center items-center pl-4 px-2 border border-x-0 border-neutral-100 text-[#979797] '>
                            ₹{Actions.putComma(item.interestCharged)}
                        </td>
                        <td className='text-xs md:text-sm font-semibold leading-[18px] text-center items-center pl-4 px-2 border border-x-0 border-neutral-100 text-[#979797] '>
                            ₹{Actions.putComma(item.totalPayment)}
                        </td>
                        <td className='text-xs md:text-sm font-semibold leading-[18px] text-center items-center pl-4 px-2 border border-x-0 border-neutral-100 text-[#979797] '>
                            ₹{Actions.putComma(item.balance)}
                        </td>
                    </tr>)}
        </tbody>
    )
}