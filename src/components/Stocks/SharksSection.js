import Image from 'next/image';
import { Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import results_background from '../../assets/images/shark_background.webp';
import shark1 from '../../assets/images/shark1.png';
import shark2 from '../../assets/images/shark2.png';
import shark3 from '../../assets/images/shark3.png';

const sharkList = [
    {
        "id": 21,
        "name": "Rakesh Jhunjhunwala & Assoc.",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087707046_rakesh_jhujhunwala.png",
    },
    {
        "id": 22,
        "name": "Radhakishan Damani",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087707185_radhakishan_damani.png",
    },
    {
        "id": 23,
        "name": "Premji & Assoc.",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087700011_azim_premji.png",
    },
    {
        "id": 24,
        "name": "Mukul Agrawal",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087703503_mukul_agarwal.png",
    },
    {
        "id": 25,
        "name": "Ashish Dhawan",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087701197_ashish_dhawan.png",
    },
    {
        "id": 26,
        "name": "Ashish Kacholia",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087702571_ashish_kacholia.png",
    },
    {
        "id": 27,
        "name": "Anil Kumar Goel & Assoc.",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087702735_anil_kumar_goel.png",
    },
    {
        "id": 28,
        "name": "Bhavook Tripathi",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087701398_bhavook_tripathi.png",
    },
    {
        "id": 29,
        "name": "Vijay Kishanlal Kedia",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087701642_vijay_kishanlal_kedia.png",
    },
    {
        "id": 30,
        "name": "Dilipkumar Lakhi",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087702891_dilip_kumar_lakhi.png",
    },
    {
        "id": 31,
        "name": "Keswani Haresh",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087703032_keshwani_haresh.png",
    },
    {
        "id": 32,
        "name": "Ricky Ishwardas Kirpalani",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087703181_ricky_ishwardas_kirpalani.png",
    },
    {
        "id": 33,
        "name": "Bharat Jayantilal Patel & Assoc.",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087701796_bharat_jyantilal_patel.png",
    },
    {
        "id": 34,
        "name": "Ajay Upadhyaya",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087703323_ajay_upadhyay.png",
    },
    {
        "id": 35,
        "name": "Dolly Khanna",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087701980_dolly_khanna.png",
    },
    {
        "id": 36,
        "name": "Govenment of Singapore",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087702163_government_of_singapore.png",
    },
    {
        "id": 37,
        "name": "Europacific Growth Fund",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087702309_europacific_growth_fund.png",
    },
    {
        "id": 38,
        "name": "Government Pension Fund Global",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087702442_government_pension_fund_global.png",
    },
    {
        "id": 39,
        "name": "Elara India Opportunities Fund Limited",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087707311_elara_india_oppurtunities_fund.png",
    },
    {
        "id": 40,
        "name": "Nalanda India Fund Limited",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087703705_nalanda_india_fund_limited.png",
    },
    {
        "id": 41,
        "name": "Smallcap World Fund Inc",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087705449_smallcap_world_fund.png",
    },
    {
        "id": 42,
        "name": "LTS Investment Fund Ltd",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087703847_lts_Investment_fund.png",
    },
    {
        "id": 43,
        "name": "New World Fund Inc",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087703977_new_world_fund.png",
    },
    {
        "id": 44,
        "name": "Amansa Holdings Private Limited",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087704113_amansa_holdings_pvt_ltd.png",
    },
    {
        "id": 45,
        "name": "East Bridge Capital Master Fund Ltd",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087704294_east_bridge_capital_fund.png",
    },
    {
        "id": 46,
        "name": "Bridge India Fund",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087704419_bridge_india_fund.png",
    },
    {
        "id": 48,
        "name": "Steadview Capital Mauritius Limited",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087704550_steadview_capital_mauritius_ltd.png",
    },
    {
        "id": 50,
        "name": "Bank Muscat India Fund",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087704681_bank_muscat_india_ltd.png",
    },
    {
        "id": 51,
        "name": "Baron Emerging Markets Fund",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087704802_baron_emerging_markets_fund.png",
    },
    {
        "id": 56,
        "name": "Abu Dhabi Investment Authority",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087704922_abu_dhabi_investment_authority.png",
    },
    {
        "id": 57,
        "name": "Elm Park Fund Limited",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087705052_elm_park_capital_fund.png",
    },
    {
        "id": 58,
        "name": "The New India Assurance Company Ltd",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087705176_the_new_india_assurance_company.png",
    },
    {
        "id": 59,
        "name": "Enam Securities Pvt Ltd",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087705302_enam_securities.png",
    },
    {
        "id": 60,
        "name": "Mirae Asset Emerging Bluechip Fund",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087705573_mirae_asset_emerging_blue_chip_fund.png",
    },
    {
        "id": 62,
        "name": "Vistra Itcl India Limited",
        "imageUrl": "https://storage.googleapis.com/production-univest/superstars_master/1694087705899_vistra_itcl.png",
    }
]
export default function SharksSection() {
    return (
        <section id='Sharks' className='bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${results_background.src})` }} >
            <div className=" max-w-screen-xl mx-auto lg:px-8 ">
                <p className="py-12 lg:pt-12 lg:pb-4 text-center text-xl lg:text-3xl font-extrabold text-[#414141]">
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
                        scale: 0.9,
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
                                <Image width={80} height={80} src={ele.imageUrl} className='rounded-full w-20 lg:w-24 shadow-xl' alt={ele.name} />
                                {isActive &&
                                    <p className="mt-5 text-center text-sm lg:text-xl lg:font-extrabold text-[#414141]">
                                        {ele.name?.slice(0, 20)}
                                    </p>}
                            </div>}
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className='flex justify-center lg:justify-evenly items-end mt-10 lg:mt-6 max-w-[100vw] overflow-hidden -space-x-10 lg:space-x-0'>
                    <Image src={shark1} className='w-[110px] lg:w-[232px] object-contain' alt='demo image' width={210} height={'auto'} />
                    <Image src={shark2} className='z-[1] w-[140px] lg:w-[264px] object-contain' alt='demo image' width={210} height={'auto'} />
                    <Image src={shark3} className='w-[110px] lg:w-[232px] object-contain' alt='demo image' width={210} height={'auto'} />
                </div>
            </div>
        </section>
    )
}
