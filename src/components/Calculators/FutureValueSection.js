import React, { useEffect, useState } from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Actions from '@/elements/Actions';

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
                backgroundColor: 'transparent',
                dataLabels: {
                    enabled: true
                }
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
                },
                stackLabels: {
                    enabled: true,
                    formatter: function () {
                        let color = '';
                        var val = this.total;
                        // duration === 0 ? val = this.y / 10 : val = this.y / 10000000
                        // if (this.y >= 0) {
                        //     color = 'black';
                        // } else {
                        //     color = '#DD2C2C';
                        // }
                        if (val <= -100000) {
                            val = (val / 100000)?.toFixed(2) + 'L';
                        } else if (val <= -1000) {
                            val = (val / 1000)?.toFixed(2) + 'k';
                        } else if (val > -1000 && val < 1000) {
                            val = val.toFixed(2);
                        } else if (val >= 1000 && val < 100000) {
                            val = (val / 1000)?.toFixed(2) + 'k';
                        } else if (val >= 100000) {
                            val = (val / 100000)?.toFixed(2) + 'L';
                        }

                        return '<span style="font-size:12px; color:' + color + '">' + val + '</span>';
                    },
                    // formatter: function () {
                    //     return this.total + 'k';
                    // },
                    style: {
                        fontSize: 12,
                        // fontFamily: "'Inter', 'sans-serif'",
                        fontWidth: 'extrabold',
                        color: '#232A31',
                        textOutline: 0
                    },
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
                    enabled: false,
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
    }
    useEffect(() => {
        filterData(0)
    }, [totalInvestments, totalGains]);

    return (
        <section className='flex flex-col items-start gap-4 border border-[color:var(--Neutral-900,#202020)] p-3 lg:p-4 rounded-xl lg:rounded-2xl border-solid mx-4 lg:mx-0'>
            <div className='flex w-full justify-between items-center'>
                <p className='text-[color:var(--Neutral-900,#202020)] text-base lg:text-2xl not-italic font-bold leading-7' >Future value of SIP</p>
                <p className='text-[color:var(--Neutral-500,#9D9D9D)] text-xs lg:text-sm not-italic font-medium leading-5'>SIP amount ₹{Actions.putComma(totalValue(monthlyInvestment, returnRate, timePeriod), 0)}</p>
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
