import React, { Suspense, useEffect, useState, useContext } from 'react';
import Highcharts from "highcharts/highstock";
import './Stocks.css';
import axios from "axios";
import { host } from '../../Config';
import { UtilsContext } from '../../UtilsProvider/UtilsProvider';
import HighLowCard from '../../elements/HighLowCard/HighLowCard';

const HighchartsReact = React.lazy(() => import('highcharts-react-official'));


let results = [];
var price = undefined;

const options = {
    chart: {
        // zoomType: 'x',
        type: "area",
        marginLeft: 30,
        marginBottom: 25,
        marginRight: 0,
        spacingLeft: 0,
        spacingRight: 0,
        backgroundColor: 'transparent'
    },
    rangeSelector: {
        enabled: false,
    },
    time: {
        useUTC: false,
    },
    yAxis: {
        minPadding: 0,
        tickPixelInterval: 50,
        /* min: 0,
        max: 722.5*/
        opposite: false,
        lineColor: '#8E8E93',
        lineWidth: 2,
        gridLineWidth: 0,
        labels: {
            x: -5,
            // tickInterval: 30,
            style: {
                padding: 5,
                fontSize: 9,
                fontFamily: "'Poppins', 'sans-serif'",
                fontWidth: 'semibold',
                color: '#232A31'
            }
        }
    },
    xAxis: {
        crosshair: {
            width: 1,
            color: '#2B3F6C',
        },
        tickLength: 0,
        opposite: false,
        lineColor: '#8E8E93',
        lineWidth: 2,
        gridLineWidth: 0,
        labels: {
            style: {
                fontSize: 10,
                color: '#232A31',
                fontFamily: "'Poppins', 'sans-serif'",
                fontWidth: 'semibold',
            }
        }
    },
    scrollbar: {
        enabled: false
    },
    credits: {
        enabled: false,
    },
    navigator: {
        enabled: false,
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
        pointFormat: '<div id="innerToolTip"><div id="price">{point.y:.2f}</div>' +
            '<div id="time">{point.x:%e %b}</div>' +
            '<div id="time">{point.x:%H:%M}</div></div>',
        footerFormat: '</div>',
    },
    series: [{
        name: 'stocks',
        type: "area",
        data: results,
        lineColor: '#3EBD61',
        lineWidth: 1,
        connectNulls: true,
        color: 'transparent',
        marginLeft: 0,
        marginRight: 0,
        marker: {
            enabled: true,
            symbol: 'circle',
            radius: .5,
            states: {
                hover: {
                    fillColor: 'white',
                    lineColor: '#2B3F6C',
                    lineWidth: 2.5,
                }
            }
        },
        fillColor: {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, 'rgba(62,189,97,0.34)'],
                [1, 'rgba(62,189,97,0.1)']
            ]
        },
        threshold: null,
        gapSize: 3000,
        states: {
            hover: {
                lineWidth: 1,
            }
        }
    }]
};

function StockGraph({ name, activeChartType, list }) {
    //mixpanel
    const utils = useContext(UtilsContext)

    const [duration, setDuration] = useState(0);
    const [chartOptions, setChartOptions] = useState(options);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    let exchange = null;

    const fetchData = (inputDuration, chartType) => {
        setLoading(true)
        results.splice(0, results.length)
        exchange = chartType === 1 ? 'NSE' : 'BSE';
        let stringDuration = getStringDuration(inputDuration);
        axios.get(`${host}/resources/stock-details/${name}/prices/${exchange}/${stringDuration}`)
            .then(response => {
                if (!!response.data && response.data.length > 0) {
                    setData(response.data);
                    response.data.forEach(e => {
                        let result = [];
                        result.push(e.x);
                        result.push(e.y);
                        results.push(result);
                    })
                } else {
                    setData([]);
                }
            }).then(() => setLoading(false));
    };

    if (duration === 0) {
        if (activeChartType === 2) {
            if (list?.bseLtpPrice - list?.bseClosePrice < 0) {
                options.series[0].lineColor = '#EB4E2C'
                options.series[0].fillColor.stops = [[0, 'rgba(235, 78, 44,0.34)'], [1, 'rgba(235, 78, 44,0.1)']]
            } else {
                options.series[0].lineColor = '#3EBD61'
                options.series[0].fillColor.stops = [[0, 'rgba(62,189,97,0.34)'], [1, 'rgba(62,189,97,0.1)']]
            }
        } else {
            if (list?.nseLtpPrice - list?.nseClosePrice < 0) {
                options.series[0].lineColor = '#EB4E2C'
                options.series[0].fillColor.stops = [[0, 'rgba(235, 78, 44,0.34)'], [1, 'rgba(235, 78, 44,0.1)']]
            } else {
                options.series[0].lineColor = '#3EBD61'
                options.series[0].fillColor.stops = [[0, 'rgba(62,189,97,0.34)'], [1, 'rgba(62,189,97,0.1)']]
            }
        }
    } else {
        if (data[0]) {
            if ((data[data.length - 1].y - data[0].y) < 0) {
                options.series[0].lineColor = '#EB4E2C'
                options.series[0].fillColor.stops = [[0, 'rgba(235, 78, 44,0.34)'], [1, 'rgba(235, 78, 44,0.1)']]
            } else {
                options.series[0].lineColor = '#3EBD61'
                options.series[0].fillColor.stops = [[0, 'rgba(62,189,97,0.34)'], [1, 'rgba(62,189,97,0.1)']]
            }
        }
    }
    if (duration > 2) {
        options.tooltip.pointFormat = '<div id="innerToolTip"><div id="price">{point.y:.2f}</div><div id="time">{point.x:%e %b}</div></div>'
    } else {
        options.tooltip.pointFormat = '<div id="innerToolTip"><div id="price">{point.y:.2f}</div><div id="time">{point.x:%e %b}</div><div id="time">{point.x:%H:%M}</div></div>'
    }


    function chartNodata(chart) {
        var price = chart.renderer.text('₹' + (activeChartType === 2 ? list.bseClosePrice : list.nseClosePrice),
            chart.plotBox.width - 45, chart.plotBox.height)
            .css({
                fontSize: '12px',
                fontWeight: '600',
                color: '#000000'
            })
            .add();
        return price
    }
    options.chart.events = {
        load: function () {
            let right = this.plotBox.width - 45
            let bottom = this.plotBox.height - 15
            this.renderer.text('Previous close', right, bottom)
                .css({
                    fontSize: '10px',
                    fontWeight: '500',
                    color: '#8E8E93'
                })
                .add();
        },
        render: function () {
            price && price.destroy();
            price = chartNodata(this);
        }
    }

    useEffect(() => {
        fetchData(duration, activeChartType);
        setChartOptions(options);
    }, [activeChartType, name]);

    const getStringDuration = (inputDuration) => {
        switch (inputDuration != null ? inputDuration : duration) {
            case 0:
                return '1D';
            case 1:
                return '1W';
            case 2:
                return '1M';
            case 3:
                return '3M';
            case 4:
                return '6M';
            case 5:
                return '1Y';
            case 6:
                return '5Y';
            default:
                return '1D';
        }
    }
    const handleEvent = (n) => {
        utils.sendData(
            'cta_clicked',
            {
                'page': 'stock_page',
                'fincode': name,
                'symbol': utils.stockData?.nseSymbol,
                'cta_text': getStringDuration(n),
                'cta_type': 'stock_graph',
            }
        )
    }

    return (
        <div>
            <Suspense fallback={<div className="mx-4 my-3 bg-[#D9D9D9] rounded px-3 pt-5 pb-4 h-[300px] animate-pulse"></div>}>
                {loading ? <div className="mx-4 my-3 bg-[#D9D9D9] rounded px-3 pt-5 pb-4 h-[300px] animate-pulse"></div>
                    :
                    <div className='ml-1 mr-4 my-0 p-0 swiper-no-swiping'>
                        <HighchartsReact
                            containerProps={{ style: { height: "300px", paddingLeft: "0px", paddingRight: "0px", width: '100%' } }}
                            options={options}
                            highcharts={Highcharts}
                            constructorType={"stockChart"}
                        />
                    </div>}
            </Suspense>
            <div className='grid grid-cols-10'>
                <HighLowCard stringDuration={getStringDuration(duration)} duration={duration} finCode={name}
                    exchange={activeChartType === 1 ? 'NSE' : 'BSE'} list={list} data={data} />
                <div className='font-Inter text-[12px] flex flex-row justify-between lg:justify-center lg:space-x-2 m-4 col-span-10 lg:col-span-6'>
                    <button
                        className={duration === 0 ?
                            'rounded-[4px] px-3 py-1 border-[1px] border-[#00439D] text-[#FFFFFF] bg-[#00439D] outline-none font-medium ' :
                            'rounded-[4px] px-3 py-1 font-medium border-[1px] border-[#FFFFFF]'}
                        onClick={() => {
                            handleEvent(0);
                            setDuration(0);
                            fetchData(0, activeChartType);
                            setChartOptions(chartOptions);
                        }}
                    >
                        1D
                    </button>
                    <button
                        className={duration === 1 ?
                            'rounded-[4px] px-3 py-1 border-[1px] border-[#00439D] text-[#FFFFFF] bg-[#00439D] outline-none font-medium ' :
                            'rounded-[4px] px-3 py-1 font-medium border-[1px] border-[#FFFFFF]'}
                        onClick={() => {
                            handleEvent(1);
                            setDuration(1);
                            fetchData(1, activeChartType);
                            setChartOptions(chartOptions);
                        }}
                    >
                        1W
                    </button>
                    <button
                        className={duration === 2 ?
                            'rounded-[4px] px-3 py-1 border-[1px] border-[#00439D] text-[#FFFFFF] bg-[#00439D] outline-none font-medium ' :
                            'rounded-[4px] px-3 py-1 font-medium border-[1px] border-[#FFFFFF]'}
                        onClick={() => {
                            handleEvent(2);
                            setDuration(2);
                            fetchData(2, activeChartType);
                            setChartOptions(chartOptions);
                        }}
                    >
                        1M
                    </button>
                    <button
                        className={duration === 3 ?
                            'rounded-[4px] px-3 py-1 border-[1px] border-[#00439D] text-[#FFFFFF] bg-[#00439D] outline-none font-medium ' :
                            'rounded-[4px] px-3 py-1 font-medium border-[1px] border-[#FFFFFF]'}
                        onClick={() => {
                            handleEvent(3);
                            setDuration(3);
                            fetchData(3, activeChartType);
                            setChartOptions(chartOptions);
                        }}
                    >
                        3M
                    </button>
                    <button
                        className={duration === 4 ?
                            'rounded-[4px] px-3 py-1 border-[1px] border-[#00439D] text-[#FFFFFF] bg-[#00439D] outline-none font-medium ' :
                            'rounded-[4px] px-3 py-1 font-medium border-[1px] border-[#FFFFFF]'}
                        onClick={() => {
                            handleEvent(4);
                            setDuration(4);
                            fetchData(4, activeChartType);
                            setChartOptions(chartOptions);
                        }}
                    >
                        6M
                    </button>
                    <button
                        className={duration === 5 ?
                            'rounded-[4px] px-3 py-1 border-[1px] border-[#00439D] text-[#FFFFFF] bg-[#00439D] outline-none font-medium ' :
                            'rounded-[4px] px-3 py-1 font-medium border-[1px] border-[#FFFFFF]'}
                        onClick={() => {
                            handleEvent(5);
                            setDuration(5);
                            fetchData(5, activeChartType);
                            setChartOptions(chartOptions);
                        }}
                    >
                        1Y
                    </button>
                    <button
                        className={duration === 6 ?
                            'rounded-[4px] px-3 py-1 border-[1px] border-[#00439D] text-[#FFFFFF] bg-[#00439D] outline-none font-medium ' :
                            'rounded-[4px] px-3 py-1 font-medium border-[1px] border-[#FFFFFF]'}
                        onClick={() => {
                            handleEvent(6);
                            setDuration(6);
                            fetchData(6, activeChartType);
                            setChartOptions(chartOptions);
                        }}
                    >
                        5Y
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StockGraph;