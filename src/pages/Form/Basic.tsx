import React from 'react'
import { Button, Checkbox, DatePicker, Form, Input, Radio, Select } from 'antd'
import Page from '@/components/Page'
import { FormLabelAlign } from 'antd/es/form/interface'

const FormBasic: React.FC = () => {
  const [form] = Form.useForm()

  const itemColProps = {
    labelAlign: 'left' as FormLabelAlign,
    labelCol: {
      span: 4,
      offset: 4
    },
    wrapperCol: {
      span: 10
    }
  }

  const itemSubmitProps = {
    wrapperCol: {
      offset: 8
    }
  }

  /**
   * Submit form
   * @param values
   */
  const handleSubmit = (values: any) => {
    console.log('submit', values)
  }

  return (
    <Page title='FORM BASIC'>
      <Form
        form={form}
        onFinish={handleSubmit}
      >
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
          <Input />
        </Form.Item>
        <Form.Item
          label='Phone Number'
          name='phone'
          {...itemColProps}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Address'
          name='address'
          {...itemColProps}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Description'
          name='description'
          {...itemColProps}
        >
          <Input.TextArea
            rows={6}
          />
        </Form.Item>
        <Form.Item
          label='Birthday'
          name='birthday'
          {...itemColProps}
        >
          <DatePicker className='w-full' />
        </Form.Item>
        <Form.Item
          label='Gender'
          name='gender'
          {...itemColProps}
        >
          <Select placeholder='Select gender'>
            <Select.Option value='Male'>Male</Select.Option>
            <Select.Option value='Female'>Female</Select.Option>
            <Select.Option value='Others'>Others</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label='Target'
          name='target'
          {...itemColProps}
        >
          <Checkbox.Group
            options={['Target1', 'Target2', 'Target3']}
          />
        </Form.Item>
        <Form.Item
          label='Choosing'
          name='choosing'
          {...itemColProps}
        >
          <Radio.Group
            options={['Choosing1', 'Choosing2', 'Choosing3']}
          />
        </Form.Item>
        <Form.Item
          {...itemSubmitProps}
        >
          <Button
            htmlType='submit'
            type='primary'
          >
            Submit
          </Button>
          <Button
            className='mx-4'
            htmlType='reset'
            onClick={() => form.resetFields()}
          >
            Reset
          </Button>
        </Form.Item>
      </Form>
    </Page>
  )
}

export default FormBasic
