import Image from 'next/image'


export default function NewsCard({ data }) {
    return (
        <div className={`snap-center select-none min-w-[220px] lg:w-[360px] lg:min-w-[360px] h-[344px] lg:h-[500px] rounded-2xl p-5 bg-white shadow mx-4 relative`}>
            <div className="flex flex-col">
                <div className='font-Inter font-semibold text-[14px] lg:text-[24px] leading-[24px] lg:leading-[32px]'>
                    {data.name}
                </div>
                <div className='mt-2 font-Inter text-[12px] lg:text-[16px] leading-[20px] lg:leading-[24px]'>
                    {data.post}
                </div>
                <div className='h-16 font-Inter text-[#A8A7A7] text-[10px] lg:text-[12px] leading-[16px] lg:leading-[24px]'>
                    {data.bio}
                </div>
                <div className='mt-2 w-full'>
                    <Image src={data.img} className={`w-full rounded`} alt='profile' width={360} height={360} loading="lazy" />
                </div>
            </div>
        </div>
    )
}
