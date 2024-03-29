
import Image from "next/image"
import premiumIcon from "@/assets/images/Vector.png"
import Countdown, { zeroPad } from "react-countdown"
import DownloadButton from "./DownloadButton"
import moment from "moment"
import Actions from "@/elements/Actions"
import { memo, useEffect } from "react"

const TrialCountdownSection = ({ endTime, className }) => {
    return (
        <>
            <section className={`font-Inter whitespace-nowrap flex flex-col items-center gap-4 mt-6 w-full ${className}`} >
                <div className="relative flex w-full flex-col justify-center items-center gap-4  border-[color:var(--neutral-500,#9D9D9D)] pt-8 pb-4 px-4 rounded-xl border border-neutral-500 bg-[#191616]">
                    <div className=" bg-gradient-to-tl from-[#1A379E] to-[#C379FE] absolute top-[-20px] inline-flex items-start gap-2.5 border-[color:var(--alert-50,#FFFDFA)] px-4 py-1.5 rounded-[20px] border-[1.5px] border-solid bg-[#02A79C] ">
                        <p className="text-[color:var(--Pearl-White,#FFF)] text-center text-sm not-italic font-bold leading-6">Free trial ends</p>
                    </div>
                    <div className="text-white text-center text-xs not-italic font-bold leading-5 flex items-center gap-4 ">
                        <div className="flex flex-row gap-2 items-center">
                            <Image className="w-4 h-4" src={premiumIcon} alt="demo" />
                            <p>Unlock any 5 ideas</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <Image className="w-4 h-4" src={premiumIcon} alt="demo" />
                            <p>Premium screeners</p>
                        </div>
                    </div>
                    <Countdown date={moment(endTime, 'DD MMM YY').add(1, 'd').valueOf()} renderer={({ days, hours, minutes, seconds, completed }) => completed ? <div /> : <div className="flex items-center gap-2 justify-center text-white">
                        <div className="flex flex-col justify-center items-center gap-1">
                            <div className="flex flex-col justify-center items-center gap-2 w-14 h-14 rounded-lg bg-[#EB4E2C]">
                                <p className="text-2xl font-extrabold">{zeroPad(days)}</p>
                            </div>
                            <p className="text-xs not-italic font-extrabold leading-5">Days</p>
                        </div>
                        <p className="text-[color:var(--Pearl-White,#FFF)] text-xl not-italic font-extrabold leading-8">:</p>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <div className="flex flex-col justify-center items-center gap-2 w-14 h-14 rounded-lg bg-[#EB4E2C]">
                                <p className="text-2xl font-extrabold">{zeroPad(hours)}</p>
                            </div>
                            <p className="text-xs not-italic font-extrabold leading-5">Hours</p>
                        </div>
                        <p className="text-[color:var(--Pearl-White,#FFF)] text-xl not-italic font-extrabold leading-8">:</p>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <div className="flex flex-col justify-center items-center gap-2 w-14 h-14 rounded-lg bg-[#EB4E2C]">
                                <p className="text-2xl font-extrabold">{zeroPad(minutes)}</p>
                            </div>
                            <p className="text-xs not-italic font-extrabold leading-5">Minutes</p>
                        </div>
                        <p className="text-[color:var(--Pearl-White,#FFF)] text-xl not-italic font-extrabold leading-8">:</p>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <div className="flex flex-col justify-center items-center gap-2 w-14 h-14 rounded-lg bg-[#EB4E2C]">
                                <p className="text-2xl font-extrabold">{zeroPad(seconds)}</p>
                            </div>
                            <p className="text-xs not-italic font-extrabold leading-5">Seconds</p>
                        </div>
                    </div>}
                    />
                    <DownloadButton />
                    <p className="text-white text-xs not-italic font-medium leading-5">To avail all the free benefits</p>

                </div>
            </section>


        </>
    )
}
export default memo(TrialCountdownSection)