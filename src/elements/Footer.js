

import logoWhite from '../assets/img/logoWhite.webp'
import Image from 'next/image'
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsApple, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';

export default function Footer() {
    return (
        <footer aria-label="Univest Footer" className="bg-black text-white font-Inter">
            <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-6 sm:px-6 lg:space-y-8 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <Image src={logoWhite} className='w-32 lg:w-40 object-contain' alt='icon' />
                        <p className="max-w-xs text-sm lg:text-base font-semibold mt-4">
                            100% Safe & Secure.
                        </p>
                        <p className="max-w-xs text-xs lg:text-sm mt-4">
                            Univest encrypts all data and transactions to ensure a completely secure experience
                            for our members.
                        </p>

                        <ul className="flex gap-6 mt-8">
                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition hover:opacity-75"
                                >
                                    <span className="sr-only">Facebook</span>
                                    <div className='bg-[#337FFF] p-2 rounded-full'>
                                        <FaFacebookF color='#FFFFFF' size={16} />
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition hover:opacity-75"
                                >
                                    <span className="sr-only">LinkedIn</span>
                                    <div className='bg-[#006699] p-2 rounded-full'>
                                        <FaLinkedinIn color='#FFFFFF' size={16} />
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition hover:opacity-75"
                                >
                                    <span className="sr-only">Instagram</span>
                                    <div className='instabg p-2 rounded-full'>
                                        <BsInstagram color='#FFFFFF' size={16} />
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition hover:opacity-75"
                                >
                                    <span className="sr-only">Twitter</span>
                                    <div className='bg-[#33CCFF] p-2 rounded-full'>
                                        <BsTwitter color='#FFFFFF' size={16} />
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition hover:opacity-75"
                                >
                                    <span className="sr-only">YouTube</span>
                                    <div className='bg-[#FF0000] p-2 rounded-full'>
                                        <BsYoutube color='#FFFFFF' size={16} />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-3 lg:col-span-2 lg:grid-cols-4">
                        <div>
                            <p className="font-medium text-xs lg:text-sm">PRODUCTS</p>

                            <nav aria-label="Footer Navigation - PRODUCTS" className="mt-6">
                                <ul className="space-y-3  text-xs lg:text-smtext-sm">
                                    <li>
                                        <a href="#" className="transition hover:opacity-75">
                                            Elite
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="transition hover:opacity-75">
                                            Screeners
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="transition hover:opacity-75">
                                            Shark stocks
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="transition hover:opacity-75">
                                            Markets
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div>
                            <p className="font-medium text-xs lg:text-sm">UNIVEST</p>

                            <nav aria-label="Footer Navigation - UNIVEST" className="mt-6">
                                <ul className="space-y-3  text-xs lg:text-smtext-sm">
                                    <li>
                                        <a href="#" className="transition hover:opacity-75">
                                            About us
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="transition hover:opacity-75">
                                            Meet the Team
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="transition hover:opacity-75">
                                            Blogs
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="transition hover:opacity-75">
                                            Blogs
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div>
                            <p className="font-medium text-xs lg:text-sm">SUPPORT</p>

                            <nav aria-label="Footer Navigation - SUPPORT" className="mt-6">
                                <ul className="space-y-3  text-xs lg:text-smtext-sm">
                                    <li>
                                        <a href="#" className="transition hover:opacity-75">
                                            FAQs
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="transition hover:opacity-75">
                                            Need help?
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="transition hover:opacity-75">
                                            Contact us
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div>
                            {/* <p className="font-medium text-xs lg:text-sm">QR</p> */}

                            <nav aria-label="Footer Navigation - Legal" className="mt-6">
                                <ul className="space-y-3  text-xs lg:text-smtext-sm">
                                    <li>
                                        <a href="#" className="transition hover:opacity-75">
                                            qr
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="transition hover:opacity-75">
                                            <div className="flex items-center border rounded-lg px-2 py-1.5 w-36">
                                                <Image src="https://cdn-icons-png.flaticon.com/512/888/888857.png" width={24} height={24} className="w-7" alt='Google Play' />
                                                <div className="text-left ml-3">
                                                    <p className='text-[10px] text-gray-200'>Download on </p>
                                                    <p className="text-xs md:text-sm"> Google Play </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="transition hover:opacity-75">
                                            <div className="flex items-center border rounded-lg px-2 py-1.5 w-36">
                                                <BsApple color='#FFFFFF' size={28} />
                                                {/* <Image src="https://cdn-icons-png.flaticon.com/512/888/888841.png" width={24} height={24} className="w-7" alt='Apple Store' /> */}
                                                <div className="text-left ml-3">
                                                    <p className='text-[10px] text-gray-200'>Download on </p>
                                                    <p className="text-xs md:text-sm"> Apple Store </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="text-xs ">
                    &copy; 2023 Univest. All rights reserved.  |  Designed with ❤️ in India
                </p>
            </div>
        </footer>
    )
}
