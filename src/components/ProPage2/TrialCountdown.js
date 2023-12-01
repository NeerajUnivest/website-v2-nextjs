
import Image from "next/image"
import premiumIcon from "@/assets/Images/Vector.png"
import Countdown from "react-countdown"
import DownloadButton from "./DownloadButton"

export default function TrialCountdownSection({ isBottom = true }) {

    return (
        <>
            <section className=" whitespace-nowrap flex flex-col items-center gap-4 mt-6 mx-3 " >
                <div className="m-4 relative flex w-full flex-col justify-center items-center gap-4  border-[color:var(--neutral-500,#9D9D9D)] pt-8 pb-4 px-3 rounded-xl border border-neutral-500 bg-[#191616]">
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
                    <Countdown date={Date.now() + (1000 * 1000)} renderer={({ days, hours, minutes, seconds, completed }) => completed ? <div /> : <div className="flex items-center gap-2 justify-center text-white">
                        <div className="flex flex-col justify-center items-center gap-1">
                            <div className="flex flex-col justify-center items-center gap-2.5 px-4 py-[16px] rounded-lg bg-[#EB4E2C]">
                                <p className="text-2xl font-extrabold">{days < 10 ? '0' : ''}{days}</p>
                            </div>
                            <p className="text-xs not-italic font-extrabold leading-5">Days</p>
                        </div>
                        <p className="text-[color:var(--Pearl-White,#FFF)] text-xl not-italic font-extrabold leading-8">:</p>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <div className="flex flex-col justify-center items-center gap-2.5 px-4 py-[16px] rounded-lg bg-[#EB4E2C]">
                                <p className="text-2xl font-extrabold">{hours < 10 ? '0' : ''}{hours}</p>
                            </div>
                            <p className="text-xs not-italic font-extrabold leading-5">Hours</p>
                        </div>
                        <p className="text-[color:var(--Pearl-White,#FFF)] text-xl not-italic font-extrabold leading-8">:</p>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <div className="flex flex-col justify-center items-center gap-2.5 px-4 py-[16px] rounded-lg bg-[#EB4E2C]">
                                <p className="text-2xl font-extrabold">{minutes < 10 ? '0' : ''}{minutes}</p>
                            </div>
                            <p className="text-xs not-italic font-extrabold leading-5">Minutes</p>
                        </div>
                    </div>}
                        onComplete={null} />
                    {isBottom ? <DownloadButton /> : ''}
                </div>
            </section>


        </>
    )
}