
import quatetion from '../assets/icons/comment.webp'
import Image from 'next/image'

export default function CommentCard({ content }) {
    return (
        <div className='p-5 mx-4 my-[50px] w-[256px] min-w-[256px] h-[300px] lg:w-[448px] lg:min-w-[448px] lg:h-[168px] bg-[#EFF6FF] rounded-xl shadow relative'>
            <Image src={content.img} className='absolute -top-[44px] h-[86px] lg:h-[100px] w-[86px] lg:w-[100px] left-10 border-4 border-white rounded-full shadow-inner' alt={content.name} width='86px' height='auto' loading="lazy" />
            <Image src={quatetion} className='absolute -bottom-2 h-6 right-10' alt='icon' width='auto' height='24px' />
            <div className='mt-[48px] lg:mt-0 ml-0 lg:ml-[140px] '>
                <div className={`font-Inter text-[14px] leading-[26px] font-semibold`}>
                    {content.name}
                </div>
                <div className='font-Inter text-[12px] lg:text-[12px] leading-[20px] lg:leading-[20px]'>
                    {content.details}
                </div>
            </div>
            <div className='mt-5 lg:mt-2 font-Inter text-[#8A8A8A] text-[12px] lg:text-[14px] leading-[24px] lg:leading-[24px]'>
                {content.comment}
            </div>
        </div>
    )
}
