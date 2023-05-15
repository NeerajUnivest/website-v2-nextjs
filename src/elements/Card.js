
import Image from 'next/image'


let classes = ['rainbow0', 'rainbow1', 'rainbow2', 'rainbow3',]
function activeClass(n) {
    return classes[n];
}

export default function Card({ style, content, active, activeCard }) {
    return (
        <div className={`mx-4 mt-3 mb-10 select-none min-w-[200px] w-[200px] h-[200px] lg:w-[252px] lg:min-w-[252px] lg:h-[252px] rounded-3xl shadow ${active ? 'shadow-xl snap-center' : ''}`}>
            <div className={` rounded-3xl h-full w-full overflow-hidden ${style.bg} ${activeClass(activeCard)}`}>
                <div className={`w-full h-full rounded-3xl p-5 ${style.bg} ${style.border}`}>
                    <div className="flex flex-col">
                        <div className='h-10'>
                            <Image src={content.icon} className='mt-1 h-6 lg:mt-3 object-contain' alt='icon' />
                        </div>
                        <div className={`w-9/12 font-Inter text-[14px] lg:text-[20px] my-0 lg:my-3 leading-[24px] lg:leading-[28px] font-semibold ${style.text}`}>
                            {content.title}
                        </div>
                        <div className='mt-2 font-Inter text-[12px] lg:text-[16px] leading-[20px] lg:leading-[24px]'>
                            {content.text}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
