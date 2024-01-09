import React, { memo, useEffect, useState } from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Actions from '@/elements/Actions';


function TrackYourReturnsSection({ data, param1, param2, param3, totalValue, color, outputs }) {

    const [options, setOptions] = useState(null);

    const [piePercentage, setPiePercentage] = useState(0);


    useEffect(() => {

        setPiePercentage((eval(outputs[1]?.formula) / totalValue) * 100);

        setOptions({
            colors: ['#F5F5F5', color],
            chart: {
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 0,
                marginRight: 0,
                spacingLeft: 0,
                spacingRight: 0,
                type: 'pie',
                backgroundColor: 'transparent',
                // events: {
                //   render: setTimeout(function () {
                //     window.dispatchEvent(new Event('resize'));
                //   }, 1000)
                // }
            },
            title: {
                text: null,
            },
            exporting: {
                enabled: false,
            },
            tooltip: {
                enabled: false,
            },
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    cursor: 'pointer',
                    connectorAllowed: false,
                    dataLabels: {
                        /*  crookedDistance: '70%',*/
                        // connectorShape: 'crookedLine',
                        /* connectorPadding: 0, */
                        /* distance: "-30%", */
                        // alignTo: 'connectors',
                        // alignTo: 'plotEdges',
                        enabled: false,
                        // connectorColor: '#000000',
                        // connectorAllowed: false,
                        /* format: '{point.name}: {y} %', */
                        fontFamily: "'Inter', sans-serif",
                        formatter: function () {
                            return '<div style="><div style="font-size: 12px; font-weight: 500; width: 0px;">' +
                                this.point.name + '</div><br><div style="font-size: 10px; font-weight: 400; ">' +
                                this.y + '%</div></div>';
                        },
                        style: {
                            fontFamily: "'Inter', 'sans-serif'",
                            textOutline: 0
                        },
                    },
                    showInLegend: false
                }
            },
            credits: {
                enabled: false,
            },
            series: [{
                name: 'Returns',
                colorByPoint: true,
                innerSize: '50%',
                data: [{
                    name: 'Invested amount',
                    // y: data[n]?.promoters !== 0 && data[n]?.promoters
                    y: eval(outputs[0]?.formula)
                },
                {
                    name: 'Estimated returns',
                    // y: data[n]?.foreignInstitutions !== 0 && data[n]?.foreignInstitutions
                    y: eval(outputs[1]?.formula)
                }]
            }]
        })
    }, [param1, param2, param3, color]);


    // console.log(eval(data?.estimatedReturn), options?.series[0]?.data?.[0].y, options?.series[0]?.data?.[1].y);
    return (
        <section className='flex w-full lg:w-2/5 flex-col items-start gap-3 border border-[color:var(--Neutral-900,#202020)] p-3 rounded-2xl border-solid'>
            <p className='text-base not-italic font-bold leading-7 bg-clip-text'>Track your returns</p>
            <div className='h-px self-stretch bg-[#EDEDED]'></div>
            <div className='w-full h-full flex flex-col justify-between items-center'>
                <div className=' m-auto flex flex-col justify-center items-center gap-3'>
                    <div className='flex h-full justify-center items-center px-[38px] lg:px-[21px] pb-0'>
                        <div className=' w-full'>
                            <div className='relative'>
                                <p className={`text-[color:var(--Neutral-900,#202020)] text-center ${piePercentage <= 99.9 ? 'text-[16px]' : 'text-[14px]'} not-italic font-extrabold leading-[29.684px] absolute  top-[40%] left-[40%] `}> {!isNaN(piePercentage) ? (piePercentage.toFixed(1)) : '0.0'}%</p>
                                <HighchartsReact
                                    containerProps={{ style: { height: "144px", width: '100%', marginLeft: '0px' } }}
                                    options={options}
                                    highcharts={Highcharts}
                                />
                            </div>
                            <div className='flex items-center justify-between gap-6'>
                                <div className='flex items-center gap-2'>
                                    <div className='w-3 h-3 border border-[color:var(--Neutral-300,#DFDFDF)] bg-[#F5F5F5] rounded-sm border-solid'></div>
                                    <p className='text-[color:var(--Neutral-900,#202020)] text-[10px] not-italic font-medium leading-4 lg:text-xs'>{outputs[0]?.name}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div style={{ border: color, backgroundColor: color }} className={`w-3 h-3 border rounded-sm border-solid`}></div>
                                    <p className='text-[color:var(--Neutral-900,#202020)] text-[10px] not-italic font-medium leading-4 lg:text-xs'>{outputs[1]?.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='text-[color:var(--Neutral-600,#747474)] text-[8px] not-italic font-medium leading-3 lg:text-[10px]'>*This amount is calculated on {Actions.putComma(param2, 1)}% p.a. for the span of {Actions.putComma(param3, 0)} yrs.</p>
                </div>
                <div className='flex w-full flex-col items-center gap-3 border border-[color:var(--Neutral-300,#DFDFDF)] p-3 rounded-lg border-solid bg-[#FCFCFC] mt-4'>
                    {/* <div className='flex w-full justify-between items-center'>
                        <p className='text-[color:var(--Neutral-700,#606060)] text-xs not-italic font-medium leading-5'>Invested amount</p>
                        <p className='text-xs not-italic font-bold leading-5 bg-clip-text'>₹{Actions.putComma((param1 * (param3 * 12)), 0)}</p>
                    </div>
                    <div className='h-px self-stretch bg-[#DFDFDF]'></div>
                    <div className='flex w-full justify-between items-center'>
                        <p className='text-[color:var(--Neutral-700,#606060)] text-xs not-italic font-medium leading-5'>Estimated returns</p>
                        <p className='text-xs not-italic font-bold leading-5 bg-clip-text'>₹{Actions.putComma(eval(data?.estimatedReturn), 0)}</p>
                    </div>
                    <div className='h-px self-stretch bg-[#DFDFDF]'></div>
                    <div className='flex w-full justify-between items-center'>
                        <p className='text-[color:var(--Neutral-700,#606060)] text-xs not-italic font-medium leading-5'>Total value</p>
                        <p className='text-xs not-italic font-bold leading-5 bg-clip-text'>₹{Actions.putComma(totalValue, 0)}</p>
                    </div> */}
                    {outputs?.map((ele, i) => {
                        return <>
                            <div className={` ${i == 0 ? 'hidden' : ''} h-px self-stretch bg-[#DFDFDF]`}></div>
                            <div className='flex w-full justify-between items-center'>
                                <p className='text-[color:var(--Neutral-700,#606060)] text-xs not-italic font-medium leading-5'>{ele?.name}</p>
                                <p className='text-xs not-italic font-bold leading-5 bg-clip-text'>₹{Actions.putComma(eval(ele?.formula), 0)}</p>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </section>
    )
}


export default memo(TrackYourReturnsSection)