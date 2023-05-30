import Image from 'next/image';
import { Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import results_background from '../../assets/images/shark_background.webp';
import result_screen1 from '../../assets/images/result_screen1.png';

const sharkList = [
    {
        id: 21, name: "Rakesh Jhunjhunwala & Assoc.",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/rakesh_jhujhunwala.png"
    },
    {
        id: 22, name: "Radhakishan Damani",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/radhakishan_damani.png"
    },
    {
        id: 23, name: "Premji & Assoc.",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/azim_premji.png"
    },
    {
        id: 24, name: "Mukul Agrawal",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/mukul_agarwal.png"
    },
    {
        id: 25, name: "Ashish Dhawan",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/ashish_dhawan.png"
    },
    {
        id: 26, name: "Ashish Kacholia",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/ashish_kacholia.png"
    },
    {
        id: 27, name: "Anil Kumar Goel & Assoc.",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/anil_kumar_goel.png"
    },
    {
        id: 28, name: "Bhavook Tripathi",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/bhavook_tripathi.png"
    },
    {
        id: 29, name: "Vijay Kishanlal Kedia",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/vijay_kishanlal_kedia.png"
    },
    {
        id: 30, name: "Dilipkumar Lakhi",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/dilip_kumar_lakhi.png"
    },
    {
        id: 31, name: "Keswani Haresh",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/keshwani_haresh.png"
    },
    {
        id: 32, name: "Ricky Ishwardas Kirpalani",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/ricky_ishwardas_kirpalani.png"
    },
    {
        id: 33, name: "Bharat Jayantilal Patel & Assoc.",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/bharat_jyantilal_patel.png"
    },
    {
        id: 34, name: "Ajay Upadhyaya",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/ajay_upadhyay.png"
    },
    {
        id: 35, name: "Dolly Khanna",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/dolly_khanna.png"
    },
]
export default function SharksSection() {
    return (
        <section id='Sharks' className='bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${results_background.src})` }} >
            <div className=" max-w-screen-xl mx-auto lg:px-8 ">
                <p className="py-12 lg:py-4 text-center text-xl lg:text-3xl font-extrabold text-[#414141]">
                    Track the portfolios of Shark investors
                </p>
                <Swiper
                    speed={300}
                    effect={"coverflow"}
                    grabCursor={true}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    spaceBetween={0}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 5,
                        depth: 100,
                        scale: 0.85,
                        modifier: 1.5,
                        slideShadows: false
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    modules={[EffectCoverflow, Autoplay]}
                    className="SharksSectionSwiper"
                >
                    {sharkList.map(ele =>
                        <SwiperSlide key={ele.id}>
                            {({ isActive }) => <div className='flex flex-col justify-center items-center'>
                                <Image width={80} height={80} src={ele.imageUrl} className='rounded-full w-20 lg:w-24 shadow-xl' alt='shark-logo' />
                                {isActive &&
                                    <p className="mt-5 text-center text-sm lg:text-xl lg:font-extrabold text-[#414141]">
                                        {ele.name?.slice(0, 20)}
                                    </p>}
                            </div>}
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className='flex justify-evenly items-end mt-10 lg:mt-6'>
                    <Image src={result_screen1} className='hidden lg:block w-[232px] object-contain' alt='demo image' width={210} height={'auto'} />
                    <Image src={result_screen1} className='w-[264px] object-contain' alt='demo image' width={210} height={'auto'} />
                    <Image src={result_screen1} className='hidden lg:block w-[232px] object-contain' alt='demo image' width={210} height={'auto'} />
                </div>
            </div>
        </section>
    )
}
