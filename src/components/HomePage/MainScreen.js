import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import InviteSection from '../../elements/InviteSection';
import Card from '../../elements/Card';
import onlyGreat from '../../assets/icons/onlyGreat.webp'
import sebi from '../../assets/icons/sebi.webp'
import trackYour from '../../assets/icons/trackYour.webp'
import insight from '../../assets/icons/insight.webp'


import a from '../../assets/img/1.webp';
import b from '../../assets/img/2.webp';
import c from '../../assets/img/3.webp';
import d from '../../assets/img/4.webp';
import heroBg from '../../assets/img/heroBg.webp';
import Image from 'next/image';


let style = [{
  border: 'border-[#AC4C40]',
  bg: 'bg-[#FFDDD9]',
  shadow: 'shadow-[#FFDDD9]',
  text: 'text-[#AC4C40]',
}, {
  border: 'border-[#906C0D]',
  bg: 'bg-[#FFF4D9]',
  shadow: 'shadow-[#FFF4D9]',
  text: 'text-[#906C0D]',
}, {
  border: 'border-[#0A8A17]',
  bg: 'bg-[#DAFFD9]',
  shadow: 'shadow-[#DAFFD9]',
  text: 'text-[#0A8A17]',
}, {
  border: 'border-[#0D1A90]',
  bg: 'bg-[#D9E8FF]',
  shadow: 'shadow-[#D9E8FF]',
  text: 'text-[#0D1A90]',
}]
let content = [{
  icon: onlyGreat,
  title: 'Only great investments!',
  text: 'Know what to buy-sell hold in your portfolio',
},
{
  icon: trackYour,
  title: `Track your friend’s move`,
  text: `Instant notifications when friends buy or sell a stock`,
},
{
  icon: insight,
  title: `Insights on any stock`,
  text: `Easy to understand insights and trends on all stocks`,
},
{
  icon: sebi,
  title: 'Trade ideas by SEBI advisors',
  text: 'Investments ideas from trusted advisors',
},]

let heroImages = [a, 'https://placehold.co/450x300/yellow/white', 'https://placehold.co/450x300/green/white', 'https://placehold.co/450x300/blue/white']
var swiper = null;

export default function MainScreen() {
  useEffect(() => {
    setTimeout(() => {
      swiper = document.getElementById('mainSwiper')?.swiper
    }, 1500)
  }, [])

  const [state, setState] = useState(0);

  return (
    <div className=''>
      <div className='flex flex-col md:flex-row-reverse mb-4'>
        <div className="basis-full md:basis-1/2 flex content-center bg-[length:320px_320px] lg:bg-[length:550px_550px]" style={{
          backgroundImage: `url(${heroBg})`, backgroundPosition: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }} data-aos="fade-left">
          <div className='mx-auto h-[300px] lg:h-[550px]'>
            <Image
              src={heroImages[0]}
              className=' h-[300px] lg:h-[550px] object-contain'
              alt='demo image'
              width={'auto'}
              height={'auto'}
            />
          </div>
        </div>
        <div className="basis-full md:basis-1/2 flex content-center" data-aos="fade-right">
          <InviteSection />
        </div>
      </div>
      <div className='lg:pl-14 lg:pr-8' data-aos="fade-up">
        <Swiper
          // onSwiper={setSwiper}
          id='mainSwiper'
          slidesPerView={4}
          breakpoints={{
            300: {
              slidesPerView: 1.5,
              centeredSlides: true
            },
            420: {
              slidesPerView: 2,
              centeredSlides: true
            },
            640: {
              slidesPerView: 2.5,
              centeredSlides: false
            },
            720: {
              slidesPerView: 3.5,
              centeredSlides: false
            },
            1100: {
              slidesPerView: 4,
              centeredSlides: false,
            }
          }}
        >
          {style.map((ele, i) =>
            <SwiperSlide key={i} >
              <Card style={ele} content={content[i]} activeCard={state === i && state} active={state === i ? true : false} />
            </SwiperSlide>)}
        </Swiper>
      </div>
    </div>
  )
}
