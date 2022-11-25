import React from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Layout, Menu } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { COPYRIGHT } from '@/config'
import { RootState } from '@/store'
import { AppInitialState } from '@/store/app'
import { SessionInitialState } from '@/store/session'
import Language from '../Layout/Language'
import User from '../Layout/User'

const { Header, Footer, Sider, Content } = Layout

const Root: React.FC = () => {
  const app = useSelector<RootState>(state => state.app) as AppInitialState
  const session = useSelector<RootState>(state => state.session) as SessionInitialState
  const dispatch = useDispatch()

  const {
    collapsed,
    menus
  } = app

  /**
   *
   * @param value
   */
  const handleChangeCollapsed = (value: boolean) => {
    dispatch({
      type: 'app/update',
      payload: {
        key: 'collapsed',
        value
      }
    })
  }

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
          collapsed={app.collapsed}
          onBreakpoint={(broken) => handleChangeCollapsed(broken)}
        >
          <div className='bg-slate-500 h-8 mx-4 my-4' />
          <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={[]}
            items={menus}
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
                  onClick={() => handleChangeCollapsed(!collapsed)}
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
