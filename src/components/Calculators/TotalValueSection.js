import React, { useState } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'


export default function TotalValueSection() {

    const [monthlyInvestmentValue, setMonthlyInvestmentValue] = useState({ amount: 3, rate: 12, times: 1 })
    const [returnRateValue, setReturnRateValue] = useState({ amount: 3, rate: 12, times: 1 })
    const [timePeriodValue, setTimePeriodValue] = useState({ amount: 3, rate: 12, times: 1 })
    const formatAmount = value => amountLabels[value]

    return (
        <section className='w-full flex flex-col gap-4 border border-[color:var(--Neutral-900,#202020)] pt-0 pb-3  rounded-xl border-solid m-auto overflow-hidden '>
            <div className='flex w-full justify-between items-center px-4 py-2 bg-black'>
                <p className='text-[color:var(--Neutral-300,#DFDFDF)] text-xs not-italic font-bold leading-5'>Total value</p>
                <p className='text-[color:var(--Pearl-White,#FFF)] text-base not-italic font-extrabold leading-7'>₹3,23,46,000</p>
            </div>
            <div className='flex flex-col items-center gap-4 w-full px-3 '>
                <div className='flex w-full flex-col justify-center items-center gap-1 border border-[color:var(--Neutral-300,#DFDFDF)] p-3 rounded-xl border-solid'>
                    <div className='flex items-start gap-6 text-[color:var(--Neutral-900,#202020)] text-xs not-italic font-bold leading-5'>
                        <div className='flex items-center gap-2'>
                            <input type='radio' id='SIP' name='type' value='SIP' />
                            <label for='SIP'>SIP</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='radio' id='Lumpsum' name='type' value='Lumpsum' />
                            <label for='Lumpsum'>Lumpsum</label>
                        </div>
                    </div>
                </div>
                <div className='flex w-full flex-col items-start gap-1 border border-[color:var(--Neutral-300,#DFDFDF)] pt-3 pb-2 px-3 rounded-xl border-solid'>
                    <div className='flex justify-between items-center self-stretch'>
                        <p className='text-[color:var(--Neutral-900,#202020)] text-xs not-italic font-bold leading-5'>Monthly investment</p>
                        <div className='flex justify-end items-center gap-0.5 px-2 py-1 rounded-lg bg-[#F5F5F5]' >
                            <p className='text-[color:var(--Neutral-900,#202020)] text-right text-xs not-italic font-semibold leading-5'>₹ 1,00,000</p>
                        </div>
                    </div>
                    <div className='max-w-screen-xl mx-auto w-full flex flex-col gap-4 '>
                        <Slider
                            step={100}
                            tooltip={false}
                            min={1000}
                            max={100000}
                            value={monthlyInvestmentValue.amount}
                            // format={formatAmount}
                            onChange={(v) => setMonthlyInvestmentValue({ ...monthlyInvestmentValue, amount: v })}
                        />
                    </div>
                </div>
                <div className='flex w-full flex-col items-start gap-1 border border-[color:var(--Neutral-300,#DFDFDF)] pt-3 pb-2 px-3 rounded-xl border-solid'>
                    <div className='flex justify-between items-center self-stretch'>
                        <p className='text-[color:var(--Neutral-900,#202020)] text-xs not-italic font-bold leading-5'>Expected return rate (p.a.)</p>
                        <div className='flex justify-end items-center gap-0.5 px-2 py-1 rounded-lg bg-[#F5F5F5]' >
                            <p className='text-[color:var(--Neutral-900,#202020)] text-right text-xs not-italic font-semibold leading-5'>30%</p>
                        </div>
                    </div>
                    <div className='max-w-screen-xl mx-auto w-full flex flex-col gap-4 '>
                        <Slider
                            step={1}
                            tooltip={false}
                            min={1}
                            max={100}
                            value={returnRateValue.amount}
                            // format={formatAmount}
                            onChange={(v) => setReturnRateValue({ ...returnRateValue, amount: v })}
                        />
                    </div>
                </div>
                <div className='flex w-full flex-col items-start gap-1 border border-[color:var(--Neutral-300,#DFDFDF)] pt-3 pb-2 px-3 rounded-xl border-solid'>
                    <div className='flex justify-between items-center self-stretch'>
                        <p className='text-[color:var(--Neutral-900,#202020)] text-xs not-italic font-bold leading-5'>Time period</p>
                        <div className='flex justify-end items-center gap-0.5 px-2 py-1 rounded-lg bg-[#F5F5F5]' >
                            <p className='text-[color:var(--Neutral-900,#202020)] text-right text-xs not-italic font-semibold leading-5'>10 yr(s)</p>
                        </div>
                    </div>
                    <div className='max-w-screen-xl mx-auto w-full flex flex-col gap-4 '>
                        <Slider
                            step={1}
                            tooltip={false}
                            min={1}
                            max={15}
                            value={timePeriodValue.amount}
                            // format={formatAmount}
                            onChange={(v) => setTimePeriodValue({ ...timePeriodValue, amount: v })}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
