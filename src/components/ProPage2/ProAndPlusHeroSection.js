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
            {/* <section id="Hero" className=" overflow-hidden bg-gradient-to-b from-[#343434] to-[#202732]">
                <div className='flex flex-col lg:flex-row pt-32 lg:pt-28 max-w-screen-xl mx-auto'>
                    <div style={{ border: "2px solid red" }} className="lg:mt-12 font-Inter basis-full md:basis-7/12 flex flex-col content-center lg:pl-8 relative">
                        <div className='mt-4 lg:mt-8 ml-4 lg:ml-0 text-[28px] lg:text-[52px] font-bold text-[#202020] whitespace-nowrap uni-wise-gradient2 flex items-center'>
                            Univest <Image src={proIcon} alt='icon' className="w-[72px] h-8 lg:w-[122px] lg:h-[52px] ml-4" />
                        </div>
                        <div className='ml-4 lg:ml-0 text-base lg:text-xl font-semibold text-white'>
                            Starts @₹{start_at}/month
                        </div>
                        <div className='mt-8 ml-4 lg:ml-0  grid grid-cols-2 lg:grid-cols-5 justify-items-start gap-y-4 text-black'>
                            <div className="flex col-span-2 items-center" onClick={() => popUp.open()}>
                                <Image
                                    placeholder="empty"
                                    src={sebi_new_logo_white}
                                    className='object-contain w-[40px] lg:w-[64px]'
                                    alt='sebi'
                                />
                                <p className={`font-semibold text-base lg:text-2xl mx-2 text-white`}>Registered</p>
                                <AiOutlineInfoCircle color='#FFF' className='text-[16px]  lg:text-[20px]' />
                            </div>
                            <div className="self-center">
                                <p className="font-semibold text-base text-white"><CountUpBox end={5} decimals={1} /> Lac+</p>
                                <p className="font-medium text-xs text-white">Active users</p>
                            </div>
                            <div className="self-center">
                                <p className="font-semibold text-base text-white"><CountUpBox start={1000} end={2000} duration={2} /> Cr+</p>
                                <p className="font-medium text-xs text-white whitespace-nowrap">Worths portfolio connected</p>
                            </div>
                        </div>
                        {homePage ?
                            <ExploreMore className='absolute -bottom-16 left-4 lg:bottom-36 lg:left-8 text-white border-white' onClick={() => router.push('/pro')} /> :
                            <HeroSearchBox isDark={true} />}
                    </div>
                    <div className={`basis-full md:basis-5/12 flex content-center relative ${homePage ? 'mt-12 lg:mt-4' : 'mt-6'}`}>
                        <div className='rounded-full absolute left-10 lg:left-3 top-[100px] bg-gradient-to-r from-[#62606022] to-[#0914328c] h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] blur-3xl opacity-50' />
                        <Image
                            placeholder="blur"
                            src={homePage ? heroHome : hero}
                            className={`lg:w-[500px] lg:min-w-[500px] object-contain z-[1] ${homePage ? 'ml-auto w-[85%]  mr-0' : 'mx-auto w-[80%]'}`}
                            alt='demo image'
                        />
                    </div>
                </div>
                {!homePage &&
                    <div className="bg-black flex justify-center py-6 ">
                        <p className="font-Inter font-bold text-white text-sm lg:text-2xl">PRO membership benefits</p>
                    </div>}
            </section> */}

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
                                    <a className="ml-[5px]" href=''>
                                        <Image className="w-2" src={infoIcon} alt='appAndPlay' />
                                    </a>
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

                        <div className=" border rounded-lg bg-neutral-900 flex flex-row justify-around p-3">
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
