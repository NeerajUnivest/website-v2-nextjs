
import TrushCard from '../../elements/TrushCard'
import quatetion from '../../assets/img/youCanTrush.webp'
import goal from '../../assets/icn/goal.webp'
import binoculars from '../../assets/icn/binoculars.webp'
import rocket from '../../assets/icn/rocket.webp'
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
        <section className='bg-gradient-to-t from-[#B3D5F4] py-24 lg:pt-32 lg:pb-44 font-Inter relative'>
                <Image src={quatetion} className='absolute bottom-0 w-full z-1' alt='icon' width='100%' height='auto' loading="lazy" />

            <div className='max-w-screen-xl mx-auto px-4 lg:px-8'>
            <div className='w-10/12 mx-auto font-Inter text-[12px] leading-[18px] text-[#00439D] text-center lg:text-[22px] lg:leading-[40px]'>
                Here&apos;s the team
            </div>
                <p className="font-Inter font-semibold text-[18px] leading-[24px] text-[#00439D] text-center md:text-[32px] md:leading-[54px]">
                Our Team
                </p>
                <div className=' py-8 grid grid-cols-12 grid-rows-2 grid-flow-col gap-2 h-[400px]'>
                    <Image src={Team_Univest_1} alt="gallery" className='col-span-8 lg:col-span-4 lg:row-span-2 inset-0 h-full w-full object-cover object-center rounded-lg' />
                    <Image src={Team_Univest_2} alt="gallery" className='col-span-4 lg:col-span-4 inset-0 h-full w-full object-cover object-center rounded-lg' />
                    <Image src={Team_Univest_3} alt="gallery" className='col-span-8 lg:col-span-4 inset-0 h-full w-full object-cover object-center rounded-lg ' />
                    <Image src={Team_Univest_4} alt="gallery" className='col-span-4 lg:col-span-4 lg:row-span-2 inset-0 h-full w-full object-cover object-center rounded-lg ' />
                </div>
                <div className='snap-mandatory snap-x flex flex-row lg:justify-between overflow-x-auto no-scrollbar gap-4 mt-6'>
                    {content.map((ele, i) => <TrushCard key={i} content={ele} style={style} />)}
                </div>
            </div>
        </section>
    )
}
