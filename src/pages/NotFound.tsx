import React from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  fa4,
  fa0
} from '@fortawesome/free-solid-svg-icons'

const NotFound: React.FC = () => {
  const renderNumber = (icon: IconDefinition) => {
    return (
      <FontAwesomeIcon
        className='text-6xl m-2'
        icon={icon}
      />
    )
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='my-4'>
        {renderNumber(fa4)}
        {renderNumber(fa0)}
        {renderNumber(fa4)}
      </div>
      <div className='text-xl text-center mb-4'>
        <p>Page not found</p>
        <p>Oops! The Page is missing...</p>
      </div>
    </div>
  )
}

export default NotFound

