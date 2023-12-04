
import Image from "next/image"
import proIcon from "@/assets/icons/pro.png"
import proPlusIcon from "@/assets/icons/pro_plus.png"
import ideasIcon from "@/assets/icons/trade_ideas_pro.png"
import screenersIcon from "@/assets/icons/screeners_pro.png"
import eliteIcon from "@/assets/icons/elite_pro.png"
import advisoryIcon from "@/assets/icons/portfolio_pro.png"
import welcome_pro from "../../assets/lottiefiles/welcome_pro.gif"
import welcome_pro_plus from "../../assets/lottiefiles/welcome_pro_plus.gif"
import DownloadButton from "./DownloadButton"
import { useGetAxios } from "@/hooks/useGetAxios"
import { memo, useContext, useEffect } from "react"
import TrialCountdownSection from "./TrialCountdown"
import BenefitsSection from "./BenefitsSection"
import { UserDetailProvider } from "@/contexts/UserDetailContext"

const isProPlus = (subscriptionState) => {
    return (subscriptionState === 'PRO_PLUS' || subscriptionState === 'PRO_PLUS_AUTO_RENEW_CANCELLED' || subscriptionState === 'PRO_PLUS_NEAR_EXPIRY')
}
function ActivePlanSection({ isBottom = true }) {
    const userDetail = useContext(UserDetailProvider)
    const data = userDetail?.userData;

    if (data?.subscriptionState === 'TRIAL_PRO_PLUS') {
        return (
            <section className="font-Inter flex flex-col items-center bg-white  " >
                <Image className="w-2/3" src={welcome_pro_plus} alt="demo" />
                <p className="text-[color:var(--neutral-700,#606060)] text-center text-base not-italic font-semibold leading-7">Welcome to</p>
                <div className="text-[color:var(--neutral-900,#202020)] text-center text-lg not-italic font-extrabold leading-[42.447px] flex flex-row gap-2 ">
                    <div className="flex justify-center items-center">
                        <p>Univest PR</p>
                        <Image className="w-6" src={proPlusIcon} alt='demo image' />
                    </div>
                    <span className="italic">Plus </span>
                    <p>- Free Trial</p>
                </div>
                <p className="text-sm text-center">Expires on <span className="text-[color:var(--primary-900,#00439D)] not-italic font-extrabold leading-6">{data?.expiryDate}</span> </p>
                <TrialCountdownSection endTime={data?.expiryDate} />
            </section>
        )
    } else if (data?.subscriptionState === 'TRIAL_PRO_PLUS_EXPIRED') {
        return (
            <section className="flex flex-col items-center gap-4  pt-5 pb-2 px-4 rounded-[12px_12px_0px_0px] bg-[#383838]  " >
                <div className="flex flex-col justify-center items-center gap-2">
                    <p className="text-[color:var(--error-500,#EB4E2C)] text-xl not-italic font-bold leading-8"> {data?.subscriptionState === 'TRIAL_PRO_PLUS_EXPIRED' ? 'Plan' : 'Plan'} expired</p>
                    <p className="text-[color:var(--Pearl-White,#FFF)] text-xl not-italic font-extrabold leading-8">Choose a plan to continue</p>
                </div>
                <BenefitsSection />
                <div className="flex justify-between items-center gap-3 self-stretch">
                    <div style={{ background: 'var(--gradient-3, linear-gradient(0deg, #FF8415 -37.42%, #FFCA3F 65.82%))' }} className=" text-black flex flex-col justify-center items-center gap-0.5 self-stretch px-7 py-[5px] rounded-lg">
                        <div className="flex flex-row justify-center items-center gap-[2px]">
                            <p className="text-xs not-italic font-extrabold leading-5 bg-clip-text">Buy PR</p>
                            <Image className="w-3 h-3" src={proIcon} alt='demo image' />
                        </div>
                        <p className="text-[10px] not-italic font-semibold leading-4">Starts @ ₹199/mo*</p>
                    </div>
                    <div style={{ background: 'var(--pro-2, linear-gradient(309deg, #1A379E -1.44%, #C379FE 101.36%))' }} className=" text-white text-xs not-italic font-extrabold leading-5 bg-clip-textflex flex-col justify-center items-center gap-0.5 self-stretch px-7 py-[5px] rounded-lg">
                        <div className="flex flex-row justify-center items-center gap-[2px]">
                            <p >Buy PR</p>
                            <Image className="w-3 h-3" src={proPlusIcon} alt='demo image' />
                            <span className="italic">Plus</span>
                        </div>
                        <p className="text-[10px] not-italic font-semibold leading-4">Starts @ ₹199/mo*</p>
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <section className="flex flex-col items-center gap-4 bg-white p-2" >
                <Image className="w-2/3" src={isProPlus(data?.subscriptionState) ? welcome_pro_plus : welcome_pro} alt="demo" />
                <div className="text-[color:var(--neutral-900,#202020)] text-center text-[26.529px] not-italic font-bold leading-[42.447px] flex flex-row gap-2 ">
                    <div className="flex justify-center items-center">
                        <p>Univest PR</p>
                        <Image className="w-6 mx-0.5" src={isProPlus(data?.subscriptionState) ? proPlusIcon : proIcon} alt='demo image' />
                    </div>
                    {isProPlus(data?.subscriptionState) ? <span className="italic">Plus</span> : ''}
                </div>
                <div className="text-[color:var(--neutral-700,#606060)] text-center text-base not-italic font-semibold leading-7">
                    <p className="font-bold text-xl">Active Plan: {data?.planName}</p>
                    <p>Earn more returns now!</p>
                </div>
                <p className="text-sm text-center">Membership active till <span className="text-[color:var(--primary-900,#00439D)] not-italic font-extrabold leading-6">{data?.expiryDate}</span> </p>
                <div className="flex w-full flex-col items-center gap-6 px-3 py-4 rounded-2xl bg-[#363636]">
                    <div className="flex flex-col items-center gap-4 self-stretch">
                        <div style={{ background: ` ${isProPlus(data?.subscriptionState) ? 'var(--pro-2, linear-gradient(309deg, #1A379E -1.44%, #C379FE 101.36%))' : 'var(--gradient-3, linear-gradient(0deg, #FF8415 -37.42%, #FFCA3F 65.82%))'} ` }} className="flex w-full h-8 flex-col justify-center items-center gap-0.5 px-2 py-[5px] rounded-lg">
                            <p className={`${isProPlus(data?.subscriptionState) ? 'text-white' : 'text-neutral-800'} text-sm not-italic font-bold leading-6`}>Benefits unlocked</p>
                        </div>
                        <div className="flex justify-center items-center gap-[19px] self-stretch">
                            <div className="flex flex-col justify-center items-center gap-2 flex-[1_0_0]">
                                <Image className="w-10 rounded border border-neutral-500" src={ideasIcon} alt="demo" />
                                <p className="text-white text-xs not-italic font-medium leading-5">Ideas</p>
                            </div>
                            <div className="w-px h-11 bg-white"></div>
                            <div className="flex flex-col justify-center items-center gap-2 flex-[1_0_0]">
                                <Image className="w-10 rounded border border-neutral-500" src={screenersIcon} alt="demo" />
                                <p className="text-white text-xs not-italic font-medium leading-5">Screeners</p>
                            </div>
                            <div className="w-px h-11 bg-white"></div>
                            <div className="flex flex-col justify-center items-center gap-2 flex-[1_0_0]">
                                <Image className="w-10 rounded border border-neutral-500" src={eliteIcon} alt="demo" />
                                <p className="text-white text-xs not-italic font-medium leading-5">Elite</p>
                            </div>
                            <div className="w-px h-11 bg-white"></div>
                            <div className="flex flex-col justify-center items-center gap-2 flex-[1_0_0]">
                                <Image className="w-10 rounded border border-neutral-500" src={advisoryIcon} alt="demo" />
                                <p className="text-white text-xs not-italic font-medium leading-5">Advisory</p>
                            </div>
                        </div>
                    </div>
                    {isBottom ? <DownloadButton /> : ''}
                </div>
            </section>
        )
    }
}


export default memo(ActivePlanSection)