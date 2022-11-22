import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {
  Avatar,
  Dropdown,
  Layout,
  Menu
} from 'antd'
import type { MenuProps } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  RightSquareOutlined,
  SettingOutlined,
  LockOutlined, GlobalOutlined
} from '@ant-design/icons'
import { COPYRIGHT } from '@/config'

const { Header, Footer, Sider, Content } = Layout

const Root: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const userDropDownMenus: MenuProps['items'] = [
    {
      key: 'settings',
      label: 'Settings',
      icon: <SettingOutlined />
    },
    {
      key: 'password',
      label: 'Password',
      icon: <LockOutlined />
    },
    {
      type: 'divider'
    },
    {
      key: 'logout',
      label: 'Logout',
      icon: <RightSquareOutlined />
    }
  ]

  const i18nDropDownMenus: MenuProps['items'] = [
    {
      key: 'en-US',
      label: 'English'
    },
    {
      key: 'zh-cn',
      label: '简体中文'
    }
  ]

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
        <Header className='!bg-white !p-0'>
          <div className='flex items-start justify-between'>
            <div className='px-6'>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger text-lg',
                onClick: () => setCollapsed(!collapsed)
              })}
            </div>
            <div className='flex items-center'>
              <Dropdown
                className='cursor-pointer'
                overlayClassName='w-40'
                menu={{
                  items: userDropDownMenus
                }}
              >
                <div className='flex items-center'>
                  <Avatar
                    size='small'
                    shape='square'
                    icon={<UserOutlined />}
                  />
                  <span className='px-2'>Admin</span>
                </div>
              </Dropdown>
              <Dropdown
                className='cursor-pointer mx-2 pr-4'
                overlayClassName='w-40'
                menu={{
                  items: i18nDropDownMenus
                }}
              >
                <GlobalOutlined />
              </Dropdown>
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
