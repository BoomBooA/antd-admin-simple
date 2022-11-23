import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { message, Spin } from 'antd'
import { SESSION_STORE_NAME } from '@/config'
import { getSession } from '@/services/session'

type AuthorizedProps = {
  children?: React.ReactNode
};

const Authorized: React.FC<AuthorizedProps> = ({ children }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    handleCheckSession()
  }, [])

  const handleCheckSession = async () => {
    const token = sessionStorage.getItem(SESSION_STORE_NAME)
    if (!token) {
      navigate('/login')
      return
    }

    try {
      // validate token is invalid
      const response = await getSession()
      if (response.code === 1) {
        dispatch({
          type: 'session/update',
          payload: {
            ...response.data
          }
        })

        setLoading(false)

        return
      }

      message.error({
        content: response.message
      })
    } catch (e) {

    }
  }

  if (loading) {
    return (
      <div className='w-screen h-screen grid justify-center items-center'>
        <Spin
          className='text-2xl'
          size='large'
          tip={t('loading')}
        />
      </div>
    )
  }

  return (
    <div>
      {children}
    </div>
  )
}

export default Authorized
