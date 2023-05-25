
import TeamCard from '../../elements/TeamCard'

import teamData from './teamData'
export default function MyTeam() {
    return (
        <section className=' bg-[#f5f5f5] pt-10 lg:pt-18 pb-2 lg:pb-8 font-Inter'>
            <div className='max-w-screen-xl mx-auto px-4 lg:px-8'>
                <div className='font-Inter font-semibold text-[18px] leading-[24px] text-[#00439D] text-center md:text-[32px] md:leading-[54px]'>
                    Our Team
                </div>
            <div className=' py-8 snap-mandatory snap-x flex flex-row overflow-x-auto no-scrollbar gap-4 lg:gap-8'>
                {teamData.map((ele, i) => <TeamCard key={i} data={ele} />)}
            </div>
        </div>
        </section>
    )
}
