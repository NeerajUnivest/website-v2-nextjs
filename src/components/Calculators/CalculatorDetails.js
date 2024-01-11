import React, { useEffect, useState } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import Image from 'next/image';
import sipImage from '@/assets/images/calculators/sip.png';
import backIcon from '@/assets/icn/arrowLeft.webp';
import TrackYourReturnsSection from './TrackYourReturnsSection';
import FutureValueSection from './FutureValueSection';
import ReturnCompareSection from './ReturnCompareSection';
import ExtraDetailsSection from './ExtraDetailsSection';
import EliteFAQSection from '../Elite/EliteFAQSection';
import AmortizationDetailSetion from './AmortizationDetailSetion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import calcData from '@/components/Calculators/calculatorsJsonData';
import Actions from '@/elements/Actions';
import { Mixpanel } from '@/elements/Mixpanel';
import { AiOutlineRight } from 'react-icons/ai';


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
    const [customProValueFormula, setCustomProValFormula] = useState(data?.proValueFormula);

    useEffect(() => {
        Mixpanel.pageView(
            {
                'page': 'calculators',
                'calculator': name?.toLowerCase()
            }
        )
    }, [])

    const handleSliderChange = () => {
        Mixpanel.track('slider_used', {
            'page': 'calculators',
            'calculator': name?.toLowerCase()
        })
    }

    useEffect(() => {
        setCalcType(name)
    }, [name])
    useEffect(() => {
        if (calcType == 'sip-calculator') {
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
            setCustomProValFormula('param1 * ((Math.pow((1 + ((30 / 12) / 100)), (param3 * 12)) - 1) / ((30 / 12) / 100)) * (1 + ((30 / 12) / 100))');
        }
        if (calcType == 'lumpsum-calculator') {
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
            setCustomProValFormula('param1 * (Math.pow((1+30/100), param3 ))');
        }
    }, [calcType])
    // console.log({ data });
    // console.log({ calcType: data?.option });

    return (
        <>
            <section className='font-Inter relative  pt-20 pb-12 lg:mx-20 lg:pt-32' >
                <div className='inline-flex gap-10 w-full relative'>
                    <nav className="w-full mx-4 absolute -top-8 hidden md:block">
                        <ol className="list-reset flex">
                            <li>
                                <Link
                                    href="/"
                                    className="text-primary text-xs font-medium"
                                >Home</Link>
                            </li>
                            <li className=" flex items-end mb-1 px-2">
                                <AiOutlineRight color='#707070' size={14} />
                            </li>
                            <li>
                                <Link
                                    href="/calculators"
                                    className="text-primary text-xs font-medium"
                                >Calculators</Link>
                            </li>
                            <li className=" flex items-end mb-1 px-2">
                                <AiOutlineRight color='#707070' size={14} />
                            </li>
                            <li>
                                <span className="text-primary text-xs font-medium">{data?.title}
                                </span>
                            </li>
                        </ol>
                    </nav>
                    <div className=' sticky top-[100px] self-start w-1/4 overflow-auto hidden lg:flex lg:flex-col border-2 border-solid lg:rounded-xl border-[color:var(--Neutral-200,#EDEDED)] '>
                        <div className='flex w-80 items-center gap-4 px-3 py-4  '>
                            <Image onClick={() => push('/calculators')} src={backIcon} alt='demo' className='w-4 h-4' />
                            <p className='text-black text-xl not-italic font-semibold leading-8'>Calculators home</p>
                        </div>
                        {calcData?.map((ele, i) =>
                            <Link key={i} href={`${ele?.url}`} >
                                <div className={`${name == ele?.url ? 'bg-[#ECF6FE]' : ''} py-[22px] relative border-t-[1px] border-[color:var(--Neutral-300,#DFDFDF)] border-solid items-center justify-start flex pl-3 pr-12 `}>
                                    <Image src={ele?.icon} alt='demo' className={`${name == ele?.url ? 'w-[48px] h-[48px] opacity-70' : 'w-[40px] h-[40px]'} bottom-0 right-0 absolute opacity-40`} />
                                    <p className='text-black text-base not-italic font-semibold leading-7 line-clamp-1'>{ele?.title} calculator</p>
                                </div>
                            </Link>
                        )}
                    </div>
                    <div className=' flex flex-col gap-8 w-full lg:w-3/4 '>
                        <div className=' lg:w-full'>
                            <div className='relative px-4 py-[17px] lg:rounded-2xl overflow-hidden lg:px-[22px] lg:py-6' style={{ background: `linear-gradient(180deg, ${data?.bgColor} 0%, rgba(244, 193, 182, 0.00) 100%)` }} >
                                <Image src={data?.icon} alt='demo' className=' w-[56px] h-[56px] bottom-0 right-0 absolute lg:w-[88px] lg:h-[88px]' />
                                <div className='inline-flex flex-col items-start gap-0.5 lg:gap-2'>
                                    <p className='text-black text-base not-italic font-bold leading-7 lg:text-2xl'>{data?.title} calculator</p>
                                    <p className='text-[#414141] text-center text-xs not-italic font-medium leading-5 lg:text-xl'>Optimize your investment strategy accurately</p>
                                </div>
                            </div>
                            <div className='  mt-4 mx-4 flex flex-col gap-4 lg:flex-row lg:mt-10 lg:mx-0 lg:gap-8'>
                                <div className={`h-half w-full ${data?.title != 'EPF' ? 'lg:w-3/5' : ''}  flex flex-col border border-black  pb-3  ${(name == 'sip-calculator' || name == 'lumpsum-calculator') ? 'lg:pb-4' : 'lg:pb-0'}  rounded-xl border-solid  overflow-hidden `}>
                                    <div className='flex w-full justify-between items-center  px-4 py-2 bg-black'>
                                        <p className='text-[color:var(--Neutral-300,#DFDFDF)] text-xs not-italic font-bold leading-5 lg:text-base'>{data?.totalValueText}</p>
                                        <p className='text-[color:var(--Pearl-White,#FFF)] text-base not-italic font-extrabold leading-7 lg:text-2xl'>₹{Actions.putComma((!isNaN(eval(data?.title == 'SIP' || data?.title == 'Lumpsum' ? (customOutput[2]?.formula) : data?.totalValueFormula)) ? eval(data?.title == 'SIP' || data?.title == 'Lumpsum' ? (customOutput[2]?.formula) : data?.totalValueFormula) : 0), 0)}</p>
                                    </div>
                                    <div className=' m-auto flex flex-col items-center gap-4 w-full px-3 pt-4 lg:pt-0 '>
                                        {(name == 'sip-calculator' || name == 'lumpsum-calculator') && <div className=' lg:mt-4 flex w-full flex-col justify-center items-center gap-1 border border-[color:var(--Neutral-300,#DFDFDF)] p-3 rounded-xl border-solid'>
                                            <div className='flex items-start gap-6 text-black text-xs not-italic font-bold leading-5'>
                                                <div className='flex items-center gap-2'>
                                                    <input type='radio' id='sip-calculator' name='type' checked={calcType == 'sip-calculator'} value={calcType} onClick={() => setCalcType('sip-calculator')} />
                                                    <label className='text-black text-xs not-italic font-bold leading-5 lg:text-base' htmlFor='sip-calculator'>SIP</label>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <input type='radio' id='lumpsum-calculator' name='type' checked={calcType == 'lumpsum-calculator'} value={calcType} onClick={() => setCalcType('lumpsum-calculator')} />
                                                    <label className='text-black text-xs not-italic font-bold leading-5 lg:text-base' htmlFor='lumpsum-calculator'>Lumpsum</label>
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
                                        {data?.param1 && <div className={`flex w-full flex-col items-start gap-1 border border-[color:var(--Neutral-300,#DFDFDF)] ${(name != 'sip-calculator' || name != 'lumpsum-calculator') ? 'pt-3' : ''}  pb-2 px-3 rounded-xl border-solid`}>
                                            <div className='flex justify-between items-center self-stretch'>
                                                <p className='text-black text-xs not-italic font-bold leading-5 lg:text-sm'>{data?.option?.slider1?.name}</p>
                                                <div className='flex justify-end items-center gap-0.5 px-2 py-1 rounded-lg bg-[#F5F5F5]' >
                                                    {/* <p className='text-black text-right text-xs not-italic font-semibold leading-5'>{data?.option?.slider1?.type == 'number' ? '₹ ' : ''}{Actions.putComma(param1, 0)}{data?.option?.slider1?.type == 'percentage' ? ' %' : ''}{data?.option?.slider1?.type == 'duration' ? ' yr(s)' : ''}</p> */}
                                                    <span className='text-[color:var(--Neutral-900,#202020)] text-right text-xs not-italic font-semibold leading-5'>{data?.option?.slider1?.type == 'number' ? '₹ ' : ''} <input min={0} onInput={(e) => e.target.value = e.target.value.slice(0, (data?.option?.slider1?.max + '').length)} type='number' onWheel={event => event.currentTarget.blur()} value={data?.option?.slider1?.type == 'percentage' ? Number.parseFloat(param1) : param1} onChange={e => setParam1(e.target.value)} className={` ${data?.option?.slider1.type == 'duration' ? 'w-[60px]' : 'w-[80px]'} text-black text-right text-xs not-italic font-semibold leading-5 bg-transparent`} /> {data?.option?.slider1?.type == 'percentage' ? ' %' : ''}{data?.option?.slider1?.type == 'duration' ? ' yr(s)' : ''}</span>
                                                </div>
                                            </div>
                                            <div className='max-w-screen-xl mx-auto w-full flex flex-col gap-4 '>
                                                <Slider
                                                    {...data?.option?.slider1 ?? {}}
                                                    tooltip={false}
                                                    value={param1}
                                                    onChange={(v) => setParam1(v)}
                                                    onChangeComplete={(e) => {
                                                        Mixpanel.track('cta_clicked', {
                                                            'cta_text': param1,
                                                            'page': 'calculator_detail',
                                                            'widget': 'calculator'
                                                        })
                                                    }}
                                                />
                                            </div>
                                        </div>}
                                        {data?.param2 && <div className='flex w-full flex-col items-start gap-1 border border-[color:var(--Neutral-300,#DFDFDF)] pt-3 pb-2 px-3 rounded-xl border-solid'>
                                            <div className='flex justify-between items-center self-stretch'>
                                                <p className='text-black text-xs not-italic font-bold leading-5 lg:text-sm'>{data?.option?.slider2?.name}</p>
                                                <div className='flex justify-end items-center gap-0.5 px-2 py-1 rounded-lg bg-[#F5F5F5]' >
                                                    {/* <p className='text-black text-right text-xs not-italic font-semibold leading-5'>{data?.option?.slider2?.type == 'number' ? '₹ ' : ''}{Actions.putComma(param2, 0)}{data?.option?.slider2?.type == 'percentage' ? ' %' : ''}{data?.option?.slider2?.type == 'duration' ? ' yr(s)' : ''}</p> */}
                                                    <span className='text-[color:var(--Neutral-900,#202020)] text-right text-xs not-italic font-semibold leading-5'>{data?.option?.slider2?.type == 'number' ? '₹ ' : ''} <input min={0} onInput={(e) => e.target.value = e.target.value.slice(0, (data?.option?.slider2?.max + '').length)} type='number' onWheel={event => event.currentTarget.blur()} value={data?.option?.slider2?.type == 'percentage' ? Number.parseFloat(param2) : param2} onChange={e => setParam2(e.target.value)} className={` ${data?.option?.slider2.type == 'duration' ? 'w-[60px]' : 'w-[80px]'} text-black text-right text-xs not-italic font-semibold leading-5 bg-transparent`} /> {data?.option?.slider2?.type == 'percentage' ? ' %' : ''}{data?.option?.slider2?.type == 'duration' ? ' yr(s)' : ''}</span>
                                                </div>
                                            </div>
                                            <div className='max-w-screen-xl mx-auto w-full flex flex-col gap-4 '>
                                                <Slider
                                                    {...data?.option?.slider2 ?? {}}
                                                    tooltip={false}
                                                    value={param2}
                                                    // format={formatAmount}
                                                    onChange={(v) => setParam2(v)}
                                                    onChangeComplete={(e) => {
                                                        Mixpanel.track('cta_clicked', {
                                                            'cta_text': param2,
                                                            'page': 'calculator_detail',
                                                            'widget': 'calculator'
                                                        })
                                                    }}
                                                />
                                            </div>
                                        </div>}
                                        {data?.param3 && <div className='flex w-full flex-col items-start gap-1 border border-[color:var(--Neutral-300,#DFDFDF)] pt-3 pb-2 px-3 rounded-xl border-solid'>
                                            <div className='flex justify-between items-center self-stretch'>
                                                <p className='text-black text-xs not-italic font-bold leading-5 lg:text-sm'>{data?.option?.slider3?.name}</p>
                                                <div className='flex justify-end items-center gap-0.5 px-2 py-1 rounded-lg bg-[#F5F5F5]' >
                                                    {/* <p className='text-black text-right text-xs not-italic font-semibold leading-5'>{data?.option?.slider3?.type == 'number' ? '₹ ' : ''}{Actions.putComma(param3, 0)}{data?.option?.slider3?.type == 'percentage' ? ' %' : ''}{data?.option?.slider3?.type == 'duration' ? ' yr(s)' : ''}</p> */}
                                                    <span className='text-[color:var(--Neutral-900,#202020)] text-right text-xs not-italic font-semibold leading-5'>{data?.option?.slider3?.type == 'number' ? '₹ ' : ''} <input min={0} onInput={(e) => e.target.value = e.target.value.slice(0, (data?.option?.slider3?.max + '').length)} type='number' onWheel={event => event.currentTarget.blur()} value={data?.option?.slider3?.type == 'percentage' ? Number.parseFloat(param3) : param3} onChange={e => setParam3(e.target.value)} className={` ${data?.option?.slider3.type == 'duration' ? 'w-[60px]' : 'w-[80px]'} text-black text-right text-xs not-italic font-semibold leading-5 bg-transparent`} /> {data?.option?.slider3?.type == 'percentage' ? ' %' : ''}{data?.option?.slider3?.type == 'duration' ? ' yr(s)' : ''}</span>
                                                </div>
                                            </div>
                                            <div className='max-w-screen-xl mx-auto w-full flex flex-col gap-4 '>
                                                <Slider
                                                    {...data?.option?.slider3 ?? {}}
                                                    tooltip={false}
                                                    value={param3}
                                                    // format={formatAmount}
                                                    onChange={(v) => setParam3(v)}
                                                    onChangeComplete={(e) => {
                                                        Mixpanel.track('cta_clicked', {
                                                            'cta_text': param3,
                                                            'page': 'calculator_detail',
                                                            'widget': 'calculator'
                                                        })
                                                    }}
                                                />
                                            </div>
                                        </div>}
                                        {data?.param4 && <div className='flex w-full flex-col items-start gap-1 border border-[color:var(--Neutral-300,#DFDFDF)] pt-3 pb-2 px-3 rounded-xl border-solid'>
                                            <div className='flex justify-between items-center self-stretch'>
                                                <p className='text-black text-xs not-italic font-bold leading-5 lg:text-sm'>{data?.option?.slider4?.name}</p>
                                                <div className='flex justify-end items-center gap-0.5 px-2 py-1 rounded-lg bg-[#F5F5F5]' >
                                                    {/* <p className='text-black text-right text-xs not-italic font-semibold leading-5'>{data?.option?.slider4?.type == 'number' ? '₹ ' : ''}{Actions.putComma(param4, 0)}{data?.option?.slider4?.type == 'percentage' ? ' %' : ''}{data?.option?.slider4?.type == 'duration' ? ' yr(s)' : ''}</p> */}
                                                    <span className='text-[color:var(--Neutral-900,#202020)] text-right text-xs not-italic font-semibold leading-5'>{data?.option?.slider4?.type == 'number' ? '₹ ' : ''} <input min={0} onInput={(e) => e.target.value = e.target.value.slice(0, (data?.option?.slider4?.max + '').length)} type='number' onWheel={event => event.currentTarget.blur()} value={data?.option?.slider4?.type == 'percentage' ? Number.parseFloat(param4) : param4} onChange={e => setParam4(e.target.value)} className={` ${data?.option?.slider4.type == 'duration' ? 'w-[60px]' : 'w-[80px]'} text-black text-right text-xs not-italic font-semibold leading-5 bg-transparent`} /> {data?.option?.slider4?.type == 'percentage' ? ' %' : ''}{data?.option?.slider4?.type == 'duration' ? ' yr(s)' : ''}</span>
                                                </div>
                                            </div>
                                            <div className='max-w-screen-xl mx-auto w-full flex flex-col gap-4 '>
                                                <Slider
                                                    {...data?.option?.slider4 ?? {}}
                                                    tooltip={false}
                                                    value={param4}
                                                    // format={formatAmount}
                                                    onChange={(v) => setParam4(v)}
                                                    onChangeComplete={(e) => {
                                                        Mixpanel.track('cta_clicked', {
                                                            'cta_text': param4,
                                                            'page': 'calculator_detail',
                                                            'widget': 'calculator'
                                                        })
                                                    }}
                                                />
                                            </div>
                                        </div>}
                                        {data?.param5 && <div className='flex w-full flex-col items-start gap-1 border border-[color:var(--Neutral-300,#DFDFDF)] pt-3 pb-2 px-3 rounded-xl border-solid'>
                                            <div className='flex justify-between items-center self-stretch'>
                                                <p className='text-black text-xs not-italic font-bold leading-5 lg:text-sm'>{data?.option?.slider5?.name}</p>
                                                <div className='flex justify-end items-center gap-0.5 px-2 py-1 rounded-lg bg-[#F5F5F5]' >
                                                    {/* <p className='text-black text-right text-xs not-italic font-semibold leading-5'>{data?.option?.slider5?.type == 'number' ? '₹ ' : ''}{Actions.putComma(param5, 0)}{data?.option?.slider5?.type == 'percentage' ? ' %' : ''}{data?.option?.slider5?.type == 'duration' ? ' yr(s)' : ''}</p> */}
                                                    <span className='text-[color:var(--Neutral-900,#202020)] text-right text-xs not-italic font-semibold leading-5'>{data?.option?.slider5?.type == 'number' ? '₹ ' : ''} <input min={0} onInput={(e) => e.target.value = e.target.value.slice(0, (data?.option?.slider5?.max + '').length)} type='number' onWheel={event => event.currentTarget.blur()} value={data?.option?.slider5?.type == 'percentage' ? Number.parseFloat(param5) : param5} onChange={e => setParam5(e.target.value)} className={` ${data?.option?.slider5.type == 'duration' ? 'w-[60px]' : 'w-[80px]'} text-black text-right text-xs not-italic font-semibold leading-5 bg-transparent`} /> {data?.option?.slider5?.type == 'percentage' ? ' %' : ''}{data?.option?.slider5?.type == 'duration' ? ' yr(s)' : ''}</span>
                                                </div>
                                            </div>
                                            <div className='max-w-screen-xl mx-auto w-full flex flex-col gap-4 '>
                                                <Slider
                                                    {...data?.option?.slider5 ?? {}}
                                                    tooltip={false}
                                                    value={param5}
                                                    // format={formatAmount}
                                                    onChange={(v) => setParam5(v)}
                                                    onChangeComplete={(e) => {
                                                        Mixpanel.track('cta_clicked', {
                                                            'cta_text': param5,
                                                            'page': 'calculator_detail',
                                                            'widget': 'calculator'
                                                        })
                                                    }}
                                                />
                                            </div>
                                        </div>}
                                        {data?.param6 && <div className='flex w-full flex-col items-start gap-1 border border-[color:var(--Neutral-300,#DFDFDF)] pt-3 pb-2 px-3 rounded-xl border-solid'>
                                            <div className='flex justify-between items-center self-stretch'>
                                                <p className='text-black text-xs not-italic font-bold leading-5 lg:text-sm'>{data?.option?.slider6?.name}</p>
                                                <div className='flex justify-end items-center gap-0.5 px-2 py-1 rounded-lg bg-[#F5F5F5]' >
                                                    {/* <p className='text-black text-right text-xs not-italic font-semibold leading-5'>{data?.option?.slider6?.type == 'number' ? '₹ ' : ''}{Actions.putComma(param6, 0)}{data?.option?.slider6?.type == 'percentage' ? ' %' : ''}{data?.option?.slider6?.type == 'duration' ? ' yr(s)' : ''}</p> */}
                                                    <span className='text-[color:var(--Neutral-900,#202020)] text-right text-xs not-italic font-semibold leading-5'>{data?.option?.slider6?.type == 'number' ? '₹ ' : ''} <input min={0} onInput={(e) => e.target.value = e.target.value.slice(0, (data?.option?.slider6?.max + '').length)} type='number' onWheel={event => event.currentTarget.blur()} value={data?.option?.slider6?.type == 'percentage' ? Number.parseFloat(param6) : param6} onChange={e => setParam6(e.target.value)} className={` ${data?.option?.slider6.type == 'duration' ? 'w-[60px]' : 'w-[80px]'} text-black text-right text-xs not-italic font-semibold leading-5 bg-transparent`} /> {data?.option?.slider6?.type == 'percentage' ? ' %' : ''}{data?.option?.slider6?.type == 'duration' ? ' yr(s)' : ''}</span>
                                                </div>
                                            </div>
                                            <div className='max-w-screen-xl mx-auto w-full flex flex-col gap-4 '>
                                                <Slider
                                                    {...data?.option?.slider6 ?? {}}
                                                    tooltip={false}
                                                    value={param6}
                                                    // format={formatAmount}
                                                    onChange={(v) => setParam6(v)}
                                                    onChangeComplete={(e) => {
                                                        Mixpanel.track('cta_clicked', {
                                                            'cta_text': param6,
                                                            'page': 'calculator_detail',
                                                            'widget': 'calculator'
                                                        })
                                                    }}
                                                />
                                            </div>
                                        </div>}
                                    </div>
                                </div>
                                {data?.title != 'EPF' && <TrackYourReturnsSection data={data} param1={param1} param2={param2} param3={param3} totalValue={data?.title == 'SIP' || data?.title == 'Lumpsum' ? (eval(customOutput[2]?.formula)) : eval(data?.totalValueFormula)} color={data?.sliderColor} outputs={data?.title == 'SIP' || data?.title == 'Lumpsum' ? customOutput : data?.outputs} />}
                            </div>
                        </div>
                        {(calcType == 'sip-calculator') && <FutureValueSection monthlyInvestment={param1} returnRate={param2} timePeriod={param3} />}
                        {!data?.amortization && <ReturnCompareSection name={name} type={data?.chartType} param1={param1} param2={param2} param3={param3} totalValueFormula={data?.title == 'SIP' || data?.title == 'Lumpsum' ? (customOutput[2]?.formula) : data?.totalValueFormula} proValueFormula={data?.title == 'SIP' || data?.title == 'Lumpsum' ? (customProValueFormula) : data?.proValueFormula} />}
                        {data?.amortization && <AmortizationDetailSetion param1={param1} param2={param2} param3={param3} />}
                        <ExtraDetailsSection data={data?.extraDetails} />
                        <div className='flex flex-col items-start gap-3  lg:hidden mx-4'>
                            <div className='flex w-full justify-between items-center'>
                                <p className='text-black text-base not-italic font-bold leading-7'>More calculators</p>
                                <p onClick={() => push('/calculators')} className='text-[color:var(--Primary-900,#00439D)] text-xs not-italic font-semibold leading-5'>View all</p>
                            </div>
                            <div className=' w-full grid grid-cols-2 items-center gap-4'>
                                {calcData?.filter(ele => ele?.url != name)?.map((ele, i) =>
                                    <Link key={i} href={`/calculators/${ele?.url}`} >
                                        <div className=' relative px-3 py-3 w-full border border-[color:var(--Neutral-300,#DFDFDF)] rounded-xl border-solid'>
                                            <Image src={ele?.icon} alt='demo' className=' w-[40px] h-[40px] bottom-0 right-0 absolute ' />
                                            <p className='line-clamp-2 text-black text-base not-italic font-semibold leading-7'>{ele?.title}<br />calculator</p>
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
