import { HighchartsReact } from "highcharts-react-official";
import Highcharts from "highcharts";
import { useState } from "react";



export default function HighChartTest({ pdData = [], uniwiseData = [] }) {
    console.log(pdData, uniwiseData);

    if (pdData.length > 1) return (
        <>
            <HighchartsReact
                containerProps={{ style: { height: "148px", width: '100%', paddingLeft: "0px", paddingRight: "0px" } }}
                options={{
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
                            enabled: false,
                        },
                        allowPointSelect: false,
                        showInLegend: false,
                        name: 'Univest Elite',
                        data: pdData,
                        color: '#1F75C5',
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
                    }, {
                        marker: {
                            enabled: false,
                        },
                        showInLegend: false,
                        name: 'Other FDs',
                        data: uniwiseData,
                        color: '#61B2F3',
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
                }}
                highcharts={Highcharts}
            />
        </>
    )
}

