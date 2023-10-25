import Image from "next/image"
import { createRoot } from 'react-dom/client';
import ReactModal from "react-modal"
import { RxCross2 } from "react-icons/rx";

import coming_soom from '../../assets/images/coming_soom.png';
import { isMobile } from 'react-device-detect';

const customStyles = {
    content: {
        top: 'auto',
        left: isMobile ? '0' : '50%',
        right: isMobile ? '0' : 'auto',
        bottom: isMobile ? '30%' : '50%',
        transform: !isMobile && 'translate(-50%, 50%)',
        width: isMobile ? '100%' : '780px',
        height: isMobile ? 'auto' : '504px',
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
    return (
        <ReactModal
            isOpen={true}
            ariaHideApp={false}
            shouldFocusAfterRender={false}
            onRequestClose={popUp.close}
            style={customStyles}
        >
            <div className='select-none font-Inter flex flex-col md:flex-row justify-between relative h-full bg-white rounded-[50px]'>
                <button onClick={popUp.close} className='absolute right-0 -top-3 md:right-8 md:-top-5 bg-white p-1 md:p-2 rounded-full z-50'>
                    <RxCross2 size={28} />
                </button>
                <Image src={coming_soom} alt='coming_soom' />
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
        if (popUp.currentPopup) {
            popUp.close()
        }
        root?.render(<PopUp />);
        popUp.currentPopup = true
    }
}