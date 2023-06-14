import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import forEmpty from '../../../assets/img/forEmpty.webp'
import moment from 'moment';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { UtilsContext } from '../../UtilsProvider/UtilsProvider';
import Image from 'next/image'


function News({ name }) {
    //mixpanel
    // const utils = useContext(UtilsContext)

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.apiBaseURL}/resources/stock-details/news?fin-code=${name}`)
            .then((res) => setData(res.data))
    }, [name]);


    return (
        <div className='relative pt-6'>
            <div id='news' className='absolute -top-40' />
            <div className='font-Inter text-[16px] text-black flex flex-row justify-between mx-4 mb-4 font-semibold'>
                <div className='flex flex-row'>
                    <div>News</div>
                </div>
            </div>
            <div className='font-Inter text-[12px] flex flex-row justify-between ml-2 my-4 overflow-x-auto no-scrollbar'>
                {data[1] ? <Swiper
                    spaceBetween={0}
                    slidesPerView={1.7}
                    breakpoints={{
                        768: {
                            slidesPerView: 3.1,
                            spaceBetween: 15
                        },
                        986: {
                            slidesPerView: 4.1,
                            spaceBetween: 20
                        },
                    }}
                >
                    {data.map((ele, index) =>
                        <SwiperSlide key={index}>
                            <a href={ele.url} target="_blank">
                                <div className='h-[170px] min-w-[190px] ml-2 flex flex-col rounded-[8px] border-[1px] border-[#E5E5E5]'>
                                    <div className='min-w-[188px] h-[100px]'>
                                        <Image alt="news" src={ele.imageUrl} className='w-full h-full rounded-t-[8px]' />
                                    </div>
                                    <div className='p-2 font-Inter'>
                                        <div className='text-[#202020] text-[10px] font-medium leading-[16px] h-8 overflow-hidden'>
                                            {ele.title}
                                        </div>
                                        <div className='flex flex-row text-[#202020] text-[8px] font-normal leading-[16px] mt-1.5'>
                                            <div>{moment(ele.publishedAt).format("DD MMM YYYY")} </div>
                                            <div className='ml-auto'>{ele.source}</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    )}
                </Swiper> :
                    data[0] ?
                        <div className='h-[170px] w-[190px] ml-2 flex flex-col rounded-[8px] border-[1px] border-[#E5E5E5]'>
                            <div className='w-[188px] h-[100px]'>
                                <Image alt="news" src={data[0].imageUrl} className='w-full h-full rounded-t-[8px]' />
                            </div>
                            <div className='p-2 font-Inter'>
                                <div className='text-[#202020] text-[10px] font-medium leading-[16px]'>
                                    {data[0].title?.length > 40 ? `${data[0].title?.slice(0, 40)}...` : data[0].title}
                                </div>
                                <div className='flex flex-row text-[#202020] text-[8px] font-normal leading-[16px] mt-1.5'>
                                    <div>{moment(data[0].publishedAt).format("DD MMM YYYY")} </div>
                                    <div className='ml-auto'>{data[0].source}</div>
                                </div>
                            </div>
                        </div> :
                        <Image src={forEmpty} alt='icon' className='mx-auto h-[200px] w-[200px]' />}
            </div>
        </div>
    )
}

export default News;