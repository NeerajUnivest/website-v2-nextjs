import { BlackButton } from "@/elements/Button/Button";
import Image from "next/image";
import callbackIcon from '@/assets/icons/phone_icon.png'
import callIcon from '@/assets/icons/call_icon.png'
import { useContext } from "react";
import { UserDetailProvider } from "@/contexts/UserDetailContext";



export default function CallBackSection() {
    const userDetail = useContext(UserDetailProvider)

    return (
        <section style={{ background: 'linear-gradient(180deg, rgba(243, 247, 249, 0.00) -6.26%, #E4EFF2 43.54%, rgba(243, 247, 249, 0.00) 104.34%' }}>
            <div className=" font-Inter mx-4 flex flex-col items-center gap-4 my-12">
                <Image className="w-20" src={callbackIcon} alt="demo" />
                <div className="flex flex-col justify-center items-center gap-3 w-full">
                    <p className="text-[color:var(--neutral-900,#202020)] text-base not-italic font-semibold leading-7">Connect with wealth advisor</p>
                    <div className='pl-4  w-full h-11 flex items-center bg-[#FFF] rounded-full border border-[#606060] text-sm lg:text-base font-medium'>
                        <Image className="w-6" src={callIcon} alt="demo" />
                        <input className='w-[calc(100%-90px)] caret-primary text-[#747474] font-semibold p-2' type='tel' placeholder='Enter mobile number'
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" inputMode="tel"
                            onClick={() => setTimeout(() => userDetail?.inputRef?.current?.focus(), 100)}
                        />
                        <BlackButton className=' whitespace-nowrap px-3 lg:px-6 h-full text-sm font-semibold' text='Get callback'
                            onClick={() => setTimeout(() => userDetail?.inputRef?.current?.focus(), 100)}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}