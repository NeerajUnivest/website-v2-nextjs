import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import moment from "moment/moment";
import { useAxios } from "@/hooks/useAxios";
import { TbTriangleFilled } from "react-icons/tb";
import { Autoplay, Pagination } from "swiper";
import { BlackButton, NewsCategoryChip } from "@/elements/Button/Button";


export default function NewsSection() {
    const { data, loading } = useAxios({ method: 'GET', url: `/resources/convey/news?page=0` });
    return (
        <section id="News" className='font-Inter max-w-screen-xl mx-auto lg:px-8 py-10 bg-[#FFFFFF]'>
            <p className="mt-8 lg:mt-5 mb-8 lg:mb-10 text-center text-xl lg:text-3xl font-extrabold text-black">
                Now read all financial news<br className="lg:hidden block"/> in about 60 words
            </p>
            <div className="mx-4 px-[1px] pt-6 pb-5 lg:pt-12 rounded-[32px] bg-gradient-to-tr to-[#ffd87d90] from-[#F1F1F1] relative">
                {!loading &&
                    <Swiper
                        grabCursor={true}
                        loop={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        spaceBetween={0}
                        className="NewsSection"
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true
                        }}
                        modules={[Autoplay, Pagination]}
                    >
                        {data.data?.map(ele =>
                            <SwiperSlide key={ele.id}>
                                <div className="p-3 overflow-hidden flex flex-col justify-between h-full select-none">
                                    <img className="rounded-t-lg mx-auto w-full h-[132px] lg:h-[164px] object-cover" src={ele.img_large} alt={ele.title} width={200} height={200} />
                                    <p className="my-1 lg:my-2 line-clamp-2 text-xs lg:text-base font-bold text-black">
                                        {ele.title}
                                    </p>
                                    {ele.companies?.[0] &&
                                        <div className="flex items-center ">
                                            {ele.companies?.slice(0, 2).map((e, i) =>
                                                <div key={i} className='flex items-center font-Inter border-r border-[#EDEDED] pr-1 mr-1'>
                                                    <span className="text-[10px] font-medium text-[#606060] mr-1.5">{e.nseSymbol ?? e.bseSymbol}</span>
                                                    <TbTriangleFilled size={8} color={e.stockStatus === 'DOWN' ? '#EB4E2C' : '#26A649'} />
                                                    <span className={`text-[10px] ml-1 ${e.stockStatus === 'DOWN' ? 'text-[#EB4E2C]' : 'text-[#26A649]'}`}>{e.todaysChange?.toFixed(2)}</span>
                                                </div>)}
                                            <span className="text-[10px] font-medium text-[#606060] mr-1.5">+3 stocks</span>
                                        </div>}
                                    <div className="flex items-center">
                                        <span className="text-[8px] font-medium text-[#414141]">{ele.source}</span>
                                        <span className="mx-2 h-[5px] w-[5px] bg-[#414141] rounded-full" />
                                        <span className="text-[8px] font-medium text-[#414141]">{moment(ele.createdAt).format("DD MMM YYYY")}</span>
                                    </div>
                                </div>
                            </SwiperSlide>)}
                    </Swiper>}
                <span className="absolute bottom-6 right-6 text-[10px] lg:text-sm font-medium text-[#414141]">
                    Powered by
                </span>
            </div>
            <div className="mx-4 mt-8 py-2 lg:mt-12 flex flex-col lg:flex-row items-center justify-between gap-y-4 lg:gap-x-5">
                <div className="text-sm lg:text-base font-semibold text-black">
                    Explore by categories
                </div>
                <div className="grid grid-cols-3 lg:grid-flow-col grid-flow-row lg:grid-rows-1 gap-3">
                    { [
        {
            "id": 1,
            "title": "Stocks",
            "imageUrl": "https://univest-prod.s3.ap-south-1.amazonaws.com/convey-category-symbols/candlestick.png"
        },
        {
            "id": 2,
            "title": "Business",
            "imageUrl": "https://univest-prod.s3.ap-south-1.amazonaws.com/convey-category-symbols/growth.png"
        },
        {
            "id": 3,
            "title": "IPOs",
            "imageUrl": "https://univest-prod.s3.ap-south-1.amazonaws.com/convey-category-symbols/ipo.png"
        },
        {
            "id": 6,
            "title": "Startups",
            "imageUrl": "https://univest-prod.s3.ap-south-1.amazonaws.com/convey-category-symbols/start-up.png"
        },
        {
            "id": 7,
            "title": "World",
            "imageUrl": "https://univest-prod.s3.ap-south-1.amazonaws.com/convey-category-symbols/worldwide.png"
        }
    ]?.map(ele => <NewsCategoryChip key={ele.title} icon={ele.imageUrl} text={ele.title} />)}
                </div>
                <BlackButton onClick={() => null} text='Read on app' className='px-6 lg:px-8 py-2 text-sm lg:text-base font-extrabold' />
            </div>
        </section>
    )
}
