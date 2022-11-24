import React from 'react'
import { Card } from 'antd'
import numeral from 'numeral'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faCreditCard,
  faDollarSign,
  faShop,
  faUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

interface EarningCardProps {
  title: string
  value: string | number
  changedValue: number
  renderValue?: (value: string | number) => string
  icon: IconDefinition
}

const EarningCard: React.FC<EarningCardProps> = ({
  title,
  value,
  changedValue,
  renderValue,
  icon
}) => {
  return (
    <Card>
      <div className='grid grid-cols-12'>
        <div className='col-span-9'>
          <div className='text-sm text-gray-700'>{title}</div>
          <div className='text-2xl text-gray-700'>{renderValue ? renderValue(value) : value}</div>
          <div className='w-full inline-flex items-center'>
            <div className='text-xs text-slate-500'>Last Week</div>
            {changedValue > 0 ? (
              <div className='p-2 text-green-500'>
                <FontAwesomeIcon icon={solid('caret-up')} />
                <span className='pl-2'>{`+ ${changedValue}`}</span>
              </div>
            ) : (
              <div className='p-2 text-red-500'>
                <FontAwesomeIcon icon={solid('caret-down')} />
                <span className='pl-2'>{changedValue}</span>
              </div>
            )}
          </div>
        </div>
        <div className='col-span-3 flex items-center justify-end'>
          <div className='w-8 h-8 flex items-center justify-center rounded'>
            <FontAwesomeIcon
              className='text-xl'
              icon={icon}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}

const Earning: React.FC = () => {
  return (
    <div className='grid grid-rows-2 grid-cols-1 xl:grid-cols-2 gap-3'>
      <EarningCard
        title='Today Orders'
        changedValue={427}
        value='5472'
        renderValue={(value) => numeral(value).format('0,0')}
        icon={faShop}
      />
      <EarningCard
        title='Today Earnings'
        changedValue={-453}
        value='47589'
        renderValue={(value) => numeral(value).format('$0,0')}
        icon={faDollarSign}
      />
      <EarningCard
        title='Profit Gain'
        changedValue={788}
        value='8943'
        renderValue={(value) => numeral(value).format('$0,0')}
        icon={faUpRightFromSquare}
      />
      <EarningCard
        title='Total Earnings'
        changedValue={-693}
        value='57120000'
        renderValue={(value) => numeral(value).format('($ 0.00 a)')}
        icon={faCreditCard}
      />
    </div>
  )
}

export default Earning
