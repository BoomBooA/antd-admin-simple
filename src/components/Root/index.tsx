import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import {
  Avatar,
  Dropdown,
  Layout,
  Menu
} from 'antd'
import { getI18n } from 'react-i18next'
import type { MenuProps } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGear,
  faKey,
  faRightFromBracket,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import SelectLanguage from '@/components/SelectLanguage'
import { COPYRIGHT } from '@/config'

const { Header, Footer, Sider, Content } = Layout

const Root: React.FC = () => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)

  const userDropDownMenus: MenuProps['items'] = [
    {
      key: 'settings',
      label: 'Settings',
      icon: (
        <FontAwesomeIcon
          className='text-lg'
          icon={faGear}
        />
      )
    },
    {
      key: 'password',
      label: 'Password',
      icon: (
        <FontAwesomeIcon
          className='text-lg'
          icon={faKey}
        />
      )
    },
    {
      type: 'divider'
    },
    {
      key: 'logout',
      label: 'Logout',
      icon: (
        <FontAwesomeIcon
          className='text-lg'
          icon={faRightFromBracket}
        />
      ),
      onClick: () => {
        navigate('/login')
      }
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
                    icon={
                      <FontAwesomeIcon icon={faUser} />
                    }
                  />
                  <span className='px-2'>Admin</span>
                </div>
              </Dropdown>
              <SelectLanguage />
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
