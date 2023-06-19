import React, { useEffect, useState } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from 'moment';

function PromotersCard(props) {
    const [options, setOptions] = useState(null);
    const [promoters, setPromoters] = useState([]);
    const [pledges, setPledges] = useState([]);
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        setPromoters([])
        setPledges([])
        setCategories([])
        let dataArray = props.data !== '' && props.data.slice().reverse();
        dataArray[0] && dataArray.forEach((element, i) => {
            if (i > 1) {
                categories.push(element.quarter);
                promoters.push(element.promoters);
                pledges.push(element.pledges);
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
                        fontFamily: "'Inter', 'sans-serif'",
                        fontWidth: 'semibold',
                        color: '#979797',

                    }
                },
                categories: categories,
            },
            yAxis: {
                max: 100,
                tickPixelInterval: 70,
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
                name: 'Promoters',
                data: promoters,
                color: '#0088FF',
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        let color = '';
                        let val = this.y;
                        if (this.y >= 0) {
                            color = 'black';
                        } else {
                            color = '#DD2C2C';
                        }

                        return '<span style="font-size:10px; color:' + color + '">' + val + '%</span>';
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
                name: 'Pledges',
                data: pledges,
                color: '#DD2C2C',
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

                        return '<span style="font-size:10px; color:' + color + '">' + val + '%</span>';
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
    }, [props]);

    return (
        <div className="mx-4 h-[301px] rounded-[12px] border-[1px] border-[#E5E5E5] font-Inter font-medium">
            <div className='text-[12px] leading-[18px] mx-3 my-2'>
                <div className=''>Promoters</div>
            </div>
            <div className='pb-2'>
                <HighchartsReact
                    containerProps={{ style: { height: "228px", width: '100%' } }}
                    options={options}
                    highcharts={Highcharts}
                />
            </div>
        </div>
    )
}

function isEqual(prevProps, nextProps) {
    return prevProps.number === nextProps.number;
}

const MemoizedPromotersCard = React.memo(PromotersCard, isEqual);
export default MemoizedPromotersCard;