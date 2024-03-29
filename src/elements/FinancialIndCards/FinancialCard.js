import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function FinancialCard({ heading, name, indicator, pos, metric }) {
    const [options, setOtions] = useState(null);

    useEffect(() => {
        let durations = [];
        let values = [];
        axios.get(`${process.env.apiBaseURL}/resources/stock-details/${name}/financial-indicators/${indicator}`)
            .then((response) => {
                let dataArray = response.data.data.reverse();
                if (dataArray[0]) {
                    dataArray.forEach(element => {
                        durations.push(element.duration);
                        values.push(element.value);
                    });
                    setOtions({
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
                            categories: durations,
                        },
                        yAxis: {
                            tickPixelInterval: 140,
                            gridLineDashStyle: 'Dash',
                            gridLineWidth: 1,
                            title: {
                                enabled: false,
                            },
                            labels: {
                                enabled: false,
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
                            name: 'financial card',
                            data: values,
                            color: '#0088FF',
                            dataLabels: {
                                enabled: true,
                                crop: false,
                                overflow: 'none',
                                formatter: function () {
                                    let color = '';
                                    let val = this.y;
                                    if (this.y >= 0) {
                                        color = 'black';
                                    } else {
                                        color = '#DD2C2C';
                                    }

                                    if (pos === 1) {
                                        val = val + metric.toString();
                                    } else {
                                        val = metric.toString() + val;
                                    }
                                    return '<span style="font-size:12px; color:' + color + '">' + val + '</span>';
                                },
                                style: {
                                    fontSize: 12,
                                    // fontFamily: "'Roboto', 'sans-serif'",
                                    fontWidth: 'semibold',
                                    color: '#232A31',
                                    textOutline: 0
                                },
                            }
                        }]
                    })
                }
            })
    }, []);

    return (
        <div className="mx-4 h-[273px] rounded-[12px] border-[1px] border-[#E5E5E5] font-Inter font-medium">
            <div className='text-[12px] leading-[18px] mx-3 my-2'>{heading}</div>
            <HighchartsReact
                containerProps={{ style: { height: "228px", width: '100%', paddingLeft: "0px", paddingRight: "0px" } }}
                options={options}
                highcharts={Highcharts}
            />
        </div>
    )
}

export default React.memo(FinancialCard);