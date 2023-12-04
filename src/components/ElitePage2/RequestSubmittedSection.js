
import Image from "next/image"
import eliteIcon from "@/assets/icons/elitIcon2.png"
import DownloadButton from "../ProPage2/DownloadButton"

export default function RequestSubmittedSection(isBottom = true) {

    return (
        <section className="font-Inter whitespace-nowrap flex flex-col items-center gap-4 bg-white mx-11" >
            <div className=" bg-gradient-to-br from-[#141E30] to-[#333] flex justify-center items-center shrink-0 pl-[10.79px] pr-[8.789px] pt-[10.393px] pb-[11.406px] rounded-full border border-neutral-500 ">
                <Image className="w-10" src={eliteIcon} alt="demo" />
            </div>

            <p className="self-stretch text-[color:var(--neutral-900,#202020)] text-center text-base not-italic font-bold leading-7">Request submitted successfully</p>

            <div className=" text-[color:var(--neutral-700,#606060)] text-center text-xs not-italic font-semibold leading-5">
                <p>Our wealth advisor will reach back to you!</p>
                <p>During weekdays, expect a response within 48 hours.</p>
                <p>On weekend, we’ll call back on next working day.</p>
            </div>

            <p className=" text-[color:var(--neutral-800,#414141)] text-center text-[10px] not-italic font-medium leading-4"><span className="text-black font-bold">Working hours:</span> Monday to Friday, 10:00 AM to 6:30 PM. </p>

            <div className="m-4 relative flex w-full flex-col justify-center items-center gap-4  border-[color:var(--neutral-500,#9D9D9D)] pt-8 pb-4 px-3 rounded-xl border border-neutral-500 bg-[#191616]">
                <div className=" absolute top-[-20px] inline-flex items-start gap-2.5 border-[color:var(--alert-50,#FFFDFA)] px-4 py-1.5 rounded-[20px] border-[1.5px] border-solid bg-[#02A79C] ">
                    <p className="text-[color:var(--Pearl-White,#FFF)] text-center text-sm not-italic font-bold leading-6">Invest in 3 easy steps</p>
                </div>

                <div className="flex flex-col justify-center items-start gap-4 self-stretch px-2 py-0 text-white">
                    <p className=" text-center text-sm not-italic font-semibold leading-6">1. Download Univest app</p>
                    <p className=" text-center text-sm not-italic font-semibold leading-6">2. Complete your KYC</p>
                    <p className=" text-center text-sm not-italic font-semibold leading-6">3. Invest using UPI / Net banking</p>
                </div>

                {isBottom ? <DownloadButton /> : ''}
            </div>


        </section>
    )
}