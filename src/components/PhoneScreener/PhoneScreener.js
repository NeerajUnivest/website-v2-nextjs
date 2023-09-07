import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import StockCard from './StockCard';
import LazyPhoneScreener from './LazyPhoneScreener';
import { Fragment } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { usePageLoading } from '@/hooks/usePageLoading';
import proIcon from '../../assets/images/proIcon.png';
import { BlackButton } from '@/elements/Button/Button';
import { popUp } from '@/elements/PopUp/PopUp'
import forEmpty from '../../assets/images/forEmpty.webp'

let activeStyle = {
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
  lineHeight: '21px',
  fontSize: '12px',
  color: '#424242',
  fontWeight: '500',
  whiteSpace: 'nowrap',
  borderBottom: '2px solid #E5E5E5',
  padding: '4px 12px',
  scrollSnapAlign: 'none'
}

export default function PhoneScreener({ name, screenersList, data, codeList }) {
  const router = useRouter();
  const [viewMore, setViewMore] = useState(true);
  const { isPageLoading } = usePageLoading();

  useEffect(() => {
    let element = document?.getElementById(name)
    element?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
  }, [name]);

  const handleSwipe = n => {
    if (n === 0 && codeList?.indexOf(name) > 0) {
      router.replace(`/screeners/${codeList[codeList?.indexOf(name) - 1]}`)
    } else if (n === 2 && codeList?.indexOf(name) < codeList?.length - 1) {
      router.replace(`/screeners/${codeList[codeList?.indexOf(name) + 1]}`)
    } else if (n === 1 && codeList?.indexOf(name) === 0) {
      router.replace(`/screeners/${codeList[1]}`)
    }
  }

  return (
    <div className='pt-20 md:hidden bg-white z-1 shadow-sm'>
      <div className='snap-mandatory snap-x flex flex-row justify-between pt-2 my-1 overflow-x-auto no-scrollbar scroll-smooth'>
        {screenersList?.filter(e => e?.categoryId)?.map((ele, i) =>
          <Link key={i}
            id={ele.code}
            href={`/screeners/${ele.code}`}
            style={name === ele.code ? activeStyle : passiveStyle}
          > {ele.title}
          </Link>)}
      </div>

      <Fragment>
        <div className='w-full h-22 py-5' style={{ backgroundColor: data.colorCode }}>
          <div className='mx-4 flex justify-between '>
            <div className='font-Inter leading-[28px] font-medium text-[16px] text-[#FFFFFF]'>
              {data.title}
              <div className='font-Inter leading-[20px] font-normal text-[12px] text-[#FFFFFF]'>
                {data.list?.length + ' stocks'}</div>
            </div>
            <Image src={data.imageUrl} width={56} height={56} alt='screener logo' />
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
        {isPageLoading ? <LazyPhoneScreener />
          : <Swiper
            autoHeight
            initialSlide={codeList?.indexOf(name) === 0 ? 0 : 1}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={(e) => handleSwipe(e.activeIndex)}
          >
            {codeList?.indexOf(name) > 0 &&
              <SwiperSlide>
                <LazyPhoneScreener />
              </SwiperSlide>}

            <SwiperSlide>
              <div className='relative min-h-[450px]'>
                {data.premium ?
                  <div className='select-none font-Inter z-10 absolute top-0 h-[460px] w-full bg-[#FFFFFF78] backdrop-blur-sm px-4' >
                    <div className='mt-10 w-full h-[352px] bg-[#333333] rounded-2xl flex flex-col justify-between'>
                      <div>
                        <div className='my-6 flex items-center justify-center'>
                          <Image src={proIcon} alt="proLogo" className='w-16 object-contain' />
                          <p className='ml-2 text-[24px] landing-[40px] uni-wise-gradient2 font-extrabold'>
                            membership
                          </p>
                        </div>
                        <p className='mb-1 text-center text-[14px] landing-[24px] text-white font-extrabold'>
                          This screener is only available on the app
                        </p>
                        <p className='text-center text-[12px] landing-[20px] text-[#BCBCBC]'>
                          Unlock exclusive access<br />
                          with Univest Pro
                        </p>
                      </div>
                      <div className=' flex flex-col items-center justify-center  font-Inter bg-[#FFFFFF1a] rounded-t-2xl'>
                        <img src='https://storage.googleapis.com/app-assets-univest/website-assets/screener_icons.png' alt="icon" className='w-full object-contain mt-3 mb-6' />
                        <BlackButton className='mb-6 py-2 w-[152px] rounded-full bg-gradient-to-b to-[#FF8415] from-[#FFCA3F] mx-auto text-sm text-black leading-4 font-bold border-none'
                          onClick={() => popUp.open()}
                          text={'Download Now'} />
                      </div>
                    </div>
                  </div>
                  : (
                    data?.list?.length > 0 ?
                      data.list?.map((ele, i) => <StockCard key={i} ele={ele} data={data} name={name} />)
                      : <div className='pt-20 min-h-[70vh]'>
                        <Image src={forEmpty} alt='icon' className='mx-auto' width={250} />
                        <div className='text-center font-Inter text-[16px] landing-[28px] text-black font-semibold mt-3'>
                          Nothing to show for now
                        </div>
                        <div className='text-center font-Inter text-[12px] landing-[18px] text-[#414141] mt-2'>
                          Don’t worry we’l keep you posted
                        </div>
                      </div>
                  )}
              </div>
            </SwiperSlide>

            {codeList?.indexOf(name) < codeList?.length - 1 &&
              <SwiperSlide>
                <LazyPhoneScreener />
              </SwiperSlide>}
          </Swiper>}
      </Fragment>
    </div>
  )
}
