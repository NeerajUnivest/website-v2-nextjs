import Image from "next/image";
import proAndPlusIcon from '../../assets/images/proAndPlusIcon.png';
import infoIcon from '../../assets/images/infoIcon.png';
import layers from '../../assets/images/layers.png';
import back from '../../assets/images/back.png';
import useSWR from 'swr'
import { useRouter } from "next/router";
import RatioBar from "./RatioBar";
import freeIcon from '../../assets/images/free_tag.png';
import { popUp } from '@/elements/PopUp/SEBIPopUp';

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function ProAndPlusHeroSection({ homePage, start_at, isDark = false }) {
    const { data, isLoading } = useSWR(`${process.env.apiBaseURL}/resources/trade-cards/hit`, fetcher)
    const router = useRouter();
    return (
        <>
            {/* Pro And Plus Section: */}
            <section id="Hero" className=" overflow-hidden bg-gradient-to-b from-[#202020] to-[#202020]">
                <div className="pt-32 lg:pt-28 lg:px-8 max-w-screen-xl mx-auto gap-8" >
                    <div className=' ml-12 mr-12 flex flex-col  gap-5 m-auto'>
                        <div className="font-Inter basis-full md:basis-7/12 flex flex-col content-center relative">
                            <div className=' top-0 flex items-center justify-center'>
                                <Image src={proAndPlusIcon} alt='icon' className="w-[238px]" />
                            </div>
                        </div>
                        <div className="  font-Inter basis-full md:basis-7/12 flex flex-col content-center relative">
                            <span className={`text-center text-[28px] font-extrabold leading-[44px]  lg:text-3xl ${!isDark ? 'text-white' : 'text-[#414141]'}`}>
                                India’s trusted
                            </span>
                            <span className={`text-center text-[28px] font-extrabold leading-[44px] lg:text-3xl ${!isDark ? 'text-white' : 'text-[#414141]'}`}>
                                Stock market advisory
                            </span>
                        </div>
                        <div>
                            <div >
                                <p className="text-center text-[10px] lg:text-3xl font-semibold text-white">SEBI Registered - INA000017639</p>
                                <div className=" flex justify-center items-center" onClick={() => popUp.open()}>
                                    <p className="text-center text-[10px] lg:text-3xl font-semibold text-white" >Uniapps, a wholly owned subsidiary of Univest </p>
                                    <Image className="w-2 ml-1" src={infoIcon} alt='appAndPlay' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' ml-4 mr-4 pl-4 pr-4 pt-3 pb-4 flex flex-col border-[1px]  border-[color:var(--gradient-3,#FF8415)] mt-8 rounded-xl bg-neutral-600  m-auto gap-3'>
                        <div className="flex flex-col items-start gap-3 border border-neutral-500 p-3 rounded-lg border-solid bg-gradient-to-b from-[#202020] to-[#202020] ">
                            <div className="self-stretch text-[color:var(--Pearl-White,#FFF)] text-center text-sm not-italic font-bold leading-6 bg-clip-text">
                                <span >Past performance : </span>
                                <span className="uni-wise-gradient2 font-black text-sm lg:text-xl">{data?.data?.targetAccuracy?.toFixed(2) ?? '89.87'}% accuracy</span>
                            </div>
                            {/* <div>
                                <span className="uni-wise-gradient2 font-black text-sm lg:text-xl">{data?.data?.targetAccuracy?.toFixed(2) ?? '89.87'}% Accuracy</span>
                                <span className="font-semibold text-sm lg:text-xl"> | Hit: {data?.data?.hit ?? '71'} | Miss: {data?.data?.miss ?? '8'}</span>
                            </div> */}
                            {/* <div className="flex flex-row gap-[2px] rounded-md m-auto">
                                <div className="w-[246px] h-3 rou bg-green-600 rounded-tl-md rounded-bl-md shrink-0"></div>
                                <div className="w-8 h-3 bg-red-700 rounded-tr-md rounded-br-md shrink-0"></div>
                            </div> */}
                            <RatioBar percent={data?.data?.targetAccuracy} />
                            <div className=" w-full flex flex-row justify-between ">
                                <p className="font-semibold text-white text-sm lg:text-xl"> Hit: {data?.data?.hit ?? '71'}</p>
                                <p className="font-semibold text-white text-sm lg:text-xl"> Miss: {data?.data?.miss ?? '8'}</p>
                            </div>
                        </div>

                        <div className="  flex flex-row justify-between">
                            <div className="flex flex-row gap-3">
                                <div className=' top-0 flex items-center justify-center'>
                                    <Image src={layers} alt='icon' className="w-9" />
                                </div>
                                <div>
                                    <p className="text-[color:var(--Pearl-White,#FFF)] text-sm not-italic font-extrabold leading-[153%]">192</p>
                                    <p className="text-[color:var(--neutral-300,#DFDFDF)] text-[10px] not-italic font-semibold leading-4">Total calls</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-3">
                                <div className=' top-0 flex items-center justify-center'>
                                    <Image src={back} alt='icon' className="w-9" />
                                </div>
                                <div>
                                    <p className="text-[color:var(--Pearl-White,#FFF)] text-sm not-italic font-extrabold leading-[153%]">123</p>
                                    <p className="text-[color:var(--neutral-300,#DFDFDF)] text-[10px] not-italic font-semibold leading-4">Exited calls</p>
                                </div>
                            </div>
                        </div>

                        <div className="whitespace-nowrap border rounded-lg bg-neutral-900 flex flex-row justify-around p-3">
                            <div><Image className="w-14 mt-1" src={freeIcon} alt='demo image' /></div>
                            <div className="text-white text-base not-italic font-extrabold leading-7">
                                <p>7 DAYS TRIAL</p>
                            </div>
                            <button className="text-black text-xs not-italic font-bold leading-5 bg-white rounded-2xl flex justify-center items-center pl-4 pr-4">Activate now</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
