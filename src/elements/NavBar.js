import { useState } from 'react'
import { slide as Menu } from 'react-burger-menu';
import SearchBar from './SearchBar';
import Image from 'next/image'

import logoBlack from '../assets/images/logoBlack.png'
import Link from 'next/link';
import { GoSearch } from 'react-icons/go';
import { useWindowSize } from "@uidotdev/usehooks";
import { useRouter } from 'next/router';


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const { width } = useWindowSize();
    const { route } = useRouter();
    return (
        <nav className={`bg-[rgba(252,252,252,0.4)] text-white fixed left-0 right-0 top-[80px] md:top-3 z-10`} >
            <div className={`font-Inter max-w-screen-xl mx-auto flex items-center lg:justify-between lg:px-8 flex-wrap backdrop-blur-sm ${showSearchBar ? ' p-2' : ' p-4'}`}>
                {showSearchBar ? (width < 976 && <SearchBar forPhone={true} setShowSearchBar={setShowSearchBar} />)
                    : <>
                        <Link href='/' className="inline-flex items-center">
                            <Image src={logoBlack} className='w-24 lg:w-36 object-contain' alt='icon' />
                        </Link>
                        <GoSearch color='#202020' size={22} onClick={() => setShowSearchBar(true)} className='cursor-pointer w-[22px] object-contain lg:hidden ml-auto mr-8' />
                        <div onClick={() => setIsOpen(true)} className='lg:hidden'>
                            <span className='block w-4 h-[2px] rounded bg-black ml-1' />
                            <span className='block w-5 h-[2px] rounded bg-black my-1' />
                            <span className='block w-4 h-[2px] rounded bg-black ml-1' />
                        </div>
                    </>}
                <div className="hidden text-base font-semibold lg:flex flex-row items-center w-auto text-black">
                    <Link href='/stocks' className={`mx-4 px-3 py-2 hover:opacity-75 rounded-lg duration-200 ease-in-out ${route === '/stocks' ? 'bg-gradient-to-t from-[#222832] to-[#343434] text-white' : ''}`}>
                        Stocks
                    </Link>
                    <Link href='/elite' className={`mx-4 px-3 py-2 hover:opacity-75 rounded-lg duration-200 ease-in-out ${route === '/elite' ? 'bg-gradient-to-t from-[#222832] to-[#343434] text-white' : ''}`}>
                        Elite
                    </Link>
                    <Link href='/pro' className={`mx-4 px-3 py-2  hover:opacity-75 rounded-lg duration-200 ease-in-out ${route === '/pro' ? 'bg-gradient-to-t from-[#FF8415] to-[#FFCA3F]' : ''}`}>
                        Pro
                    </Link>
                    <Link href='/screeners' className={`mx-4 px-3 py-2 hover:opacity-75 rounded-lg duration-200 ease-in-out ${route === '/screeners' ? 'bg-gradient-to-t from-[#222832] to-[#343434] text-white' : ''}`}>
                        Screeners
                    </Link>
                    <div className={`mx-4 px-3 py-2 rounded-lg duration-200 ease-in-out hover:bg-gradient-to-t hover:from-[#222832] hover:to-[#343434] hover:text-white cursor-pointer`}
                        onClick={() => window.open('https://univest.in/blogs', '_self')}>
                        Blogs
                    </div>
                    {width > 976 && <SearchBar forPhone={false} />}
                </div>
            </div>
            <Menu right onStateChange={(e) => setIsOpen(e.isOpen)} isOpen={isOpen} burgerButtonClassName='hidden'>
                <Link href='/' onClick={() => setIsOpen(false)}
                    className="w-full ml-4 my-2 py-2 px-4 rounded items-center justify-center hover:bg-[#ffffff20]">
                    Home
                </Link>
                <Link href='/stocks' onClick={() => setIsOpen(false)}
                    className="w-full ml-4 my-2 py-2 px-4 rounded items-center justify-center hover:bg-[#ffffff20]">
                    Stocks
                </Link>
                <Link href='/elite' onClick={() => setIsOpen(false)}
                    className="w-full ml-4 my-2 py-2 px-4 rounded items-center justify-center hover:bg-[#ffffff20]">
                    Elite
                </Link>
                <Link href='/pro' onClick={() => setIsOpen(false)}
                    className="w-full ml-4 my-2 py-2 px-4 rounded items-center justify-center hover:bg-[#ffffff20]">
                    Pro
                </Link>
                <Link href='/screeners' onClick={() => setIsOpen(false)}
                    className="w-full ml-4 my-2 py-2 px-4 rounded items-center justify-center hover:bg-[#ffffff20]">
                    Screeners
                </Link>
                <div onClick={() => { setIsOpen(false); window.open('https://univest.in/blogs', '_self') }}
                    className="w-full ml-4 my-2 py-2 px-4 rounded items-center justify-center hover:bg-[#ffffff20]">
                    Blogs
                </div>
            </Menu>
        </nav>
    )
}
