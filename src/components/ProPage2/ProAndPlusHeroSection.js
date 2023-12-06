import Image from "next/image";
import proAndPlusIcon from '../../assets/images/proAndPlusIcon.png';
import infoIcon from '../../assets/images/infoIcon.png';
import layers from '../../assets/images/layers.png';
import back from '../../assets/images/back.png';
import useSWR from 'swr'
import RatioBar from "./RatioBar";
import freeIcon from '../../assets/images/free_tag.png';
import { popUp } from '@/elements/PopUp/SEBIPopUp';
import TrialCountdownSection from "./TrialCountdown";
import { UserDetailProvider } from "@/contexts/UserDetailContext";
import { useContext } from "react";
import axiosInterceptorInstance from "@/elements/axiosInterceptorInstance";
import Actions from "@/elements/Actions";
import axios from "axios";
import { ExploreMore } from "@/elements/Button/Button";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function ProAndPlusHeroSection({ homePage, isDark = false, }) {
    const router = useRouter();

    const { data, isLoading } = useSWR(`${process.env.apiBaseURL}/resources/trade-cards/hit`, fetcher)
    const userDetail = useContext(UserDetailProvider)
    return (
        <div id="Hero" className="font-Inter overflow-hidden bg-gradient-to-b from-[#202020] to-[#202020] h-full relative">
            <div className=" whitespace-nowrap pt-24 lg:px-8 max-w-screen-xl mx-auto gap-8" >
                <div className=' flex flex-col  gap-5 mx-auto'>
                    <div className="font-Inter basis-full md:basis-7/12 flex flex-col content-center relative">
                        <div className=' top-0 flex items-center justify-center'>
                            <Image src={proAndPlusIcon} alt='icon' className="w-[238px]" />
                        </div>
                    </div>
                    <div className="  font-Inter basis-full md:basis-7/12 flex flex-col content-center relative">
                        <span className={`text-center text-[28px] font-extrabold leading-[44px]  lg:text-3xl ${!isDark ? 'text-white' : 'text-[#414141]'}`}>
                            India’s trusted
                        </span>
                        <span className={`text-center text-[28px] font-extrabold leading-[44px] lg:text-3xl ${!isDark ? 'text-white' : 'text-[#414141]'}`}>
                            Stock market advisory
                        </span>
                    </div>
                    <div>
                        <p className="text-center text-sm lg:text-3xl font-bold text-white">SEBI Registered - INA000017639</p>
                        <div className=" flex justify-center items-center" onClick={() => popUp.open()}>
                            <p className="text-center text-[10px] lg:text-3xl font-semibold text-white" >Uniapps, a wholly owned subsidiary of Univest </p>
                            <Image className="w-2 ml-1" src={infoIcon} alt='appAndPlay' />
                        </div>
                    </div>
                </div>
                {userDetail?.userData?.subscriptionState === 'TRIAL_PRO_PLUS' &&
                    <TrialCountdownSection className='px-4' endTime={userDetail?.userData?.expiryDate} />}

                <div className="px-3 flex flex-col gap-6">
                    <div className=' pl-4 pr-4 pt-3 pb-4 flex flex-col border  border-[#ffd25e] mt-8 rounded-xl bg-[#363636] gap-3'>
                        <div className="flex flex-col items-start gap-3 border border-neutral-500 p-3 rounded-lg border-solid bg-gradient-to-b from-[#202020] to-[#202020] ">
                            <div className="self-stretch text-[color:var(--Pearl-White,#FFF)] text-center text-sm not-italic font-bold leading-6 bg-clip-text">
                                <span >Past performance : </span>
                                <span className="uni-wise-gradient2 font-black text-sm lg:text-xl">{data?.data?.targetAccuracy?.toFixed(2) ?? '--'}% accuracy</span>
                            </div>
                            <RatioBar percent={data?.data?.targetAccuracy} />
                            <div className=" w-full flex flex-row justify-between ">
                                <p className="font-semibold text-white text-sm lg:text-xl"> Hit: {data?.data?.hit ?? '-'}</p>
                                <p className="font-semibold text-white text-sm lg:text-xl"> Miss: {data?.data?.miss ?? '-'}</p>
                            </div>
                        </div>

                        <div className="  flex flex-row justify-between">
                            <div className="flex flex-row gap-3">
                                <div className=' top-0 flex items-center justify-center'>
                                    <Image src={layers} alt='icon' className="w-9" />
                                </div>
                                <div>
                                    <p className="text-[color:var(--Pearl-White,#FFF)] text-sm not-italic font-extrabold leading-[153%]">{data?.data?.totalCount}</p>
                                    <p className="text-[color:var(--neutral-300,#DFDFDF)] text-[10px] not-italic font-semibold leading-4">Total calls</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-3">
                                <div className=' top-0 flex items-center justify-center'>
                                    <Image src={back} alt='icon' className="w-9" />
                                </div>
                                <div>
                                    <p className="text-[color:var(--Pearl-White,#FFF)] text-sm not-italic font-extrabold leading-[153%]">{data?.data?.totalCount - data?.data?.hit - data?.data?.miss}</p>
                                    <p className="text-[color:var(--neutral-300,#DFDFDF)] text-[10px] not-italic font-semibold leading-4">Exited calls</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {(!userDetail?.userData?.subscriptionState || userDetail?.userData?.subscriptionState === 'FREE') ?
                        <div className="whitespace-nowrap border rounded-lg bg-neutral-900 flex flex-row justify-between p-3">
                            <div className="flex flex-row gap-[2px] items-center">
                                <Image className="w-14 mt-1 mr-1" src={freeIcon} alt='demo image' />
                                <div className="text-white text-base not-italic font-extrabold leading-7">
                                    <p>7 DAYS TRIAL</p>
                                </div>
                            </div>
                            <button className="text-black text-xs not-italic font-extrabold leading-5 bg-white rounded-2xl flex justify-center items-center pl-4 pr-4"
                                onClick={() => {
                                    if (userDetail?.userData?.subscriptionState === 'FREE') {
                                        axios.put(`${process.env.apiBaseURL}/resources/user-subscription/activate-trial-v2`, {}
                                            , {
                                                headers: {
                                                    'Authorization': `Bearer ${Actions.getCookie("auth_token")}`,
                                                    'device-name': Actions.getDeviceName(),
                                                    'device-id': Actions.generateUniqueDeviceID()
                                                }
                                            }).then(res => {
                                                if (res.data?.data) {
                                                    let uD = {
                                                        ...userDetail?.userData,
                                                        subscriptionState: res.data?.data?.subscriptionState,
                                                        expiryDate: res.data?.data?.expiryDate
                                                    }
                                                    userDetail?.setUserData(uD)
                                                    Actions.setCookie("user_details", JSON.stringify(uD), 1)
                                                    FaceBook.track('StartTrial')
                                                } else {
                                                    alert('.............')
                                                }
                                            })
                                    } else {
                                        userDetail?.inputRef?.current?.focus()
                                    }
                                }}>Activate now</button>
                        </div> : homePage && <div className="h-10" />}

                    {homePage && <div className="h-20" />}
                </div>
            </div>
            {homePage &&
                <ExploreMore className='absolute bottom-16 left-4 lg:bottom-36 lg:left-8 text-white border-white' onClick={() => router.push('/pro')} />}
        </div>
    )
}
