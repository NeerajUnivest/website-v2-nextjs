import { HighchartsReact } from "highcharts-react-official";
import Highcharts from "highcharts";
import { useState } from "react";



export default function HighChartTest() {

    const [options, setOptions] = useState({
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
            min: 0,
            gridLineWidth: 0,
        },
        tooltip: {
            pointFormat: ''
        },
        plotOptions: {
            area: {
                pointStart: 0,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            marker: {
                enabled: false,
            },
            allowPointSelect: false,
            showInLegend: false,
            name: 'Univest Elite',
            data: [
                0, 25, 35, 100, 130, 200
            ],
            color: '#1F75C5',
            /* negativeColor: 'red', */
            dataLabels: {
                // enabled: true,
                crop: false,
            }
        }, {
            marker: {
                enabled: false,
            },
            showInLegend: false,
            name: 'Other FDs',
            data: [
                100, 80, 15, 25, 35, 45
            ],
            color: '#61B2F3',
            dataLabels: {
                // enabled: true,
                crop: false,
                // overflow: 'none',
                // style: {
                //     fontSize: 12,
                //     fontFamily: "'Inter', 'sans-serif'",
                //     fontWidth: 'semibold',
                //     color: '#61B2F3',
                //     textOutline: 0
                // },
            }
        }]
    });

    return (
        <>
            <HighchartsReact
                containerProps={{ style: { height: "148px", width: '100%', paddingLeft: "0px", paddingRight: "0px" } }}
                options={options}
                highcharts={Highcharts}
            />
        </>
    )
}

