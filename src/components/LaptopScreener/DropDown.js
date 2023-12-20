import { useState } from 'react'
import newSquare from '../../assets/icn/newSquare.webp';
import premium from '../../assets/icn/premium.png';
import arrowUp from '../../assets/icn/arrowUp.png'
import arrowDown from '../../assets/icn/arrowDown.png'
import arrowLeft from '../../assets/icn/arrowLeft.webp'
import { useEffect } from 'react';
import DownloadNow from '../../elements/DownloadNow/DownloadNow';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsArrowLeft } from 'react-icons/bs';
import { SlArrowDown } from 'react-icons/sl'

const activeStyle = {
    backgroundColor: '#F3F9FE',
    fontWeight: 600,
    color: '#202020',
    width: 100 + '%',
    borderTopWidth: 1 + 'px',
    display: 'flex',
    flexDirection: 'row',
    padding: 12 + 'px',
    position: 'relative',
    alignItems: 'center'
}
const anActiveStyle = {
    backgroundColor: '#ffffff',
    color: '#202020',
    borderTopWidth: 1 + 'px',
    display: 'flex',
    flexDirection: 'row',
    padding: 12 + 'px',
    position: 'relative',
    alignItems: 'center'
}
export default function DropDown({ screenersCategories, screenersList, selected, name }) {
    const router = useRouter();

    const [show, setShow] = useState(selected);
    useEffect(() => setShow(selected), [selected])

    const handleDropdown = (cat) => {
        setShow(cat.categoryId)
        console.log(screenersList, cat);
        router.push(`/screeners/${screenersList?.filter(f => f.categoryId === cat.categoryId)[0]?.code}`)
    }
    return (<div className=' sticky top-[60px] py-10 ml-4'>
        <div className='m-4 font-Inter border-[2px] rounded-lg overflow-hidden'>
            <Link href='/screeners'>
                <div className='py-2 flex items-center'>
                    <BsArrowLeft className='mx-4' size={25} />
                    <div className='text-[18px] leading-[32px] text-[#202020] font-semibold '>
                        Go to screeners home
                    </div>
                </div>
            </Link>

            {screenersCategories?.map((cat, i) =>
                <div key={i}>
                    <div className={`border-t flex items-center justify-between cursor-pointer w-full px-4 py-2 text-[16px] text-[#202020] leading-[28px] text-left ${show === cat.categoryId && 'bg-[#c2e0f9] cursor-default font-semibold'}`} onClick={() => handleDropdown(cat)}>
                        {cat.categoryTitle}
                        <SlArrowDown size={20} className={show === cat.categoryId ? 'rotate-180' : 'rotate-0'} />
                    </div>
                    <div className={`ease-in-out duration-500 overflow-y-auto no-scrollbar ${show === cat.categoryId ? 'max-h-[275px]' : 'max-h-0 '}`}>
                        {screenersList?.filter(f => f.categoryId === cat.categoryId)?.map((ele, i) =>
                            <Link href={`/screeners/${ele.code}`} key={i}
                                style={name === ele.code ? activeStyle : anActiveStyle}>
                                <div className='relative h-8 w-8 m-0'>
                                    <Image src={ele.imageUrl} width={32} height={32} alt={ele.code} className='max-h-8 max-w-8 ' />
                                    {ele.premium && <Image src={premium} width={20} alt='logo' className='absolute -bottom-2 left-4 h-[20px] w-[20px]' />}
                                </div>
                                <div className='ml-3 '>
                                    <div className='font-Inter text-[14px] leading-[24px] text-[#202020] line-clamp-1'>
                                        {ele.title}
                                    </div>
                                    <div className='text-left font-Inter text-[10px] leading-[16px] text-[#606060]'>
                                        {ele.stocksCount} Stocks
                                    </div>
                                </div>
                                {ele.newFlag && <Image src={newSquare} alt='icon' className='absolute bottom-3 right-3 w-8' />}
                            </Link>)}
                    </div>
                </div>
            )}
        </div>
        <div className='mx-4'>
            <DownloadNow />
        </div>
    </div>)
}
