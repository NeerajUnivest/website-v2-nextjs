import React, { useEffect, useState } from 'react'
import Actions from '@/elements/Actions'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { BlackButton } from '@/elements/Button/Button';
import { useRouter } from 'next/navigation';

export default function ReturnCompareSection() {

    const { push } = useRouter();

    const amountToRupee = {
        '1': 25000,
        '2': 50000,
        '3': 100000,
        '4': 500000,
        '5': 1000000,
    }
    const CI = (amount, rate, period, times) => amount * (Math.pow(1 + (rate / (times * 100)), (times * period)))
    const value = {
        amount: 10000,
        rate: 2
    }

    const [options, setOptions] = useState(null);
    const filterData = (n = 0) => {
        setOptions({
            chart: {
                type: 'areaspline',
                backgroundColor: 'transparent'
            },
            accessibility: {
                description: ''
            },
            credits: {
                enabled: false
            },
            title: {

                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                lineWidth: 0,
                tickLength: 0,
                allowDecimals: false,
                accessibility: {
                    rangeDescription: ''
                },
                labels:
                {
                    enabled: false
                },
            },
            yAxis: {
                labels:
                {
                    enabled: false
                },
                title: {
                    text: ''
                },
                tickPixelInterval: 50,
                gridLineWidth: 0,
            },
            tooltip: {
                positioner: function (labelWidth, _, point) {
                    return {
                        x: point.plotX - labelWidth > 100 ? point.plotX - labelWidth + 5 : point.plotX + 38,
                        y: point.plotY - 20,
                    };
                },
                backgroundColor: null,
                borderWidth: 0,
                shadow: false,

                split: true,
                shared: false,

                shape: 'box',
                useHTML: true,
                headerFormat: '<div id="tooltip">',
                pointFormat: '<div id="innerToolTip"><div id="price">{point.y:.2f}</div>',
                footerFormat: '</div>',
            },
            // plotOptions: {
            //     area: {
            //         pointStart: 0,
            //         marker: {
            //             enabled: false,
            //             symbol: 'circle',
            //             radius: 2,
            //             states: {
            //                 hover: {
            //                     enabled: true
            //                 }
            //             }
            //         }
            //     }
            // },
            series: [{
                marker: {
                    enabled: true,
                },
                allowPointSelect: false,
                showInLegend: false,
                name: 'Univest Pro',
                data: [
                    0, 10, 22, 35, 41, 57, 62
                ],
                color: '#FFCA3F',
                dataLabels: {
                    crop: true,
                },
                threshold: null,
                gapSize: 3000,
                states: {
                    hover: {
                        lineWidth: 1,
                    }
                }
            }, {
                marker: {
                    enabled: true,
                },
                showInLegend: false,
                name: 'Other SIP',
                data: [
                    0, 8, 16, 27, 39, 44, 55
                ],
                color: '#fff',
                dataLabels: {
                    crop: false,
                },
                threshold: null,
                gapSize: 3000,
                states: {
                    hover: {
                        lineWidth: 1,
                    }
                }
            }]
        });
    }
    useEffect(() => {
        filterData(0)
    }, []);

    return (
        <section className='flex flex-col justify-center items-center gap-6 px-4 py-3 lg:gap-8 lg:p-4 ' style={{ background: 'var(--Gradient-2, linear-gradient(0deg, #141E30 -37.42%, #333 65.82%))' }}>
            <div className='flex flex-col justify-center items-center lg:items-start gap-4 self-stretch'>
                <p className='text-[color:var(--Pearl-White,#FFF)] text-base lg:text-2xl not-italic font-bold leading-7'>Your returns compared with Univest</p>
                <div className='h-px self-stretch bg-[#606060]'></div>
                <div className='flex items-start gap-3 self-stretch'>
                    <div className='flex items-center gap-4 flex-[1_0_0] pr-0'>
                        <div className='w-1.5 h-12 rounded-3xl' style={{ background: 'var(--Gradient-3, linear-gradient(0deg, #FF8415 -37.42%, #FFCA3F 65.82%))' }} ></div>
                        <div className='flex  flex-col items-start gap-1'>
                            <p className='text-base lg:text-xl uni-wise-gradient2 not-italic font-bold leading-7 bg-clip-text'>Univest PRO</p>
                            <p className='self-stretch text-[color:var(--Neutral-300,#DFDFDF)] text-sm not-italic font-bold leading-6'>123</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 flex-[1_0_0] pr-0'>
                        <div className='w-1.5 h-12 rounded-3xl bg-[#fff]'></div>
                        <div className='flex  flex-col items-start gap-1'>
                            <p className='text-[color:var(--Pearl-White,#FFF)] text-base lg:text-xl not-italic font-bold leading-7'>Other SIP</p>
                            <p className='self-stretch text-[color:var(--Neutral-300,#DFDFDF)] text-sm not-italic font-bold leading-6'>123</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <HighchartsReact
                        containerProps={{ style: { height: "150px", width: '100%' } }}
                        options={options}
                        highcharts={Highcharts}
                    />
                </div>
                <BlackButton onClick={() => push('/pro')} className={' py-[6px] lg:py-2 px-8 lg:px-12 mx-auto font-bold mt-4 text-xs lg:text-base'} text='Explore Univest Pro' />
            </div>
        </section>
    )
}
