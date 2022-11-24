import React from 'react'
import { Card, List } from 'antd'
import numeral from 'numeral'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface BrowserProps {
}

interface BrowserItemProps {
  bordered?: boolean
  name: string
  developer: string
  visitNumber: number
  trending: number
  icon: IconDefinition
}

const BrowserItem: React.FC<BrowserItemProps> = ({
  name,
  developer,
  visitNumber,
  trending,
  icon
}) => {
  return (
    <List.Item className='!p-0'>
      <div className='w-full flex items-center my-4'>
        <div className='pr-4'>
          <FontAwesomeIcon
            className='text-4xl'
            icon={icon}
          />
        </div>
        <div className='flex-1'>
          <div className='text-base'>{name}</div>
          <div className='text-gray-500'>{developer}</div>
        </div>
        <div className='flex w-30'>
          <div className='font-bold'>
            {numeral(visitNumber).format('0,0')}
          </div>
          <div className={`${trending > 0 ? 'text-green-600' : 'text-red-600'}`}>
            <FontAwesomeIcon
              className='mx-2'
              icon={trending > 0 ? solid('arrow-trend-up') : solid('arrow-trend-down')}
            />
            <span>{numeral(Math.abs(trending)).format('0.00%')}</span>
          </div>
        </div>
      </div>
    </List.Item>
  )
}


const Browser: React.FC<BrowserProps> = () => {
  const data = [
    {
      name: 'Chrome',
      developer: 'Google, Inc.',
      visitNumber: 35502,
      trending: 0.1275,
      icon: brands('chrome')
    },
    {
      name: 'Edge',
      developer: 'Microsoft Corporation, Inc.',
      visitNumber: 25364,
      trending: -0.2437,
      icon: brands('edge')
    },
    {
      name: 'Firefox',
      developer: 'Mozilla Foundation, Inc.',
      visitNumber: 14635,
      trending: 0.1563,
      icon: brands('firefox')
    },
    {
      name: 'Safari',
      developer: 'Apple Corporation, Inc.',
      visitNumber: 35657,
      trending: -0.1254,
      icon: brands('safari')
    },
    {
      name: 'Opera',
      developer: 'Opera, Inc.',
      visitNumber: 12563,
      trending: -0.1512,
      icon: brands('opera')
    }
  ]

  return (
    <Card title='BROWSER USAGE'>
      <List
        split
        dataSource={data}
        renderItem={(item) => <BrowserItem {...item} />}
      />
    </Card>
  )
}

export default Browser
