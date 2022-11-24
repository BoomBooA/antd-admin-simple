import React from 'react'
import Earning from './Components/Earning'

const Sales: React.FC = () => {
  return (
    <div>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-5'>
          <Earning />
        </div>
        <div className='col-span-7'>02</div>
      </div>
    </div>
  )
}

export default Sales
