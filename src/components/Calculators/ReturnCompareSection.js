import React, { useEffect, useState } from 'react'
import Actions from '@/elements/Actions'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { BlackButton } from '@/elements/Button/Button';
import { useRouter } from 'next/navigation';
import { Mixpanel } from '@/elements/Mixpanel';

export default function ReturnCompareSection({ name, type, param1, param2, param3, totalValueFormula, proValueFormula }) {

    const { push } = useRouter();
    const [grad1, setGrad1] = useState('#FF8415')
    const [grad2, setGrad2] = useState('#FFCA3F')
    const [otherReturn, setOtherReturn] = useState([]);
    const [proReturn, setProReturn] = useState([]);

    const [options, setOptions] = useState(null);

    const totalVal = Number.parseInt((eval(totalValueFormula)).toFixed(0));
    const proval = Number.parseInt((eval(proValueFormula)).toFixed(0));

    // console.log({ totalVal });
    // console.log({ proval });

    useEffect(() => {
        let tempOther = [0];
        let tempPro = [0];
        for (let i = 6; i >= 1; i--) {
            tempOther.push(totalVal / i);
            tempPro.push(proval / i);
        }
        setOtherReturn(tempOther);
        setProReturn(tempPro);
    }, [totalVal, proval])

    const filterData = (n = 0) => {

        let grad1 = '#FF8415';
        let grad2 = '#FFCA3F'

        if (type == 'Elite') {
            grad1 = '#6BBDE1';
            grad2 = '#6BBDE1';
        }

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
                pointFormat: '<div id="innerToolTip"><div style="color:white" id="price">{point.y:.2f}</div>',
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
                data: proReturn,
                color: grad1,
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 1,
                        y2: 1,
                    },
                    stops: [
                        [0, grad1],
                        [1, grad2]
                    ]
                },
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
                fillOpacity: 100,
                marker: {
                    enabled: true,
                },
                showInLegend: false,
                name: 'Other SIP',
                data: otherReturn,
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
    }, [proReturn, otherReturn]);

    return (
        <section className=' lg:rounded-2xl flex flex-col justify-center items-center gap-6 px-4 py-3 lg:pb-6 lg:gap-8 lg:p-4 ' style={{ background: 'var(--Gradient-2, linear-gradient(0deg, #141E30 -37.42%, #333 65.82%))' }}>
            <div className='flex flex-col justify-center items-center lg:items-start gap-4 self-stretch'>
                <p className='text-[color:var(--Pearl-White,#FFF)] text-base lg:text-2xl not-italic font-bold leading-7'>Your returns compared with Univest</p>
                <div className='h-px self-stretch bg-[#606060]'></div>
                <div className='flex items-start gap-3 self-stretch'>
                    <div className='flex items-center gap-4 flex-[1_0_0] pr-0'>
                        <div className={`w-1.5 h-12 rounded-3xl ${type == 'PRO' ? 'bg-gradient-to-tr from-[#FF8415] to-[#FFCA3F] ' : 'bg-[#6BBDE1]'} `}></div>
                        <div className='flex  flex-col items-start gap-1'>
                            <p className={`text-base lg:text-xl ${type == 'PRO' ? 'uni-wise-gradient2' : 'text-[#6BBDE1]'} not-italic font-bold leading-7 bg-clip-text`}>Univest {type}</p>
                            <p className='self-stretch text-[color:var(--Neutral-300,#DFDFDF)] text-sm not-italic font-bold leading-6'>₹{Actions.putComma(proval, 0)}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 flex-[1_0_0] pr-0'>
                        <div className='w-1.5 h-12 rounded-3xl bg-[#fff]'></div>
                        <div className='flex  flex-col items-start gap-1'>
                            <p className='text-[color:var(--Pearl-White,#FFF)] text-base lg:text-xl not-italic font-bold leading-7'>Others</p>
                            <p className='self-stretch text-[color:var(--Neutral-300,#DFDFDF)] text-sm not-italic font-bold leading-6'>₹{Actions.putComma(totalVal, 0)}</p>
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
                <BlackButton onClick={() => {
                    Mixpanel.track('cta_clicked', {
                        // 'cta_clicked': 'submit',
                        'page': 'calculators',
                        'calculator': name.toLowerCase(),
                        'cta_text': 'pro'
                    })
                    push('/pro')
                }} className={' py-[6px] lg:py-2 px-8 lg:px-12 mx-auto font-bold mt-4 text-xs lg:text-base'} text='Explore Univest Pro' />
            </div>
        </section>
    )
}
