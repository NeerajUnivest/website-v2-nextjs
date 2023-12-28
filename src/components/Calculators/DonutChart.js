import React from 'react'
import { HighchartsReact } from "highcharts-react-official";
import Highcharts from "highcharts";

export default function DonutChart() {

  const calcColor = '#953723';

  const categories = [
    'Invested amount',
    'Estimated returns'

  ],
    data = [
      {
        y: 30,
        color: '#F5F5F5',
        drilldown: {
          name: 'Chrome',
          data: [
            36.89
          ]
        }
      },
      {
        y: 60,

        color: calcColor,
        drilldown: {
          name: 'Safari',
          data: [
            0.1
          ]
        }
      }
    ],
    browserData = [],
    // versionsData = [],
    dataLen = data.length;

  let i,
    j,
    drillDataLen,
    brightness;


  // Build the data arrays
  for (i = 0; i < dataLen; i += 1) {

    // add browser data
    browserData.push({
      name: categories[i],
      y: data[i].y,
      color: data[i].color
    });

    // add version data
    drillDataLen = data[i].drilldown.data.length;
    for (j = 0; j < drillDataLen; j += 1) {
      // const name = data[i].drilldown.categories[j];
      brightness = 0.2 - (j / drillDataLen) / 5;
      // versionsData.push({
      //   name,
      //   y: data[i].drilldown.data[j],
      //   color: 'red',
      //   custom: {
      //     version: name.split(' ')[1] || name.split(' ')[0]
      //   }
      // });
    }
  }

  return (
    <>
      <HighchartsReact
        containerProps={{ style: { height: "248px", width: '800px', paddingLeft: "0px", paddingRight: "0px" } }}
        options={{
          chart: {
            type: 'pie'
          },
          credits: {
            enabled: false
          },
          title: {
            text: '',
            align: 'left'
          },
          plotOptions: {
            pie: {
              shadow: false,
              center: ['50%', '50%']
            }
          },
          tooltip: {
            valueSuffix: '%'
          },
          series: [{
            name: '',
            data: browserData,
            size: '85%',
            innerSize: '60%',
            dataLabels: {
              color: '#ffffff',
              distance: '-50%'
            }
          }],
          responsive: {
            rules: [{
              condition: {
                maxWidth: 400
              },
              chartOptions: {
                series: []
              }
            }]
          }
        }}
        highcharts={Highcharts}
      />

    </>
  )
}
