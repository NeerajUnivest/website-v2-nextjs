import proIcon from "../../assets/images/pro_icon.png"
import proPlusIcon from "../../assets/images/proPlus_icon.png"
import vector from "../../assets/images/Vector.png"
import greenTickIcon from "../../assets/images/green_tick_icon.png"
import crossTickIcon from "../../assets/images/cross_tick.png"
import proPlusPremIcon from "../../assets/images/proPlusPrem_icon.png"
import Image from "next/image";

export default function BenefitsSection() {

    return (
        <div className="w-full font-Inter flex flex-col justify-center items-start gap-4 border border-[#747474] p-2 rounded-xl border-solid bg-[#363636] max-w-screen-md mx-auto">
            <div className="flex justify-between items-center gap-3 self-stretch px-3 py-2 rounded-lg bg-[#202020] ">
                <div className=" text-white text-sm md:text-2xl not-italic font-medium leading-6">
                    Benefits
                </div>
                <div className="flex flex-row gap-4">
                    <Image className="w-14 md:w-16" src={proIcon} alt='demo image' />
                    <Image className="w-14 md:w-16" src={proPlusIcon} alt='demo image' />
                </div>
            </div>

            <div className="flex flex-col items-start gap-2 self-stretch ">
                <div className="flex items-center justify-between self-stretch p-2 rounded-lg bg-[#202020] border-[0.5px] border-[#C6A4EF]">
                    <div className="flex flex-row gap-2">
                        <Image className="w-4 object-contain" src={vector} alt='demo image' />
                        <p className="text-[#F5F5F5] text-center text-xs md:text-lg font-semibold">“Futures” trade ideas</p>
                    </div>
                    <div className="flex flex-row gap-12 pr-6 pl-3">
                        <Image className="w-5" src={crossTickIcon} alt='demo image' />
                        <Image className="w-5" src={greenTickIcon} alt='demo image' />
                    </div>
                </div>

                <div className="flex items-center justify-between self-stretch p-2 rounded-lg bg-[#202020]">
                    <div className="flex flex-row gap-2">
                        <Image className="w-4 object-contain" src={vector} alt='demo image' />
                        <p className="text-[#F5F5F5] text-center text-xs md:text-lg font-semibold">Equity trade ideas</p>
                    </div>
                    <div className="flex flex-row gap-12 pr-6 pl-3">
                        <Image className="w-5" src={greenTickIcon} alt='demo image' />
                        <Image className="w-5" src={greenTickIcon} alt='demo image' />
                    </div>
                </div>

                <div className="flex items-center justify-between self-stretch p-2 rounded-lg bg-[#202020]">
                    <div className="flex flex-row gap-2">
                        <Image className="w-4 object-contain" src={vector} alt='demo image' />
                        <p className="text-[#F5F5F5] text-center text-xs md:text-lg font-semibold">Premium screeners</p>
                    </div>
                    <div className="flex flex-row gap-12 pr-6 pl-3">
                        <Image className="w-5" src={greenTickIcon} alt='demo image' />
                        <Image className="w-5" src={greenTickIcon} alt='demo image' />
                    </div>
                </div>

                <div className="flex items-center justify-between self-stretch p-2 rounded-lg bg-[#202020]">
                    <div className="flex flex-row gap-2">
                        <Image className="w-4 object-contain" src={vector} alt='demo image' />
                        <p className="text-[#F5F5F5] text-center text-xs md:text-lg font-semibold">Rewards on Elite</p>
                    </div>
                    <div className="flex flex-row gap-12 pr-6 pl-3">
                        <Image className="w-5" src={greenTickIcon} alt='demo image' />
                        <Image className="w-5" src={greenTickIcon} alt='demo image' />
                    </div>
                </div>

                <div className="flex items-center justify-between self-stretch p-2 rounded-lg bg-[#202020]">
                    <div className="flex flex-row gap-2">
                        <Image className="w-4 object-contain" src={vector} alt='demo image' />
                        <p className="text-[#F5F5F5] text-center text-xs md:text-lg font-semibold">Qtr. Portfolio review</p>
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