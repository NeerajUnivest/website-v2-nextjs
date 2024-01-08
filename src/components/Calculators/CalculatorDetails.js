import React, { useEffect, useState } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import Image from 'next/image';
import sipImage from '@/assets/Images/calculators/sip.png';
import backIcon from '@/assets/icn/arrowLeft.webp';
import TrackYourReturnsSection from './TrackYourReturnsSection';
import FutureValueSection from './FutureValueSection';
import ReturnCompareSection from './ReturnCompareSection';
import ExtraDetailsSection from './ExtraDetailsSection';
import EliteFAQSection from '../Elite/EliteFAQSection';
import AmortizationDetailSetion from './AmortizationDetailSetion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import calcData from '@/pages/calculators/calculatorsJsonData';
import Actions from '@/elements/Actions';


export default function CalculatorDetails({ name, data }) {
    const { push } = useRouter();
    const [calcType, setCalcType] = useState('');
    // const formatAmount = value => amountLabels[value]

    const [param1, setParam1] = useState(data?.param1);
    const [param2, setParam2] = useState(data?.param2);
    const [param3, setParam3] = useState(data?.param3);
    const [param4, setParam4] = useState(data?.param4);
    const [param5, setParam5] = useState(data?.param5);
    const [param6, setParam6] = useState(data?.param6);

    const [customOutput, setCustomOutput] = useState(data?.outputs);

    useEffect(() => {
        setCalcType(name)
    }, [name])
    useEffect(() => {
        if (calcType == 'SIP') {
            setCustomOutput([
                {
                    name: 'Invested Amount',
                    formula: `(param1 * (param3 * 12))`
                },
                {
                    name: 'Estimated Return',
                    formula: ' (param1 * ((Math.pow((1 + ((param2 / 12) / 100)), (param3 * 12)) - 1) / ((param2 / 12) / 100)) * (1 + ((param2 / 12) / 100))) - (param1 * (param3 * 12))',
                },
                {
                    name: 'Total Value',
                    formula: ` param1 * ((Math.pow((1 + ((param2 / 12) / 100)), (param3 * 12)) - 1) / ((param2 / 12) / 100)) * (1 + ((param2 / 12) / 100))`
                }
            ])
        }
        if (calcType == 'Lumpsum') {
            setCustomOutput([
                {
                    name: 'Total Investment',
                    formula: `(param1)`
                },
                {
                    name: 'Estimated Return',
                    formula: ' (param1 * (Math.pow((1+param2/100), param3 ))) - param1 ',
                },
                {
                    name: 'Total Value',
                    formula: `param1 * (Math.pow((1+param2/100), param3 ))`
                }
            ])
        }
    }, [calcType])
    // console.log({ data });
    // console.log({ calcType: data?.option });

    return (
        <>
            <section className='font-Inter relative overflow-hidden pt-20 pb-12 lg:mx-20 lg:pt-32' >
                <div className='inline-flex items-start gap-10 w-full'>
                    <div className='w-1/4 overflow-hidden hidden lg:flex lg:flex-col border-2 border-solid lg:rounded-xl border-[color:var(--Neutral-200,#EDEDED)] '>
                        <div className='flex w-80 items-center gap-4 px-3 py-4  '>
                            <Image onClick={() => push('/calculators')} src={backIcon} alt='demo' className='w-4 h-4' />
                            <p className='text-black text-xl not-italic font-semibold leading-8'>Calculators home</p>
                        </div>
                        {calcData?.map((ele, i) =>
                            <Link key={i} href={`${ele?.title}`} >
                                <div className={`${name == ele?.title ? 'bg-[#ECF6FE]' : ''} py-[22px] relative border-t-[1px] border-[color:var(--Neutral-300,#DFDFDF)] border-solid items-center justify-start flex pl-3 pr-12 `}>
                                    <Image src={ele?.icon} alt='demo' className=' w-[48px] h-[48px] bottom-0 right-0 absolute ' />
                                    <p className='text-black text-base not-italic font-semibold leading-7'>{ele?.title} calculator</p>
                                </div>
                            </Link>
                        )}
                    </div>
                    <div className=' flex flex-col gap-8 w-full'>
                        <div className=' lg:w-full'>
                            <div className='relative px-4 py-[17px] lg:rounded-2xl overflow-hidden lg:px-[22px] lg:py-6' style={{ background: `linear-gradient(180deg, ${data?.bgColor} 0%, rgba(244, 193, 182, 0.00) 100%)` }} >
                                <Image src={data?.icon} alt='demo' className=' w-[56px] h-[56px] bottom-0 right-0 absolute lg:w-[88px] lg:h-[88px]' />
                                <div className='inline-flex flex-col items-start gap-0.5 lg:gap-2'>
                                    <p className='text-black text-base not-italic font-bold leading-7 lg:text-2xl'>{name} calculator</p>
                                    <p className='text-[#414141] text-center text-xs not-italic font-medium leading-5 lg:text-xl'>Optimize your investment strategy accurately</p>
                                </div>
                            </div>
                            <div className='  mt-4 mx-4 flex flex-col gap-4 lg:flex-row lg:mt-10 lg:mx-0 lg:gap-8'>
                                <div className={`h-half w-full ${data?.title != 'EPF' ? 'lg:w-3/5' : ''}  flex flex-col border border-black  pb-3 lg:pb-4  rounded-xl border-solid  overflow-hidden `}>
                                    <div className='flex w-full justify-between items-center  px-4 py-2 bg-black'>
                                        <p className='text-[color:var(--Neutral-300,#DFDFDF)] text-xs not-italic font-bold leading-5 lg:text-base'>Total value</p>
                                        <p className='text-[color:var(--Pearl-White,#FFF)] text-base not-italic font-extrabold leading-7 lg:text-2xl'>₹{Actions.putComma(eval(data?.title == 'SIP' || data?.title == 'Lumpsum' ? customOutput[2]?.formula : data?.totalValueFormula), 0)}</p>
                                    </div>
                                    <div className=' m-auto flex flex-col items-center gap-4 w-full px-3 '>
                                        {(name == 'SIP' || name == 'Lumpsum') && <div className='mt-3 lg:mt-4 flex w-full flex-col justify-center items-center gap-1 border border-[color:var(--Neutral-300,#DFDFDF)] p-3 rounded-xl border-solid'>
                                            <div className='flex items-start gap-6 text-black text-xs not-italic font-bold leading-5'>
                                                <div className='flex items-center gap-2'>
                                                    <input type='radio' id='SIP' name='type' checked={calcType == 'SIP'} value={calcType} onClick={() => setCalcType('SIP')} />
                                                    <label className='text-black text-xs not-italic font-bold leading-5 lg:text-base' htmlFor='SIP'>SIP</label>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <input type='radio' id='Lumpsum' name='type' checked={calcType == 'Lumpsum'} value={calcType} onClick={() => setCalcType('Lumpsum')} />
                                                    <label className='text-black text-xs not-italic font-bold leading-5 lg:text-base' htmlFor='Lumpsum'>Lumpsum</label>
                                                </div>
                                            </div>
                                        </div>}
                                        {/* {data.option.map((ele, i) => {
                                            return <div key={i} className='flex w-full flex-col items-start gap-1 border border-[color:var(--Neutral-300,#DFDFDF)] pt-3 pb-2 px-3 rounded-xl border-solid'>
                                                <div className='flex justify-between items-center self-stretch'>
                                                    <p className='text-black text-xs not-italic font-bold leading-5 lg:text-sm'>{ele?.name}</p>
                                                    <div className='flex justify-end items-center gap-0.5 px-2 py-1 rounded-lg bg-[#F5F5F5]' >
                                                        <p className='text-black text-right text-xs not-italic font-semibold leading-5'>{ele?.type == 'number' ? '₹ ' : ''}{Actions.putComma(param1, 0)}{ele?.type == 'percentage' ? ' %' : ''}{ele.type == 'duration' ? ' yr(s)' : ''}</p>
                                                    </div>
                                                </div>
                                                <div className='max-w-screen-xl mx-auto w-full flex flex-col gap-4 '>
                                                    <Slider
                                                        {...ele ?? {}}
                                                        tooltip={false}
                                                        value={param1}
                                                        onChange={(v) => setParam1(v)}
                                                    />
                                                </div>
                                            </div>
                                        })} */}
                                        {data?.param1 && <div className='flex w-full flex-col items-start gap-1 border border-[color:var(--Neutral-300,#DFDFDF)] pt-3 pb-2 px-3 rounded-xl border-solid'>
                                            <div className='flex justify-between items-center self-stretch'>
                                                <p className='text-black text-xs not-italic font-bold leading-5 lg:text-sm'>{data?.option?.slider1?.name}</p>
                                                <div className='flex justify-end items-center gap-0.5 px-2 py-1 rounded-lg bg-[#F5F5F5]' >
                                                    <p className='text-black text-right text-xs not-italic font-semibold leading-5'>{data?.option?.slider1?.type == 'number' ? '₹ ' : ''}{Actions.putComma(param1, 0)}{data?.option?.slider1?.type == 'percentage' ? ' %' : ''}{data?.option?.slider1?.type == 'duration' ? ' yr(s)' : ''}</p>
                                                </div>
                                            </div>
                                            <div className='max-w-screen-xl mx-auto w-full flex flex-col gap-4 '>
                                                <Slider
                                                    {...data?.option?.slider1 ?? {}}
                                                    tooltip={false}
                                                    value={param1}
                                                    onChange={(v) => setParam1(v)}
                                                />
                                            </div>
                                        </div>}
                                        {data?.param2 && <div className='flex w-full flex-col items-start gap-1 border border-[color:var(--Neutral-300,#DFDFDF)] pt-3 pb-2 px-3 rounded-xl border-solid'>
                                            <div className='flex justify-between items-center self-stretch'>
                                                <p className='text-black text-xs not-italic font-bold leading-5 lg:text-sm'>{data?.option?.slider2?.name}</p>
                                                <div className='flex justify-end items-center gap-0.5 px-2 py-1 rounded-lg bg-[#F5F5F5]' >
                                                    <p className='text-black text-right text-xs not-italic font-semibold leading-5'>{data?.option?.slider2?.type == 'number' ? '₹ ' : ''}{Actions.putComma(param2, 0)}{data?.option?.slider2?.type == 'percentage' ? ' %' : ''}{data?.option?.slider2?.type == 'duration' ? ' yr(s)' : ''}</p>
                                                </div>
                                            </div>
                                            <div className='max-w-screen-xl mx-auto w-full flex flex-col gap-4 '>
                                                <Slider
                                                    {...data?.option?.slider2 ?? {}}
                                                    tooltip={false}
                                                    value={param2}
                                                    // format={formatAmount}
                                                    onChange={(v) => setParam2(v)}
                                                />
                                            </div>
                                        </div>}
                                        {data?.param3 && <div className='flex w-full flex-col items-start gap-1 border border-[color:var(--Neutral-300,#DFDFDF)] pt-3 pb-2 px-3 rounded-xl border-solid'>
                                            <div className='flex justify-between items-center self-stretch'>
                                                <p className='text-black text-xs not-italic font-bold leading-5 lg:text-sm'>{data?.option?.slider3?.name}</p>
                                                <div className='flex justify-end items-center gap-0.5 px-2 py-1 rounded-lg bg-[#F5F5F5]' >
                                                    <p className='text-black text-right text-xs not-italic font-semibold leading-5'>{data?.option?.slider3?.type == 'number' ? '₹ ' : ''}{Actions.putComma(param3, 0)}{data?.option?.slider3?.type == 'percentage' ? ' %' : ''}{data?.option?.slider3?.type == 'duration' ? ' yr(s)' : ''}</p>
                                                </div>
                                            </div>
                                            <div className='max-w-screen-xl mx-auto w-full flex flex-col gap-4 '>
                                                <Slider
                                                    {...data?.option?.slider3 ?? {}}
                                                    tooltip={false}
                                                    value={param3}
                                                    // format={formatAmount}
                                                    onChange={(v) => setParam3(v)}
                                                />
                                            </div>
                                        </div>}
                                        {data?.param4 && <div className='flex w-full flex-col items-start gap-1 border border-[color:var(--Neutral-300,#DFDFDF)] pt-3 pb-2 px-3 rounded-xl border-solid'>
                                            <div className='flex justify-between items-center self-stretch'>
                                                <p className='text-black text-xs not-italic font-bold leading-5 lg:text-sm'>{data?.option?.slider4?.name}</p>
                                                <div className='flex justify-end items-center gap-0.5 px-2 py-1 rounded-lg bg-[#F5F5F5]' >
                                                    <p className='text-black text-right text-xs not-italic font-semibold leading-5'>{data?.option?.slider4?.type == 'number' ? '₹ ' : ''}{Actions.putComma(param4, 0)}{data?.option?.slider4?.type == 'percentage' ? ' %' : ''}{data?.option?.slider4?.type == 'duration' ? ' yr(s)' : ''}</p>
                                                </div>
                                            </div>
                                            <div className='max-w-screen-xl mx-auto w-full flex flex-col gap-4 '>
                                                <Slider
                                                    {...data?.option?.slider4 ?? {}}
                                                    tooltip={false}
                                                    value={param4}
                                                    // format={formatAmount}
                                                    onChange={(v) => setParam4(v)}
                                                />
                                            </div>
                                        </div>}
                                        {data?.param5 && <div className='flex w-full flex-col items-start gap-1 border border-[color:var(--Neutral-300,#DFDFDF)] pt-3 pb-2 px-3 rounded-xl border-solid'>
                                            <div className='flex justify-between items-center self-stretch'>
                                                <p className='text-black text-xs not-italic font-bold leading-5 lg:text-sm'>{data?.option?.slider5?.name}</p>
                                                <div className='flex justify-end items-center gap-0.5 px-2 py-1 rounded-lg bg-[#F5F5F5]' >
                                                    <p className='text-black text-right text-xs not-italic font-semibold leading-5'>{data?.option?.slider5?.type == 'number' ? '₹ ' : ''}{Actions.putComma(param5, 0)}{data?.option?.slider5?.type == 'percentage' ? ' %' : ''}{data?.option?.slider5?.type == 'duration' ? ' yr(s)' : ''}</p>
                                                </div>
                                            </div>
                                            <div className='max-w-screen-xl mx-auto w-full flex flex-col gap-4 '>
                                                <Slider
                                                    {...data?.option?.slider5 ?? {}}
                                                    tooltip={false}
                                                    value={param5}
                                                    // format={formatAmount}
                                                    onChange={(v) => setParam5(v)}
                                                />
                                            </div>
                                        </div>}
                                        {data?.param6 && <div className='flex w-full flex-col items-start gap-1 border border-[color:var(--Neutral-300,#DFDFDF)] pt-3 pb-2 px-3 rounded-xl border-solid'>
                                            <div className='flex justify-between items-center self-stretch'>
                                                <p className='text-black text-xs not-italic font-bold leading-5 lg:text-sm'>{data?.option?.slider6?.name}</p>
                                                <div className='flex justify-end items-center gap-0.5 px-2 py-1 rounded-lg bg-[#F5F5F5]' >
                                                    <p className='text-black text-right text-xs not-italic font-semibold leading-5'>{data?.option?.slider6?.type == 'number' ? '₹ ' : ''}{Actions.putComma(param6, 0)}{data?.option?.slider6?.type == 'percentage' ? ' %' : ''}{data?.option?.slider6?.type == 'duration' ? ' yr(s)' : ''}</p>
                                                </div>
                                            </div>
                                            <div className='max-w-screen-xl mx-auto w-full flex flex-col gap-4 '>
                                                <Slider
                                                    {...data?.option?.slider6 ?? {}}
                                                    tooltip={false}
                                                    value={param6}
                                                    // format={formatAmount}
                                                    onChange={(v) => setParam6(v)}
                                                />
                                            </div>
                                        </div>}
                                    </div>
                                </div>
                                {data?.title != 'EPF' && <TrackYourReturnsSection data={data} param1={param1} param2={param2} param3={param3} totalValue={data?.title == 'SIP' || data?.title == 'Lumpsum' ? (eval(customOutput[2]?.formula)) : eval(data?.totalValueFormula)} color={data?.sliderColor} outputs={data?.title == 'SIP' || data?.title == 'Lumpsum' ? customOutput : data?.outputs} />}
                            </div>
                        </div>
                        {(calcType == 'SIP') && <FutureValueSection monthlyInvestment={param1} returnRate={param2} timePeriod={param3} />}
                        <ReturnCompareSection type={data?.chartType} />
                        {data?.amortization && <AmortizationDetailSetion />}
                        <ExtraDetailsSection data={data?.extraDetails} />
                        <div className='flex flex-col items-start gap-3 lg:hidden mx-4'>
                            <div className='flex w-full justify-between items-center'>
                                <p className='text-black text-base not-italic font-bold leading-7'>More calculators</p>
                                <p onClick={() => push('/calculators')} className='text-[color:var(--Primary-900,#00439D)] text-xs not-italic font-semibold leading-5'>View all</p>
                            </div>
                            <div className=' w-full grid grid-cols-2 items-center gap-4'>
                                {calcData?.filter(ele => ele?.title != name)?.map((ele, i) =>
                                    <Link key={i} href={`/calculators/${ele?.title}`} >
                                        <div className=' relative px-3 py-3 w-full border border-[color:var(--Neutral-300,#DFDFDF)] rounded-xl border-solid'>
                                            <Image src={ele?.icon} alt='demo' className=' w-[40px] h-[40px] bottom-0 right-0 absolute ' />
                                            <p className='text-black text-base not-italic font-semibold leading-7'>{ele?.title} <br /> calculator</p>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        </div>
                        <EliteFAQSection data={data?.faqs} />
                    </div>
                </div>
            </section >

            <style>
                {`
                .rangeslider__fill {
                    background: ${data?.sliderColor} !important;
                    height:2px !important;
                    margin:0px !important;
                }
                .rangeslider-horizontal {
                    height: 2px !important;
                    border-radius: 10px;
                }

                .rangeslider-horizontal .rangeslider__handle {
                    width: 15px !important;
                    height: 15px !important;
                }
                
                `}
            </style>
        </>
    )
}
