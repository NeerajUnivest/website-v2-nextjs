
import CommentCard from '../../elements/CommentCard'
import rating from "../../assets/img/rating.webp";
import Prasanth from "../../assets/img/Prasanth+Kuller.webp";
import Ankush from "../../assets/img/Ankush+Kumar.webp";
import Piyush from "../../assets/img/Piyush+Gupta.webp";
import Amresh from "../../assets/img/Amresh+Kumar.webp";
import Vijay from "../../assets/img/Vijay+Rathi.webp";
import Raghav from "../../assets/img/Raghav+Bhushan.jpg";
import Ravi from "../../assets/img/Ravi+Kumar.jpg";
import Image from 'next/image'

const commentsData = [
    {
        name: 'Prashant Khuller',
        details: 'Category Head, UDAAN.com',
        img: Prasanth,
        comment: 'The app looks great. All the required data is readily available. Very easy and intuitive to use as well.',
    },
    {
        name: 'Ankush Rajput',
        details: 'Co-Founder, SAHI COIN',
        img: Ankush,
        comment: 'Just linked my profile and those buy, sell and hold insights were mind blowing. The more i explore the more I love the app.',
    },
    {
        name: 'Piyush Gupta',
        details: 'Head of Digital Partnerships TATA AIA ',
        img: Piyush,
        comment: 'The app looks very smooth and clean. The UI design of the app is lit!',
    },
    {
        name: 'Amresh kumar',
        details: 'Chief product officer, Crofarm',
        img: Amresh,
        comment: 'Highly impressed by the overall app. Amazing UI with a smooth experience. True perfection.',
    },
    {
        name: 'Vijay Rathi',
        details: 'Technology Leader PRECISELY',
        img: Vijay,
        comment: 'Great exploration, pioneerin the new segment..All the best Univest India.',
    },
    {
        name: 'Raghav Bhushan',
        details: 'Software architect, Expedia',
        img: Raghav,
        comment: 'Highly impressed by the overall app. Amazing UI with a smooth experience. True perfection.',
    },
    {
        name: 'Ravi Kumar',
        details: 'Software Architect, Inshorts',
        img: Ravi,
        comment: 'Absolutely loved the app. Look and feel is really amazing. Screeners tab switching experience is great. All the general market content is also available here with easy to understand insights.',
    }
]

export default function CommentSection() {
    return (
        <div className='w-full' data-aos="fade-up">
            <div className='flex flex-col my-[24px] lg:my-[48px]'>
                <div className='font-Inter text-center font-semibold text-[18px] leading-[24px] text-[#00439D] lg:text-[32px] lg:leading-[32px] lg:text-[#000000]'>
                    We are in everyone’s stories
                </div>
                <div className='w-full'>
                    <Image src={rating} className='mt-4 mx-auto h-5 lg:h-8' alt='icon' width='auto' height='32px' />
                </div>
            </div>
            <div className='grid grid-rows-1 lg:grid-rows-2 grid-flow-col overflow-x-auto no-scrollbar px-4 lg:px-14'>
                {commentsData.map((ele, i) => <CommentCard content={ele} key={i} />)}
            </div>
        </div>
    )
}
