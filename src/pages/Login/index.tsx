import React from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input
} from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { login } from '@/services/session'

const Login: React.FC = () => {
  const [form] = Form.useForm()

  const onFinish = async (values: any) => {
    try {
      const response = await login(values)

      console.log(response)
    } catch (error) {

    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className='grid place-items-center w-screen h-screen bg-slate-50'>
      <div className='rounded-md shadow-md shadow-gray-200 bg-white'>
        <div className='p-10 grid place-items-center'>
          <h1 className='text-2xl'>Login Page</h1>
          <div className='w-96'>
            <Form
              layout='vertical'
              form={form}
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
              <Form.Item>
                <Checkbox className='justify-around'>Remember me</Checkbox>
              </Form.Item>
              <Form.Item className='m-0'>
                <Button block htmlType='submit'>
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
