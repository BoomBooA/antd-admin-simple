import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Avatar, Dropdown, MenuProps } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faKey, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'

interface UserProps {
  avatar?: string
  username?: string
}

const User: React.FC<UserProps> = ({
  avatar,
  username
}) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const dropDownMenus: MenuProps['items'] = [
    {
      key: 'settings',
      label: t('menu.settings'),
      icon: (
        <FontAwesomeIcon
          className='text-lg'
          icon={faGear}
        />
      ),
      onClick: () => {
        navigate('/settings/basic')
      }
    },
    {
      key: 'password',
      label: t('menu.password'),
      icon: (
        <FontAwesomeIcon
          className='text-lg'
          icon={faKey}
        />
      ),
      onClick: () => {
        navigate('/settings/password')
      }
    },
    {
      type: 'divider'
    },
    {
      key: 'logout',
      label: t('menu.logout'),
      icon: (
        <FontAwesomeIcon
          className='text-lg'
          icon={faRightFromBracket}
        />
      ),
      onClick: () => {
        dispatch({
          type: 'session/destroy'
        })
        navigate('/login')
      }
    }
  ]

  return (
    <Dropdown
      className='cursor-pointer'
      overlayClassName='w-40'
      menu={{
        items: dropDownMenus
      }}
    >
      <div className='flex items-center'>
        {avatar ? (
          <Avatar
            size='small'
            shape='square'
            src={avatar}
          />
        ) : (
          <Avatar
            size='small'
            shape='square'
            icon={
              <FontAwesomeIcon icon={faUser} />
            }
          />
        )}

        <span className='px-2'>{username}</span>
      </div>
    </Dropdown>
  )
}

export default User
