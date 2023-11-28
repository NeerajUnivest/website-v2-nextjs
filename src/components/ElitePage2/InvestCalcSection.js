
import { useState } from 'react'
// Using an ES6 transpiler like Babel
import Slider from 'react-rangeslider'

// To include the default styles
import 'react-rangeslider/lib/index.css'

import { HighchartsReact } from 'highcharts-react-official'
import HighChartTest from './HighChartTest'
import Image from 'next/image'
import usersIcon from 'src/assets/icons/users_icon.png'




const periodLabels = {
    '0': 3,
    '1': 6,
    '2': 12,
    '3': 24
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

export default function InvestCalcSection() {
    const [value, setValue] = useState({ amount: 3, period: 1, rate: 6.5 })

    return (
        <>
            <section style={{ background: 'linear-gradient(180deg, #FFF 0%, #E3EBFF 100%)' }} className="flex flex-col gap-8 px-4 py-6">
                <div className="flex flex-col items-start gap-4 m-auto">
                    <p className="text-[color:var(--neutral-900,#202020)] text-xl not-italic font-bold leading-8">Create wealth</p>
                    <p className="w-[328px] text-[color:var(--neutral-700,#606060)] text-center text-xs not-italic font-medium leading-5">Lorem ipsum wdhiuh jsoqhi hdiwebib shihiwxh qzsbixib xiwbxiub hsihsixwhd diwehixil xwibciwbcwic xjlqjxhcxie</p>
                </div>
                <div className=" bg-[#F6F8FF] flex w-[328px] flex-col items-center gap-4 pt-0 pb-4 px-3 rounded-xl m-auto ">
                    <div className="bg-white flex w-[328px] justify-between items-center border border-[color:var(--gradient-1,#61B2F3)] px-4 py-3 rounded-xl border-solid">
                        <p className="text-[color:var(--neutral-900,#202020)] text-base not-italic font-bold leading-7">Interest earned</p>
                        <p className="text-[color:var(--primary-800,#0862BC)] text-2xl not-italic font-extrabold leading-10">₹{(CI(amountToRupee?.[value.amount], 12, value.period) - CI(amountToRupee?.[value.amount], 6, value.period))?.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                    </div>
                    {/* Calc*/}
                    <div className='max-w-screen-xl mx-auto w-full flex flex-col gap-4 '>
                        <div className='mt-6 flex justify-between font-Inter'>
                            <div className='text-base lg:text-2xl font-medium text-black'>
                                Amount invested
                            </div>
                            <div className='text-base lg:text-2xl font-bold text-black'>
                                ₹{amountToRupee?.[value.amount]?.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                            </div>
                        </div>
                        <div className='my-7 mb-20 lg:my-14'>
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

                        <div className='flex w-[304px] flex-col items-start gap-3 rounded-xl'>
                            <p className='text-[color:var(--neutral-900,#202020)] text-sm not-italic font-semibold leading-6'>If your friend invests in</p>
                            <div className='flex items-start gap-2 self-stretch whitespace-nowrap'>
                                <button onClick={() => setValue({ ...value, period: 0 })} className={value.period === 0 ? 'flex justify-center items-center gap-2.5 flex-[1_0_0] rounded px-2 py-1 bg-black text-white text-xs not-italic font-bold leading-5 ' : ' bg-white flex justify-center items-center gap-2.5 flex-[1_0_0] rounded border border-[color:var(--neutral-700,#606060)] px-2 py-1 border-solid text-[color:var(--neutral-700,#606060)] text-xs not-italic font-medium leading-5 '}>3 mon</button>
                                <button onClick={() => setValue({ ...value, period: 1 })} className={value.period === 1 ? 'flex justify-center items-center gap-2.5 flex-[1_0_0] rounded px-2 py-1 bg-black text-white text-xs not-italic font-bold leading-5 ' : ' bg-white flex justify-center items-center gap-2.5 flex-[1_0_0] rounded border border-[color:var(--neutral-700,#606060)] px-2 py-1 border-solid text-[color:var(--neutral-700,#606060)] text-xs not-italic font-medium leading-5 '}>6 mon</button>
                                <button onClick={() => setValue({ ...value, period: 2 })} className={value.period === 2 ? 'flex justify-center items-center gap-2.5 flex-[1_0_0] rounded px-2 py-1 bg-black text-white text-xs not-italic font-bold leading-5 ' : ' bg-white flex justify-center items-center gap-2.5 flex-[1_0_0] rounded border border-[color:var(--neutral-700,#606060)] px-2 py-1 border-solid text-[color:var(--neutral-700,#606060)] text-xs not-italic font-medium leading-5 '}>12 mon</button>
                                <button onClick={() => setValue({ ...value, period: 3 })} className={value.period === 3 ? 'flex justify-center items-center gap-2.5 flex-[1_0_0] rounded px-2 py-1 bg-black text-white text-xs not-italic font-bold leading-5 ' : ' bg-white flex justify-center items-center gap-2.5 flex-[1_0_0] rounded border border-[color:var(--neutral-700,#606060)] px-2 py-1 border-solid text-[color:var(--neutral-700,#606060)] text-xs not-italic font-medium leading-5 '}>No lock-in</button>
                            </div>
                        </div>

                        <div className='flex w-[304px] flex-col items-start gap-3'>
                            <div className='flex items-start gap-3 self-stretch'>
                                <div className='flex items-center gap-4 flex-[1_0_0] pr-0'>
                                    <div className='w-1.5 h-12 rounded-3xl bg-[#1F75C5]'></div>
                                    <div className='flex w-[84px] flex-col items-start gap-1'>
                                        <p className='text-[color:var(--neutral-900,#202020)] text-sm not-italic font-semibold leading-6'>Univest Elite</p>
                                        <p className='self-stretch text-[color:var(--primary-900,#00439D)] text-sm not-italic font-bold leading-6'>₹1.68 Cr</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 flex-[1_0_0] pr-0'>
                                    <div className='w-1.5 h-12 rounded-3xl bg-[#61B2F3]'></div>
                                    <div className='flex w-[84px] flex-col items-start gap-1'>
                                        <p className='text-[color:var(--neutral-900,#202020)] text-sm not-italic font-semibold leading-6'>Univest Elite</p>
                                        <p className='self-stretch text-[color:var(--primary-900,#00439D)] text-sm not-italic font-bold leading-6'>₹1.68 Cr</p>
                                    </div>
                                </div>
                            </div>
                            <HighChartTest />
                            <div className=' bg-[#FFF] flex justify-center items-start gap-2 self-stretch px-2.5 py-1 rounded-lg'>
                                <Image className='w-5' src={usersIcon} alt='demo' />
                                <p className='whitespace-nowrap text-xs not-italic font-normal leading-6'><span className='text-black font-bold'>1,482</span> Univest users have invested <span className='text-[#0862BC] font-bold'>15.6</span><span className='text-[#0862BC]'> crores</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <p className='text-[color:var(--primary-800,#0862BC)] text-center text-base not-italic font-bold leading-7 mt-4'><span className='text-black'>Looking for a loan?</span>  Click here</p>
        </>
    )
}