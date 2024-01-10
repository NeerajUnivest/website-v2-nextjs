import React, { useEffect, useState } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from 'moment';

function MFundCard(props) {
    const [options, setOptions] = useState(null);
    const [mutualFunds, setMutualFunds] = useState([]);
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        setMutualFunds([])
        setCategories([])
        let dataArray = props.data !== '' && props.data.slice().reverse();
        dataArray[0] && dataArray.forEach((element, i) => {
            if (i > 1) {
                categories.push(element.quarter);
                mutualFunds.push(element.mutualFunds + element.domesticInstitutions);
            }
        });
    }, [props])

    useEffect(() => {
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
            exporting: {
                enabled: false,
            },
            xAxis: {
                labels: {
                    y: 30,
                    style: {
                        fontSize: 12,
                        // fontFamily: "'Inter', 'sans-serif'",
                        fontWidth: 'semibold',
                        color: '#979797',

                    }
                },
                categories: categories,
                /* crosshair: true */
            },
            yAxis: {
                tickPixelInterval: 140,
                // min: 0,
                // max: 100,
                gridLineDashStyle: 'Dash',
                gridLineWidth: 1,
                title: {
                    enabled: false,
                    /* text: 'Rainfall (mm)' */
                },
                labels: {
                    enabled: true,
                }
            },
            tooltip: {
                enabled: false,
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                    borderRadius: 2,
                    /* fontFamily: "'Inter', 'sans-serif'", */
                    color: '#007AFF',
                }
            },
            series: [{
                showInLegend: false,
                name: 'Mutual Funds',
                data: mutualFunds,
                color: '#0088FF',
                /* negativeColor: 'red', */
                dataLabels: {
                    enabled: true,
                    crop: false,
                    overflow: 'none',
                    /* format: '{point.y:.1f}%', */
                    formatter: function () {
                        let color = '';
                        let val = this.y;
                        //   val = '{val:.1f}'
                        if (this.y >= 0) {
                            color = 'black';
                        } else {
                            color = '#DD2C2C';
                        }

                        return '<span style="font-size:12px; color:' + color + '">' + val + '%</span>';
                    },
                    style: {
                        fontSize: 12,
                        // fontFamily: "'Inter', 'sans-serif'",
                        fontWidth: 'semibold',
                        color: '#232A31',
                        textOutline: 0
                    },
                }
            }]
        })
    }, [props])

    return (
        <div className="mx-4 h-[301px] rounded-[12px] border-[1px] border-[#E5E5E5] font-Inter font-medium">
            <div className='text-[12px] leading-[18px] mx-3 my-2'>
                <div className=''>DII</div>
            </div>
            <HighchartsReact
                containerProps={{ style: { height: "228px", width: '100%' } }}
                options={options}
                highcharts={Highcharts}
            />
            <div className='flex flex-row justify-center mt-0 text-[12px] leading-[18px] font-medium'>
                Quaterly (%age share)
            </div>
        </div>
    )
}

function isEqual(prevProps, nextProps) {
    return prevProps.number === nextProps.number;
}

const MemoizedMFundCard = React.memo(MFundCard, isEqual);
export default MemoizedMFundCard;