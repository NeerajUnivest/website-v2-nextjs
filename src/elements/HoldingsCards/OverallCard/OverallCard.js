import React, { useEffect, useState } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function OverallCard({ data, quarter }) {
    const [quaters, setQuaters] = useState(0);

    //for "show more" and "show less"
    const [content, setContent] = useState(0);

    const [options, setOptions] = useState(null);

    const filterData = (n = 0) => {
        setOptions({
            colors: ['#FF008A', '#F2AB3C', '#007AFF', '#0CBA29', '#BD00FF'],
            chart: {
                type: 'pie',
                backgroundColor: 'transparent',
                events: {
                    render: setTimeout(function () {
                        window.dispatchEvent(new Event('resize'));
                    }, 1000)
                }
            },
            title: {
                text: null,
            },
            exporting: {
                enabled: false,
            },
            tooltip: {
                enabled: false,
            },
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    cursor: 'pointer',
                    connectorAllowed: false,
                    dataLabels: {
                        /*  crookedDistance: '70%',*/

                        // connectorShape: 'crookedLine',

                        /* connectorPadding: 0, */
                        /* distance: "-30%", */

                        // alignTo: 'connectors',
                        // alignTo: 'plotEdges',
                        enabled: true,
                        // connectorColor: '#000000',
                        // connectorAllowed: false,
                        /* format: '{point.name}: {y} %', */
                        fontFamily: "'Inter', sans-serif",
                        formatter: function () {
                            return '<div style="><div style="font-size: 12px; font-weight: 500; width: 0px;">' +
                                this.point.name + '</div><br><div style="font-size: 10px; font-weight: 400; ">' +
                                this.y + '%</div></div>';
                        },
                        style: {
                            // fontFamily: "'Inter', 'sans-serif'",
                            textOutline: 0
                        },
                    },
                    showInLegend: false
                }
            },
            credits: {
                enabled: false,
            },
            series: [{
                name: 'All',
                colorByPoint: true,
                innerSize: '50%',
                data: [{
                    name: 'Promoters',
                    y: data[n]?.promoters !== 0 && data[n]?.promoters
                },
                {
                    name: 'FII',
                    y: data[n]?.foreignInstitutions !== 0 && data[n]?.foreignInstitutions
                },
                {
                    name: 'DII',
                    y: (data[n]?.mutualFunds + data[n]?.domesticInstitutions) !== 0 && data[n]?.mutualFunds + data[n]?.domesticInstitutions
                },
                {
                    name: 'Public',
                    y: (data[n]?.others + data[n]?.retail) !== 0 && data[n]?.others + data[n]?.retail
                },]
            }]
        })
    }
    useEffect(() => {
        filterData(0)
    }, []);


    return (
        <div className="mx-4 h-[301px] rounded-[12px] border-[1px] border-[#E5E5E5] font-Inter font-medium">
            <div className='p-2'>
                <HighchartsReact
                    containerProps={{ style: { height: "220px", width: '100%' } }}
                    options={options}
                    highcharts={Highcharts}
                />
            </div>
            <div className='mb-0'>
                {content === 0 ?
                    <div className='flex flex-col justify-center h-[90px]'>
                        <div className='flex flex-row justify-evenly font-Inter font-medium mb-2'>
                            <button
                                className={quaters === 0 ? 'px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] text-[#ffffff] bg-[#00439D]' :
                                    'px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] text-[#000000]'
                                }
                                onClick={() => {
                                    setQuaters(0)
                                    filterData(0)
                                }}
                            >{data[0]?.quarter}
                            </button>
                            <button
                                className={quaters === 1 ? 'px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] text-[#ffffff] bg-[#00439D]' :
                                    'px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] text-[#000000]'
                                }
                                onClick={() => {
                                    setQuaters(1)
                                    filterData(1)
                                }}
                            >{data[1]?.quarter}
                            </button>
                            <button
                                className={quaters === 2 ? 'px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] text-[#ffffff] bg-[#00439D]' :
                                    'px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] text-[#000000]'
                                }
                                onClick={() => {
                                    setQuaters(2)
                                    filterData(2)
                                }}
                            >{data[2]?.quarter}
                            </button>
                            <button
                                className='text-[#00439D] px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px]'
                                onClick={() => {
                                    setContent(3)
                                }}
                            >Show more
                            </button>
                        </div>
                    </div>
                    :
                    <div className='font-Inter font-medium h-[100px]'>
                        <div className='flex flex-row justify-evenly font-Inter font-medium'>
                            <button
                                className={quaters === 0 ? 'px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] text-[#ffffff] bg-[#00439D]' :
                                    'px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] text-[#000000]'
                                }
                                onClick={() => {
                                    setQuaters(0)
                                    filterData(0)
                                }}
                            >{data[0]?.quarter}
                            </button>
                            <button
                                className={quaters === 1 ? 'px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] text-[#ffffff] bg-[#00439D]' :
                                    'px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] text-[#000000]'
                                }
                                onClick={() => {
                                    setQuaters(1)
                                    filterData(1)
                                }}
                            >{data[1]?.quarter}
                            </button>
                            <button
                                className={quaters === 2 ? 'px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] text-[#ffffff] bg-[#00439D]' :
                                    'px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] text-[#000000]'
                                }
                                onClick={() => {
                                    setQuaters(2)
                                    filterData(2)
                                }}
                            >{data[2]?.quarter}
                            </button>
                            <button
                                className={quaters === 3 ? 'px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] text-[#ffffff] bg-[#00439D]' :
                                    'px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] text-[#000000]'
                                }
                                onClick={() => {
                                    setQuaters(3)
                                    filterData(3)
                                }}
                            >{data[3]?.quarter}
                            </button>
                        </div>
                        <div className='flex flex-row justify-evenly font-Inter font-medium mb-1.5'>
                            <button
                                className={quaters === 4 ? 'px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] text-[#ffffff] bg-[#00439D]' :
                                    'px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] text-[#000000]'
                                }
                                onClick={() => {
                                    setQuaters(4)
                                    filterData(4)
                                }}
                            >{data[4]?.quarter}
                            </button>
                            <button
                                className={quaters === 5 ? 'px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] text-[#ffffff] bg-[#00439D]' :
                                    'px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] text-[#000000]'
                                }
                                onClick={() => {
                                    setQuaters(5)
                                    filterData(5)
                                }}
                            >{data[5]?.quarter}
                            </button>
                            <button
                                className={quaters === 6 ? 'px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] text-[#ffffff] bg-[#00439D]' :
                                    'px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] text-[#000000]'
                                }
                                onClick={() => {
                                    setQuaters(6)
                                    filterData(6)
                                }}
                            >{data[6]?.quarter}
                            </button>
                            <div
                                className='text-[#00439D] px-3 py-1 rounded-[4px] font-medium text-[10px] leading-[15px] tracking-[.5px] mb-1.5 flex flex-row justify-center'
                                onClick={() => setContent(0)}
                            >Show less
                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

function isEqual(prevProps, nextProps) {
    return prevProps.number === nextProps.number;
}

const MemoizedOverallCard = React.memo(OverallCard, isEqual);
export default MemoizedOverallCard;