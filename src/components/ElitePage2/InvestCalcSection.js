
import { Suspense, useEffect, useState } from 'react'
// Using an ES6 transpiler like Babel
import Slider from 'react-rangeslider'

// To include the default styles
import 'react-rangeslider/lib/index.css'

import HighChartTest from './HighChartTest'
import Image from 'next/image'
import usersIcon from '@/assets/icons/users_icon.png'
import ReactModal from "react-modal"
import { isMobile } from 'react-device-detect';
import { AiFillInfoCircle } from 'react-icons/ai'
import { BlackButton, IconBtn } from '@/elements/Button/Button'
import axiosInterceptorInstance from '@/elements/axiosInterceptorInstance'
import { LoanBf } from './LoanBf'
import Actions from '@/elements/Actions'


const customStyles = {
    content: {
        top: 'auto',
        left: '0px',
        right: '0px',
        bottom: '0px',
        width: '100%',
        height: 'auto',
        backgroundColor: '#fff',
        borderRadius: isMobile ? '12px 12px 1px 1px' : '20px',
        borderColor: 'transparent',
        backgroundSize: '80px 80px',
        padding: '0px',
    },
    overlay: {
        height: '100vh',
        backdropFilter: "blur(2px)",
        backgroundColor: '#20202099',
        zIndex: 20
    }
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
const CI = (amount, rate, period, times) => amount * (Math.pow(1 + (rate / (times * 100)), (times * period)))

export default function InvestCalcSection() {
    const [value, setValue] = useState({ amount: 3, rate: 12, times: 1 })
    const [modal, setModal] = useState(false)



    useEffect(() => {
        let main_container = document.getElementsByTagName('html')?.[0];
        if (modal) {
            main_container.style.overflow = 'hidden'
        } else {
            main_container.style.overflow = 'unset'
        }
    }, [modal])

    return (
        <>
            <section style={{ background: 'linear-gradient(180deg, #FFF 0%, #E3EBFF 100%)' }} className="font-Inter flex flex-col gap-8 py-6 px-4">
                <div className="flex flex-col items-start gap-4 m-auto">
                    <p className="text-black text-xl not-italic font-bold leading-8">Create wealth</p>
                    <p className=" text-[#606060] text-center text-xs not-italic font-medium leading-5">
                        Maximize your earnings by diversifying your investments with minimal risk.
                    </p>
                </div>
                <div className=" w-full bg-[#F6F8FF] flex flex-col items-center gap-4 py-4 px-3 rounded-xl m-auto ">
                    <div className=" w-full bg-white flex justify-between items-center border border-[color:var(--gradient-1,#61B2F3)] px-4 py-3 rounded-xl border-solid">
                        <p className="text-black text-base not-italic font-bold leading-7">Interest earned</p>
                        <p className="text-[color:var(--primary-800,#0862BC)] text-2xl not-italic font-extrabold leading-10">₹{CI(amountToRupee?.[value.amount], value.rate, 1, value.times)?.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
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
                        <div className='mb-12 lg:my-14'>
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

                        <div className='flex flex-col items-start gap-3 rounded-xl'>
                            <p className='text-black text-sm not-italic font-semibold leading-6'>If you invest in</p>
                            <div className='flex items-start gap-2 self-stretch whitespace-nowrap'>
                                <button onClick={() => setValue({ ...value, rate: 10, times: 4 })} className={value.rate === 10 ? 'flex justify-center items-center gap-2.5 flex-[1_0_0] rounded px-2 py-1 bg-black text-white text-xs not-italic font-bold leading-5 ' : ' bg-white flex justify-center items-center gap-2.5 flex-[1_0_0] rounded border border-[color:var(--neutral-700,#606060)] px-2 py-1 border-solid text-[color:var(--neutral-700,#606060)] text-xs not-italic font-medium leading-5 '}>3 mon</button>
                                <button onClick={() => setValue({ ...value, rate: 11, times: 2 })} className={value.rate === 11 ? 'flex justify-center items-center gap-2.5 flex-[1_0_0] rounded px-2 py-1 bg-black text-white text-xs not-italic font-bold leading-5 ' : ' bg-white flex justify-center items-center gap-2.5 flex-[1_0_0] rounded border border-[color:var(--neutral-700,#606060)] px-2 py-1 border-solid text-[color:var(--neutral-700,#606060)] text-xs not-italic font-medium leading-5 '}>6 mon</button>
                                <button onClick={() => setValue({ ...value, rate: 12, times: 1 })} className={value.rate === 12 ? 'flex justify-center items-center gap-2.5 flex-[1_0_0] rounded px-2 py-1 bg-black text-white text-xs not-italic font-bold leading-5 ' : ' bg-white flex justify-center items-center gap-2.5 flex-[1_0_0] rounded border border-[color:var(--neutral-700,#606060)] px-2 py-1 border-solid text-[color:var(--neutral-700,#606060)] text-xs not-italic font-medium leading-5 '}>12 mon</button>
                                <button onClick={() => setValue({ ...value, rate: 8.25, times: 4 })} className={value.rate === 8.25 ? 'flex justify-center items-center gap-2.5 flex-[1_0_0] rounded px-2 py-1 bg-black text-white text-xs not-italic font-bold leading-5 ' : ' bg-white flex justify-center items-center gap-2.5 flex-[1_0_0] rounded border border-[color:var(--neutral-700,#606060)] px-2 py-1 border-solid text-[color:var(--neutral-700,#606060)] text-xs not-italic font-medium leading-5 '}>No lock-in</button>
                            </div>
                        </div>

                        <div className=' mt-4 flex flex-col items-start gap-3'>
                            <p className='text-black text-sm not-italic font-semibold leading-6'>Growth in next 5 years</p>
                            <div className='flex items-start gap-3 self-stretch'>
                                <div className='flex items-center gap-4 flex-[1_0_0] pr-0'>
                                    <div className='w-1.5 h-12 rounded-3xl bg-[#1F75C5]'></div>
                                    <div className='flex w-[84px] flex-col items-start gap-1'>
                                        <p className='text-black text-sm not-italic font-semibold leading-6 whitespace-nowrap'>Univest Elite</p>
                                        <p className='self-stretch text-[color:var(--primary-900,#00439D)] text-sm not-italic font-bold leading-6'>{Actions.putComma(CI(amountToRupee?.[value.amount], value.rate, 5, value.times), 0)}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 flex-[1_0_0] pr-0'>
                                    <div className='w-1.5 h-12 rounded-3xl bg-[#61B2F3]'></div>
                                    <div className='flex w-[84px] flex-col items-start gap-1'>
                                        <p className='text-black text-sm not-italic font-semibold leading-6'>Others FDs</p>
                                        <p className='self-stretch text-[color:var(--primary-900,#00439D)] text-sm not-italic font-bold leading-6'>{Actions.putComma(CI(amountToRupee?.[value.amount], 6, 5, 1), 0)}</p>
                                    </div>
                                </div>
                            </div>
                            <HighChartTest uniwiseData={[1, 2, 3, 4, 5]?.map(ele => ([ele, CI(amountToRupee?.[value.amount], value.rate, ele, value.times)]))} pdData={[1, 2, 3, 4, 5]?.map(ele => ([ele, CI(amountToRupee?.[value.amount], 6, ele, value.times)]))} />

                        </div>

                    </div>

                </div>
                <div className=' bg-[#FFF] flex justify-center items-start gap-2 self-stretch px-2.5 py-1 rounded-lg'>
                    <Image className='w-5' src={usersIcon} alt='demo' />
                    <p className='whitespace-nowrap text-xs not-italic font-normal leading-6'><span className='text-black font-bold'>2.5 lac+</span> users have invested <span className='text-[#0862BC] font-bold'>4,900+ crores</span></p>
                </div>
            </section>
            <p className='text-black text-center text-base not-italic font-bold leading-7 mt-4'>
                Looking for a loan?
                <span className='text-primary ml-1' onClick={() => setModal(true)}> Click here</span>
            </p>
            <ReactModal
                isOpen={modal}
                ariaHideApp={false}
                shouldFocusAfterRender={false}
                onRequestClose={() => setModal(false)}
                style={customStyles}
            >
                <Suspense fallback={<div className='bg-white h-64' />}>
                    <LoanBf setModal={setModal} />
                </Suspense>
            </ReactModal>
        </>
    )
}

