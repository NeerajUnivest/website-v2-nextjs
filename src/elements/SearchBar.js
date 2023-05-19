import { useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';


export default function SearchBar({ forPhone, setShowSearchBar }) {
    const [data, setData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = async (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);

        if (searchWord === "" || searchWord.length < 3) {
            setData([]);
        } else {
            const result = await axios.get(`https://api.univest.in/resources/stock-details/search?searchTerm=${encodeURIComponent(searchWord)}`)
            setData(result.data?.data?.list);
        }
    };

    const clearInput = () => {
        setData([]);
        setWordEntered("");
        forPhone && setShowSearchBar(false)
    };

    return (
        <div className={`flex ${forPhone ? 'mx-auto' : 'ml-5'} w-[90vw] lg:w-[28vw] max-w-[600px] rounded-full relative z-10`}>
            {(data?.length !== 0 || forPhone) && <div onClick={clearInput} className='fixed top-0 left-0 z-20 bg-[#20202093] w-screen h-screen blur-3xl' />}
            <input className='z-50 w-full bg-[#F5F5F5] focus:caret-[#00439D] rounded-full h-10 pl-12 font-Inter text-base text-[#747474]'
                type="text"
                autoFocus={forPhone}
                placeholder='Search for stock'
                value={wordEntered}
                onChange={handleFilter}
            />
            <div className="z-50 absolute left-5 top-3">
                <FaSearch color='#747474' size={16} />
            </div>
            {data?.length !== 0 &&
                <div className="max-h-[250px] pt-4 dataResult absolute z-[49] top-5 w-full rounded-b-[20px] overflow-y-auto no-scrollbar ">
                    {data?.slice(0, 15).map((ele, i) => <Link key={i} href={`stocks/${ele.nseSymbol ?? ele.bseSymbol}?finCode=${ele.finCode}`}
                        onClick={clearInput}>
                        <div className="h-12 px-4 bg-[#F5F5F5]" >
                            <hr />
                            <div className='h-[18px] overflow-hidden ml-8 mt-2 font-Inter text-xs lg:text-sm font-medium text-[#00439D]'>{ele.compName} </div>
                            <div className='ml-8 font-Inter text-[10px] lg:text-[12px] leading-[16px] font-medium text-[#8A8A8A]'>
                                {ele.nseSymbol ?? ele.bseSymbol}
                            </div>
                        </div>
                    </Link>)}
                    <hr className='mx-4' />
                </div>
            }
        </div>
    );
}