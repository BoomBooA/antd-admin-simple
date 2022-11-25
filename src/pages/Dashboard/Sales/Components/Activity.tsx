import React from 'react'
import { Card, List, Progress } from 'antd'
import numeral from 'numeral'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ActivityProps {
}

interface ActivityItemProps {
  name: string
  sales: number
  percent: number
  trending: number
  strokeColor: string
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  name,
  sales,
  percent,
  trending,
  strokeColor
}) => {
  return (
    <List.Item className='!p-0'>
      <div className='w-full mb-4'>
        <div className='flex items-center'>
          <div className='flex-1 text-base'>{name}</div>
          <div className='flex w-30'>
            <div className={`${trending > 0 ? 'text-green-600' : 'text-red-600'}`}>
              <FontAwesomeIcon
                className='mx-2'
                icon={trending > 0 ? solid('arrow-trend-up') : solid('arrow-trend-down')}
              />
            </div>
            <span>
            {numeral(sales).format('$0,0')}
              ({numeral(Math.abs(trending)).format('0%')})
          </span>
          </div>
        </div>
        <div>
          <Progress
            className='my-0'
            percent={percent}
            status='active'
            showInfo={false}
            strokeColor={strokeColor}
          />
        </div>
      </div>
    </List.Item>
  )
}


const Activity: React.FC<ActivityProps> = () => {
  const data = [
    {
      name: 'India',
      sales: 32879,
      trending: -0.65,
      percent: 70,
      strokeColor: '#22c55e'
    },
    {
      name: 'Russia',
      sales: 22710,
      trending: 0.55,
      percent: 65,
      strokeColor: '#0ea5e9'
    },
    {
      name: 'India',
      sales: 56291,
      trending: -0.69,
      percent: 72,
      strokeColor: '#f43f5e'
    },
    {
      name: 'Brazil',
      sales: 34209,
      trending: 0.6,
      percent: 68,
      strokeColor: '#f43f5e'
    },
    {
      name: 'United States',
      sales: 45870,
      trending: 0.86,
      percent: 80,
      strokeColor: '#f43f5e'
    },
    {
      name: 'Germany',
      sales: 67357,
      trending: 0.73,
      percent: 75,
      strokeColor: '#22c55e'
    },
    {
      name: 'U.A.E',
      sales: 56291,
      trending: -0.69,
      percent: 70,
      strokeColor: '#22c55e'
    }
  ]

  return (
    <Card
      title='SALES ACTIVITY'
      bodyStyle={{
        padding: '1rem 1.5rem'
      }}
    >
      <List
        split={false}
        dataSource={data}
        renderItem={(item) => <ActivityItem {...item} />}
      />
    </Card>
  )
}

export default Activity
