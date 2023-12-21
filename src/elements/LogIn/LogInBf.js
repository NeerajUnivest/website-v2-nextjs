import React, { useEffect, useState } from 'react'
import { BlackButton } from '../Button/Button';

import CustomCountDown from '../CustomCountDown';
import { AiFillEdit, AiFillInfoCircle } from 'react-icons/ai';
import loader from '../../assets/icons/loader.gif';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import axiosInterceptorInstance from '../axiosInterceptorInstance';
import Actions from '../Actions';
import axios from 'axios';
import { FaceBook } from '../FaceBook';
import { Mixpanel } from '../Mixpanel';

const OtpInput = dynamic(
    () => import('react18-input-otp'),
    { ssr: false }
)


export default function LogInBf({ setModal, number, inputRef, sendOtp, userData, setUserData, isProPage }) {
    const [otp, setOtp] = useState('')
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [btnClicked, setDtnClicked] = useState(false)
    const [showCountDown, setShowCountDown] = useState(true);
    const handleResend = () => {
        sendOtp()
        setDisabled(true)
        setError(false)
        setShowCountDown(true)
    }
    const handleVerify = () => {
        setDtnClicked(true)
        axiosInterceptorInstance.post(`api/auth/verify-otp`, {
            'contactNumber': number,
            'countryCode': 91,
            'otp': otp,
            'referralCode': null,
            'logoutAllDevices': false,
            'userInterest': isProPage ? 'web-pro' : 'web-elite'
        }).then(res => {
            if (res.data?.data?.authToken) {
                Mixpanel.identify(`${res.data?.data?.id}`,
                    {
                        "email": `${res.data?.data?.email ?? ""}`,
                        "name": `${res.data?.data?.firstName ?? ""}`,
                        "contact": `${res.data?.data?.contactNumber ?? ""}`
                    })
                // setModal(false)
                Actions.setCookie("auth_token", res.data?.data?.authToken, 1)
                getUserInfo(res.data?.data)
            } else {
                setError(true)
            }
        }).catch(e => { setError(true) })
            .finally(f => setDtnClicked(false))
    }

    const setUserInfo = (data) => {
        setUserData(data);
        Actions.setCookie("user_details", JSON.stringify(data), 1)
    }

    const getUserInfo = (data) => {
        axiosInterceptorInstance.get(`resources/users/user-info-v2`)
            .then(ress => {
                let proPlanStartAt = Math.min(...ress.data?.data?.proSubscriptions?.map(ele => ele?.perMonthPrice))
                let proPlusPlanStartAt = Math.min(...ress.data?.data?.proPlusSubscriptions?.map(ele => ele?.perMonthPrice))
                if (ress.data?.data?.subscriptionState === 'FREE' && !isProPage) {
                    FaceBook.track('ViewContent')
                    axiosInterceptorInstance.post(`resources/faircent`,
                        {
                            leadType: 'elite',
                            expectedReturn: 8.25,
                            planName: `No lock-in`,
                            minAmount: 25000,
                            investmentDuration: 0
                        })
                }
                if (ress.data?.data?.subscriptionState === 'FREE' && isProPage) {
                    axios.put(`${process.env.apiBaseURL}/resources/user-subscription/activate-trial-v2`, {}
                        , {
                            headers: {
                                'Authorization': `Bearer ${Actions.getCookie("auth_token")}`,
                                'device-name': Actions.getDeviceName(),
                                'device-id': Actions.generateUniqueDeviceID()
                            }
                        })
                        .then(res => {
                            if (res.data?.data) {
                                getUserInfo(data)
                                FaceBook.track('StartTrial')
                            } else {
                                Mixpanel.track('unable_to_start_trial')
                                setUserInfo({
                                    ...data,
                                    proPlanStartAt,
                                    proPlusPlanStartAt,
                                    notAbleStartTrial: true,
                                    subscriptionState: 'TRIAL_PRO_PLUS_EXPIRED',
                                })
                            }
                        }).catch(err => {
                            setUserInfo({
                                ...data,
                                proPlanStartAt,
                                proPlusPlanStartAt,
                                notAbleStartTrial: true,
                                subscriptionState: 'TRIAL_PRO_PLUS_EXPIRED',
                            })
                        })
                } else {
                    setUserInfo({
                        ...data,
                        proPlanStartAt,
                        proPlusPlanStartAt,
                        subscriptionState: ress.data?.data?.subscriptionState,
                        expiryDate: ress.data?.data?.expiryDate
                    })
                }

            })
    }

    useEffect(() => {
        if ("OTPCredential" in window) {
            const ac = new AbortController();
            navigator.credentials
                .get({
                    otp: { transport: ["sms"] },
                    signal: ac.signal
                })
                .then((otp) => {
                    setOtp(otp?.code);
                    ac.abort();
                })
                .catch((err) => {
                    ac.abort();
                    console.log(err);
                });
        }
    }, [])

    return (
        <div className='mx-1 rounded-t-2xl font-Inter'>
            <div className='flex justify-center items-center'>
                <div className='text-xl font-medium text-[#202020] text-center'>
                    +91-{number}
                </div>

                <span className='text-primary text-sm ml-3 font-semibold flex items-center'
                    onClick={() => {
                        setModal(false);
                        inputRef.current?.focus()
                    }} >Edit
                    <AiFillEdit color='#0862BC' className='text-base ml-1' />
                </span>
            </div>
            <div className='text-xs font-medium text-[#8A8A8A] text-center mt-1'>
                OTP has been sent to the shared number
            </div>
            <div className='text-base font-semibold text-black text-center mt-6'>
                Enter OTP
            </div>
            <OtpInput
                shouldAutoFocus={true}
                containerStyle={{ justifyContent: 'space-between', padding: '16px 0px 4px 0px' }}
                inputStyle={{ border: '1px solid black', width: '44px', height: '44px', borderRadius: '4px', fontSize: '20px', fontWeight: 500 }}
                isInputNum={true}
                value={otp}
                onChange={e => { setOtp(e); setError(false); }}
                numInputs={6}
                hasErrored={error}
                errorStyle={{ border: '1px solid #EB4E2C' }} />
            <div className='flex justify-start items-center mt-[6px]'>
                <AiFillInfoCircle color={error ? '#EB4E2C' : '#747474'} className='text-[12px] mr-1' />
                <div className={`${error ? 'text-[#EB4E2C]' : 'text-[#202020]'} text-[10px] leading-[16px] font-medium`}>
                    {error ? 'Please enter correct OTP.' : 'This is required'}
                </div>
            </div>
            <div className='flex flex-row justify-between mb-10'>
                <div className="basis-1/2 flex items-center justify-start">
                    <button disabled={disabled} type="button" className='whitespace-nowrap rounded-md py-3 text-[12px] leading-[20px] text-[#00439D] disabled:text-[#BCBCBC] outline-none font-semibold'
                        onClick={handleResend}>
                        Resend OTP
                    </button>
                    {showCountDown && <CustomCountDown sec={30} onComplete={() => { setDisabled(false); setShowCountDown(false) }} />}
                </div>
                <div className="basis-1/2 text-left">
                    <button
                        id={isProPage ? "ProOtpVerified" : "EliteOtpVerified"}
                        disabled={(otp.length !== 6) || btnClicked} type="button" className='rounded-md w-full py-3 bg-[#202020] disabled:bg-[#BCBCBC] text-[#FFFFFF] text-[14px] leading-[24px] outline-none font-semibold'
                        onClick={handleVerify}>
                        {btnClicked ? <Image src={loader} alt='icon' className='h-6 object-contain mx-auto' /> : 'Verify OTP'}
                    </button>
                </div>
            </div>
        </div>
    )
}

