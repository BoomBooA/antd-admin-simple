import React from 'react'
import { getI18n } from 'react-i18next'
import { Dropdown, MenuProps } from 'antd'
import get from 'lodash/get'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

const SelectLanguage: React.FC = () => {
  const i18Instance = getI18n()
  const resources = i18Instance.options.resources || {}
  const dropdownItems: MenuProps['items'] = Object.keys(resources).map(language => ({
    key: language,
    label: get(resources, `${language}.translation.language`, '') as String
  }))

  return (
    <Dropdown
      className='cursor-pointer'
      overlayClassName='w-40'
      menu={{
        items: dropdownItems
      }}
    >
      <FontAwesomeIcon
        className='text-lg'
        icon={faLanguage}
      />
    </Dropdown>
  )
}

export default SelectLanguage
