import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Layout, Menu } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { COPYRIGHT } from '@/config'
import { RootState } from '@/store'
import { SessionInitialState } from '@/store/session'
import Language from '../Layout/Language'
import User from '../Layout/User'

const { Header, Footer, Sider, Content } = Layout

const Root: React.FC = () => {
  const session = useSelector<RootState>(state => state.session) as SessionInitialState
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
              icon: '',
              label: 'nav 1'
            },
            {
              key: '2',
              icon: '',
              label: 'nav 2'
            },
            {
              key: '3',
              icon: '',
              label: 'nav 3'
            }
          ]}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header className='!bg-white !p-0'>
          <div className='flex justify-between'>
            <div className='px-6'>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger text-lg',
                onClick: () => setCollapsed(!collapsed)
              })}
            </div>
            <div className='flex items-center'>
              <User
                username={session.username}
              />
              <Language />
            </div>
          </div>
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
