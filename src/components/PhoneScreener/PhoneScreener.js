import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import StockCard from './StockCard';
import LazyPhoneScreener from './LazyPhoneScreener';
import { Fragment } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';

let activeStyle = {
  FontFace: 'Poppins',
  lineHeight: '21px',
  fontSize: '14px',
  color: '#00439D',
  fontWeight: '600',
  whiteSpace: 'nowrap',
  borderBottom: '2px solid #00439D',
  padding: '4px 12px',
  // scrollSnapAlign: 'center',
}

let passiveStyle = {
  FontFace: 'Poppins',
  lineHeight: '21px',
  fontSize: '12px',
  color: '#424242',
  fontWeight: '500',
  whiteSpace: 'nowrap',
  borderBottom: '2px solid #E5E5E5',
  padding: '4px 12px',
  scrollSnapAlign: 'none'
}

let screeners = [];
export default function PhoneScreener({ loading, name, screenersList, data }) {

  const router = useRouter();
  const [viewMore, setViewMore] = useState(true);

  useEffect(() => {
    screenersList?.map((ele, i) => screeners.push(ele.code))
  }, [screenersList]);


  // let element = document?.getElementById(name)
  // element?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })

  const handleSwipe = n => {
    // if (n === 0 && screeners?.indexOf(name) > 0) {
    //   navigate(`/screeners/${screeners[screeners?.indexOf(name) - 1]}?backTo=screeeners`, { replace: true })
    // } else if (n === 2 && screeners?.indexOf(name) < screeners?.length - 1) {
    //   navigate(`/screeners/${screeners[screeners?.indexOf(name) + 1]}?backTo=screeeners`, { replace: true })
    // } else if (n === 1 && screeners.indexOf(name) === 0) {
    //   navigate(`/screeners/${screeners[1]}?backTo=screeeners`, { replace: true })
    // }
  }
  return (
    <div className='pt-20'>
      <div className='bg-white z-1 shadow-sm'>
        {/* <div className='mx-4 py-3 flex flex-row justify-center'>
          <button>
            <Image src={arrowUp} className='h-6' alt='back' />
          </button>
          <div className='font-Inter leading-[28px] text-[16px] font-medium'>
            Screeners
          </div>
          <button >
            <Image src={arrowUp} className='h-6' alt='icon' />
          </button>
        </div> */}
        <div className='snap-mandatory snap-x flex flex-row justify-between pt-2 my-1 overflow-x-auto no-scrollbar scroll-smooth'>
          {screenersList?.map((ele, i) =>
            <Link key={i}
              id={ele.code}
              href={`/screeners/${ele.code}?backTo=screeeners`}
              replace={true}
              style={router.asPath === `/screeners/${ele.code}?backTo=screeeners` ? activeStyle : passiveStyle}
            > {ele.title}
            </Link>)}
        </div>
        {loading ?
          <Fragment>
            <div className='h-40 w-full animate-pulse bg-[#D9D9D9] rounded' />
            <LazyPhoneScreener />
          </Fragment>
          :
          <Fragment>
            <div className='w-full h-22 py-5' style={{ backgroundColor: data.colorCode }}>
              <div className='mx-4 flex justify-between '>
                <div className='font-Inter leading-[28px] font-medium text-[16px] text-[#FFFFFF]'>
                  {data.title}
                  <div className='font-Inter leading-[20px] font-normal text-[12px] text-[#FFFFFF]'>
                    {data.list?.length + ' stocks'}</div>
                </div>
                <div className='h-[32px]'>
                  <Image src={data.imageUrl} width={24} height={24} className='h-14' alt='screenerIcon' />
                </div>
              </div>
            </div>
            <div className='w-full mb-4 flex justify-between -mt-[1px]' style={{ backgroundImage: `linear-gradient(${data.colorCode}, #FFFFFF)` }}>
              <div className={`mx-4 w-full p-3 bg-white rounded-lg font-Inter leading-[16px] ease-in-out duration-300 shadow
               text-[10px] text-[#747474] ${viewMore ? 'min-h-10' : 'min-h-16'}`}>
                {viewMore ? (data.description?.length > 100 ? data.description.slice(0, 100) + '...' : data.description) :
                  data.description}
                {data.description?.length >= 100 &&
                  <button className='text-[#00439D] text-[10px] leading-[20px] font-medium font-Inter ml-2'
                    onClick={() => setViewMore(!viewMore)}>
                    {viewMore ? 'Read more' : 'Read less'}
                  </button>}
              </div>
            </div>
            <Swiper
              autoHeight
              initialSlide={screeners?.indexOf(name) > 0 ? 1 : 0}
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={(e) => handleSwipe(e.activeIndex)}>

              {screeners?.indexOf(name) > 0 &&
                <SwiperSlide>
                  <LazyPhoneScreener />
                </SwiperSlide>}

              <SwiperSlide>
                <StockCard data={data} name={name} />
              </SwiperSlide>

              {screeners?.indexOf(name) < screeners?.length - 1 &&
                <SwiperSlide>
                  <LazyPhoneScreener />
                </SwiperSlide>}

            </Swiper>
          </Fragment>}
      </div>
    </div>
  )
}
