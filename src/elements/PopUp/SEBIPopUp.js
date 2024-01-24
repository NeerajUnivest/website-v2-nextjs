
import Image from "next/image"
import { createRoot } from 'react-dom/client';
import ReactModal from "react-modal"

import sebi_new_logo from '@/assets/icons/sebi_new_logo.png';
import { useEffect } from "react";
import { Mixpanel } from "../Mixpanel";
import Link from "next/link";


const SEBIPopUp = () => {
    useEffect(() => {
        Mixpanel.track('info_clicked', {
            'chip_type': 'SEBI',
        })
    }, [])


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
                        {/* 100+ years experience */}
                    </p>
                    <Image src={sebi_new_logo} className='w-12 lg:w-20 ' alt="sebi" />
                </div>
                <hr className="h-px my-4 bg-[#9D9D9D] border-0" />
                <p className='text-xs md:text-base text-black font-medium text-justify'>
                    Uniresearch Global Private Limited, a subsidiary company of Univest Communication Technology Private Limited "Univest", is registered with SEBI as a Research Analyst, reg no. INH000013776. Mr. Yashpal Arora - Research Head, has 40+ years of industry and investing experience, leads a team of analysts possessing 75+ years of experience and proficiency to perform exhaustive research and analysis of fundamentals, technical and economic factors to uncover research/ investment prospects with fair return potential across various timeframes.
                </p>
                <p className="text-[10px] md:text-xs text-black font-medium text-justify mt-2">
                    For more information and updates please refer <Link href="https://stocks.univest.in/terms-and-conditions" className="transition hover:opacity-75 text-primary underline">
                        terms & conditions
                    </Link>
                </p>
                <p className='text-[10px] md:text-xs text-black mt-4 text-justify'>
                    <b>Disclaimer:</b> Univest is simply acting as a platform provider and inter alia publishes the data and recommendations provided by the SEBI reg. intermediaries such as research analysts. Investment in the securities market is subject to market risks. Read all the related documents carefully before investing. For more detail, kindly refer to univest terms of use, disclosures and disclaimers.
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