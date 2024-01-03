import React, { useEffect, useState } from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function FutureValueSection({ monthlyInvestment, returnRate, timePeriod }) {

    const [options, setOptions] = useState(null);

    const [totalInvestments, setTotalInvestments] = useState([]);
    const [totalGains, setTotalGains] = useState([]);
    const [catYears, setCatYears] = useState([]);

    const totalValue = (monthlyInvestmentValue, returnRateValue, timePeriodValue) => monthlyInvestmentValue * ((Math.pow((1 + ((returnRateValue / 12) / 100)), (timePeriodValue * 12)) - 1) / ((returnRateValue / 12) / 100)) * (1 + ((returnRateValue / 12) / 100));

    useEffect(() => {
        let tempInv = [];
        let tempGain = [];
        let tempYears = []
        for (let i = 1; i <= timePeriod; i++) {
            tempInv.push(monthlyInvestment * (i * 12));
            tempGain.push(Number.parseInt(((totalValue(monthlyInvestment, returnRate, i)) - (monthlyInvestment * (i * 12))).toFixed(0)));
            tempYears.push(i == 1 ? i + ' Year' : i + ' Years')
        }
        setTotalInvestments(tempInv);
        setTotalGains(tempGain);
        setCatYears(tempYears)
    }, [monthlyInvestment, returnRate, timePeriod])
    // console.log('Inv:', totalInvestments, ' Gains:', totalGains);
    const filterData = (n = 0) => {
        setOptions({
            chart: {
                type: 'column',
                marginLeft: 0,
                marginRight: 0,
                spacingLeft: 0,
                spacingRight: 0,
                backgroundColor: 'transparent'
            },
            title: {
                text: null,
            },
            xAxis: {
                lineWidth: 2,
                lineColor: '#F5F5F5',
                categories: catYears
            },
            yAxis: {
                gridLineWidth: false,
                title: {
                    enabled: false,
                },
                labels: {
                    enabled: false,
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                enabled: false,
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: 'Total gains',
                data: totalGains,
                color: '#953723',
                dataLabels: {
                    enabled: true,
                    crop: false,
                    overflow: 'none',
                    color: 'black',
                    format: '{point.y}'

                    // formatter: function () {
                    //     var val = 0;
                    //     return '<span style="font-size:12px;">' + val + '</span>';
                    // }
                }
            }, {
                name: 'Total investments',
                data: totalInvestments,
                color: '#F5F5F5'
            }]
        });

        // setOptions({
        //     colors: ['#F5F5F5', '#953723'],
        //     chart: {
        //         type: 'pie',
        //         backgroundColor: 'transparent',
        //         // events: {
        //         //   render: setTimeout(function () {
        //         //     window.dispatchEvent(new Event('resize'));
        //         //   }, 1000)
        //         // }
        //     },
        //     title: {
        //         text: null,
        //     },
        //     exporting: {
        //         enabled: false,
        //     },
        //     tooltip: {
        //         enabled: false,
        //     },
        //     plotOptions: {
        //         pie: {
        //             allowPointSelect: false,
        //             cursor: 'pointer',
        //             connectorAllowed: false,
        //             dataLabels: {
        //                 /*  crookedDistance: '70%',*/
        //                 // connectorShape: 'crookedLine',
        //                 /* connectorPadding: 0, */
        //                 /* distance: "-30%", */
        //                 // alignTo: 'connectors',
        //                 // alignTo: 'plotEdges',
        //                 enabled: false,
        //                 // connectorColor: '#000000',
        //                 // connectorAllowed: false,
        //                 /* format: '{point.name}: {y} %', */
        //                 fontFamily: "'Inter', sans-serif",
        //                 formatter: function () {
        //                     return '<div style="><div style="font-size: 12px; font-weight: 500; width: 0px;">' +
        //                         this.point.name + '</div><br><div style="font-size: 10px; font-weight: 400; ">' +
        //                         this.y + '%</div></div>';
        //                 },
        //                 style: {
        //                     fontFamily: "'Inter', 'sans-serif'",
        //                     textOutline: 0
        //                 },
        //             },
        //             showInLegend: false
        //         }
        //     },
        //     credits: {
        //         enabled: false,
        //     },
        //     series: [{
        //         name: 'Returns',
        //         colorByPoint: true,
        //         innerSize: '50%',
        //         data: [{
        //             name: 'Invested amount',
        //             // y: data[n]?.promoters !== 0 && data[n]?.promoters
        //             y: 30
        //         },
        //         {
        //             name: 'Estimated returns',
        //             // y: data[n]?.foreignInstitutions !== 0 && data[n]?.foreignInstitutions
        //             y: 60
        //         }]
        //     }]
        // })
    }
    useEffect(() => {
        filterData(0)
    }, [totalInvestments, totalGains]);

    return (
        <section className='flex flex-col items-start gap-4 border border-[color:var(--Neutral-900,#202020)] p-3 lg:p-4 rounded-xl lg:rounded-2xl border-solid mx-4 lg:mx-0'>
            <div className='flex w-full justify-between items-center'>
                <p className='text-[color:var(--Neutral-900,#202020)] text-base lg:text-2xl not-italic font-bold leading-7' >Future value of SIP</p>
                <p className='text-[color:var(--Neutral-500,#9D9D9D)] text-xs lg:text-sm not-italic font-medium leading-5'>SIP amount ₹{totalValue(monthlyInvestment, returnRate, timePeriod).toFixed(0)}</p>
            </div>
            <div style={{ marginBottom: '10px' }} className='w-full'>
                <HighchartsReact
                    containerProps={{ style: { height: "190px", width: '100%' } }}
                    options={options}
                    highcharts={Highcharts}
                />
            </div>
            <div className='flex items-center justify-center gap-6 m-auto'>
                <div className='flex items-center gap-2'>
                    <div className='w-3 h-3 border border-[color:var(--Neutral-300,#DFDFDF)] bg-[#F5F5F5] rounded-sm border-solid'></div>
                    <p className='text-[color:var(--Neutral-900,#202020)] text-[10px] not-italic font-medium leading-4 lg:text-xs'>Invested amount</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-3 h-3 border border-[color:var(--Neutral-300,#953723)] bg-[#953723] rounded-sm border-solid'></div>
                    <p className='text-[color:var(--Neutral-900,#202020)] text-[10px] not-italic font-medium leading-4 lg:text-xs'>Estimated returns</p>
                </div>
            </div>
        </section>
    )
}
