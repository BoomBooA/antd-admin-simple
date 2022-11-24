import React from 'react'
import { Card } from 'antd'
import { Column } from '@ant-design/plots'

interface BudgetProps {
}

const Budget: React.FC<BudgetProps> = () => {
  const data = [
    {
      name: 'Orders',
      month: 'Jan',
      value: 70
    },
    {
      name: 'Orders',
      month: 'Feb',
      value: 60
    },
    {
      name: 'Orders',
      month: 'Mar',
      value: 90
    },
    {
      name: 'Orders',
      month: 'Apr',
      value: 40
    },
    {
      name: 'Orders',
      month: 'May',
      value: 60
    },
    {
      name: 'Orders',
      month: 'Jun',
      value: 99
    },
    {
      name: 'Orders',
      month: 'Jul',
      value: 56
    },
    {
      name: 'Orders',
      month: 'Aug',
      value: 12
    },
    {
      name: 'Orders',
      month: 'Sep',
      value: 63
    },
    {
      name: 'Orders',
      month: 'Oct',
      value: 105
    },
    {
      name: 'Orders',
      month: 'Nov',
      value: 77
    },
    {
      name: 'Orders',
      month: 'Dec',
      value: 50
    },
    {
      name: 'Sales',
      month: 'Jan',
      value: 44
    },
    {
      name: 'Sales',
      month: 'Feb',
      value: 42
    },
    {
      name: 'Sales',
      month: 'Mar',
      value: 57
    },
    {
      name: 'Sales',
      month: 'Apr',
      value: 86
    },
    {
      name: 'Sales',
      month: 'May',
      value: 58
    },
    {
      name: 'Sales',
      month: 'Jun',
      value: 55
    },
    {
      name: 'Sales',
      month: 'Jul',
      value: 70
    },
    {
      name: 'Sales',
      month: 'Aug',
      value: 43
    },
    {
      name: 'Sales',
      month: 'Sep',
      value: 23
    },
    {
      name: 'Sales',
      month: 'Oct',
      value: 54
    },
    {
      name: 'Sales',
      month: 'Nov',
      value: 77
    },
    {
      name: 'Sales',
      month: 'Dec',
      value: 34
    }
  ]

  const config = {
    data,
    isGroup: true,
    xField: 'month',
    yField: 'value',
    seriesField: 'name',
    color: ['#38bdf8', '#9ca3af'],
    autoFit: true
  }

  return (
    <Card title='PROJECT BUDGET'>
      <Column {...config} />
    </Card>
  )
}

export default Budget
