
import TrushCard from '../../elements/TrushCard'
import quatetion from '../../assets/img/youCanTrush.webp'
import goal from '../../assets/icons/goal.webp'
import binoculars from '../../assets/icons/binoculars.webp'
import rocket from '../../assets/icons/rocket.webp'
import Team_Univest_1 from '../../assets/team/Team_Univest_1.webp'
import Team_Univest_2 from '../../assets/team/Team_Univest_2.webp'
import Team_Univest_3 from '../../assets/team/Team_Univest_3.webp'
import Team_Univest_4 from '../../assets/team/Team_Univest_4.webp'
import Team_Univest_5 from '../../assets/team/Team_Univest_5.webp'
import Image from 'next/image'

let content = [{
    icon: rocket,
    title: 'Our Mission',
    text: `We are on a mission to empower everyone to earn higher returns on their investments with tools that help discover investment opportunities faster, take informed decisions with easy research, know if and when to enter the right investment but more importantly exiting at the right time`,
},
{
    icon: binoculars,
    title: 'Our Journey',
    text: `Our founders, Pranit Arora & Avneet Dhamija have one simple vision, higher ROIs for everyone. Having repeatedly faced the problem of making right investments and timely exits for the past decade, they pledged to build a one stop solution to solve problems faced by millions of retail investors.`,
},
{
    icon: goal,
    title: 'Our Goal',
    text: `Our goal is to make every user's investment journey easy, fulfilling and rewarding. Hence, building Univest, a one-stop platform for all your investment needs - discovery, research, invest & share all from a single place. Univest is transparent and honest towards all its users. With our customer-first approach, all solutions are centered around the customer's needs`,
}]
let style = {
    border: 'border-[#AC4C40]',
    bg: 'bg-[#fff]',
    shadow: 'shadow-[#FFDDD9]',
    text: 'text-[#000]',
}
export default function YouCanTrush() {
    return (
        <div className='pt-6 lg:pt-10'>
            <div className='w-10/12 mx-auto font-Inter text-[12px] leading-[18px] text-[#00439D] text-center lg:text-[22px] lg:leading-[40px]'>
                Here’s the team
            </div>
            <div className='font-Inter font-semibold text-[18px] leading-[24px] text-[#00439D] text-center lg:text-[32px] lg:leading-[54px]'>
                You can trust on
            </div>
            <div className='bg-gradient-to-t from-[#B3D5F4] relative pb-[100px] lg:pb-[180px] '>
                <Image src={quatetion} className='absolute bottom-0 w-full z-10' alt='icon' width='100%' height='auto' loading="lazy" />

                <div className='my-6 lg:my-10 overflow-x-auto overflow-y-hidden no-scrollbar px-7 lg:px-14'>
                    <div className='w-auto h-[380px] flex flex-row space-x-[2px]'>
                        <div className='h-full w-[312px]'>
                            <Image src={Team_Univest_1} width='312px' height='auto' loading="lazy" className='h-full min-w-[312px]' alt="team_img" />
                        </div>
                        <div className='flex flex-col space-y-[2px]'>
                            <div className='h-1/2'>
                                <Image src={Team_Univest_2} width='312px' height='auto' loading="lazy" className='h-full min-w-[312px]' alt="team_img" />
                            </div>
                            <div className='h-1/2'>
                                <Image src={Team_Univest_3} width='312px' height='auto' loading="lazy" className='h-full min-w-[312px]' alt="team_img" />
                            </div>
                        </div>
                        <div className='h-full min-w-[380px]'>
                            <Image src={Team_Univest_4} width='380px' height='auto' loading="lazy" className='h-full min-w-[380px]' alt="team_img" />
                        </div>
                        <div className='h-full min-w-[252px]'>
                            <Image src={Team_Univest_5} width='252px' height='auto' loading="lazy" className='h-full min-w-[252px]' alt="team_img" />
                        </div>
                    </div>
                </div>
                <div className='snap-mandatory snap-x flex flex-row lg:justify-between overflow-x-auto no-scrollbar px-4 lg:px-10'>
                    {content.map((ele, i) => <TrushCard key={i} content={ele} style={style} />)}
                </div>
            </div>
        </div>
    )
}
