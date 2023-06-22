import { useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { Config } from './Config';


export default function SearchBar({ forPhone, setShowSearchBar }) {
    const [data, setData] = useState([]);
    const [focus, setFocus] = useState(false);
    const [wordEntered, setWordEntered] = useState("");

    const handleOnChange = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);

        if (searchWord === "" || searchWord.length < 3) {
            setData([]);
        } else {
            apiCall(searchWord)
        }
    };

    const apiCall = async (searchWord) => {
        const result = await axios.get(`${process.env.apiBaseURL}/resources/stock-details/search?searchTerm=${encodeURIComponent(searchWord)}`)
        setData(result.data?.data?.list);
    }

    const clearInput = () => {
        setData([]);
        setWordEntered("");
        forPhone && setShowSearchBar(false)
    };

    return (
        <div className={`flex ${forPhone ? 'mx-auto' : 'ml-5'} w-[90vw] lg:w-[28vw] max-w-[600px] rounded-full relative z-10`}>
            {(focus || data?.[0] || forPhone) && <div onClick={clearInput} onTouchStart={clearInput} className='fixed -top-[10vw] -right-[100vw] z-20 bg-[#20202092] w-[300vw] h-[300vw]' />}
            <input className='z-50 w-full bg-[#F5F5F5] focus:caret-[#00439D] rounded-full h-10 pl-12 font-Inter text-base text-[#747474]'
                type="text"
                autoFocus={forPhone}
                placeholder='Search for stock'
                value={wordEntered}
                onChange={handleOnChange}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
            <div className="z-50 absolute left-5 top-3">
                <FaSearch color='#747474' size={16} />
            </div>
            {(focus || data?.[0]) &&
                <div className="max-h-[250px] pt-4 dataResult absolute z-[49] top-5 w-full rounded-b-[20px] overflow-y-auto no-scrollbar ">
                    {data?.[0] ?
                        data?.slice(0, 10)?.map((ele, i) => <Link key={i} href={Config.toStockDetail(ele.nseSymbol ?? ele.bseSymbol, ele.compName, ele.finCode)}
                            onClick={clearInput}>
                            <div className="h-12 px-4 bg-[#F5F5F5]" >
                                <hr />
                                <div className='h-[18px] overflow-hidden ml-8 mt-2 font-Inter text-xs lg:text-sm font-medium text-[#00439D]'>{ele.compName} </div>
                                <div className='ml-8 font-Inter text-[10px] lg:text-[12px] leading-[16px] font-medium text-[#8A8A8A]'>
                                    {ele.nseSymbol ?? ele.bseSymbol}
                                </div>
                            </div>
                        </Link>) :
                        <p className='ml-8 my-2 font-Inter text-xs text-[#8A8A8A]'>Enter at least 3 character</p>}
                    <hr className='mx-4' />
                </div>
            }
        </div>
    );
}