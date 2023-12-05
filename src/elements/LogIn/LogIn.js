import React, { Suspense, useEffect, useRef, useState } from 'react'
import { BlackButton, IconBtn } from '../Button/Button'
import LogInBf from './LogInBf';
import ReactModal from "react-modal"
import { isMobile } from 'react-device-detect';
import axiosInterceptorInstance from '../axiosInterceptorInstance';
import ActivePlanSection from '@/components/ProPage2/ActivePlanSection';
import RequestSubmittedSection from '@/components/ElitePage2/RequestSubmittedSection';

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


export default function LogIn({ userData, setUserData, btn }) {
    const inputRef = useRef(null)
    const [number, setNumber] = useState('')
    const [modal, setModal] = useState(false)
    const [error, setError] = useState(null)
    const sendOtp = () => {
        var IndNum = /^[0]?[789]\d{9}$/;
        if (number.length === 10 && IndNum.test(number)) {
            axiosInterceptorInstance.get(`api/auth/send-otp?type=web&countryCode=91&contactNumber=${number}`)
            setModal(true)
        } else {
            setError('Please enter a valid mobile number')
        }
    }

    useEffect(() => {
        let main_container = document.getElementsByTagName('html')?.[0];
        if (modal) {
            main_container.style.overflow = 'hidden'
        } else {
            main_container.style.overflow = 'unset'
        }
    }, [modal])

    return (
        <div className='fixed bottom-0 w-full px-4 py-3 bg-black z-[2]'>
            {userData?.authToken && !modal ?
                <IconBtn className='select-none w-full py-1.5 rounded-full font-Inter text-base border bg-white border-primary text-black font-semibold shadow'
                    onClick={() => window.open('https://univest.onelink.me/VC6b/investwithunivest', '_blank')}>
                    {btn?.afterLogin}
                </IconBtn>

                : <>
                    <div className={`pl-4 pr-1 w-full h-11 flex items-center bg-[#FFF] rounded-full text-sm lg:text-base font-medium ${error ? 'border-2 border-red-700' : 'border border-[#606060]'}`}>
                        <input ref={inputRef} className='w-[calc(100%-90px)] caret-primary text-[#747474] font-semibold' type='tel' placeholder='Enter your mobile number'
                            value={number} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" inputMode="tel" onChange={(e) => {
                                setNumber(e.target.value)
                                setError(null)
                            }} />
                        <BlackButton className='whitespace-nowrap px-3 lg:px-6 h-9 ml-auto text-sm font-semibold' text={btn?.beforeLogin} onClick={sendOtp} />
                    </div>

                    <ReactModal
                        isOpen={modal}
                        ariaHideApp={false}
                        shouldFocusAfterRender={false}
                        onRequestClose={() => setModal(false)}
                        style={customStyles}
                    >
                        <Suspense fallback={<div className='bg-white h-64' />}>
                            {userData?.authToken ?
                                (btn.isProPage ?
                                    <ActivePlanSection /> :
                                    <RequestSubmittedSection />)
                                : <LogInBf setUserData={setUserData} setModal={setModal} number={number} inputRef={inputRef} sendOtp={sendOtp} />}
                        </Suspense>
                    </ReactModal>
                </>}
        </div>
    )
}
