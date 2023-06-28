import Image from 'next/image';

export default function TopBanner() {
    return (
        <Image src={'https://univest-prod.s3.ap-south-1.amazonaws.com/website/top_banner.jpg'}
            className='w-full object-contain md:hidden fixed top-0 z-10'
            width={360} height={50} alt='banner'
            onClick={() => window.open('https://univest.onelink.me/VC6b/investwithunivest', '_blank')} />
    )
}
