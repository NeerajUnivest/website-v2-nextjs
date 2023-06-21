import { useState } from 'react'
import { slide as Menu } from 'react-burger-menu';
import SearchBar from './SearchBar';
import Image from 'next/image'

import logoWhite from '../assets/images/logo.png'
import Link from 'next/link';
import { GoSearch } from 'react-icons/go';
import { useWindowSize } from "@uidotdev/usehooks";


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const { width } = useWindowSize();
    return (
        <nav className={`bg-black-50 text-white fixed left-0 right-0 top-3 z-10`} >
            <div className={`font-Inter max-w-screen-xl mx-auto flex items-center lg:justify-between lg:px-8 flex-wrap backdrop-blur-sm ${showSearchBar ? ' p-2' : ' p-4'}`}>
                {showSearchBar ? (width < 976 && <SearchBar forPhone={true} setShowSearchBar={setShowSearchBar} />)
                    : <>
                        <Link href='/' className="inline-flex items-center">
                            <Image src={logoWhite} className='w-24 lg:w-36 object-contain' alt='icon' />
                        </Link>
                        <GoSearch color='#FFFFFF' size={22} onClick={() => setShowSearchBar(true)} className='cursor-pointer w-[22px] object-contain lg:hidden ml-auto mr-8' />
                        <div onClick={() => setIsOpen(true)} className='lg:hidden'>
                            <span className='block w-4 h-[2px] rounded bg-white ml-1' />
                            <span className='block w-5 h-[2px] rounded bg-white my-1' />
                            <span className='block w-4 h-[2px] rounded bg-white ml-1' />
                        </div>
                    </>}
                <div className="hidden text-base font-semibold lg:flex flex-row items-center w-auto">
                    <Link href='/stocks' className="mx-4 px-3 py-2 hover:hover:opacity-75">
                        Stocks
                    </Link>
                    <Link href='/elite' className="mx-4 px-3 py-2  hover:hover:opacity-75">
                        Elite
                    </Link>
                    <Link href='/screeners' className="mx-4 px-3 py-2  hover:hover:opacity-75">
                        Screeners
                    </Link>
                    <Link href='/blogs' className="mx-4 px-3 py-2 hover:hover:opacity-75">
                        Blogs
                    </Link>
                    {width > 976 && <SearchBar forPhone={false} />}
                </div>
            </div>
            <Menu right onStateChange={(e) => setIsOpen(e.isOpen)} isOpen={isOpen} burgerButtonClassName='hidden'>
                <Link href='/' onClick={() => setIsOpen(false)}
                    className="w-full ml-6 my-2 py-2 rounded items-center justify-center hover:hover:opacity-75">
                    Home
                </Link>
                <Link href='/stocks' onClick={() => setIsOpen(false)}
                    className="w-full ml-6 my-2 py-2 rounded items-center justify-center hover:hover:opacity-75">
                    Stocks
                </Link>
                <Link href='/elite' onClick={() => setIsOpen(false)}
                    className="w-full ml-6 my-2 py-2 rounded items-center justify-center hover:hover:opacity-75">
                    Elite
                </Link>
                <Link href='/screeners' onClick={() => setIsOpen(false)}
                    className="w-full ml-6 my-2 py-2 rounded items-center justify-center hover:hover:opacity-75">
                    Screeners
                </Link>
                <Link href='/blogs' onClick={() => setIsOpen(false)}
                    className="w-full ml-6 my-2 py-2 rounded items-center justify-center hover:hover:opacity-75">
                    Blogs
                </Link>
            </Menu>
        </nav>
    )
}
