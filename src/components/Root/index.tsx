import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { COPYRIGHT } from '@/config'

const { Header, Footer, Sider, Content } = Layout

const Root: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout>
      <Sider
        className='h-screen'
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className='bg-slate-500 h-8 mx-4 my-4' />
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1'
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2'
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3'
            }
          ]}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header
          className='!bg-white'
          style={{ padding: 0 }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger text-lg p-4',
            onClick: () => setCollapsed(!collapsed)
          })}
        </Header>
        <Content className='m-6 mb-0'>
          <div className='container h-full'>
            <Outlet />
          </div>
        </Content>
        <Footer className='text-center'>
          {COPYRIGHT}
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Root
