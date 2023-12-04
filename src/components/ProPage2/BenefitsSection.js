import proIcon from "../../assets/images/pro_icon.png"
import proPlusIcon from "../../assets/images/proPlus_icon.png"
import vector from "../../assets/images/Vector.png"
import greenTickIcon from "../../assets/images/green_tick_icon.png"
import crossTickIcon from "../../assets/images/cross_tick.png"
import proPlusPremIcon from "../../assets/images/proPlusPrem_icon.png"
import Image from "next/image";

export default function BenefitsSection() {

    return (
        <div className="font-Inter flex flex-col justify-center items-start gap-4 border border-[color:var(--neutral-600,#747474)] p-2 rounded-xl border-solid bg-[#363636]">
            <div className="flex justify-end items-center gap-3 self-stretch pl-2 pr-3 py-2 rounded-lg bg-[#202020] ">
                <div className="flex-[1_0_0] text-[color:var(--Pearl-White,#FFF)] text-sm not-italic font-medium leading-6">
                    <p>Benefits</p>
                </div>
                <div className="flex flex-row gap-4">
                    <Image className="w-[60px]" src={proIcon} alt='demo image' />
                    <Image className="w-[60px]" src={proPlusIcon} alt='demo image' />
                </div>
            </div>

            <div className="flex flex-col items-start gap-2 self-stretch ">
                <div className="flex flex-row justify-between self-stretch pl-2 pr-3 py-2 rounded-lg bg-[#202020] border-[0.5px] border-[#C6A4EF]">
                    <div className="flex flex-row gap-2">
                        <Image className="w-4" src={vector} alt='demo image' />
                        <p className="text-[color:var(--neutral-100,#F5F5F5)] text-center text-xs not-italic font-semibold leading-5">“Futures” trade ideas</p>
                    </div>
                    <div className="flex flex-row gap-12 pr-6 pl-3">
                        <Image className="w-5" src={crossTickIcon} alt='demo image' />
                        <Image className="w-5" src={greenTickIcon} alt='demo image' />
                    </div>
                </div>

                <div className="flex flex-row justify-between self-stretch pl-2 pr-3 py-2 rounded-lg bg-[#202020]">
                    <div className="flex flex-row gap-2">
                        <Image className="w-4" src={vector} alt='demo image' />
                        <p className="text-[color:var(--neutral-100,#F5F5F5)] text-center text-xs not-italic font-semibold leading-5">Equity trade ideas</p>
                    </div>
                    <div className="flex flex-row gap-12 pr-6 pl-3">
                        <Image className="w-5" src={greenTickIcon} alt='demo image' />
                        <Image className="w-5" src={greenTickIcon} alt='demo image' />
                    </div>
                </div>

                <div className="flex flex-row justify-between self-stretch pl-2 pr-3 py-2 rounded-lg bg-[#202020]">
                    <div className="flex flex-row gap-2">
                        <Image className="w-4" src={vector} alt='demo image' />
                        <p className="text-[color:var(--neutral-100,#F5F5F5)] text-center text-xs not-italic font-semibold leading-5">Premium screeners</p>
                    </div>
                    <div className="flex flex-row gap-12 pr-6 pl-3">
                        <Image className="w-5" src={greenTickIcon} alt='demo image' />
                        <Image className="w-5" src={greenTickIcon} alt='demo image' />
                    </div>
                </div>

                <div className="flex flex-row justify-between self-stretch pl-2 pr-3 py-2 rounded-lg bg-[#202020]">
                    <div className="flex flex-row gap-2">
                        <Image className="w-4" src={vector} alt='demo image' />
                        <p className="text-[color:var(--neutral-100,#F5F5F5)] text-center text-xs not-italic font-semibold leading-5">Rewards on Elite</p>
                    </div>
                    <div className="flex flex-row gap-12 pr-6 pl-3">
                        <Image className="w-5" src={greenTickIcon} alt='demo image' />
                        <Image className="w-5" src={greenTickIcon} alt='demo image' />
                    </div>
                </div>

                <div className="flex flex-row justify-between self-stretch pl-2 pr-3 py-2 rounded-lg bg-[#202020]">
                    <div className="flex flex-row gap-2">
                        <Image className="w-4" src={vector} alt='demo image' />
                        <p className="text-[color:var(--neutral-100,#F5F5F5)] text-center text-xs not-italic font-semibold leading-5">Qtr. Portfolio review</p>
                    </div>
                    <div className="flex flex-row gap-12 pr-6 pl-3">
                        <Image className="w-5" src={greenTickIcon} alt='demo image' />
                        <Image className="w-5" src={greenTickIcon} alt='demo image' />
                    </div>
                </div>
            </div>
        </div>
    )
}