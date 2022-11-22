import React, { useEffect, useState } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  message
} from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { login } from '@/services/session'
import { APP_NAME } from '@/config'

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [rememberUser, setRememberUser] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {

  }, [])

  const onFinish = async (values: any) => {
    try {
      setLoading(true)
      const response = await login(values)
      if (response.code === 0) {
        message.error({
          content: response.message
        })
      }
    } catch (error) {

    }

    setLoading(false)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className='grid place-items-center w-screen h-screen bg-slate-50'>
      <div className='rounded-md shadow-md shadow-gray-200 bg-white'>
        <div className='p-10 grid place-items-center'>
          <h1 className='text-2xl'>{APP_NAME}</h1>
          <div className='w-96'>
            <Form
              layout='vertical'
              form={form}
              initialValues={{
                remember: rememberUser
              }}
              requiredMark={false}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label='Username'
                name='username'
                rules={[{ required: true, message: 'please input your username' }]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder='Enter your username'
                />
              </Form.Item>
              <Form.Item
                label='Password'
                name='password'
                rules={[
                  { required: true, message: 'please input your password' },
                  { min: 6, max: 18, message: 'password length should in 6-18 characters' }
                ]}
              >
                <Input
                  prefix={<LockOutlined />}
                  placeholder='Enter your password'
                  type='password'
                />
              </Form.Item>
              <Form.Item
                name='remember'
                valuePropName='checked'
              >
                <Checkbox className='justify-around'>Remember me</Checkbox>
              </Form.Item>
              <Form.Item className='m-0'>
                <Button
                  block
                  htmlType='submit'
                  loading={loading}
                >
                  Sign in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login
