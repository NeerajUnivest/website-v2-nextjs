import Image from "next/image"
import { createRoot } from 'react-dom/client';
import ReactModal from "react-modal"
import { RxCross2 } from "react-icons/rx";

import app_download_qr from '../../assets/images/app_download_qr.png';
import { BsApple, BsTelephone } from "react-icons/bs";
import { BlackButton } from "../Button/Button";
import { isMobile } from 'react-device-detect';
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { toast } from "../Toast/Toast";

const customStyles = {
    content: {
        top: 'auto',
        left: isMobile ? '0' : '50%',
        right: isMobile ? '0' : 'auto',
        bottom: isMobile ? '0' : '50%',
        transform: !isMobile && 'translate(-50%, 50%)',
        width: isMobile ? '100%' : '780px',
        height: isMobile ? '60%' : '404px',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },
    overlay: {
        backdropFilter: "blur(2px)",
        backgroundColor: '#20202099',
        zIndex: 20
    }
}

const PopUp = () => {
    const [number, setNumber] = useState('')
    const [error, setError] = useState(null)

    const submit = () => {
        if (number.length === 10) {
            axios.get(`${process.env.apiBaseURL}/resources/website/get-phone-call/${number}?type=web`)
                .then(res => {
                    toast.notify(res.data?.message)
                    setNumber('')
                    popUp.close()
                })
        } else {
            setError('Please enter a valid number')
        }
    }
    return (
        <ReactModal
            isOpen={true}
            ariaHideApp={false}
            shouldFocusAfterRender={false}
            onRequestClose={popUp.close}
            style={customStyles}
        >
            <div className='select-none font-Inter flex flex-col md:flex-row justify-between relative h-full py-12 px-8 bg-white rounded-2xl'>
                <button onClick={popUp.close} className='absolute right-8 -top-5 bg-white p-2 rounded-full z-50'>
                    <RxCross2 size={28} />
                </button>
                <div className="flex flex-col justify-between ">
                    <p className='text-2xl md:text-[40px] md:leading-[64px] text-black font-extrabold'>
                        Enter your phone number<br />
                        to get the link
                    </p>
                    <div className='w-full sm:w-[480px] h-10 md:h-14 flex items-center bg-[#FFF] rounded-full border border-[#606060] text-xs md:text-base font-medium'>
                        <BsTelephone className='h-4 md:h-14 ml-4 md:ml-6' color="#747474" size={24} />
                        <input className='w-[calc(100%-120px)] caret-primary ml-2.5 md:ml-4 text-[#747474]' type='text' placeholder='Enter your mobile number'
                            value={number} pattern="[0-9]*" inputMode="numeric" onChange={(e) => {
                                var numbers = /^[0-9]+$/;
                                if (e.target.value.match(numbers) || e.target.value === '') {
                                    setError(null)
                                } else {
                                    setError('Please enter a valid number')
                                }
                                setNumber(e.target.value)
                            }} />
                        <BlackButton className='whitespace-nowrap px-3 md:px-6 h-full ml-auto' text='Get free advice' icon={true} onClick={submit} />
                    </div>
                    {error &&
                        <div className='flex items-center ml-2 mt-1 '>
                            <AiFillInfoCircle color='#EB4E2C' className='text-[12px] mr-1' />
                            <div className={`text-[10px] ${error ? 'text-[#EB4E2C]' : 'text-[#747474]'}`}>
                                {error}
                            </div>
                        </div>}
                </div>
                <div className='flex flex-col justify-between '>
                    <div className="p-2 border border-black rounded">
                        <Image src={app_download_qr} className='w-28' alt="download now qr" />
                    </div>
                    <p className='text-sm text-black mb-3 text-center'>
                        Scan to Download
                    </p>
                    <Link href="https://play.google.com/store/apps/details?id=com.univest.capp" className="bg-black flex items-center border rounded-lg px-2 py-1 w-32 transition hover:opacity-75">
                        <Image src="https://cdn-icons-png.flaticon.com/512/888/888857.png" width={20} height={20} className="w-6" alt='Google Play' />
                        <div className="text-left ml-2">
                            <p className='text-[8px] text-white'>Download on </p>
                            <p className="text-xs font-bold text-white">Google Play</p>
                        </div>
                    </Link>
                    <Link href="https://apps.apple.com/us/app/univest-empowering-wealth/id6443753518" className="bg-black flex items-center border rounded-lg px-2 py-1.5 w-32 transition hover:opacity-75">
                        <BsApple color='#FFFFFF' size={24} />
                        <div className="text-left ml-2">
                            <p className='text-[8px] text-white'>Download on </p>
                            <p className="text-xs font-bold text-white">Apple Store</p>
                        </div>
                    </Link>
                </div>
            </div>
        </ReactModal >
    )
}
var root = null;
export const popUp = {
    currentPopup: false,
    close: () => {
        root?.unmount()
        popUp.currentPopup = false
    },
    open: () => {
        root = createRoot(document.getElementById('pop-up-container'))
        if (isMobile) {
            window.open('https://univest.onelink.me/VC6b/investwithunivest', '_blank');
        } else {
            if (popUp.currentPopup) {
                popUp.close()
            }
            root?.render(<PopUp />);
            popUp.currentPopup = true
        }
    }
}