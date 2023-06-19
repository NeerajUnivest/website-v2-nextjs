import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image"
import { render, unmountComponentAtNode } from "react-dom"
import ReactModal from "react-modal"
import { RxCross2 } from "react-icons/rx";

import app_download_qr from '../../assets/images/app_download_qr.png';
import { BsApple, BsTelephone } from "react-icons/bs";
import { BlackButton } from "../Button/Button";
import Link from "next/link";

const customStyles = (isPhone) => ({
    content: {
        top: 'auto',
        left: isPhone ? '0' : '50%',
        right: isPhone ? '0' : 'auto',
        bottom: isPhone ? '0' : '50%',
        transform: !isPhone && 'translate(-50%, 50%)',
        width: isPhone ? '100%' : '780px',
        height: isPhone ? '60%' : '404px',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },
    overlay: {
        backgroundColor: '#20202099',
        zIndex: 20
    }
});

const PopUp = () => {
    const { width } = useWindowSize();
    return (
        <ReactModal
            isOpen={true}
            ariaHideApp={false}
            shouldFocusAfterRender={false}
            onRequestClose={popUp.close}
            style={customStyles(width < 746)}
        >
            <div className='font-Inter flex flex-col lg:flex-row justify-between relative h-full py-12 px-8 bg-white rounded-2xl'>
                <button onClick={popUp.close} className='absolute right-8 -top-5 bg-white p-2 rounded-full z-50'>
                    <RxCross2 size={28} />
                </button>
                <div className="flex flex-col justify-between ">
                    <p className='text-2xl lg:text-[40px] lg:leading-[64px] text-black font-extrabold'>
                        Enter your phone number<br />
                        to get the link
                    </p>
                    <div className='w-full sm:w-[480px] h-10 lg:h-14 flex items-center bg-[#FFF] rounded-full border border-[#606060] text-xs lg:text-base font-medium'>
                        <BsTelephone className='h-4 lg:h-14 ml-4 lg:ml-6' color="#747474" size={24} />
                        <input className='w-[calc(100%-120px)] caret-primary ml-2.5 lg:ml-4 text-[#747474]' type='text' placeholder='Enter your mobile number' required />
                        <BlackButton className='whitespace-nowrap px-3 lg:px-6 h-full ml-auto' text='Get free advice' icon={true} />
                    </div>
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

export const popUp = {
    close: () => {
        unmountComponentAtNode(document.getElementById('pop-up-container'))
    },
    currentPopup: false,
    open: () => {
        if (popUp.currentPopup) {
            popUp.close()
        }
        render(<PopUp />,
            document.getElementById('pop-up-container'));
        popUp.currentPopup = true
    }
}