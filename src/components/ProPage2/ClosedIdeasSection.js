
import useSWR from 'swr'
import { useRouter } from "next/router";
import { useState } from 'react';


const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function ClosedIdeasSection({ homePage, start_at, isDark = false }) {
    const { data, isLoading } = useSWR(`${process.env.apiBaseURL}/resources/trade-cards/hit`, fetcher)
    const closedIdeas = [
        {
            "id": 1268,
            "finCode": 216231682,
            "symbol": "HAL23DECFUT",
            "name": "HAL",
            "netGain": 2400.0,
            "hit": "P. HIT",
            "closeDuration": 0,
            "entryPrice": 2245.0,
            "ltpPrice": 2076.25,
            "closureReason": "CLOSED_TRADE_IDEAS",
            "createdAt": "24-11-2023",
            "entryDate": "24-11-2023",
            "exitDate": "24-11-2023",
            "term": "SHORT",
            "closurePrice": 2253.0,
            "stopLoss": 0.0,
            "targetPrice": 2450.0,
            "attachments": null,
            "entryDateInLong": 1700808406877,
            "exitDateInLong": 1700808420000,
            "lotSize": 300,
            "recommendationType": "BUY",
            "adjustedGain": null
        },
        {
            "id": 841,
            "finCode": 214880514,
            "symbol": "TATAMOTORS23NOVFUT",
            "name": "TATAMOTORS",
            "netGain": -412252.49999999994,
            "hit": "MISS",
            "closeDuration": 1,
            "entryPrice": 970.5,
            "ltpPrice": 661.3,
            "closureReason": "CLOSED_TRADE_IDEAS",
            "createdAt": "15-11-2023",
            "entryDate": "15-11-2023",
            "exitDate": "16-11-2023",
            "term": "FUTURES",
            "closurePrice": 681.2,
            "stopLoss": 0.0,
            "targetPrice": 690.0,
            "attachments": "https://storage.googleapis.com/production-univest/trade-card-attachments/TATAMOTORS NOV FUT QS REPORT_15112023182833.pdf",
            "entryDateInLong": 1700040537187,
            "exitDateInLong": 1700128260000,
            "lotSize": 1425,
            "recommendationType": "BUY",
            "adjustedGain": null
        },
        {
            "id": 831,
            "finCode": 214844674,
            "symbol": "BRITANNIA23NOVFUT",
            "name": "BRITANNIA",
            "netGain": 11460.000000000036,
            "hit": "P. HIT",
            "closeDuration": 9,
            "entryPrice": 4669.7,
            "ltpPrice": 4706.0,
            "closureReason": "CLOSED_TRADE_IDEAS",
            "createdAt": "07-11-2023",
            "entryDate": "07-11-2023",
            "exitDate": "16-11-2023",
            "term": "FUTURES",
            "closurePrice": 4727.0,
            "stopLoss": 0.0,
            "targetPrice": 4900.0,
            "attachments": "https://storage.googleapis.com/production-univest/trade-card-attachments/BRITANNIA BUY NOV FUT QS REPORT_08112023165654.pdf",
            "entryDateInLong": 1699350170548,
            "exitDateInLong": 1700119560000,
            "lotSize": 200,
            "recommendationType": "BUY",
            "adjustedGain": null
        },
        {
            "id": 839,
            "finCode": 214831618,
            "symbol": "APOLLOTYRE23NOVFUT",
            "name": "APOLLOTYRE",
            "netGain": 16150.0,
            "hit": "P. HIT",
            "closeDuration": 1,
            "entryPrice": 422.0,
            "ltpPrice": 427.5,
            "closureReason": "CLOSED_TRADE_IDEAS",
            "createdAt": "15-11-2023",
            "entryDate": "15-11-2023",
            "exitDate": "16-11-2023",
            "term": "FUTURES",
            "closurePrice": 431.5,
            "stopLoss": 0.0,
            "targetPrice": 438.0,
            "attachments": "https://storage.googleapis.com/production-univest/trade-card-attachments/APOLLOTYRE BUY NOV FUT QS REPORT_15112023182715.pdf",
            "entryDateInLong": 1700023672688,
            "exitDateInLong": 1700108580000,
            "lotSize": 1700,
            "recommendationType": "BUY",
            "adjustedGain": null
        },
        {
            "id": 832,
            "finCode": 214847746,
            "symbol": "CIPLA23NOVFUT",
            "name": "CIPLA",
            "netGain": 5037.5,
            "hit": "P. HIT",
            "closeDuration": 7,
            "entryPrice": 1241.0,
            "ltpPrice": 1249.25,
            "closureReason": "CLOSED_TRADE_IDEAS",
            "createdAt": "08-11-2023",
            "entryDate": "08-11-2023",
            "exitDate": "15-11-2023",
            "term": "FUTURES",
            "closurePrice": 1248.75,
            "stopLoss": 0.0,
            "targetPrice": 1280.0,
            "attachments": "https://storage.googleapis.com/production-univest/trade-card-attachments/CIPLA BUY NOV FUT QS REPORT_08112023174012.pdf",
            "entryDateInLong": 1699432639880,
            "exitDateInLong": 1700038620000,
            "lotSize": 650,
            "recommendationType": "BUY",
            "adjustedGain": null
        }
    ];
    const router = useRouter();
    const [active, setActive] = useState(0);
    const handleClick = (n) => {
        setActive(n)
    }
    return (
        <>
            <section className="bg-gradient-to-b from-[#202020] to-[#202020] lg:px-8 max-w-screen-xl mx-auto">
                <div className='mx-4 flex flex-col gap-6 py-6'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row justify-between'>
                            <p className='text-[color:var(--Pearl-White,#FFF)] text-xl not-italic font-extrabold leading-8'>Closed ideas</p>
                            <p className=' text-transparent bg-gradient-to-r from-[#FF8415] to-[#FFCA3F]  text-right text-xl not-italic font-extrabold leading-8 bg-clip-text'>66.4%  Accuracy</p>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <button className={active === 0 ? 'font-bold bg-gradient-to-tr from-[#FF8415] to-[#FFCA3F] flex justify-center items-center gap-2.5 flex-[1_0_0] self-stretch border border-[color:var(--Pearl-White,#FFF)] px-2 py-1 rounded-2xl border-solid' : 'bg-[#F5F5F5] flex justify-center items-center gap-2.5 flex-[1_0_0] self-stretch border border-[color:var(--neutral-900,#202020)] px-2 py-1 rounded-2xl border-solid'} onClick={() => handleClick(0)}>Short</button>
                            <button className={active === 1 ? 'font-bold bg-gradient-to-tr from-[#FF8415] to-[#FFCA3F] flex justify-center items-center gap-2.5 flex-[1_0_0] self-stretch border border-[color:var(--Pearl-White,#FFF)] px-2 py-1 rounded-2xl border-solid' : 'bg-[#F5F5F5] flex justify-center items-center gap-2.5 flex-[1_0_0] self-stretch border border-[color:var(--neutral-900,#202020)] px-2 py-1 rounded-2xl border-solid'} onClick={() => handleClick(1)}>Medium</button>
                            <button className={active === 2 ? 'font-bold bg-gradient-to-tr from-[#FF8415] to-[#FFCA3F] flex justify-center items-center gap-2.5 flex-[1_0_0] self-stretch border border-[color:var(--Pearl-White,#FFF)] px-2 py-1 rounded-2xl border-solid' : 'bg-[#F5F5F5] flex justify-center items-center gap-2.5 flex-[1_0_0] self-stretch border border-[color:var(--neutral-900,#202020)] px-2 py-1 rounded-2xl border-solid'} onClick={() => handleClick(2)}>Long</button>
                            <button className={active === 3 ? 'font-bold bg-gradient-to-tr from-[#FF8415] to-[#FFCA3F] flex justify-center items-center gap-2.5 flex-[1_0_0] self-stretch border border-[color:var(--Pearl-White,#FFF)] px-2 py-1 rounded-2xl border-solid' : 'bg-[#F5F5F5] flex justify-center items-center gap-2.5 flex-[1_0_0] self-stretch border border-[color:var(--neutral-900,#202020)] px-2 py-1 rounded-2xl border-solid'} onClick={() => handleClick(3)}>Futures</button>
                        </div>
                    </div>
                    <div className='bg-white  rounded-2xl overflow-hidden whitespace-nowrap'>
                        <div className='flex flex-row font-Inter w-full overflow-x-scroll no-scrollbar '>
                            <table className="table border-collapse swiper-no-swiping">
                                <thead>
                                    <tr className='h-10 '>
                                        <th className='sticky -left-[0px] bg-gradient-to-br from-[#ECF1F3] to-[#F1F4EE] text-[12px] text-[#979797] font-medium min-w-[130px] '>Stocks Name</th>
                                        <th className='px-2 text-[12px] text-[#979797] font-medium border border-x-0 border-neutral-100 text-left min-w-[70px] '>Entry Price</th>
                                        <th className='px-2 text-[12px] text-[#979797] font-medium border border-x-0 border-neutral-100 text-left min-w-[70px]'>Hit / Miss</th>
                                        <th className='px-2 text-[12px] text-[#979797] font-medium border border-x-0 border-neutral-100 text-left min-w-[70px]'>Net Gain</th>
                                        <th className='px-2 text-[12px] text-[#979797] font-medium border border-x-0 border-neutral-100 text-left min-w-[70px]'>Exit Price</th>
                                        <th className='px-2 text-[12px] text-[#979797] font-medium border border-x-0 border-neutral-100 text-left min-w-[70px]'>CMP</th>
                                        <th className='px-2 text-[12px] text-[#979797] font-medium border border-x-0 border-neutral-100 text-left min-w-[70px]'>Entry Date</th>
                                        <th className='px-2 text-[12px] text-[#979797] font-medium border border-x-0 border-neutral-100 text-left min-w-[70px]'>Exit Date</th>
                                        <th className='px-2 text-[12px] text-[#979797] font-medium border border-x-0 border-neutral-100 text-left min-w-[70px]'>Stop Loss</th>
                                        <th className='px-2 text-[12px] text-[#979797] font-medium border border-x-0 border-neutral-100 text-left min-w-[70px]'>Target Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!closedIdeas?.[0] ? <tr className="m-4 bg-[#D9D9D9] w-full rounded-lg animate-pulse" /> :
                                        closedIdeas?.map((item, i) =>
                                            <tr key={i} className='h-[52px]'>
                                                <td className='pt-2 sticky -left-[0px] bg-gradient-to-br from-[#ECF1F3] to-[#F1F4EE] text-[10px]  font-medium leading-[18px] px-2 min-w-[120px] lg:min-w-[200px] border border-neutral-100 cursor-pointer'>
                                                    <div className='flex flex-row font-Inter'>
                                                        <div className=' text-[10px] leading-[16px] font-medium'>
                                                            {(item.symbol === null || item.symbol === '') ? item.bseSymbol : item.symbol}</div>
                                                    </div>
                                                    <div className='text-[8px] leading-[12px] text-[#979797] line-clamp-1 '>{item.name}</div>
                                                </td>
                                                <td className='text-[12px]  font-medium leading-[18px] items-center px-2 border border-x-0 border-neutral-100  '>
                                                    ₹{item.entryPrice.toFixed(2)}</td>
                                                <td style={{ color: `${item.hit === 'MISS' ? '#EB4E2C' : '#26A649'}` }} className='text-[12px]  font-medium leading-[18px] items-center px-2 border border-x-0  border-neutral-100'>
                                                    {item.hit} </td>
                                                <td style={{ color: `${item.netGain < 0 ? '#EB4E2C' : '#26A649'}` }} className='text-[12px]  font-medium leading-[18px] items-center px-2 border border-x-0  border-neutral-100'>
                                                    {item.term === 'FUTURES' ? '₹' : ''}{item.netGain.toFixed(2)}{item.term !== 'FUTURES' ? '%' : ''}</td>
                                                <td className='text-[12px]  font-medium leading-[18px] items-center px-2 border border-x-0  border-neutral-100'>
                                                    ₹{item.closurePrice.toFixed(2)}</td>
                                                <td className='text-[12px]  font-medium leading-[18px] items-center px-2 border border-x-0  border-neutral-100'>
                                                    ₹{item.ltpPrice.toFixed(2)}</td>
                                                <td className='text-[12px]  font-medium leading-[18px] items-center px-2 border border-x-0  border-neutral-100'>
                                                    {item.entryDate}</td>
                                                <td className='text-[12px]  font-medium leading-[18px] items-center px-2 border border-x-0  border-neutral-100'>
                                                    {item.exitDate}</td>
                                                <td className='text-[12px]  font-medium leading-[18px] items-center px-2 border border-x-0  border-neutral-100'>
                                                    ₹{item.stopLoss.toFixed(2)}</td>
                                                <td className='text-[12px]  font-medium leading-[18px] items-center px-2 border border-x-0  border-neutral-100'>
                                                    ₹{item.targetPrice.toFixed(2)}</td>
                                            </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full h-1 shrink-0 bg-[#414141]"></div>
        </>
    )
}


