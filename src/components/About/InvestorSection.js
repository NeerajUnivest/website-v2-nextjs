import React from 'react'
import investorsIcon from "../../assets/icn/investors.webp";
import InvestorCard from '../../elements/InvestorCard';
import Aakash from "../../assets/invester/Aakash+anand.webp";
import Jaspreet from "../../assets/invester/Jaspreet+Batra.webp";
import Pritesh from "../../assets/invester/Pritesh+Talwar.webp";
import Rajat from "../../assets/invester/Rajat+Khullar.webp";
import Sami from "../../assets/invester/Sami+Shaik.webp";
import Sandeep from "../../assets/invester/Sandeep-Dongree.webp";
import Deep from "../../assets/invester/Deep+bajaj.webp";
import Mohit from "../../assets/invester/Mohit+Bajaj.webp";
import Chetan from "../../assets/invester/Chetan-Nigam.jpg";
import Vijay from "../../assets/rating/Vijay+Rathi.webp";
import Rashi from "../../assets/invester/Rashi-Arora.jpg";
import Ajay from "../../assets/invester/Ajay+Pahwa.jpeg";
import Rahul_Gambhir from "../../assets/invester/Rahul-Gambhir.jpeg";
import Saahil from "../../assets/invester/Saahil+Nayar.jpeg";
import Karan from "../../assets/invester/Karan-Goel.jpeg";
import Jaiveer from "../../assets/invester/Jaiveer+Duggal.jpeg";
import Sagar from "../../assets/invester/Sagar+Goyal.jpeg";
import Anurag from "../../assets/invester/Anurag+Dixit.jpeg";
import Sankalp from "../../assets/invester/Sankalp+Maheshwari.jpeg";
import Avijeet from "../../assets/invester/Avijeet+Ranjan.jpeg";
import Aamir from "../../assets/invester/Aamir+Saifi.jpeg";
import Himanshu from "../../assets/invester/Himanshu+Anand.jpeg";
import Raghav from "../../assets/invester/Raghav+Kumar.jpeg";
import Mohd from "../../assets/invester/Mohd-Shareef.jpeg";
import Jaideep from "../../assets/invester/Jaideep+Kumar.jpeg";


import Image from 'next/image';

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
        img: Ajay,
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
        img: Rahul_Gambhir,
        detail: "Head-Risk & Internal Audit at Bookfield Group"
    },
    {
        name: "Rajat Khullar",
        img: Rajat,
        detail: "CBO at IDAM Group"
    },
    {
        name: "Saahil Nayar",
        img: Saahil,
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
        img: Karan,
        detail: "Associate partner McKinsey & Company"
    },
    {
        name: "Jaiveer Duggal",
        img: Jaiveer,
        detail: "Marketing Manager at Reckitt Benckiser"
    },
    {
        name: "Sagar Goyal",
        img: Sagar,
        detail: "HR at Walmart & serial stock market investor"
    },
    {
        name: "Anurag Dixit",
        img: Anurag,
        detail: "GM at Otipy, Ex-GoMechanic, Oyo"
    },
    {
        name: "Sankalp Maheshwari",
        img: Sankalp,
        detail: "Sales head at LG India"
    },
    {
        name: "Avijeet Ranjan",
        img: Avijeet,
        detail: "Growth head of Hoichoi(OTT Platform)"
    },
    {
        name: "Himanshu Anand",
        img: Himanshu,
        detail: "GM at Otipy, Ex-Oyo"
    },
    {
        name: "Aamir Saifi",
        img: Aamir,
        detail: "Sr. HR Manager at Otipy"
    },
    {
        name: "Raghav Kumar",
        img: Raghav,
        detail: "CTO at IDAM Group"
    },
    {
        name: "Md. Sharreef",
        img: Mohd,
        detail: "Finace at SATS, Soudi Arabia"
    },
    {
        name: "Jaideep Kumar",
        img: Jaideep,
        detail: "Cofounder of Chaabi, Ex-RB, IDAM"
    },
]

export default function InvestorSection() {
    return (
        <section className='w-full mb-10'>
            <div className='flex flex-row content-center justify-center my-[24px] lg:my-[64px]'>
                <div className='font-Poppins font-semibold text-[18px] leading-[24px] text-[#00439D] lg:text-[32px] lg:leading-[32px] lg:text-[#000000]'>
                    Our Investors
                </div>
                <div>
                    <Image src={investorsIcon} className='w-5 lg:w-8 object-contain ml-3' alt='icon' />
                </div>
            </div>
            <div className='grid grid-rows-2 grid-flow-col gap-y-6 lg:gap-y-8 my-10 overflow-x-auto no-scrollbar px-5'>
                {data.map((ele, i) => <InvestorCard key={i} name={ele.name} detail={ele.detail} img={ele.img} />)}
            </div>
        </section>
    )
}
