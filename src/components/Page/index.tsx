import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Breadcrumb, Card } from 'antd'
import split from 'lodash/split'
import map from 'lodash/map'
import replace from 'lodash/replace'

type PageProps = {
  children?: React.ReactNode
  title: string
}

const Page: React.FC<PageProps> = ({
  children,
  title
}) => {
  const location = useLocation()
  const { t } = useTranslation()

  const layers = split(location.pathname, '/').map(item => replace(item, '/', '')).filter(item => item)
  const breadcrumbs = layers.reduce((prev: any[], key, index) => {
    const target = prev.filter(item => item)

    if (index === 0) {
      return [
        {
          label: `page.${key}`,
          url: `/${key}`
        }
      ]
    }

    return [
      ...prev,
      {
        label: `${target.map(item => item.label).join('.')}.${key}`,
        url: `${target.map(item => item.url).join('/')}/${key}`
      }
    ]
  }, [])

  return (
    <div>
      <div className='grid grid-cols-2'>
        <h1 className='text-2xl'>{title}</h1>
        <div className='flex items-center justify-end'>
          <Breadcrumb>
            {map(breadcrumbs, item => (
              <Breadcrumb.Item key={item.label}>
                <Link to={item.url}>
                  {t(item.label)}
                </Link>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
      </div>
      <Card
        className='mt-4'
        bodyStyle={{
          paddingTop: 0,
          paddingBottom: 0
        }}
      >
        {children}
      </Card>
    </div>
  )
}

export default Page
