import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useGetAxios } from '@/hooks/useGetAxios';
import arrowDown from '@/assets/icn/arrowDown.png'
import Image from 'next/image';
{/*
 */}



export default function StockFAQSection({ name, symbol }) {
    const [active, setActive] = useState(-1);
    const router = useRouter()
    const { fetchData, data, loading } = useGetAxios('')

    useEffect(() => {
        try {
            fetchData(`resources/stock-details/stock-faq?fin-code=${name}`)
        } catch (error) {
        }
    }, [])

    const faqData = [
        {

            question: `Is ${data?.companyPrices?.compName} a good stock to invest in?`,
            answer: `Our expert verdict states that ${data?.companyPrices?.compName} is in ${data?.companyPrices?.shortTermVerdict} zone for Short term and is in ${data?.companyPrices?.longTermVerdict} zone for Long term.`
        }, {
            question: `Should I buy ${data?.companyPrices?.compName} share now?`,
            answer: `As per our verdict, ${data?.companyPrices?.compName} is in the ${data?.companyPrices?.shortTermVerdict} zone zone for Short term.`
        }, {
            question: `Should I buy ${data?.companyPrices?.compName} shares for the long term?`,
            answer: `As per our verdict, ${data?.companyPrices?.compName} is in ${data?.companyPrices?.longTermVerdict} zone for Long term.`
        }, {
            question: `What is ${data?.companyPrices?.compName} share price today?`,
            answer: `The ${data?.companyPrices?.compName} share price today is ${data?.companyPrices?.nseLtpPrice ?? data?.companyPrices?.bseLtpPrice}.`
        }, {
            question: `How to buy ${data?.companyPrices?.compName} share?`,
            answer: `You can buy ${data?.companyPrices?.compName} shares on any demat broker by completing your KYC. Before buying any stock, check BUY/SELL/HOLD insights on the Univest App.`
        }, {
            question: `What is the share price of ${data?.companyPrices?.compName}?`,
            answer: `The share price of ${data?.companyPrices?.compName} is ${data?.companyPrices?.nseLtpPrice ?? data?.companyPrices?.bseLtpPrice}, please note that the price may vary on a real-time basis. `
        }, {
            question: `What are the 52 Week's High and Low of ${data?.companyPrices?.compName}?`,
            answer: `52 Week High of ${data?.companyPrices?.compName} is ${data?.price52WeekHigh} and 52 Week Low of ${data?.companyPrices?.compName} is ${data?.price52WeekLow}.`
        }, {
            question: `What is the PE and PB ratio of ${data?.companyPrices?.compName}?`,
            answer: `PE ratio of ${data?.companyPrices?.compName} is ${data?.keyIndicators?.peRatio} and PB ratio of ${data?.companyPrices?.compName} is ${data?.keyIndicators?.pbRatio}.`
        }, {
            question: `How’s PE of ${data?.companyPrices?.compName} compared to its sector?`,
            answer: `PE ratio of ${data?.companyPrices?.compName} is ${data?.keyIndicators?.peRatio} whereas the sector PE ratio is ${data?.keyIndicators?.sectorPE}.`
        }, {
            question: `What is the market cap of ${data?.companyPrices?.compName}?`,
            answer: `${data?.companyPrices?.compName}’s market cap is ${data?.keyIndicators?.marketCapital}.`
        },
        {
            question: `What are today’s High and Low prices of ${data?.companyPrices?.compName} ? `,
            answer: `Today’s High of ${data?.companyPrices?.compName} is ${data?.companyPrices?.nseTodaysHigh ?? data?.companyPrices?.bseTodaysHigh}.<br /> Today’s Low of ${data?.companyPrices?.compName} is ${data?.companyPrices?.nseTodaysLow ?? data?.companyPrices?.bseTodaysLow}.`,
        }
    ]
    return (
        <section className='py-12 font-Inter mx-4'>
            <p className='font-Inter text-[16px] text-black mr-4 font-semibold'>
                {data?.companyPrices?.nseSymbol ?? data?.companyPrices?.bseSymbol} FAQs
            </p>
            <div className='flex flex-col py-8 gap-4 lg:gap-8'>
                {faqData?.map((ele, i) =>
                    <FAQcard key={i} heading={ele.question} content={ele.answer} active={active} i={i} setActive={setActive} />
                )}
            </div>
        </section >
    )
}

function FAQcard({ heading, content, active, setActive, i }) {
    if (heading.includes('undefined') || content.includes('undefined') || heading.includes('null') || content.includes('null')) return <></>
    return (
        <div className={`ease-in-out duration-300 border rounded-xl cursor-pointer bg-white ${active === i ? 'border-[#00439D] border-2' : 'border-[#dfdfdf]'} `}
            onClick={() => setActive(active === i ? -1 : i)}>
            <div className='flex flex-row p-3'>
                <div className='mr-3 mt-1.5 h-1 w-1 lg:h-2 lg:w-2 bg-[#202020] rounded-full' />
                <p className='w-10/12 font-semibold text-xs lg:text-sm'>{heading}</p>
                <Image src={arrowDown} className={`ml-auto mt-1.5 h-2 lg:h-2.5 w-auto mr-2 ease-in-out duration-300 ${active === i ? 'rotate-180' : 'rotate-0'} `} alt="arrow" />
            </div>
            <div className={`overflow-hidden ease-in-out duration-300 mx-4 text-justify ml-8
            ${active === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} `}>
                <div className='mb-4 mt-2 font-normal text-xs lg:text-sm text-[#202020]' dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    )
}