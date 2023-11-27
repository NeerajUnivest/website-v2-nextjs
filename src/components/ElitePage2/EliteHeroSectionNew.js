import Image from "next/image";
import heroHome from '../../assets/images/hero_image_elite_home-min.png';
import hero from '../../assets/images/hero_image_elite-min.png';
import univest_elite from '../../assets/images/univest_elite.png';
import HeroSearchBox from "@/elements/HeroSearchBox";
import Marquee from "react-fast-marquee";
import rbi from '../../assets/icons/rbi.gif';
import CountUpBox from "@/elements/CountUpBox";
import { ExploreMore } from "@/elements/Button/Button";
import { useRouter } from "next/router";
import eliteProIcon from 'src/assets/icons/elite12Icon.png'
import verifiedIcon from 'src/assets/icons/verified-account.png'
import targetingIcon from 'src/assets/icons/targeting.png'
import briefcaseIcon from 'src/assets/icons/briefcase.png'
import groupIcon from 'src/assets/icons/group.png'




export default function EliteHeroSectionNew({ homePage }) {
    const router = useRouter();
    return (<>
        <section id="Hero" className="bg-light-blue overflow-hidden">
            <div className='flex flex-col gap-8 lg:flex-row pt-32 lg:pt-28 max-w-screen-xl mx-auto'>
                <div>
                    <div className="flex flex-col items-center gap-6">
                        <div>
                            <div className=" w-[100px] m-auto flex justify-center items-center gap-1.5 shadow-[0px_2px_8px_0px_rgba(106,115,129,0.12)] px-5 py-1 rounded-lg bg-gradient-to-tr from-[#141E30] to-[#333] text-white">
                                <Image className="w-6" src={eliteProIcon} alt="demo" />
                                <p className="text-white text-sm not-italic font-bold leading-6">Elite</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div>
                                <p className="text-[color:var(--neutral-900,#202020)] text-center text-[28px] not-italic font-extrabold leading-[44px]">
                                    Earn up to
                                </p>
                                <p className="text-[color:var(--neutral-900,#202020)] text-center text-[28px] not-italic font-extrabold leading-[44px]">
                                    12% per annum
                                </p>
                            </div>
                            <div className="text-[color:var(--neutral-900,#202020)] text-center text-sm leading-6">
                                <p>Secured with</p>
                                <p className="font-extrabold">Registered NBFC-P2P</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mx-4">
                    <div className="flex flex-col justify-center items-center gap-4 border border-[color:var(--gradient-1,#61B2F3)] shadow-[0px_4px_8px_0px_rgba(181,181,181,0.25)] p-3 rounded-xl border-solid bg-white ">
                        <div>
                            <div className="flex items-start gap-2 border px-4 py-2 rounded-lg border-solid border-[#69B7DA]">
                                <p className="text-center text-xs not-italic font-extrabold leading-5">India’s first and largest regulated <span className="text-[#B3161B]">NBFC-P2P </span> </p>
                            </div>
                            <div className="">
                                <div className="grid grid-cols-2 md:grid-cols-4 p-2 gap-2 gap-y-6">
                                    <div className="flex items-center gap-2">
                                        <div className="flex justify-center items-center p-[10.125px] rounded-[45px] border-[1.125px] border-solid border-black">
                                            <Image className="w-5" src={verifiedIcon} alt="demo" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-[color:var(--neutral-900,#202020)] text-center text-sm not-italic font-extrabold leading-[153%]">3.5 Lac+</p>
                                            <p className="text-[color:var(--neutral-800,#414141)] text-[10px] not-italic font-semibold leading-4">Active users</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex justify-center items-center p-[10.125px] rounded-[45px] border-[1.125px] border-solid border-black">
                                            <Image className="w-5" src={verifiedIcon} alt="demo" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-[color:var(--neutral-900,#202020)]  text-sm not-italic font-extrabold leading-[153%]">1,200 Cr+</p>
                                            <p className="text-[color:var(--neutral-800,#414141)] text-[10px] not-italic font-semibold leading-4">Portfolios connected</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex justify-center items-center p-[10.125px] rounded-[45px] border-[1.125px] border-solid border-black">
                                            <Image className="w-5" src={verifiedIcon} alt="demo" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-[color:var(--neutral-900,#202020)] text-center text-sm not-italic font-extrabold leading-[153%]">500k+</p>
                                            <p className="text-[color:var(--neutral-800,#414141)] text-[10px] not-italic font-semibold leading-4">Trusted Indians</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex justify-center items-center p-[10.125px] rounded-[45px] border-[1.125px] border-solid border-black">
                                            <Image className="w-5" src={verifiedIcon} alt="demo" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-[color:var(--neutral-900,#202020)] text-center text-sm not-italic font-extrabold leading-[153%]">82.4%+</p>
                                            <p className="text-[color:var(--neutral-800,#414141)] text-[10px] not-italic font-semibold leading-4">Active users</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>
    )
}
