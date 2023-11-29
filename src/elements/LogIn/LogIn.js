import React, { Suspense, useRef, useState } from 'react'
import { BlackButton, IconBtn } from '../Button/Button'
import LogInBf from './LogInBf';
import ReactModal from "react-modal"
import { isMobile } from 'react-device-detect';
import axiosInterceptorInstance from '../axiosInterceptorInstance';

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
    },
    overlay: {
        backdropFilter: "blur(2px)",
        backgroundColor: '#20202099',
        zIndex: 20
    }
}


export default function LogIn({ setUserData }) {
    const inputRef = useRef(null)
    const [number, setNumber] = useState('')
    const [modal, setModal] = useState(false)
    const [error, setError] = useState(null)
    const sendOtp = () => {
        if (number.length === 10) {
            axiosInterceptorInstance.get(`api/auth/send-otp?countryCode=91&contactNumber=${number}`)
            setModal(true)
        } else {
            setError('Please enter a valid number')
        }
    }

    return (
        <div className='fixed bottom-0 w-full px-4 py-3 bg-black z-10'>
            {!true ?
                <IconBtn className='select-none w-full py-1.5 rounded-full font-Inter text-base border bg-white border-primary text-black font-semibold shadow' onClick={sendOtp}>
                    Download the app now
                </IconBtn>

                : <>
                    <div className='pl-4 pr-1 w-full h-11 flex items-center bg-[#FFF] rounded-full border border-[#606060] text-sm lg:text-base font-medium'>
                        <input ref={inputRef} className='w-[calc(100%-90px)] caret-primary text-[#747474] font-semibold' type='tel' placeholder='Enter your mobile number'
                            value={number} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" inputMode="tel" onChange={(e) => { setNumber(e.target.value) }} />
                        <BlackButton className='whitespace-nowrap px-3 lg:px-6 h-9 ml-auto text-sm font-semibold' text='Get started' onClick={sendOtp} />
                    </div>

                    <ReactModal
                        isOpen={modal}
                        ariaHideApp={false}
                        shouldFocusAfterRender={false}
                        onRequestClose={() => setModal(false)}
                        style={customStyles}
                    >
                        <Suspense fallback={<div className='bg-white h-64' />}>
                            <LogInBf setUserData={setUserData} setModal={setModal} number={number} inputRef={inputRef} sendOtp={sendOtp} />
                        </Suspense>
                    </ReactModal>
                </>}
        </div>
    )
}
