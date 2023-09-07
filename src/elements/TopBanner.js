import Image from 'next/image';

export default function TopBanner() {
    return (
        <Image src='https://storage.googleapis.com/app-assets-univest/website-assets/top_banner.jpg'
            className='w-full md:hidden fixed top-0 z-10 h-[80px]'
            width={360} height={50} alt='banner'
            onClick={() => window.open('https://univest.onelink.me/VC6b/investwithunivest', '_blank')} />
    )
}
