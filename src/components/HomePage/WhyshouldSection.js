
import Card from '../../elements/Card';
import NewsCard from '../../elements/NewsCard'
import press from '../../assets/icons/press.webp'
import sebi from '../../assets/icons/sebi.webp'
import neutral from '../../assets/icons/neutral.webp'
import nonBiased from '../../assets/icons/nonBiased.webp'
import leadership from '../../assets/icons/leadership.webp'

import newsData from '../../newsData'
import Image from 'next/image';

let content = [{
    icon: leadership,
    title: 'Leadership',
    text: 'We have combined investing experience of over 150 years.',
},
{
    icon: neutral,
    title: 'Neutral',
    text: 'We are not a broker and hence have no interest in earning from your transactions.',
},
{
    icon: sebi,
    title: 'SEBI',
    text: 'We have trusted SEBI-registered investment advisors',
},
{
    icon: nonBiased,
    title: 'Non-biased',
    text: 'We are completely AI-driven with no human bias.',
}]
let style = {
    border: 'border-[#AC4C40]',
    bg: 'bg-[#fff]',
    shadow: 'shadow-[#FFDDD9]',
    text: 'text-[#000]',
}
export default function WhyshouldSection() {
    return (
        <div className=' bg-[#FFEBDC] pb-4' data-aos="fade-up">
            <div className='w-full pt-6' data-aos="fade-up">
                <div className=' my-[20px] lg:my-[40px] font-Inter font-semibold text-[18px] leading-[24px] text-[#D26412] text-center lg:text-[32px] lg:leading-[54px]'>
                    Why should you trust Univest?
                </div>
                {/*<div className='w-10/12 mx-auto font-Inter text-[12px] leading-[18px] text-[#717171] text-center lg:text-[22px] lg:leading-[40px]'>
                    Going to catch the red dot today going to catch the red dot today
    </div>*/}
                <div className='snap-mandatory snap-x flex flex-row lg:justify-between overflow-x-auto no-scrollbar px-4 lg:px-14'>
                    {content.map((ele, i) => <Card key={i} content={ele} style={style} />)}
                </div>
            </div>
            <div className='flex flex-row content-center justify-center my-[20px] lg:my-[40px]' data-aos="fade-up">
                <div className='font-Inter font-semibold text-[18px] leading-[24px] text-[#D26412] lg:text-[32px] lg:leading-[32px]'>
                    Univest in press
                </div>
                <div>
                    <Image src={press} className='h-6 lg:h-9 ml-3' alt='icon' />
                </div>
            </div>

            <div className='snap-mandatory snap-x flex flex-row overflow-x-auto no-scrollbar p-4 lg:px-14' data-aos="fade-up">
                {newsData.map((ele, i) => <NewsCard key={i} content={ele} />)}
            </div>
        </div>
    )
}
