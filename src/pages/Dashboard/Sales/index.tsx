import React from 'react'
import Browser from './Components/Browser'
import Budget from './Components/Budget'
import Earning from './Components/Earning'

const Sales: React.FC = () => {
  return (
    <div>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-full xl:col-span-5'>
          <Earning />
          <div className='py-2'></div>
          <Browser />
        </div>
        <div className='col-span-full xl:col-span-7'>
          <Budget />
        </div>
      </div>
    </div>
  )
}

export default Sales
