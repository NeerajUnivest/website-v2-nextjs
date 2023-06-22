import React, { useEffect, useState } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

function BalanceSheetCard(props) {
    const [options, setOptions] = useState(null);

    const [duration, setDuration] = useState(0);
    const [chartOptions, setChartOptions] = useState(options);

    let durations = [];
    let data1 = [];
    let data2 = [];

    const fetchData = (duration = 0) => {
        durations = [];
        data1 = [];
        data2 = [];
        axios.get(`${process.env.apiBaseURL}/resources/stock-details/${props.name}/company-financials/${duration === 0 ? 'standalone' : 'consolidated'}/${props.indicator}`)
            .then((response) => {
                let dataArray = response.data.data.reverse();
                dataArray.forEach(element => {
                    durations.push(element.duration);
                    data1.push(element.assets);
                    data2.push(element.liabilities);
                });
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
                                fontFamily: "'Inter', 'sans-serif'",
                                fontWidth: 'semibold',
                                color: '#979797',

                            }
                        },
                        categories: durations,
                        /* crosshair: true */
                    },
                    yAxis: {
                        tickPixelInterval: 140,
                        /* min: 0, */
                        gridLineDashStyle: 'Dash',
                        gridLineWidth: 1,
                        title: {
                            enabled: false,
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
                    legend: {
                        verticalAlign: 'top',
                        align: 'left',
                        margin: 10,
                        lineHeight: 15,
                        padding: 5,
                        itemStyle: {
                            color: '#455154',
                            fontWeight: 'semibold',
                            fontFamily: "'Inter', 'sans-serif'",
                            fontSize: 10,
                        }
                    },
                    series: [{
                        //   showInLegend:false,
                        name: 'Total assets',
                        data: data1,
                        color: '#0088FF',
                        /* negativeColor: 'red', */
                        dataLabels: {
                            enabled: true,
                            crop: false,
                            overflow: 'none',
                            /* format: '{point.y:.1f}%', */
                            formatter: function () {
                                let color = '';
                                let val = this.y / 10000000;

                                //select color
                                if (val >= 0) {
                                    color = 'black';
                                } else {
                                    color = '#DD2C2C';
                                }

                                if (val <= -1000) {
                                    val = (val / 1000)?.toFixed(2) + 'k';
                                } else if (val > -1000 && val < 1000) {
                                    val = val.toFixed(2);
                                } else if (val >= 1000) {
                                    val = (val / 1000)?.toFixed(2) + 'k';
                                }

                                return '<span style="font-size:10px; color:' + color + '">' + val + '</span>';
                            },
                            style: {
                                fontSize: 12,
                                fontFamily: "'Inter', 'sans-serif'",
                                fontWidth: 'semibold',
                                color: '#232A31',
                                textOutline: 0
                            },
                        }
                    }, {
                        // showInLegend:false,
                        name: 'Total liabilities',
                        data: data2,
                        color: '#0CBA29',
                        /* negativeColor: 'red', */
                        dataLabels: {
                            enabled: true,
                            crop: false,
                            overflow: 'none',
                            /* format: '{point.y:.1f}%', */
                            formatter: function () {
                                let color = '';
                                let val = this.y;

                                //select color
                                if (val >= 0) {
                                    color = 'black';
                                } else {
                                    color = '#DD2C2C';
                                }

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

                                return '<span style="font-size:10px; color:' + color + '">' + val + '</span>';
                            },
                            style: {
                                fontSize: 12,
                                fontFamily: "'Inter', 'sans-serif'",
                                fontWidth: 'semibold',
                                color: '#232A31',
                                textOutline: 0
                            },
                        }
                    }]
                })
            })
    }


    useEffect(() => {
        fetchData();
        setChartOptions(options)
    }, [props])
    return (
        <div className="mx-4 h-[301px] rounded-[12px] border-[1px] border-[#E5E5E5] font-Inter font-medium">
            <div className='text-[12px] leading-[18px] mx-3 my-2 flex flex-row justify-between'>
                <div className=''>Balance sheet</div>
                <div className='text-[#979797]'>Value in Cr.</div>
            </div>
            <HighchartsReact
                containerProps={{ style: { height: "228px", width: '100%', paddingLeft: "0px", paddingRight: "0px" } }}
                options={options}
                highcharts={Highcharts}
            />
            <div className='flex flex-row justify-center mt-0 mb-3'>
                <button
                    className={duration === 0 ? 'rounded-[4px] mx-2 px-3 py-1 text-[10px] leading-[15px] bg-[#00439D] text-[#ffffff] outline-none font-medium border-[1px] border-[#00439D] tracking-[.5px]' : 'rounded-[4px] mx-2 px-3 py-1 font-medium text-[10px] leading-[15px] border-[1px] border-[#E5E5E5] tracking-[.5px]'}
                    onClick={() => {
                        setDuration(0);
                        fetchData(0);
                        setChartOptions(chartOptions);
                    }}
                >Standalone
                </button>
                <button
                    className={duration === 1 ? 'rounded-[4px] mx-2 px-3 py-1 text-[10px] leading-[15px] bg-[#00439D] text-[#ffffff] outline-none font-medium border-[1px] border-[#00439D] tracking-[.5px]' : 'rounded-[4px] mx-2 px-3 py-1 font-medium text-[10px] leading-[15px] border-[1px] border-[#E5E5E5] tracking-[.5px]'}
                    onClick={() => {
                        setDuration(1);
                        fetchData(1);
                        setChartOptions(chartOptions);
                        // })
                    }}

                >Consolidated
                </button>
            </div>
        </div>
    )
}

export default React.memo(BalanceSheetCard);