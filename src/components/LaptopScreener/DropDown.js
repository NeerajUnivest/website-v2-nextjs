import { useState } from 'react'
import newSquare from '../../assets/icn/newSquare.webp';
import premium from '../../assets/icn/premium.webp';
import arrowUp from '../../assets/icn/arrowUp.png'
import arrowDown from '../../assets/icn/arrowDown.png'
import arrowLeft from '../../assets/icn/arrowLeft.webp'
import { useEffect } from 'react';
import DownloadNow from '../../elements/DownloadNow/DownloadNow';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';


const activeStyle = {
    backgroundColor: '#F3F9FE',
    fontWeight: 600,
    color: '#202020',
    width: 100 + '%',
    borderTopWidth: 1 + 'px',
    display: 'flex',
    flexDirection: 'row',
    padding: 12 + 'px',
    position: 'relative'
}
const anActiveStyle = {
    backgroundColor: '#ffffff',
    color: '#202020',
    borderTopWidth: 1 + 'px',
    display: 'flex',
    flexDirection: 'row',
    padding: 12 + 'px',
    position: 'relative'
}
export default function DropDown({ list, selected }) {
    const router = useRouter();

    const [show, setShow] = useState(selected);
    useEffect(() => setShow(selected), [selected])

    const handleDropdown = (cat) => {
        setShow(cat.categoryId)
        router.push(`/screeners/${list.screenersList?.filter(f => f.categoryId === cat.categoryId)[0].code}`)
    }
    return (<div className=' sticky -top-[16px] py-10 ml-4'>
        <div className='m-4 font-Inter border-[2px] rounded-lg overflow-hidden'>
            <div className='py-2 flex flex-row'>
                <div className='mx-4 '>
                    <Link href='/screeners'>
                        <Image src={arrowLeft} alt='icon' className='mt-2 max-h-4 max-w-4 ' />
                    </Link>
                </div>
                <div className='text-[20px] leading-[32px] text-[#202020] font-semibold '>
                    Go to screeners home
                </div>
            </div>
            {list.screenersCategories?.map((cat, i) =>
                <div key={i}>
                    <div className={`border-t flex flex-row justify-between cursor-pointer w-fdivl px-4 py-2 text-[16px] text-[#202020] leading-[28px] text-left ${show === cat.categoryId && 'bg-[#c2e0f9] cursor-default font-semibold'}`} onClick={() => handleDropdown(cat)}>
                        {cat.categoryTitle}
                        <Image src={show === cat.categoryId ? arrowUp : arrowDown} alt='icon' className='h-3 mt-2' />
                    </div>
                    <div className={`ease-in-out duration-500 overflow-y-auto no-scrollbar ${show === cat.categoryId ? 'max-h-[275px]' : 'max-h-0 '}`}>
                        {list.screenersList?.filter(f => f.categoryId === cat.categoryId)?.map((ele, i) =>
                            <Link href='#' key={i}
                                style={router.asPath === `/screeners/${ele.code}?backTo=screeeners` ? activeStyle : anActiveStyle}
                            >
                                <div className='relative h-8 w-8 m-0'>
                                    <Image src={ele.imageUrl} width={20} height={20} alt='logo' className='max-h-8 max-w-8 ' />
                                    {ele.premium && <Image src={premium} width={20} alt='logo' className='absolute -bottom-2 left-4 h-[20px] w-[20px]' />}
                                </div>
                                <div className='ml-3 '>
                                    <div className='font-Inter text-[14px] leading-[24px] text-[#202020]'>
                                        {ele.title}
                                    </div>
                                    <div className='text-left font-Inter text-[10px] leading-[16px] text-[#606060]'>
                                        {ele.stocksCount} Stocks
                                    </div>
                                </div>
                                {ele.newFlag && <Image src={newSquare} alt='icon' className='absolute top-5 right-3 h-[16px]' />}
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
