
import Image from "next/image"
import { createRoot } from 'react-dom/client';
import ReactModal from "react-modal"

import sebi_new_logo from '@/assets/icons/sebi_new_logo.png';


const SEBIPopUp = () => {

    return (
        <ReactModal
            isOpen={true}
            ariaHideApp={false}
            shouldFocusAfterRender={false}
            onRequestClose={popUp.close}
            style={{
                overlay: {
                    backdropFilter: "blur(2px)",
                    backgroundColor: '#20202099',
                    zIndex: 20
                }
            }}
            className=' w-[90%] md:w-[656px] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 '
        >
            <div className='select-none font-Inter flex flex-col justify-between h-full p-8 bg-white rounded-2xl'>
                <div className="flex items-center justify-between ">
                    <p className='text-xs md:text-base text-[#414141] font-medium'>
                        About<br />
                        <span className="text-base md:text-2xl font-semibold leading-8">Research team</span><br />
                        100+ years experience
                    </p>
                    <Image src={sebi_new_logo} className='w-12 lg:w-20 ' alt="sebi" />
                </div>
                <hr className="h-px my-4 bg-[#9D9D9D] border-0" />
                <p className='text-xs md:text-base text-black font-medium'>
                    Guided by SEBI RA Nitin Jain (INH000010399), and his research team together possesses over 100 years of investing experience with proficiency to interpret company financials and conduct advanced technical analysis. Through exhaustive research of fundamentals, technicals, and macroeconomic factors, they uncover investment prospects with substantial return potential across various time frames.
                </p>
                <p className='text-[10px] md:text-xs text-black mt-4'>
                    <b>Disclaimer:</b> Investment ideas suggested on the Univest app are only for informational/ educational purposes. Univest is acting only as a platform to list these ideas. Markets are subject to risk, investor discretion and diligence is advised.
                </p>

            </div>
        </ReactModal>
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
        root?.render(<SEBIPopUp />);
        popUp.currentPopup = true
    }
}