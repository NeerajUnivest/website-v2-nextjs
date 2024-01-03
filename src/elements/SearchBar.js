import { useRef, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import Actions from './Actions';
import useKeypress from 'react-use-keypress';
import { useRouter } from 'next/router';


export default function SearchBar({ forPhone, setShowSearchBar }) {
    const ref = useRef()
    const [data, setData] = useState([]);
    const [focus, setFocus] = useState(false);
    const [wordEntered, setWordEntered] = useState("");
    const [selected, setSelected] = useState(0);
    const router = useRouter();

    const handleOnChange = (event) => {
        setSelected(0)
        const searchWord = event.target.value;
        setWordEntered(searchWord);

        if (searchWord === "" || searchWord.length < 3) {
            setData([]);
        } else {
            apiCall(searchWord)
        }
    };
    useKeypress(['ArrowDown', 'ArrowUp', 'Enter'], (e) => {
        if (focus && e.key === 'ArrowDown') {
            setSelected(prev => data.length - 1 > prev ? prev + 1 : data.length - 1)
        } else if (focus && e.key === 'ArrowUp') {
            setSelected(prev => prev === 0 ? 0 : prev - 1)
        } else if (focus && e.key === 'Enter' && data?.[0]) {
            ref.current.blur()
            clearInput()
            router.push(Actions.toStockDetail(data?.[selected].nseSymbol ?? data?.[selected].bseSymbol, data?.[selected].compName))
        }
    });

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
        <div className={`flex ${forPhone ? 'mx-auto' : 'ml-5'} w-[90vw] lg:w-[28%] max-w-[600px] rounded-full relative z-10`}>
            {(focus || data?.[0] || forPhone) && <div onClick={clearInput} onTouchStart={clearInput} className='fixed -top-[10vw] -right-[100vw] z-20 bg-[#20202092] w-[300vw] h-[300vw]' />}
            <input ref={ref} className='z-50 w-full bg-[#F5F5F5] border lg:border-black focus:border-none focus:caret-[#00439D] rounded-full h-10 pl-12 font-Inter text-base text-[#747474]'
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
                <div className="max-h-[400px] lg:max-h-[500px] pt-4 dataResult absolute z-[49] top-6 w-full rounded-b-[20px] overflow-y-auto no-scrollbar ">
                    {data?.[0] ?
                        data?.map((ele, i) => <Link key={i} href={Actions.toStockDetail(ele.nseSymbol ?? ele.bseSymbol, ele.compName)}
                            onClick={clearInput} className='bg-[#F5F5F5]'>
                            <div className={`h-12 rounded mx-4 ${i === selected ? 'bg-[#eaeaeaea]' : 'hover:bg-[#fafafafa]'}`} >
                                <hr className='mx-1' />
                                <div className='h-[18px] overflow-hidden ml-8 mt-2 font-Inter text-xs lg:text-sm font-medium text-[#00439D]'>{ele.compName} </div>
                                <div className='ml-8 font-Inter text-[10px] lg:text-[12px] leading-[16px] font-medium text-[#8A8A8A]'>
                                    {ele.nseSymbol ?? ele.bseSymbol}
                                </div>
                            </div>
                        </Link>) :
                        <p className='ml-8 my-2 font-Inter text-xs text-[#8A8A8A]'>Enter at least 3 character</p>}
                </div>
            }
        </div >
    );
}