
import investorsIcon from "../../assets/icons/investors.webp";
import InvestorCard from '../../elements/InvestorCard';
import Aakash from "../../assets/invester/Aakash+anand.webp";
import Jaspreet from "../../assets/invester/Jaspreet+Batra.webp";
import Pritesh from "../../assets/invester/Pritesh+Talwar.webp";
import Rajat from "../../assets/invester/Rajat+Khullar.webp";
import Sami from "../../assets/invester/Sami+Shaik.webp";
import Sandeep from "../../assets/invester/Sandeep-Dongree.webp";
import Deep from "../../assets/invester/Deep+bajaj.webp";
import Mohit from "../../assets/invester//Mohit+Bajaj.webp";
import Chetan from "../../assets/invester/Chetan-Nigam.jpg";
import Vijay from "../../assets/img/Vijay+Rathi.webp";
import Rashi from "../../assets/invester/Rashi-Arora.jpg";
import Image from 'next/image'


const data = [
    {
        name: "Pritesh Talwar",
        img: Pritesh,
        detail: "CEO of Livpure & Ex-CEO Reckitt Benckiser"
    },
    {
        name: "Deep Bajaj",
        img: Deep,
        detail: "Cofounder of peebuddy"
    },
    {
        name: "Aakash anand",
        img: Aakash,
        detail: "CEO of IDAM Group"
    },
    {
        name: "Ajay Pahwa",
        img: "https://univest-prod.s3.ap-south-1.amazonaws.com/investors/Ajay+Pahwa.webp",
        detail: "Cofounder of Fixigo & Amaze software technologies"
    },
    {
        name: "Jaspreet Batra",
        img: Jaspreet,
        detail: "Owner- Welco Infotech Pvt.Ld"
    },
    {
        name: "Mohit Bajaj",
        img: Mohit,
        detail: "Cofounder of peebuddy"
    },
    {
        name: "Sami Shaik",
        img: Sami,
        detail: "Cofounder of Fixigo & Amaze software technologies"
    },
    {
        name: "Chetan Nigam",
        img: Chetan,
        detail: "GM Relaince Jio info com"
    },
    {
        name: "Sandeep Dongre",
        img: Sandeep,
        detail: "COO of Actorius Innvoations "
    },
    {
        name: "Rahul Gambhir",
        img: "https://univest-prod.s3.ap-south-1.amazonaws.com/investors/Rahul-Gambhir.webp",
        detail: "Head-Risk & Internal Audit at Bookfield Group"
    },
    {
        name: "Rajat Khullar",
        img: Rajat,
        detail: "CBO at IDAM Group"
    },
    {
        name: "Saahil Nayar",
        img: "https://univest-prod.s3.ap-south-1.amazonaws.com/investors/Saahil+Nayar.webp",
        detail: "Ex-Cofounder of IDAM Group"
    },
    {
        name: "Vijay Rathi",
        img: Vijay,
        detail: "Technology architect at Precisely"
    },
    {
        name: "Rashi Arora",
        img: Rashi,
        detail: "Founder Cosmetify"
    },
    {
        name: "Karan Goel",
        img: "https://univest-prod.s3.ap-south-1.amazonaws.com/investors/Karan-Goel.webp",
        detail: "Associate partner McKinsey & Company"
    },
    {
        name: "Jaiveer Duggal",
        img: "https://univest-prod.s3.ap-south-1.amazonaws.com/investors/Jaiveer+Duggal.webp",
        detail: "Marketing Manager at Reckitt Benckiser"
    },
    {
        name: "Sagar Goyal",
        img: "https://univest-prod.s3.ap-south-1.amazonaws.com/investors/Sagar+Goyal.webp",
        detail: "HR at Walmart & serial stock market investor"
    },
    {
        name: "Anurag Dixit",
        img: "https://univest-prod.s3.ap-south-1.amazonaws.com/investors/Anurag+Dixit.webp",
        detail: "GM at Otipy, Ex-GoMechanic, Oyo"
    },
    {
        name: "Sankalp Maheshwari",
        img: "https://univest-prod.s3.ap-south-1.amazonaws.com/investors/Sankalp+Maheshwari.webp",
        detail: "Sales head at LG India"
    },
    {
        name: "Avijeet Ranjan",
        img: "https://univest-prod.s3.ap-south-1.amazonaws.com/investors/Avijeet+Ranjan.webp",
        detail: "Growth head of Hoichoi(OTT Platform)"
    },
    {
        name: "Himanshu Anand",
        img: "https://univest-prod.s3.ap-south-1.amazonaws.com/investors/Himanshu+Anand.webp",
        detail: "GM at Otipy, Ex-Oyo"
    },
    {
        name: "Aamir Saifi",
        img: "https://univest-prod.s3.ap-south-1.amazonaws.com/investors/Aamir+Saifi.webp",
        detail: "Sr. HR Manager at Otipy"
    },
    {
        name: "Raghav Kumar",
        img: "https://univest-prod.s3.ap-south-1.amazonaws.com/investors/Raghav+Kumar.webp",
        detail: "CTO at IDAM Group"
    },
    {
        name: "Md. Sharreef",
        img: "https://univest-prod.s3.ap-south-1.amazonaws.com/investors/Mohd-Shareef.webp",
        detail: "Finace at SATS, Soudi Arabia"
    },
    {
        name: "Jaideep Kumar",
        img: "https://univest-prod.s3.ap-south-1.amazonaws.com/investors/Jaideep+Kumar.webp",
        detail: "Cofounder of Chaabi, Ex-RB, IDAM"
    },
]

export default function InvestorSection() {
    return (
        <div className='w-full mb-10' data-aos="fade-up">
            <div className='flex flex-row content-center justify-center my-[24px] lg:my-[64px]'>
                <div className='font-Inter font-semibold text-[18px] leading-[24px] text-[#00439D] lg:text-[32px] lg:leading-[32px] lg:text-[#000000]'>
                    Our Investors
                </div>
                <div>
                    <Image src={investorsIcon} className='h-5 lg:h-8 ml-3' alt='icon' />
                </div>
            </div>
            <div className='grid grid-rows-2 grid-flow-col gap-y-6 lg:gap-y-8 my-10 overflow-x-auto no-scrollbar px-5'>
                {data.map((ele, i) => <InvestorCard key={i} name={ele.name} detail={ele.detail} img={ele.img} />)}
            </div>
        </div>
    )
}
