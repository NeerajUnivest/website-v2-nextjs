
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
import { BlackButton, IconBtn } from '@/elements/Button/Button'
import axiosInterceptorInstance from '@/elements/axiosInterceptorInstance'


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
    const [apply, setApply] = useState(false)



    const handleSubmit = () => {
        if (data.name?.length > 3) {
            if (data.contactNumber?.length === 10) {
                axiosInterceptorInstance.post(`/resources/users/interested-in-loans`, data)
                    .then(res => setApply(true))
            } else {
                setError(pre => ({ ...pre, contactNumber: '10 digit' }))
            }
        } else {
            setError(pre => ({ ...pre, name: '3 se jada' }))
        }
    }

    if (apply) {
        return (
            <section className="flex flex-col items-center gap-4 whitespace-nowrap" >
                <div className='flex justify-center items-center shrink-0 p-4 border-2 border-neutral-500  rounded-full bg-neutral-700'>
                    <Image className='w-10 transform -scale-x-100' src={loanBf} alt='demo' />
                </div>
                <p className='self-stretch text-[color:var(--neutral-900,#202020)] text-center text-base not-italic font-bold leading-7'>Our loan advisor will reach back to you</p>
                <div className=' text-[color:var(--neutral-700,#606060)] text-center text-xs not-italic font-semibold leading-5'>
                    <p>During weekdays, expect a response within 48 hours.</p>
                    <p>On weekend, we’ll call back on next working day.</p>
                </div>
                <p className='text-[color:var(--neutral-800,#414141)] text-center text-[10px] not-italic font-medium leading-4'><span className='text-black font-bold'>Working hours:</span> Monday to Friday, 10:00 AM to 6:30 PM. </p>
                <BlackButton className={'w-full py-2 mx-auto font-bold mt-4 rounded-lg text-sm'} text={'Download the app now'} />
            </section>
        )
    } else {
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
}