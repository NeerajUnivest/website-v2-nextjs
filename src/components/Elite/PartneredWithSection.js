import Image from 'next/image';
import rbi from '../../assets/icons/rbi.png';

export default function PartneredWithSection() {
    return (
        <section className='py-5 font-Inter bg-gradient-to-br from-[#F5F5F5] to-[#E3E3E3] mt-10'>
            <div className='max-w-screen-xl mx-auto px-4 lg:px-8'>
                <div className="flex justify-center items-center">
                    <p className='text-sm lg:text-2xl text-[#414141] mr-2 lg:mr-4'>
                        Partnered with
                    </p>
                    <div>
                        <p className="text-sm lg:text-2xl text-[#B3161B] font-extrabold">
                            FAI<span className="text-[#0075B8]">₹</span>CENT
                        </p>
                        <p className="text-[5px] lg:text-[8px] text-[#414141] tracking-widest">E V E R Y % C O U N T</p>
                    </div>
                </div>
                <div className="mt-2 lg:mt-4 flex justify-center items-center">
                    <Image
                        placeholder="empty"
                        src={rbi}
                        className=' h-[40px] lg:h-[56px] w-[40px] lg:w-[56px] mr-4'
                        alt='demo image'
                    />
                    <p className='text-base lg:text-2xl text-black font-extrabold'>
                        India&apos;s first and largest<br className='lg:hidden' /> RBI-regulated NBFC-P2P
                    </p>
                </div>
            </div>
        </section>
    )
}
