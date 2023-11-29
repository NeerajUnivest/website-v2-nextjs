
import { Suspense, useState } from 'react'
// Using an ES6 transpiler like Babel
import Slider from 'react-rangeslider'

// To include the default styles
import 'react-rangeslider/lib/index.css'

import HighChartTest from './HighChartTest'
import Image from 'next/image'
import usersIcon from '@/assets/icons/users_icon.png'
import loanBf from '@/assets/loanBf.png'
import ReactModal from "react-modal"
import { isMobile } from 'react-device-detect';
import { AiFillInfoCircle } from 'react-icons/ai'
import { IconBtn } from '@/elements/Button/Button'
import axiosInterceptorInstance from '@/elements/axiosInterceptorInstance'


const customStyles = {
    content: {
        top: 'auto',
        left: isMobile ? '0' : '50%',
        right: isMobile ? '0' : 'auto',
        bottom: isMobile ? '0' : '50%',
        transform: isMobile ? '' : 'translate(-50%, 50%)',
        width: isMobile ? '100%' : '780px',
        height: isMobile ? 'auto' : '404px',
        backgroundColor: '#fff',
        borderRadius: isMobile ? '12px 12px 1px 1px' : '20px',
        borderColor: 'transparent',
        background: `url(${loanBf.src})`,
        backgroundSize: '80px 80px',
        backgroundPosition: 'top right',
        backgroundColor: '#F9FAFF',
        backgroundRepeat: 'no-repeat'
    },
    overlay: {
        backdropFilter: "blur(2px)",
        backgroundColor: '#20202099',
        zIndex: 20
    }
}


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
    const [modal, setModal] = useState(false)

    return (
        <>
            <section style={{ background: 'linear-gradient(180deg, #FFF 0%, #E3EBFF 100%)' }} className="flex flex-col gap-8 py-6">
                <div className=" mx-3 flex flex-col items-start gap-4 m-auto">
                    <p className="text-[color:var(--neutral-900,#202020)] text-xl not-italic font-bold leading-8">Create wealth</p>
                    <p className=" text-[color:var(--neutral-700,#606060)] text-center text-xs not-italic font-medium leading-5">Lorem ipsum wdhiuh jsoqhi hdiwebib shihiwxh qzsbixib xiwbxiub hsihsixwhd diwehixil xwibciwbcwic xjlqjxhcxie</p>
                </div>
                <div className=" w-full bg-[#F6F8FF] flex flex-col items-center gap-4 p-4 rounded-xl m-auto ">
                    <div className=" w-full bg-white flex justify-between items-center border border-[color:var(--gradient-1,#61B2F3)] px-4 py-3 rounded-xl border-solid">
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

                        <div className='flex flex-col items-start gap-3 rounded-xl'>
                            <p className='text-[color:var(--neutral-900,#202020)] text-sm not-italic font-semibold leading-6'>If your friend invests in</p>
                            <div className='flex items-start gap-2 self-stretch whitespace-nowrap'>
                                <button onClick={() => setValue({ ...value, period: 0 })} className={value.period === 0 ? 'flex justify-center items-center gap-2.5 flex-[1_0_0] rounded px-2 py-1 bg-black text-white text-xs not-italic font-bold leading-5 ' : ' bg-white flex justify-center items-center gap-2.5 flex-[1_0_0] rounded border border-[color:var(--neutral-700,#606060)] px-2 py-1 border-solid text-[color:var(--neutral-700,#606060)] text-xs not-italic font-medium leading-5 '}>3 mon</button>
                                <button onClick={() => setValue({ ...value, period: 1 })} className={value.period === 1 ? 'flex justify-center items-center gap-2.5 flex-[1_0_0] rounded px-2 py-1 bg-black text-white text-xs not-italic font-bold leading-5 ' : ' bg-white flex justify-center items-center gap-2.5 flex-[1_0_0] rounded border border-[color:var(--neutral-700,#606060)] px-2 py-1 border-solid text-[color:var(--neutral-700,#606060)] text-xs not-italic font-medium leading-5 '}>6 mon</button>
                                <button onClick={() => setValue({ ...value, period: 2 })} className={value.period === 2 ? 'flex justify-center items-center gap-2.5 flex-[1_0_0] rounded px-2 py-1 bg-black text-white text-xs not-italic font-bold leading-5 ' : ' bg-white flex justify-center items-center gap-2.5 flex-[1_0_0] rounded border border-[color:var(--neutral-700,#606060)] px-2 py-1 border-solid text-[color:var(--neutral-700,#606060)] text-xs not-italic font-medium leading-5 '}>12 mon</button>
                                <button onClick={() => setValue({ ...value, period: 3 })} className={value.period === 3 ? 'flex justify-center items-center gap-2.5 flex-[1_0_0] rounded px-2 py-1 bg-black text-white text-xs not-italic font-bold leading-5 ' : ' bg-white flex justify-center items-center gap-2.5 flex-[1_0_0] rounded border border-[color:var(--neutral-700,#606060)] px-2 py-1 border-solid text-[color:var(--neutral-700,#606060)] text-xs not-italic font-medium leading-5 '}>No lock-in</button>
                            </div>
                        </div>

                        <div className='flex flex-col items-start gap-3'>
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
                    <LoanBf />
                </Suspense>
            </ReactModal>
        </>
    )
}


export function LoanBf() {
    const [data, setData] = useState({
        name: '',
        contactNumber: '',
        reason: 'Home',
        loanAmount: '> 10 lacs'
    })
    const [error, setError] = useState({
        name: false,
        contactNumber: false,
    })


    const handleSubmit = () => {
        if (data.name?.length > 3) {
            if (data.contactNumber?.length === 10) {
                axiosInterceptorInstance.post(`/resources/users/interested-in-loans`, data)
                    .then(res => console.log(res.data))
            } else {
                setError(pre => ({ ...pre, contactNumber: '10 digit' }))
            }
        } else {
            setError(pre => ({ ...pre, name: '3 se jada' }))
        }
    }


    return (
        <>
            <span className=" text-base font-semibold text-black">
                Fill in details to get in touch
            </span>
            <div className="font-Inter block mt-6 relative">
                <span className="absolute -top-1 left-3 px-1 block text-[10px] leading-[10px] font-semibold text-[#202020] bg-white">
                    Enter your Name</span>
                <input type="text" className={`border px-4 h-11 py-2 w-full rounded-md text-[14px] font-medium text-[#414141] ${error.name ? 'border-[#EB4E2C]' : 'focus:border-[#00439D]'}`} value={data?.name}
                    pattern="[a-z]*"
                    onChange={(e) => {
                        setError(pre => ({ ...pre, name: false }))
                        setData(pre => ({ ...pre, name: e.target.value }))
                    }} />
                {error.name &&
                    <div className='flex items-center ml-1 mt-1 '>
                        <AiFillInfoCircle color='#EB4E2C' className='text-[12px] mr-1' />
                        <div className={`text-[10px] ${error.name ? 'text-[#EB4E2C]' : 'text-[#747474]'}`}>
                            {error.name}
                        </div>
                    </div>}
            </div>
            <div className="font-Inter block mt-6 relative">
                <span className="absolute -top-1 left-3 px-1 block text-[10px] leading-[10px] font-semibold text-[#202020] bg-white">
                    Enter mobile no.</span>
                <input type="text" className={`border px-4 h-11 py-2 w-full rounded-md text-[14px] font-medium text-[#414141] ${error.contactNumber ? 'border-[#EB4E2C]' : 'focus:border-[#00439D]'}`} value={data?.contactNumber}
                    pattern="[0-9]*" inputMode='numeric'
                    onChange={(e) => {
                        setError(pre => ({ ...pre, contactNumber: false }))
                        setData(pre => ({ ...pre, contactNumber: e.target.value }))
                    }} />
                {error.contactNumber &&
                    <div className='flex items-center ml-1 mt-1 '>
                        <AiFillInfoCircle color='#EB4E2C' className='text-[12px] mr-1' />
                        <div className={`text-[10px] ${error.contactNumber ? 'text-[#EB4E2C]' : 'text-[#747474]'}`}>
                            {error.contactNumber}
                        </div>
                    </div>}
            </div>

            <span className="mt-5 px-1 block text-[12px] leading-[20px] font-medium text-[#202020]">
                Select a reason
            </span>
            <div className='flex mt-2 gap-3'>
                {['Home', 'Car/Bike', 'Education', 'Other'].map(ele =>
                    <IconBtn key={ele}
                        onClick={() => setData(pre => ({ ...pre, reason: ele }))}
                        className={`w-full py-1 rounded-full text-[10px] leading-[16px]  ${data.reason === ele ? 'text-white bg-[#0862BC] font-bold' : 'text-[#0862BC] border border-[#0862BC] font-semibold'}`}>
                        {ele}
                    </IconBtn>
                )}
            </div>

            <span className="mt-5 px-1 block text-[12px] leading-[20px] font-medium text-[#202020]">
                Loan amount
            </span>
            <div className='flex mt-2 gap-3'>
                {['<1 lac', '1 - 5 lacs', '5 - 10 lacs', '> 10 lacs'].map(ele =>
                    <IconBtn key={ele}
                        onClick={() => setData(pre => ({ ...pre, loanAmount: ele }))}
                        className={`w-full py-1 rounded-full text-[10px] leading-[16px]  ${data.loanAmount === ele ? 'text-white bg-[#0862BC] font-bold' : 'text-[#0862BC] border border-[#0862BC] font-semibold'}`}>
                        {ele}
                    </IconBtn>
                )}
            </div>

            <IconBtn className='w-full text-sm text-white font-semibold bg-black rounded-lg py-2.5 mt-6' onClick={handleSubmit} >
                Submit
            </IconBtn>
        </>
    )
}
