
import { useState } from 'react'
// Using an ES6 transpiler like Babel
import Slider from 'react-rangeslider'

// To include the default styles
import 'react-rangeslider/lib/index.css'




const periodLabels = {
    '1': 12,
    '2': 24,
    '3': 36,
    '4': 48,
    '5': 60,
}
const amountLabels = {
    '1': '25K',
    '2': '50K',
    '3': '1L',
    '4': '5L',
    '5': '10L',
}
const amountToRupee = {
    '1': 25000,
    '2': 50000,
    '3': 100000,
    '4': 500000,
    '5': 1000000,
}

// const formatAmount = value => value < 100000 ? (value / 1000 + 'K') : (value / 100000 + 'L')
const formatAmount = value => amountLabels[value]
const formatPeriod = value => periodLabels[value]
const CI = (amount, rate, period) => amount * Math.pow(1 + (rate / 100), (formatPeriod(period) / 12))

export default function EarnExtraSection() {
    const [value, setValue] = useState({ amount: 3, period: 1, rate: 6.5 })

    return (
        <section className=' bg-gradient-to-b from-[#d3cce301] to-[#d3cce3a4] py-[72px] font-Inter'>
            <div className='max-w-screen-xl mx-auto px-4 lg:px-8'>
                <p className='ml-4 lg:ml-0 mb-3 lg:mb-10 text-base lg:text-4xl text-black font-semibold lg:font-extrabold'>
                    Multiply your wealth
                </p>
                <div className='font-Inter mx-0 lg:mx-auto lg:w-[75%] py-2 px-3 lg:py-5 lg:px-10 flex justify-between w-auto rounded-lg lg:rounded-2xl border-2 lg:border-4 border-[#A192C3]'>
                    <div>
                        <p className='text-xs lg:text-xl text-black'>
                            Fix term @12%*
                        </p>
                        <p className='mt-1 lg:mt-5 font-semibold text-sm lg:text-3xl '>
                            ₹{CI(amountToRupee?.[value.amount], 12, value.period)?.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                        </p>
                    </div>
                    <span className='font-medium text-base lg:text-4xl text-black place-self-center'>
                        -
                    </span>
                    <div>
                        <p className='text-xs lg:text-xl text-black'>
                            Bank FD @6%
                        </p>
                        <p className='mt-1 lg:mt-5 font-semibold text-sm lg:text-3xl '>
                            ₹{CI(amountToRupee?.[value.amount], 6, value.period)?.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                        </p>
                    </div>
                    <span className='font-medium text-base lg:text-4xl text-black place-self-center'>
                        =
                    </span>
                    <div>
                        <p className='text-xs lg:text-xl text-black'>
                            Extra Interest
                        </p>
                        <p className='mt-1 lg:mt-5 font-extrabold text-sm lg:text-3xl text-[#26A649]'>
                            ₹{(CI(amountToRupee?.[value.amount], 12, value.period) - CI(amountToRupee?.[value.amount], 6, value.period))?.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                        </p>
                    </div>
                </div>
                <div className='mt-2 text-center text-[10px] lg:text-lg font-semibold leading-[20px] text-black'>
                    *Calculated with “12 month” plan with interest up to 12% p.a.
                </div>
                <div className='mt-6 flex justify-between font-Inter'>
                    <div className='text-base lg:text-2xl font-medium text-black'>
                        Invested amount
                    </div>
                    <div className='text-base lg:text-2xl font-bold text-black'>
                        ₹{amountToRupee?.[value.amount]?.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                    </div>
                </div>
                <div className='my-7 lg:my-14'>
                    <Slider
                        step={1}
                        tooltip={false}
                        min={1}
                        max={5}
                        value={value.amount}
                        labels={amountLabels}
                        format={formatAmount}
                        onChange={(v) => setValue({ ...value, amount: v })}
                    />
                </div>
                <hr className='w-full mt-20 mb-6 lg:mt-28 lg:mb-10 bg-[#BCBCBC] lg:h-[1px]' />
                <div className='flex justify-between font-Inter'>
                    <div className='text-base lg:text-2xl font-medium text-black'>
                        Plan duration
                    </div>
                    <div className='text-base lg:text-2xl font-bold text-black'>
                        {formatPeriod(value.period) + ' months'}
                    </div>
                </div>
                <div className='my-7 lg:my-14'>
                    <Slider
                        step={1}
                        tooltip={false}
                        min={1}
                        max={5}
                        value={value.period}
                        labels={periodLabels}
                        format={formatPeriod}
                        onChange={(v) => setValue({ ...value, period: v })}
                    />
                </div>
            </div>
        </section>
    )
}
