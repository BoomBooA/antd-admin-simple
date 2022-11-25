import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Layout, Menu } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
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
      <div
        className='h-screen transition-all ease-in-out'
        style={{
          width: collapsed ? 80 : 200
        }}
      >
        <Sider
          className='h-full !fixed !overflow-auto'
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
      </div>
      <div className='flex-1'>
        <Layout className='site-layout'>
          <Header className='!bg-white !p-0'>
            <div className='flex justify-between'>
              <div className='px-6'>
                <FontAwesomeIcon
                  className='trigger text-lg'
                  icon={collapsed ? solid('square-caret-right') : solid('square-caret-left')}
                  onClick={() => setCollapsed(!collapsed)}
                />
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
            <div className='h-full'>
              <Outlet />
            </div>
          </Content>
          <Footer className='text-center'>
            {COPYRIGHT}
          </Footer>
        </Layout>
      </div>
    </Layout>
  )
}

export default Root
