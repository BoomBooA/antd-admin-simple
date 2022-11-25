import React from 'react'
import { Card, Checkbox, Tag } from 'antd'

const Tasks: React.FC = () => {
  const data = [
    {
      name: 'accurate information at any given point.',
      deadline: 'Today'
    },
    {
      name: 'sharing the information with clients or stakeholders.',
      deadline: 'Today'
    },
    {
      name: 'Hearing the information and responding.',
      deadline: '22 hrs'
    },
    {
      name: 'Setting up and customizing your own sales.',
      deadline: '1 Day'
    },
    {
      name: 'To have a complete 360° overview of sales.',
      deadline: '2 Days'
    },
    {
      name: 'New Admin Launched.'
    },
    {
      name: 'To maximize profits and improve productivity.'
    },
    {
      name: 'To improve profits.'
    }
  ]

  const renderTagColor = (text: string) => {
    switch (text) {
      case 'Today':
        return 'processing'
      case '22 hrs':
        return 'success'
      default:
        return 'default'
    }
  }

  return (
    <Card
      title='MAIN TASKS'
      bodyStyle={{
        padding: '0.3rem 1.5rem'
      }}
    >
      {data.map(item => (
        <div className='flex items-center my-4'>
          <div className='flex-1'>
            <Checkbox defaultChecked={!item.deadline}>{item.name}</Checkbox>
          </div>
          <div>
            {item.deadline && (
              <Tag color={renderTagColor(item.deadline)}>{item.deadline}</Tag>
            )}
          </div>
        </div>
      ))}
    </Card>
  )
}

export default Tasks
