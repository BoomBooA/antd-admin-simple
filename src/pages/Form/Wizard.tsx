import React, { useState } from 'react'
import { Button, Checkbox, DatePicker, Form, Input, Radio, Select, Steps, Table } from 'antd'
import numeral from 'numeral'
import Page from '@/components/Page'
import { FormLabelAlign } from 'antd/es/form/interface'

const FormWizard: React.FC = () => {
  const [form] = Form.useForm()
  const [current, setCurrent] = useState(0)

  const itemColProps = {
    labelAlign: 'left' as FormLabelAlign,
    labelCol: {
      span: 4,
      offset: 4
    },
    wrapperCol: {
      span: 12
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
    <Page title='FORM WIZARD'>
      <Steps
        current={current}
        items={[
          {
            title: 'Personal information'
          },
          {
            title: 'Billing information'
          },
          {
            title: 'Payment details'
          }
        ]}
      />
      <Form
        className='my-8'
        form={form}
        onFinish={handleSubmit}
      >
        {current === 0 && (
          <>
            <Form.Item
              label='Name'
              name='name'
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
          </>
        )}
        {current === 1 && (
          <Table
            className='mx-32 my-4'
            columns={[
              {
                title: 'Field',
                dataIndex: 'name'
              },
              {
                title: 'Price',
                dataIndex: 'value',
                render: (value, record, index) => {
                  return numeral(value).format('$0,0.00')
                }
              }
            ]}
            dataSource={[
              {
                name: 'Cart Subtotal',
                value: 792
              },
              {
                name: 'Totals',
                value: 792
              },
              {
                name: 'Order Total',
                value: 792
              }
            ]}
            pagination={false}
          />
        )}
        {current === 2 && (
          <></>
        )}
        <Form.Item
          {...itemSubmitProps}
        >
          {current === 0 && (
            <Button onClick={() => setCurrent(1)}>
              Next
            </Button>
          )}
          {current === 1 && (
            <>
              <Button onClick={() => setCurrent(2)}>
                Next
              </Button>
              <Button className='mx-4' onClick={() => setCurrent(0)}>
                Back
              </Button>
            </>
          )}
          {current === 2 && (
            <>
              <Button
                htmlType='submit'
                type='primary'
              >
                Submit
              </Button>
              <Button className='mx-4' onClick={() => setCurrent(1)}>
                Back
              </Button>
            </>
          )}
        </Form.Item>
      </Form>
    </Page>
  )
}

export default FormWizard
