import React from 'react'
import { Card } from 'antd'

type PageProps = {
  children?: React.ReactNode
  title: string
}

const Page: React.FC<PageProps> = ({
  children
}) => {
  return (
    <Card
      bodyStyle={{
        padding: '0 1.5rem'
      }}
    >
      <h1 className='text-2xl my-8'>Account Settings</h1>
      {children}
    </Card>
  )
}

export default Page
