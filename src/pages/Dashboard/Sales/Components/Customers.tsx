import React from 'react'
import { Avatar, Card, List, Tag } from 'antd'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface CustomerItemProps {
  avatar: IconDefinition
  name: string
  userId: string
  status: string
}

const CustomerItem: React.FC<CustomerItemProps> = ({
  avatar,
  name,
  userId,
  status
}) => {
  const renderTagColor = (text: string) => {
    switch (text) {
      case 'Paid':
        return 'success'
      case 'Pending':
        return 'error'
      case 'Canceled':
        return 'warning'
      default:
        return 'default'
    }
  }

  return (
    <List.Item className='!p-0'>
      <div className='w-full flex items-center my-2'>
        <div className='pr-4'>
          <Avatar icon={<FontAwesomeIcon icon={avatar} />} />
        </div>
        <div className='flex-1'>
          <div className='text-sm font-bold'>{name}</div>
          <div className='text-gray-500'>{`User ID: ${userId}`}</div>
        </div>
        <div>
          <Tag color={renderTagColor(status)}>{status}</Tag>
        </div>
      </div>
    </List.Item>
  )
}

const Customers: React.FC = () => {
  const data = [
    {
      name: 'Samantha Melon',
      userId: '#1234',
      status: 'Paid',
      avatar: solid('user-astronaut')
    },
    {
      name: 'Allie Grater',
      userId: '#1234',
      status: 'Pending',
      avatar: solid('user-astronaut')
    },
    {
      name: 'Gabe Lackmen',
      userId: '#1234',
      status: 'Pending',
      avatar: solid('user-astronaut')
    },
    {
      name: 'Manuel Labor',
      userId: '#1234',
      status: 'Paid',
      avatar: solid('user-astronaut')
    },
    {
      name: 'Hercules Bing',
      userId: '#1234',
      status: 'Canceled',
      avatar: solid('user-astronaut')
    },
    {
      name: 'Manuel Labor',
      userId: '#1234',
      status: 'Pending',
      avatar: solid('user-astronaut')
    }
  ]

  return (
    <Card
      title='RECENT CUSTOMERS'
      bodyStyle={{
        padding: '0 2rem'
      }}
    >
      <List
        split
        dataSource={data}
        renderItem={(item) => <CustomerItem {...item} />}
      />
    </Card>
  )
}

export default Customers
