import React from 'react'
import { Card } from 'antd'
import { Line } from '@ant-design/charts'

const Visitors: React.FC = () => {
  const config = {
    data: [
      {
        name: 'Male',
        day: '1',
        num: 51
      },
      {
        name: 'Male',
        day: '2',
        num: 44
      },
      {
        name: 'Male',
        day: '3',
        num: 55
      },
      {
        name: 'Male',
        day: '4',
        num: 60
      },
      {
        name: 'Male',
        day: '5',
        num: 54
      },
      {
        name: 'Male',
        day: '6',
        num: 70
      },
      {
        name: 'Male',
        day: '7',
        num: 80
      },
      {
        name: 'Female',
        day: '1',
        num: 30
      },
      {
        name: 'Female',
        day: '2',
        num: 35
      },
      {
        name: 'Female',
        day: '3',
        num: 40
      },
      {
        name: 'Female',
        day: '4',
        num: 65
      },
      {
        name: 'Female',
        day: '5',
        num: 70
      },
      {
        name: 'Female',
        day: '6',
        num: 50
      },
      {
        name: 'Female',
        day: '7',
        num: 40
      }
    ],
    xField: 'day',
    yField: 'num',
    seriesField: 'name',
    legend: {},
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 2000
      }
    }
  }

  return (
    <Card title='WEEKLY VISITORS'>
      <Line {...config} />
    </Card>
  )
}

export default Visitors
