
import Image from "next/image"
import proIcon from "@/assets/icons/pro.png"
import proPlusIcon from "@/assets/icons/pro_plus.png"
import ideasIcon from "@/assets/icons/trade_ideas_pro.png"
import screenersIcon from "@/assets/icons/screeners_pro.png"
import eliteIcon from "@/assets/icons/elite_pro.png"
import advisoryIcon from "@/assets/icons/portfolio_pro.png"

const data = {
    duration: '6',
    expiryDate: '26 Aug 23'
}


export default function ActivePlanSection({ isProPlus = false }) {

    return (
        <section className="flex flex-col items-center gap-4 bg-white p-2" >
            <Image className="w-20" src={isProPlus ? proPlusIcon : proIcon} alt="demo" />
            <div className="text-[color:var(--neutral-900,#202020)] text-center text-[26.529px] not-italic font-bold leading-[42.447px] flex flex-row gap-2 ">
                <div className="flex justify-center items-center">
                    <p>Univest PR</p>
                    <Image className="w-6" src={isProPlus ? proPlusIcon : proIcon} alt='demo image' />
                </div>
                {isProPlus ? <span className="italic">Plus</span> : ''}
            </div>
            <div className="text-[color:var(--neutral-700,#606060)] text-center text-base not-italic font-semibold leading-7">
                <p className="font-bold text-xl">Active Plan: {data?.duration} months</p>
                <p>Earn more returns now!</p>
            </div>
            <p className="text-sm text-center">Membership active till <span className="text-[color:var(--primary-900,#00439D)] not-italic font-extrabold leading-6">{data?.expiryDate}</span> </p>
            <div className="flex w-full flex-col items-center gap-6 px-3 py-4 rounded-2xl bg-[#363636]">
                <div className="flex flex-col items-center gap-4 self-stretch">
                    <div style={{ background: ` ${isProPlus ? 'var(--pro-2, linear-gradient(309deg, #1A379E -1.44%, #C379FE 101.36%))' : 'var(--gradient-3, linear-gradient(0deg, #FF8415 -37.42%, #FFCA3F 65.82%))'} ` }} className="flex w-full h-8 flex-col justify-center items-center gap-0.5 px-2 py-[5px] rounded-lg">
                        <p className={`${isProPlus ? 'text-white' : 'text-neutral-800'} text-sm not-italic font-bold leading-6`}>Benefits unlocked</p>
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
                <div>

                </div>
            </div>
        </section>
    )
}