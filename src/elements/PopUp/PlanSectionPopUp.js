import Image from "next/image"
import { createRoot } from 'react-dom/client';
import ReactModal from "react-modal"
import { RxCross2 } from "react-icons/rx";
import eliteIcon2 from "@/assets/icons/elitIcon2.png"
import proIcon from "@/assets/icons/pro.png"
import proPlusIcon from "@/assets/icons/pro_plus.png"
import ideasIcon from "@/assets/icons/trade_ideas_pro.png"
import screenersIcon from "@/assets/icons/screeners_pro.png"
import eliteIcon from "@/assets/icons/elite_pro.png"
import advisoryIcon from "@/assets/icons/portfolio_pro.png"
import welcome_pro_plus from "../../assets/lottiefiles/welcome_pro_plus.gif"
import { isMobile } from 'react-device-detect';
import DownloadButton from "@/components/ProPage2/DownloadButton";
import { useEffect } from "react";

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
        backgroundColor: '#202020b9',
        zIndex: 20
    }
}

const PlanSectionPopUp = ({ type }) => {
    useEffect(() => {
        let main_container = document.getElementsByTagName('html')?.[0];

        main_container.style.overflow = 'hidden';
        return () => {
            main_container.style.overflow = 'unset'
        }
    }, [])
    return (
        <ReactModal
            isOpen={true}
            ariaHideApp={false}
            shouldFocusAfterRender={false}
            onRequestClose={planSectionPopUp.close}
            style={customStyles}
        >
            <div className='select-none font-Inter flex flex-col md:flex-row justify-between relative h-full bg-white rounded-[50px] pt-4'>
                <button onClick={planSectionPopUp.close} className='absolute -right-2 -top-3 md:right-8 md:-top-5 bg-white p-1 md:p-2 rounded-full z-50'>
                    <RxCross2 size={28} className='border border-black p-1.5 rounded-full' />
                </button>
                {type === 'elite' ?
                    <section className="font-Inter whitespace-nowrap flex flex-col items-center gap-4 bg-white " >
                        <div className=" bg-gradient-to-br from-[#141E30] to-[#333] flex justify-center items-center p-2.5 rounded-full border-2 border-neutral-500 ">
                            <Image className="w-16 object-contain" src={eliteIcon2} alt="demo" />
                        </div>

                        <p className="text-black text-center text-base font-bold leading-7">
                            Request submitted successfully
                        </p>

                        <div className=" text-[#606060] text-center text-xs font-semibold leading-5">
                            Our Wealth advisor will be in touch with you shortly.<br />
                            In the meantime, you can proceed with your investment<br />
                            journey by following the steps provided below.
                        </div>

                        <p className=" text-[#414141] text-center text-[10px] font-medium leading-4">
                            <span className="text-black font-bold">Working hours:</span> Monday to Friday, 10:00 AM to 6:30 PM.
                        </p>

                        <div className="m-4 relative flex w-full flex-col justify-center items-center gap-4 border border-[#9D9D9D] pt-8 pb-4 px-3 rounded-xl  bg-[#191616]">
                            <div className=" absolute top-[-20px] inline-flex items-start gap-2.5 border-[color:var(--alert-50,#FFFDFA)] px-4 py-1.5 rounded-[20px] border-[1.5px] border-solid bg-[#02A79C] ">
                                <p className="text-[color:var(--Pearl-White,#FFF)] text-center text-sm not-italic font-bold leading-6">Invest in 3 easy steps</p>
                            </div>

                            <div className="flex flex-col justify-center items-start gap-4 self-stretch px-2 py-0 text-white">
                                <p className=" text-center text-sm not-italic font-semibold leading-6">1. Download Univest app</p>
                                <p className=" text-center text-sm not-italic font-semibold leading-6">2. Complete your KYC</p>
                                <p className=" text-center text-sm not-italic font-semibold leading-6">3. Invest using UPI / Net banking</p>
                            </div>
                            <DownloadButton />
                        </div>
                    </section>
                    :
                    <section className="font-Inter whitespace-nowrap flex flex-col items-center gap-4 bg-white " >
                        <Image className='w-[80px]' src={type ? proPlusIcon : proIcon} alt="demo" />
                        <div className="text-[color:var(--neutral-900,#202020)] text-center text-[26.529px] not-italic font-bold leading-[42.447px] flex flex-row gap-2 ">
                            <div className="flex justify-center items-center">
                                <p>Univest PR</p>
                                <Image className="w-6 mx-0.5" src={type ? proPlusIcon : proIcon} alt='demo image' />
                            </div>
                            {type && <span className="italic">Plus</span>}
                        </div>

                        <p className=" text-black text-center text-base font-bold leading-7">
                            Start earning higher returns
                        </p>

                        <div className="flex w-full flex-col items-center gap-6 px-3 py-4 rounded-2xl bg-[#363636]">
                            <div className="flex flex-col items-center gap-4 self-stretch">
                                <div style={{ background: ` ${type ? 'var(--pro-2, linear-gradient(309deg, #1A379E -1.44%, #C379FE 101.36%))' : 'var(--gradient-3, linear-gradient(0deg, #FF8415 -37.42%, #FFCA3F 65.82%))'} ` }} className="flex w-full h-8 flex-col justify-center items-center gap-0.5 px-2 py-[5px] rounded-lg">
                                    <p className={`${type ? 'text-white' : 'text-neutral-800'} text-sm font-bold leading-6`}>Unlock all benefits</p>
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
                            <div className="flex flex-col justify-center items-start gap-4 self-stretch px-2 py-0 text-white">
                                <p className=" text-center text-sm not-italic font-semibold leading-6">1. Download Univest app</p>
                                <p className=" text-center text-sm not-italic font-semibold leading-6">2. Subscribe to PRO {type && 'Plus'}</p>
                            </div>
                            <DownloadButton />
                        </div>
                    </section>}
            </div>
        </ReactModal >
    )
}
var root = null;
export const planSectionPopUp = {
    currentPopup: false,
    close: () => {
        root?.unmount()
        planSectionPopUp.currentPopup = false
    },
    open: (type) => {
        root = createRoot(document.getElementById('pop-up-container'))
        if (planSectionPopUp.currentPopup) {
            planSectionPopUp.close()
        }
        root?.render(<PlanSectionPopUp type={type} />);
        planSectionPopUp.currentPopup = true
    }
}