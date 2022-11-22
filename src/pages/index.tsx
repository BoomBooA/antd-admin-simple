import React from 'react'
import { useTranslation } from 'react-i18next'

const IndexPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <div>Index</div>
      <h1>{t('language')}</h1>
    </div>
  )
}

export default IndexPage
