import React from 'react'
import { Button, Card, Checkbox, Form, Input, Select, Switch } from 'antd'
import { FormLabelAlign } from 'antd/es/form/interface'
import Page from '@/components/Page'

const SettingBasic: React.FC = () => {
  const itemColProps = {
    labelAlign: 'left' as FormLabelAlign,
    labelCol: {
      span: 6
    }
  }

  return (
    <Page title='Account Settings'>
      <Form layout='horizontal'>
        <h1 className='text-sm font-bold my-4'>ACCOUNT</h1>
        <Form.Item
          label='User Name'
          name='username'
          {...itemColProps}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Email'
          name='email'
          {...itemColProps}
        >
          <Input type='email' />
        </Form.Item>
        <Form.Item
          label='Timezone'
          name='timezone'
          {...itemColProps}
        >
          <Select />
        </Form.Item>
        <Form.Item
          label='Verification'
          name='verification'
          {...itemColProps}
        >

          <Checkbox.Group
            options={[
              { label: 'Email', value: 'Email' },
              { label: 'SMS', value: 'SMS' },
              { label: 'Phone', value: 'Phone' }
            ]}
          />
        </Form.Item>
        <h1 className='text-sm font-bold my-4'>SECUIRITY SETTINGS</h1>
        <Form.Item
          label='2FA Verification'
          {...itemColProps}
        >
          <Button type='text'>Setup Verification</Button>
        </Form.Item>
        <h1 className='text-sm font-bold my-4'>NOTIFICATIONS</h1>
        <Form.Item
          label='Configure Notifications'
          {...itemColProps}
        >
          <Checkbox.Group
            options={[
              { label: 'Account Security', value: 'Account Security' },
              { label: 'System', value: 'System' },
              { label: 'Finance', value: 'Finance' }
            ]}
          />
        </Form.Item>
        <Form.Item
          label='Notification Sounds'
          {...itemColProps}
        >
          <Switch />
        </Form.Item>
        <Form.Item>
          <Button>Save Changes</Button>
        </Form.Item>
      </Form>
    </Page>
  )
}

export default SettingBasic
