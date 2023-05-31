import ScreenersList from '../../components/Screeners/ScreenersList';

import screenerIcon from '../../assets/img/screenerIcon.webp';
import newSquare from '../../assets/icn/newSquare.webp';
import premium from '../../assets/icn/premium.webp';
import Image from 'next/image';
import axios from 'axios';

export default function Screeners({ data }) {
    return (
        <section className='font-Inter relative overflow-hidden  pt-20 lg:pt-24'>
            <div className='-z-10 rounded-[50px] absolute left-[50vw] top-[30vh] bg-[#e3f0fb96] h-[100vh] w-[60vw]' />

            <div className='absolute top-18 lg:top-32 right-4 font-Inter flex flex-row justify-center lg:justify-end  lg:mr-4 h-10'>
                <Image src={premium} className='ml-2 mr-1 -mt-[2px] h-5 lg:h-6 w-5 lg:w-6' alt='icon' />
                <div className='lg:mt-[2px] text-[12px] leading-[16px] text-[#202020]'>
                    Premium
                </div>
                <Image src={newSquare} className='ml-6 mr-1 h-4 lg:h-5 w-10 lg:w-14' alt='icon' />
                <div className='lg:mt-[2px] text-[12px] leading-[16px] text-[#202020]'>
                    Newly added
                </div>
            </div>
            <div className='ml-32 hidden lg:flex flex-row content-center items-center lg:mt-5 lg:mb-12'>
                <Image src={screenerIcon} className='h-8 lg:h-20 w-8 lg:w-20 mr-4' alt='icon' />
                <div>
                    <div className='font-Inter font-bold text-[18px] leading-[24px] text-[#202020] lg:text-[32px] lg:leading-[40px]'>
                        Screener homepage
                    </div>
                    <div className='font-normal text-[#414141] hidden lg:flex text-[20px] leading-[32px]'>
                        Top picks based on your preference. Powered by robust algorithms built by a highly experienced research team.
                    </div>
                </div>
            </div>
            <ScreenersList data={data} />
        </section>)
}

export async function getServerSideProps() {
    let res = await axios.get(`https://api.univest.in/resources/screeners/v2`)
    return {
        props: {
            data: res.data.data.list
        }
    };
}