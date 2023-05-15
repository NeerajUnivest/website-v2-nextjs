
import TeamCard from '../../elements/TeamCard'

import teamData from './teamData'
export default function MyTeam() {
    return (
        <div className='pt-4 md:pt-6'>
            <div className='py-4 md:py-8'>
                <div className='font-Inter font-semibold text-[18px] leading-[24px] text-[#00439D] text-center md:text-[32px] md:leading-[54px]'>
                    Our Team
                </div>
            </div>
            <div className=' snap-mandatory snap-x flex flex-row overflow-x-auto no-scrollbar p-4 lg:p-8'>
                {teamData.map((ele, i) => <TeamCard key={i} data={ele} />)}
            </div>
        </div>
    )
}
