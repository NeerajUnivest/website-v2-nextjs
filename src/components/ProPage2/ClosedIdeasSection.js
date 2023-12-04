
import useSWR from 'swr'
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { useGetAxios } from '@/hooks/useGetAxios';
import ReactPaginate from 'react-paginate';
import Actions from '@/elements/Actions';


export default function ClosedIdeasSection({ homePage, start_at, isDark = false }) {
    const { fetchData, data: { closedIdeas } } = useGetAxios('')
    const [active, setActive] = useState('Short');

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 10;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = closedIdeas?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(closedIdeas?.length / 10);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 10) % closedIdeas?.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    useEffect(() => {
        fetchData(`/resources/trade-cards/advisory-performance?term=${active}&duration=ALL`)
        setItemOffset(0)
    }, [active])

    const router = useRouter();
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
                            {['Short', 'Medium', 'Long', 'Futures']?.map(ele =>
                                <button key={ele} className={active === ele ? 'font-bold bg-gradient-to-tr from-[#FF8415] to-[#FFCA3F] flex justify-center items-center gap-2.5 flex-[1_0_0] self-stretch border border-[color:var(--Pearl-White,#FFF)] px-2 py-1 rounded-2xl border-solid' : 'bg-[#F5F5F5] flex justify-center items-center gap-2.5 flex-[1_0_0] self-stretch border border-[color:var(--neutral-900,#202020)] px-2 py-1 rounded-2xl border-solid'}
                                    onClick={() => handleClick(ele)}>
                                    {ele}
                                </button>)}
                        </div>
                    </div>
                    <div className='bg-white  rounded-2xl overflow-hidden whitespace-nowrap'>
                        <div className='flex flex-row font-Inter w-full overflow-x-scroll no-scrollbar '>
                            <table className="table border-collapse swiper-no-swiping">
                                <thead>
                                    <tr className='h-10 text-left '>
                                        <th className='sticky -left-[0px] bg-gradient-to-br from-[#ECF1F3] to-[#F1F4EE] text-[12px] text-[#979797] font-medium min-w-[130px] px-2'>Stocks Name</th>
                                        <th className='px-2 pl-4 text-[12px] text-[#979797] font-medium border border-x-0 border-neutral-100 text-left min-w-[70px] '>Entry Price</th>
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
                                <ClosedIdeasSectionTable closedIdeas={currentItems} />
                            </table>
                        </div>
                    </div>
                    <ReactPaginate
                        className='flex gap-2 justify-center text-xs pb-3 text-neutral-400'
                        activeClassName='font-bold text-white'
                        breakLabel="..."
                        nextLabel="Next"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={2}
                        pageCount={pageCount}
                        previousLabel="Previous"
                        renderOnZeroPageCount={null}
                        nextClassName='underline underline-2'
                        previousClassName='underline underline-2'
                    />
                </div>
            </section>
            <div className="w-full h-1 shrink-0 bg-[#414141]"></div>
        </>
    )
}


export function ClosedIdeasSectionTable({ closedIdeas }) {
    return (
        <tbody>
            {!closedIdeas?.[0]
                ?
                <tr className="m-4 bg-[#D9D9D9] w-full rounded-lg animate-pulse" /> :
                closedIdeas?.map((item, i) =>
                    <tr key={i} className='h-[52px]'>
                        <td className='pt-2 sticky -left-[0px] bg-gradient-to-br from-[#ECF1F3] to-[#F1F4EE] text-[10px]  font-medium leading-[18px] px-2 min-w-[120px] lg:min-w-[200px] border border-neutral-100 cursor-pointer'>
                            <div className='flex flex-row font-Inter'>
                                <div className=' text-[10px] leading-[16px] font-semibold'>
                                    {(item.symbol === null || item.symbol === '') ? item.bseSymbol : item.symbol}</div>
                            </div>
                            <div className='text-[8px] leading-[12px] text-[#979797] line-clamp-1 '>{Actions.trimName(item.name)}</div>
                        </td>
                        <td className='text-[12px]  font-semibold leading-[18px] items-center pl-4 px-2 border border-x-0 border-neutral-100  '>
                            ₹{item.entryPrice.toFixed(2)}</td>
                        <td style={{ color: `${item.hit === 'MISS' ? '#EB4E2C' : '#26A649'}` }} className='text-[12px]  font-semibold leading-[18px] items-center px-2 border border-x-0  border-neutral-100'>
                            {item.hit} </td>
                        <td style={{ color: `${item.netGain < 0 ? '#EB4E2C' : '#26A649'}` }} className='text-[12px]  font-semibold leading-[18px] items-center px-2 border border-x-0  border-neutral-100'>
                            {item.term === 'FUTURES' ? '₹' : ''}{item.netGain.toFixed(2)}{item.term !== 'FUTURES' ? '%' : ''}</td>
                        <td className='text-[12px]  font-semibold leading-[18px] items-center px-2 border border-x-0  border-neutral-100'>
                            ₹{item.closurePrice.toFixed(2)}</td>
                        <td className='text-[12px]  font-semibold leading-[18px] items-center px-2 border border-x-0  border-neutral-100'>
                            ₹{item.ltpPrice.toFixed(2)}</td>
                        <td className='text-[12px]  font-semibold leading-[18px] items-center px-2 border border-x-0  border-neutral-100'>
                            {item.entryDate}</td>
                        <td className='text-[12px]  font-semibold leading-[18px] items-center px-2 border border-x-0  border-neutral-100'>
                            {item.exitDate}</td>
                        <td className='text-[12px]  font-semibold leading-[18px] items-center px-2 border border-x-0  border-neutral-100'>
                            ₹{item.stopLoss.toFixed(2)}</td>
                        <td className='text-[12px]  font-semibold leading-[18px] items-center px-2 border border-x-0  border-neutral-100'>
                            ₹{item.targetPrice.toFixed(2)}</td>
                    </tr>)}
        </tbody>
    )
}
