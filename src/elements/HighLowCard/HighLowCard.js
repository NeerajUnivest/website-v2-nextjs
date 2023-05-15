import React, { useEffect, useState } from 'react';
import './HighLowCard.css'

export default function HighLowCard(props) {
    const [data, setData] = useState({});
    useEffect(() => {
        let finCodes = [];
        finCodes.push(props.finCode);
        if (props.stringDuration === '1D') {
            setData(props.list);
        } else {
            setData(props.data)
        }
    }, [props]);

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [ltpPrice, setLtpPrice] = useState(0);
    useEffect(() => {
        setLtpPrice(props.exchange === 'NSE' ? props.list.nseLtpPrice : props.list.bseLtpPrice)
        if (props.stringDuration === '1D') {
            setMin(props.exchange === 'NSE' ? data.nseTodaysLow : data.bseTodaysLow);
            setMax(props.exchange === 'NSE' ? data.nseTodaysHigh : data.bseTodaysHigh);
        } else if (data[0]) {
            setMin(Math.min(...data.map(item => item.y.toFixed(2))));
            setMax(Math.max(...data.map(item => item.y.toFixed(2))));
        }
    }, [props.stringDuration, data])

    let durations = ['Today', '1 week', '1 month', '3 month', '6 month', '1 year', '5 year'];
    return <div className="m-2 py-2 flex flex-row justify-between text-center border-1 border-[#EDEDED] col-span-10 lg:col-span-4">
        <div className='basis-1/3'>
            <div className="font-Inter font-medium text-[10px] text-[#8E8E93] leading-[16px]">
                {durations[props.duration]}`s low
            </div>
            <div className="text-[12px] leading-[20px] font-Inter font-semibold"><span
                className='font-Robert text-[14px]'>₹</span>{min?.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </div>
        </div>
        <div className='basis-1/3'>
            <div className="font-Inter font-medium text-[10px] text-[#8E8E93] leading-[16px]">
                {durations[props.duration]}`s high
            </div>
            <div className=" text-[12px] leading-[20px] font-Inter font-semibold"><span
                className='font-Robert text-[14px]'>₹</span>{max?.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </div>
        </div>
        <div className='basis-1/3'>
            <div className="font-Inter font-medium text-[10px] text-[#8E8E93] leading-[16px]">
                {durations[props.duration]}`s return
            </div>
            {props.stringDuration === '1D' ?
                ('nseClosePrice' in data) && <div className={`text-[12px] leading-[20px] font-Inter font-semibold text-[#26A649]
                    ${(props.exchange === 'NSE' ? data.nseLtpPrice - data.nseClosePrice : data.bseLtpPrice - data.bseClosePrice) > 0 ? 'text-[#26A649]' : 'text-[#EB4E2C]'}`}>
                    {(props.exchange === 'NSE' ? (data.nseLtpPrice - data.nseClosePrice) * 100 / data.nseClosePrice : (data.bseLtpPrice - data.bseClosePrice) * 100 / data.bseClosePrice).toFixed(2)}
                    <span className='font-Robert text-[14px]'>%</span>
                </div>

                :/**for more than one day **/
                data[0] && <div className={`text-[12px] leading-[20px] font-Inter font-semibold
                    ${data[data.length - 1].y - data[0].y > 0 ? 'text-[#26A649]' : 'text-[#EB4E2C]'}`}>
                    {((data[data.length - 1].y - data[0].y) * 100 / data[0].y).toFixed(2)}
                    <span className='font-Robert text-[14px]'>%</span>
                </div>}
        </div>
    </div>


}