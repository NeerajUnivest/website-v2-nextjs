import React, { useEffect, useState } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import moment from 'moment';

function RevenueCard(props) {
    const [data, setData] = useState({});
    const [options, setOptions] = useState(null);

    const [duration, setDuration] = useState(0);
    const [chartOptions, setChartOptions] = useState(options);


    let durations = [];
    let values = [];

    const fetchData = (duration = 0) => {
        durations = [];
        values = [];
        axios.get(`${process.env.apiBaseURL}/resources/stock-details/${props.name}/company-financials/${duration === 0 ? 'quarterly' : 'annual'}/${props.indicator}`)
            .then((response) => {
                let dataArray = response.data.data.reverse();
                dataArray.forEach(element => {
                    durations.push(moment(element.duration, "MMM' YYYY").format('MMM YY'));
                    values.push(element.value);
                });
                setData(response.data);
            })

        setOptions({
            chart: {
                type: 'column',
                marginLeft: 0,
                marginRight: 0,
                spacingLeft: 0,
                spacingRight: 0,
                backgroundColor: 'transparent'
            },
            accessibility: {
                announceNewData: {
                    enabled: true
                }
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
                        fontFamily: "'Poppins', 'sans-serif'",
                        fontWidth: 'semibold',
                        color: '#979797',

                    }
                },
                categories: durations
            },
            yAxis: {
                tickPixelInterval: 140,
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
                    color: '#007AFF',
                }
            },
            series: [{
                showInLegend: false,
                name: 'Net Profit',
                data: values,
                color: '#0088FF',
                dataLabels: {
                    enabled: true,
                    crop: false,
                    overflow: 'none',
                    formatter: function () {
                        let color = '';
                        var val = 0;
                        duration === 0 ? val = this.y / 10 : val = this.y / 10000000
                        if (this.y >= 0) {
                            color = 'black';
                        } else {
                            color = '#DD2C2C';
                        }

                        if (val <= -100000) {
                            val = (val / 100000).toFixed(2) + 'L';
                        } else if (val <= -1000) {
                            val = (val / 1000).toFixed(2) + 'k';
                        } else if (val > -1000 && val < 1000) {
                            val = val.toFixed(2);
                        } else if (val >= 1000 && val < 100000) {
                            val = (val / 1000).toFixed(2) + 'k';
                        } else if (val >= 100000) {
                            val = (val / 100000).toFixed(2) + 'L';
                        }

                        return '<span style="font-size:12px; color:' + color + '">' + val + '</span>';
                    },
                    style: {
                        fontSize: 12,
                        fontFamily: "'Poppins', 'sans-serif'",
                        fontWidth: 'semibold',
                        color: '#232A31',
                        textOutline: 0
                    },
                }
            }]
        })
    }

    useEffect(() => {
        fetchData();
        setChartOptions(options)
    }, [props])
    return (
        <div className="mx-4 h-[301px] rounded-[12px] border-[1px] border-[#E5E5E5] font-Inter font-medium">
            <div className='text-[12px] leading-[18px] mx-3 my-2 flex flex-row justify-between'>
                <div className=''>Revenue</div>
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
                >Quaterly
                </button>
                <button
                    className={duration === 1 ? 'rounded-[4px] mx-2 px-3 py-1 text-[10px] leading-[15px] bg-[#00439D] text-[#ffffff] outline-none font-medium border-[1px] border-[#00439D] tracking-[.5px]' : 'rounded-[4px] mx-2 px-3 py-1 font-medium text-[10px] leading-[15px] border-[1px] border-[#E5E5E5] tracking-[.5px]'}
                    onClick={() => {
                        setDuration(1);
                        fetchData(1);
                        setChartOptions(chartOptions);

                    }}

                >Annual
                </button>
            </div>
        </div>
    )
}


export default React.memo(RevenueCard)