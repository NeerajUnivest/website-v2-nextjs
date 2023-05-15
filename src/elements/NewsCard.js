
import Image from 'next/image'

export default function NewsCard({ content }) {
    return (
        <div className={`snap-center select-none min-w-[248px] md:w-[430px] md:min-w-[430px] h-[200px] rounded-[16px] p-5 bg-white shadow mx-4  relative`}>
            <div className="flex flex-col">
                <div className={`h-8`}>
                    <Image src={content.logo} width={20} height={10} className={`h-5 lg:mb-1`} alt='logo' />
                </div>
                <div className='h-[100px] overflow-hidden font-Inter text-[12px] lg:text-[16px] leading-[20px] lg:leading-[24px]'>
                    {content.text}
                </div>
                ...
            </div>
            <a href={content.link} target="_blank" className='font-medium text-[14px] absolute underline bottom-4 right-6 lg:bottom-5 lg:right-10' rel="noreferrer">Read more</a>
        </div>
    )
}
