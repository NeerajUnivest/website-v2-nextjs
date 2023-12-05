import { IconTextBtn } from "@/elements/Button/Button";
// import { Swiper, SwiperSlide } from "swiper/react";
// import rbi from '../../assets/icons/rbi.gif';
// import a from '../../assets/icons/plans/1.png';
// import b from '../../assets/icons/plans/2.png';
// import c from '../../assets/icons/plans/3.png';
// import d from '../../assets/icons/plans/4.png';
import giftIcon from '@/assets/icons/giftBox_icon.png'
import { UserDetailProvider } from "@/contexts/UserDetailContext";
import { useContext } from "react";
import { planSectionPopUp } from "@/elements/PopUp/PlanSectionPopUp";
// import recommend_tag from '../../assets/images/elite/recommend_tag.png';
// import { popUp } from "@/elements/PopUp/PopUp";

const cardData = [
    {
        id: 0,
        name: '12 month',
        planRate: '12',
        note: 'Interest at maturity',
        period: 12,
    },
    {
        id: 1,
        name: '3 month',
        planRate: '10',
        note: 'Interest at maturity',
        period: 3,
    },
    {
        id: 2,
        name: '6 month',
        planRate: '11',
        note: 'Interest at maturity',
        period: 6,
    },
    {
        id: 3,
        name: 'No-lock in',
        planRate: '8.25',
        note: 'Interest accrued daily',
        period: 0,
    },
]
export default function AvailablePlansSection() {
    return (
        <section className="font-Inter relative -mt-28">
            <div className='max-w-screen-xl py-3 mx-auto no-scrollbar flex overflow-x-auto gap-4 px-4'>
                {cardData.map(ele => <AvailablePlansCard key={ele.id} data={ele} />)}
            </div>
            <div className="mx-4">
                <IconTextBtn icon={giftIcon} textClass='rounded-md text-xs text-white font-semibold blackGradient py-2 w-full justify-center' iconClass='h-4 w-4 mr-2' text='Instant cashbacks on each investment' />
            </div>
        </section>
    )
}


export function AvailablePlansCard({ data }) {
    const userDetail = useContext(UserDetailProvider)
    return (
        <div className="pb-4 border-2 border-[#E4EEF3] rounded-xl overflow-hidden w-[156px] min-w-[156px] font-Inter flex flex-col  bg-white gap-2"
            onClick={() => {
                if (userDetail?.userData?.authToken) {
                    planSectionPopUp.open('elite')
                } else {
                    userDetail?.inputRef?.current?.focus()
                }
            }}>
            <span className="bg-[#E4EEF3] text-[#414141] py-1.5 text-sm text-center font-extrabold">
                {data.name}
            </span>
            <div className="pt-4 flex justify-center items-end gap-1">
                <span className=" text-[#414141] text-xs ">
                    upto
                </span>
                <span className="text-[#365F6D] text-[44px] leading-10 font-extrabold ">
                    {data.planRate?.split('.')?.[0]}
                </span>
                <div className="flex flex-col pb-1">
                    <span className="text-[#365F6D] text-lg leading-5 font-extrabold ">
                        {data.planRate?.split('.')?.[1] ? '.' + data.planRate?.split('.')?.[1] : ''}%
                    </span>
                    <span className="text-[#365F6D] text-xs leading-4 font-extrabold ">
                        p.a.
                    </span>
                </div>
            </div>
            <span className="text-[11px] text-center">
                {data.note}
            </span>
        </div>
    )
}
