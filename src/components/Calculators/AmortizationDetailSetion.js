import React, { useEffect, useState } from 'react'
import Actions from '@/elements/Actions';

const dummyData = [
    {
        month: 'Jan',
        principalPaid: 12345,
        interestCharged: 54321,
        totalPayment: 12345,
        balance: 54321
    },
    {
        month: 'Feb',
        principalPaid: 12345,
        interestCharged: 54321,
        totalPayment: 12345,
        balance: 54321
    },
    {
        month: 'Mar',
        principalPaid: 12345,
        interestCharged: 54321,
        totalPayment: 12345,
        balance: 54321
    }
]

export default function AmortizationDetailSetion({ param1, param2, param3 }) {

    const [amortizationData, setAmortizationData] = useState([]);
    const [filteredAmortizationData, setFilteredAmortizationData] = useState([]);
    const amortizationFormula = ' ( (param2/100) / (12) ) '
    const emiFormula = '(param1*(param2/1200)*(Math.pow(1+(param2/1200),(param3*12))))/((Math.pow(1+(param2/1200),(param3*12)))-1)'
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const [yearFilter, setYearFilter] = useState([]);
    const [selectedYear, setSelectedYear] = useState((new Date().getFullYear()));

    useEffect(() => {
        let currentBalance = param1;
        let temp = [];
        let currentYear = new Date().getFullYear();
        let tempYears = [];
        for (let i = currentYear; i <= currentYear + param3; i++) {
            tempYears.push(i);
        }
        setYearFilter(tempYears);
        let currentMonth = new Date().getMonth() + 2;
        for (let i = 1; i <= param3 * 12; i++) {
            const ic = (currentBalance * eval(amortizationFormula));
            const tp = (eval(emiFormula));
            const p = tp - ic;
            const b = currentBalance - p;
            let currentEmi = {
                year: currentYear,
                month: months[currentMonth - 1],
                principalPaid: p,
                interestCharged: ic,
                totalPayment: tp,
                balance: b
            }
            currentBalance = (currentBalance - p)
            currentYear = (currentMonth == 12 ? currentYear + 1 : currentYear)
            currentMonth++;
            currentMonth = currentMonth > 12 ? 1 : currentMonth;
            temp.push(currentEmi);
        }
        setAmortizationData(temp);
    }, [param1, param2, param3])

    useEffect(() => {
        let temp = [];
        temp = amortizationData.filter(ele => ele.year == selectedYear);
        setFilteredAmortizationData(temp);
    }, [amortizationData, selectedYear])

    useEffect(() => {
        setSelectedYear((new Date().getFullYear()))
    }, [param3])

    return (
        <section className='mx-4 lg:m-0  flex flex-col items-center gap-4  '>
            <div className='w-full flex justify-between items-center self-stretch py-0'>
                <p className='text-[color:var(--Neutral-900,#202020)] text-base not-italic font-bold leading-7'>Amortization details </p>
                <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className=' flex justify-end items-center gap-2 border border-[color:var(--Neutral-900,#202020)] text-xs lg:text-base font-semibold lg:font-bold rounded-lg border-solid pl-3 pr-2 py-1 '>
                    {yearFilter.map((ele, i) => {
                        return <option key={i} value={ele}>{ele}</option>
                    })}
                </select>
            </div>
            <div className='w-full  bg-white rounded-2xl overflow-hidden whitespace-nowrap border'>
                <div className='flex flex-row font-Inter w-full overflow-x-scroll no-scrollbar '>
                    <table className="table w-full border-collapse swiper-no-swiping">
                        <thead>
                            <tr className='h-10 text-center '>
                                <th className='sticky -left-[0px] bg-gradient-to-br from-[#ECF1F3] to-[#F1F4EE] text-[10px] lg:text-sm text-[color:var(--Neutral-900,#202020)] text-center font-bold min-w-[30px] pl-2'>Month</th>
                                <th className='px-2 text-[10px] lg:text-sm text-[color:var(--Neutral-900,#202020)] font-bold border border-x-0 border-neutral-100  min-w-[30px] '>Principal paid</th>
                                <th className='px-2 text-[10px] lg:text-sm text-[color:var(--Neutral-900,#202020)] font-bold border border-x-0 border-neutral-100  min-w-[30px]'>Interest charged</th>
                                <th className='px-2 text-[10px] lg:text-sm text-[color:var(--Neutral-900,#202020)] font-bold border border-x-0 border-neutral-100  min-w-[30px]'>Total payment</th>
                                <th className='px-2 text-[10px] lg:text-sm text-[color:var(--Neutral-900,#202020)] font-bold border border-x-0 border-neutral-100  min-w-[30px]'>Balance</th>
                            </tr>
                        </thead>
                        <AmortizationDetailTable amortizationData={filteredAmortizationData} />
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
                        <td className='pt-2 sticky -left-[0px] text-center font-bold  bg-gradient-to-br from-[#ECF1F3] to-[#F1F4EE] text-[10px] lg:text-xs leading-[18px]  px-2 min-w-[70px] lg:min-w-[100px] border border-neutral-100 cursor-pointer'>
                            {item.month}
                        </td>
                        <td className='text-[10px] lg:text-xs font-semibold leading-[18px] text-center items-center pl-4 px-2 border border-x-0 border-neutral-100 text-[#979797] '>
                            ₹{item.principalPaid > 0 ? Actions.putComma((!isNaN(item.principalPaid)) ? item.principalPaid : 0, 0) : 0}
                        </td>
                        <td className='text-[10px] lg:text-xs  font-semibold leading-[18px] text-center items-center pl-4 px-2 border border-x-0 border-neutral-100 text-[#979797] '>
                            ₹{item.interestCharged > 0 ? Actions.putComma((!isNaN(item.interestCharged)) ? item.interestCharged : 0, 0) : 0}
                        </td>
                        <td className='text-[10px] lg:text-xs  font-semibold leading-[18px] text-center items-center pl-4 px-2 border border-x-0 border-neutral-100 text-[#979797] '>
                            ₹{Actions.putComma((!isNaN(item.totalPayment)) ? item.totalPayment : 0, 0)}
                        </td>
                        <td className='text-[10px] lg:text-xs font-semibold leading-[18px] text-center items-center pl-4 px-2 border border-x-0 border-neutral-100 text-[#979797] '>
                            ₹{item.balance > 0 ? Actions.putComma((!isNaN(item.balance)) ? item.balance : 0, 0) : 0}
                        </td>
                    </tr>)}
        </tbody>
    )
}