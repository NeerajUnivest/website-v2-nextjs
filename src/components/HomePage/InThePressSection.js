
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { useInView } from 'react-spring';
import Team_Univest_1 from '../../assets/team/Team_Univest_1.webp';
import Team_Univest_2 from '../../assets/team/Team_Univest_2.webp';
import Team_Univest_3 from '../../assets/team/Team_Univest_3.webp';
import Team_Univest_4 from '../../assets/team/Team_Univest_4.webp';

const brokerList = [
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Growww.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Kite.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/dhan.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Upstox.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Trustline.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Growww.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Kite.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/dhan.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Upstox.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Trustline.png',
]

export default function InThePressSection() {
    const [ref, inView] = useInView()
    return (
        <section className=' bg-[#f5f5f5] py-8 lg:py-0 font-Inter'>
            <div className='max-w-screen-xl mx-auto px-4 lg:px-8' ref={ref}>
                <p className="font-extrabold text-center py-8 text-lg lg:text-4xl text-black">
                    In The Press
                </p>
                <div className='grid grid-cols-12 grid-rows-2 grid-flow-col gap-2 h-[400px]'>
                    <Image src={Team_Univest_1} alt="gallery" className='col-span-8 lg:col-span-4 lg:row-span-2 inset-0 h-full w-full object-cover object-center rounded-lg' />
                    <Image src={Team_Univest_2} alt="gallery" className='col-span-4 lg:col-span-4 inset-0 h-full w-full object-cover object-center rounded-lg' />
                    <Image src={Team_Univest_3} alt="gallery" className='col-span-8 lg:col-span-4 inset-0 h-full w-full object-cover object-center rounded-lg ' />
                    <Image src={Team_Univest_4} alt="gallery" className='col-span-4 lg:col-span-4 lg:row-span-2 inset-0 h-full w-full object-cover object-center rounded-lg ' />
                </div>
                <Marquee
                    play={inView}
                    speed={30}
                    delay={2}>
                    <div className='flex overflow-y-auto gap-x-40 py-12 lg:py-16 mx-10'>
                        {/* TODO */}
                        {brokerList
                            .map((ele, i) =>
                                <Image key={i} src={ele} width='32' height='32' className='w-8 lg:w-10 object-contain' alt='icon' />
                            )}
                    </div>
                </Marquee>
            </div>
        </section>
    )
}
