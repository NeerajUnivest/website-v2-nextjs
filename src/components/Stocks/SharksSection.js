import Image from 'next/image';
import { Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import results_background from '../../assets/images/shark_background.webp';
import result_screen1 from '../../assets/images/result_screen1.png';

const sharkList = [
    {
        id: 64, name: "Punjab National Bank",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/punjab_national_bank.png"
    },
    {
        id: 65, name: "The Oriental Insurance Company Ltd",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/the_oriental_insurance_company.png"
    },
    {
        id: 66, name: "Jm Financial Services Limited",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/jm_financial.png"
    },
    {
        id: 67, name: "Plutus Wealth",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/plutus_wealth.png"
    },
    {
        id: 68, name: "Abakkus Fund",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/abakkus_fund.png"
    },
    {
        id: 69, name: "Goldman Sachs (Singapore) Pte",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/goldman_sachs.png"
    },
    {
        id: 70, name: "Bajaj Allianz Life Insurance Company Ltd.",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/bajaj_allianz.png"
    },
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
    {
        id: 36, name: "Govenment of Singapore",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/government_of_singapore.png"
    },
    {
        id: 37, name: "Europacific Growth Fund",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/europacific_growth_fund.png"
    },
    {
        id: 38, name: "Government Pension Fund Global",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/government_pension_fund_global.png"
    },
    {
        id: 39, name: "Elara India Opportunities Fund Limited",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/elara_india_oppurtunities_fund.png"
    },
    {
        id: 40, name: "Nalanda India Fund Limited",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/nalanda_india_fund_limited.png"
    },
    {
        id: 41, name: "Smallcap World Fund Inc",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/smallcap_world_fund.png"
    },
    {
        id: 42, name: "LTS Investment Fund Ltd",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/lts_Investment_fund.png"
    },
    {
        id: 43, name: "New World Fund Inc",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/new_world_fund.png"
    },
    {
        id: 44, name: "Amansa Holdings Private Limited",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/amansa_holdings_pvt_ltd.png"
    },
    {
        id: 45, name: "East Bridge Capital Master Fund Ltd",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/east_bridge_capital_fund.png"
    },
    {
        id: 46, name: "Bridge India Fund",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/bridge_india_fund.png"
    },
    {
        id: 48, name: "Steadview Capital Mauritius Limited",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/steadview_capital_mauritius_ltd.png"
    },
    {
        id: 50, name: "Bank Muscat India Fund",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/bank_muscat_india_ltd.png"
    },
    {
        id: 51, name: "Baron Emerging Markets Fund",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/baron_emerging_markets_fund.png"
    },
    {
        id: 55, name: "India Capital Fund Limited",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/india_capital_fund.png"
    },
    {
        id: 56, name: "Abu Dhabi Investment Authority",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/abu_dhabi_investment_authority.png"
    },
    {
        id: 57, name: "Elm Park Fund Limited",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/elm_park_capital_fund.png"
    },
    {
        id: 58, name: "The New India Assurance Company Ltd",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/the_new_india_assurance_company.png"
    },
    {
        id: 59, name: "Enam Securities Pvt Ltd",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/enam_securities.png"
    },
    {
        id: 60, name: "Mirae Asset Emerging Bluechip Fund",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/mirae_asset_emerging_blue_chip_fund.png"
    },
    {
        id: 62, name: "Vistra Itcl India Limited",
        imageUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/vistra_itcl.png"
    }
]
export default function SharksSection() {
    return (
        <section id='Sharks' className='bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${results_background.src})` }} >
            <div className="pt-12 lg:pt-4 max-w-screen-xl mx-auto lg:px-8 ">
                <p className="text-center text-xl lg:text-3xl font-extrabold text-[#414141]">
                    Track the portfolios of Shark investors
                </p>
                <Swiper
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
                        delay: 500,
                        disableOnInteraction: false
                    }}
                    modules={[EffectCoverflow, Autoplay]}
                    className="SharksSectionSwiper"
                >
                    {sharkList.map(ele =>
                        <SwiperSlide key={ele.id}>
                            <Image width={80} height={80} src={ele.imageUrl} className='rounded-full w-20 lg:w-24' alt='shark-logo' />
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className='flex justify-evenly items-end mt-10 lg:mt-16'>
                    <Image src={result_screen1} className='hidden lg:block w-[210px] object-contain' alt='demo image' width={210} height={'auto'} />
                    <Image src={result_screen1} className='w-[240px] object-contain' alt='demo image' width={210} height={'auto'} />
                    <Image src={result_screen1} className='hidden lg:block w-[210px] object-contain' alt='demo image' width={210} height={'auto'} />
                </div>
            </div>
        </section>
    )
}
