import React, { useEffect, useState } from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


export default function TrackYourReturnsSection({ monthlyInvestment, returnRate, timePeriod, totalValue }) {

    const [options, setOptions] = useState(null);
    const estimatedReturn = totalValue - (monthlyInvestment * (timePeriod * 12));
    // console.log('Invested:', investedAmount, ' Total:', totalValue);

    const filterData = (n = 0) => {
        setOptions({
            colors: ['#F5F5F5', '#953723'],
            chart: {
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
                    y: (monthlyInvestment * (timePeriod * 12))
                },
                {
                    name: 'Estimated returns',
                    // y: data[n]?.foreignInstitutions !== 0 && data[n]?.foreignInstitutions
                    y: estimatedReturn
                }]
            }]
        })
    }
    useEffect(() => {
        filterData(0)
    }, [monthlyInvestment, returnRate, timePeriod]);

    return (
        <section className='flex w-full lg:w-2/5 flex-col items-start gap-3 border border-[color:var(--Neutral-900,#202020)] p-3 rounded-2xl border-solid'>
            <p className='text-base not-italic font-bold leading-7 bg-clip-text'>Track your returns</p>
            <div className='w-full flex flex-col justify-center items-center gap-4'>
                <div className='h-px self-stretch bg-[#EDEDED]'></div>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <div className='flex justify-center items-center px-[38px] lg:px-[21px] pt-1 pb-0'>
                        <div className='p-2 w-full'>
                            <HighchartsReact
                                containerProps={{ style: { height: "190px", width: '100%' } }}
                                options={options}
                                highcharts={Highcharts}
                            />
                            <div className='flex items-center justify-between gap-6'>
                                <div className='flex items-center gap-2'>
                                    <div className='w-3 h-3 border border-[color:var(--Neutral-300,#DFDFDF)] bg-[#F5F5F5] rounded-sm border-solid'></div>
                                    <p className='text-[color:var(--Neutral-900,#202020)] text-[10px] not-italic font-medium leading-4 lg:text-xs'>Invested amount</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='w-3 h-3 border border-[color:var(--Neutral-300,#953723)] bg-[#953723] rounded-sm border-solid'></div>
                                    <p className='text-[color:var(--Neutral-900,#202020)] text-[10px] not-italic font-medium leading-4 lg:text-xs'>Estimated returns</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='text-[color:var(--Neutral-600,#747474)] text-[8px] not-italic font-medium leading-3 lg:text-[10px]'>*This amount is calculated on {returnRate.toFixed(1)}% p.a. for the span of {timePeriod.toFixed(0)} yrs.</p>
                </div>
                <div className='flex w-full flex-col items-center gap-3 border border-[color:var(--Neutral-300,#DFDFDF)] p-3 rounded-lg border-solid bg-[#FCFCFC]'>
                    <div className='flex w-full justify-between items-center'>
                        <p className='text-[color:var(--Neutral-700,#606060)] text-xs not-italic font-medium leading-5'>Invested amount</p>
                        <p className='text-xs not-italic font-bold leading-5 bg-clip-text'>₹{(monthlyInvestment * (timePeriod * 12)).toFixed(0)}</p>
                    </div>
                    <div className='h-px self-stretch bg-[#DFDFDF]'></div>
                    <div className='flex w-full justify-between items-center'>
                        <p className='text-[color:var(--Neutral-700,#606060)] text-xs not-italic font-medium leading-5'>Estimated returns</p>
                        <p className='text-xs not-italic font-bold leading-5 bg-clip-text'>₹{estimatedReturn.toFixed(0)}</p>
                    </div>
                    <div className='h-px self-stretch bg-[#DFDFDF]'></div>
                    <div className='flex w-full justify-between items-center'>
                        <p className='text-[color:var(--Neutral-700,#606060)] text-xs not-italic font-medium leading-5'>Total value</p>
                        <p className='text-xs not-italic font-bold leading-5 bg-clip-text'>₹{totalValue.toFixed(0)}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
