

import logoWhite from '../assets/images/logo.png'
import app_store from '../assets/images/app_store.png'
import google_pay from '../assets/images/google_pay.png'
import Image from 'next/image'
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsApple, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import app_download_qr from '../assets/images/app_download_qr.png';
import { popUp } from './PopUp/PopUp';

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
                        <div className='max-w-[210px] flex items-center px-3 py-1 border border-white rounded-full mt-4'>
                            <SiGmail size={12} />
                            <p className="text-[10px] ml-2">
                                Write to us : <a href="mailto:support@univest.in" className='font-semibold'>support@univest.in</a>
                            </p>
                        </div>
                        <ul className="flex gap-6 mt-8">
                            <li>
                                <Link
                                    href="https://www.facebook.com/Univest.in"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition hover:opacity-75"
                                >
                                    <span className="sr-only">Facebook</span>
                                    <div className='bg-[#337FFF] p-2 rounded-full'>
                                        <FaFacebookF color='#FFFFFF' size={16} />
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="https://linkedin.com/company/univest-in"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition hover:opacity-75"
                                >
                                    <span className="sr-only">LinkedIn</span>
                                    <div className='bg-[#006699] p-2 rounded-full'>
                                        <FaLinkedinIn color='#FFFFFF' size={16} />
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="https://www.instagram.com/univest.in/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition hover:opacity-75"
                                >
                                    <span className="sr-only">Instagram</span>
                                    <div className='instabg p-2 rounded-full'>
                                        <BsInstagram color='#FFFFFF' size={16} />
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="https://twitter.com/UnivestIN"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition hover:opacity-75"
                                >
                                    <span className="sr-only">Twitter</span>
                                    <div className='bg-[#33CCFF] p-2 rounded-full'>
                                        <BsTwitter color='#FFFFFF' size={16} />
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="https://www.youtube.com/@Univest_In"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition hover:opacity-75"
                                >
                                    <span className="sr-only">YouTube</span>
                                    <div className='bg-[#FF0000] p-2 rounded-full'>
                                        <BsYoutube color='#FFFFFF' size={16} />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-3 lg:col-span-2 lg:grid-cols-4">
                        <div>
                            <p className="font-medium text-xs lg:text-sm">PRODUCTS</p>

                            <nav aria-label="Footer Navigation - PRODUCTS" className="mt-6">
                                <ul className="space-y-3  text-xs lg:text-smtext-sm">
                                    <li onClick={() => popUp.open()} className='cursor-pointer'>
                                        {/* <Link href="" className="transition hover:opacity-75"> */}
                                        Pro
                                        {/* </Link> */}
                                    </li>

                                    <li>
                                        <Link href="/stocks" className="transition hover:opacity-75">
                                            Stock markets
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/elite" className="transition hover:opacity-75">
                                            Elite
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/screeners" className="transition hover:opacity-75">
                                            Screeners
                                        </Link>
                                    </li>

                                    <li onClick={() => popUp.open()} className='cursor-pointer'>
                                        {/* <Link href="/shark" className="transition hover:opacity-75"> */}
                                        Shark stocks
                                        {/* </Link> */}
                                    </li>

                                    <li onClick={() => popUp.open()} className='cursor-pointer'>
                                        {/* <Link href="" className="transition hover:opacity-75"> */}
                                        Markets
                                        {/* </Link> */}
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div>
                            <p className="font-medium text-xs lg:text-sm">Company</p>

                            <nav aria-label="Footer Navigation - Company" className="mt-6">
                                <ul className="space-y-3  text-xs lg:text-smtext-sm">
                                    <li>
                                        <Link href="/about-us" className="transition hover:opacity-75">
                                            About us
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="https://univest.in/blogs/" rel="noreferrer" className="transition hover:opacity-75">
                                            Blogs
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="https://stocks.univest.in/privacy-policy" className="transition hover:opacity-75">
                                            Privacy policy
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="https://stocks.univest.in/terms-and-conditions" className="transition hover:opacity-75">
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div>
                            <p className="font-medium text-xs lg:text-sm">SUPPORT</p>

                            <nav aria-label="Footer Navigation - SUPPORT" className="mt-6">
                                <ul className="space-y-3  text-xs lg:text-smtext-sm">
                                    <li>
                                        <Link href="/faq" className="transition hover:opacity-75">
                                            FAQs
                                        </Link>
                                    </li>

                                    <li onClick={() => popUp.open()} className='cursor-pointer'>
                                        {/* <Link href="#" className="transition hover:opacity-75"> */}
                                        Contact us
                                        {/* </Link> */}
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <nav aria-label="Footer Navigation - Legal" className="mt-6 lg:mt-0">
                            <ul className="space-y-3  text-xs lg:text-sm">
                                <li>
                                    <Image src={app_download_qr} className='w-36 p-2 rounded bg-white' alt="download now qr" />
                                    <p className='text-xs mt-1 mb-3 text-gray-200 pl-2'>
                                        Scan to Download
                                    </p>
                                </li>

                                <li>
                                    <Link href="https://apps.apple.com/us/app/univest-empowering-wealth/id6443753518" rel="noreferrer" target="_blank" className="transition hover:opacity-75">
                                        <Image src={app_store} width={114} height={24} className="w-36 object-contain" alt='Google Play' />
                                    </Link>
                                </li>

                                <li>
                                    <Link href="https://play.google.com/store/apps/details?id=com.univest.capp" rel="noreferrer" target="_blank" className="transition hover:opacity-75">
                                        <Image src={google_pay} width={114} height={24} className="w-36 object-contain" alt='Google Play' />
                                    </Link>
                                </li>
                            </ul>
                        </nav>
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
