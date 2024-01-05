import { Suspense, useContext, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { AiFillEdit, AiFillInfoCircle } from "react-icons/ai";
import { BlackButton } from "./Button/Button";
import { Mixpanel } from "./Mixpanel";
import axiosInterceptorInstance from "./axiosInterceptorInstance";
import { UserDetailProvider } from "@/contexts/UserDetailContext";
import ReactModal from "react-modal"
import CustomCountDown from "./CustomCountDown";
import Image from "next/image";
import OtpInput from "react18-input-otp";
import { isMobile } from 'react-device-detect';
import Link from "next/link";
import app_download_qr from '../assets/images/app_download_qr.png';
import loader from '../assets/icons/loader.gif';

import app_store from '../assets/images/app_store.png'
import google_pay from '../assets/images/google_pay.png'
import Actions from "./Actions";
import { popUp } from "./PopUp/PopUp";


const customStyles = {
    content: {
        top: 'auto',
        left: isMobile ? '0' : '50%',
        right: isMobile ? '0' : 'auto',
        bottom: isMobile ? '0' : '50%',
        transform: isMobile ? '' : 'translate(-50%, 50%)',
        width: isMobile ? '100%' : '780px',
        height: 'auto',
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
export default function HeroSearchBox({ isDark = false, type }) {
    const userDetail = useContext(UserDetailProvider)
    const [otp, setOtp] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [btnClicked, setDtnClicked] = useState(false)
    const [showCountDown, setShowCountDown] = useState(true);
    const [number, setNumber] = useState('')
    const [error, setError] = useState(null)
    const [modal, setModal] = useState(false)
    const submit = () => {
        // if (userDetail?.userData?.authToken) {
        popUp.open()
        // } else {
        //     var IndNum = /^[0]?[6789]\d{9}$/;
        //     if (number.length === 10 && IndNum.test(number)) {
        //         axiosInterceptorInstance.get(`api/auth/send-otp?type=web&countryCode=91&contactNumber=${number}`)
        //         setModal(true)
        //         Mixpanel.track('lead_submitted', {
        //             'cta_text': userDetail?.btn?.beforeLogin,
        //             'page': userDetail?.btn?.page,
        //             'phone_filled': true,
        //             'widget': 'bottom_sticky'
        //         })
        //         Mixpanel.pageView({
        //             'page': 'web_otp_page'
        //         })
        //     } else if (number.length === 0) {
        //         setError('Mobile number is required')
        //     } else {
        //         setError('Please enter a valid mobile number')
        //     }
        // }
    }
    const handleResend = () => {
        submit()
        setDisabled(true)
        setError(false)
        setShowCountDown(true)
        Mixpanel.track('cta_clicked', {
            'page': userDetail?.btn?.page,
            'cta_text': 'resend'
        })
    }
    const handleVerify = () => {
        setDtnClicked(true)
        axiosInterceptorInstance.post(`api/auth/verify-otp`, {
            'contactNumber': number,
            'countryCode': 91,
            'otp': otp,
            'referralCode': null,
            'logoutAllDevices': false,
            'userInterest': 'web'
        }).then(res => {
            if (res.data?.data?.authToken) {
                Mixpanel.identify(`${res.data?.data?.id}`,
                    {
                        "email": `${res.data?.data?.email ?? ""}`,
                        "name": `${res.data?.data?.firstName ?? ""}`,
                        "contact": `${res.data?.data?.contactNumber ?? ""}`,
                        "subscriptionState": `${res.data?.data?.subscriptionState ?? ""}`
                    })
                // setModal(false)
                Actions.setCookie("auth_token", res.data?.data?.authToken, 1)
                axiosInterceptorInstance.get(`resources/users/user-info-v2`)
                    .then(ress => {
                        let proPlanStartAt = Math.min(...ress.data?.data?.proSubscriptions?.map(ele => ele?.perMonthPrice))
                        let proPlusPlanStartAt = Math.min(...ress.data?.data?.proPlusSubscriptions?.map(ele => ele?.perMonthPrice))

                        userDetail?.setUserData({
                            ...res.data?.data,
                            proPlanStartAt,
                            proPlusPlanStartAt,
                            subscriptionState: ress.data?.data?.subscriptionState,
                            expiryDate: ress.data?.data?.expiryDate
                        })
                        Actions.setCookie("user_details", JSON.stringify({
                            ...res.data?.data,
                            proPlanStartAt,
                            proPlusPlanStartAt,
                            subscriptionState: ress.data?.data?.subscriptionState,
                            expiryDate: ress.data?.data?.expiryDate
                        }), 1)
                        setModal(false)
                    })
            } else {
                setError(true)
            }
        }).catch(e => { setError(true) })
            .finally(f => setDtnClicked(false))

        Mixpanel.track('cta_clicked', {
            'page': userDetail?.btn?.page,
            'cta_text': 'verify'
        })
    }
    return (<>
        <div className="mx-4 lg:mx-0">
            <p className={`mt-10 lg:mt-14 mb-1 mx-1 text-sm lg:text-base font-medium ${isDark ? 'text-white' : 'text-[#414141]'}`}>
                Connect with wealth advisor today
            </p>
            <div className='w-full sm:w-[460px] h-10 lg:h-14 flex items-center bg-[#FFF] rounded-full border border-[#606060] text-xs lg:text-base font-medium'>
                {/* {!userDetail?.userData?.authToken &&
                    <>
                        <BsTelephone className='h-4 lg:h-14 ml-4 lg:ml-6' color="#747474" size={24} />
                        <input className='w-[calc(100%-90px)] caret-primary ml-2.5 lg:ml-4 text-[#747474]' type='text' placeholder='Enter your mobile number'
                            value={number} pattern="[0-9]*" inputMode="numeric" onChange={(e) => {
                                var numbers = /^[0-9]+$/;
                                if (e.target.value.match(numbers) || e.target.value === '') {
                                    setError(null)
                                } else {
                                    setError('Please enter a valid number')
                                }
                                setNumber(e.target.value)
                            }} />
                    </>} */}
                <BlackButton className='whitespace-nowrap px-3 lg:px-6 h-full ml-auto w-full' text={userDetail?.userData?.authToken ? userDetail?.btn?.afterLogin : userDetail?.btn?.beforeLogin} onClick={submit} />
            </div>
            {error &&
                <div className='flex items-center ml-2 mt-1 '>
                    <AiFillInfoCircle color='#EB4E2C' className='text-[12px] mr-1' />
                    <div className={`text-[10px] ${error ? 'text-[#EB4E2C]' : 'text-[#747474]'}`}>
                        {error}
                    </div>
                </div>}
        </div>
        <ReactModal
            isOpen={modal}
            ariaHideApp={false}
            shouldFocusAfterRender={false}
            onRequestClose={() => setModal(false)}
            style={customStyles}
        >
            <Suspense fallback={<div className='bg-white h-64' />}>
                <div className="flex h-full items-center">
                    <div className='w-9/12 mx-1 rounded-t-2xl font-Inter'>
                        <div className='flex justify-center items-center'>
                            <div className='text-xl font-medium text-[#202020] text-center'>
                                +91-{number}
                            </div>

                            <span className='text-primary text-sm ml-3 font-semibold flex items-center'
                                onClick={() => {
                                    setModal(false);
                                }} >Edit
                                <AiFillEdit color='#0862BC' className='text-base ml-1' />
                            </span>
                        </div>
                        <div className='text-sm font-semibold text-[#8A8A8A] text-center mt-1'>
                            OTP has been sent to the shared number
                        </div>
                        <div className='text-base font-bold text-black text-center mt-6'>
                            Enter OTP
                        </div>
                        <OtpInput
                            shouldAutoFocus={true}
                            containerStyle={{ justifyContent: 'space-between', padding: '16px 24px' }}
                            inputStyle={{ border: '1.5px solid #202020', width: '64px', height: '44px', borderRadius: '8px', fontSize: '20px', fontWeight: 500 }}
                            isInputNum={true}
                            value={otp}
                            onChange={e => { setOtp(e); setError(false); }}
                            numInputs={6}
                            hasErrored={error}
                            errorStyle={{ border: '1px solid #EB4E2C' }} />
                        <div className='flex justify-start items-center mt-[6px] px-6'>
                            <AiFillInfoCircle color={error ? '#EB4E2C' : '#747474'} className='text-[12px] mr-1' />
                            <div className={`${error ? 'text-[#EB4E2C]' : 'text-[#202020]'} text-[10px] leading-[16px] font-medium`}>
                                {error ? 'Please enter correct OTP.' : 'This is required'}
                            </div>
                        </div>
                        <div className='flex flex-row justify-between px-6'>
                            <div className="basis-1/2 flex items-center justify-start">
                                <button disabled={disabled} type="button" className='whitespace-nowrap rounded-md py-3 text-[12px] leading-[20px] text-[#00439D] disabled:text-[#BCBCBC] outline-none font-semibold'
                                    onClick={handleResend}>
                                    Resend OTP
                                </button>
                                {showCountDown && <CustomCountDown sec={30} onComplete={() => { setDisabled(false); setShowCountDown(false) }} />}
                            </div>
                            <div className="basis-1/2 text-left">
                                <button
                                    id={userDetail?.btn?.page}
                                    disabled={(otp.length !== 6) || btnClicked} type="button" className='rounded-md w-full py-3 bg-[#202020] disabled:bg-[#BCBCBC] text-[#FFFFFF] text-[14px] leading-[24px] outline-none font-semibold'
                                    onClick={handleVerify}>
                                    {btnClicked ? <Image src={loader} alt='icon' className='h-6 object-contain mx-auto' /> : 'Verify OTP'}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/12 px-3">
                        <ul className="space-y-3  text-xs lg:text-sm">
                            <li>
                                <Image src={app_download_qr} className='w-full p-2 rounded bg-white' alt="download now qr" />
                                <p className='text-xs mt-1 mb-3 text-black pl-2'>
                                    Scan to Download
                                </p>
                            </li>

                            <li>
                                <Link href="https://apps.apple.com/us/app/univest-empowering-wealth/id6443753518" rel="noreferrer" target="_blank" className="transition hover:opacity-75">
                                    <Image src={app_store} width={114} height={24} className="w-full object-contain" alt='Google Play' />
                                </Link>
                            </li>

                            <li>
                                <Link href="https://play.google.com/store/apps/details?id=com.univest.capp" rel="noreferrer" target="_blank" className="transition hover:opacity-75">
                                    <Image src={google_pay} width={114} height={24} className="w-full object-contain" alt='Google Play' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Suspense>
        </ReactModal>
    </>)
}
