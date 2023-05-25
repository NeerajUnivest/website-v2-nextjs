import Image from 'next/image'

export default function TrushCard({ style, content }) {
    return (
        <div className={`snap-center select-none min-w-[248px] md:w-[380px] md:min-w-[380px] h-[348px] md:h-[420px] rounded-[16px] p-5 bg-white shadow   relative`}>
            <div className="flex flex-col">
                    <Image src={content.icon} className='h-10 md:h-14 w-10 md:w-14' alt='icon' placeholder='empty' />
                <div className={`w-9/12 text-[#00439D] font-Inter text-[14px] md:text-[20px] my-0 md:my-3 leading-[24px] md:leading-[28px] font-semibold ${style.text}`}>
                    {content.title}
                </div>
                <div className='mt-2 font-Inter text-[12px] md:text-[14px] leading-[20px] md:leading-[32px]'>
                    {content.text}
                </div>
            </div>
        </div>
    )
}
