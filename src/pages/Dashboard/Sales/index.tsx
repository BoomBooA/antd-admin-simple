import React from 'react'
import Browser from './Components/Browser'
import Budget from './Components/Budget'
import Customers from './Components/Customers'
import Earning from './Components/Earning'
import Tasks from './Components/Tasks'

const Sales: React.FC = () => {
  return (
    <div>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-full col-span-12 2xl:col-span-5'>
          <Earning />
          <div className='py-2' />
          <Browser />
        </div>
        <div className='col-span-full col-span-12 2xl:col-span-7'>
          <Budget />
          <div className='py-2' />
          <div className='grid grid-cols-2 gap-4'>
            <div className='col-span-2 2xl:col-span-1'>
              <Customers />
            </div>
            <div className='col-span-2 2xl:col-span-1'>
              <Tasks />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sales
